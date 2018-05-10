# Introduction

In this section contains some other subjects not related to logic of the website 

## Main features

- css style
- sass/ scss
- important file structure

## Important notes

File structure of sass & scss, that have an effect on global level.
 
 ./src/sass/_variables.scss
 
 ./src/sass/_mixins.scss
 
 - To use it please declare it at the beginning of component css file:
 
 For Ex: in app.component.scss, append this:
 
 `@import '~sass/variables';`
 
 `@import '~sass/mixins';`
 
 Note: ~ mean beginning with /src, this is a standard set by Angular & sass. 
