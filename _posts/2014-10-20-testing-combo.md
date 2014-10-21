---
layout: post
categories:
 - development
tagline:
tags:
 - development
frontpage: true
published: true
---
{% include JB/setup %}

## The Goal
The goal is to automatically run tests for this angularjs site when a new file is deployed to github. The tests will run on Travis. The testing combo reads as following
 * Karma
 * Jasmine
 * Istanbul
 
## Tips and Tricks
### Listen to changes

{% highlight bash linenos=table %}
grunt watch
{% endhighlight %}