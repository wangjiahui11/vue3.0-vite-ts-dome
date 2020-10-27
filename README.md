

## vue全家桶+viti+TS尝鲜版

### 环境搭建

- 涉及依赖

  1. vite@1.0.0-rc.1：新一代脚手架
  2. vue@3.0.0-rc.1：正式版
  3. vuex@4.0.0-beta
  4. vue-router@4.0.0-beta.2
  5. typescript@4.0.3

- 项目搭建

  1. 准备工作

     ```
     npm install yarn -g
     vite脚手架安装
     npm install -g create-vite-app
     # or
     yarn add -g create-vite-app
     ```

  2. 项目初始化及集成环境

     - 初始化

       yarn create vite-app <project-name>

     - 集成TS   

       安装 ：yarn add typescript --D

       根目录创建配置文件  tsconfig.json：

       ```
       {
         "include": ["./**/*.ts"],
         "compilerOptions": {
           "jsx": "react",
           "target": "es2020" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
           "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
           // "lib": ["es2017.object"] /* Specify library files to be included in the compilation. */,
           // "declaration": true /* Generates corresponding '.d.ts' file. */,
           // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
           "sourceMap": true /* Generates corresponding '.map' file. */,
           // "outFile": "./",                       /* Concatenate and emit output to single file. */
           "outDir": "./dist" /* Redirect output structure to the directory. */,
           "strict": true /* Enable all strict type-checking options. */,
           "noUnusedLocals": true /* Report errors on unused locals. */,
           "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
           "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
           "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
         }
       }
       ```

     - 集成eslint

       yarn add --dev eslint eslint-plugin-vue

       项目根目录创建配置文件`.eslintrc.js`：

       ```
       module.exports = {
         parser: 'vue-eslint-parser',
         parserOptions: {
           parser: '@typescript-eslint/parser', // Specifies the ESLint parser
           ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
           sourceType: 'module', // Allows for the use of imports
           ecmaFeatures: {
             // tsx: true, // Allows for the parsing of JSX
             jsx: true,
           },
         },
         // settings: {
         //   tsx: {
         //     version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
         //   }
         // },
         extends: [
           'plugin:vue/vue3-recommended',
           'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
           'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
           'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
         ],
         rules: {
           // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
           // e.g. "@typescript-eslint/explicit-function-return-type": "off",
         },
       };
       ```

     - #### 修改入口文件

       默认项目模板是以`src/main.js`为入口的，需要把它修改为`src/main.ts`。
       `根目录的index.html`中修改入口文件的引用即可：

       ```
       ... ...
       <body>
         ... ...
         <script type="module" src="/src/main.ts"></script>
       </body>
       </html>
       ```

     - #### 优化TS类型推断

       在src目录下，创建`shim.d.ts、source.d.ts`

       `shim.d.ts`:

       ```
       declare module '*.vue' {
         import Vue from 'vue';
         export default Vue;
       }
       ```

       `source.d.ts`: (优化编译器提示，声明静态资源文件)

       ```
       declare const React: string;
       declare module 'vant';
       declare module 'axios';
       declare module 'mockjs';
       declare module '*.ts';
       declare module '*.json';
       declare module '*.png';
       declare module '*.jpg';
       ```

     - #### 集成vue-router

     ```
     	yarn add --dev vue-router@4.0.0-beta.2
     	
     ```

     在src目录下，`router文件夹`，并在文件夹内`创建index.ts`

     ```
     import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
     
     const routes: RouteRecordRaw[] = [
       {
         path: '/',
         name: 'Home',
         component:  () => import('../views/home/index.vue'),
       }
     ];
     
     const router = createRouter({
       history: createWebHistory(process.env.BASE_URL),
       routes,
     });
     
     export default router;
     ```

     - #### 集成vuex

     ```
     yarn add --dev vuex@4.0.0-beta.4
     ```

     在src目录下，新建store文件夹，并在文件夹内创建`index.ts`

     `index.ts`:

     ```
     import { index } from './modules/index';
     import { createStore } from 'vuex';
     
     export default createStore({
       mutations: {},
       actions: {},
       modules: {
       	index
       },
     });
     ```

     `在store目录下，新建modules文件夹并在文件夹下创建index.ts`:

     ```
     export interface IState {
       title: string;
     }
     const state: IState = {
       title: 'Vue(v3) 与 tsx 的结合~',
     };
     export const index: Module<IState, any> = {
       namespaced: true,
       state
     }
     ```

     - #### vite.config.ts

       ```
       import path from 'path';
       
       const pathResolve = (pathStr: string) => {
         return path.resolve(__dirname, pathStr);
       };
       
       module.exports = {
         optimizeDeps: {
           include: ["moment", "echarts", "axios", "mockjs", 'vant']
         },
         open: true,// 是否开启 https
         // 前后必须是是/ /
         alias: {
           '/@/': pathResolve('./src'),
           '/@views/': pathResolve('./src/views'),
           '/@components/': pathResolve('./src/components')
         },
         // 代理模式
         // proxy: {
         //   // 如果是 /lsbdb 打头，则访问地址如下 '/lsbdb':'http://10.192.195.96:8087',
         //   '/lsbdb': {
         //     target: 'http://10.192.195.96:8087/',
         //     changeOrigin: true,
         //     // rewrite: path => path.replace(/^\/lsbdb/, '')
         //   }
         // }
       };
       ```

     - #### 集成vant

       ```
       # 通过 npm 安装
       npm i vant -S
       
       # 通过 yarn 安装
       yarn add vant
       
       在main.ts下引入
       import 'vant/lib/index.css'; 
       注意：vite在引入安装可能出了问题 我采用这种方式 import '/@modules/vant/lib/index.css'
       import Vant from 'vant';
       ```

     - #### 封装请求request.ts，api接口

       ```
       # 通过 npm 安装
       npm i axios -S
       
       # 通过 yarn 安装
       yarn add axios 
       ```

       在src目录下，新建lib文件夹，并在文件夹内创建`request.ts`，设置拦截器

       ```
       import axios from "axios";
       
       // create an axios instance
       const service = axios.create({
         // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
         baseURL: '', // url = base url + request url
         // withCredentials: true, // send cookies when cross-domain requests
         timeout: 30000 // request timeout
       })
       
       // 添加请求拦截器
       service.interceptors.request.use(function (config: any) {
         // 在发送请求之前做些什么
         return config;
       }, function (error: any) {
         // 对请求错误做些什么
         return Promise.reject(error);
       });
       // 添加响应拦截器
       service.interceptors.response.use(function (response: any) {
         // 对响应数据做点什么
         return response.data;
       }, function (error: any) {
         // 对响应错误做点什么
         return Promise.reject(error);
       });
       export default service
       ```

       在src目录下，新建api文件夹，并在文件夹内创建index.ts

       ```
       import request from '../utils/request'
       
       // --------------- 请求用户信息---------
       export function getUserInfo() {
         return request({
           url: '/api/user/info',
           method: 'get'
         })
       }
       ```

       

     - #### 集成mock数据

       ```
       # 通过 npm 安装
       npm i mockjs --S
       
       # 通过 yarn 安装
       yarn add mockjs
       ```

       在src目录下，新建mock文件夹，并在文件夹内创建index.ts

       ```
       import Mock from 'mockjs'
       import './data/index'
       Mock.setup({
         timeout: 800 // setter delay time
       })
       console.log('mock mounted')
       ```

       在mock目录下，新建data文件夹，并创建index.ts

       ```
       import Mock from 'mockjs'
       const getUserInfo = (options: any): any => {
         return {
           code: 200,
           data: {
             id: '123123123',
             username: '12',
             realName: '真实姓名',
             tel: '13576778888', // 手机号
             email: '235@126.com', // 非必填
             status: 0// 用户状态 0 -默认启用1-禁用
           }
         }
       }
       // 导出mock数据
       Mock.mock(/\/api\/user\/info/, 'get', getUserInfo)
       ```

     - #### main.ts中引入

       ```
       import { createApp } from 'vue';
       import App from './App.vue';
       import router from './router';
       import store from './store/index';
       import './mock/index';
       import '/@modules/vant/lib/index.css'
       import Vant from 'vant';
       
       createApp(App).use(Vant).use(router).use(store).mount('#app');
       ```

     - #### App.vue

       ```
       <template>
           <div class="main">
             <router-view></router-view>
             <van-tabbar v-model="active">
               <van-tabbar-item to="/" icon="home-o">home</van-tabbar-item>
             </van-tabbar>
           </div>
       </template>
       <script lang="ts">
       import {defineComponent, ref} from 'vue';
       export default defineComponent({
         setup(props, context) {
           let active = ref(1)
           return {
             active,
           }
         }
       })
       </script>
       <style>
       .main {
         height: 100vh;
       }
       </style>
       ```

     

