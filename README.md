# karma_parallel_bug

Pre-requisites:
* Recent version of node.js
* @angular/cli - you can install with the command `npm install -g @angular/cli`

Follow steps to reproduce bug:
```
$ cd karma-parallel-bug
$ npm install
$ ng test --watch=false --code-coverage
$ echo $?                              
0
``` 

Due to the code coverage thresholds I set in `karma.conf.js`, the test command should fail, and the echo command above should return a non-zero value.

If I remove the `parallel` framework in karma, rerun the test, the echo command properly returns a non-zero value.