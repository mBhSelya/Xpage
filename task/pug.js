import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import pugs from 'gulp-pug';


const pug = () => {
    return gulp.src(path.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Pug',
            message: error.message
        }))
    }))
    .pipe(pugs(app.pug))
    .pipe(gulp.dest(path.pug.dest))
}

export default pug;