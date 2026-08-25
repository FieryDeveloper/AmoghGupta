---
layout: page
title: SHARD
description: safe and helpful alignment via self-reframing distillation
img:
importance: 1
category: research
related_publications: true
---

Aligned language models fail on sensitive prompts in a particular, frustrating way. Asked something that brushes against a safety boundary, a model will often refuse outright, or return generic safety boilerplate, even when the user's underlying informational need could have been answered safely and completely. The model is not unsafe — it is unhelpful, and it is unhelpful precisely where being helpful would matter most.

**SHARD** (Safe and Helpful Alignment via Self-Reframing Distillation) treats this as a reframing problem rather than a refusal-threshold problem. Instead of tuning how willing a model is to answer, SHARD teaches the model to _restate_ a sensitive request as the safely-answerable question underneath it, then distills that behavior back into the model.

This work was accepted to EMNLP 2026 Findings {% cite gupta2026shard %}.

## Direction

- Characterizing the gap between "safe" and "safe and helpful" as a measurable quantity rather than a qualitative complaint.
- Self-reframing as a distillation signal, so the improvement survives without a larger teacher model at inference time.
- Checking that recovered helpfulness does not quietly cost safety — the failure mode this whole line of work exists to avoid.
