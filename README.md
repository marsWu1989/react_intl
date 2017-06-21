## 启动项目
```
npm i / yarn install
npm run start
// http://0.0.0.0:9526

npm run wds
// http://0.0.0.0:9526/webpack-dev-server/

ps: 更多请查阅 package.json -> scripts
```
## 其他
> 默认监控 9526 端口

## 目录结构

```
.
├── README.md               // 项目说明文件
├── assets                  // 打包后静态文件
│   ├── images
│   ├── scripts
│   └── styles
├── bin                     // 项目入口
├── build                   // 项目编译配置
├── client                  // 客户端/服务端同构模版（同构）
│   ├── routes              // 路由文件
│   ├── components          // 组件
│   │   ├── index           // 首页
│   │   ├── nav             // 导航菜单
│   │   ├── header          // 头部
│   │   ├── logo            // logo
│   │   └── buy             // 购买
│   ├── scss                // 公用样式组件
│   ├── client.jsx          // 客户端入口文件
│   ├── store.jsx           // store
│   └── reducers.jsx        // Redux Reducer
├── index.html              // 热更新预览文件
├── libs                    // 自定义通用组件
├── locale                  // 语言配置文件
├── logs                    // 项目日志（error，http)
├── package.json            // 项目配置
└── server                  // 服务端
    ├── controllers         // 中间层
    ├── models              // 数据层
    └── routes              // 服务端路由
```
