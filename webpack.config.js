module.exports = {
    entry: "./app/assets/scripts/app.js",
    output: {
        path: __dirname.replace('config', 'dist'),
        filename: "./app/temp/scripts/app.js"
    },
    
    module:{
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'] /*We want to use the es2015 version of the JavaScript*/
                },
                test: /\.js$/, /* This tells the loader to apply babel only to JS files */
                exclude: /node_modules/
            }
        ] 
    }
} 