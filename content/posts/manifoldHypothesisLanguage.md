---
title: "Summarization from the Perspective of the Manifold Hypothesis"
date: 2024-03-16T14:16:12-07:00
draft: false
---

Recently, I was reviewing some unsupervised learning algorithms and realized an interesting connection between two concepts:

In machine learning, there is a concept called the "Manifold Hypothesis". The general idea here is that a high dimensional dataset's useful information and structure exist within lower dimensional, euclidean-like manifolds that lie within the higher dimensional topological space native to the dataset. This implies that high dimensional datasets can be represented with much fewer data points without losing that information. This is why dimensionality reduction techniques that utilize eigen decompositions work (PCA for ex.).

I had a conversation with a friend a couple months back about how best to communicate when teaching someone a difficult new skill. We talked about there being an "objective difficulty" to distinct concepts. The objective difficulty could be thought of as the simplest representation of an idea such that it is represented in the most intuitive way possible. A good teacher tries to simplify their communication as best they can so as to not add additional difficulty that strays from that simplest representation. In other words, they try only to teach the concept they are teaching. For example, it is often possible to teach even young children ideas from calculus from an intuitive lens. However, If I tried to teach those children calculus in morse code, it would not work at all. Obviously, adding ridiculous obstacles to an explanation makes it harder to understand the core concept. However, there is a subtle idea here. If you can add obstacles, you should also be able to take them away. 

This strikes me as very similar to the manifold hypothesis. 

I've felt for some time that efficient summarization is the most useful skill someone can learn. Summarization, it seems, is something of a dimensionality reduction techniques us humans employ to find more concise representations of objective concepts. This implies that for each distinct concept, there is a set of sentences that all convey the same meaning in different ways.

This thought sparked an interesting idea for a natural language processing task. What if you constructed a dataset of all possible ascii strings up to a certain length. Then what if you clustered the dataset into the aforementioned sets of all possible sentences that describe the same concept *for each concept*? Would it be possible to identify all possible concepts representable within a finite number of characters? Would this suggest that the amount of concepts there are is discrete? Then, given you have these clusters, would it be possible to distill each concept there is into its simplest representation?

I should note that this would be an intractable task given the sheer number of permutations, but it works as a thought experiment.
