---
title: "Differentiable Hardware --- Gradient Descent Applied Physcially"
date: 2024-01-15T15:53:50-08:00
draft: true
---


## Supervised Machine Learning is Actually Somwhat Simple...
Machine learning is built upon the algorithm of gradient descent. It is an elegant algorithm used to train simple linear models and transformers alike. Despite the breadth of variety and magnitude of its results, gradient descent in the context of machine learning is actually rather simple to understand intuitively. 

Lets say we have "some data" that was created by "some function". Nature produced this function, so why we assume it is computable.  We don't know the explicit definition of the function that made this data, but we want to. This function could be *literally any function*. We'll denote this function as:

$
f(x)
$

If we have data from it, we can work with it. More specifically, if we have a dataset consisting with elements consisting of pairs of *features* and *targets*. Our dataset can be thought of as a statistical distributions of input-output pairs of our desired function. Our goal, then, is to approximate the function from nature that created our data. This amounts to creating a probabalistic model that was made more or less in the same way that you train a dog. Tell it to do something, when it does the wrong thing correct it. 

That oversimplification glosses over a fair bit of calculus in higher dimmensional spaces. But the essense of the idea is just that, correct the dog when it does the wrong thing. This style of machine learning is called supervised learning.

There are acutally only 3 main components to supervised learning.
- A dataset
- A model
- A loss function

We have already introduced the idea of the dataset, so I will let that idea sit with you. But the model and loss function idea may need some further explanation. We'll start with what is meant by a model. 

A model is a mathematical function. It it known as a *parametric function* because we, as the programmer, set parameters that influence the way the function behaves. In practice, this mostly just means picking what numbers we should multiply by/add to each term. Not too complicated. A model is commonly refered to as a hypothesis of the function that created the data and is denoted in the folowing way:


$
\hat{f}(x)
$

One of the most important things to know about the idea of a model is that we, as the programmer, believe that somewhere within the set of all choices for those parameters, is a configuration that will adequately approximate our function from nature. This is what is meant by the idea that a model has the capacity to effectively learn from the data. Our goal when training a model, is to set our models parameters as close to that optimal configuration as possible.

As a side tangent before moving onto the idea of the loss function, this is a good place to say that machine learning is better understood as "algorithmic function finding" than "The machine is thinking!".

Ok, now let's get to the really powerful idea. In order to find that optimal configuration in a programatic way, we need some way of knowing how well we're doing. This is what the loss function idea is. A loss function takes an output from our model (which is a tentative model until we claim it is fully trained), and produces a number. If that number is high, the model is doing a bad job. If that number is low, the model is doing a better job. Loss functions are commonly denoted as:


$
J(\theta)
$

Where $\theta$ are the parameters of $\hat{f}(x)$.

We can actually think of the loss function as a single function. That is, if we compose the hyptothesis function inside of the loss function.

$
loss = J(\hat{f}(x)) 
$

This idea of wrapping the loss funciton around the hypthesis is really important. Without getting too math heavy, if we solve the calculus optimization problem of minimizing $J(\hat{f}(x))$ by finding the optimal $\theta$, we find our optimal configuration. Because we are doing this programmatically, we choose to take advantage of the fact that the partial derivative of each parameter will point toward the direction of the lowest loss for that parameter's dimmension. To iteratively "move towards the optimal model", we perform elementwise subtraction on the current parameters by a portion of the partial derivatives of $J(\hat{f}(x))$. 

$
\theta_{new} = \theta_{old} - \alpha \frac{\partial J(\hat{f}(x))}{\partial \theta}
$

Doi it over and over again. Thats it. You have trained a model.







