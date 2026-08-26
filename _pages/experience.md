---
layout: page
permalink: /experience/
title: experience
description: industry roles and research internships, in reverse chronological order.
nav: true
nav_order: 3
---

<style>
  .xp-list { margin: 0; padding: 0; list-style: none; }
  .xp-item {
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: 1.25rem;
    padding: 1.6rem 0;
    border-top: 1px solid var(--global-divider-color);
    align-items: start;
  }
  .xp-item:first-child { border-top: none; padding-top: .6rem; }
  .xp-logo {
    width: 64px; height: 64px; border-radius: 14px;
    display: block; object-fit: contain; background: transparent;
  }
  .xp-head {
    display: flex; flex-wrap: wrap; align-items: baseline;
    gap: .5rem 1rem; justify-content: space-between;
  }
  .xp-company { font-size: 1.18rem; font-weight: 700; line-height: 1.25; margin: 0; }
  .xp-dates {
    font-size: .82rem; letter-spacing: .02em; white-space: nowrap;
    color: var(--global-text-color); opacity: .68; font-variant-numeric: tabular-nums;
  }
  .xp-role { margin: .15rem 0 .1rem; font-size: .97rem; color: var(--global-theme-color); font-weight: 600; }
  .xp-meta { margin: 0 0 .6rem; font-size: .84rem; color: var(--global-text-color); opacity: .68; }
  .xp-points { margin: .5rem 0 0; padding-left: 1.1rem; }
  .xp-points li { margin-bottom: .4rem; line-height: 1.55; }
  .xp-stack { margin-top: .7rem; display: flex; flex-wrap: wrap; gap: .35rem; }
  .xp-tag {
    font-size: .72rem; padding: .17rem .55rem; border-radius: 999px;
    border: 1px solid var(--global-divider-color); color: var(--global-text-color); opacity: .68;
    white-space: nowrap;
  }
  .xp-section-title { margin: 2.6rem 0 .2rem; font-size: 1.05rem; letter-spacing: .06em; text-transform: uppercase; color: var(--global-text-color); opacity: .68; }
  .xp-section-title:first-of-type { margin-top: 1rem; }
  @media (max-width: 576px) {
    .xp-item { grid-template-columns: 44px 1fr; gap: .85rem; }
    .xp-logo { width: 44px; height: 44px; border-radius: 10px; }
    .xp-dates { white-space: normal; }
  }
</style>

<h2 class="xp-section-title">Industry</h2>

