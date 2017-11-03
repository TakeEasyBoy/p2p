/**
 * Created by Administrator on 2017-10-15.
 *module description
 */
//    引入gulp模块
var gulp = require('gulp');
//引入压缩js插件
var uglify = require("gulp-uglify");
//引入压缩css插件模块
var ugligycss = require("gulp-clean-css");
//引入文件重命名模块
var rename = require("gulp-rename");
//引入livereload模块
var livereload = require("gulp-livereload");

//引入编译less
var less = require("gulp-less");
//引入图片压缩
var imagemin = require("gulp-imagemin");
//引入文件合并
var concat = require("gulp-concat");
//添加删除文件的任务
/*gulp.task("del",function(){
//采用同步进行删除
    del.sync("./dest");
});*/

//编译less
gulp.task('less',function(){
		gulp
				.src('styles/less/core.less')
				.pipe(less())
				.pipe(gulp.dest('./styles/css'))
				.pipe(livereload());
});


//添加压缩css文件的任务
gulp.task('uglifyCss', function() {
		gulp.src("styles/css/core.css")  //获取源文件列表
				.pipe(rename({
						suffix:".min"
				}))//重命名任务,工作中使用这种方法
				.pipe(ugligycss())     //对象源文件执行压缩任务
				.pipe(gulp.dest("dist/css")) //输出到dest目录,这是文件夹的路径
				.pipe(livereload());
});

//合并js文件
/*gulp.task("concat",function(){
		console.log(concat());
		gulp
				.src("js/!*.js")
				.pipe(concat())
				.pipe(dest('dist/js'))
				.pipe(livereload());
});*/

//添加压缩js文件的任务
gulp.task('uglifyJs', function() {
    gulp.src("js/p2p.js")  //获取源文件列表
        .pipe(uglify())     //对象源文件执行压缩任务
		    .pipe(rename({suffix:".min"}))//重命名任务,工作中使用这种方法
        .pipe(gulp.dest("dist/js")) //输出到dest目录,这是文件加的路径
        .pipe(livereload());
});

//添加压缩图片的任务
gulp.task('imagemin',function(){
		gulp
				.src("images/**")  //获取源文件列表
				.pipe(imagemin())     //对象源文件执行压缩任务
				.pipe(gulp.dest("dist/images")) //输出到dest目录,这是文件加的路径
});
//监测任务,该方法用于检测对象文件的改动,ctrl+s后立即生效
gulp.task('watch', function() {
		livereload.listen();
    gulp.watch(["styles/less/*.less","js/*.js","styles/css/*.css"],["less","uglifyJs","uglifyCss"]);
});



