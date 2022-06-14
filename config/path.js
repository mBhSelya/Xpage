const pathSrc = './src';
const pathDest = "./public";

export default {
    root: pathDest,
    
    pug: {
        src: pathSrc + '/pug/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest
    },

    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css'
    },

    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },

    img: {
        src: pathSrc + '/img/*.{png,jpg,jpeg,svg}',
        watch: pathSrc + '/img/**/*.{png,jpg,jpeg,svg}',
        dest: pathDest + '/img'
    }
}