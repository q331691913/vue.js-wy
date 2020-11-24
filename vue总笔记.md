````vue
//**mustache语法，不仅仅跨域直接写变量，也跨域写简单的表达式**
h2{{firstName+lastName}}h2
counter =100
h2{{counter*2}}h2

````

**v-once指令**：只执行一次，后面改变了值带了v-once的不改变



**v-html=""**    ：   解析带有html标签的数据

**v-pre指令** :  是什么就显示什么不解析

**v-cloak指令 ：** 有无这个属性决定后面的vue执行 相当于遮罩



# vue的生命周期

**生命周期:事物从诞生到消亡的整个过程**

**vue生命周期:挂载、更新、销毁:想尽可能早的使用data和methods可以把代码写到created里面，想操作dom并且操作渲染之后的数据**
**挂载阶段**
**beforeCreate**
**实例初始化之后，创建之前这个阶段的data和methods是读取不到的**
**created** 
**实力创建之后，可以访问data和methods 渲染之前 this.$el属性不可见**
**beforeMount**
**在渲染之前 this.$el可见，但是还不能获取渲染后的内容**
**mounted**
**数据已经渲染到了页面上了，可以通过this.$el.innerHTML 获取渲染后的内容**
**beforeUpdate**
**准备更新的过程**
**updated**
**更新好**
**beforeDestory**
**准备销毁的过程**
**destoryed**
**销毁实例完成**

**每个阶段会触发每个阶段的函数**
**执行到什么阶段就触发什么阶段的函数**

# v-bind指令	

作用:动态绑定属性,可以缩写成:

````html
<body>
    <div id="app">
        <h2>{{message}}</h2>
        <img v-bind:src="imgURL" alt="">
        <img v-bind:src="imgURL1" alt="">

    </div>
    <script src="vue.js"></script>

    <script>
        const app = new Vue({
            el: '#app',
            data: {
                message: '你好',
                imgURL: 'https://img14.360buyimg.com/seckillcms/s280x280_jfs/t1/127725/21/18231/199082/5face398E97af9b8f/1b8d1f92a5b507b0.jpg.webp',
                imgURL1: 'https://cn.vuejs.org/images/logo.png'

            }
        })
    </script>
</body>
````

**v-bind动态绑定class**

**数组和对象语法**

````html
<body>
    <div id="app">
        <h2 class="active">{{message}}</h2>
        <h2 :class="{active:isActive,line:isLine}">{{message}}</h2>

        <button v-on:click='btnclick'>按钮</button>
    </div>

    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                message: '你好',
                isActive: true,
                isLine: true

            },
            methods: {
                btnclick: function() {
                    this.isActive = !this.isActive
                }
            }
        })
    </script>
</body>
````

**认识Vuejs**

- 为什么学习vuejs
- vue的读音
- vue的渐进式
- vue的特点

**mustache语法**-vue的响应式

Vue列表展示

- v-for
- 后面给数组追加的元素的时候，新的元素爷可以在界面中渲染出来

Vue计数器小案例

- 事件监听:click->methods

  创建vue时，options可以放那些东西

  - el:

  - data:

  - methods

  - computed 

  - 生命周期
  
    

**插值语法**

- mustache语法

- v-once 执行一次

- v-html 解析html标签

- v-text 解析文本

- v-pre:{{}} 不解析

- v-cloack:斗篷 遮罩

  

v-**bind**

v-bnd 语法糖:

:href

**v-bind动态绑定基本属性**

- 对象语法
- 数组语法

**计算属性**

firstName+lastName

# v-on的修饰符

````js
@click.stop //阻止冒泡
@click.prevent="btnsubmit"  //取消默认
@keyup.enter=''  //监听键盘的enter
@click.once   // 只让点击一次
.delete

````

# v-if的使用

在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 template ，将提出它的内容作为条件块。
多使用template,页面上没有template. 提高性能

````js
<body>
    <div id="app">
        <h2 v-if="true">{{message}}</h2>
    </div>

    <script src="./lib/vue.js"></script>
    <script>
        let app = new Vue({
            el: '#app',
            data: {
                message: '你好啊！'
            }
        })
    </script>
</body>
````

# v-show的使用

他只是给我们的元素添加了一个行内样式

splice(2,0,'f') //第三个参数是在第二个元素的后面添加一个f

