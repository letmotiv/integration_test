const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/assets/js/app.js', 'dist')
    .vue({ version: 2 })
    .setPublicPath('public');

mix.sass('src/assets/sass/app.scss', 'dist')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')]
    });

mix.copy('src/views', 'public');