/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del = require("del");
var paths = {
    scripts: ["scripts/**/*.js", "scripts/**/*.ts", "scripts/**/*.map"],
};
gulp.task("clean", function () {
    return del(["wwwroot/scripts/**/*"]);
});
gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("wwwroot/scripts"));
});
