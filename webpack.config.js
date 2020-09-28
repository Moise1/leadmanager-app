module.exports = options => {
    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use:[{
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }]
                }
            ]
        }
    }
}