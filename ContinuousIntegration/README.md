Remeber always to create a package.json file before start!

First of all, we'll install gulp
npm install --save-dev gulp
npm install --save-dev gulp-babel
npm install --save-dev gulp-debug


One thing, is that in case you have the babel-preset-es2015 installed, is better to unistall it, and install another version of the package, once this other version works better with gulp than the mentioned before.


So, in that case, run the following command:
npm uninstall --save-dev babel-cli
npm uninstall --save-dev babel-preset-es2015

*Note that here I used the --save-dev cause I installed it as a dev dependecy. If it's not your case, please, pay attention and you the correct uninstall command


Once you have uninstalled this dependencies, follow the command to install the compatible babel for gulp
npm install --save-dev @babel/cli 
npm install --save-dev @babel/core 

In order to run the commands, please access folder node_modules\.bin\gulp

