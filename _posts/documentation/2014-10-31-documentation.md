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

**Functions**

* [CommentsCtrl($scope, $http, $dialogs, $timeout, toaster, UserModel)](#CommentsCtrl)
* [WikiquoteCtrl
Receive a complete list of all comments()](#WikiquoteCtrl
Receive a complete list of all comments)
* [TableCtrl
Function for table sort and search()](#TableCtrl
Function for table sort and search)
* [GithubModalCtrl()](#GithubModalCtrl)
* [GithubCtrl
 GitHub controller using the GitHub service()](#GithubCtrl
 GitHub controller using the GitHub service)
* [$scope.requestCode()
Request a login code from github if the user presses the login button()](#$scope.requestCode()
Request a login code from github if the user presses the login button)
* [$scope.logout
Calls GithubAuthService.logout() - this is not really a logout from github, but the access token is deleted()](#$scope.logout
Calls GithubAuthService.logout() - this is not really a logout from github, but the access token is deleted)
* [$scope.$on('UserModel::userLoggedIn')
called when a user logged in()](#$scope.$on('UserModel__userLoggedIn')
called when a user logged in)
* [$scope.$on('UserModel::userLoggedOut')
called when a user logged out()](#$scope.$on('UserModel__userLoggedOut')
called when a user logged out)
* [ConfigCtrl
Edit the configuration file()](#ConfigCtrl
Edit the configuration file)
* [$scope.saveFrontendConfig
Commit frontend config file back to github()](#$scope.saveFrontendConfig
Commit frontend config file back to github)
* [$scope.saveBackendConfig
Commit backend config file to github()](#$scope.saveBackendConfig
Commit backend config file to github)
* [ToasterController
For popup messages()](#ToasterController
For popup messages)
* [GithubForkCtrl
Fork functionality()](#GithubForkCtrl
Fork functionality)
* [switchTheme
change theme()](#switchTheme
change theme)
* [$scope.fork
manages to fork this page()](#$scope.fork
manages to fork this page)
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
<a name="WikiquoteCtrl
Receive a complete list of all comments"></a>
#WikiquoteCtrl
Receive a complete list of all comments()
<a name="TableCtrl
Function for table sort and search"></a>
#TableCtrl
Function for table sort and search()
<a name="GithubModalCtrl"></a>
#GithubModalCtrl()
<a name="GithubCtrl
 GitHub controller using the GitHub service"></a>
#GithubCtrl
 GitHub controller using the GitHub service()
<a name="$scope.requestCode()
Request a login code from github if the user presses the login button"></a>
#$scope.requestCode()
Request a login code from github if the user presses the login button()
<a name="$scope.logout
Calls GithubAuthService.logout() - this is not really a logout from github, but the access token is deleted"></a>
#$scope.logout
Calls GithubAuthService.logout() - this is not really a logout from github, but the access token is deleted()
<a name="$scope.$on('UserModel__userLoggedIn')
called when a user logged in"></a>
#$scope.$on('UserModel::userLoggedIn')
called when a user logged in()
<a name="$scope.$on('UserModel__userLoggedOut')
called when a user logged out"></a>
#$scope.$on('UserModel::userLoggedOut')
called when a user logged out()
<a name="ConfigCtrl
Edit the configuration file"></a>
#ConfigCtrl
Edit the configuration file()
<a name="$scope.saveFrontendConfig
Commit frontend config file back to github"></a>
#$scope.saveFrontendConfig
Commit frontend config file back to github()
<a name="$scope.saveBackendConfig
Commit backend config file to github"></a>
#$scope.saveBackendConfig
Commit backend config file to github()
<a name="ToasterController
For popup messages"></a>
#ToasterController
For popup messages()
<a name="GithubForkCtrl
Fork functionality"></a>
#GithubForkCtrl
Fork functionality()
<a name="switchTheme
change theme"></a>
#switchTheme
change theme()
<a name="$scope.fork
manages to fork this page"></a>
#$scope.fork
manages to fork this page()
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
Description

<a name="renameBranch"></a>
#renameBranch()
Description

<a name="createBranch"></a>
#createBranch()
Description

<a name="postProcess"></a>
#postProcess()
Description

<a name="getContent"></a>
#getContent()
Description

<a name="editContent"></a>
#editContent()
Description

<a name="commit"></a>
#commit()
Description

<a name="commitMany"></a>
#commitMany()
Description

<a name="deleteContent"></a>
#deleteContent()
Description

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


