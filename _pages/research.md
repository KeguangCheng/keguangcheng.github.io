---
layout: single
title: "Research"
permalink: /research/
author_profile: true
redirect_from:
  - /portfolio/
---


<div class="section-index" aria-label="Research projects">
  <a href="#nybg-podostemum">NYBG · Plant development</a>
  <a href="#nlr-evolution">NLR evolution</a>
  <a href="#conservation-genomics">Conservation genomics</a>
  <a href="#nlr-expression">NLR expression</a>
  <a href="#additional-research">Additional research</a>
</div>

<section class="research-project" markdown="1">

## Organ identity and development in *Podostemum ceratophyllum*
{: #nybg-podostemum }

<p class="entry-meta">Research project · New York Botanical Garden (NYBG) · May 2026–present<br>Advisor: Cecilia Zumajo</p>

{% include research-figure.html id="podostemum" %}

I am investigating the developmental basis of unusual organ morphology in *Podostemum ceratophyllum* through comparative analysis of root, leaf, and whole-plant RNA-seq data.

I independently developed the literature review and computational analysis plan and carry out the computational work. Cecilia Zumajo supervises the project and collected the samples.

I used Trinity-based de novo assembly and transcriptome quality assessment to establish a reference for developmental gene-expression analysis. I then screened developmental regulators using reciprocal BLAST to guide planned phylogenetic validation and root–leaf expression comparisons aimed at resolving organ homology.

**Methods:** RNA-seq · Trinity · Transcriptome quality assessment · Reciprocal BLAST

</section>

<section class="research-project" markdown="1">

## NLR gene-family evolution in gymnosperms
{: #nlr-evolution }

<p class="entry-meta">Independent researcher · Beijing Forestry University · March 2023–present<br>Advisor: Pingli Liu</p>

{% include research-figure.html id="gymnosperms" %}

I classified NLR immune receptors across **29 gymnosperm genomes** by domain architecture and reconstructed phylogenies under alternative classifications. The analyses address long-branch attraction and incorporate angiosperm and algal sequences.

In these phylogenetic analyses, I resolved a large, strongly supported lineage outside the canonical TNL, RNL, and CNL classes, positioned between the TNL and non-TNL clades. I also mapped NLR loci and gene clusters, observed concentration on a single chromosome in multiple gymnosperm species, and tested chromosome-level enrichment.

This ongoing work forms the basis of my first-author research manuscript, *Beyond Canonical NLR Classes: Phylogenetic Diversity and Chromosomal Organization in Gymnosperms* (working title).

**Methods:** Domain-architecture classification · Phylogenetics · Gene-family analysis · Chromosomal mapping · Enrichment analysis

</section>

<section class="research-project" markdown="1">

## Population genomics of *Tetracentron sinense*
{: #conservation-genomics }

<p class="entry-meta">Team member · Beijing Forestry University · February 2022–March 2025<br>Advisor: Pingli Liu</p>

{% include research-figure.html id="tetracentron" %}

I analyzed population structure from genome-wide resequencing data using PCA and ADMIXTURE to characterize genetic differentiation and ancestry patterns in *Tetracentron sinense*.

I estimated nucleotide diversity (π), Watterson's θ, and population differentiation (FST) to compare variation within and among populations and inform conservation-genomic interpretation. I created, revised, and assembled all figures for the research manuscript in R and Adobe Illustrator, integrating analysis outputs into publication-ready visualizations.

**Methods:** Whole-genome resequencing · PCA · ADMIXTURE · Population-genetic statistics · R · Adobe Illustrator

[Read the related publications →]({{ '/publications/' | relative_url }})

</section>

<section class="research-project" markdown="1">

## RNA-seq analysis of NLR expression in *Pinus tabuliformis*
{: #nlr-expression }

<p class="entry-meta">Course project · Applied Genomics, New York University · Spring 2026<br>Instructor: Manpreet Katari</p>

{% include research-figure.html id="pinus" %}

I re-analyzed a public, **12-sample** time-course RNA-seq dataset of *Pinus tabuliformis* infected by pine wood nematode, using a curated catalogue of **661 NLR genes**, Salmon/tximport, and DESeq2 likelihood-ratio testing.

I examined class-specific temporal expression with Mfuzz and WGCNA while accounting for module-size effects. Exploratory co-expression and promoter-motif analyses helped prioritize candidate NLRs and transcription-factor families. I documented the workflow in R Markdown and produced figures, tables, and an interactive Shiny dashboard.

**Methods:** RNA-seq · Salmon/tximport · DESeq2 · Mfuzz · WGCNA · R Markdown · Shiny

</section>

## Additional research
{: #additional-research }

### Functional analysis of very small introns in plants

<p class="entry-meta">Team member · Beijing Forestry University · December 2022–June 2023<br>Advisor: Hongbo Gao</p>

I reviewed intron splicing and evolution, performed primer design, RT-PCR, and gel electrophoresis to investigate minimum intron length and splicing accuracy, and used Python for data processing and figure preparation.

### Cold-stress physiology in Daurian ground squirrel

<p class="entry-meta">Team lead · Beijing Forestry University · September 2021–May 2022<br>Advisor: Qiang Weng</p>

I led a four-member team studying cold-induced mitochondrial adaptation. I designed assays for mitochondrial abundance and oxidative-stress markers, coordinated troubleshooting, and presented results in a team report and presentation.

## Image references
{: #image-references }

<ol class="research-image-references">
{% for figure in site.data.research_figures %}
  <li id="ref-{{ figure.ref }}">{{ figure.authors }} ({{ figure.year }}). {{ figure.title }} <em>{{ figure.journal }}</em>, {{ figure.volume }}, {{ figure.pages }}. <a href="https://doi.org/{{ figure.doi }}">doi:{{ figure.doi }}</a></li>
{% endfor %}
</ol>
