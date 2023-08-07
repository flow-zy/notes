---
title: ReactRouter
#NavLink
prev:
  text: React
  link: /frame/react
next:
  text: Redux
  link: /other/Redux
---

## 概念

React Router 是一个用于构建单页应用的声明式路由库。它允许你通过将组件与 URL 相关联来构建一个动态的 UI。React Router 提供了一些组件和 API，用于创建和管理路由，以及导航用户从一个 URL 到另一个 URL。

## 安装React Router

可以使用npm或yarn来安装React Router。在终端中运行以下命令：`npm install react-router-dom` 或 `yarn add react-router-dom`

## 路由器（Router）组件

在应用程序的最顶层，需要将`<BrowserRouter>`或`<HashRouter>`作为根组件进行包裹。`BrowserRouter`使用浏览器的HTML5 history API，而`HashRouter`使用URL的哈希值。例如：

   ```jsx
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

   function App() {
     return (
       <Router>
         {/* 路由组件 */}
       </Router>
     );
   }
   ```

## 路由（Route）组件

用于定义路径与组件之间的关联关系。例如，当访问路径`/home`时，显示`Home`组件：

   ```jsx
   <Route path="/home" component={Home} />
   ```

## Switch组件

用于将多个`<Route>`组件包裹在一起，只渲染匹配的第一个路由组件。这对于避免多个路由同时匹配的问题非常有用。例如：

   ```jsx
   <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route component={NotFound} /> {/* 所有未匹配的路径都会显示NotFound组件 */}
   </Switch>
   ```

## 嵌套路由（Nested Routes）

React Router允许使用嵌套路由，以便在组件层次结构中创建多个级别的路由。例如：

   ```jsx
   <Route path="/users" component={Users}>
     <Route path="/users/:id" component={UserProfile} />
     <Route path="/users/:id/posts" component={UserPosts} />
   </Route>
   ```

## 跳转（Navigation）

React Router提供了`<Link>`和`<NavLink>`组件用于在应用程序中进行导航。`<Link>`组件用于一般性的导航，而`<NavLink>`组件用于在当前路由与导航路径匹配时添加样式。例如：

   ```jsx
   import { Link, NavLink } from 'react-router-dom';

   function Navigation() {
     return (
       <nav>
         <ul>
           <li>
             <Link to="/home">Home</Link>
           </li>
           <li>
             <NavLink to="/about" activeClassName="active">About</NavLink>
           </li>
           <li>
             <NavLink to="/contact" activeClassName="active">Contact</NavLink>
           </li>
         </ul>
       </nav>
     );
   }
   ```

## 带参数的路由（Route Parameters）

React Router允许在路由中使用动态参数，这对于根据特定参数显示不同内容非常有用。例如：

   ```jsx
   <Route path="/users/:id" component={UserProfile} />
   ```

## 重定向路由

Redirect 组件用于在路由匹配失败时进行重定向。可以在需要进行条件判断并跳转的情况下使用 Redirect 组件。

```jsx
<Route path="/">
  <Redirect to="/home" />
</Route>

```

## 编程式导航（Programmatic Navigation）

React Router提供了一些方法，可以通过代码进行导航，而不是手动点击导航链接。例如，可以在组件中使用`history`对象进行导航:

   ```jsx
   import { useHistory } from 'react-router-dom';

   function MyComponent() {
     const history = useHistory();

     function handleClick() {
       history.push('/new-route');
     }

     return (
       <button onClick={handleClick}>Go to New Route</button>
     );
   }
   ```

## 带有历史记录的跳转

可以使用浏览器的历史记录API进行路由跳转，并保持正确的URL历史记录。

下面是如何在 react-router5 中实现带有历史记录的跳转的详细步骤：

首先，确保你已经安装了 react-router 和相关的依赖。你可以使用 npm 或 yarn 进行安装：

```bash
npm install react-router@5 history
```

创建一个 Router 组件，用于定义应用的路由和导航。在这个组件中，你可以使用 `<Route>` 组件来定义每个路由，并指定它们对应的组件。

```jsx
import React from 'react';
import { Router, Route } from 'react-router5';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const router = new Router();

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
  { name: 'contact', path: '/contact', component: Contact },
];

router.add(routes);

const App = () => {
  return (
    <Router router={router}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

```

在主组件中，使用 `<Link>` 组件来创建导航链接。该组件会自动为你添加相应的点击事件，以便在点击时触发路由跳转。

```jsx
import React from 'react';
import { Link } from 'react-router5';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link routeName="home">Home</Link>
        </li>
        <li>
          <Link routeName="about">About</Link>
        </li>
        <li>
          <Link routeName="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

```

在每个路由组件中，你可以使用 router 属性来访问路由器的功能，包括跳转和导航。

```jsx
import React from 'react';

const Home = ({ router }) => {
  const handleClick = () => {
    router.navigate('about');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
};

```

