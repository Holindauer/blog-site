---
title: "Differentiable Hardware Part 2 --- AI-ASICS"
date: 2024-06-06T17:24:29-07:00
draft: False
---

This article is an update to an article I wrote earlier this year titled "Differentiable Hardware --- Gradient Descent Applied to Physical Hardware". It is intended to expand upon the ideas presented there with a more fine-grained explanation and example. There is no need to read the previous article for context, everything is explained from the ground up here.  

# ASICs and FPGAs

*Application Specific Integrated Circuits* (ASICs) are computation devices designed to do very specific tasks more efficiently than could be done on a CPU or GPU. SHA256 ASICS for Bitcoin mining and AI accelerators are common examples. 

ASICs, along with other chips like CPUs and GPUs are often designed with and tested using *Field Programmable Gate Arrays* (FPGAs). FPGAs are a type of chip that you can reconfigure the architecture of using a *Hardware Descriptive Language* (HDL). HDLs, such as verilog, belong to a programming paradigm unique from imperative and functional languages. Instead of running code that is a sequential/parallel narrative, languages like verilog let you modify the logical configuration of an FPGA. Full fledged chips can be fabricated from the design outlined in verilog code.

The key insight here is that HDLs like verilog provide an interface for modifying the physical characteristics of chips such as ASICs, CPUs, and GPUs; although, a few steps removed. With regards to FGPAs, verilog only sets the chip's logical configuration, which determines its functionality. Though, because verilog code can be used as the description for how a chip should be manufactured, the links verilog as an interface to modification of the physical hardware. 

# Chip Design as a Discrete Optimization Problem

Lets imagine we are designing a SHA256 ASIC for Bitcoin mining and that we are using an FPGA to test it. The FPGA is limited in a variety of ways. It has a finite amount of configurable components (logic elements, registers, block RAM, etc...) that can be programmed for an application using an HDL. 

From this we can set up a discrete optimization problem with regards to how much each component should be allocated for any particular purpose?

Now imagine we write a program that allows us to modify the ASIC's verilog code by making certain systems within the hardware description more or less robust in a transactional manner. By transaction, I mean to say that taking resources from one component adds to another. In a way, this could be thought of as a compiler that accepts as input *instructions for how to modify the chip* and outputs *verilog code that reflects such modifications*. 

This compiler would be written in such a way that instructions for making one system more robust would make another system less robust in a way that could be mapped to a number line. A data space is defined by representing the modification of every orthogonal chip configuration in this way. 

We could then define a loss function for the ASIC, in our case it would be how fast it solves SHA256. Somewhere within that dataspace is a minima for optimal ASIC configuration for bitcoin mining.

If we trained a neural network in such a way where we confined its output space such that it always outputs a possible FPGA configuration, we could use machine learning to optimize the chip.
