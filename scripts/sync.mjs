#!/usr/bin/env node
/**
 * XPICE auto-sync
 * Observa a pasta do projeto e, a cada alteração salva, faz
 * commit + push automaticamente. A Vercel reimplanta a cada push.
 *
 * Uso:  npm run sync   (deixe rodando enquanto trabalha; Ctrl+C para parar)
 */
import chokidar from "chokidar";
import { spawn } from "node:child_process";

const DEBOUNCE_MS = 2500;
let timer = null;
let running = false;
let pending = false;

// Executa um comando sem shell (args em array) — evita injeção de shell.
function run(cmd, args) {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { cwd: process.cwd() });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => (stdout += d));
    child.stderr.on("data", (d) => (stderr += d));
    child.on("close", (code) => resolve({ code, stdout, stderr }));
    child.on("error", (err) => resolve({ code: 1, stdout, stderr: String(err) }));
  });
}

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(
    d.getMinutes()
  )}:${p(d.getSeconds())}`;
}

async function sync() {
  if (running) {
    pending = true;
    return;
  }
  running = true;

  const status = await run("git", ["status", "--porcelain"]);
  if (!status.stdout.trim()) {
    running = false;
    return;
  }

  const ts = stamp();
  await run("git", ["add", "-A"]);
  const commit = await run("git", [
    "commit",
    "-m",
    `chore: auto-sync ${ts}`,
    "-m",
    "Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
  ]);

  const combined = commit.stdout + commit.stderr;
  if (commit.code !== 0 && !/nothing to commit/i.test(combined)) {
    console.error("✗ commit falhou:\n" + combined.trim());
    running = false;
    return;
  }

  const push = await run("git", ["push", "origin", "HEAD"]);
  if (push.code !== 0) {
    console.error("✗ push falhou:\n" + (push.stderr || push.stdout).trim());
  } else {
    console.log(`✓ ${ts} — commit + push enviados · Vercel vai reimplantar`);
  }

  running = false;
  if (pending) {
    pending = false;
    schedule();
  }
}

function schedule() {
  clearTimeout(timer);
  timer = setTimeout(sync, DEBOUNCE_MS);
}

const watcher = chokidar.watch(".", {
  ignored: (p) =>
    /(^|[\\/])\.git([\\/]|$)/.test(p) ||
    /node_modules/.test(p) ||
    /[\\/]\.next([\\/]|$)/.test(p) ||
    /[\\/]\.vercel([\\/]|$)/.test(p) ||
    /[\\/]\.playwright-mcp([\\/]|$)/.test(p) ||
    /\.DS_Store$/.test(p) ||
    /\.log$/.test(p),
  ignoreInitial: true,
  persistent: true,
  awaitWriteFinish: { stabilityThreshold: 400, pollInterval: 100 },
});

watcher.on("all", (event, path) => {
  console.log(`• ${event}: ${path}`);
  schedule();
});

watcher.on("ready", () =>
  console.log(
    "👀 XPICE auto-sync ativo — salve qualquer arquivo e ele faz commit + push → deploy na Vercel.\n   (Ctrl+C para parar)"
  )
);
