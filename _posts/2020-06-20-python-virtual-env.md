---
layout: post
title: "Working with multiple virtual envs in python"
author: hugogomess
date: 2020-06-20 20:44:45 -0300
tags: python venv
categories: python venv
---

## Introduction

First of all, why do i need to use a virtual env? Virtual env is so useful because don't pollute your system python with useless libs installed by pip, working with multiple virtual envs you can create a env for each project and these envs just will contain only required libs for that project. This made your env more clean and fast.

## Using venv

For create an env run the following command in project root directory:

```shell
  $ python -m venv your_env_name
```

For active your env run:

```shell
  $ source your_env_name/bin/activate
```

Now every lib you install with pip will be installed in local env not in global.
