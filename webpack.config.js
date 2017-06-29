/*Webpack helps to bundle all the js files(entry) and convert it into 1 single file(output) which can be read by all browsers*/

module.exports = {
    entry: {
        App: "./app/assets/scripts/app.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: __dirname.replace('config', 'dist'),
        filename: "./app/temp/scripts/[name].js"
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