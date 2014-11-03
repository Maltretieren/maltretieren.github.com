---
layout: post
categories:
 - devdoc
tagline:
tags:
 - markdown
published: true
frontpage: false
comments: true
---
#Markdown
Markdown is the language which drives most of the content on this page. Instead of writing HTML code you have a higher level language to define how the content looks like. A markdown parser takes the markdown code and translates it to HTML code.

# Parsers available on GitHub
To get a list of available markdown parsers please refer to [Github Pages Dependency versions](https://pages.github.com/versions/).

## Configuration
You can configure which markdown parser should be used. Refer to the `_config.yml` file in the root directory and look for the "markdown" key:

{% highlight ruby %}
markdown: kramdown
{% endhighlight %}

On GitHub there are 3 different options available:

 - kramdown
 - redcarpet
 - rdiscount

## Kramdown
The documentation can be found on [the Kramdown homepage](http://kramdown.gettalong.org/). 

### Useful features
- define a target attribut for links:
{% highlight ruby %}
[Link Title](http://xyz.github.io/){:target="_self"}
{% endhighlight %}

### Quirks
Headings are defined with `# h1 heading` or `#h1 heading`. There needs to be a blank line before the heading definition. RDiscount is more tolerant and renders the headings even without a blank line. 

## Redcarpet
The documentation can be found on [the Redcarpet GitHub repository](https://github.com/vmg/redcarpet). Redcarpet is released by [GitHub](https://github.com/blog/832-rolling-out-the-redcarpet) 

## RDiscount
The documentation can be found on [RDiscount GitHub repository](https://github.com/davidfstr/rdiscount). 

### Quirks
It doesn't support adding a target attribute to a link (see section "Cool Features" for kramdown). This is necessary because html5 mode is enabled on this page. In html5 mode every link needs to contain a `target='_self'` attribute to redirect to the link you clicked on.