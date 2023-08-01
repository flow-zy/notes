---
title: Vue
#NavLink
prev:
  text: es6
  link: /front/ECMAScript
next:
  text: React
  link: /front/react


---
## 介绍

(发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，都可以胜任。

## 渐进式框架

是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：

- 无需构建步骤，渐进式增强静态的 HTML
- 在任何页面中作为 Web Components 嵌入
- 单页应用 (SPA)
- 全栈 / 服务端渲染 (SSR)
- Jamstack / 静态站点生成 (SSG)
- 开发桌面端、移动端、WebGL，甚至是命令行终端中的界面

## MVVM模型

MVVM 是一种软件架构模式，它将软件界面显示分离为两个部分：视图层和模型层。视图层负责界面的显示，模型层负责页面的逻辑操作。
MVVM 模式和 MVC 模式一样，也是模型 - 视图 - 控制器（Model-View-Controller）的简写。
MVVM 模式和 MVC 模式的不同之处在于它实现了视图（View）和模型（Model）的数据绑定。

## 第一个Vue应用

### 引入Vue.js

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

### 声明式渲染

```html
<div id="app">
  {{ message }}
</div>
```

### 创建Vue实例

实例是 应用的入口。

```js
const app =new Vue({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})

app.mount('#app')
```

这样你的第一个vue应用就创建好了，你可以看到页面上的hello world，接下来该正式踏入Vue之旅了 :tada:

## 模板语法

Vue.js 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 模板都是语法层面合法的 HTML,可以被符合规范的浏览器和 HTML 解析器解析。在底层机制中，会将模板编译成高度优化的 JavaScript 代码，然后在运行时将其转换为虚拟 DOM 并进行渲染。

### 插值

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值
每次更新message的值，插值处的内容都会更新

```html
<div id="app">
  {{ message }}
</div>
```

### 指令

指令 (Directives) 是带有 v- 前缀的特殊属性。

1. `v-bind`: 指令用于响应式地更新 HTML 属性

```html
<div id="app-2">
  <span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
  可以简写成 
  <span :title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
</div>
<script>
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
  })
</script>
```

2. `v-on`:指令用于监听 DOM 事件

```html
<div id="app-2">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">逆转消息</button>
  可以简写成 
  <button @click="reverseMessage">逆转消息</button> 
</div>
<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
</script>
```

- 事件修饰符

  - .stop
  - .prevent
  - .capture
  - .self
  - .once
  - .passive

  ```html
    <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="doThis"></a>

        <!-- 提交事件不再重载页面 -->
        <form v-on:submit.prevent="onSubmit"></form>

        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent="doThat"></a>

        <!-- 只有修饰符 -->
        <form v-on:submit.prevent></form>

        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
        <div v-on:click.capture="doThis">...</div>

        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doThat">...</div>

        <!-- 点击事件将只会触发一次 -->
        <a v-on:click.once="doThis"></a>

        <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
        <!-- 而不会等待 `onScroll` 完成 ,能够提升移动端的性能 -->
        <!-- 这其中包含 `event.preventDefault()` 的情况 -->
        <div v-on:scroll.passive="onScroll">...</div>
  ```

3. `v-model`: 指令在表单控件元素上创建双向数据绑定

```html
<div id="app-2">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Hello Vue!'
  }
})
</script>
```

4. `v-if` :指令用于条件性地渲染一块内容

```html
<div id="app-2">
  <p v-if="seen">现在你看到我了</p>
  <p v-else>你又看到我了</p>
</div>
<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    seen: true
  }
})
</script>
```

5. `v-show`: 指令根据表达式的真假值，切换元素的 display 属性

```html
<div id="app-2">
  <p v-show="ok">Hello!</p>
</div>
<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    ok: false
  }
})
</script>
```

> `v-if` 和 `v-show` 的区别

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
- `v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- `v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- `v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。
所以，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

6. `v-for`: 指令基于一个数组(对象)来渲染一个列表

    - 数组

    ```html
    <div id="app-2">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <script>
    var app2 = new Vue({
      el: '#app-2',
      data: {
        todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' }
        ]
      }
    })
    </script>
    ```

    - 对象

    ```html
    <div id="app-2">
      <li v-for="value in object">
        {{ value }}
      </li>
    </div>
    <script>
    var app2 = new Vue({
      el: '#app-2',
      data: {
        object: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        }
      }
    })
    </script>
    ```

7. `v-html`: 指令用于输出 HTML 代码

```html
<div id="app-3">
  <p>Using mustaches: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</div>