这样，当点击按钮时，路由器将会使用历史记录对应的 navigate 方法进行跳转。这将触发页面的重新渲染，并显示 About 组件。

## 路由保护

可以配置保护某些路由，需要用户进行身份验证或其他权限验证才能访问。

在react-router5中实现路由保护可以通过以下几个步骤：

定义路由配置：在React组件中定义一个路由配置对象，包含需要进行保护的路由以及它们对应的组件。

```js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/protected',
    name: 'Protected',
    component: Protected,
    protected: true // 标记该路由需要保护
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

```

创建一个高阶组件（HOC）来处理路由保护逻辑：

```jsx
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = checkAuth(); // 检查当前用户是否已认证

  // 根据用户认证状态进行路由渲染
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

```

在应用程序中使用路由配置和保护路由：

```jsx
<Router>
  <Switch>
    {routes.map((route, index) => {
      if (route.protected) {
        return <ProtectedRoute {...route} key={index} />;
      } else {
        return <Route {...route} key={index} />;
      }
    })}
  </Switch>
</Router>

```

上述代码中，我们通过ProtectedRoute高阶组件来包装需要保护的路由，并在路由渲染时根据用户认证状态决定渲染目标组件还是重定向到登录页面。

在认证逻辑中实现checkAuth函数：根据你的具体业务情况，编写一个函数来检查用户的认证状态。你可以将用户的认证信息存储在状态管理库（如Redux）中，或者通过其他方式进行判断。

## 路由参数传递

可以在路由之间传递参数，以便在不同组件之间共享数据。

1. 路由路径参数：
    在路由的路径中定义参数，然后将参数的值嵌入到 URL 中。在组件中可以通过 `useParams` 钩子或者 `withRouter` 高阶组件来获取参数的值。

    示例代码如下：

    ```jsx
    import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';

    function MyComponent() {
      const { id } = useParams();

      return (
        <div>
          <h1>路由参数: {id}</h1>
        </div>
      );
    }

    function App() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/my-component/:id" component={MyComponent} />
          </Switch>
        </BrowserRouter>
      );
    }

    // 在 URL 中访问：/my-component/123
    // 输出：路由参数: 123
    ```

2. 查询参数：
    在 URL 中使用查询字符串来传递参数。可以使用 `useLocation` 钩子或者 `withRouter` 高阶组件来获取查询参数的值。

    示例代码如下：

    ```jsx
    import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

    function MyComponent() {
      const location = useLocation();
      const params = new URLSearchParams(location.search);
      const id = params.get('id');

      return (
        <div>
          <h1>查询参数: {id}</h1>
        </div>
      );
    }

    function App() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/my-component" component={MyComponent} />
          </Switch>
        </BrowserRouter>
      );
    }

    // 在 URL 中访问：/my-component?id=123
    // 输出：查询参数: 123
    ```

## 路由事件

可以监听和触发路由事件，以便在路由更改时执行自定义逻辑。

1. `history.listen(callback)`：当路由发生变化时触发回调函数。可以在回调函数中执行一些需要在路由变化时执行的操作。例如：

    ```jsx
    import { useHistory } from 'react-router-dom';

    function MyComponent() {
      const history = useHistory();

      useEffect(() => {
        const unlisten = history.listen((location, action) => {
          console.log('路由发生变化', location.pathname, action);
          // 执行其他操作
        });

        return () => {
          unlisten();
        };
      }, [history]);

      // ...

      return (
        // ...
      );
    }
    ```

2. `history.block(prompt)`：在路由切换前触发提示框，用于询问用户是否继续导航。`prompt`参数是一个函数，它接受一个`location`对象作为参数并返回一个字符串或`true`。如果返回一个字符串，将触发一个带有提示消息的确认框。例如：

    ```jsx
    import { useHistory } from 'react-router-dom';

    function MyComponent() {
      const history = useHistory();

      useEffect(() => {
        const unblock = history.block((location) => {
          if (location.pathname === '/protected') {
            return '确定要离开此页面吗?';
          }
          return true;
        });

        return () => {
          unblock();
        };
      }, [history]);

      // ...

      return (
        // ...
      );
    }
    ```

3. `Route`组件的`onEnter`和`onExit`属性：可以在`Route`组件中使用`onEnter`和`onExit`属性，指定在进入或离开路由时触发的回调函数。注意，这仅适用于`class`组件，不适用于函数式组件。例如：

    ```jsx
    import { Route } from 'react-router-dom';

    class MyComponent extends React.Component {
      handleEnter = () => {
        console.log('进入路由');
        // 执行其他操作
      }

      handleExit = () => {
        console.log('离开路由');
        // 执行其他操作
      }

      render() {
        return (
          <Route
            path="/my-route"
            component={MyRouteComponent}
            onEnter={this.handleEnter}
            onExit={this.handleExit}
          />
        );
      }
    }
    ```
