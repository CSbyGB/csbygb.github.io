---
layout: post
title: AISB London 2026
date: 2026-09-28
---

<i>The AI Security Bootcamp (AISB) is an intensive seven-day program for security professionals looking to tackle the challenges of securing frontier AI systems.  
AI is being built into critical infrastructure and new attack surfaces are emerging, but traditional security training doesn’t cover them.  
The program spans adversarial machine learning, LLM security, and infrastructure security and governance.

The bootcamp runs in several cities (London, San Francisco, Las Vegas, Singapore), in partnership with local AI safety and security organizations.  
Pranav Gade, formerly a research engineer at Conjecture, founded it, and Jan Michelfeit, a research engineer at the UK AI Security Institute, designed the content.

I joined the August–September 2026 London cohort.
In this blog, I'll share what I took away.</i>



# The talks: From Tokens to Threat Models

The week started with the foundations.  
Pranav took us through how transformers work, from the tokenizer to the attention mechanism to the sampling step that turns the model’s output back into words.

Jan Michelfeit, from the UK AI Security Institute, then presented AI control: safeguards that keep AI systems in check even when we can’t be sure they’re aligned, and where traditional insider-threat measures apply or break down.  
David Quarel continued the technical deep dive with the second part of the transformers series.

David Williams-King asked what exactly we should be securing.  
Using RAND’s framework of security levels, he looked at where today’s frontier labs stand and at the challenges ahead, including securing recursive self-improvement.

It was really enlightening and probably my favorite talk because he also mentioned the risks of superintelligence, which only a few people talk about nowadays.  
Marius Hobbhahn, CEO of Apollo Research, followed with a focus on coding agents and shared Apollo’s work on how these agents fail and how labs monitor them.

David Quarel returned with a session on training and data, and how a model's architecture shapes what can go wrong.  
Shiau Huei presented adversarial attacks on vision models and LLMs, showing how crafted inputs can make a model fail.  
Pranav then began his governance session, presenting the range of strategies proposed for managing frontier AI, from pausing development to accelerating it.

Jannis Kirschner presented a list of open problems in AI verification, from detecting model poisoning to verifying where chips are located.

Yogi Bar-On, CEO of Attestable, explained how to prove what an AI system is actually doing through attestations, secure hardware, and zero-knowledge proofs.

Emma Liddell covered infrastructure security in the age of agents: why so many organizations build controls on top of systems never designed to be secure, and what moving to higher security levels would require.  
Abbey Chaver concluded the week by mapping out the ecosystem of organizations working on AI security, from research to policy and adoption, and the problems they consider most pressing.

# The hands on

Alongside the talks, we spent most of the time on hands-on exercises, paired with a different partner each day.  

Each session included its own exercises and tests to pass, and all the material is publicly available in the [AISB GitHub repository](https://github.com/AI-Security-Bootcamp/aisb).

The first exercises focused on LLM internals and what goes in and out of a model.  
Next, we covered coding agents and AI control.  
We looked at the risks of giving agents the ability to execute code, then built and evaluated monitors.  
We also implemented control protocols such as trusted monitoring, deferring to a trusted model, resampling, and weighing safety against usefulness.

The following set of exercises covered inference security.  
We tackled jailbreaking techniques and why safety training is statistical rather than structural.  
We worked on different kinds of guardrails, from keyword filters to LLM-as-judge and linear probes on activations, and model extraction through knowledge distillation against deployed APIs.

We then moved to training and data security, with exercises on model editing to silently rewrite a model's behavior.  
We saw backdoors injected through fine-tuning and data poisoning, and removing safety fine-tuning through refusal-direction ablation.  
Adversarial machine learning came next: gradient-based attacks against image classifiers, adversarial optimization against language models, and optionally, watermarking and image provenance.

The final exercises focused on infrastructure security and threat modeling, using RAND's security levels and MITRE ATLAS, before moving to lower-level attacks: the trust boundaries of the NVIDIA Container Toolkit and a related CVE, and GPU RowHammer attacks that led to privilege escalation.

# What I'm Taking Home

Looking back on the week, the first thing that comes to mind is the people. AISB brought together cybersecurity professionals from all over the world, and meeting them was one of the highlights of the experience.  
Each pair programming session was also a chance to work alongside someone new, with a different background and a different way of approaching problems.

I also loved how hands-on the program was. 

The balance between theory and practice was just right: the talks covered everything we needed to know without ever taking over, leaving plenty of time to work on the exercises.

The visit to the UK AI Security Institute was another highlight.  
Listening to the talks there was genuinely inspiring because it made something very concrete: it is possible to drive real change in how AI systems are deployed today.

And the learning didn’t stop when the exercises did. Several evenings were dedicated to networking events, giving us the opportunity to meet and exchange with people working in AI security.