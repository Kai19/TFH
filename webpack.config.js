var webpack = require('webpack');

module.exports = {

    entry: './dev/js/main.js',
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    module: {
        loaders : [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?{gifsicle: {interlaced: true}, optipng: {optimizationLevel: 7}, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    }
};
