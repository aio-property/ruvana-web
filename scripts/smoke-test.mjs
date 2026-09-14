import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";

const port = 3100;
const baseUrl = `http://127.0.0.1:${port}`;
const routes = [
  ["/", "RUVANA"],
  ["/search", "hunian cocok"],
  ["/property/verde-residence-sky-loft", "Verde Residence"],
  ["/checkout?property=verde-residence-sky-loft", "Tinjau perjalanan"],
  ["/bookings", "Pantau booking aktif"],
  ["/bookings/RUV-260920-8F31", "Informasi check-in"],
  ["/favorites", "Properti favorit"],
  ["/messages", "Inbox RUVANA"],
  ["/profile", "Kelola identitas"],
  ["/campaigns/weekend-city-escape", "Weekend"],
  ["/owner", "Selamat malam"],
  ["/owner/properties", "Properti Anda"],
  ["/owner/properties/KNG-1208", "Performa listing"],
  ["/owner/properties/new", "Informasi dasar"],
  ["/owner/reservations", "Seluruh reservasi"],
  ["/owner/calendar", "ketersediaan"],
  ["/owner/operations", "Operasional"],
  ["/owner/finance", "Mutasi terbaru"],
  ["/owner/campaigns", "Campaign properti"],
  ["/owner/campaigns/weekend-city-escape", "Performa harian"],
  ["/owner/inbox", "COMMUNICATION HUB"],
  ["/owner/settings", "Pengaturan bisnis"],
  ["/internal", "Command center"],
  ["/internal/supply", "Supply"],
  ["/internal/bookings", "Booking operations"],
  ["/internal/payments", "Payment"],
  ["/internal/risk", "Risk"],
  ["/internal/risk/RISK-8842", "Risk case review"],
  ["/internal/growth", "Growth"],
  ["/internal/support", "Support"],
  ["/internal/audit", "Audit"],
];

const server = spawn("pnpm", ["exec", "next", "start", "--hostname", "127.0.0.1", "--port", String(port)], {
  stdio: ["ignore", "pipe", "pipe"],
});
let serverLog = "";
server.stdout.on("data", (chunk) => { serverLog += chunk.toString(); });
server.stderr.on("data", (chunk) => { serverLog += chunk.toString(); });

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
  throw new Error("Production server tidak siap dalam 10 detik.");
}

let failed = 0;
try {
  await waitForServer();
  for (const [path, marker] of routes) {
    const response = await fetch(`${baseUrl}${path}`);
    const html = await response.text();
    const passed = response.status === 200 && html.toLowerCase().includes(marker.toLowerCase());
    if (!passed) failed += 1;
    console.log(`${passed ? "PASS" : "FAIL"} ${response.status} ${path}`);
  }

  const css = await readFile(new URL("../src/app/globals.css", import.meta.url), "utf8");
  for (const breakpoint of [1180, 920, 680]) {
    const passed = css.includes(`@media(max-width:${breakpoint}px)`);
    if (!passed) failed += 1;
    console.log(`${passed ? "PASS" : "FAIL"} responsive breakpoint ${breakpoint}px`);
  }
} finally {
  server.kill("SIGTERM");
}

if (failed && serverLog) console.error(`\nServer log:\n${serverLog}`);
process.exitCode = failed ? 1 : 0;
