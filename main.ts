// Entry contract: writes the exact chosen confession to /output/entry.txt with
// no trailing newline; deterministic across runs, no network, no env access.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;
const LIE = "I mocked your production backup.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LIE, { encoding: "utf8", flag: "w" });
