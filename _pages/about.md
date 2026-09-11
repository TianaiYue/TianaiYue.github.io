---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# About Me

I'm an undergraduate student at Johns Hopkins University pursuing a triple major in Computer Science, Electrical Engineering, and Computer Engineering, with minors in Robotics and Visual Arts. I'm a researcher in the JHU Social Cognitive AI (SCAI) Lab, advised by [Prof. Tianmin Shu](https://www.tshu.io/) and [Prof. Alan Yuille](https://www.cs.jhu.edu/~ayuille/). I'm also fortunate to work at MIT, advised by [Prof. Josh Tenenbaum](https://cocosci.mit.edu/josh-tenenbaum/), [Prof. Phillip Isola](https://web.mit.edu/phillipi/), and [Prof. Vikash Mansinghka](http://probcomp.csail.mit.edu/principal-investigator/).

My research interest is to uncover the computational principles that fuse human-like visual perception with high-level cognitive reasoning and instantiate them in embodied AI systems that truly understand and interact with the real world. I'd like to design multi-modal models that blend vision with language-grounded probabilistic reasoning so agents can infer goals, causality, and affordances from sparse observations. By embedding these models in robots and photorealistic simulators, I aim to create agents that can plan, communicate, and collaborate with humans in open-ended environments.

Outside the lab, I enjoy traveling, playing polo, making visual art, and getting swept up in musical theatre. I once spent a month in Seville studying art history to wander through sunlit streets, look closely at paintings, and think about how people tell stories through images. Intelligence is not only something to model, but also something expressed through movement, color, music, and culture.

{% include research-loop.html %}

<!-- # News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

<!-- # Research of Thoughts -->

# Selected Publications 

<div class="badge">NeurIPS 2025</div>
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/roboscape.png' alt="sym" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Synthesizing Photorealistic and Dynamic Urban Environments for Multimodal Robot Navigation and Collaboration](https://neurips.cc/virtual/2025/poster/119080)

Yan Zhuang\*, Jiawei Ren\*, Xiaokang Ye\*, Jianzhi Shen, Ruixuan Zhang, **Tianai Yue**, Muhammad Faayez, Xuhong He, Xiyan Zhang, Ziqiao Ma, Lianhui Qin, Zhiting Hu, Tianmin Shu

<details>
<summary><strong>TL;DR</strong></summary>
<p style="font-size: 0.75em;">RoboScape uses Unreal Engine 5 to generate large-scale, photorealistic cities for multimodal navigation and multi-robot collaboration. Its benchmarks reveal that current vision-language models still struggle with the perception, spatial reasoning, planning, and communication required in dynamic urban environments.</p>
</details>
<strong><span class='show_paper_citations' data='L0ujy2IAAAAJ:UeHWp8X0CEIC'></span></strong>
<!-- - Your paper abstract or a short description goes here. -->
  </div>
</div>



<div class="badge">ICASSP 2025(Oral)</div>
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/golocolor.png' alt="sym" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[GoLoColor: Towards Global-Local Semantic Aware Image Colorization](https://ieeexplore.ieee.org/abstract/document/10888355)

**Tianai Yue**, Xiangcheng Du, Jing Liu, Zhongli Fang

<details>
<summary><strong>TL;DR</strong></summary>
<p style="font-size: 0.75em;">GoLoColor combines global scene semantics with local object-level cues to guide diffusion-based image colorization, producing more coherent and realistic colors in scenes with multiple entities.</p>
</details>
<strong><span class='show_paper_citations' data='L0ujy2IAAAAJ:UeHWp8X0CEIC'></span></strong>
<!-- - Your paper abstract or a short description goes here. -->
  </div>
</div>
<div class="badge">EAAI 2025</div>
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/dual_prototypes.png' alt="sym" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Dual prototypes contrastive learning based semi-supervised segmentation method for intelligent medical applications](https://www.sciencedirect.com/science/article/pii/S0952197625009054?dgcid=coauthor)

**Tianai Yue**, Rongtao Xu, Jingqian Wu, Wenjie Yang, Shide Du, Changwei Wang

<div style="display: flex; gap: 20px; align-items: flex-start;">
<div style="flex: 1; min-width: 0;">
<details>
<summary><strong>TL;DR</strong></summary>
<p style="font-size: 0.75em;">A dual-prototype contrastive framework learns from scarce medical labels by aligning image-level foreground/background structure with pixel-level local representations. With only 10% labeled ACDC data, it reaches a 91.8 Dice score.</p>
</details>


<div style="display: flex; gap: 20px; align-items: flex-start;">
<div style="flex: 1; min-width: 0;">
<details>
<summary><strong>Code</strong></summary>
<p style="font-size: 0.75em;">
<a href="https://github.com/yuelily2024/DPC">https://github.com/yuelily2024/DPC</a>
</p>
</details>
</div>
</div>
</div>
</div>

<strong><span class='show_paper_citations' data='L0ujy2IAAAAJ:UeHWp8X0CEIC'></span></strong>
<!-- - Your paper abstract or a short description goes here. -->
  </div>
</div>
<div class="badge">ICANN 2025</div>
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/enhancing.png' alt="sym" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Enhancing Graph Neural Networks with Mixup-Based Knowledge Distillation](https://ieeexplore.ieee.org/abstract/document/10888355)

**Tianai Yue**, Jing Liu

<details>
<summary><strong>TL;DR</strong></summary>
<p style="font-size: 0.75em;">MD-GNN combines feature-and-label Mixup with teacher-student distillation to improve graph learning without changing graph topology, yielding gains of 2.54–3.73% on Cora, CiteSeer, and PubMed with stronger robustness to noise.</p>
</details>
<strong><span class='show_paper_citations' data='L0ujy2IAAAAJ:qjMakFHDy7sC'></span></strong>
<!-- - Your paper abstract or a short description goes here. -->
  </div>
</div>

<!-- <div class="badge">Preprint 2025</div>
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/DMKD.png' alt="sym" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Distilling Multi-Teacher Knowledge from Distinct Graph Neural Networks](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5084903)

Jing Liu\*, **Tianai Yue\***, Chuanguang Yang, Yuqi Li, Qinfen Hao, Xiang Li, Shiping Wen

<details>
<summary><strong>Abstract</strong></summary>
<p style="font-size: 0.75em;">Knowledge distillation on graph neural networks is a novel and practical model enhancement technique that has attracted widespread attention.   However, literature methods mostly work in the manner of the same teacher/student architecture.   In fact, the knowledge provided by the identical teacher model may be insufficient, leading to a lack of diversity and consequently limiting the capabilities of the student GNNs. In this paper, we innovatively propose Distinct Multi-teacher Knowledge Distillation method, namely DMKD,  to fully exploit the complementary knowledge from distinct GNN teachers. Specifically, we adopt distinct teachers to distill knowledge simultaneously to gain rich and diverse knowledge.  Moreover, to ensure comprehensive knowledge acquisition, we integrate the knowledge at different levels from all teachers and distill it to students. Essentially, our DMKD is a universal knowledge distillation framework that can be applied to arbitrary GNNs. Numerous experiments conducted on seven graph datasets demonstrate that our proposed DMKD significantly boosts students, with a classification improvement of up to 37.93\% and clustering enhancement ranging from 1.42% to 74.56%. More importantly, DMKD outperforms state-of-the-art distillation baselines. This robustly validates the efficacy and superiority of DMKD, highlighting that students guided by DMKD can extensively benefit from distinct teachers' interlayer knowledge and thus receive comprehensive guidance.</p>
</details>
<strong><span class='show_paper_citations' data='L0ujy2IAAAAJ:IjCSPb-OGe4C'></span></strong>
  </div>
</div>
 -->