<script>
var app3 = new Vue({
  el: '#app-3',
  data: {
    rawHtml: '<span style="color: red">This should be red.</span>'
  }
})
</script>
```

8. `v-pre`: 指令跳过元素和它的子元素的编译过程。

```html
<span v-pre>{{ this will not be compiled }}</span>
```

9. `v-cloak`: 指令保持在元素上直到关联实例结束编译

```html
<div id="app-4" v-cloak>
  <p>{{ message }}</p>
</div>
<script>
var app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'Hello Vue.js!'
  }
})
</script>
```

10. `v-once`: 指令只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。

```html
<span v-once>This will never change: {{msg}}</span>
```

11. `v-text`: 指令更新元素的 textContent。如果要更新部分的 textContent，需要使用 Mustache 插值。

```html
<span v-text="msg"></span>
<!-- 输出: "Hello Vue.js!" -->
<span v-text="msg + '!'"></span>
<!-- 输出: "Hello Vue.js! " -->
```

12. `v-slot`: 作用域插槽

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

13. 自定义指令

Vue自定义指令是用来操作 DOM 的。除了核心功能默认内置的指令(比如 v-model 或 v-show)之外，还允许你注册自定义的指令。有的情况下，对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。

- 注册全局指令和局部注册指令的方式不同，全局指令可以在任何地方使用，而局部注册指令只能在被注册的组件内部使用。
- 注册自定义指令需要在 实例化之前进行，可以通过 app.config.globalProperties 或者 this.$options.globalProperties 来实现全局注册。
- 自定义指令必须包含一个 unbind 钩子函数，用于解绑事件监听器。
- 自定义指令必须包含一个 bind 钩子函数，用于绑定事件监听器。
- bind 钩子函数接收三个参数：el、binding 和 vnode。其中 el 是当前元素，binding 是当前元素上的绑定对象，vnode 是当前节点的信息。
- unbind 钩子函数也接收三个参数：el、binding 和 vnode。其中 el 是当前元素，binding 是当前元素上的绑定对象，vnode 是当前节点的信息。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Vue自定义指令示例</title>
  </head>
  <body>
    <div id="app">
      <input v-focus />
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script>
      Vue.directive('focus', {
        bind(el) {
          el.addEventListener('focus', function() {
            console.log('input focused');
            this.blur(); // 防止浏览器默认行为聚焦到其他元素上
          })
        },
        unbind(el) {
          el.removeEventListener('focus')
        }
      });

      const app = new Vue({
        el: '#app',
        data: {},
        methods: {},
        directives: {
          'focus': true // 将全局指令注册为局部指令，使其只在当前组件中生效
        }
      });
    </script>
  </body>
</html>
```

在这个例子中，我们注册了一个名为 `v-focus` 的全局指令。当一个 input 元素被 插入到 DOM 中后，它会被自动聚焦。这个指令在组件内部使用时，需要在 `setup` 标签内使用 `onMounted` 钩子函数来实现。同时，我们还使用了 `Vue.directive()` 方法来注册全局指令和局部指令。

## 计算属性与侦听器

### 计算属性（computed）

#### 介绍

