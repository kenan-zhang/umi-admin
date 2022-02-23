export default {
    '/api': {
        target: 'http://61.132.230.72:8789/',
        pathRewrite: { '^/api': '/api' },
        changeOrigin: true
    },
};