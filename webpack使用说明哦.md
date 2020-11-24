# 改变默认的配置打包入口与出口

````js
//在webpack.config.js文件中新增如下代码
const path =require('path')
module.exports={
    entry:path.join(__dirname,'./src/index.js')  //打包文件的路径
    output:{
    path:path.join(__dirname,'./dist') //输出文件的存放路径
    filename:'bundle.js'  //输出文件的名称
}

````

# 配置webpack的自动打包

````js
npm i webpack-dev-server -D
//引用路径修改为/buldle.js

````

# 配置html-webpack-plugin生成

```js
npm i html-webpack-plugin -D
//在json里面写以下代码
const HtmlWebpackPlugin =require('html-webpack-plugin')
cosnt htmlPlguin =new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html'
})
module.exports={
    plugins:[htmlPlugin]
}
```

# 配置自动打包相关的参数

````js
//package.json
//--open 打包完成后自动打开浏览器页面
// --host 配置ip地址
// -- port配置端口
"scripts":{
    "dev":"webpack-dev-server --open --host 127.0.0.1 --port 8888"
}
````

# 配置加载器 处理css的文件

```js
npm i style-loader css-loader -D 
//module ->rules数组中添加loader规则
module:{
    rules:[
        {test:/\.css$/,use:['style-loader','css-loader']} 
    ]
}
```

# 配置处理less文件

````js
npm i less-loader less -D
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']} 

````

# 配置处理scss

````js
npm i sass-loader  node-sass -D
````

# 配置postcss

````js
npm i postcss-loader autoprefixer -D
//在项目根目录中创建postcss配置文件 postcss.config.js，并初始化如下配置
const autoprefixer =require('autoprefixer')  //导入自动添加前缀的插件
module.exports={
    plugins:[autoprefixer] //挂载插件
}
//在webpack.config.js中添加
{test:/\.css$/,use:['style-loader','css-loader','postcs-loader']} 

````

# 打包图片和字体文件

````js
npm i url-loader file-loader -D
module:{
    rules:[{
        test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use:'url-lloader?limit=16940 '
    }]
}
````

# 打包处理js文件的高级语法

![](C:\Users\Administrator\Desktop\vue自己写\js高级语法处理.png)