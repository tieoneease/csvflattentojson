const parse = require("csv-parse/lib/sync");
const fs = require("fs");
const path = require("path");

try {
  const args = process.argv.slice(2);
  const words = fs.readFileSync(path.resolve(__dirname, args[0]), "utf8");
  const records = parse(words, {
    skip_empty_lines: true,
  });
  const wordList = { words: records.flat(1).filter((word) => word !== "") };
  fs.writeFileSync(`./${args[0].split("-")[0]}.json`, JSON.stringify(wordList));
  console.log("Wrote file.");
} catch (e) {
  console.log("Error:", e.stack);
}
