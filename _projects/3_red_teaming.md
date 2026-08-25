---
layout: page
title: Multilingual Red-Teaming
description: probing safety limitations of frontier and open-weight LLMs
img:
importance: 3
category: research
---

Research work at **IIT Kharagpur** on identifying and analyzing the safety limitations of large language models through systematic red-teaming.

## What the work involved

- Constructing custom **multilingual prompts** to probe safety behavior across ChatGPT, Gemini, Nous-Hermes, Mixtral Instruct, Cohere Coral, and other models — testing the hypothesis that safety training generalizes unevenly across languages.
- Implementing several chain-of-thought strategies aimed at strengthening model robustness and ethical application, rather than only demonstrating failures.
- Writing custom Python evaluation harnesses to score model outputs automatically, cross-evaluating results with multiple sentiment models from HuggingFace instead of relying on a single judge.

The evaluation-harness half of this project is what pulled me toward alignment work generally: finding a failure is cheap, and measuring whether a fix actually held is the hard part.
