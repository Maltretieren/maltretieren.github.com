---
layout: post
categories:
 - devdoc
tagline:
tags:
 - basic
published: true
frontpage: false
comments: true
---
# ApiDoc

The output of the ApiDoc documentates the JavaScript code of the AngularJS Controllers and Services. This post shows you the workflow used to create the documentation automatically from the comments in the JavaScript source files using [JSdoc](http://usejsdoc.org/){:target="_self"} and [smartercomments](http://smartcomments.github.io/){:target="_self"}. You can see the results on [the ApiDoc page](https://maltretieren.github.io/apidoc/2014/11/01/ApiDoc/){:target="_self"}.



# JSdoc
JSdoc is used to parse the JavaScript source files for comments. This could be done manually before committing by running the grunt task `jsdoc2md`. By the name of the task you can see that the plugin grunt-jsdoc-to-markdown is used to get the documentation in markdown.

# Smartcomments
I use smartcomments to prevent cluttering my code comments with `@param` annotations, but also to be sure that the documentation of atttributes passed into functions are always up to date. The way it works is going through the JavaScript codes and where it doesn't find a comment it adds it.  This is an optional task run by Travis during assembly. Only the resulting ApiDoc file is commited back, not the modified JS files). It runs before running the JSdoc task.

So, during Travis build I run the smartcomments generation command defined in `.travis.yml`:
{% highlight ruby %}
before_script:
  # automatically generate comments
  - smartcomments -g --config ./tests/config/smartcomments.json
{% endhighlight %}

First you need to have a `./tests/config/smartcomments.json`configuration file which is passed to smartcomments in abouve statement via the `--config` parameter.
{% highlight javascript linenos=table %}
{
    "target_dir": ["app/js/"],
    "match_files": ["^((?!~).)*.(js)$"],
    "backup" : false,
    "private" : true,
    "favor_generated" : true,
    "tags": {
        "function":{
            "name":{},
            "desc":{"value":"Description"},
            "params":{}
        }
    }
}
{% endhighlight %}

Please note the `private: true` parameter. It will skip adding comments to functions annotated with `/** @private */` as shown in the following section.

## Commenting
Preparation of a "Controllers" namespace:
{% highlight javascript linenos=table %}
/**
 * @namespace Controllers
 * @description  The controller must be responsible for binding model data to views using $scope, and control information flow. It does not contain logic to fetch the data or manipulating it.
 */
{% endhighlight %}

Annotating a controller:
{% highlight javascript linenos=table %}
/**
 * @namespace Controllers.ExampleCtrl
 * @memborOf Controllers
 * @description ExampleCtrl is responsible for...
 */
 myApp.controller("ExampleCtrl",function ($scope) {
 ...
 }
{% endhighlight %}

Annotating a function inside the controller:
{% highlight javascript linenos=table %}
/**
 * @function getExample
 * @memberOf Controllers.ExampleCtrl
 * @description Function inside ExampleCtrl
 */
$scope.getComments = function() {
   ...
}
{% endhighlight %}

Prevent smartcomments from generating comments for functions you don't want to be visible in the documentation. Annotate with `/** @private  */` comment.

{% highlight javascript linenos=table %}
/** @private  */
var privateFunction = function() {
...
}
{% endhighlight %}

I hope this can be useful for somebody. Please leave a comment if something is not clear...
