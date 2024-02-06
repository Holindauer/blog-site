---
title: "Differentiable Hardware --- Physics Based Gradient Descent"
date: 2024-02-05T12:00:00-05:00
draft: false
---


## Gradient Descent is Strangley Simple for What it Can Do (a very brief review)...
Machine learning is built upon the algorithm of gradient descent. It is an elegant algorithm used to train both simple linear models and transformers alike. Despite the breadth and magnitude of results it lends, gradient descent is actually rather simple to understand intuitively. 

Lets say we have "some data" that was created by "some function". We assume this function is computable because nature produced it by some kind of complicated process.  We don't know the explicit definition of the function that made this data, but we want to. This function could be *literally any function*. We'll denote this function as:

$$
f(x)
$$

If we have data from it, we can work with it. More specifically, if we have a dataset consisting of elements consisting of *features* and *targets*. Our dataset can be thought of as a statistical distributions of input-output pairs from our desired function. Our goal, then, is to approximate the function from nature that created our data. This amounts to creating a probabalistic model that is trained, more or less, in the same way you train a dog. Tell it to do something, when it does the wrong thing correct it. 

That oversimplification glosses over a fair bit of calculus in higher dimmensional spaces. But the essense of the idea is just that, correct the dog when it does the wrong thing. Point it to the right path by pointing it away from the wrong path. This style of machine learning is called supervised learning.

There are acutally only 3 main components to supervised learning.
- A dataset
- A model
- A loss function

We have already introduced the idea of the dataset. Next we'll consider what is meant by a model. 

A model is a mathematical function. It it known as a *parametric function* because we, as the programmer, set parameters that influence the way the function behaves. In practice, this mostly just means "picking" what numbers we should multiply by/add to each term. Not too complicated. A model is commonly refered to as a hypothesis of the function that created the data and is denoted in the folowing way:


$$
\hat{f}(x)
$$

One of the most important things to know about the idea of a model is that we, as the programmer, believe that somewhere within the set of all choices for those parameters, is a configuration that will adequately approximate our function from nature. This is what is meant by the idea that a model has the capacity to effectively learn from the data. Our goal when training a model, is to set our models parameters as close to that optimal configuration as possible.

As a side tangent before moving onto the idea of the loss function, this is a good place to say that machine learning is better understood as "algorithmic function finding" than "The machine is thinking!". 

Ok, now let's get to the really powerful idea. In order to find that optimal configuration in a programatic way, we need some way of knowing how well we're doing. This is what the loss function idea is. A loss function takes an output from our model and produces a number. If that number is high, the model is doing a bad job. If that number is low, the model is doing a better job. Loss functions are commonly denoted as:


$$
J(\theta)
$$

Where $\theta$ is a vector of the parameters of $\hat{f}(x)$.

We can actually think of the loss function and model as a single function. That is, if we compose the hyptothesis function inside of the loss function.

$$
J(\hat{f}(x)) 
$$

This idea of wrapping the loss funciton around the hypthesis is really important. Without getting too math heavy, if we solve the calculus optimization problem of minimizing $J(\hat{f}(x))$ by finding the optimal $\theta$, we find our optimal configuration. Because we are doing this programmatically, we choose to take advantage of the fact that the partial derivative of each parameter will point toward the direction of the lowest loss for that parameter's dimmension. To iteratively "move towards the optimal model", we perform elementwise subtraction on the current parameters by a portion of those partial derivatives of $J(\hat{f}(x))$. This is known as the gradient descent learning rule.

$$
\theta_{\text{new}} = \theta_{\text{old}} - \alpha \nabla_\theta J(\hat{f}(x))
$$


Do it over and over again. Thats it. You have trained a model.

## Differentiable Hardware

Great! We understand gradient descent at a high level. *TLDR: Train the dog by telling it to stop peeing on the carpet*. Now we arrive at the point of this article. That being: Where else might gradient descent be useful. 

I have been fiddling with the idea of applying gradient descent to physical structures/machines. For example, imagine a CPU. We want this CPU to run more efficiently, this is our machine learning task. 

Imagine that our CPU has certain *mechanically variable* features. That is, the CPU has the ability to change the structure of its circuitry at runtime. <-- This may or may not be possible, I don't know. But for this thought experiment, let's assume it is. 

Our dataset/features would be aspects of the program running. The targets would be performance summaries when running that program.

Our parameters could manifest themselves in numerous ways. A simple one could be a decision between which logical circuitry is used in the low-level hardware from a set of options. This would be a discrete option, and in the context of machine learning would be thought of as a classification task. A more continuous set of parameters might be something like: how much voltage ought to be applied at a specific semiconductor (I am likely mistaking how I think about the low level hardware). Our parameters more generally, would be made up by these sorts of mechanical options able to be set by the CPU itself. 

It's not unreasonable to say that were we able to collect data on such a process in the hardware, we could train a model with gradient descent to optimize these fine grain hardware details. You could even imagine a situation where a reinforcement learning agent is trained to apply changes to the CPU at runtime. 