1. 计算属性是基于它们的依赖进行缓存的。
2. 计算属性是可缓存的，只有当它的依赖项发生改变时，才会重新计算。
3. 计算属性默认只有 getter，不过在需要时也可以提供一个 setter。

#### 示例

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed:
  {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

### 侦听器

#### 介绍

1. 侦听器可以用来监听数据的变化，并执行相应的操作。
2. 侦听属性是可异步的，且当需要在数据变化时执行异步或开销较大的操作时，该方法是最有用的。

#### 示例

```html
<div id="watch-example">
  <p>Message: "{{ message }}"</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```

```js
var vm = new Vue({
  el: '#watch-example',
  data: {
    message: 'Hello'
  },
  watch: {
    //  whenever `message` changes, `handler` will be called
    message: function (newValue, oldValue) {
      console.log('The message was changed!')
      console.log('Old message: ' + oldValue)
      console.log('New message: ' + newValue)
    }
  }
})
```

### 计算属性，侦听器，方法三者之间的区别

1. 计算属性是基于它们的依赖进行缓存的，只有在它的依赖发生改变时才会重新求值。
2. 侦听器，方法，计算属性都是用来监听数据的改变，并执行相应的操作。
3. 计算属性适用于计算值，侦听器适用于异步操作。

## Class与Style的绑定

### Class绑定

#### 介绍

1. 绑定class样式，可以利用v-bind:class来实现。
2. 绑定的数据对象，可以是一个对象，也可以是数组。

#### 写法

- 对象语法

  - 第一种写法

    ```html
    <div id="class-object">
      <div
        class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }"
      ></div>
    </div>
    <script>
      new Vue({
        el:'#class-object',
        data:{
          isActive: true,
          hasError: false
        }
      })
    </script>

    ```

    在这个例子中，我们使用了一个对象字面量 `{ active: isActive, 'text-danger': hasError }` 作为 `v-bind:class` 的值。这个对象包含了两个属性：`active` 和 `'text-danger'`,它们的值分别来自 实例的 `isActive` 和 `hasError` 数据属性。

    当 `isActive` 为真时，`active` 类将被添加到元素上；当 `hasError` 为真时，`text-danger` 类也将被添加到元素上。如果两个条件都不满足，则不会添加任何类。

    这种方式可以方便地动态地切换元素的类，而不需要手动为每个可能的状态编写多个样式规则。
    结果渲染为

    ```html
    <div class="static active"></div>
    ```

- 第二种写法
  
    ```html
        <div v-bind:class="classObject"></div>
    ```

    ```js
      data: {
      classObject: {
        active: true,
        'text-danger': false,
      },
    },
    ```

  - 在这个例子中，我们将一个对象字面量 `{ active: true, 'text-danger': false }` 作为 `v-bind:class` 的值。这个对象包含了两个属性：`active` 和 `'text-danger'`,它们的值分别表示是否应该添加对应的类名。

  - 当 `active` 为真时，`active` 类名将被添加到元素上；当 `'text-danger'` 为真时，`text-danger` 类名也将被添加到元素上。如果两个条件都不满足，则不会添加任何类名。

    结果渲染：和上面的结果一样

- 数组语法

    ```html
      <div id="class-object">
        <div v-bind:class="[activeClass, errorClass]"></div>
      </div>
      <script>
        new Vue({
          el: '#class-object',
          data: {
            activeClass: 'active',
            errorClass: 'text-danger',
          },
        });
      </script>
    ```

  - 在这个例子中，我们使用了数组语法 `[activeClass, errorClass]` 作为 `v-bind:class` 的值。这个数组包含了两个元素：`activeClass` 和 `errorClass`,它们的值分别表示要添加到元素上的类名。

  - 当 实例的 `activeClass` 为真时，`active` 类名将被添加到元素上；当 `errorClass` 为真时，`text-danger` 类名也将被添加到元素上。如果两个条件都不满足，则不会添加任何类名。

    结果渲染为

    ```html
        <div class="active text-danger"></div>
    ```

    根据条件列表切换class

    ```html
      <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
    ```

    ```html
      <div v-bind:class="[{ active: isActive }, errorClass]"></div>
    ```

  - 这两个例子都是使用数组语法 `[classObject, errorClass]` 或对象语法 `{ active: isActive }` 作为 `v-bind:class` 的值。
  - 在第一个例子中，我们使用了三元运算符来动态地决定是否添加 `activeClass` 类名。如果 `isActive` 为真，则添加 `activeClass` 类名；否则不添加任何类名。
  - 在第二个例子中，我们使用了对象语法来动态地决定是否添加 `active` 类名。如果 `isActive` 为真，则添加 `active` 类名；否则不添加任何类名。
  - 这种方式也可以写成 `{ active: true }`,其中 `true` 可以替换为任意真实值。
  - 和上面的渲染结果一样

### Style绑定

#### 介绍

1. 绑定style，可以利用v-bind:style实现。

2. 绑定的数据对象，可以是一个对象，也可以是数组。

#### 写法

- 对象写法

    ```html
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    ```

  在这个例子中，我们将 `color` 和 `fontSize` 作为属性名传递给 v-bind:style,并将它们与动态计算的值绑定在一起。这样，当 activeColor 或 fontSize 发生变化时，元素的样式也会相应地更新。

- 数组写法

    ```html
      <div v-bind:style="[baseStyles, overridingStyles]"></div>
    ```

  - 在这个例子中，我们使用了数组语法 `[baseStyles, overridingStyles]` 作为 `v-bind:style` 的值。这个数组包含了两个元素：`baseStyles` 和 `overridingStyles`,它们的值分别表示基础样式和覆盖样式。

  - 当 实例的数据发生变化时，会自动将这些样式应用到对应的元素上。如果两个样式对象中有相同的属性，则后面的样式对象会覆盖前面的样式对象中的属性值。

## 过滤器

Vue过滤器是 中的一个特性，作用是用于对文本进行格式化的作用。过滤器分为全局过滤器和私有过滤器(本地过滤器)两种。全局过滤器可以在任何地方使用，而私有过滤器只能在当前组件中使用。

下面是 过滤器的使用方法及注意事项：

- 注册过滤器：Vue.filter(name, callback) 或 new Vue({ filters: {} })
- 使用过滤器：{{ xxx | filterName }} 或 v-bind:属性="xxx | filterName"
- 注意：过滤器不会修改数据，只是改变用户看到的输出(效果)

```js
  Vue.filter('capitalize', function(value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  });
```

在上面的代码中，我们定义了一个名为 capitalize 的过滤器，它的作用是将输入的字符串首字母大写。在模板中使用时，可以像下面这样调用：

```html
<p>{{ message | capitalize }}</p>
```

## 生命周期

生命周期是指 实例对象从创建之初到销毁的过程，所有功能的实现都是围绕其生命周期进行的。在生命周期的不同阶段调用对应的钩子函数可以实现组件数据管理和 DOM 渲染两大重要功能。

以下是 生命周期的详细解析：

- beforeCreate:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
- created:实例已创建，数据观测 (data observer) 和 event/watcher 事件配置已经完成，但还未挂载 DOM 之前被调用。
- beforeMount:在挂载开始之前被调用：相关的 render 函数首次被调用。
- mounted:实例已经挂载到 DOM,可以访问到 el 节点上，但是还没有开始渲染模板时被调用。
- beforeUpdate:数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
- updated:由于数据更改导致的重新渲染和打补丁已经完成，DOM 更新后调用。
- beforeDestroy:实例销毁之前调用。在这一步，实例仍然完全可用。
- destroyed:实例销毁后调用。调用后，实例指示的所有东西都会解绑定，所有的事件监听器都会被移除，所有的子实例也会被解挂载 。

图示

![Alt](<https://v2.cn.vuejs.org/images/lifecycle.png> "生命周期" =800x)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Vue生命周期示例</title>
  </head>
  <body>
    <div id="app">
      {{ message }}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!'
        },
        beforeCreate() { console.log('beforeCreate') },
        created() { console.log('created') },
        beforeMount() { console.log('beforeMount') },
        mounted() { console.log('mounted') },
        beforeUpdate() { console.log('beforeUpdate') },
        updated() { console.log('updated') },
        beforeDestroy() { console.log('beforeDestroy') },
        destroyed() { console.log('destroyed') }
      })
    </script>
  </body>
