import gulp from 'gulp';
import sass from 'gulp-sass';
import ts from 'gulp-typescript';
const tsProject = ts.createProject('tsconfig.json');

const styles = () => {
	return gulp.src('./assets/sass/**/*.scss')
		.pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
};

const scripts = () => {
	const tsResult = gulp.src('./assets/ts/**/*.ts') // or tsProject.src()
		.pipe(tsProject());
	return tsResult.js.pipe(gulp.dest('./dist/js'));
};

export {
	styles,
	scripts
};
export default () => {
	gulp.watch('./assets/sass/**/*.scss', gulp.series('styles'));
	gulp.watch('./assets/ts/**/*.ts', gulp.series('scripts'));
};