<ul class="xp-list">
  <li class="xp-item">
    <img class="xp-logo" src="{{ '/assets/img/logos/amazon.svg' | relative_url }}" alt="Amazon logo" loading="lazy" />
    <div>
      <div class="xp-head">
        <p class="xp-company">Amazon</p>
        <span class="xp-dates">May 2026 – Aug 2026</span>
      </div>
      <p class="xp-role">Software Development Engineer Intern · Alexa Audio</p>
      <p class="xp-meta">Seattle, WA</p>
      <ul class="xp-points">
        <li>Built <strong>A3LS</strong>, an accent-audio testing service generating TTS across 13 accents and scoring per-accent ASR degradation (WER/AIER), via a Step Functions pipeline that fans out over tens of thousands of (utterance × accent) items per run.</li>
        <li>Shipped a React/Cloudscape analytics dashboard over a CloudWatch metrics API, surfacing per-accent WER/AIER, latency percentiles, and GPU/concurrency, with skeleton loading and caching for instant loads.</li>
        <li>Authored HLD/LLD design docs and drove cross-team design reviews to integrate an accent dimension for injecting synthetic audio into production ASR test runs.</li>
        <li>Delivered across 80+ code reviews spanning 4 Brazil packages, owning CI/CD via Pipelines/Apollo.</li>
      </ul>
      <div class="xp-stack">
        <span class="xp-tag">Java</span><span class="xp-tag">AWS Step Functions</span><span class="xp-tag">Lambda</span><span class="xp-tag">Smithy</span><span class="xp-tag">CDK</span><span class="xp-tag">React</span><span class="xp-tag">CloudWatch</span>
      </div>
    </div>
  </li>

  <li class="xp-item">
    <img class="xp-logo" src="{{ '/assets/img/logos/nomura.svg' | relative_url }}" alt="Nomura logo" loading="lazy" />
    <div>
      <div class="xp-head">
        <p class="xp-company">Nomura</p>
        <span class="xp-dates">Jan 2025 – Jun 2025</span>
      </div>
      <p class="xp-role">Software Engineering Intern</p>
      <p class="xp-meta">Mumbai, India</p>
      <ul class="xp-points">
        <li>Worked on an internal budgeting and financial planning application used across multiple teams.</li>
        <li>Resolved over 40 JIRA tickets in 6 months, focusing on performance improvements, bug fixes, and user experience.</li>
        <li>Delivered features using React on the frontend and Spring Boot for backend services.</li>
        <li>Collaborated within an Agile team, using Jenkins for CI/CD and SQL for data-layer operations.</li>
      </ul>
      <div class="xp-stack">
        <span class="xp-tag">React</span><span class="xp-tag">Java Spring Boot</span><span class="xp-tag">SQL</span><span class="xp-tag">Jenkins</span><span class="xp-tag">Agile</span>
      </div>
    </div>
  </li>

  <li class="xp-item">
    <img class="xp-logo" src="{{ '/assets/img/logos/aiassistant.svg' | relative_url }}" alt="AIAssistant Startup logo" loading="lazy" />
    <div>
      <div class="xp-head">
        <p class="xp-company">AIAssistant Startup</p>
        <span class="xp-dates">Aug 2024 – Dec 2024</span>
      </div>
      <p class="xp-role">Backend Intern</p>
      <p class="xp-meta">California · Remote</p>
      <ul class="xp-points">
        <li>Developed backend solutions for multiple clients at a startup focused on voice and agentic AI.</li>
        <li>Built integrations across Twilio, Deepgram, and ElevenLabs.</li>
        <li>Produced prototypes for client demos, including call summarization, healthcare assistants, and lead-generation voice systems.</li>
      </ul>
      <div class="xp-stack">
        <span class="xp-tag">FastAPI</span><span class="xp-tag">Python</span><span class="xp-tag">Twilio</span><span class="xp-tag">Deepgram</span><span class="xp-tag">ElevenLabs</span>
      </div>
    </div>
  </li>

  <li class="xp-item">
    <img class="xp-logo" src="{{ '/assets/img/logos/ey.svg' | relative_url }}" alt="Ernst &amp; Young logo" loading="lazy" />
    <div>
      <div class="xp-head">
        <p class="xp-company">Ernst &amp; Young</p>
        <span class="xp-dates">May 2024 – Aug 2024</span>
      </div>
      <p class="xp-role">Data and GenAI Intern</p>
      <p class="xp-meta">Pune, India</p>
      <ul class="xp-points">
        <li>Worked on business and technical solutions for Fortune 100 clients driven by Generative AI.</li>
        <li>Developed a chatbot with a <strong>RAG pipeline over 10,000+ documents</strong>, improving search efficiency by 200% via metadata filters that narrowed the search space from 10,000 documents to 50.</li>
      </ul>
      <div class="xp-stack">
        <span class="xp-tag">RAG</span><span class="xp-tag">Python</span><span class="xp-tag">GenAI</span><span class="xp-tag">Vector Search</span>
      </div>
    </div>
  </li>

  <li class="xp-item">
    <img class="xp-logo" src="{{ '/assets/img/logos/jio.svg' | relative_url }}" alt="Jio Platforms logo" loading="lazy" />
    <div>
      <div class="xp-head">
        <p class="xp-company">Jio Platforms Limited</p>
        <span class="xp-dates">May 2023 – Jul 2023</span>
      </div>
      <p class="xp-role">Artificial Intelligence Intern</p>
      <p class="xp-meta">Mumbai, India</p>
      <ul class="xp-points">
        <li>Worked on "Improving Operations with AI," focused on improving business operations using advanced AI.</li>
        <li>Designed and deployed recommendation algorithms, including Apriori, to enrich decision-making.</li>
        <li>Built a web application presenting the implemented features to key stakeholders.</li>
      </ul>
      <div class="xp-stack">
        <span class="xp-tag">Python</span><span class="xp-tag">Recommender Systems</span><span class="xp-tag">Apriori</span>
      </div>
    </div>
  </li>
