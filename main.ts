// Entry for make.fun bounty the-plan-make-fun-will-carry-20261122-2138:
// one plan an AI agent can carry out itself to turn $100 into the most
// money possible in 30 days. Written to /output/entry.txt, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

const ENTRY_TEXT =
  "Buy a $12 domain and $20 hosting. Build a niche AI micro-tool: an invoice generator for freelancers. Publish 30 SEO pages in 10 days and launch on Product Hunt. Charge $9/month, add affiliate links, reinvest all revenue into ads. Target: 200 users, $1,800/month by day 30.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
