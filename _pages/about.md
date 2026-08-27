---
layout: about
title: about
permalink: /
subtitle: MS Computer Science, <a href="https://cs.unc.edu/">UNC Chapel Hill</a>. LLM alignment, safe-helpfulness, and responsible AI.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>Department of Computer Science</p>
    <p>UNC Chapel Hill</p>
    <p>Chapel Hill, NC 27599</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a Master's student in Computer Science at the **University of North Carolina at Chapel Hill**, where I work on natural language processing and the alignment of large language models. My MS research advisor is **Prof. Snigdha Chaturvedi**, whose [Chaturvedi Lab](https://nlp.cs.unc.edu/) I work in on LLM alignment. Prior to this I worked in the Society-Centered AI Lab (SAIL) with [Dr. Neil Gaikwad](https://www.cs.unc.edu/~gaikwad/) on responsible AI. I also [teach and tutor]({{ '/teaching/' | relative_url }}) across the data science and computer science curricula.

My research asks a question I find genuinely unresolved: **how do we make a model safe without making it useless?** I work on **SHARD**, a self-reframing distillation method for safe-helpfulness, and on auditing how bias compounds in LLM-generated explanations.

That concern with evaluation came from building systems that had to work — most recently an accent-fairness testing service for speech recognition at **Amazon**, and before that engineering roles at **Nomura**, **Ernst & Young**, **Jio Platforms**, and **DRDO**.

<details class="bio-more">
<summary>More about my research, industry work, and background</summary>

<p>Aligned models frequently over-refuse — they decline a sensitive prompt outright, or return generic safety boilerplate, when the user's underlying information need could have been met safely. <strong>SHARD</strong> introduces self-reframing distillation as a way to recover that lost helpfulness without weakening safety. In parallel, I audit what alignment leaves behind: my FAccT 2026 paper shows how bias in LLM-generated educational explanations <em>compounds</em> across language, caste, and social context rather than simply adding up across Indian and American STEM settings.</p>

<p>At <strong>Amazon</strong>, on the Alexa Audio team, I built A3LS, an accent-audio testing service that synthesizes speech across 13 accents and measures how much speech-recognition accuracy degrades for each one — a fairness question wearing the clothes of an infrastructure problem. Before that I worked on budgeting and financial planning software at <strong>Nomura</strong>, built a retrieval pipeline over 10,000+ documents at <strong>Ernst &amp; Young</strong>, prototyped voice and agentic AI systems at an early-stage startup, deployed recommendation algorithms at <strong>Jio Platforms</strong>, and ran anomaly detection across more than a million logs at <strong>DRDO</strong>. What ties these together is that shipping something forces you to say precisely what "working" means, and that discipline transfers to alignment research more directly than I expected.</p>

<p>I completed my B.Tech in Computer Science at the <strong>Indian Institute of Information Technology Pune</strong>, graduating with Honors in Machine Learning ranked first in my batch, and placing consistently among the top three of 175 students. During my undergraduate years I was also a research intern at <strong>IIT Kharagpur</strong>, working on red-teaming and multilingual jailbreaks, and at <strong>IIT Indore</strong> on disaster-tweet summarization — the projects that first pulled me toward safety and evaluation as the questions I wanted to spend time on.</p>

</details>

I am always glad to hear from people working on alignment, evaluation, or responsible AI — feel free to [reach out](mailto:guam@unc.edu).