````js
push() //在数组最后添加
pop() //删除数组中最后一个元素
shift() //删除数组中的第一个元素
unshift() //在数组的最前面添加元素
splice() //删除第几个，一共删除几个，写0 第三个参数就是添加
sort()   //排序
reverse() // 翻转数组
slice(start,end)
tofixed() //保留几位小数
desabled // 禁止按钮使用
forEach()  //迭代遍历数组
map() //map 用于操作或转换数组中的值 
every() //判断数组中值是否都满足条件 相当于&&的关系如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。如果所有元素都满足条件，则返回 true。
some() //some 与every相对，是否存在某个值满足条件  相当于||的关系  (返回值为Boolean模式)
fifter()//筛选数组，返回数组
````

# 事件修饰符

````js
.stop - 调用 event.stopPropagation()。
.prevent - 调用 event.preventDefault()。
.capture - 添加事件侦听器时使用 capture 模式。
.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。 
.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
.native - 监听组件根元素的原生事件。
.once - 只触发一次回调。
.left - (2.2.0) 只当点击鼠标左键时触发。
.right - (2.2.0) 只当点击鼠标右键时触发。
.middle - (2.2.0) 只当点击鼠标中键时触发。
.passive - (2.3.0) 以 { passive: true } 模式添加侦听器

````

# 自定义按键修饰符

````js
Vue.config.keyCodes.a=65
event.keyCode

````



# vue的修饰符

````js
v-model.nuber 转换为数字型
v-model.trim 去除前后的空格
v-model.lazy  将input时间切换为change事件  input事件是立即触发 change事件是失去焦点触发
````

# 自定义指令

````js
Vue.directive('focus',{
    inserted(el){
        el.focus()
        //el表示指令所绑定的元素
    }
})
//修改背景颜色的自定义指令
   Vue.directive('color', {
            bind: function(el, binding) {
                el.style.backgroundColor = binding.value.color
            }
        })

        let app = new Vue({
            el: '#app',
            data: {
                msg: {
                    color: 'orange'
                }
            },
            methods: {

            },
        })
````

# 局部指令

````js

  let app = new Vue({
            el: '#app',
            data: {
                msg: {
                    color: 'orange'
                }
            },
            methods: {

            },
      directives:{
    focus{
        //指令的定义
        inserted(el){
            el.focus()
        }
    }
}
        })
````

# 侦听器

````js
watch:{
    firstName(val){
        this.fullName =val + ' ' +this.lastName
    }
    lastName(val){
        this.fullName=val + ' ' this.firstName
    }
}
````

# 原生js的方法

````js
charAt(0)取到字符串的第一个字符，
toupperCase() 小写转为大写
toLowerCase() 转换为小写
slice(start,end) //start end

````

vm.$set(vm.属性名)

# 时间处理

````js
 Vue.filter('format', function(value, arg) {
      function dateFormat(date, format) {
        if (typeof date === "string") {
          var mts = date.match(/(\/Date\((\d+)\)\/)/);
          if (mts && mts.length >= 3) {
            date = parseInt(mts[2]);
          }
        }
        date = new Date(date);
        if (!date || date.toUTCString() == "Invalid Date") {
          return "";
        }
        var map = {
          "M": date.getMonth() + 1, //月份 
          "d": date.getDate(), //日 
          "h": date.getHours(), //小时 
          "m": date.getMinutes(), //分 
          "s": date.getSeconds(), //秒 
          "q": Math.floor((date.getMonth() + 3) / 3), //季度 
          "S": date.getMilliseconds() //毫秒 
        };
        format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
          var v = map[t];
          if (v !== undefined) {
            if (all.length > 1) {
              v = '0' + v;
              v = v.substr(v.length - 2);
            }
            return v;
          } else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
          }
          return all;
        });
        return format;
      }
      return dateFormat(value, arg);
    })

//filters方式
        filters: {
                format(date, format) {
                    if (typeof date === "string") {
                        var mts = date.match(/(\/Date\((\d+)\)\/)/);
                        if (mts && mts.length >= 3) {
                            date = parseInt(mts[2]);
                        }
                    }
                    date = new Date(date);
                    if (!date || date.toUTCString() == "Invalid Date") {
                        return "";
                    }
                    var map = {
                        "M": date.getMonth() + 1, //月份 
                        "d": date.getDate(), //日 
                        "h": date.getHours(), //小时 
                        "m": date.getMinutes(), //分 
                        "s": date.getSeconds(), //秒 
                        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
                        "S": date.getMilliseconds() //毫秒 
                    };
                    format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
                        var v = map[t];
                        if (v !== undefined) {
                            if (all.length > 1) {
                                v = '0' + v;
                                v = v.substr(v.length - 2);
                            }
                            return v;
                        } else if (t === 'y') {
                            return (date.getFullYear() + '').substr(4 - all.length);
                        }
                        return all;
                    })
                    return format;
                },
````

# 钩子函数

