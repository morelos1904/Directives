var gulp = 			require ('gulp'),
	browserSync=	require	('browser-sync'),
	reload=			browserSync.reload,
	uglify= 		require ('gulp-uglify'),
	rename=			require ('gulp-rename');

/////////////////////////////////
///Scripts tasks
/////////////////////////////////
gulp.task('scripts',function(){
	gulp.src(['app/js/*.js'])			
	.pipe(reload({stream:true}));
});	

/////////////////////////////////
///Browser-Sync tasks
/////////////////////////////////
gulp.task('browser-sync',function(){
	browserSync({
		server:{
			baseDir:"app/"
		}
	}) 	
});
/////////////////////////////////
///Html tasks
/////////////////////////////////
gulp.task('html',function(){
	gulp.src('app/*.html')
	.pipe(reload({stream:true}));
});
/////////////////////////////////
///Watch tasks
/////////////////////////////////
gulp.task('watch',function(){
	gulp.watch('app/js/*.js',['scripts']); 	//Every change that we made,it will run our function script
	gulp.watch('app/*.html',['html']); 	//Every change that we mad
});

/////////////////////////////////
///Default
/////////////////////////////////
gulp.task('default',['scripts','html','browser-sync','watch']);