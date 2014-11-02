---
layout: post
categories:
 - devdoc
tagline:
tags:
 - basic
published: true
frontpage: false
comments: false
---
# ApiDoc

The ApiDoc documents the Controllers and Services. This post documents the workflow used to create the documentation automatically from the comments in the JavaScript source files using JSdoc and smartercomments. You can see the results on [the ApiDoc page](https://maltretieren.github.io/apidoc/2014/11/01/ApiDoc/){:target="_self"}

Preparation of a Controllers namespace
{% highlight javascript linenos=table %}
/**
 * @namespace Controllers
 * @description  The controller must be responsible for binding model data to views using $scope, and control information flow. It does not contain logic to fetch the data or manipulating it.
 */
{% endhighlight %}

Annotating single controllers
{% highlight javascript linenos=table %}
/**
 * @namespace Controllers.CommentsCtrl
 * @memborOf Controllers
 * @description `Bundles` *functions* to receive and save comments
 */
{% endhighlight %}