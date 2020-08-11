### 我第一自己的项目
##### 以vue为技术栈搭建的后台管理项目

#### 搭建这个项目的原因
##### 对于知识的实际操作较少, 加强自身实际使用能力

#### 技术栈
  + [vue](https://cn.vuejs.org/index.html)
  + [vue-cli](https://cli.vuejs.org/zh/)
  + [vue-router](https://router.vuejs.org/zh/)
  + [vuex](https://vuex.vuejs.org/zh/guide/)
  + [ElementUI](https://element.eleme.cn/#/zh-CN)

#### 项目结构
```
  vue-admin
├── babel.config.js               # 配置文件
├── package-lock.json             # 配置文件
├── package.json                  # 配置文件
├── public                        # 公共目录
│   ├── favicon.ico               # 页面小图标
│   └── index.html                # html模板
├── README.md                     # 项目文档
├── src                           # 源目录
│   ├── api                       # 接口目录
│   │   └── login.js              # 登录页接口
│   ├── App.vue                   # 主组件
│   ├── main.js                   # 主入口
│   ├── router                    # 路由目录
│   │   └── index.js              # 路由配置
│   ├── store                     # 全局状态目录
│   │   └── index.js              # 全局状态目录配置
│   ├── styles                    # 样式目录
│   │   ├── main.scss             # 主样式配置
│   │   └── normalize.scss        # resetCSs
│   ├── utils                     # 工具目录
│   │   ├── service.js            # axios配置
│   │   └── validator.js          # 正则验证
│   └── views                     # 视图
│       ├── Console               # 控制台
│       │   └── index.vue
│       ├── Layout                # 主页面布局
│       │   ├── components
│       │   │   ├── Aside.vue     # 侧边栏
│       │   │   ├── Header.vue    # 头部
│       │   │   └── Main.vue      # 主体
│       │   └── index.vue
│       └── Login                 # 登录页
│           └── index.vue
└── vue.config.js                 # 配置文件
```