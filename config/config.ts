import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
    title: '后台模板',
    hash: true,
    history: {
        type: 'hash',
    },
    mfsu:{},
    dynamicImport: {
        loading: '@/components/Loading',
    },
    nodeModulesTransform: {
        type: 'none',
    },
    inlineLimit: 200,
    proxy: proxy,
    routes: routes,
    theme: {
        '@primary-color': '#5473E8',
        '@font-size-base': '12px',
    }
});