<style>
  /* expandable bio */
  .bio-more { margin: -0.35rem 0 1.1rem; }
  .bio-more > summary {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    width: auto;
    list-style: none;
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--global-theme-color);
    padding: 0.15rem 0;
  }
  .bio-more > summary::-webkit-details-marker { display: none; }
  .bio-more > summary::after {
    content: "";
    width: 0.42rem;
    height: 0.42rem;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg) translate(-1px, -1px);
    transition: transform 0.18s ease;
  }
  .bio-more[open] > summary::after { transform: rotate(-135deg) translate(-1px, -1px); }
  .bio-more > summary:hover { text-decoration: underline; }
  .bio-more > p { margin-top: 0.9rem; }

  .xp-mini-head {
    display: flex; align-items: baseline; justify-content: space-between;
    flex-wrap: wrap; gap: .4rem; margin: 2.2rem 0 .3rem;
  }
  .xp-mini-head h3 { margin: 0; font-size: 1.05rem; letter-spacing: .05em; text-transform: uppercase; color: var(--global-text-color); opacity: .68; }
  .xp-mini-head a { font-size: .85rem; white-space: nowrap; }
  .xp-mini { margin: 0; padding: 0; list-style: none; }
  .xp-mini li {
    display: grid; grid-template-columns: 46px 1fr; gap: .9rem;
    align-items: center; padding: .85rem 0;
    border-top: 1px solid var(--global-divider-color);
  }
  .xp-mini img {
    width: 46px; height: 46px; border-radius: 11px; display: block; object-fit: contain;
    background: #fff; padding: 5px; border: 1px solid var(--global-divider-color);
  }
  .xp-mini-row { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: .3rem 1rem; }
  .xp-mini-co { font-weight: 700; font-size: 1rem; }
  .xp-mini-when { font-size: .8rem; color: var(--global-text-color); opacity: .68; font-variant-numeric: tabular-nums; white-space: nowrap; }
  .xp-mini-role { font-size: .88rem; color: var(--global-text-color); opacity: .68; margin-top: .1rem; }
</style>

<div class="xp-mini-head">
  <h3>Recent experience</h3>
  <a href="{{ '/experience/' | relative_url }}">See all experience &rarr;</a>
</div>

<ul class="xp-mini">
  <li>
    <img src="{{ '/assets/img/logos/amazon.png' | relative_url }}" alt="Amazon logo" loading="lazy" />
    <div>
      <div class="xp-mini-row">
        <span class="xp-mini-co">Amazon</span>
        <span class="xp-mini-when">May 2026 &ndash; Aug 2026</span>
      </div>
      <div class="xp-mini-role">Software Development Engineer Intern &middot; Alexa Audio &middot; Seattle, WA</div>
    </div>
  </li>
  <li>
    <img src="{{ '/assets/img/logos/nomura.jpg' | relative_url }}" alt="Nomura logo" loading="lazy" />
    <div>
      <div class="xp-mini-row">
        <span class="xp-mini-co">Nomura</span>
        <span class="xp-mini-when">Jan 2025 &ndash; Jun 2025</span>
      </div>
      <div class="xp-mini-role">Software Engineering Intern &middot; Mumbai, India</div>
    </div>
  </li>
</ul>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Amogh Gupta",
  "givenName": "Amogh",
  "familyName": "Gupta",
  "url": "{{ '/' | absolute_url }}",
  "image": "{{ '/assets/img/prof_pic.jpg' | absolute_url }}",
  "email": "mailto:guam@unc.edu",
  "jobTitle": "Graduate Researcher and Teaching Assistant",
  "description": "Master's student in Computer Science at UNC Chapel Hill researching LLM alignment, safe-helpfulness, and responsible AI. Author of SHARD (EMNLP 2026 Findings) and Compounding Disadvantage (ACM FAccT 2026).",
  "affiliation": {
    "@type": "CollegeOrUniversity",
    "name": "University of North Carolina at Chapel Hill",
    "department": {
      "@type": "Organization",
      "name": "Department of Computer Science"
    },
    "url": "https://cs.unc.edu/"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Indian Institute of Information Technology Pune",
      "url": "https://www.iiitp.ac.in/"
    }
  ],
  "worksFor": {
    "@type": "CollegeOrUniversity",
    "name": "University of North Carolina at Chapel Hill"
  },
  "knowsAbout": [
    "LLM Alignment",
    "Large Language Models",
    "Natural Language Processing",
    "Responsible AI",
    "AI Safety",
    "Algorithmic Fairness",
    "Red-Teaming",
    "Machine Learning",
    "Model Evaluation"
  ],
  "sameAs": [
    "https://github.com/FieryDeveloper",
    "https://www.linkedin.com/in/connectamogh",
    "https://scholar.google.com/citations?user=BOabN_gAAAAJ",
    "https://x.com/AmoghGupta04"
  ]
}
</script>
