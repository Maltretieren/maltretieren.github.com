---
layout: documentation
categories:
- template
tagline:
tags:
- example
published: true
---

<!-- injected DocCtrl via documentation layo -->
#Index

**Modules**

* [controllers](#module_controllers)
  * [controllers~TableCtrl()](#module_controllers..TableCtrl)
  * [controllers~GithubModalCtrl()](#module_controllers..GithubModalCtrl)
  * [controllers~GithubCtrl()](#module_controllers..GithubCtrl)
  * [controllers~ConfigCtrl()](#module_controllers..ConfigCtrl)
  * [controllers~ToasterController()](#module_controllers..ToasterController)
  * [controllers~GithubForkCtrl()](#module_controllers..GithubForkCtrl)
  * [controllers~GithubEditCtrl()](#module_controllers..GithubEditCtrl)
  * [controllers~RatingCtrl()](#module_controllers..RatingCtrl)
* [services](#module_services)
  * [services~requestCode()](#module_services..requestCode)
  * [services~requestToken(oauthCode)](#module_services..requestToken)
  * [services~userInfo()](#module_services..userInfo)
    * [userInfo~user()](#module_services..userInfo..user)
  * [services~user()](#module_services..user)
  * [services~logout()](#module_services..logout)
  * [services~GithubSrvc()](#module_services..GithubSrvc)
  * [services~requestCode()](#module_services..requestCode)
  * [services~testAdmin()](#module_services..testAdmin)
  * [services~fork()](#module_services..fork)
  * [services~renameRepo()](#module_services..renameRepo)
  * [services~batchDelete()](#module_services..batchDelete)
  * [services~getContents()](#module_services..getContents)
    * [getContents~fileCount()](#module_services..getContents..fileCount)
  * [services~getFiles()](#module_services..getFiles)
    * [getFiles~doGet()](#module_services..getFiles..doGet)
  * [services~deleteBranch()](#module_services..deleteBranch)
  * [services~renameBranch()](#module_services..renameBranch)
  * [services~createBranch()](#module_services..createBranch)
  * [services~postProcess()](#module_services..postProcess)
  * [services~getContent()](#module_services..getContent)
  * [services~editContent()](#module_services..editContent)
  * [services~commit()](#module_services..commit)
  * [services~commitMany()](#module_services..commitMany)
  * [services~deleteContent()](#module_services..deleteContent)
  * [services.setUserName()](#module_services.setUserName)
  * [services.setIsAdmin()](#module_services.setIsAdmin)
  * [services.setPassword()](#module_services.setPassword)
  * [services.logout()](#module_services.logout)
  * [services.getUser()](#module_services.getUser)
  * [services~onFocus()](#module_services..onFocus)
  * [services~switch()](#module_services..switch)
  * [class: services~GithubAuthService](#module_services..GithubAuthService)

**Functions**

* [link()](#link)
  * [link~handler()](#link..handler)
* [link()](#link)
  * [link~handler()](#link..handler)
 
<a name="module_controllers"></a>
#controllers
The controller must be responsible for binding model data to views using $scope, and control information flow. It does not contain logic to fetch the data or manipulating it.

**Members**

* [controllers](#module_controllers)
  * [controllers~TableCtrl()](#module_controllers..TableCtrl)
  * [controllers~GithubModalCtrl()](#module_controllers..GithubModalCtrl)
  * [controllers~GithubCtrl()](#module_controllers..GithubCtrl)
  * [controllers~ConfigCtrl()](#module_controllers..ConfigCtrl)
  * [controllers~ToasterController()](#module_controllers..ToasterController)
  * [controllers~GithubForkCtrl()](#module_controllers..GithubForkCtrl)
  * [controllers~GithubEditCtrl()](#module_controllers..GithubEditCtrl)
  * [controllers~RatingCtrl()](#module_controllers..RatingCtrl)

<a name="module_controllers..TableCtrl"></a>
##controllers~TableCtrl()
Function for table sort and search

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..GithubModalCtrl"></a>
##controllers~GithubModalCtrl()
Show a modal window to enter user credentials...

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..GithubCtrl"></a>
##controllers~GithubCtrl()
GitHub controller using the GitHub service

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..ConfigCtrl"></a>
##controllers~ConfigCtrl()
Edit the configuration file

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..ToasterController"></a>
##controllers~ToasterController()
For popup messages

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..GithubForkCtrl"></a>
##controllers~GithubForkCtrl()
Fork functionality

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..GithubEditCtrl"></a>
##controllers~GithubEditCtrl()
This controller manages edits on content on github

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..RatingCtrl"></a>
##controllers~RatingCtrl()
Star rating

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_services"></a>
#services
Services are singleton objects used to share data (e.g. among several controllers) and generallyencapsulate reusable pieces of code (since they can be injected and offer their "services" in any part of your app that needs them: controllers, directives, filters, other services etc).

**Members**

* [services](#module_services)
  * [services~requestCode()](#module_services..requestCode)
  * [services~requestToken(oauthCode)](#module_services..requestToken)
  * [services~userInfo()](#module_services..userInfo)
    * [userInfo~user()](#module_services..userInfo..user)
  * [services~user()](#module_services..user)
  * [services~logout()](#module_services..logout)
  * [services~GithubSrvc()](#module_services..GithubSrvc)
  * [services~requestCode()](#module_services..requestCode)
  * [services~testAdmin()](#module_services..testAdmin)
  * [services~fork()](#module_services..fork)
  * [services~renameRepo()](#module_services..renameRepo)
  * [services~batchDelete()](#module_services..batchDelete)
  * [services~getContents()](#module_services..getContents)
    * [getContents~fileCount()](#module_services..getContents..fileCount)
  * [services~getFiles()](#module_services..getFiles)
    * [getFiles~doGet()](#module_services..getFiles..doGet)
  * [services~deleteBranch()](#module_services..deleteBranch)
  * [services~renameBranch()](#module_services..renameBranch)
  * [services~createBranch()](#module_services..createBranch)
  * [services~postProcess()](#module_services..postProcess)
  * [services~getContent()](#module_services..getContent)
  * [services~editContent()](#module_services..editContent)
  * [services~commit()](#module_services..commit)
  * [services~commitMany()](#module_services..commitMany)
  * [services~deleteContent()](#module_services..deleteContent)
  * [services.setUserName()](#module_services.setUserName)
  * [services.setIsAdmin()](#module_services.setIsAdmin)
  * [services.setPassword()](#module_services.setPassword)
  * [services.logout()](#module_services.logout)
  * [services.getUser()](#module_services.getUser)
  * [services~onFocus()](#module_services..onFocus)
  * [services~switch()](#module_services..switch)
  * [class: services~GithubAuthService](#module_services..GithubAuthService)

<a name="module_services..requestCode"></a>
##services~requestCode()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..requestToken"></a>
##services~requestToken(oauthCode)
Description

**Params**

- oauthCode   

**Scope**: inner function of [services](#module_services)  
**Returns**:  - MemberExpression  
<a name="module_services..userInfo"></a>
##services~userInfo()
Description

**Scope**: inner function of [services](#module_services)  
**Returns**:  - ObjectExpression  
<a name="module_services..user"></a>
##services~user()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..logout"></a>
##services~logout()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..GithubSrvc"></a>
##services~GithubSrvc()
**Scope**: inner function of [services](#module_services)  
<a name="module_services..requestCode"></a>
##services~requestCode()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..testAdmin"></a>
##services~testAdmin()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..fork"></a>
##services~fork()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..renameRepo"></a>
##services~renameRepo()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..batchDelete"></a>
##services~batchDelete()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getContents"></a>
##services~getContents()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getFiles"></a>
##services~getFiles()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..deleteBranch"></a>
##services~deleteBranch()
With the help of this function the template brach is deleted after forkin

**Scope**: inner function of [services](#module_services)  
<a name="module_services..renameBranch"></a>
##services~renameBranch()
Rename template branch to master branch

**Scope**: inner function of [services](#module_services)  
<a name="module_services..createBranch"></a>
##services~createBranch()
Creates a branch

**Scope**: inner function of [services](#module_services)  
<a name="module_services..postProcess"></a>
##services~postProcess()
After forking it preprocesses the config file

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getContent"></a>
##services~getContent()
Get content of a file hosted on GitHub

**Scope**: inner function of [services](#module_services)  
<a name="module_services..editContent"></a>
##services~editContent()
Edit content on a file hosted on github

**Scope**: inner function of [services](#module_services)  
**Returns**:  - a save promise after editing.  
<a name="module_services..commit"></a>
##services~commit()
Commit a file back to GitHub

**Scope**: inner function of [services](#module_services)  
<a name="module_services..commitMany"></a>
##services~commitMany()
Commit many files back to GitHub

**Scope**: inner function of [services](#module_services)  
<a name="module_services..deleteContent"></a>
##services~deleteContent()
Delete content from GitHub

**Scope**: inner function of [services](#module_services)  
<a name="module_services.setUserName"></a>
##services.setUserName()
Description

<a name="module_services.setIsAdmin"></a>
##services.setIsAdmin()
Description

<a name="module_services.setPassword"></a>
##services.setPassword()
Description

<a name="module_services.logout"></a>
##services.logout()
Description

<a name="module_services.getUser"></a>
##services.getUser()
Description

<a name="module_services..onFocus"></a>
##services~onFocus()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..switch"></a>
##services~switch()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..GithubAuthService"></a>
##class: services~GithubAuthService
**Members**

* [class: services~GithubAuthService](#module_services..GithubAuthService)

<a name="link"></a>
#link()
Description

<a name="link"></a>
#link()
Description


