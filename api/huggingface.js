import fs from "fs";

async function query(apiKey, filename) {
  const data = fs.readFileSync(filename);
  const response = await fetch(
    "https://api-inference.huggingface.co/models/valentinafeve/yolos-fashionpedia",
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      method: "POST",
      body: data,
    }
  );
  const result = await response.json();
  return result;
}

export default { query };
