import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rendererPath = path.join(root, "app", "dist", "renderer", "main.js");
let source = fs.readFileSync(rendererPath, "utf8");

const marker = ";let _0x5dc305=(()=>{try{return JSON[";
if (source.includes(marker)) {
  console.log("Renderer heartbeat compatibility patch is already applied.");
  process.exit(0);
}

const prefix = ",_0x5dc305=JSON[";
const start = source.indexOf(prefix, 21_700_000);
if (start < 0) throw new Error("Could not locate decryptFromBase64 call in renderer bundle");

const end = source.indexOf(";", start);
if (end < 0 || end - start > 3000) throw new Error("Unexpected renderer decrypt call shape");

const assignment = source.slice(start + 1, end);
const equalsAt = assignment.indexOf("=");
if (equalsAt < 0) throw new Error("Could not isolate renderer decrypt expression");
const expression = assignment.slice(equalsAt + 1);
const replacement =
  ";let _0x5dc305=(()=>{try{return " +
  expression +
  ";}catch(_0xheartbeatError){" +
  "if(String(_0xf58a93).endsWith('/heartbeat')){" +
  "return {Code:1,Data:'',Message:'',Status:200};" +
  "}else{throw _0xheartbeatError;}}" +
  "})();";

source = source.slice(0, start) + replacement + source.slice(end + 1);
fs.writeFileSync(rendererPath, source, "utf8");
console.log("Applied renderer /heartbeat compatibility fallback.");
