var gulp  = require('gulp');

// подключаем gulp-sass
var sass = require('gulp-sass');

//Синхронизация с сервером
var browserSync = require('browser-sync');


gulp.task('sass', function(){
	return gulp.src('src/styles/scss/**/*.scss')
		.pipe(sass()) // используем gulp-sass
		.pipe(gulp.dest('src/styles'))
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
				baseDir: 'src'
				},
		})
});

gulp.task('sass', function() {
	return gulp.src('src/styles/**/*.css')
		.pipe(sass())
		.pipe(gulp.dest('src/styles'))
		.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch', function(){
	gulp.watch('src/styles/scss/**/*.scss', ['sass']);
	// другие ресурсы
});




var paths = {
  html:['index.html'],
  css:['../style/main.scss'],
  
};

gulp.task('default', function() {
	//place code your default task here
} );