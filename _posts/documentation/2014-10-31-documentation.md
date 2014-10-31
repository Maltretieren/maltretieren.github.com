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

**Classes**

* [class: GithubAuthService](#GithubAuthService)

**Functions**

* [CommentsCtrl($scope, $http, $dialogs, $timeout, toaster, UserModel)](#CommentsCtrl)
* [WikiquoteCtrl()](#WikiquoteCtrl)
* [TableCtrl()](#TableCtrl)
* [GithubModalCtrl()](#GithubModalCtrl)
* [GithubCtrl()](#GithubCtrl)
* [ConfigCtrl()](#ConfigCtrl)
* [ToasterController()](#ToasterController)
* [GithubForkCtrl()](#GithubForkCtrl)
* [switchTheme()](#switchTheme)
* [GithubEditCtrl()](#GithubEditCtrl)
* [callback()](#callback)
* [RatingCtrl()](#RatingCtrl)
* [link()](#link)
  * [link~handler()](#link..handler)
* [link()](#link)
  * [link~handler()](#link..handler)
* [instance(username, password)](#instance)
* [requestCode()](#requestCode)
* [requestToken(oauthCode)](#requestToken)
* [userInfo()](#userInfo)
* [user()](#user)
* [user()](#user)
* [logout()](#logout)
* [GithubSrvc()](#GithubSrvc)
* [requestCode()](#requestCode)
* [testAdmin()](#testAdmin)
* [fork()](#fork)
* [renameRepo()](#renameRepo)
* [batchDelete()](#batchDelete)
* [getContents()](#getContents)
  * [getContents~fileCount()](#getContents..fileCount)
* [getFiles()](#getFiles)
  * [getFiles~doGet()](#getFiles..doGet)
* [deleteBranch()](#deleteBranch)
* [renameBranch()](#renameBranch)
* [createBranch()](#createBranch)
* [postProcess()](#postProcess)
* [getContent()](#getContent)
* [editContent()](#editContent)
* [commit()](#commit)
* [commitMany()](#commitMany)
* [deleteContent()](#deleteContent)
* [setUserName()](#setUserName)
* [setIsAdmin()](#setIsAdmin)
* [setPassword()](#setPassword)
* [logout()](#logout)
* [getUser()](#getUser)
* [onFocus()](#onFocus)
* [switch()](#switch)
 
<a name="GithubAuthService"></a>
#class: GithubAuthService
**Members**

* [class: GithubAuthService](#GithubAuthService)

<a name="CommentsCtrl"></a>
#CommentsCtrl($scope, $http, $dialogs, $timeout, toaster, UserModel)
Receive a complete list of all comments

**Params**

- $scope   
- $http   
- $dialogs   
- $timeout   
- toaster   
- UserModel   

**Returns**:  - nothing  
<a name="WikiquoteCtrl"></a>
#WikiquoteCtrl()
Receive a complete list of all comments

<a name="TableCtrl"></a>
#TableCtrl()
Function for table sort and search

<a name="GithubModalCtrl"></a>
#GithubModalCtrl()
Show a modal window to enter user credentials...

<a name="GithubCtrl"></a>
#GithubCtrl()
GitHub controller using the GitHub service

<a name="ConfigCtrl"></a>
#ConfigCtrl()
Edit the configuration file

<a name="ToasterController"></a>
#ToasterController()
For popup messages

<a name="GithubForkCtrl"></a>
#GithubForkCtrl()
Fork functionality

<a name="switchTheme"></a>
#switchTheme()
change theme

<a name="GithubEditCtrl"></a>
#GithubEditCtrl()
This controller manages edits on content on github

<a name="callback"></a>
#callback()
Hotkey pressed callback, calls save on editor
`save`

<a name="RatingCtrl"></a>
#RatingCtrl()
Star rating

<a name="link"></a>
#link()
Description

<a name="link"></a>
#link()
Description

<a name="instance"></a>
#instance(username, password)
Description

**Params**

- username   
- password   

**Returns**:  - github instance  
<a name="requestCode"></a>
#requestCode()
Description

<a name="requestToken"></a>
#requestToken(oauthCode)
Description

**Params**

- oauthCode   

**Returns**:  - MemberExpression  
<a name="userInfo"></a>
#userInfo()
Description

**Returns**:  - ObjectExpression  
<a name="user"></a>
#user()
Description

**Returns**:  - userPromise  
<a name="user"></a>
#user()
Description

<a name="logout"></a>
#logout()
Description

<a name="GithubSrvc"></a>
#GithubSrvc()
<a name="requestCode"></a>
#requestCode()
Description

<a name="testAdmin"></a>
#testAdmin()
Description

<a name="fork"></a>
#fork()
Description

<a name="renameRepo"></a>
#renameRepo()
Description

<a name="batchDelete"></a>
#batchDelete()
Description

<a name="getContents"></a>
#getContents()
Description

<a name="getFiles"></a>
#getFiles()
Description

<a name="deleteBranch"></a>
#deleteBranch()
With the help of this function the template brach is deleted after forkin

<a name="renameBranch"></a>
#renameBranch()
Rename template branch to master branch

<a name="createBranch"></a>
#createBranch()
Creates a branch

<a name="postProcess"></a>
#postProcess()
After forking it preprocesses the config file

<a name="getContent"></a>
#getContent()
Get content of a file hosted on GitHub

<a name="editContent"></a>
#editContent()
Edit content on a file hosted on github

**Returns**:  - a save promise after editing.  
<a name="commit"></a>
#commit()
Commit a file back to GitHub

<a name="commitMany"></a>
#commitMany()
Commit many files back to GitHub

<a name="deleteContent"></a>
#deleteContent()
Delete content from GitHub

<a name="setUserName"></a>
#setUserName()
Description

<a name="setIsAdmin"></a>
#setIsAdmin()
Description

<a name="setPassword"></a>
#setPassword()
Description

<a name="logout"></a>
#logout()
Description

<a name="getUser"></a>
#getUser()
Description

<a name="onFocus"></a>
#onFocus()
Description

<a name="switch"></a>
#switch()
Description


