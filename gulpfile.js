const gulp = require("gulp");
const del = require("del");
const uglify = require("gulp-uglify-es").default;
const htmlmin = require("gulp-htmlmin");

gulp.task("clean", () => del(["dist"]));

gulp.task("copy-res", () =>
    gulp.src(["src/**/*", "!src/**/*.{js,html}"]).pipe(gulp.dest("dist"))
);

gulp.task("build-js", () =>
    gulp.src("src/**/*.js").pipe(uglify()).pipe(gulp.dest("dist"))
);

gulp.task("build-html", () =>
    gulp
        .src("src/**/*.html")
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true,
            })
        )
        .pipe(gulp.dest("dist"))
);

gulp.task("build", gulp.series("clean", "copy-res", "build-js", "build-html"));
