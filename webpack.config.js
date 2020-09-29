const path = require('path');

module.exports = options => {
    return {
        devServer: {
            historyApiFallback: {
                disableDotRule: true
            }
        },
        entry: './leadmanager/client/src/index.js',
        stats: 'errors-only',
        output: {
            path: path.resolve(__dirname, 'leadmanager/client/static/client'),
            publicPath: '/',
            filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }]
                }
            ]
        },
        
    }
}