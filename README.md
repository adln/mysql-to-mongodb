# MySQL to MongoDB Migration assistant
This package will help on the migration process from MySQL to MongoDB, it's a MEAN.IO package.
# Installation
## Prerequisite Technologies
### Linux
 * *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.
 * *MongoDB* - <a href="http://www.mongodb.org/downloads">Download</a> and Install mongodb - <a href="http://docs.mongodb.org/manual">Checkout their manual</a> if you're just starting.
 
 If you're using ubuntu this is the preffered repository to use...
 
 ```bash
 $ curl -sL https://deb.nodesource.com/setup | sudo bash -
 $ sudo apt-get update
 $ sudo apt-get install nodejs
 ```
 
 * *Git* - Get git using a package manager or <a href="http://git-scm.com/downloads">download</a> it.
 
### Windows
 * *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.
 * *MongoDB* - Follow the great tutorial from the mongodb site - <a href="http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows">"Install Mongodb On Windows"</a>
 * *Git* - The easiest way to install git and then run the rest of the commands through the *git bash* application (via command prompt) is by downloading and installing <a href="http://git-scm.com/download/win">Git for Windows</a>
 
### OSX
 * *Node.js* -  <a href="http://nodejs.org/download/">Download</a> and Install Node.js or use the packages within brew or macports.
 * *MongoDB* - Follow the tutorial here - <a href="http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/">Install mongodb on OSX</a>
 * *git* - Get git <a href="http://git-scm.com/download/mac">from here</a>.
To install, you should clone the repository and then via the 

## Prerequisite packages
 
 * Mean currently works with either grunt or gulp..
 ```
 $ npm install -g gulp
 // and bower
 $ npm install -g bower 
 ```
# Installation
 To install this assistant, clone the repository than run the current commands:
 
 ```
 // Install all npm dependencies
 $ npm install
 // and bower dependencies
 $ bower install
 ```
 then run it via
 
 ```
 $ gulp
 ```
