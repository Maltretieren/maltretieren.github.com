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
The goal is to automatically run tests for this angularjs site whssSSSen a new file is deployed to github. The tests will run on Travis. The testing combo reads as following

 - Karma (Test Runner, integrates well with AnularJS)
 - Jasmine (Expression Language to express test in your application)
 - Istanbul (Code Coverage)
 - PhantomJS (Headless/GUIless browser)
 - Selenium (Run End2End -e2e- tests)
 - Protractor (Extends Selenium for AngularJS testing)
 - Grunt Plugins (grunt-protractor-runner grunt-contrib-watch, grunt-contrib-connect, grunt-saucelabs)
 
## Tips and Tricks
### Listen to changes

{% highlight sh linenos=table %}
grunt watch
{% endhighlight %}