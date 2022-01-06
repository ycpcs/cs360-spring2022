---
layout: default
title: "Assignment 5"
---

**Due: Wed, Mar 30th in class** Late assignments will be penalized 20% per day.

Book Questions from *Introduction to Algorithms - 3rd ed.*
==========================================================

22.1-1, 22.2-7 (10 points), 22.4-3, 22.5-2

Give a short 1-2 sentence description of your final project topic along with at least one reference.

*Hints:*

> 22.2-7 - Consider the number of edges between a source and all reachable vertices, and use this to separate the vertices into "babyfaces" and "heels". Note: This is the problem of determining whether or not a graph is *bipartite*.
>
> 22.4-3 - By Lemma 22.11 we know that a DAG is acyclic if and only if a DFS produces no back edges. However DFS runs in O(V+E) but the question wants an O(V) run time. Again note the graphs for this problem are *undirected* and that for undirected *acyclic* graphs \|E\| ≤ \|V\| - 1 (by Theorem B.2.5 on page 1174).

