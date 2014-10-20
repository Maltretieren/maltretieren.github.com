---
layout: post
categories :
  - frontpage
  - blog
tagline: "a post to the main page"
tags : 
  - jekyll
  - github
---
{% include JB/setup %}

## The Goal
The goal is to automatically run tests for this angularjs site when a new file is deployed to github. The tests will run on Travis. The testing combo reads as following
 * Karma
 * Jasmine
 * Istanbul