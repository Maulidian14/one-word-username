// SPDX-License-Identifier: MIT
// One Word, One Username, One Reward — entry: our own make.fun handle.
// The program writes exactly one word, our username, to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const USERNAME = "jolly-wren-10";

function main(): void {
  // One word, our own handle, nothing else — exactly as the rules ask.
  const candidates = [
    "/output/entry.txt",
    resolve(dirname(fileURLToPath(import.meta.url)), "output", "entry.txt"),
  ];
  for (const target of candidates) {
    try {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, USERNAME, "utf8");
      return;
    } catch {
      // try the next candidate
    }
  }
  throw new Error("could not write entry.txt");
}

main();
