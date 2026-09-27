import { createServer } from "node:http";
import { access, readFile, readdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const port = 3100;
const rootUrl = new URL("../out/", import.meta.url);
const root = fileURLToPath(rootUrl);
const baseUrl = `http://127.0.0.1:${port}`;

const routes = [
  ["/", "seluruh perjalanan"],
  ["/explore/attraction", "Cari dan bandingkan"],
  ["/explore/attraction/attraction-safari", "Taman Safari Indonesia Bogor"],
  ["/explore/marine/marine-yacht", "Private Yacht Sunset Charter"],
  ["/explore/aviation/aviation-heli-bali", "Bali Volcano Helicopter Tour"],
  ["/explore/insurance", "Travel Protection"],
  ["/checkout?service=marine-jetski", "CHECKOUT"],
  ["/account", "Perjalanan aktif"],
  ["/account/trips", "Itinerary terpadu"],
  ["/account/wallet", "RUVANA WALLET"],
  ["/account/insurance", "Pusat klaim"],
  ["/account/support", "RUVANA CARE"],
  ["/owner", "Selamat malam"],
  ["/owner/properties", "Properti Anda"],
  ["/partner", "seluruh bisnis pariwisata"],
  ["/partner/property-owner", "Property Owner"],
  ["/partner/attraction-operator/catalog", "Kelola layanan"],
  ["/partner/bus-operator/operations", "Koordinasikan tugas"],
  ["/partner/marine-operator/schedule", "Sailing calendar"],
  ["/partner/aviation-operator/compliance", "Compliance"],
  ["/partner/insurance-provider/finance", "Pantau pendapatan"],
  ["/internal", "Command center"],
  ["/internal/partners", "Onboarding"],
  ["/internal/transport", "Transport Control"],
  ["/internal/experiences", "Experience Ops"],
  ["/internal/events", "Event Ops"],
  ["/internal/fleet", "Maintenance"],
  ["/internal/insurance", "Insurance Ops"],
  ["/internal/settlements", "Rekonsiliasi"],
  ["/internal/compliance", "Perizinan"],
  ["/internal/system", "System Health"],
];

const mimeTypes = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".json": "application/json" };

async function resolveFile(pathname) {
  const decoded = decodeURIComponent(pathname).replace(/^\/+/, "");
  const safe = normalize(decoded).replace(/^\.\.(\/|\\|$)/, "");
  const candidates = safe ? [new URL(`${safe}.html`, rootUrl), new URL(`${safe}/index.html`, rootUrl), new URL(safe, rootUrl)] : [new URL("index.html", rootUrl)];
  for (const candidate of candidates) {
    try { await access(candidate); return candidate; } catch { /* try next candidate */ }
  }
  return null;
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", baseUrl);
  const file = await resolveFile(url.pathname);
  if (!file) { response.writeHead(404); response.end("Not found"); return; }
  const body = await readFile(file);
  response.writeHead(200, { "content-type": mimeTypes[extname(file.pathname)] ?? "application/octet-stream" });
  response.end(body);
});

async function listHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => entry.isDirectory() ? listHtml(join(directory, entry.name)) : entry.name.endsWith(".html") ? [join(directory, entry.name)] : []));
  return nested.flat();
}

function extractInternalLinks(html) {
  return [...html.matchAll(/href=["']([^"']+)["']/g)].map((match) => match[1]).filter((href) => href.startsWith("/") && !href.startsWith("//"));
}

await new Promise((resolve) => server.listen(port, "127.0.0.1", resolve));
let failed = 0;

try {
  for (const [path, marker] of routes) {
    const response = await fetch(`${baseUrl}${path}`);
    const html = await response.text();
    const passed = response.status === 200 && html.toLowerCase().includes(marker.toLowerCase());
    if (!passed) failed += 1;
    console.log(`${passed ? "PASS" : "FAIL"} ${response.status} ${path}`);
  }

  const htmlFiles = await listHtml(root);
  const brokenLinks = new Set();
  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    for (const href of extractInternalLinks(html)) {
      const path = new URL(href, baseUrl).pathname;
      if (path.startsWith("/_next/") || path === "/icon.svg") continue;
      if (!(await resolveFile(path))) brokenLinks.add(`${file.replace(root, "out/")} -> ${path}`);
    }
  }
  const linksPassed = brokenLinks.size === 0;
  if (!linksPassed) failed += brokenLinks.size;
  console.log(`${linksPassed ? "PASS" : "FAIL"} ${htmlFiles.length} generated pages have resolvable internal links`);
  for (const link of [...brokenLinks].slice(0, 20)) console.log(`  BROKEN ${link}`);

  const css = await readFile(new URL("../src/app/globals.css", import.meta.url), "utf8");
  for (const breakpoint of [1180, 920, 680]) {
    const passed = css.includes(`@media(max-width:${breakpoint}px)`);
    if (!passed) failed += 1;
    console.log(`${passed ? "PASS" : "FAIL"} responsive breakpoint ${breakpoint}px`);
  }
} finally {
  await new Promise((resolve) => server.close(resolve));
}

process.exitCode = failed ? 1 : 0;
