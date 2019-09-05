module.exports = {
    devServer: {
        proxy: {
            '/planets': {
                target: 'https://findfalcone.herokuapp.com/planets',
                changeOrigin: true,
                pathRewrite: {
                    '^/planets': ''
                }
            },
            '/vehicles': {
                target: 'https://findfalcone.herokuapp.com/vehicles',
                changeOrigin: true,
                pathRewrite: {
                    '^/vehicles': ''
                }
            },
            '/find': {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                target: 'https://findfalcone.herokuapp.com/find',
                changeOrigin: true,
                pathRewrite: {
                    '^/find': ''
                }
            }
        }
    }
}
