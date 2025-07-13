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

I'm an undergraduate student at Johns Hopkins University pursuing a triple major in Computer Science, Electrical Engineering, and Computer Engineering, with minors in Robotics and Visual Arts. I'm a researcher in the JHU Social Cognitive AI (SCAI) Lab, advised by [Prof. Tianmin Shu](https://www.tshu.io/) and [Prof. Alan Yuille](https://www.cs.jhu.edu/~ayuille/) . I'm also fortunate to work at MIT's Computational Cognitive Science Group(CoCoSci) and Probabilistic Computing Project(ProbComp), advised by [Prof. Josh Tenenbaum](https://web.mit.edu/cocosci/josh.html) and [Prof. Vikash Mansinghka](http://probcomp.csail.mit.edu/principal-investigator/).

My research interest is to uncover the computational principles that fuse human-like visual perception with high-level cognitive reasoning and instantiate them in embodied AI systems that truly understand and interact with the real world. I'd like to design multi-modal models that blend vision with language-grounded probabilistic reasoning so agents can infer goals, causality, and affordances from sparse observations. By embedding these models in robots and photorealistic simulators, I aim to create agents that can plan, communicate, and collaborate with humans in open-ended environments.


<!-- # News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

<!-- # Research of Thoughts -->


# Selected Publications 

<div class="badge">ICASSP (Oral)</div>
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
<summary><strong>Abstract</strong></summary>
<p style="font-size: 0.75em;">Owing to powerful generative priors, Text-to-Image (T2I) diffusion models have achieved promising results in image colorization task. However, recent advanced methods primarily integrate global semantics. Such practice neglects local semantics, yielding suboptimal colorization performance. In this paper, we present a novel global-local semantic aware colorization method named GoLoColor, which performs semantic awareness at both global and local levels. The GoLoColor includes Global Aware (GoA) module, Local Aware module (LoA) and Semantic Aggregation (SA) module for semantic understanding. Specifically, the GoA produces global semantic embedding to represent whole image, while the LoA provides semantic support for local objects, particularly in scenes containing multiple entities. The SA module facilitates semantic interaction between local and global semantic embedding to produce richer semantic information. Finally, a controlled T2I diffusion model is utilized to produce color image guided by the aggregated semantic embedding. Comprehensive experiments demonstrate that our method achieves superior performance and can produce realistic colorization.</p>
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

<details>
<summary><strong>Abstract</strong></summary>
<p style="font-size: 0.75em;">In medical intelligence applications, the labeling of medical data is crucial and expensive, so it becomes urgent to explore labeling-efficient ways to train applications. Semi-supervised techniques for medical image segmentation have demonstrated potential, effectively training models using scarce labeled data alongside a wealth of unlabeled data. Therefore, semi-supervised medical image segmentation is a key issue in engineering applications of medical intelligence. Consistency constraints based on prototype alignment provide an intuitively sensible way to discover valuable insights from unlabeled data that can motivate segmentation performance. In this work, we propose a Dual prototypes Contrastive Network to motivate semi-supervised medical segmentation accuracy by imposing image-level global prototype and pixel-level local prototype constraints. First, we introduce a Background-Separation Global Prototype Contrastive Learning technique that utilizes the natural mutual exclusivity of foreground and background to separate the inter-class distances and encourage the segmentation network to obtain segmentation results that are more complete and do not contain background regions. Second, we design a Cross-Consistent Local Prototype Contrastive Learning techniques to extend the perturbation consistency of the two networks to the prototype's localized response to the feature map, thereby shaping a more stable intra-class prototype space and producing accurate and robust pixel-level predictions. Finally, we comprehensively evaluate our method on mainstream semi-supervised medical image segmentation benchmarks and settings, and experimental results show that our proposed method outperforms current state-of-the-art methods. Specifically, our method achieves a Dice Coefficient score of 91.8 on the Automatic Cardiac Diagnosis Challenge dataset using only 10% labeled data training, 1.1% ahead of the second best method.</p>
</details>

<details>
<summary><strong>Code</strong></summary>
<p style="font-size: 0.75em;"><a href="https://github.com/yuelily2024/DPC">https://github.com/yuelily2024/DPC</a></p>
</details>
<strong><span class='show_paper_citations' data='L0ujy2IAAAAJ:IjCSPb-OGe4C'></span></strong>
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
<summary><strong>Abstract</strong></summary>
<p style="font-size: 0.75em;">Graph Neural Networks (GNNs) have demonstrated remarkable potential in processing graphstructured data and have been widely adopted for various graph-related tasks. In recent years, graph knowledge distillation has emerged as an effective model optimization technique, achieving outstanding performance in enhancing GNN capabilities. However, it remains constrained by the inherent sparsity and dependency of graph data. To address this, we propose Mixup-driven Distillation for Graph Neural Networks (MD-GNN), an innovative framework that combines Mixup-based data augmentation with knowledge distillation to boost GNN performance. Specifically, we first leverages Mixup to perform linear interpolation on both node features and labels, generating diversified training samples while preserving original graph topology. Subsequently, based on these generated data, we extract knowledge from a pre-trained GNN teacher through output logit alignment to guide the training of student GNN models. Extensive experiments demonstrate that MD-GNN significantly outperforms existing baseline GNN models, achieving performance gains of 2.54%-3.73% on three benchmark datasets (Cora, CiteSeer, and PubMed). Notably, MD-GNN exhibits superior generalization capabilities and enhanced robustness, particularly showing notable advantages in noisy scenarios.</p>
</details>
<strong><span class='show_paper_citations' data='L0ujy2IAAAAJ:qjMakFHDy7sC'></span></strong>
<!-- - Your paper abstract or a short description goes here. -->
  </div>
</div>

<div class="badge">Preprint 2025</div>
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

