import news from "../data/news.js"

const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,

    pug: {
        pretty: isDev,
        data: {
            news: news
        }
    },

    webpack: {
        mode: isProd ? 'production' : 'development'
    },

    imagemin: {
        verbose: true
    }
}