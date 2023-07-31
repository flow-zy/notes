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

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

## 渐进式框架

Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue 的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：

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

Vue 实例是 Vue 应用的入口。

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

Vue.js 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML,可以被符合规范的浏览器和 HTML 解析器解析。在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码，然后在运行时将其转换为虚拟 DOM 并进行渲染。

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

Vue自定义指令是用来操作 DOM 的。除了核心功能默认内置的指令(比如 v-model 或 v-show)之外，Vue 还允许你注册自定义的指令。有的情况下，对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。

- 注册全局指令和局部注册指令的方式不同，全局指令可以在任何地方使用，而局部注册指令只能在被注册的组件内部使用。
- 注册自定义指令需要在 Vue 实例化之前进行，可以通过 app.config.globalProperties 或者 this.$options.globalProperties 来实现全局注册。
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

在这个例子中，我们注册了一个名为 `v-focus` 的全局指令。当一个 input 元素被 Vue 插入到 DOM 中后，它会被自动聚焦。这个指令在组件内部使用时，需要在 `setup` 标签内使用 `onMounted` 钩子函数来实现。同时，我们还使用了 `Vue.directive()` 方法来注册全局指令和局部指令。

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

    在这个例子中，我们使用了一个对象字面量 `{ active: isActive, 'text-danger': hasError }` 作为 `v-bind:class` 的值。这个对象包含了两个属性：`active` 和 `'text-danger'`,它们的值分别来自 Vue 实例的 `isActive` 和 `hasError` 数据属性。

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

  - 当 Vue 实例的 `activeClass` 为真时，`active` 类名将被添加到元素上；当 `errorClass` 为真时，`text-danger` 类名也将被添加到元素上。如果两个条件都不满足，则不会添加任何类名。

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

  - 当 Vue 实例的数据发生变化时，Vue 会自动将这些样式应用到对应的元素上。如果两个样式对象中有相同的属性，则后面的样式对象会覆盖前面的样式对象中的属性值。

## 过滤器

Vue过滤器是 Vue 中的一个特性，作用是用于对文本进行格式化的作用。过滤器分为全局过滤器和私有过滤器(本地过滤器)两种。全局过滤器可以在任何地方使用，而私有过滤器只能在当前组件中使用。

下面是 Vue 过滤器的使用方法及注意事项：

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

Vue 生命周期是指 Vue 实例对象从创建之初到销毁的过程，Vue 所有功能的实现都是围绕其生命周期进行的。在生命周期的不同阶段调用对应的钩子函数可以实现组件数据管理和 DOM 渲染两大重要功能。

以下是 Vue 生命周期的详细解析：

- beforeCreate:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
- created:实例已创建，数据观测 (data observer) 和 event/watcher 事件配置已经完成，但还未挂载 DOM 之前被调用。
- beforeMount:在挂载开始之前被调用：相关的 render 函数首次被调用。
- mounted:实例已经挂载到 DOM,可以访问到 el 节点上，但是还没有开始渲染模板时被调用。
- beforeUpdate:数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
- updated:由于数据更改导致的重新渲染和打补丁已经完成，DOM 更新后调用。
- beforeDestroy:实例销毁之前调用。在这一步，实例仍然完全可用。
- destroyed:Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器都会被移除，所有的子实例也会被解挂载 。

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

在这个例子中，我们创建了一个 Vue 实例，并在每个生命周期钩子函数中添加了一些日志输出。这些生命周期钩子函数包括 `beforeCreate`、`created`、`beforeMount`、`mounted`、`beforeUpdate`、`updated`、`beforeDestroy` 和 `destroyed`,它们分别在不同的阶段被调用。

## 组件化

Vue 组件化是一种将页面拆分成多个组件的架构模式，每个组件依赖的 CSS、JS、模板、图片等资源放在一起开发和维护，可以提高开发效率，方便重复使用，简化调试步骤。

### 定义

在Vue中，组件可以通过Vue.component()方法或通过单文件组件（SFC）方式定义。组件可以包含模板、样式和行为逻辑，并可以在应用程序中多次使用。

Vue 组件是 Vue.js 中的一个重要特性，它可以让我们将页面划分为多个部分，每个部分都是一个可重用的组件。Vue 组件的定义方式有两种：全局组件和局部组件。全局组件可以在任何地方使用，而局部组件只能在当前组件中使用。

下面是一个 Vue 组件的定义示例：

```javascript
Vue.component('my-component', {
  template: '<div>这是一个自定义组件</div>'
})
```

在上面的代码中，我们定义了一个名为 my-component 的全局组件，它的模板包含一个 div 标签和一些文本内容。在模板中使用时，可以像下面这样调用：

```html
<my-component></my-component>
```

### 组件通信

### 组件生命周期

### 动态组件

### 插槽

<CommentService />
