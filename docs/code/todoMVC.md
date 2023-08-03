---
title: todoMvc
---

## 准备开始工作

1. 创建项目

```bash
vue create todo-mvc
```

2. 选择选项

<img src="/images/todo-mvc1.png"/>
这里我们选择第一个，按下回车，等待安装

3. 运行项目

```bash
cd todo-mvc 
npm run serve
```

4. 打开浏览器

<img src="/images/todo-mvc2.png"/>
出现这个界面，代表你的项目创建成功了

5. 对项目目录的改造

<img src="/images/todo-mvc3.png"/>

```md
components 存放your components

utils 存放工具函数

App.vue 根组件

main.js 入口文件

index.css 公共样式

```

## 开始

在`App.vue`中写入

```vue
<template>
  <section class="todoApp"></section>
</template>
<!--  -->
<script setup></script>
<style>
html,
body {
 margin: 0;
 padding: 0;
}

button {
 margin: 0;
 padding: 0;
 border: 0;
 background: none;
 font-size: 100%;
 vertical-align: baseline;
 font-family: inherit;
 font-weight: inherit;
 color: inherit;
 -webkit-appearance: none;
 appearance: none;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}

body {
 font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
 line-height: 1.4em;
 background: #f5f5f5;
 color: #111111;
 min-width: 230px;
 max-width: 550px;
 margin: 0 auto;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 font-weight: 300;
}

.hidden {
 display: none;
}

.todoApp {
 background: #fff;
 margin: 130px 0 40px 0;
 position: relative;
 box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
             0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoApp input::-webkit-input-placeholder {
 font-style: italic;
 font-weight: 400;
 color: rgba(0, 0, 0, 0.4);
}

.todoApp input::-moz-placeholder {
 font-style: italic;
 font-weight: 400;
 color: rgba(0, 0, 0, 0.4);
}

.todoApp input::input-placeholder {
 font-style: italic;
 font-weight: 400;
 color: rgba(0, 0, 0, 0.4);
}
.new-todo:focus,
.toggle:focus + label,
.toggle-all:focus + label {
 box-shadow: 0 0 2px 2px #CF7D7D;
 outline: 0;
}
</style>
```

### setup 语法糖

1. 不用写setup函数
2. 组件只需要引入不需要注册
3. 属性和方法也不需要再返回，可以直接在template模板中使用。

#### 新增的api

1. `defineProps`：子组件接收父组件中传来的`props`
2. `defineEmits`：子组件调用父组件中的方法
3. `defineExpose`：子组件暴露属性，可以在父组件中拿到

### 创建头部组件

在`components`文件夹下创建`TodoHeader.vue`的文件,然后再里面加入下面的代码

```vue
<template>
  <header class="header">
    <h1>todos</h1>
    <input @keyup.enter="addTodo" class="new-todo" placeholder="What needs to be done?" autofocus :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:modelValue', 'add'])
const addTodo = () => {
  emits('add')
};
</script>

<style scoped>
h1 {
 position: absolute;
 top: -140px;
 width: 100%;
 font-size: 80px;
 font-weight: 200;
 text-align: center;
 color: #b83f45;
 -webkit-text-rendering: optimizeLegibility;
 -moz-text-rendering: optimizeLegibility;
 text-rendering: optimizeLegibility;
}
.new-todo{
 position: relative;
 margin: 0;
 width: 100%;
 font-size: 24px;
 font-family: inherit;
 font-weight: inherit;
 line-height: 1.4em;
 color: inherit;
 padding: 6px;
 border: 1px solid #999;
 box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
 box-sizing: border-box;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}

.new-todo {
 padding: 16px 16px 16px 60px;
 height: 65px;
 border: none;
 background: rgba(0, 0, 0, 0.003);
 box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
```

:::tip
scoped样式是Vue中一种将样式限定在组件范围内的特殊样式。它通过添加一个唯一的属性选择器来实现，该属性选择器会应用于组件的根元素和组件内的所有子元素。这样，样式将仅影响到当前组件，而不会泄漏到其他组件或全局样式中。
:::
然后再`App.vue`中加入

```html
<TodoHeader :modelValue="title" @update:modelValue="newValue => title = newValue" @add="addTodo" />
```

```js
import TodoHeader from './components/TodoHeader.vue'
import { ref } from 'vue'
// todos数组
const todos = ref([])
const title = ref('')
// 增加todo
const addTodo = () => {
  if (title.value.trim() !== '') {
    const todo = {
      id: Date.now(),
      title: title.value,
      completed: false
    }
    // 把todo添加到todos数组中
    todos.value = [todo, ...todos.value]
    // 清空输入框
    title.value = ''
    // 返回
    return
  } else {
    alert('请输入待完成的任务')
  }
}
```

## 创建列表组件

在`components`文件夹下创建`TodoMain.vue`
在`App.vue`中加入

```html
  <TodoMain v-show="todos.length" />
```

```js
import TodoMain from './components/TodoMain'
import {provide} from 'vue'
provide('todos',todos.value)
```
