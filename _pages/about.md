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

I am a Master's student in Computer Science at the **University of North Carolina at Chapel Hill**, where I work on natural language processing and the alignment of large language models. My MS research advisor is **Prof. Snigdha Chaturvedi**, whose [Chaturvedi Lab](https://nlp.cs.unc.edu/) I work in on LLM alignment. I am also a researcher in the Society-Centered AI Lab (SAIL) with [Dr. Neil Gaikwad](https://www.cs.unc.edu/~gaikwad/) on responsible AI, and I [teach and tutor]({{ '/teaching/' | relative_url }}) across the data science and computer science curricula.

My research asks a question I find genuinely unresolved: **how do we make a model safe without making it useless?** Aligned models frequently over-refuse — they decline a sensitive prompt outright, or return generic safety boilerplate, when the user's underlying information need could have been met safely. My work on **SHARD** introduces self-reframing distillation as a way to recover that lost helpfulness without weakening safety. In parallel, I audit what alignment leaves behind: my FAccT 2026 paper shows how bias in LLM-generated educational explanations _compounds_ across language, caste, and social context rather than simply adding up across Indian and American STEM settings.

Before UNC, I completed a B.Tech in Computer Science at the **Indian Institute of Information Technology Pune**, graduating with Honors in Machine Learning (1st in batch). Along the way I have built systems at **Amazon** (Alexa Audio), **Nomura**, **Ernst & Young**, and **DRDO**, and done research at **IIT Kharagpur** and **IIT Indore** on red-teaming, multilingual jailbreaks, and disaster-tweet summarization. That mix matters to me: I like alignment questions that survive contact with a production system.

I am always glad to hear from people working on alignment, evaluation, or responsible AI — feel free to [reach out](mailto:guam@unc.edu).

<style>
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