</html>
```

在这个例子中，我们创建了一个 实例，并在每个生命周期钩子函数中添加了一些日志输出。这些生命周期钩子函数包括 `beforeCreate`、`created`、`beforeMount`、`mounted`、`beforeUpdate`、`updated`、`beforeDestroy` 和 `destroyed`,它们分别在不同的阶段被调用。

## 脚手架

脚手架（CLI）是 Vue.js 官方提供的脚手架工具，用于快速创建和管理 Vue.js 项目。使用 vue 脚手架可以简化项目创建、配置和维护的过程，提高开发效率。以下是使用 vue 脚手架创建和管理 Vue.js 项目的步骤：

1. 安装 Node.js：首先确保你安装了 Node.js。你可以从 [](https://nodejs.org/) 下载并安装 Node.js。
2. 安装 vue 脚手架：打开命令行工具，全局安装 vue 脚手架。输入以下命令：

```sh
npm install -g @vue/cli
```

等待安装结束，脚手架就安装好了
项目运行步骤：

1. 创建一个新项目：在命令行工具中，导航到要创建项目的目录，然后输入以下命令创建一个新项目：

```sh
vue create my-project
```

将 my-project 替换为你的项目名称。这将创建一个新的项目文件夹，并自动安装所需的依赖项。

2. 进入项目目录：

```sh
cd my-project
```

3. 运行项目：在项目目录中，输入以下命令启动开发服务器：

```sh
npm run serve
```

这将启动一个热重载的开发服务器。你可以在浏览器中访问 `http://localhost:8080/` 查看你的 Vue.js 应用程序。

