import huggingface from "./api/huggingface.js";
import paint from "./util/paint.js";
import { parseArgs } from "node:util";
import sharp from "sharp";

const {
  values: { apiKey, inputImage, outputImage },
} = parseArgs({
  options: {
    apiKey: {
      type: "string",
      short: "k",
    },
    inputImage: {
      type: "string",
      short: "i",
    },
    outputImage: {
      type: "string",
      short: "o",
    },
  },
});

if (!apiKey || !inputImage || !outputImage) {
  console.error(
    [
      "Invalid arguments.",
      "Usage: node huggingface.js -k <api-key> -i <input-image> -o <output-image>",
    ].join("\n")
  );
  process.exit(1);
}
const annotations = await huggingface.query(apiKey, inputImage);
if (annotations?.error) {
  console.error(annotations.error);
  process.exit(1);
}

await sharp(inputImage)
  .composite(paint.annotations(annotations))
  .toFile(outputImage);

console.info(`Image saved to ${outputImage}.`);
