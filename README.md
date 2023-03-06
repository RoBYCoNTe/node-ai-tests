# Node AI Tests 🧪

The scope of this project is to build a simple CLI to test different kind of AI
models using nodejs and tensorflow (or other frameworks or API found during
my research).

## Installation

```bash
npm i
```

## Labs

### @tensorflow/qna

This is a simple test to use the tfjs library to build a simple QnA model.
You can provide your own context of information and then ask a question to
the model:

```bash
node labs/qna.js \
	--context "The capital of Italy is Rome" \
	--question "What is the capital of Italy?"
```

### huggingface.co 🫣

I really appreciate the work of the huggingface team. They provide a lot of
models that can be used to test inference with sample images.

This CLI is a simple way to test them with my primary
goal to recognize clothes inside images.

Basic usage of the CLI:

```bash
node labs/huggingface.js --apiKey <?> --inputImage <?> --outputImage <?>
```