## 组件化

图示

![Alt](<https://v2.cn.vuejs.org/images/components.png> "组件组织" =800x)

1. 组件化是一种将页面拆分成多个组件的架构模式，每个组件依赖的 CSS、JS、模板、图片等资源放在一起开发和维护，可以提高开发效率，方便重复使用，简化调试步骤。
2. 组件是可复用的 实例，所以它们与 new 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。

### 定义

在Vue中，组件可以通过Vue.component()方法或通过单文件组件（SFC）方式定义。组件可以包含模板、样式和行为逻辑，并可以在应用程序中多次使用。

组件是 Vue.js 中的一个重要特性，它可以让我们将页面划分为多个部分，每个部分都是一个可重用的组件。组件的定义方式有两种：全局组件和局部组件。全局组件可以在任何地方使用，而局部组件只能在当前组件中使用。

> 在组件中data为什么必须是个函数
> 这是因为组件是可以复用的，如果每个组件都使用同一个 data 对象，那么当一个组件改变了 data 的值，其它组件的 data 也会被改变，
> 这显然是不合理的。因此，要求 data 必须是一个函数，这样每次渲染组件时都会调用这个函数来创建一个新的 data 对象，
>从而保证了组件的独立性和可复用性

### 组件注册

在Vue中，可以使用全局注册和局部注册两种方式来注册组件。

1. 全局注册组件：
  使用Vue的全局方法Vue.component()来注册组件。

   示例代码：

   ```html
    <div id="app">
      <button-counter></button-counter>
    </div>
    <script>

    // 定义一个名为 button-counter 的新组件
      Vue.component('button-counter', {
        data: function () {
          return {
            count: 0
          }
        },
        template: `<button v-on:click="count++">You clicked me {{ count }} times.</button>`
      })
      new Vue({
        el:'#app'
      })
    </script>
   ```

   在上面的例子中，使用Vue.component('button-counter', ButtonCounter)将MyComponent注册为全局组件。这样，在整个应用中就可以直接使用`<button-counter>`标签来引用和使用MyComponent组件了。

2. 局部注册组件：
   在Vue组件中，可以通过components选项来局部注册组件。

   示例代码：

   ```html
  <button-counter></button-counter>
   
   <script>
    const buttonCounter={
      data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    }
    new Vue({
      components:{
        'button-counter':ButtonCounter
      }
    })
   </script>
   ```

   在上面的例子中，在components选项中将button-counter组件注册为局部组件。这样，只有当前组件及其子组件才能使用`<button-counter>`标签来引用和使用ButtonCounter组件。

>总结：
>全局注册和局部注册组件都可以在Vue应用中使用组件。全局注册的组件可以在整个应用的任何地方使用，而局部注册的组件只能在指定的组件及其子组件中使用。根据项目的需求和组件的复用性，可以选择使用全局注册或局部注册来注册组件。
在 中，组件命名需要遵循以下规则：

1. 使用字母（大写或小写）、数字、连字符（-）或下划线（_）来命名组件。
2. 组件名应尽可能简洁，以便其他开发人员能够快速理解其用途。
3. 不要使用Vue内置的保留字，如data、el、$options等。
4. 组件名应遵循 PascalCase（大驼峰命名法）或 kebab-case（短横线命名法），但通常使用 PascalCase。
5. 在某些情况下，你可能需要使用多个单词来命名组件，这时可以使用 PascalCase。例如，如果你有一个名为UserProfile的组件，你可以将其命名为UserProfileComponent。
以下是一些常见的 组件命名示例：

``` js
// 推荐
ComponentName
UserProfileComponent
ProfileListComponent

// 尽量避免
componentName
ComponentNameComponent
ComponentName-Component
```

在 中，通常使用单文件组件（SFC）来编写组件。SFC 的文件名应与组件名保持一致。例如，UserProfileComponent.vue。

### 单文件组件

Vue.js 提供了单文件组件（SFC）的概念，这是一种简洁的组件编写方式，可以提高代码的可读性和可维护性。单文件组件由一个 .文件组成，该文件包含组件的模板、样式和逻辑。以下是一个简单的 单文件组件示例：

```vue
<!-- UserProfileComponent.-->
<template>
<div>
  <h1>User Profile</h1>
  <p>Name: {{ user.name }}</p>
  <p>Age: {{ user.age }}</p>
</div>
</template>

<script>
export default {
data() {
  return {
    user: {
      name: 'John Doe',
      age: 30,
    },
  };
},
};
</script>

<style scoped>
/* 样式 */
</style>
```

在这个示例中，我们创建了一个名为 UserProfileComponent 的单文件组件。组件包含一个模板、一个脚本和一些样式。在脚本中，我们定义了一个名为 user 的数据属性，其中包含用户的姓名和年龄。

要使用这个单文件组件，你需要在其他 组件中导入它。例如，在另一个单文件组件中，你可以这样导入并使用 UserProfileComponent：

```vue
<!-- another-component.-->
<template>
<div>
  <h1>Another Component</h1>
  <user-profile-component></user-profile-component>
</div>
</template>

<script>
import UserProfileComponent from './UserProfileComponent.vue';

export default {
components: {
  UserProfileComponent,
},
};
</script>
```

这样，你就可以在 应用程序中使用和复用这个单文件组件了。

### 组件通信

在Vue中，组件之间的通信可以通过父子组件的Props和事件以及兄弟组件或者任意组件之间通过Vue实例的事件总线和Vuex状态管理来实现。

1. Props和事件：父组件可以通过Props将数据传递给子组件，子组件可以通过事件将数据传递给父组件。在父组件中定义Props，在子组件中通过this.$emit()触发事件来传递数据。

  父组件：

  ```vue
  <template>
    <div>
      <child-component :message="message" @childEvent="handleChildEvent"></child-component>
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';

  export default {
    components: {
      ChildComponent
    },
    data() {
      return {
        message: 'Hello from parent'
      };
    },
    methods: {
      handleChildEvent(data) {
        console.log(data); // 接收子组件传递的数据
      }
    }
  };
  </script>
  ```
  
  子组件：

  ```vue
  <template>
    <div>
      <button @click="sendDataToParent">Send data to parent</button>
    </div>
  </template>

  <script>
  export default {
    props: ['message'],
    methods: {
      sendDataToParent() { 
        this.$emit('childEvent', 'Data from child'); // 触发事件传递数据给父组件
      }
    }
  };
  </script>
  ```

2. Vue实例的事件总线：可以利用Vue实例作为事件中心来传递数据。在main.js中创建一个Vue实例，并通过$on()监听事件，通过$emit()触发事件来传递数据。

  ```javascript
  // main.js
  import from 'vue';
  export const EventBus = new Vue(); // 创建一个Vue实例作为事件总线

  // 发送数据
  EventBus.$emit('customEvent', data);

  // 接收数据
  EventBus.$on('customEvent', (data) => {
    console.log(data);
  });
  ```

3. Vuex状态管理：Vuex是Vue官方提供的用于管理应用状态的库。可以在其中定义和修改共享状态，不需要通过组件之间的传递来实现通信。

  首先，在main.js中注册Vuex：

  ```javascript
  import from 'vue';
  import Vuex from 'vuex';

  Vue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      message: 'Hello from Vuex'
    },
    mutations: {
      setMessage(state, payload) {
        state.message = payload;
      }
    },
    actions: {
      updateMessage({ commit }, payload) {
        commit('setMessage', payload);
      }
    }
  });

  new Vue({
    store,
    render: h => h(App)
  }).$mount('#app');
  ```

  然后，在组件中可以使用mapState、mapMutations和mapActions来获取或者修改状态。

  ```vue
  <template>
    <div>
      <div>{{ message }}</div>
      <button @click="sendMessage">Send Message</button>
    </div>
  </template>

  <script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState(['message'])
    },
    methods: {
      ...mapActions(['updateMessage']),
      sendMessage() {
        this.updateMessage('New message from component'); // 修改状态
      }
    }
  };
  </script>
  ```

4. parent/children/refs： Vue实例提供了一些特殊属性(refs：Vue实例提供了一些特殊属性(parent/children/children/refs)，可以访问父组件、子组件或具有ref属性的组件实例，通过这些属性可以在组件之间进行通信。

举个例子，假设我们有一个父组件Parent和一个子组件Child，在Parent组件中有一个按钮，点击按钮后需要修改Child组件中的某个数据。

首先，在Parent组件中定义一个数据（例如name），然后通过props将这个数据传递给Child组件：

```vue
<template>
  <div>
    <button @click="changeData">Change Data</button>
    <Child :name="name"></Child>
  </div>
</template>
<script>
import Child from './Child.vue';
export default {
  data() {
    return {
      name: 'John'
    }
  },
  components: {
    Child
  },
  methods: {
    changeData() {
      this.name = 'Alice';
    }
  }
};
</script>
```

在Child组件中，利用props接收父组件传递的数据，并将其渲染到子组件的模板中：

```vue
<template>
  <div>{{ name }}</div>
</template>
<script>
export default {
  props: ['name']
};
</script>
```

现在，当点击Parent组件中的按钮时，会触发changeData方法，将name的值修改为'Alice'。由于props是单向数据流，Child组件会自动更新，并将修改后的数据渲染到模板中。

除了使用props传递数据外，还可以通过$emit在子组件中触发自定义事件，并在父组件中监听这些事件来实现通信。另外，$refs可以用来访问子组件的实例和方法，从而实现父子组件之间的方法调用。这些方式可以根据具体需求选择使用。

### 动态组件

动态组件是 Vue.js 提供的一种高级功能，可以根据数据的变化动态地渲染不同的组件。

使用动态组件的主要步骤如下：

1. 首先，在模板中定义一个占位符，用来渲染不同的组件。可以使用 `<component>` 标签，并通过 `is` 属性绑定一个数据，这个数据将决定要渲染哪个组件。示例：

   ```html
   <template>
     <component :is="currentComponent"></component>
   </template>
   ```

2. 在 实例中，定义一个用于决定要渲染哪个组件的数据属性。可以根据需求来修改这个数据属性的值以切换组件。示例：

   ```javascript
   <script>
     export default {
       data() {
         return {
           currentComponent: 'ComponentA'
         }
       }
     }
   </script>
   ```

3. 创建需要动态渲染的组件。可以在 组件中定义多个组件，并根据需要来切换。示例：

   ```html
   <template>
     <div>
       <p>This is Component A</p>
     </div>
   </template>

   <template>
     <div>
       <p>This is Component B</p>
     </div>
   </template>
   ```

4. 最后，在需要切换组件的时候，可以通过修改数据属性的值来实现动态渲染。例如，当点击按钮触发事件时，修改数据属性的值，从而切换渲染的组件。示例：

   ```html
   <template>
     <div>
       <button @click="changeComponent">Switch Component</button>
     </div>
   </template>

   <script>
     export default {
       methods: {
         changeComponent() {
           this.currentComponent = 'ComponentB';
         }
       }
     }
   </script>
   ```

通过这些步骤，你可以实现在 Vue.js 中动态渲染不同的组件。请注意，在实际应用中，你可以根据具体需求做更多的扩展和优化，例如使用 `v-if` 或者 `v-show` 来控制组件的显示与隐藏。

### 插槽

插槽（Slot）是Vue.js中一种非常有用的功能，它允许我们在组件中定义一些带有特殊用途的占位符。通过使用插槽，我们可以将组件的内容进行动态的分发和替换。

在Vue组件中使用插槽可以实现以下目的：

1. 插入默认内容：通过在组件内部定义插槽，可以在没有提供具体内容时显示默认的内容。
2. 分发内容：父组件可以通过插槽将内容分发到子组件的特定位置。这使得组件更加灵活，可以根据需要插入不同的内容。
3. 具名插槽：可以使用具名插槽在组件中定义多个插槽，并在父组件中根据名称选择插入的内容。
4. 作用域插槽：作用域插槽允许父组件在插槽中使用子组件的数据。这使得子组件能够向父组件传递数据。

下面是一个简单的例子，演示了如何在Vue组件中使用插槽：

```vue
// 子组件 ChildComponent.vue
<template>
  <div>
    <h1>子组件标题</h1>
    <slot>这是默认的插槽内容</slot>
  </div>
</template>

// 父组件 ParentComponent.vue
<template>
  <div>
    <h1>父组件标题</h1>
    <child-component>
      <p>插入到子组件插槽中的内容</p>
    </child-component>
  </div>
</template>
```

在上面的例子中，我们定义了一个子组件ChildComponent，它包含了一个默认的插槽`<slot>`。父组件ParentComponent中使用了子组件，并为子组件提供了额外的内容作为插槽的内容。在这个例子中，父组件的`<p>`标签中的内容将会被插入到子组件的插槽中。

除了默认插槽外，Vue还支持具名插槽和作用域插槽。具名插槽可以通过`<template>`标签的`v-slot`指令来使用，而作用域插槽可以通过在`<slot>`标签中使用`v-bind`指令传递数据给父组件。

学习组件知识，来个基础小案例

1. [TODOMVC](/blog/code/todoMVC)

<CommentService />
