import gulp from 'gulp';
import browserSync from 'browser-sync';

import path from './config/path.js';
import app from './config/app.js';

import clear from './task/clear.js';
import pug from './task/pug.js';
import css from './task/css.js';
import js from './task/js.js';
import img from './task/img.js';

const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

const watcher = () => {
    gulp.watch(path.pug.watch, pug).on('all', browserSync.reload)
    gulp.watch(path.css.watch, css).on('all', browserSync.reload)
    gulp.watch(path.js.watch, js).on('all', browserSync.reload)
    gulp.watch(path.img.watch, img).on('all', browserSync.reload)
}

const build = gulp.series(
    clear,
    gulp.parallel(pug, css, js, img)
)

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
)

export { 
    pug,
    css,
    js,
    img
};

export default app.isProd
    ? build
    : dev;