````js
mounted:function(){
    //该生命周期钩子函数被触发的时候，模板已经可以使用
    //一般此时用于获取后台数据,然后把数据填充到模板
}
````

# 组件注册

````html
    Vue.component('button-counter', {
            data: function() {
                return {
                    count: 0
                }
            },
            template: '<button @click="handle">点击了{{count}}次</button>',
            methods: {
                handle() {
                    this.count++
                }
            }
        })

//第二种方法
    <div id="app">
        <my-cpn></my-cpn>
    </div>

    <script src="./lib/vue.js"></script>
    <script>
        //创建组件
        const cpn1 = Vue.extend({
      template: `
          <div>
          <h2>我是标题1</h2>
          <p>我是内容</p>
          </div>
    `
        })
        //注册组件
        Vue.component('my-cpn', cpn1)

        let app = new Vue({
            el: '#app',
            data: {},
            methods: {},
        })
    </script>
````

# 父组件向子组件传值

````html
   <div id="app">
        <menu-item :menu-title='ptitle' :parr='parr' :pobj='pobj'></menu-item>
    </div>

    <script src="./lib/vue.js"></script>
    <script>
        Vue.component('menu-item', {
            props: ['menuTitle', 'parr', 'pobj'],
            // data: function() {},
            template: `
        <div>
            {{menuTitle}}
              <ul> 
               <li :key='index' v-for='(item,index) in parr'>
                {{item}}
               </li>
              </ul>
             <span> {{pobj.name}}</span>
             <span> {{pobj.age}}</span>
        </div>
           `
        })
        let app = new Vue({
            el: '#app',
            data: {
                pmsg: '父组件中的内容',
                ptitle: '动态绑定属性',
                parr: ['苹果', '灵梦', '草莓', '栗子'],
                pobj: {
                    name: 'ls',
                    age: 18
                }
            },
            methods: {},
        })
    </script>
````

# 子组件向父组件传值

````html
// $.emit()发射一个事件给父子件
    <div id="app">
        <cpn @itemclick='cpnClick'></cpn>
    </div>
    <template id="cpn">
    <div>
        <button v-for='item in cate' @click='btnClick(item)'>{{item.name}}</button>
    </div>
</template>
    <script src="./lib/vue.js"></script>
    <script>
        Vue.component('cpn', {
            data: function() {
                return {
                    cate: [{
                            id: 'aaa',
                            name: '热门推荐'
                        }, {
                            id: 'bbb',
                            name: '手机数码'
                        },

                        {
                            id: 'ccc',
                            name: '家用家电'
                        }, {
                            id: 'ddd',
                            name: '电脑办公'
                        },

                    ]
                }
            },
            template: '#cpn',
            methods: {
                btnClick(item) {
                    this.$emit('itemclick', item)
                }
            }
        })
        let app = new Vue({
            el: '#app',
            data: {},
            methods: {
                cpnClick(item) {
                    console.log(' cpnClick', item);
                }
            },
        })
    </script>
````

# 兄弟之间传递

````js
实例化一个vue对象
let hub = new Vue()

hub.$on()   //监听
hub.$off()  //销毁
````





# 组件插槽

slot标签   组件中间没有内容默认显示的就是插槽内容

# 具名插槽

slot 里面加name属性   2.6.1以后阔以简写 <template #name>

# 作用域插槽

< template slot-scope='自定义属性名'

# 





# Promise对象

实例化Promise对象构造函数中传递函数，该函数中用于处理异步任务

resolve 和reject两个参数用于处理成功和失败两种情况，并通过p.then获取处理结果

````js
let p = new Promise(function(resolve,reject){
    //成功时调用resolve
    //失败时调用reject
}).then(ret=>{
  log(ret)  
},
       info=>{
    log(info)
})
p.then(function(ret){
    //从resolve中得到正常结果
},function(info){
    //从reject得到错误信息
})
````

# pormise简化的写法

````js
let fs = require('fs')

function read(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

read('./name.txt').then((data)=>{
  return read(data) 
}).then((data)=>{
  return read(data)  
}).then((data)=>{
    console.log(data);
},err=>{
    console.log(err);
})

````



# 	then传递参数的时候

```
第一个then返回一个promise实例对象,第二个then得到第一个异步任务返回的值，如果then返回的是一个普通的值，返回的普通值会直接传递到下一个then，通过then参数中函数的参数接受该值，而且此时then会产生一个promise实例对象
```

# promise对象方法

````js
catch //  接收reject的信息  有一个错误就执行catch
finally // 成功与否都会执行的 


promise.all() //并发处理多个异步任务，所有任务都执行完成才能得到结果 里面有个数组
promise.race() //并发处理多个异步任务，只要有一个任务完成就能得到结果
````

#  fetch API用法

浏览器提供的请求数据的API 用来替代 XML	

````js
 fetch('url').then(function(data){
     data.text();  // 他返回一个promise实例对象，用于获取后台返回的数据
 })then(function(data){
     console.log(data)
 })
post 请求 通过body 要加个headers{'Content-Type':'bapplication/x-www-from-urlencode'}

// json方式后端代码
app.get('/json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 13,
        gender: 'male'
    });
} 
        // json方式                                      
 fetch('http://localhost:3000/json).then(function(data){
    retrun data.json();  // 他返回一个promise实例对象，用于获取后台返回的数据
 })then(function(data){
let obj =JSON.parse(data)
log(data.uname)
 })
