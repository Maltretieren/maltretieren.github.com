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
<<<<<<< HEAD
=======
#Index

**Namespaces**

* [Controllers](#Controllers)
  * [Controllers.CommentsCtrl](#Controllers.CommentsCtrl)
    * [CommentsCtrl.getComments()](#Controllers.CommentsCtrl.getComments)
    * [CommentsCtrl.deleteComment()](#Controllers.CommentsCtrl.deleteComment)
    * [CommentsCtrl.submit()](#Controllers.CommentsCtrl.submit)
  * [Controllers.DocCtrl](#Controllers.DocCtrl)
  * [Controllers.KeenioMasterCtrl](#Controllers.KeenioMasterCtrl)
  * [Controllers.WikiquoteCtrl](#Controllers.WikiquoteCtrl)
  * [Controllers.TableCtrl](#Controllers.TableCtrl)
  * [Controllers.GithubModalCtrl](#Controllers.GithubModalCtrl)
  * [Controllers.GithubCtrl](#Controllers.GithubCtrl)
  * [Controllers.ConfigCtrl](#Controllers.ConfigCtrl)
  * [Controllers.ToasterController](#Controllers.ToasterController)
  * [Controllers.GithubForkCtrl](#Controllers.GithubForkCtrl)
  * [Controllers.AdminCtrl](#Controllers.AdminCtrl)
  * [Controllers.ExportCtrl](#Controllers.ExportCtrl)
  * [Controllers.ImportCtrl](#Controllers.ImportCtrl)
  * [Controllers.GithubEditCtrl](#Controllers.GithubEditCtrl)
  * [Controllers.RatingCtrl](#Controllers.RatingCtrl)
* [Services](#Services)
  * [Services.GithubSrvc](#Services.GithubSrvc)
  * [Services.UserModel](#Services.UserModel)
  * [Services.UrlSrvc](#Services.UrlSrvc)
  * [Services.PollingSrvc](#Services.PollingSrvc)
  * [Services.YamlSrvc](#Services.YamlSrvc)
  * [Services.EditorSrvc](#Services.EditorSrvc)
  * [Services.PollingImgSrvc](#Services.PollingImgSrvc)
  * [Services.StyleSwitcher](#Services.StyleSwitcher)

**Functions**

* [requestCode()](#requestCode)
* [requestToken(oauthCode)](#requestToken)
* [userInfo()](#userInfo)
  * [userInfo~user()](#userInfo..user)
* [user()](#user)
* [logout()](#logout)
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
* [onFocus()](#onFocus)
 
>>>>>>> FETCH_HEAD
<a name="Controllers"></a>
#Controllers
The controller must be responsible for binding model data to views using $scope, and control information flow. It does not contain logic to fetch the data or manipulating it.

**Members**

* [Controllers](#Controllers)
  * [Controllers.CommentsCtrl](#Controllers.CommentsCtrl)
    * [CommentsCtrl.getComments()](#Controllers.CommentsCtrl.getComments)
    * [CommentsCtrl.deleteComment()](#Controllers.CommentsCtrl.deleteComment)
    * [CommentsCtrl.submit()](#Controllers.CommentsCtrl.submit)
  * [Controllers.DocCtrl](#Controllers.DocCtrl)
  * [Controllers.KeenioMasterCtrl](#Controllers.KeenioMasterCtrl)
  * [Controllers.WikiquoteCtrl](#Controllers.WikiquoteCtrl)
  * [Controllers.TableCtrl](#Controllers.TableCtrl)
  * [Controllers.GithubModalCtrl](#Controllers.GithubModalCtrl)
  * [Controllers.GithubCtrl](#Controllers.GithubCtrl)
<<<<<<< HEAD
    * [GithubCtrl.requestCode()](#Controllers.GithubCtrl.requestCode)
    * [GithubCtrl.logout()](#Controllers.GithubCtrl.logout)
  * [Controllers.ConfigCtrl](#Controllers.ConfigCtrl)
    * [ConfigCtrl.saveFrontendConfig()](#Controllers.ConfigCtrl.saveFrontendConfig)
    * [ConfigCtrl.saveBackendConfig()](#Controllers.ConfigCtrl.saveBackendConfig)
  * [Controllers.ToasterController](#Controllers.ToasterController)
  * [Controllers.GithubForkCtrl](#Controllers.GithubForkCtrl)
    * [GithubForkCtrl.checkUnique()](#Controllers.GithubForkCtrl.checkUnique)
    * [GithubForkCtrl.switchTheme()](#Controllers.GithubForkCtrl.switchTheme)
    * [GithubForkCtrl.fork()](#Controllers.GithubForkCtrl.fork)
  * [Controllers.AdminCtrl](#Controllers.AdminCtrl)
  * [Controllers.ExportCtrl](#Controllers.ExportCtrl)
    * [ExportCtrl.zip()](#Controllers.ExportCtrl.zip)
  * [Controllers.ImportCtrl](#Controllers.ImportCtrl)
  * [Controllers.GithubEditCtrl](#Controllers.GithubEditCtrl)
    * [GithubEditCtrl.getTagClass()](#Controllers.GithubEditCtrl.getTagClass)
=======
  * [Controllers.ConfigCtrl](#Controllers.ConfigCtrl)
  * [Controllers.ToasterController](#Controllers.ToasterController)
  * [Controllers.GithubForkCtrl](#Controllers.GithubForkCtrl)
  * [Controllers.AdminCtrl](#Controllers.AdminCtrl)
  * [Controllers.ExportCtrl](#Controllers.ExportCtrl)
  * [Controllers.ImportCtrl](#Controllers.ImportCtrl)
  * [Controllers.GithubEditCtrl](#Controllers.GithubEditCtrl)
>>>>>>> FETCH_HEAD
  * [Controllers.RatingCtrl](#Controllers.RatingCtrl)

<a name="Controllers.CommentsCtrl"></a>
##Controllers.CommentsCtrl
Bundles functions to receive and save comments

**Members**

* [Controllers.CommentsCtrl](#Controllers.CommentsCtrl)
  * [CommentsCtrl.getComments()](#Controllers.CommentsCtrl.getComments)
  * [CommentsCtrl.deleteComment()](#Controllers.CommentsCtrl.deleteComment)
  * [CommentsCtrl.submit()](#Controllers.CommentsCtrl.submit)

<a name="Controllers.CommentsCtrl.getComments"></a>
###CommentsCtrl.getComments()
receive comments

**Returns**:  - entries  
<a name="Controllers.CommentsCtrl.deleteComment"></a>
###CommentsCtrl.deleteComment()
receive comments

**Returns**:  - entries  
<a name="Controllers.CommentsCtrl.submit"></a>
###CommentsCtrl.submit()
receive comments

**Returns**:  - entries  
<a name="Controllers.DocCtrl"></a>
##Controllers.DocCtrl
xyz

**Members**

* [Controllers.DocCtrl](#Controllers.DocCtrl)

<a name="Controllers.KeenioMasterCtrl"></a>
##Controllers.KeenioMasterCtrl
xyz

**Members**

* [Controllers.KeenioMasterCtrl](#Controllers.KeenioMasterCtrl)

<a name="Controllers.WikiquoteCtrl"></a>
##Controllers.WikiquoteCtrl
xyz

**Members**

* [Controllers.WikiquoteCtrl](#Controllers.WikiquoteCtrl)

<a name="Controllers.TableCtrl"></a>
##Controllers.TableCtrl
xyz

**Members**

* [Controllers.TableCtrl](#Controllers.TableCtrl)

<a name="Controllers.GithubModalCtrl"></a>
##Controllers.GithubModalCtrl
xyz

**Members**

* [Controllers.GithubModalCtrl](#Controllers.GithubModalCtrl)

<a name="Controllers.GithubCtrl"></a>
##Controllers.GithubCtrl
xyz

**Members**

* [Controllers.GithubCtrl](#Controllers.GithubCtrl)
<<<<<<< HEAD
  * [GithubCtrl.requestCode()](#Controllers.GithubCtrl.requestCode)
  * [GithubCtrl.logout()](#Controllers.GithubCtrl.logout)

<a name="Controllers.GithubCtrl.requestCode"></a>
###GithubCtrl.requestCode()
request a oAuth token from Github

**Returns**:  - entries  
<a name="Controllers.GithubCtrl.logout"></a>
###GithubCtrl.logout()
Calls GithubAuthService.logout() - this is not really a logout from github, but the access token is deleted
=======
>>>>>>> FETCH_HEAD

<a name="Controllers.ConfigCtrl"></a>
##Controllers.ConfigCtrl
xyz

**Members**

* [Controllers.ConfigCtrl](#Controllers.ConfigCtrl)
<<<<<<< HEAD
  * [ConfigCtrl.saveFrontendConfig()](#Controllers.ConfigCtrl.saveFrontendConfig)
  * [ConfigCtrl.saveBackendConfig()](#Controllers.ConfigCtrl.saveBackendConfig)

<a name="Controllers.ConfigCtrl.saveFrontendConfig"></a>
###ConfigCtrl.saveFrontendConfig()
Commit frontend config file back to github

<a name="Controllers.ConfigCtrl.saveBackendConfig"></a>
###ConfigCtrl.saveBackendConfig()
Commit backend config file to github
=======
>>>>>>> FETCH_HEAD

<a name="Controllers.ToasterController"></a>
##Controllers.ToasterController
xyz

**Members**

* [Controllers.ToasterController](#Controllers.ToasterController)

<a name="Controllers.GithubForkCtrl"></a>
##Controllers.GithubForkCtrl
xyz

**Members**

* [Controllers.GithubForkCtrl](#Controllers.GithubForkCtrl)
<<<<<<< HEAD
  * [GithubForkCtrl.checkUnique()](#Controllers.GithubForkCtrl.checkUnique)
  * [GithubForkCtrl.switchTheme()](#Controllers.GithubForkCtrl.switchTheme)
  * [GithubForkCtrl.fork()](#Controllers.GithubForkCtrl.fork)

<a name="Controllers.GithubForkCtrl.checkUnique"></a>
###GithubForkCtrl.checkUnique()
This checks if the repo already exists

<a name="Controllers.GithubForkCtrl.switchTheme"></a>
###GithubForkCtrl.switchTheme()
Switch the theme

<a name="Controllers.GithubForkCtrl.fork"></a>
###GithubForkCtrl.fork()
manages to fork this page
=======
>>>>>>> FETCH_HEAD

<a name="Controllers.AdminCtrl"></a>
##Controllers.AdminCtrl
Unlock admin functionality

**Members**

* [Controllers.AdminCtrl](#Controllers.AdminCtrl)

<a name="Controllers.ExportCtrl"></a>
##Controllers.ExportCtrl
This controller exports/imports post as a zip

**Members**

* [Controllers.ExportCtrl](#Controllers.ExportCtrl)
<<<<<<< HEAD
  * [ExportCtrl.zip()](#Controllers.ExportCtrl.zip)

<a name="Controllers.ExportCtrl.zip"></a>
###ExportCtrl.zip()
zip files
=======
>>>>>>> FETCH_HEAD

<a name="Controllers.ImportCtrl"></a>
##Controllers.ImportCtrl
This controller imports posts from a zip archive

**Members**

* [Controllers.ImportCtrl](#Controllers.ImportCtrl)

<a name="Controllers.GithubEditCtrl"></a>
##Controllers.GithubEditCtrl
This controller manages edits on content on github

**Members**

* [Controllers.GithubEditCtrl](#Controllers.GithubEditCtrl)
<<<<<<< HEAD
  * [GithubEditCtrl.getTagClass()](#Controllers.GithubEditCtrl.getTagClass)

<a name="Controllers.GithubEditCtrl.getTagClass"></a>
###GithubEditCtrl.getTagClass()
Set the css style for tags / categories

<a name="Controllers.RatingCtrl"></a>
##Controllers.RatingCtrl
Star rating

**Members**

* [Controllers.RatingCtrl](#Controllers.RatingCtrl)

<a name="Services"></a>
#Services
**Members**

* [Services](#Services)
  * [Services.GithubSrvc](#Services.GithubSrvc)
    * [GithubSrvc.renameRepo()](#Services.GithubSrvc.renameRepo)
    * [GithubSrvc.deleteBranch()](#Services.GithubSrvc.deleteBranch)
    * [GithubSrvc.renameRepo()](#Services.GithubSrvc.renameRepo)
    * [GithubSrvc.editContent()](#Services.GithubSrvc.editContent)
    * [GithubSrvc.commit()](#Services.GithubSrvc.commit)
    * [GithubSrvc.commitMany()](#Services.GithubSrvc.commitMany)
    * [GithubSrvc.deleteContent()](#Services.GithubSrvc.deleteContent)
  * [Services.UserModel](#Services.UserModel)
  * [Services.UrlSrvc](#Services.UrlSrvc)
    * [UrlSrvc.parseDateTitle()](#Services.UrlSrvc.parseDateTitle)
  * [Services.PollingSrvc](#Services.PollingSrvc)
  * [Services.YamlSrvc](#Services.YamlSrvc)
  * [Services.EditorSrvc](#Services.EditorSrvc)
  * [Services.PollingImgSrvc](#Services.PollingImgSrvc)
  * [Services.StyleSwitcher](#Services.StyleSwitcher)

<a name="Services.GithubSrvc"></a>
##Services.GithubSrvc
xyz

**Members**

* [Services.GithubSrvc](#Services.GithubSrvc)
  * [GithubSrvc.renameRepo()](#Services.GithubSrvc.renameRepo)
  * [GithubSrvc.deleteBranch()](#Services.GithubSrvc.deleteBranch)
  * [GithubSrvc.renameRepo()](#Services.GithubSrvc.renameRepo)
  * [GithubSrvc.editContent()](#Services.GithubSrvc.editContent)
  * [GithubSrvc.commit()](#Services.GithubSrvc.commit)
  * [GithubSrvc.commitMany()](#Services.GithubSrvc.commitMany)
  * [GithubSrvc.deleteContent()](#Services.GithubSrvc.deleteContent)

<a name="Services.GithubSrvc.renameRepo"></a>
###GithubSrvc.renameRepo()
xyz

<a name="Services.GithubSrvc.deleteBranch"></a>
###GithubSrvc.deleteBranch()
With the help of this function the template brach is deleted after forkin

<a name="Services.GithubSrvc.renameRepo"></a>
###GithubSrvc.renameRepo()
Get content of a file hosted on GitHub

<a name="Services.GithubSrvc.editContent"></a>
###GithubSrvc.editContent()
Edit content on a file hosted on github

**Returns**:  - a save promise after editing.  
<a name="Services.GithubSrvc.commit"></a>
###GithubSrvc.commit()
Commit a file back to GitHub

<a name="Services.GithubSrvc.commitMany"></a>
###GithubSrvc.commitMany()
Commit many files back to GitHub

<a name="Services.GithubSrvc.deleteContent"></a>
###GithubSrvc.deleteContent()
Delete content from GitHub

<a name="Services.UserModel"></a>
##Services.UserModel
xyz

**Members**

* [Services.UserModel](#Services.UserModel)

<a name="Services.UrlSrvc"></a>
##Services.UrlSrvc
xyz

**Members**

* [Services.UrlSrvc](#Services.UrlSrvc)
  * [UrlSrvc.parseDateTitle()](#Services.UrlSrvc.parseDateTitle)

<a name="Services.UrlSrvc.parseDateTitle"></a>
###UrlSrvc.parseDateTitle()
This function extracts date and title from a Jekyll path

**Returns**:  - an object with date and title  
<a name="Services.PollingSrvc"></a>
##Services.PollingSrvc
xyz

**Members**

* [Services.PollingSrvc](#Services.PollingSrvc)

<a name="Services.YamlSrvc"></a>
##Services.YamlSrvc
YamlSrvc can parse files with frontmatter (normal post) and the _config.yaml without frontmatter

**Members**

* [Services.YamlSrvc](#Services.YamlSrvc)

<a name="Services.EditorSrvc"></a>
##Services.EditorSrvc
xyz

**Members**

* [Services.EditorSrvc](#Services.EditorSrvc)

<a name="Services.PollingImgSrvc"></a>
##Services.PollingImgSrvc
xyz

**Members**

* [Services.PollingImgSrvc](#Services.PollingImgSrvc)

<a name="Services.StyleSwitcher"></a>
##Services.StyleSwitcher
xyz

**Members**

* [Services.StyleSwitcher](#Services.StyleSwitcher)
=======

<a name="Controllers.RatingCtrl"></a>
##Controllers.RatingCtrl
Star rating

**Members**

* [Controllers.RatingCtrl](#Controllers.RatingCtrl)

<a name="Services"></a>
#Services
**Members**

* [Services](#Services)
  * [Services.GithubSrvc](#Services.GithubSrvc)
  * [Services.UserModel](#Services.UserModel)
  * [Services.UrlSrvc](#Services.UrlSrvc)
  * [Services.PollingSrvc](#Services.PollingSrvc)
  * [Services.YamlSrvc](#Services.YamlSrvc)
  * [Services.EditorSrvc](#Services.EditorSrvc)
  * [Services.PollingImgSrvc](#Services.PollingImgSrvc)
  * [Services.StyleSwitcher](#Services.StyleSwitcher)

<a name="Services.GithubSrvc"></a>
##Services.GithubSrvc
xyz

**Members**

* [Services.GithubSrvc](#Services.GithubSrvc)

<a name="Services.UserModel"></a>
##Services.UserModel
xyz

**Members**

* [Services.UserModel](#Services.UserModel)

<a name="Services.UrlSrvc"></a>
##Services.UrlSrvc
xyz

**Members**

* [Services.UrlSrvc](#Services.UrlSrvc)

<a name="Services.PollingSrvc"></a>
##Services.PollingSrvc
xyz

**Members**

* [Services.PollingSrvc](#Services.PollingSrvc)

<a name="Services.YamlSrvc"></a>
##Services.YamlSrvc
YamlSrvc can parse files with frontmatter (normal post) and the _config.yaml without frontmatter

**Members**

* [Services.YamlSrvc](#Services.YamlSrvc)

<a name="Services.EditorSrvc"></a>
##Services.EditorSrvc
xyz

**Members**

* [Services.EditorSrvc](#Services.EditorSrvc)

<a name="Services.PollingImgSrvc"></a>
##Services.PollingImgSrvc
xyz

**Members**

* [Services.PollingImgSrvc](#Services.PollingImgSrvc)

<a name="Services.StyleSwitcher"></a>
##Services.StyleSwitcher
xyz

**Members**

* [Services.StyleSwitcher](#Services.StyleSwitcher)

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

<a name="logout"></a>
#logout()
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

<a name="onFocus"></a>
#onFocus()
Description
>>>>>>> FETCH_HEAD


