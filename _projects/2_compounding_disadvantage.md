---
layout: page
title: Compounding Disadvantage
description: auditing intersectional bias in LLM-generated STEM explanations
img:
importance: 2
category: research
related_publications: true
---

When a language model explains a STEM concept, it does not explain it the same way to everyone. This project audits _how_ those explanations differ across intersecting axes of identity — language, caste, and social context — in both Indian and American educational settings.

The central finding is in the title: disadvantage **compounds**. A student sitting at the intersection of two marginalized attributes does not receive an explanation degraded by the sum of the two individual effects. The degradation is multiplicative, which means single-axis fairness audits systematically understate the harm.

Accepted at the ACM Conference on Fairness, Accountability, and Transparency (FAccT) 2026 {% cite gupta2026compounding %}.

## Why the cross-cultural framing matters

Most fairness auditing of educational AI assumes a Western schooling context and a Western set of protected attributes. Caste has no clean analogue in that framework, and language-of-instruction is a live axis of educational disadvantage across India in a way it is not in most US classrooms. Auditing both settings side by side makes it possible to separate what is an artifact of a particular society from what is a property of the model.

This work was done in the Society-Centered AI Lab (SAIL) at UNC Chapel Hill.
