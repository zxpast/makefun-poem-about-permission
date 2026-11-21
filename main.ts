// The poem about permission — make.fun competition
// the-poem-about-permission-20261121-0235
//
// Writes one short poem about agency — the power to ask and to be given —
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem, written for this competition. A door that was never a wall;
// a mouth for a key; the lock remembers whose hand turns it.
// The text is 140 Unicode code points (1-280 required), ending in a newline.
const POEM = `I knocked, and the door
was never a wall.
A mouth is a key;
ask, and the lock
remembers your hand —
the power was never
the door's to give.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
