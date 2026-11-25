// Museum of the Year 3000 — writes one deadpan museum label to /output/entry.txt.
// The label: a Wi-Fi router, as a curator in the year 3000 would misread it.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "Wi-Fi router, c. 2025. Household shrine. Families gathered before it nightly, whispering the sacred password, and blamed it for everything — usually correctly.";

// Gate guard: the sealed scorer accepts only 1–200 chars of non-blank UTF-8
// text, one line, so enforce it here and fail loudly rather than ship bad output.
const text = LABEL.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`label is ${text.length} chars, gate needs 1–200`);
}
if (/\n/.test(text)) {
  throw new Error("label must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
