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
  * [controllers~CommentsCtrl($scope, $http, $dialogs, $timeout, toaster, UserModel)](#module_controllers..CommentsCtrl)
  * [controllers~more()](#module_controllers..more)
  * [controllers~getComments()](#module_controllers..getComments)
  * [controllers~deleteComment(event)](#module_controllers..deleteComment)
  * [controllers~submit()](#module_controllers..submit)
  * [controllers~success()](#module_controllers..success)
  * [controllers~error()](#module_controllers..error)
  * [controllers~scrollTo(id)](#module_controllers..scrollTo)
  * [controllers~cancel()](#module_controllers..cancel)
  * [controllers~save()](#module_controllers..save)
  * [controllers~TableCtrl()](#module_controllers..TableCtrl)
  * [controllers~GithubModalCtrl()](#module_controllers..GithubModalCtrl)
  * [controllers~cancel()](#module_controllers..cancel)
  * [controllers~save()](#module_controllers..save)
  * [controllers~GithubCtrl()](#module_controllers..GithubCtrl)
  * [controllers~login()](#module_controllers..login)
  * [controllers~requestCode()](#module_controllers..requestCode)
  * [controllers~logout()](#module_controllers..logout)
  * [controllers~ConfigCtrl()](#module_controllers..ConfigCtrl)
  * [controllers~setOutput(key, key2, newValue)](#module_controllers..setOutput)
  * [controllers~saveFrontendConfig()](#module_controllers..saveFrontendConfig)
  * [controllers~saveBackendConfig()](#module_controllers..saveBackendConfig)
  * [controllers~ToasterController()](#module_controllers..ToasterController)
  * [controllers~pop(toast)](#module_controllers..pop)
  * [controllers~clear()](#module_controllers..clear)
  * [controllers~GithubForkCtrl()](#module_controllers..GithubForkCtrl)
  * [controllers~checkUnique()](#module_controllers..checkUnique)
  * [controllers~onload()](#module_controllers..onload)
  * [controllers~onerror(e)](#module_controllers..onerror)
  * [controllers~good()](#module_controllers..good)
  * [controllers~error(e)](#module_controllers..error)
  * [controllers~switchTheme()](#module_controllers..switchTheme)
  * [controllers~fork()](#module_controllers..fork)
  * [controllers~modifiyConfig()](#module_controllers..modifiyConfig)
  * [controllers~modifiyConfig()](#module_controllers..modifiyConfig)
  * [controllers~pop(title, text)](#module_controllers..pop)
  * [controllers~zip()](#module_controllers..zip)
  * [controllers~selectAllExport()](#module_controllers..selectAllExport)
  * [controllers~unselectAllExport()](#module_controllers..unselectAllExport)
  * [controllers~add()](#module_controllers..add)
  * [controllers~onloadend(e)](#module_controllers..onloadend)
  * [controllers~selectAllImport()](#module_controllers..selectAllImport)
  * [controllers~unselectAllImport()](#module_controllers..unselectAllImport)
  * [controllers~showContent(selected)](#module_controllers..showContent)
  * [controllers~doImport()](#module_controllers..doImport)
  * [controllers~endsWith(str, suffix)](#module_controllers..endsWith)
  * [controllers~GithubEditCtrl()](#module_controllers..GithubEditCtrl)
  * [controllers~callback()](#module_controllers..callback)
  * [controllers~getTagClass(city)](#module_controllers..getTagClass)
  * [controllers~save()](#module_controllers..save)
  * [controllers~cancel()](#module_controllers..cancel)
  * [controllers~delete()](#module_controllers..delete)
  * [controllers~today()](#module_controllers..today)
  * [controllers~clear()](#module_controllers..clear)
  * [controllers~open($event)](#module_controllers..open)
  * [controllers~RatingCtrl()](#module_controllers..RatingCtrl)
  * [controllers~success(data)](#module_controllers..success)
  * [controllers~click(score, evt)](#module_controllers..click)
  * [controllers~getRatings()](#module_controllers..getRatings)
  * [controllers~success(data)](#module_controllers..success)
  * [controllers~click(score, evt)](#module_controllers..click)
* [services](#module_services)
  * [services~requestCode()](#module_services..requestCode)
  * [services~requestToken(oauthCode)](#module_services..requestToken)
  * [services~userInfo()](#module_services..userInfo)
  * [services~user()](#module_services..user)
  * [services~user()](#module_services..user)
  * [services~logout()](#module_services..logout)
  * [services~GithubSrvc()](#module_services..GithubSrvc)
  * [services~requestCode()](#module_services..requestCode)
  * [services~testAdmin()](#module_services..testAdmin)
  * [services~fork(options)](#module_services..fork)
  * [services~renameRepo(forkName)](#module_services..renameRepo)
  * [services~batchDelete(forkName)](#module_services..batchDelete)
  * [services~getContents(path)](#module_services..getContents)
  * [services~fileCount(path)](#module_services..fileCount)
  * [services~getFiles(fileNames)](#module_services..getFiles)
  * [services~doGet(fileName)](#module_services..doGet)
  * [services~deleteBranch(forkName, branchName)](#module_services..deleteBranch)
  * [services~renameBranch(forkName)](#module_services..renameBranch)
  * [services~createBranch(forkName, branchName)](#module_services..createBranch)
  * [services~postProcess(path, replace, repositoryName)](#module_services..postProcess)
  * [services~getContent(path)](#module_services..getContent)
  * [services~editContent(path)](#module_services..editContent)
  * [services~commit(text, path, branch, showMessage, force)](#module_services..commit)
  * [services~commitMany(posts, message, showMessage, force)](#module_services..commitMany)
  * [services~deleteContent(path)](#module_services..deleteContent)
  * [services~serializeUser(user)](#module_services..serializeUser)
  * [services~setUserName(userName)](#module_services..setUserName)
  * [services~setIsAdmin(isAdmin)](#module_services..setIsAdmin)
  * [services~setPassword(password)](#module_services..setPassword)
  * [services~logout()](#module_services..logout)
  * [services~getUser()](#module_services..getUser)
  * [services~getParams(url, paramName)](#module_services..getParams)
  * [services~onpopstate()](#module_services..onpopstate)
  * [services~decode(s)](#module_services..decode)
  * [services~getUrl()](#module_services..getUrl)
  * [services~parseDateTitle(path)](#module_services..parseDateTitle)
  * [services~poll(repoName, branchName)](#module_services..poll)
  * [services~restartPolling()](#module_services..restartPolling)
  * [services~restart()](#module_services..restart)
  * [services~parse(content)](#module_services..parse)
  * [services~create(content)](#module_services..create)
  * [services~getEditorContent()](#module_services..getEditorContent)
  * [services~showContentInEditor(editorContent)](#module_services..showContentInEditor)
  * [services~onFocus(e)](#module_services..onFocus)
  * [services~poll(repoName)](#module_services..poll)
  * [services~pollForImg()](#module_services..pollForImg)
  * [services~onload()](#module_services..onload)
  * [services~onerror()](#module_services..onerror)
  * [services~pollForImage()](#module_services..pollForImage)
  * [services~switch(styleName)](#module_services..switch)
  * [class: services~GithubAuthService](#module_services..GithubAuthService)

**Functions**

* [link(scope, element, attrs, ctrl)](#link)
* [link(scope, elem, attrs)](#link)
* [handler(setup)](#handler)
* [LABjsLoaded()](#LABjsLoaded)
* [onreadystatechange()](#onreadystatechange)
 
<a name="module_controllers"></a>
#controllers
The controller must be responsible for binding model data to views using $scope, and control information flow. It does not contain logic to fetch the data or manipulating it.

**Members**

* [controllers](#module_controllers)
  * [controllers~CommentsCtrl($scope, $http, $dialogs, $timeout, toaster, UserModel)](#module_controllers..CommentsCtrl)
  * [controllers~more()](#module_controllers..more)
  * [controllers~getComments()](#module_controllers..getComments)
  * [controllers~deleteComment(event)](#module_controllers..deleteComment)
  * [controllers~submit()](#module_controllers..submit)
  * [controllers~success()](#module_controllers..success)
  * [controllers~error()](#module_controllers..error)
  * [controllers~scrollTo(id)](#module_controllers..scrollTo)
  * [controllers~cancel()](#module_controllers..cancel)
  * [controllers~save()](#module_controllers..save)
  * [controllers~TableCtrl()](#module_controllers..TableCtrl)
  * [controllers~GithubModalCtrl()](#module_controllers..GithubModalCtrl)
  * [controllers~cancel()](#module_controllers..cancel)
  * [controllers~save()](#module_controllers..save)
  * [controllers~GithubCtrl()](#module_controllers..GithubCtrl)
  * [controllers~login()](#module_controllers..login)
  * [controllers~requestCode()](#module_controllers..requestCode)
  * [controllers~logout()](#module_controllers..logout)
  * [controllers~ConfigCtrl()](#module_controllers..ConfigCtrl)
  * [controllers~setOutput(key, key2, newValue)](#module_controllers..setOutput)
  * [controllers~saveFrontendConfig()](#module_controllers..saveFrontendConfig)
  * [controllers~saveBackendConfig()](#module_controllers..saveBackendConfig)
  * [controllers~ToasterController()](#module_controllers..ToasterController)
  * [controllers~pop(toast)](#module_controllers..pop)
  * [controllers~clear()](#module_controllers..clear)
  * [controllers~GithubForkCtrl()](#module_controllers..GithubForkCtrl)
  * [controllers~checkUnique()](#module_controllers..checkUnique)
  * [controllers~onload()](#module_controllers..onload)
  * [controllers~onerror(e)](#module_controllers..onerror)
  * [controllers~good()](#module_controllers..good)
  * [controllers~error(e)](#module_controllers..error)
  * [controllers~switchTheme()](#module_controllers..switchTheme)
  * [controllers~fork()](#module_controllers..fork)
  * [controllers~modifiyConfig()](#module_controllers..modifiyConfig)
  * [controllers~modifiyConfig()](#module_controllers..modifiyConfig)
  * [controllers~pop(title, text)](#module_controllers..pop)
  * [controllers~zip()](#module_controllers..zip)
  * [controllers~selectAllExport()](#module_controllers..selectAllExport)
  * [controllers~unselectAllExport()](#module_controllers..unselectAllExport)
  * [controllers~add()](#module_controllers..add)
  * [controllers~onloadend(e)](#module_controllers..onloadend)
  * [controllers~selectAllImport()](#module_controllers..selectAllImport)
  * [controllers~unselectAllImport()](#module_controllers..unselectAllImport)
  * [controllers~showContent(selected)](#module_controllers..showContent)
  * [controllers~doImport()](#module_controllers..doImport)
  * [controllers~endsWith(str, suffix)](#module_controllers..endsWith)
  * [controllers~GithubEditCtrl()](#module_controllers..GithubEditCtrl)
  * [controllers~callback()](#module_controllers..callback)
  * [controllers~getTagClass(city)](#module_controllers..getTagClass)
  * [controllers~save()](#module_controllers..save)
  * [controllers~cancel()](#module_controllers..cancel)
  * [controllers~delete()](#module_controllers..delete)
  * [controllers~today()](#module_controllers..today)
  * [controllers~clear()](#module_controllers..clear)
  * [controllers~open($event)](#module_controllers..open)
  * [controllers~RatingCtrl()](#module_controllers..RatingCtrl)
  * [controllers~success(data)](#module_controllers..success)
  * [controllers~click(score, evt)](#module_controllers..click)
  * [controllers~getRatings()](#module_controllers..getRatings)
  * [controllers~success(data)](#module_controllers..success)
  * [controllers~click(score, evt)](#module_controllers..click)

<a name="module_controllers..CommentsCtrl"></a>
##controllers~CommentsCtrl($scope, $http, $dialogs, $timeout, toaster, UserModel)
Receive a complete list of all comments

**Params**

- $scope   
- $http   
- $dialogs   
- $timeout   
- toaster   
- UserModel   

**Scope**: inner function of [controllers](#module_controllers)  
**Returns**:  - nothing  
<a name="module_controllers..more"></a>
##controllers~more()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..getComments"></a>
##controllers~getComments()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..deleteComment"></a>
##controllers~deleteComment(event)
Description

**Params**

- event   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..submit"></a>
##controllers~submit()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..success"></a>
##controllers~success()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..error"></a>
##controllers~error()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..scrollTo"></a>
##controllers~scrollTo(id)
Description scrollTo

**Params**

- id   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..cancel"></a>
##controllers~cancel()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..save"></a>
##controllers~save()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..TableCtrl"></a>
##controllers~TableCtrl()
Function for table sort and search

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..GithubModalCtrl"></a>
##controllers~GithubModalCtrl()
Show a modal window to enter user credentials...

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..cancel"></a>
##controllers~cancel()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..save"></a>
##controllers~save()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..GithubCtrl"></a>
##controllers~GithubCtrl()
GitHub controller using the GitHub service

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..login"></a>
##controllers~login()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..requestCode"></a>
##controllers~requestCode()
Request a login code from github if the user presses the login button

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..logout"></a>
##controllers~logout()
Calls GithubAuthService.logout() - this is not really a logout from github, but the access token is deleted

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..ConfigCtrl"></a>
##controllers~ConfigCtrl()
Edit the configuration file

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..setOutput"></a>
##controllers~setOutput(key, key2, newValue)
Description

**Params**

- key   
- key2   
- newValue   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..saveFrontendConfig"></a>
##controllers~saveFrontendConfig()
Commit frontend config file back to github

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..saveBackendConfig"></a>
##controllers~saveBackendConfig()
Commit backend config file to github

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..ToasterController"></a>
##controllers~ToasterController()
For popup messages

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..pop"></a>
##controllers~pop(toast)
Description

**Params**

- toast   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..clear"></a>
##controllers~clear()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..GithubForkCtrl"></a>
##controllers~GithubForkCtrl()
Fork functionality

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..checkUnique"></a>
##controllers~checkUnique()
This checks if the repo already exists

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..onload"></a>
##controllers~onload()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..onerror"></a>
##controllers~onerror(e)
Description

**Params**

- e   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..good"></a>
##controllers~good()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..error"></a>
##controllers~error(e)
Description

**Params**

- e   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..switchTheme"></a>
##controllers~switchTheme()
change theme

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..fork"></a>
##controllers~fork()
manages to fork this page

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..modifiyConfig"></a>
##controllers~modifiyConfig()
Preprocess promise and commit to github

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..modifiyConfig"></a>
##controllers~modifiyConfig()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..pop"></a>
##controllers~pop(title, text)
Description

**Params**

- title   
- text   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..zip"></a>
##controllers~zip()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..selectAllExport"></a>
##controllers~selectAllExport()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..unselectAllExport"></a>
##controllers~unselectAllExport()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..add"></a>
##controllers~add()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..onloadend"></a>
##controllers~onloadend(e)
Description

**Params**

- e   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..selectAllImport"></a>
##controllers~selectAllImport()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..unselectAllImport"></a>
##controllers~unselectAllImport()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..showContent"></a>
##controllers~showContent(selected)
Description

**Params**

- selected   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..doImport"></a>
##controllers~doImport()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..endsWith"></a>
##controllers~endsWith(str, suffix)
Description

**Params**

- str   
- suffix   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..GithubEditCtrl"></a>
##controllers~GithubEditCtrl()
This controller manages edits on content on github

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..callback"></a>
##controllers~callback()
Hotkey pressed callback, calls save on editor

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..getTagClass"></a>
##controllers~getTagClass(city)
Set the css style for tags / categories

**Params**

- city   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..save"></a>
##controllers~save()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..cancel"></a>
##controllers~cancel()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..delete"></a>
##controllers~delete()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..today"></a>
##controllers~today()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..clear"></a>
##controllers~clear()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..open"></a>
##controllers~open($event)
Description

**Params**

- $event   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..RatingCtrl"></a>
##controllers~RatingCtrl()
Star rating

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..success"></a>
##controllers~success(data)
Description

**Params**

- data   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..click"></a>
##controllers~click(score, evt)
Description

**Params**

- score   
- evt   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..getRatings"></a>
##controllers~getRatings()
Description

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..success"></a>
##controllers~success(data)
Description

**Params**

- data   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_controllers..click"></a>
##controllers~click(score, evt)
Description

**Params**

- score   
- evt   

**Scope**: inner function of [controllers](#module_controllers)  
<a name="module_services"></a>
#services
Services are singleton objects used to share data (e.g. among several controllers) and generallyencapsulate reusable pieces of code (since they can be injected and offer their "services" in any part of your app that needs them: controllers, directives, filters, other services etc).

**Members**

* [services](#module_services)
  * [services~requestCode()](#module_services..requestCode)
  * [services~requestToken(oauthCode)](#module_services..requestToken)
  * [services~userInfo()](#module_services..userInfo)
  * [services~user()](#module_services..user)
  * [services~user()](#module_services..user)
  * [services~logout()](#module_services..logout)
  * [services~GithubSrvc()](#module_services..GithubSrvc)
  * [services~requestCode()](#module_services..requestCode)
  * [services~testAdmin()](#module_services..testAdmin)
  * [services~fork(options)](#module_services..fork)
  * [services~renameRepo(forkName)](#module_services..renameRepo)
  * [services~batchDelete(forkName)](#module_services..batchDelete)
  * [services~getContents(path)](#module_services..getContents)
  * [services~fileCount(path)](#module_services..fileCount)
  * [services~getFiles(fileNames)](#module_services..getFiles)
  * [services~doGet(fileName)](#module_services..doGet)
  * [services~deleteBranch(forkName, branchName)](#module_services..deleteBranch)
  * [services~renameBranch(forkName)](#module_services..renameBranch)
  * [services~createBranch(forkName, branchName)](#module_services..createBranch)
  * [services~postProcess(path, replace, repositoryName)](#module_services..postProcess)
  * [services~getContent(path)](#module_services..getContent)
  * [services~editContent(path)](#module_services..editContent)
  * [services~commit(text, path, branch, showMessage, force)](#module_services..commit)
  * [services~commitMany(posts, message, showMessage, force)](#module_services..commitMany)
  * [services~deleteContent(path)](#module_services..deleteContent)
  * [services~serializeUser(user)](#module_services..serializeUser)
  * [services~setUserName(userName)](#module_services..setUserName)
  * [services~setIsAdmin(isAdmin)](#module_services..setIsAdmin)
  * [services~setPassword(password)](#module_services..setPassword)
  * [services~logout()](#module_services..logout)
  * [services~getUser()](#module_services..getUser)
  * [services~getParams(url, paramName)](#module_services..getParams)
  * [services~onpopstate()](#module_services..onpopstate)
  * [services~decode(s)](#module_services..decode)
  * [services~getUrl()](#module_services..getUrl)
  * [services~parseDateTitle(path)](#module_services..parseDateTitle)
  * [services~poll(repoName, branchName)](#module_services..poll)
  * [services~restartPolling()](#module_services..restartPolling)
  * [services~restart()](#module_services..restart)
  * [services~parse(content)](#module_services..parse)
  * [services~create(content)](#module_services..create)
  * [services~getEditorContent()](#module_services..getEditorContent)
  * [services~showContentInEditor(editorContent)](#module_services..showContentInEditor)
  * [services~onFocus(e)](#module_services..onFocus)
  * [services~poll(repoName)](#module_services..poll)
  * [services~pollForImg()](#module_services..pollForImg)
  * [services~onload()](#module_services..onload)
  * [services~onerror()](#module_services..onerror)
  * [services~pollForImage()](#module_services..pollForImage)
  * [services~switch(styleName)](#module_services..switch)
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
<a name="module_services..userInfo"></a>
##services~userInfo()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..user"></a>
##services~user()
Description

**Scope**: inner function of [services](#module_services)  
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
##services~fork(options)
Description

**Params**

- options   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..renameRepo"></a>
##services~renameRepo(forkName)
Description

**Params**

- forkName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..batchDelete"></a>
##services~batchDelete(forkName)
Description

**Params**

- forkName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getContents"></a>
##services~getContents(path)
Description

**Params**

- path   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..fileCount"></a>
##services~fileCount(path)
Description

**Params**

- path   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getFiles"></a>
##services~getFiles(fileNames)
Description

**Params**

- fileNames   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..doGet"></a>
##services~doGet(fileName)
Description

**Params**

- fileName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..deleteBranch"></a>
##services~deleteBranch(forkName, branchName)
With the help of this function the template brach is deleted after forkin

**Params**

- forkName   
- branchName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..renameBranch"></a>
##services~renameBranch(forkName)
Rename template branch to master branch

**Params**

- forkName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..createBranch"></a>
##services~createBranch(forkName, branchName)
Creates a branch

**Params**

- forkName   
- branchName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..postProcess"></a>
##services~postProcess(path, replace, repositoryName)
After forking it preprocesses the config file

**Params**

- path   
- replace   
- repositoryName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getContent"></a>
##services~getContent(path)
Get content of a file hosted on GitHub

**Params**

- path   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..editContent"></a>
##services~editContent(path)
Edit content on a file hosted on github

**Params**

- path   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..commit"></a>
##services~commit(text, path, branch, showMessage, force)
Commit a file back to GitHub

**Params**

- text   
- path   
- branch   
- showMessage   
- force   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..commitMany"></a>
##services~commitMany(posts, message, showMessage, force)
Commit many files back to GitHub

**Params**

- posts   
- message   
- showMessage   
- force   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..deleteContent"></a>
##services~deleteContent(path)
Delete content from GitHub

**Params**

- path   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..serializeUser"></a>
##services~serializeUser(user)
Description

**Params**

- user   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..setUserName"></a>
##services~setUserName(userName)
Description

**Params**

- userName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..setIsAdmin"></a>
##services~setIsAdmin(isAdmin)
Description

**Params**

- isAdmin   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..setPassword"></a>
##services~setPassword(password)
Description

**Params**

- password   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..logout"></a>
##services~logout()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getUser"></a>
##services~getUser()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getParams"></a>
##services~getParams(url, paramName)
Description

**Params**

- url   
- paramName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..onpopstate"></a>
##services~onpopstate()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..decode"></a>
##services~decode(s)
Description

**Params**

- s   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getUrl"></a>
##services~getUrl()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..parseDateTitle"></a>
##services~parseDateTitle(path)
This function extracts date and title from a Jekyll path

**Params**

- path   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..poll"></a>
##services~poll(repoName, branchName)
Description

**Params**

- repoName   
- branchName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..restartPolling"></a>
##services~restartPolling()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..restart"></a>
##services~restart()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..parse"></a>
##services~parse(content)
Description

**Params**

- content   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..create"></a>
##services~create(content)
Description

**Params**

- content   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..getEditorContent"></a>
##services~getEditorContent()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..showContentInEditor"></a>
##services~showContentInEditor(editorContent)
Description

**Params**

- editorContent   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..onFocus"></a>
##services~onFocus(e)
Description

**Params**

- e   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..poll"></a>
##services~poll(repoName)
Description

**Params**

- repoName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..pollForImg"></a>
##services~pollForImg()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..onload"></a>
##services~onload()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..onerror"></a>
##services~onerror()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..pollForImage"></a>
##services~pollForImage()
Description

**Scope**: inner function of [services](#module_services)  
<a name="module_services..switch"></a>
##services~switch(styleName)
Description

**Params**

- styleName   

**Scope**: inner function of [services](#module_services)  
<a name="module_services..GithubAuthService"></a>
##class: services~GithubAuthService
**Members**

* [class: services~GithubAuthService](#module_services..GithubAuthService)

<a name="link"></a>
#link(scope, element, attrs, ctrl)
Description

**Params**

- scope   
- element   
- attrs   
- ctrl   

<a name="link"></a>
#link(scope, elem, attrs)
Description

**Params**

- scope   
- elem   
- attrs   

<a name="handler"></a>
#handler(setup)
Description

**Params**

- setup   

<a name="LABjsLoaded"></a>
#LABjsLoaded()
Description

<a name="onreadystatechange"></a>
#onreadystatechange()
Description


