# KSS-NODE

This software is a Node.js implementation of [Knyle Style Sheets](https://github.com/kneath/kss) (KSS), "a documentation syntax for CSS" that's intended to have syntax readable by humans *and* machines. Hence, the kss-node software can be used to create a "living style guide".

## Installation
- ```npm install```

## Availabel gulp tasks
- ```gulp serve ```  - builds & watch the styleguide, use for development
- ```gulp styleguide ``` - build styleguide

Styleguide will be available from
[http://localhost:3000/styleguide](http://localhost:3000/styleguide)
after serve

## Configuration
- Configuration can be found in gulpfile.js ```config``` variable.
- custom styleguide look can be achieved by editinh files in the custom-theme (you have to compile .scss files yourself & run ```gulp styleguide ``` in separate terminal)