````

# axios的基本用法

本质上是对ajax的一个封装 支持promise的写法  

````js
axios.get('/adata').then(ret=>{
    //data属性是固定的，用于获取后台的实际数据
    console.log(ret.data)
})
get和delete 请求 //通过url传递参数 直接在url地址后加参数 ？id=123  通过prams对象传参axios.get('/adata',{
prams:{
    id:123
}
})

axios.post('/adata',{
    uname:'tw'
}).then(ret=>{
    //data属性是固定的，用于获取后台的实际数据
    console.log(ret.data)
    
})
axios的响应结果
data 实际响应回来的数据
headers响应头
status 响应码
statusText 响应信息
axios.defaults.baseURL='http://localhost:3000/app'  //默认地址

````

# axios拦截器的用法

````js
axions.interceptors.request.use(function(config){
    config.headers.mytoken='nihao'
    return config
},function(err){
    console.log(err)
})
axios.get('http://')

响应拦截器
axios.interceptors.response.use() 也是成功和失败
axios.interceptors.response.use(function (res) {
    // 2.1  在接收响应做些什么
    var data = res.data;
    return data;
}, function (err) {
    // 2.2 对响应错误做点什么
    console.log(err)
});
````

# Asynv/ Await 异步的终极解决方案

````js
async function queryData(id){
    const ret =await axios.get('/data')
    return ret;
}
queryData.then(ret=>{
    log(ret.data)
})
//asynv 写在箭头函数的括号前面 , 普通函数写在function前面
//async 修饰的函数我们称为一个异步函数，这个异步函数调用后返回值是一个promise实例
//await 必须放到async函数里面
//await 后面一般要跟一个promise await后的返回值是promise resolve
 
````



# 路由阶段

使用componet标签当作组件的占位符 用:is绑定一个组件的名字

```js
/监听hash的变化
window.onhashchange=function(){
    //location.hash 获取最新的hash值
    log(location.hash)
    switch(location.hash.slice(1){
           case '/zhuye',
           vm.comName='zhuye	'
           })
}
```

# Vue Router

用于spa应用程序的开发

- 支持HTML5历史模式或hash模式
- 支持嵌套路由
- 支持路由参数
- 支持编程式路由
- 支持命名路由

**vue router用法**

````html


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="app">
      <!--  router-link vue中替代a标签 to 替代href 不过此时可以不要#-->
        <router-link to='/user'>User</router-link>
        <router-link to='/register'>Register</router-link>
        <!-- 路由填充位 -->
        <router-view></router-view>
    </div>

    <script src="./lib/vue.js"></script>
    <!--  别忘了引用vue-router   -->
    <script src="./lib/vue-router_3.0.2.js"></script>
    <script>
        const User = {
            template: `<h1>User 组件</h1>`
        }
        const Register = {
                template: `<h1>Register 组件</h1>`
            }5
            //创建路由实例对象
        const router = new VueRouter(
            //redirect 重定向到指定路径
            {
                routes: [{
                    path: '/',
                    redirect: '/user'

                }, {
                    path: '/user',
                    component: User
                }, {
                    path: '/register',
                    component: Register
                }]
            })
        let app = new Vue({
            el: '#app',
            data: {},
            methods: {},
            //挂载路由实例对象
            router
        })
    </script>
</body>

</html>
````

# 编程式导航的基本用法

````js
this.$router.push('hash地址')   //跳转到指定的URl页面
this.$router.go(n)  //n为1前进 为-1后退 b

//router.push的用法
router.push('hash地址') //到指定url页面
router.push({path:'/home'})  //对象方式的url
router.push({name:'.user',params:{userId:123}}) //命名路由的传参
router.push({path:'/register',query:{uname:'lisi'}}) //待查询参数变成/register?uname=list
````

# 模块化导入导出

```js
export{} //导出   export let name= 'wany'
import{} //导入

export default //能够自己命名 只能有一个default
import ml from '路径'
comentJs	
```

# 单文件vue