</ul>

<h2 class="xp-section-title">Research Labs</h2>

<ul class="xp-list">
  <li class="xp-item">
    <img class="xp-logo" src="{{ '/assets/img/logos/iitkgp.svg' | relative_url }}" alt="IIT Kharagpur logo" loading="lazy" />
    <div>
      <div class="xp-head">
        <p class="xp-company">IIT Kharagpur</p>
        <span class="xp-dates">Apr 2024 – Aug 2024</span>
      </div>
      <p class="xp-role">Research Intern · Prompting and LLMs</p>
      <p class="xp-meta">Remote · Pune, India</p>
      <ul class="xp-points">
        <li>Participated in red-teaming to identify and analyze safety limitations and vulnerabilities of LLMs.</li>
        <li>Implemented chain-of-thought strategies to strengthen LLM robustness and ethical application, with custom Python scripts for automated output evaluation.</li>
        <li>Evaluated jailbreak robustness across ChatGPT, Gemini, Nous-Hermes, Mixtral Instruct, and Cohere Coral using custom multilingual prompts, cross-evaluating with multiple HuggingFace sentiment models.</li>
      </ul>
      <div class="xp-stack">
        <span class="xp-tag">Red-Teaming</span><span class="xp-tag">LLM Evaluation</span><span class="xp-tag">Python</span><span class="xp-tag">HuggingFace</span>
      </div>
    </div>
  </li>

  <li class="xp-item">
    <img class="xp-logo" src="{{ '/assets/img/logos/iitindore.svg' | relative_url }}" alt="IIT Indore logo" loading="lazy" />
    <div>
      <div class="xp-head">
        <p class="xp-company">IIT Indore</p>
        <span class="xp-dates">Jan 2024 – Apr 2024</span>
      </div>
      <p class="xp-role">Research Intern · Natural Language Processing</p>
      <p class="xp-meta">Remote · Pune, India</p>
      <ul class="xp-points">
        <li>Extracted critical information from disaster-related tweets using advanced text summarization, reducing a dataset of 3,000 tweets to the 40 most crucial.</li>
        <li>Applied large language models and integer linear programming to improve summarization accuracy and efficiency.</li>
        <li>Engineered a flood detection project applying segmentation techniques to improve classification outcomes.</li>
      </ul>
      <div class="xp-stack">
        <span class="xp-tag">NLP</span><span class="xp-tag">Summarization</span><span class="xp-tag">ILP</span><span class="xp-tag">Segmentation</span>
      </div>
    </div>
  </li>

  <li class="xp-item">
    <img class="xp-logo" src="{{ '/assets/img/logos/drdo.svg' | relative_url }}" alt="DRDO logo" loading="lazy" />
    <div>
      <div class="xp-head">
        <p class="xp-company">RCI — DRDO</p>
        <span class="xp-dates">Jul 2023 – Aug 2023</span>
      </div>
      <p class="xp-role">Machine Learning Intern</p>
      <p class="xp-meta">Hyderabad, India</p>
      <ul class="xp-points">
        <li>Used Splunk and Kafka to improve the system's security measures.</li>
        <li>Performed log analysis and anomaly detection on <strong>over one million logs</strong>, reducing major outliers to a few hundred; the proof of concept was showcased to senior scientists for possible production deployment.</li>
        <li>Applied One-Class SVM, KMeans, and Isolation Forests to improve detection accuracy.</li>
        <li>Developed a dynamic web application with Flask, Bootstrap, and vanilla JS.</li>
      </ul>
      <div class="xp-stack">
        <span class="xp-tag">Anomaly Detection</span><span class="xp-tag">Splunk</span><span class="xp-tag">Kafka</span><span class="xp-tag">scikit-learn</span><span class="xp-tag">Flask</span>
      </div>
    </div>
  </li>
</ul>

<p style="margin-top: 2.2rem; font-size: .9rem;">
  For education, publications, and skills, see the <a href="{{ '/cv/' | relative_url }}">full CV</a>.
</p>
