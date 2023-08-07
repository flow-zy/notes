---
title: todoMvc
---
# VUE版

## 创建一个新的 Vue 2 项目

   1. 安装 Node.js（如果尚未安装）
   2. 打开终端并创建一个新的目录
   3. 进入该目录，并运行以下命令来创建一个新的 Vue 3 项目：

```
    vue create todo-mvc
```

   4. 在创建过程中，选择默认选项，然后等待项目创建完成。

## 安装所需的依赖项

   1. 进入项目目录，然后运行以下命令来安装所需的依赖项：

```
    cd todo-mvc
    npm install vuex@next
    npm install eslint
```

## 创建 todo 组件和 store

   1. 打开 `src` 文件夹
   2. 创建一个新的 `components` 目录，并在其中创建 `TodoItem.vue` 组件文件

   在 `TodoItem.vue` 文件中，添加以下代码：

```vue
<template>
  <li :class="{ completed: todo.completed, editing: editing }">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label @dblclick="editTodo">{{ todo.title }}</label>
      <button class="destroy" @click="deleteTodo"></button>
    </div>
    <input class="edit" v-model="todo.title" @keyup.enter="doneEdit" @blur="cancelEdit" ref="editInput">
  </li>
</template>

<script>
export default {
  props: ['todo'],
  data() {
    return {
      editing: false
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('delete-todo', this.todo)
    },
    editTodo() {
      this.editing = true;
      this.$nextTick(() => {
        this.$refs.editInput.focus();
      });
    },
    doneEdit() {
      this.editing = false;
      if (this.todo.title.trim() === '') {
        this.deleteTodo();
      }
    },
    cancelEdit() {
      this.editing = false;
    }
  }
}
</script>
```

   3. 在 `components` 目录中创建 `TodoList.vue` 组件文件

   在 `TodoList.vue` 文件中，添加以下代码：

```vue
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allCompleted">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @delete-todo="deleteTodo(todo)"
      />
    </ul>
  </section>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  computed: {
    filteredTodos() {
      return this.$store.getters.filteredTodos;
    },
    allCompleted: {
      get() {
        return this.$store.getters.allCompleted;
      },
      set(value) {
        this.$store.commit('markAll', value);
      }
    }
  },
  methods: {
    deleteTodo(todo) {
      this.$store.commit('deleteTodo', todo);
    }
  }
}
</script>
```

   4. 在 `components` 目录中创建 `TodoInput.vue` 组件文件

   在 `TodoInput.vue` 文件中，添加以下代码：

```vue
<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    >
  </header>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.$store.commit('addTodo', this.newTodo.trim());
        this.newTodo = '';
      }
    }
  }
}
</script>
```

   5. 在 `src` 目录中创建一个新的目录 `store`，并在其中创建 `index.js` 文件

```javascript
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      todos: []
    }
  },
  getters: {
    filteredTodos: state => {
      // implement filtering logic here
      return state.todos;
    },
    allCompleted: state => {
      // implement logic to check if all todos are completed
      return false;
    }
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todos.push({
        id: Date.now(),
        title: todo,
        completed: false
      });
    },
    deleteTodo: (state, todo) => {
      state.todos = state.todos.filter(item => item !== todo);
    },
    markAll: (state, value) => {
      state.todos.forEach(item => {
        item.completed = value;
      });
    }
  }
});
```

## 在 App.vue 中使用组件

```vue
<template>
  <div class="app">
    <h1>Todo MVC</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoInput,
    TodoList
  }
}
</script>

<style scoped>
</style>
```

## 运行项目

   1. 在终端中，使用以下命令来运行项目：

```
   npm run serve
```

   2. 打开浏览器，访问 `http://localhost:8080`，即可查看运行中的 Todo MVC 应用。

这样，你就在 Vue 2 中创建了一个简单的 Todo MVC 应用。你可以根据需要添加其他功能和样式，以满足你的需求。

# React 版

1. 创建一个新的React项目，确保你已经安装了Node.js和npm。

```shell
npx create-react-app todo-app
cd todo-app
```

2. 清除默认的React组件和样式，并创建一个新的`Todo`组件。

```jsx
// src/App.js

import React from 'react';

function Todo() {
  return (
    <div>
      TODO MVC App
    </div>
  );
}

export default Todo;
```

3. 在`App.js`中添加Todo列表的组件。

```jsx
// src/App.js

import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo MVC App</h1>
      <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
```

4. 在`src/index.js`中使用`ReactDOM.render`将`Todo`组件渲染到DOM中。

```jsx
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);
```

5. 运行你的应用程序。

```shell
npm start
```

现在你应该可以在浏览器中看到一个简单的TodoMVC应用程序了。你可以添加和删除Todo。
