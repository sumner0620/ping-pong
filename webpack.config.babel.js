import path from 'path'

module.exports = env => {
    return {
        context: path.resolve('src'),
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve('docs'),
            publicPath: '/docs/'
        },
        devtool: env.prod ? 'source-map' : 'eval',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader', 'eslint-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                    exclude: /node_modules/
                }
            ]
        }
    }
}