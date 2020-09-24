import gulp from 'gulp';
import sass from 'gulp-sass';
import ts from 'gulp-typescript';
import fs from 'fs';
const tsProject = ts.createProject('tsconfig.json');

const jsPath = './dist/js';

const styles = () => {
	return gulp.src('./assets/sass/**/*.scss')
		.pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
};

const scripts = () => {
	if(fs.existsSync(jsPath)){
		fs.rmdirSync(jsPath, {recursive: true});
	}
	const tsResult = gulp.src('./assets/ts/**/*.ts') // or tsProject.src()
		.pipe(tsProject());
	return tsResult.js.pipe(gulp.dest(jsPath));
};

export {
	styles,
	scripts
};
export default (): void => {
	gulp.watch('./assets/sass/**/*.scss', gulp.series('styles'));
	gulp.watch('./assets/ts/**/*.ts', gulp.series('scripts'));
};