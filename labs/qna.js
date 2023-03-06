import "@tensorflow/tfjs-node";

import { parseArgs } from "node:util";
import qna from "@tensorflow-models/qna";

const {
  values: { context, question },
} = parseArgs({
  options: {
    context: {
      type: "string",
      short: "c",
    },
    question: {
      type: "string",
      short: "q",
    },
  },
});

if (!context || !question) {
  console.error(
    [
      "Invalid arguments.",
      "Usage: npm run qna -c <context> -q <question>",
    ].join("\n")
  );
  process.exit(1);
}

console.info("Loading model, this may take a few seconds...");

const model = await qna.load();
const answers = await model.findAnswers(question, context);
console.info(question, answers?.[0]?.text || "No Answer :-(");
