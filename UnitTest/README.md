In order to confugure Jasmine, without install it as a global, we could configure our package.json, with the path where we installed the package.

When you're about to run Jasmine, execute the line, if you have installed it locally, as is the case here.
node_modules\.bin\jasmine init

If the package was installed globaly, run the following line
jasmine init

In case of an error like this happens:
xpto.ps1 cannot be loaded because running scripts is disabled on this system

This error could be due to the current user having an undefined ExecutionPolicy.
Please, execute the following line to solve the problem:
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted