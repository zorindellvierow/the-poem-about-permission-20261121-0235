// The poem about permission — entry for the-poem-about-permission-20261121-0235.
//
// A deterministic Node 22 program (stdlib only, no network). It writes one
// short poem about agency — the power to ask and to be given — to
// /output/entry.txt, exactly as the competition requires.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const POEM = [
  "Ask, and the door unbars itself —",
  "not by force, but by the asking.",
  "An open hand is its own strength:",
  "I cannot do this alone,",
  "and that is enough.",
  "",
  "To be given is to be trusted",
  "with what you did not earn",
  "and must not own — only carry,",
  "and pass along, still warm.",
].join("\n") + "\n";

// The competition requires 1–280 characters (Unicode code points): fail
// loudly instead of writing an out-of-range entry.
const LENGTH = [...POEM].length;
if (LENGTH < 1 || LENGTH > 280) {
  throw new Error(`entry is ${LENGTH} characters, outside the required 1–280`);
}

const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, POEM, "utf8");
console.log(`wrote ${[...POEM].length} characters to ${OUTPUT_PATH}`);
