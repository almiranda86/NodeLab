const gulp = require("gulp");
const debug = require("gulp-debug");
const babel = require("gulp-babel");

gulp.task("build", ()=>{
    //console.log("building...");
    return gulp.src("src/**/*.js")
        .pipe(debug())
        .pipe(babel(
            {
                "presets":["@babel/preset-env"],
                "plugins":["@babel/plugin-transform-runtime"]
            }
        ))
        .pipe(gulp.dest(".compiled"));
});

//When the gulp version <4.0.0
// gulp.task("default", ["build"], ()=>{
//     console.log("Run default...");
// });

//When the gulp version >4.0.0
gulp.task('default', gulp.series('build', ()=>{
    return new Promise(function(resolve, reject) {
        console.log("Run default...");
        resolve();
      });
}));