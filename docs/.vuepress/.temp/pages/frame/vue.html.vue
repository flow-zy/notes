<template><div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>(发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，都可以胜任。</p>
<h2 id="渐进式框架" tabindex="-1"><a class="header-anchor" href="#渐进式框架" aria-hidden="true">#</a> 渐进式框架</h2>
<p>是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：</p>
<ul>
<li>无需构建步骤，渐进式增强静态的 HTML</li>
<li>在任何页面中作为 Web Components 嵌入</li>
<li>单页应用 (SPA)</li>
<li>全栈 / 服务端渲染 (SSR)</li>
<li>Jamstack / 静态站点生成 (SSG)</li>
<li>开发桌面端、移动端、WebGL，甚至是命令行终端中的界面</li>
</ul>
<h2 id="mvvm模型" tabindex="-1"><a class="header-anchor" href="#mvvm模型" aria-hidden="true">#</a> MVVM模型</h2>
<p>MVVM 是一种软件架构模式，它将软件界面显示分离为两个部分：视图层和模型层。视图层负责界面的显示，模型层负责页面的逻辑操作。
MVVM 模式和 MVC 模式一样，也是模型 - 视图 - 控制器（Model-View-Controller）的简写。
MVVM 模式和 MVC 模式的不同之处在于它实现了视图（View）和模型（Model）的数据绑定。</p>
<h2 id="spa单页面应用" tabindex="-1"><a class="header-anchor" href="#spa单页面应用" aria-hidden="true">#</a> SPA单页面应用</h2>
<p>单页面应用（SPA）是指在Web应用程序中，整个应用的UI只有一个HTML页面，通过使用JavaScript和动态更新页面的方式，实现不同视图之间的切换，而无需进行页面的完整重载。</p>
<p>在传统的多页面应用中，每次导航到不同的页面时，服务器都会传输新的HTML页面。而在SPA中，初始的HTML页面中会加载所需的JavaScript和CSS资源，然后通过JavaScript动态地更新页面内容。</p>
<p>Vue作为一种现代的JavaScript框架，非常适合构建SPA。它提供了路由功能（Vue Router）和  组件化开发（Vue Components）等核心特性，使得开发者可以轻松地构建和管理SPA应用。</p>
<p>在Vue的SPA中，通过Vue Router进行路由管理，将不同的视图映射到不同的URL，并在URL的变化时，加载对应的组件来更新页面的内容。这种动态的更新方式，使得用户在使用应用时可以获得更流畅的页面切换体验。</p>
<p>SPA的优势包括：</p>
<ul>
<li>更快速的页面导航和响应速度，因为无需每次都从服务器加载新的HTML页面。</li>
<li>更好的用户体验，通过无需页面刷新即可实现页面切换，用户感知的页面加载时间更短。</li>
<li>更好的组件化和模块化，将应用程序拆分为多个组件，便于维护和重用。</li>
<li>可以使用前端框架提供的功能来处理路由、状态管理和数据响应等问题，提高开发效率。</li>
</ul>
<p>需要注意的是，SPA也有一些限制和挑战，如对搜索引擎优化 (SEO) 的支持不如传统多页面应用，以及前端资源的加载过程需要特别注意，以防止过大的初始页面加载和性能问题。</p>
<p>总结而言，SPA是一种通过动态更新页面的方式切换视图的Web应用程序架构，Vue提供了丰富的功能和工具来构建SPA。</p>
<h2 id="第一个vue应用" tabindex="-1"><a class="header-anchor" href="#第一个vue应用" aria-hidden="true">#</a> 第一个Vue应用</h2>
<h3 id="引入vue-js" tabindex="-1"><a class="header-anchor" href="#引入vue-js" aria-hidden="true">#</a> 引入Vue.js</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="声明式渲染" tabindex="-1"><a class="header-anchor" href="#声明式渲染" aria-hidden="true">#</a> 声明式渲染</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{ message }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建vue实例" tabindex="-1"><a class="header-anchor" href="#创建vue实例" aria-hidden="true">#</a> 创建Vue实例</h3>
<p>实例是 应用的入口。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello Vue!'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样你的第一个vue应用就创建好了，你可以看到页面上的hello world，接下来该正式踏入Vue之旅了 🎉</p>
<h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h2>
<p>Vue.js 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 模板都是语法层面合法的 HTML,可以被符合规范的浏览器和 HTML 解析器解析。在底层机制中，会将模板编译成高度优化的 JavaScript 代码，然后在运行时将其转换为虚拟 DOM 并进行渲染。</p>
<h3 id="插值" tabindex="-1"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值</h3>
<p>数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值
每次更新message的值，插值处的内容都会更新</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{ message }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h3>
<p>指令 (Directives) 是带有 v- 前缀的特殊属性。</p>
<ol>
<li><code v-pre>v-bind</code>: 指令用于响应式地更新 HTML 属性</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>鼠标悬停几秒钟查看此处动态绑定的提示信息！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  可以简写成 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>鼠标悬停几秒钟查看此处动态绑定的提示信息！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app-2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'页面加载于 '</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>v-on</code>:指令用于监听 DOM 事件</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reverseMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>逆转消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  可以简写成 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reverseMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>逆转消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">var</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app-2'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello Vue.js!'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">reverseMessage</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>事件修饰符</p>
<ul>
<li>.stop</li>
<li>.prevent</li>
<li>.capture</li>
<li>.self</li>
<li>.once</li>
<li>.passive</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token comment">&lt;!-- 阻止单击事件继续传播 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

      <span class="token comment">&lt;!-- 提交事件不再重载页面 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSubmit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

      <span class="token comment">&lt;!-- 修饰符可以串联 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.stop.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThat<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

      <span class="token comment">&lt;!-- 只有修饰符 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

      <span class="token comment">&lt;!-- 添加事件监听器时使用事件捕获模式 --></span>
      <span class="token comment">&lt;!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.capture</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

      <span class="token comment">&lt;!-- 只当在 event.target 是当前元素自身时触发处理函数 --></span>
      <span class="token comment">&lt;!-- 即事件不是从内部元素触发的 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.self</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThat<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

      <span class="token comment">&lt;!-- 点击事件将只会触发一次 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

      <span class="token comment">&lt;!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 --></span>
      <span class="token comment">&lt;!-- 而不会等待 `onScroll` 完成 ,能够提升移动端的性能 --></span>
      <span class="token comment">&lt;!-- 这其中包含 `event.preventDefault()` 的情况 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-on:</span>scroll.passive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onScroll<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<ol start="3">
<li><code v-pre>v-model</code>: 指令在表单控件元素上创建双向数据绑定</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">var</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app-2'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello Vue!'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li><code v-pre>v-if</code> :指令用于条件性地渲染一块内容</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>seen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>现在你看到我了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>你又看到我了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">var</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app-2'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">seen</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li><code v-pre>v-show</code>: 指令根据表达式的真假值，切换元素的 display 属性</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ok<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">var</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app-2'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>v-if</code> 和 <code v-pre>v-show</code> 的区别</p>
</blockquote>
<ul>
<li><code v-pre>v-if</code> 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。</li>
<li><code v-pre>v-if</code> 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。</li>
<li><code v-pre>v-show</code> 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。</li>
<li><code v-pre>v-if</code> 有更高的切换开销，而 <code v-pre>v-show</code> 有更高的初始渲染开销。
所以，如果需要非常频繁地切换，则使用 <code v-pre>v-show</code> 较好；如果在运行时条件很少改变，则使用 <code v-pre>v-if</code> 较好。</li>
</ul>
<ol start="6">
<li>
<p><code v-pre>v-for</code>: 指令基于一个数组(对象)来渲染一个列表</p>
<ul>
<li>数组</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo in todos<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo.text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      {{ todo.text }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">var</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app-2'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'学习 JavaScript'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'学习 Vue'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'整个牛项目'</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>对象</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value in object<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
    {{ value }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">var</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app-2'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">object</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'How to do lists in Vue'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'Jane Doe'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">publishedAt</span><span class="token operator">:</span> <span class="token string">'2016-04-10'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<blockquote>
<p><code v-pre>v-for</code> 中的key起什么作用，为什么要加，起什么作用</p>
</blockquote>
<p>在<code v-pre>v-for</code>指令中，<code v-pre>key</code>属性用于追踪和标识每个被渲染的元素，以便在DOM更新期间进行高效的元素重用和更新。</p>
<p><code v-pre>key</code>的作用有以下几点：</p>
<ol>
<li>
<p>唯一标识：<code v-pre>key</code>用于为每个生成的元素提供唯一的标识。Vue使用这个<code v-pre>key</code>来跟踪每个元素的身份，确保在重新渲染时能够正确地复用和更新元素，而不是重新创建或删除它们。</p>
</li>
<li>
<p>提高渲染效率：在使用<code v-pre>v-for</code>渲染列表时，Vue使用<code v-pre>key</code>来检测哪些元素被添加、修改或删除。通过提供<code v-pre>key</code>，Vue可以准确地确定元素之间的差异，只对需要进行修改的元素进行重新渲染，而不是重新渲染整个列表，从而提高性能。</p>
</li>
<li>
<p>解决状态保存问题：如果列表中的元素具有可变状态或用户的输入绑定，没有为每个元素提供<code v-pre>key</code>会导致在更新列表时出现意外的行为。例如，输入框的输入内容可能会被重新排序的元素&quot;拖拽过来&quot;导致错误地映射到不同的元素上，从而产生错误的状态。</p>
</li>
</ol>
<p>总结而言，为<code v-pre>v-for</code>中的元素提供<code v-pre>key</code>属性是一种最佳实践，它能够帮助Vue跟踪元素的身份，提高列表渲染的效率，并解决状态保存的问题。每个<code v-pre>key</code>应该是唯一且稳定的，通常使用数据的唯一标识符作为<code v-pre>key</code>值。</p>
<ol start="7">
<li><code v-pre>v-html</code>: 指令用于输出 HTML 代码</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using mustaches: {{ rawHtml }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using v-html directive: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rawHtml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">var</span> app3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app-3'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rawHtml</span><span class="token operator">:</span> <span class="token string">'&lt;span style="color: red">This should be red.&lt;/span>'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li><code v-pre>v-pre</code>: 指令跳过元素和它的子元素的编译过程。</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-pre</span><span class="token punctuation">></span></span>{{ this will not be compiled }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9">
<li><code v-pre>v-cloak</code>: 指令保持在元素上直到关联实例结束编译</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-4<span class="token punctuation">"</span></span> <span class="token attr-name">v-cloak</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">var</span> app4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app-4'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello Vue.js!'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10">
<li><code v-pre>v-once</code>: 指令只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-once</span><span class="token punctuation">></span></span>This will never change: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="11">
<li><code v-pre>v-text</code>: 指令更新元素的 textContent。如果要更新部分的 textContent，需要使用 Mustache 插值。</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 输出: "Hello Vue.js!" --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg + '!'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 输出: "Hello Vue.js! " --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li><code v-pre>v-slot</code>: 作用域插槽</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Here might be a page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A paragraph for the main content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>And another one.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Here's some contact info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-layout</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13">
<li>自定义指令</li>
</ol>
<p>Vue自定义指令是用来操作 DOM 的。除了核心功能默认内置的指令(比如 v-model 或 v-show)之外，还允许你注册自定义的指令。有的情况下，对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。</p>
<ul>
<li>注册全局指令和局部注册指令的方式不同，全局指令可以在任何地方使用，而局部注册指令只能在被注册的组件内部使用。</li>
<li>注册自定义指令需要在 实例化之前进行，可以通过 app.config.globalProperties 或者 this.$options.globalProperties 来实现全局注册。</li>
<li>自定义指令必须包含一个 unbind 钩子函数，用于解绑事件监听器。</li>
<li>自定义指令必须包含一个 bind 钩子函数，用于绑定事件监听器。</li>
<li>bind 钩子函数接收三个参数：el、binding 和 vnode。其中 el 是当前元素，binding 是当前元素上的绑定对象，vnode 是当前节点的信息。</li>
<li>unbind 钩子函数也接收三个参数：el、binding 和 vnode。其中 el 是当前元素，binding 是当前元素上的绑定对象，vnode 是当前节点的信息。</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Vue自定义指令示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-focus</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'focus'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'focus'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'input focused'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 防止浏览器默认行为聚焦到其他元素上</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">unbind</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'focus'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'focus'</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 将全局指令注册为局部指令，使其只在当前组件中生效</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们注册了一个名为 <code v-pre>v-focus</code> 的全局指令。当一个 input 元素被 插入到 DOM 中后，它会被自动聚焦。这个指令在组件内部使用时，需要在 <code v-pre>setup</code> 标签内使用 <code v-pre>onMounted</code> 钩子函数来实现。同时，我们还使用了 <code v-pre>Vue.directive()</code> 方法来注册全局指令和局部指令。</p>
<h2 id="计算属性与侦听器" tabindex="-1"><a class="header-anchor" href="#计算属性与侦听器" aria-hidden="true">#</a> 计算属性与侦听器</h2>
<h3 id="计算属性-computed" tabindex="-1"><a class="header-anchor" href="#计算属性-computed" aria-hidden="true">#</a> 计算属性（computed）</h3>
<h4 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h4>
<ol>
<li>计算属性是基于它们的依赖进行缓存的。</li>
<li>计算属性是可缓存的，只有当它的依赖项发生改变时，才会重新计算。</li>
<li>计算属性默认只有 getter，不过在需要时也可以提供一个 setter。</li>
</ol>
<h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Original message: "{{ message }}"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Computed reversed message: "{{ reversedMessage }}"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#example'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 计算属性的 getter</span>
    <span class="token function-variable function">reversedMessage</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// `this` 指向 vm 实例</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器" aria-hidden="true">#</a> 侦听器</h3>
<h4 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h4>
<ol>
<li>侦听器可以用来监听数据的变化，并执行相应的操作。</li>
<li>侦听属性是可异步的，且当需要在数据变化时执行异步或开销较大的操作时，该方法是最有用的。</li>
</ol>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>watch-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Message: "{{ message }}"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reverseMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Reverse Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#watch-example'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//  whenever `message` changes, `handler` will be called</span>
    <span class="token function-variable function">message</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The message was changed!'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Old message: '</span> <span class="token operator">+</span> oldValue<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'New message: '</span> <span class="token operator">+</span> newValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算属性-侦听器-方法三者之间的区别" tabindex="-1"><a class="header-anchor" href="#计算属性-侦听器-方法三者之间的区别" aria-hidden="true">#</a> 计算属性，侦听器，方法三者之间的区别</h3>
<ol>
<li>计算属性是基于它们的依赖进行缓存的，只有在它的依赖发生改变时才会重新求值。</li>
<li>侦听器，方法，计算属性都是用来监听数据的改变，并执行相应的操作。</li>
<li>计算属性适用于计算值，侦听器适用于异步操作。</li>
</ol>
<h2 id="class与style的绑定" tabindex="-1"><a class="header-anchor" href="#class与style的绑定" aria-hidden="true">#</a> Class与Style的绑定</h2>
<h3 id="class绑定" tabindex="-1"><a class="header-anchor" href="#class绑定" aria-hidden="true">#</a> Class绑定</h3>
<h4 id="介绍-3" tabindex="-1"><a class="header-anchor" href="#介绍-3" aria-hidden="true">#</a> 介绍</h4>
<ol>
<li>绑定class样式，可以利用v-bind:class来实现。</li>
<li>绑定的数据对象，可以是一个对象，也可以是数组。</li>
</ol>
<h4 id="写法" tabindex="-1"><a class="header-anchor" href="#写法" aria-hidden="true">#</a> 写法</h4>
<ul>
<li>
<p>对象语法</p>
<ul>
<li>
<p>第一种写法</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>class-object<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>static<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ active: isActive, 'text-danger': hasError }<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#class-object'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用了一个对象字面量 <code v-pre>{ active: isActive, 'text-danger': hasError }</code> 作为 <code v-pre>v-bind:class</code> 的值。这个对象包含了两个属性：<code v-pre>active</code> 和 <code v-pre>'text-danger'</code>,它们的值分别来自 实例的 <code v-pre>isActive</code> 和 <code v-pre>hasError</code> 数据属性。</p>
<p>当 <code v-pre>isActive</code> 为真时，<code v-pre>active</code> 类将被添加到元素上；当 <code v-pre>hasError</code> 为真时，<code v-pre>text-danger</code> 类也将被添加到元素上。如果两个条件都不满足，则不会添加任何类。</p>
<p>这种方式可以方便地动态地切换元素的类，而不需要手动为每个可能的状态编写多个样式规则。
结果渲染为</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>static active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>第二种写法</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>classObject<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">classObject</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">'text-danger'</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>在这个例子中，我们将一个对象字面量 <code v-pre>{ active: true, 'text-danger': false }</code> 作为 <code v-pre>v-bind:class</code> 的值。这个对象包含了两个属性：<code v-pre>active</code> 和 <code v-pre>'text-danger'</code>,它们的值分别表示是否应该添加对应的类名。</p>
</li>
<li>
<p>当 <code v-pre>active</code> 为真时，<code v-pre>active</code> 类名将被添加到元素上；当 <code v-pre>'text-danger'</code> 为真时，<code v-pre>text-danger</code> 类名也将被添加到元素上。如果两个条件都不满足，则不会添加任何类名。</p>
<p>结果渲染：和上面的结果一样</p>
</li>
</ul>
</li>
<li>
<p>数组语法</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>class-object<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[activeClass, errorClass]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#class-object'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">activeClass</span><span class="token operator">:</span> <span class="token string">'active'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">errorClass</span><span class="token operator">:</span> <span class="token string">'text-danger'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>在这个例子中，我们使用了数组语法 <code v-pre>[activeClass, errorClass]</code> 作为 <code v-pre>v-bind:class</code> 的值。这个数组包含了两个元素：<code v-pre>activeClass</code> 和 <code v-pre>errorClass</code>,它们的值分别表示要添加到元素上的类名。</p>
</li>
<li>
<p>当 实例的 <code v-pre>activeClass</code> 为真时，<code v-pre>active</code> 类名将被添加到元素上；当 <code v-pre>errorClass</code> 为真时，<code v-pre>text-danger</code> 类名也将被添加到元素上。如果两个条件都不满足，则不会添加任何类名。</p>
<p>结果渲染为</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active text-danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据条件列表切换class</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[isActive ? activeClass : '', errorClass]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[{ active: isActive }, errorClass]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>这两个例子都是使用数组语法 <code v-pre>[classObject, errorClass]</code> 或对象语法 <code v-pre>{ active: isActive }</code> 作为 <code v-pre>v-bind:class</code> 的值。</p>
</li>
<li>
<p>在第一个例子中，我们使用了三元运算符来动态地决定是否添加 <code v-pre>activeClass</code> 类名。如果 <code v-pre>isActive</code> 为真，则添加 <code v-pre>activeClass</code> 类名；否则不添加任何类名。</p>
</li>
<li>
<p>在第二个例子中，我们使用了对象语法来动态地决定是否添加 <code v-pre>active</code> 类名。如果 <code v-pre>isActive</code> 为真，则添加 <code v-pre>active</code> 类名；否则不添加任何类名。</p>
</li>
<li>
<p>这种方式也可以写成 <code v-pre>{ active: true }</code>,其中 <code v-pre>true</code> 可以替换为任意真实值。</p>
</li>
<li>
<p>和上面的渲染结果一样</p>
</li>
</ul>
</li>
</ul>
<h3 id="style绑定" tabindex="-1"><a class="header-anchor" href="#style绑定" aria-hidden="true">#</a> Style绑定</h3>
<h4 id="介绍-4" tabindex="-1"><a class="header-anchor" href="#介绍-4" aria-hidden="true">#</a> 介绍</h4>
<ol>
<li>
<p>绑定style，可以利用v-bind:style实现。</p>
</li>
<li>
<p>绑定的数据对象，可以是一个对象，也可以是数组。</p>
</li>
</ol>
<h4 id="写法-1" tabindex="-1"><a class="header-anchor" href="#写法-1" aria-hidden="true">#</a> 写法</h4>
<ul>
<li>
<p>对象写法</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ color: activeColor, fontSize: fontSize + 'px' }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个例子中，我们将 <code v-pre>color</code> 和 <code v-pre>fontSize</code> 作为属性名传递给 v-bind:style,并将它们与动态计算的值绑定在一起。这样，当 activeColor 或 fontSize 发生变化时，元素的样式也会相应地更新。</p>
</li>
<li>
<p>数组写法</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[baseStyles, overridingStyles]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>在这个例子中，我们使用了数组语法 <code v-pre>[baseStyles, overridingStyles]</code> 作为 <code v-pre>v-bind:style</code> 的值。这个数组包含了两个元素：<code v-pre>baseStyles</code> 和 <code v-pre>overridingStyles</code>,它们的值分别表示基础样式和覆盖样式。</p>
</li>
<li>
<p>当 实例的数据发生变化时，会自动将这些样式应用到对应的元素上。如果两个样式对象中有相同的属性，则后面的样式对象会覆盖前面的样式对象中的属性值。</p>
</li>
</ul>
</li>
</ul>
<h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h2>
<p>Vue过滤器是 中的一个特性，作用是用于对文本进行格式化的作用。过滤器分为全局过滤器和私有过滤器(本地过滤器)两种。全局过滤器可以在任何地方使用，而私有过滤器只能在当前组件中使用。</p>
<p>下面是 过滤器的使用方法及注意事项：</p>
<ul>
<li>注册过滤器：Vue.filter(name, callback) 或 new Vue({ filters: {} })</li>
<li>使用过滤器：{{ xxx | filterName }} 或 v-bind:属性=&quot;xxx | filterName&quot;</li>
<li>注意：过滤器不会修改数据，只是改变用户看到的输出(效果)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">'capitalize'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">''</span><span class="token punctuation">;</span>
    value <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们定义了一个名为 capitalize 的过滤器，它的作用是将输入的字符串首字母大写。在模板中使用时，可以像下面这样调用：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ message | capitalize }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<p>生命周期是指 实例对象从创建之初到销毁的过程，所有功能的实现都是围绕其生命周期进行的。在生命周期的不同阶段调用对应的钩子函数可以实现组件数据管理和 DOM 渲染两大重要功能。</p>
<p>以下是 生命周期的详细解析：</p>
<ul>
<li>beforeCreate:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。</li>
<li>created:实例已创建，数据观测 (data observer) 和 event/watcher 事件配置已经完成，但还未挂载 DOM 之前被调用。</li>
<li>beforeMount:在挂载开始之前被调用：相关的 render 函数首次被调用。</li>
<li>mounted:实例已经挂载到 DOM,可以访问到 el 节点上，但是还没有开始渲染模板时被调用。</li>
<li>beforeUpdate:数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。</li>
<li>updated:由于数据更改导致的重新渲染和打补丁已经完成，DOM 更新后调用。</li>
<li>beforeDestroy:实例销毁之前调用。在这一步，实例仍然完全可用。</li>
<li>destroyed:实例销毁后调用。调用后，实例指示的所有东西都会解绑定，所有的事件监听器都会被移除，所有的子实例也会被解挂载 。</li>
</ul>
<p>图示</p>
<figure><img src="https://v2.cn.vuejs.org/images/lifecycle.png" alt="Alt" width="800" tabindex="0" loading="lazy"><figcaption>生命周期</figcaption></figure>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Vue生命周期示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      {{ message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello Vue!'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeCreate'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'created'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeMount'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mounted'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeUpdate'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'updated'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeDestroy'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'destroyed'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们创建了一个 实例，并在每个生命周期钩子函数中添加了一些日志输出。这些生命周期钩子函数包括 <code v-pre>beforeCreate</code>、<code v-pre>created</code>、<code v-pre>beforeMount</code>、<code v-pre>mounted</code>、<code v-pre>beforeUpdate</code>、<code v-pre>updated</code>、<code v-pre>beforeDestroy</code> 和 <code v-pre>destroyed</code>,它们分别在不同的阶段被调用。</p>
<h2 id="脚手架" tabindex="-1"><a class="header-anchor" href="#脚手架" aria-hidden="true">#</a> 脚手架</h2>
<p>脚手架（CLI）是 Vue.js 官方提供的脚手架工具，用于快速创建和管理 Vue.js 项目。使用 vue 脚手架可以简化项目创建、配置和维护的过程，提高开发效率。以下是使用 vue 脚手架创建和管理 Vue.js 项目的步骤：</p>
<ol>
<li>安装 Node.js：首先确保你安装了 Node.js。你可以从 <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a> 下载并安装 Node.js。</li>
<li>安装 vue 脚手架：打开命令行工具，全局安装 vue 脚手架。输入以下命令：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待安装结束，脚手架就安装好了
项目运行步骤：</p>
<ol>
<li>创建一个新项目：在命令行工具中，导航到要创建项目的目录，然后输入以下命令创建一个新项目：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vue create my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 my-project 替换为你的项目名称。这将创建一个新的项目文件夹，并自动安装所需的依赖项。</p>
<ol start="2">
<li>进入项目目录：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>运行项目：在项目目录中，输入以下命令启动开发服务器：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将启动一个热重载的开发服务器。你可以在浏览器中访问 <code v-pre>http://localhost:8080/</code> 查看你的 Vue.js 应用程序。</p>
<h2 id="组件化" tabindex="-1"><a class="header-anchor" href="#组件化" aria-hidden="true">#</a> 组件化</h2>
<p>图示</p>
<figure><img src="https://v2.cn.vuejs.org/images/components.png" alt="Alt" width="800" tabindex="0" loading="lazy"><figcaption>组件组织</figcaption></figure>
<ol>
<li>组件化是一种将页面拆分成多个组件的架构模式，每个组件依赖的 CSS、JS、模板、图片等资源放在一起开发和维护，可以提高开发效率，方便重复使用，简化调试步骤。</li>
<li>组件是可复用的 实例，所以它们与 new 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。</li>
</ol>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3>
<p>在Vue中，组件可以通过Vue.component()方法或通过单文件组件（SFC）方式定义。组件可以包含模板、样式和行为逻辑，并可以在应用程序中多次使用。</p>
<p>组件是 Vue.js 中的一个重要特性，它可以让我们将页面划分为多个部分，每个部分都是一个可重用的组件。组件的定义方式有两种：全局组件和局部组件。全局组件可以在任何地方使用，而局部组件只能在当前组件中使用。</p>
<blockquote>
<p>在组件中data为什么必须是个函数
这是因为组件是可以复用的，如果每个组件都使用同一个 data 对象，那么当一个组件改变了 data 的值，其它组件的 data 也会被改变，
这显然是不合理的。因此，要求 data 必须是一个函数，这样每次渲染组件时都会调用这个函数来创建一个新的 data 对象，
从而保证了组件的独立性和可复用性</p>
</blockquote>
<h3 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h3>
<p>在Vue中，可以使用全局注册和局部注册两种方式来注册组件。</p>
<ol>
<li>
<p>全局注册组件：
使用Vue的全局方法Vue.component()来注册组件。</p>
<p>示例代码：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> &lt;div id="app">
   &lt;button-counter>&lt;/button-counter>
 &lt;/div>
 &lt;script>

 // 定义一个名为 button-counter 的新组件
   Vue.component('button-counter', {
     data: function () {
       return {
         count: 0
       }
     },
     template: `&lt;button v-on:click="count++">You clicked me {{ count }} times.&lt;/button>`
   })
   new Vue({
     el:'#app'
   })
 &lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，使用Vue.component('button-counter', ButtonCounter)将MyComponent注册为全局组件。这样，在整个应用中就可以直接使用<code v-pre>&lt;button-counter&gt;</code>标签来引用和使用MyComponent组件了。</p>
</li>
<li>
<p>局部注册组件：
在Vue组件中，可以通过components选项来局部注册组件。</p>
<p>示例代码：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<button-counter></button-counter><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
 在上面的例子中，在components选项中将button-counter组件注册为局部组件。这样，只有当前组件及其子组件才能使用`&lt;button-counter>`标签来引用和使用ButtonCounter组件。

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 中，通常使用单文件组件（SFC）来编写组件。SFC 的文件名应与组件名保持一致。例如，UserProfileComponent.vue。</p>
<h3 id="单文件组件" tabindex="-1"><a class="header-anchor" href="#单文件组件" aria-hidden="true">#</a> 单文件组件</h3>
<p>Vue.js 提供了单文件组件（SFC）的概念，这是一种简洁的组件编写方式，可以提高代码的可读性和可维护性。单文件组件由一个 .文件组成，该文件包含组件的模板、样式和逻辑。以下是一个简单的 单文件组件示例：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- UserProfileComponent.--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>User Profile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Name: {{ user.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Age: {{ user.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John Doe'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 样式 */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们创建了一个名为 UserProfileComponent 的单文件组件。组件包含一个模板、一个脚本和一些样式。在脚本中，我们定义了一个名为 user 的数据属性，其中包含用户的姓名和年龄。</p>
<p>要使用这个单文件组件，你需要在其他 组件中导入它。例如，在另一个单文件组件中，你可以这样导入并使用 UserProfileComponent：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- another-component.--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Another Component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-profile-component</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>user-profile-component</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> UserProfileComponent <span class="token keyword">from</span> <span class="token string">'./UserProfileComponent.vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  UserProfileComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，你就可以在 应用程序中使用和复用这个单文件组件了。</p>
<h3 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h3>
<p>在Vue中，组件之间的通信可以通过父子组件的Props和事件以及兄弟组件或者任意组件之间通过Vue实例的事件总线和Vuex状态管理来实现。</p>
<ol>
<li>Props和事件：父组件可以通过Props将数据传递给子组件，子组件可以通过事件将数据传递给父组件。在父组件中定义Props，在子组件中通过this.$emit()触发事件来传递数据。</li>
</ol>
<p>父组件：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name">:message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token attr-name">@childEvent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChildEvent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">'./ChildComponent.vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ChildComponent
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello from parent'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleChildEvent</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 接收子组件传递的数据</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendDataToParent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Send data to parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'message'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">sendDataToParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'childEvent'</span><span class="token punctuation">,</span> <span class="token string">'Data from child'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 触发事件传递数据给父组件</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Vue实例的事件总线：可以利用Vue实例作为事件中心来传递数据。在main.js中创建一个Vue实例，并通过$on()监听事件，通过$emit()触发事件来传递数据。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> EventBus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个Vue实例作为事件总线</span>

<span class="token comment">// 发送数据</span>
EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'customEvent'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 接收数据</span>
EventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'customEvent'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Vuex状态管理：Vuex是Vue官方提供的用于管理应用状态的库。可以在其中定义和修改共享状态，不需要通过组件之间的传递来实现通信。</li>
</ol>
<p>首先，在main.js中注册Vuex：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello from Vuex'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>message <span class="token operator">=</span> payload<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateMessage</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'setMessage'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在组件中可以使用mapState、mapMutations和mapActions来获取或者修改状态。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Send Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'message'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'updateMessage'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateMessage</span><span class="token punctuation">(</span><span class="token string">'New message from component'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 修改状态</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>parent/children/refs： Vue实例提供了一些特殊属性(refs：Vue实例提供了一些特殊属性(parent/children/children/refs)，可以访问父组件、子组件或具有ref属性的组件实例，通过这些属性可以在组件之间进行通信。</li>
</ol>
<p>举个例子，假设我们有一个父组件Parent和一个子组件Child，在Parent组件中有一个按钮，点击按钮后需要修改Child组件中的某个数据。</p>
<p>首先，在Parent组件中定义一个数据（例如name），然后通过props将这个数据传递给Child组件：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Change Data<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Child
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Alice'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Child组件中，利用props接收父组件传递的数据，并将其渲染到子组件的模板中：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，当点击Parent组件中的按钮时，会触发changeData方法，将name的值修改为'Alice'。由于props是单向数据流，Child组件会自动更新，并将修改后的数据渲染到模板中。</p>
<p>除了使用props传递数据外，还可以通过$emit在子组件中触发自定义事件，并在父组件中监听这些事件来实现通信。另外，$refs可以用来访问子组件的实例和方法，从而实现父子组件之间的方法调用。这些方式可以根据具体需求选择使用。</p>
<h3 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件" aria-hidden="true">#</a> 动态组件</h3>
<p>动态组件是 Vue.js 提供的一种高级功能，可以根据数据的变化动态地渲染不同的组件。</p>
<p>使用动态组件的主要步骤如下：</p>
<ol>
<li>
<p>首先，在模板中定义一个占位符，用来渲染不同的组件。可以使用 <code v-pre>&lt;component&gt;</code> 标签，并通过 <code v-pre>is</code> 属性绑定一个数据，这个数据将决定要渲染哪个组件。示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentComponent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在 实例中，定义一个用于决定要渲染哪个组件的数据属性。可以根据需求来修改这个数据属性的值以切换组件。示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">currentComponent</span><span class="token operator">:</span> <span class="token string">'ComponentA'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建需要动态渲染的组件。可以在 组件中定义多个组件，并根据需要来切换。示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is Component A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is Component B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>最后，在需要切换组件的时候，可以通过修改数据属性的值来实现动态渲染。例如，当点击按钮触发事件时，修改数据属性的值，从而切换渲染的组件。示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeComponent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Switch Component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">changeComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentComponent <span class="token operator">=</span> <span class="token string">'ComponentB'</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>通过这些步骤，你可以实现在 Vue.js 中动态渲染不同的组件。请注意，在实际应用中，你可以根据具体需求做更多的扩展和优化，例如使用 <code v-pre>v-if</code> 或者 <code v-pre>v-show</code> 来控制组件的显示与隐藏。</p>
<h3 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件" aria-hidden="true">#</a> 异步组件</h3>
<p>异步组件是通过使用 import() 函数实现的。这是一个异步模块加载函数，它可以返回一个 Promise，当组件需要加载时，这个 Promise 就会解析。异步组件的加载不会阻塞父组件的渲染，这样可以提高性能。</p>
<p>下面是一个简单的异步组件示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// AsyncComponent.vue</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">loaded</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token keyword">async</span> <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token keyword">async</span> <span class="token function">loadAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> AsyncComponent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span>
       <span class="token comment">/* webpackChunkName: "AsyncComponent" */</span> <span class="token string">"./AsyncComponent.js"</span>
     <span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>components<span class="token punctuation">.</span>AsyncComponent <span class="token operator">=</span> AsyncComponent<span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>loaded <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们首先导出一个名为 AsyncComponent 的组件。然后，在 created 生命周期钩子中，我们使用 <code v-pre>import()</code> 函数加载 AsyncComponent.js 文件。当组件加载完成时，我们将组件添加到 components 选项中，并设置 loaded 数据属性为 true。这样，我们就可以在模板中使用这个异步组件了。</p>
<p>需要注意的是，在 Vue 2 中，异步组件的命名必须是唯一的。因此，我们使用了 webpackChunkName: &quot;AsyncComponent&quot; 注释来为异步组件分配一个唯一的名称。</p>
<h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3>
<p>插槽（Slot）是Vue.js中一种非常有用的功能，它允许我们在组件中定义一些带有特殊用途的占位符。通过使用插槽，我们可以将组件的内容进行动态的分发和替换。</p>
<p>在Vue组件中使用插槽可以实现以下目的：</p>
<ol>
<li>插入默认内容：通过在组件内部定义插槽，可以在没有提供具体内容时显示默认的内容。</li>
<li>分发内容：父组件可以通过插槽将内容分发到子组件的特定位置。这使得组件更加灵活，可以根据需要插入不同的内容。</li>
<li>具名插槽：可以使用具名插槽在组件中定义多个插槽，并在父组件中根据名称选择插入的内容。</li>
<li>作用域插槽：作用域插槽允许父组件在插槽中使用子组件的数据。这使得子组件能够向父组件传递数据。</li>
</ol>
<p>下面是一个简单的例子，演示了如何在Vue组件中使用插槽：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// 子组件 ChildComponent.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>子组件标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span>这是默认的插槽内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

// 父组件 ParentComponent.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>父组件标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>插入到子组件插槽中的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们定义了一个子组件ChildComponent，它包含了一个默认的插槽<code v-pre>&lt;slot&gt;</code>。父组件ParentComponent中使用了子组件，并为子组件提供了额外的内容作为插槽的内容。在这个例子中，父组件的<code v-pre>&lt;p&gt;</code>标签中的内容将会被插入到子组件的插槽中。</p>
<p>除了默认插槽外，Vue还支持具名插槽和作用域插槽。具名插槽可以通过<code v-pre>&lt;template&gt;</code>标签的<code v-pre>v-slot</code>指令来使用，而作用域插槽可以通过在<code v-pre>&lt;slot&gt;</code>标签中使用<code v-pre>v-bind</code>指令传递数据给父组件。</p>
<h2 id="混入" tabindex="-1"><a class="header-anchor" href="#混入" aria-hidden="true">#</a> 混入</h2>
<p>混入（Mixins）是一种重用组件选项的机制。它允许开发者将一些公共的选项（如组件的生命周期钩子、数据、方法等）提取出来，定义为混入对象，然后将这些混入对象应用到多个组件中，从而实现代码的复用和共享。</p>
<p>混入可以被全局注册，也可以在组件内部进行局部注册。</p>
<p>以下是混入的一些使用方式和特点：</p>
<ol>
<li>
<p>定义混入：混入对象是一个普通的JavaScript对象，它可以包含组件选项，例如<code v-pre>data</code>、<code v-pre>methods</code>、<code v-pre>created</code>等。可以通过<code v-pre>mixins</code>选项将混入对象添加到组件中。</p>
</li>
<li>
<p>应用混入：在单个组件上，可以通过<code v-pre>mixins</code>选项将混入对象应用到组件中。当组件和混入对象具有相同的选项时，混入对象的选项会在组件中的选项之前被合并。</p>
</li>
<li>
<p>合并规则：当混入对象和组件具有相同的选项时，Vue会根据一定的合并策略来处理。例如，对于<code v-pre>data</code>选项，混入对象的数据会被合并到组件的数据中；对于<code v-pre>methods</code>选项，混入对象的方法会被添加到组件的方法中。</p>
</li>
<li>
<p>混入链：在使用混入时，如果多个混入对象具有相同的选项，它们会按照混入的顺序依次被调用，形成一个混入链。这使得开发者可以按照一定的顺序定义和应用混入对象。</p>
</li>
</ol>
<p>混入的使用可以帮助实现多个组件之间的代码共享和复用，提高开发效率。它适用于共享一些通用的逻辑、方法或状态，但要注意避免滥用混入，以避免过多的依赖关系和命名冲突。</p>
<p>当一个系统中有多个组件需要共享一些相同的逻辑或数据时，可以使用混入来提取和复用这些代码逻辑。以下是一个简单的混入的例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义混入对象</span>
<span class="token keyword">const</span> myMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">logCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 在组件中应用混入</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'my-component'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div>
      &lt;button @click="increment">Increment&lt;/button>
      &lt;button @click="logCount">Log Count&lt;/button>
    &lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们定义了一个混入对象<code v-pre>myMixin</code>，它包含了<code v-pre>data</code>和<code v-pre>methods</code>选项。<code v-pre>data</code>中有一个<code v-pre>count</code>变量用于计数，<code v-pre>methods</code>中有<code v-pre>increment</code>方法用于增加计数，以及<code v-pre>logCount</code>方法用于打印计数。</p>
<p>然后，在一个组件中使用<code v-pre>mixins</code>选项将混入对象应用到组件上。在这个例子中，我们创建了一个名为<code v-pre>my-component</code>的组件，并应用了<code v-pre>myMixin</code>混入对象。组件模板中包含了两个按钮，一个用于增加计数，另一个用于打印计数。</p>
<p>通过使用混入，我们可以实现多个组件共享相同的计数逻辑和方法，避免了代码的重复编写。</p>
<p>这只是一个简单的例子，实际上混入可以包含更复杂的逻辑和多个选项。在工程化的项目中，混入可以帮助你更好地组织和复用代码，提高开发效率。</p>
<h2 id="过渡与动画" tabindex="-1"><a class="header-anchor" href="#过渡与动画" aria-hidden="true">#</a> 过渡与动画</h2>
<p>过渡和动画是用于为组件在状态改变时添加平滑的效果和动画效果的功能。Vue提供了内置的过渡组件和过渡类名，以及可以使用第三方动画库的能力，使得在Vue应用中实现过渡和动画变得简单和灵活。</p>
<p>以下是Vue中过渡和动画的基本概念和用法：</p>
<ol>
<li>
<p>CSS过渡：Vue通过内置的<code v-pre>&lt;transition&gt;</code>组件来实现CSS过渡效果。通过在组件间添加<code v-pre>&lt;transition&gt;</code>标签，并在需要过渡的元素上使用<code v-pre>&lt;transition&gt;</code>组件的特定属性，可以定义进入和离开过渡的效果。例如，可以使用<code v-pre>name</code>属性指定动画类名，使用<code v-pre>v-enter</code>和<code v-pre>v-leave-to</code>来定义过渡效果。</p>
</li>
<li>
<p>过渡类名：Vue在过渡过程中会自动添加和删除CSS类名，开发者可以利用这些类名来定义过渡的动画效果。常用的类名有：<code v-pre>v-enter</code>、<code v-pre>v-enter-active</code>、<code v-pre>v-enter-to</code>、<code v-pre>v-leave</code>、<code v-pre>v-leave-active</code>、<code v-pre>v-leave-to</code>等。可以通过这些类名设置CSS过渡和动画的属性，例如<code v-pre>transition</code>、<code v-pre>animation</code>等。</p>
</li>
<li>
<p>JavaScript钩子函数：除了CSS过渡外，Vue还提供了一些JavaScript钩子函数来在过渡的不同阶段执行自定义逻辑。例如，在过渡开始前，可以使用<code v-pre>before-enter</code>钩子函数执行一些前置操作，或使用<code v-pre>after-leave</code>钩子函数在过渡结束后执行一些后置操作。</p>
</li>
<li>
<p>第三方动画库：Vue还可以与一些第三方动画库集成，例如Animate.css、Velocity.js等。通过使用<code v-pre>&lt;transition&gt;</code>组件的<code v-pre>name</code>属性与动画库提供的类名进行组合，可以使用这些库的动画效果。</p>
</li>
</ol>
<p>请注意，过渡和动画在Vue中的使用是基于CSS的，因此需要一些基本的CSS知识来定义过渡和动画效果。</p>
<p>总结而言，Vue提供了内置的过渡组件和过渡类名，以及与第三方动画库集成的能力，使得在Vue应用中实现过渡和动画效果变得更加简单和灵活。通过为组件的状态改变添加平滑的动画效果，可以提升用户体验和界面交互的吸引力。</p>
<p>当用户点击按钮时，让一个元素在显示和隐藏时具有淡入淡出的过渡效果。可以通过引入Vue的过渡组件<code v-pre>&lt;transition&gt;</code>和使用CSS属性来实现。</p>
<p>首先，需要在Vue组件中引入<code v-pre>&lt;transition&gt;</code>标签，并设置一个唯一的<code v-pre>name</code>属性，用于控制过渡的类名。然后，在需要进行过渡的元素上添加特定的<code v-pre>class</code>和<code v-pre>v-if</code>指令，使其与过渡组件关联起来。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleElement<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>element<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showElement<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This is a transition element.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">showElement</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">toggleElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>showElement <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>showElement<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.fade-enter-active,
.fade-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fade-enter,
.fade-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们定义了一个按钮和一个具有过渡效果的元素。点击按钮时，通过改变<code v-pre>showElement</code>的值，控制元素的显示和隐藏。</p>
<p>我们使用<code v-pre>&lt;transition&gt;</code>组件将目标元素包裹起来，并给它设置一个独立的<code v-pre>name</code>属性，这里设置为&quot;fade&quot;。而实际上要执行过渡效果的元素是被<code v-pre>v-if</code>指令绑定的<code v-pre>&lt;div&gt;</code>。</p>
<p>在CSS中，我们定义了两个类名。<code v-pre>.fade-enter-active</code>和<code v-pre>.fade-leave-active</code>是用来描述过渡期间的样式，通过<code v-pre>transition</code>属性指定了过渡效果的持续时间。<code v-pre>.fade-enter</code>和<code v-pre>.fade-leave-to</code>则是用来描述元素在进入过渡状态和离开过渡状态时的样式变化，这里通过修改<code v-pre>opacity</code>属性来实现淡入和淡出的效果。</p>
<p>通过上述代码，当点击按钮时，元素会以淡入淡出的效果进行过渡。</p>
<div class="custom-container tip">
<p>看完上面的内容，接下来该进入到Vue3的学习之路了</p>
</div>
<h2 id="vue3相对vue2增加了那些东西" tabindex="-1"><a class="header-anchor" href="#vue3相对vue2增加了那些东西" aria-hidden="true">#</a> Vue3相对Vue2增加了那些东西</h2>
<ol>
<li>
<p><strong>更快的渲染效率</strong>：Vue 3采用了虚拟DOM的重写，它在渲染和更新方面比Vue 2更高效。新的虚拟DOM算法（Fragments + Static Trees）和编译器优化使得Vue 3在性能方面表现更好。</p>
</li>
<li>
<p><strong>更小的包大小</strong>：Vue 3的体积比Vue 2更小，这得益于对编译器的重构和优化，以及模块的拆分，使得开发者可以按需加载所需的功能。</p>
</li>
<li>
<p><strong>Composition API（组合式API）</strong>：Vue 3引入了Composition API，这是一个更灵活和可重用的API。与Vue 2的Options API相比，Composition API允许开发者根据逻辑相关性组织代码，提高了代码的可读性和维护性。</p>
</li>
<li>
<p><strong>TypeScript支持</strong>：Vue 3添加了对TypeScript的原生支持，提供了类型推导和完整的类型定义，使得开发者可以更方便地进行类型检查和开发。</p>
</li>
<li>
<p><strong>响应式系统升级</strong>：Vue 3中的响应式系统进行了重写，采用了Proxy代理作为底层实现，取代了Vue 2中的Object.defineProperty。这带来了更强大的响应式能力，提供了更细粒度的响应追踪，支持嵌套和数组响应。</p>
</li>
<li>
<p><strong>更好的错误处理</strong>：Vue 3改进了错误处理机制，提供了更好的错误捕获和报告方式，使得开发者能够更容易地定位并修复错误。</p>
</li>
<li>
<p><strong>更好的TypeScript和IDE支持</strong>：Vue 3针对TypeScript和IDE的支持进行了改进，提供了更准确的类型推断和代码编辑功能。</p>
</li>
</ol>
<p>除了上述的主要变化之外，Vue 3还增加了其他一些功能和改进，如Teleport、Suspense、多个根节点支持、全局API的调整等。</p>
<p>需要注意的是，Vue 3在一些方面与Vue 2有一些不兼容之处，因此，如果要将现有的Vue 2项目迁移到Vue 3，可能需要进行一些修改和调整。</p>
<h2 id="第一个vue3应用" tabindex="-1"><a class="header-anchor" href="#第一个vue3应用" aria-hidden="true">#</a> 第一个vue3应用</h2>
<ol>
<li>安装vue</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>创建一个vue3项目(选择需要下载的依赖)</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vue create hello-vue3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>运行项目</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>访问</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>http://localhost:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="应用实例" tabindex="-1"><a class="header-anchor" href="#应用实例" aria-hidden="true">#</a> 应用实例</h3>
<p>每个vue应用都是通过<code v-pre>createApp</code>去创建实例</p>
<blockquote>
<p>示例</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">const</span> app<span class="token operator">=</span><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式" aria-hidden="true">#</a> 响应式</h2>
<p>响应式数据对象：在 Vue 3 中，可以通过使用 ref 函数或 reactive 函数将一个普通的 JavaScript 对象或基本类型转换为一个响应式数据对象。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将基本类型转换为响应式数据</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>      <span class="token comment">// 将普通对象转换为响应式数据</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello Vue 3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'bar'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><code v-pre>ref</code>函数：ref 函数接受一个参数，并返回一个响应式数据对象，该对象可以直接作为Vue实例的数据对象进行响应式处理。</li>
</ol>
<blockquote>
<p>注意：ref 函数的返回值是一个对象，该对象包含一个指向响应式数据的单一属性 .value。</p>
</blockquote>
<p>ref函数的使用方式如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将基本类型转换为响应式数据</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  count<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token number">3</span><span class="token comment">//修改响应式对象的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，使用<code v-pre>ref</code>函数创建了一个名为<code v-pre>count</code>的响应式对象，并初始化其值为0。通过访问<code v-pre>count.value</code>可以读取到响应式对象的值，通过修改<code v-pre>count.value</code>可以改变响应式对象的值。</p>
<div class="custom-container tip">
<p><code v-pre>ref</code>函数的返回值是一个包装了初始值的响应式对象，而不是像vue2中返回的是一个函数
除了基本类型的初始值，<code v-pre>ref</code>函数还可以接受对象、数组等作为参数。这样，创建的响应式对象就可以追踪到更复杂数据的变化。</p>
</div>
<ol start="2">
<li><code v-pre>reactive</code>函数：reactive 函数接受一个普通对象，并返回一个响应式代理对象，该对象的所有属性也都是响应式代理。</li>
</ol>
<blockquote>
<p>注意：reactive 函数的返回值是一个对象，该对象的所有属性也都是对象，这些对象都是响应式代理。
不能替换整个对象
只能用于对象类型
解构会失去响应式</p>
</blockquote>
<div class="custom-container tip">
<p><code v-pre>reactive</code>函数的返回值是一个对象，该对象的所有属性也都是对象，这些对象都是响应式代理。</p>
</div>
<p>在组件中使用响应式对象： 在 Vue3 的组件中，可以直接将响应式对象用于渲染和操作视图。示例代码如下：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Count: {{ state.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Message: {{ state.message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Increment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello Vue3!'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      increment<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们使用 reactive 函数将 state 对象转换为响应式对象，并在模板中直接使用它的属性和方法。每当点击按钮时，state.count 的值会自动更新，从而触发视图的重新渲染。</p>
<p>动态跟踪数据的变化： 使用 reactive 函数创建的响应式对象会自动追踪数据的变化。这意味着当响应式对象的属性发生变化时，相关的视图会自动更新。示例代码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，通过 setTimeout 函数在 1 秒后增加 state.count 的值，由于 state.count 是响应式的，所以视图会自动更新显示新的值。</p>
<blockquote>
<p>练习实战</p>
</blockquote>
<VuePlayground title="ref%E5%92%8Creactive%E7%BB%83%E4%B9%A0" key="0fef40a2" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHNjcmlwdCA%2BXG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBtc2cgPSByZWYoXCJoZWxsbyB3b3JsZCFcIik7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldHVwKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZ1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG48L3RlbXBsYXRlPlxuIn0%3D">
</VuePlayground>
<ol start="3">
<li><code v-pre>toRefs</code>:接受一个响应式对象作为参数，返回一个对象，该对象的每个属性都是 ref 对象，且是响应式的。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toRefs<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'john@example.com'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> converted <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>converted<span class="token punctuation">.</span>name<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'John'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>converted<span class="token punctuation">.</span>age<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 25</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>converted<span class="token punctuation">.</span>email<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'john@example.com'</span>

state<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Jane'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>converted<span class="token punctuation">.</span>name<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'Jane'</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们首先创建了一个名为state的响应式对象，包含了三个属性：name、age和email。然后，我们使用toRefs函数将state对象转化为ref对象，并将结果保存在converted变量中。最后，我们可以通过converted对象访问state对象的属性和值，例如通过converted.name.value访问name属性的值。</p>
<blockquote>
<p>特点</p>
</blockquote>
<ul>
<li>toRefs函数的返回值是一个包含所有属性的ref对象。这意味着每个属性都会被转化为一个独立的ref对象，以便在模板中使用。</li>
<li>转化后的ref对象是响应式的，当原始对象的属性值发生变化时，相应的ref对象也会更新。</li>
<li>通过toRefs转化后的属性是只读的，不能直接修改属性的值。如果要修改属性的值，需要通过修改原始对象来实现。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>toRefs只会将顶层属性转化为ref对象，而不会进行递归转化。如果state对象中的某个属性是另一个嵌套的响应式对象，那么toRefs只会将该属性本身转化为ref对象，而不会将其内部的属性转化为ref对象。如果需要将嵌套的响应式对象转化为ref对象，可以使用toRef或toRefs函数递归地转化每个属性。</p>
</div>
<ol start="3">
<li><code v-pre>readonly</code>: 用于创建一个只读的响应式对象。它接收一个普通的JavaScript对象作为参数，并返回一个只读的响应式对象。只读响应式对象的属性是不可修改的，不能进行赋值操作。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> readonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> readOnlyState <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>

readOnlyState<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 无效</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>readOnlyState<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印出0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li><code v-pre>isRef</code>: 用于检查一个值是否为一个Ref对象。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> isRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li><code v-pre>unref</code>: 用于将一个ref对象转为原始值。如果参数是一个ref对象，则直接返回原始值，否则返回参数本身。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> isRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">unref</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">unref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算属性-computed-1" tabindex="-1"><a class="header-anchor" href="#计算属性-computed-1" aria-hidden="true">#</a> 计算属性(Computed)</h2>
<h3 id="介绍-5" tabindex="-1"><a class="header-anchor" href="#介绍-5" aria-hidden="true">#</a> 介绍</h3>
<p>计算属性是Vue实例的一个属性，它是一个函数，返回一个值，这个值会被缓存，并且当依赖的响应式属性发生变化时，会重新计算。</p>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>原始值：{{ state.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>计算值：{{ computedCount }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> computedCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      computedCount
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算属性缓存" tabindex="-1"><a class="header-anchor" href="#计算属性缓存" aria-hidden="true">#</a> 计算属性缓存</h3>
<p>计算属性具有缓存机制，这意味着只要计算属性依赖的数据没有发生变化，计算属性的值就会被缓存起来，不会进行重复计算。</p>
<h3 id="计算属性依赖" tabindex="-1"><a class="header-anchor" href="#计算属性依赖" aria-hidden="true">#</a> 计算属性依赖</h3>
<p>计算属性的值依赖于其他数据的值。Vue 3会自动追踪这些依赖，当依赖的数据发生变化时，计算属性会重新计算。如果没有依赖的数据发生变化，则计算属性将使用缓存的值</p>
<h3 id="计算属性应用场景" tabindex="-1"><a class="header-anchor" href="#计算属性应用场景" aria-hidden="true">#</a> 计算属性应用场景</h3>
<p>计算属性在很多场景下非常有用，特别是在需要根据其他数据进行复杂计算的情况下。例如，可以使用计算属性从原始数据中过滤出特定的数据，或者根据一些条件计算出动态的样式。</p>
<div class="custom-container tip">
<p>计算属性是惰性的，也就是说，只有当计算属性被访问时才会计算。计算属性是基于其他数据进行计算的，它们本身并不存储任何数据。如果需要修改依赖的数据，可以使用<code v-pre>watch</code>侦听器</p>
</div>
<h3 id="计算属性与方法的区别" tabindex="-1"><a class="header-anchor" href="#计算属性与方法的区别" aria-hidden="true">#</a> 计算属性与方法的区别</h3>
<p>计算属性与方法最大的区别在于计算属性是基于它们的依赖进行缓存的，只有当依赖发生改变时，才会重新计算。</p>
<h2 id="侦听器-watch" tabindex="-1"><a class="header-anchor" href="#侦听器-watch" aria-hidden="true">#</a> 侦听器（Watch）</h2>
<p>侦听器（Watcher）是用来观察 Vue 实例数据变化并执行相应逻辑的功能。在 Vue 3 中，侦听器的实现方式与之前的版本有些不同，它们被称为 &quot;副作用函数&quot;（Effect Functions）。</p>
<p>在 Vue 3 中，可以使用 <code v-pre>watch</code> 函数来创建侦听器。<code v-pre>watch</code> 函数接收一个侦听的数据源，以及一个回调函数。当数据源发生变化时，回调函数会被触发执行。</p>
<p>以下是创建侦听器的示例代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'456'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> myData<span class="token punctuation">.</span>foo<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'foo 从'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token string">'变为'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，我们通过 <code v-pre>reactive</code> 函数创建了一个响应式对象 <code v-pre>myData</code>，它包含了两个属性 <code v-pre>foo</code> 和 <code v-pre>bar</code>。通过 <code v-pre>watch</code> 函数，我们对 <code v-pre>myData.foo</code> 进行了侦听，并在它的值发生变化时输出变化值。</p>
<p>在回调函数中，我们可以获取到新旧两个值，即 <code v-pre>newValue</code> 和 <code v-pre>oldValue</code>，用来进行相应的处理。侦听器还支持可选的第三个参数，用来配置侦听器行为的选项。</p>
<p>除了可以侦听单个属性外，我们还可以使用 <code v-pre>watch</code> 函数侦听一个函数的返回值。在这种情况下，当函数的返回值发生变化时，回调函数将被触发执行。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'456'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> myData<span class="token punctuation">.</span>foo <span class="token operator">+</span> myData<span class="token punctuation">.</span>bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'foo 和 bar 的总和从'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token string">'变为'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，我们将 <code v-pre>myData.foo</code> 和 <code v-pre>myData.bar</code> 的和作为侦听目标，并在它发生变化时输出变化值。</p>
<p>需要注意的是，在 Vue 3 中，与 Vue 2 不同，<code v-pre>watch</code> 函数默认是在组件挂载时立即执行的。如果需要延迟执行侦听器，可以添加 <code v-pre>immediate: false</code> 的选项。</p>
<p>此外，Vue 3 还提供了一些其他的侦听器相关的函数和API，如 <code v-pre>watchEffect</code>、<code v-pre>watchRef</code>、<code v-pre>watchEffectOnce</code> 等，用来实现更灵活的侦听器行为。可以根据具体需求选择合适的函数和API来使用。</p>
<ul>
<li><code v-pre>watchEffect</code>:是一个自动执行的侦听器，它接收一个函数作为参数，在每次组件更新时都会自动执行该函数。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> watchEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'456'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myData<span class="token punctuation">.</span>foo <span class="token operator">+</span> myData<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>watchRef</code>:用于侦听 <code v-pre>ref</code> 类型的数据，它接收一个 <code v-pre>ref</code> 对象作为参数，在每次组件更新时都会自动执行侦听器。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watchRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watchRef</span><span class="token punctuation">(</span>myData<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'foo 从'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token string">'变为'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>watchEffectOnce</code>:是一个自动执行的侦听器，它接收一个函数作为参数，在组件第一次挂载时自动执行该函数，并在组件卸载时自动停止执行。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> watchEffectOnce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'456'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watchEffectOnce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myData<span class="token punctuation">.</span>foo <span class="token operator">+</span> myData<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算属性与侦听器的区别" tabindex="-1"><a class="header-anchor" href="#计算属性与侦听器的区别" aria-hidden="true">#</a> 计算属性与侦听器的区别</h3>
<p>计算属性是基于它们的依赖进行缓存的，只有当依赖发生改变时，才会重新计算。</p>
<p>侦听器是数据变化时执行的函数，它不会进行缓存，不会自动进行依赖收集。</p>
<h2 id="生命周期-1" tabindex="-1"><a class="header-anchor" href="#生命周期-1" aria-hidden="true">#</a> 生命周期</h2>
<p>Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为生命周期。</p>
<h3 id="生命周期图示" tabindex="-1"><a class="header-anchor" href="#生命周期图示" aria-hidden="true">#</a> 生命周期图示</h3>
<figure><img src="https://cn.vuejs.org/assets/lifecycle.16e4c08e.png" alt="Alt" width="800" tabindex="0" loading="lazy"><figcaption>生命周期图示</figcaption></figure>
<h3 id="生命周期函数" tabindex="-1"><a class="header-anchor" href="#生命周期函数" aria-hidden="true">#</a> 生命周期函数</h3>
<ol>
<li><code v-pre>setup</code>：在实例被创建之前调用。在 3.x 中， <code v-pre>setup</code> 函数现在位于 <code v-pre>beforeCreate</code> 之后，但在 2.x 中它们是并发执行的。</li>
<li><code v-pre>created</code>：在实例被创建后调用。此时，实例的属性已经被初始化，但DOM还没有被渲染。</li>
<li><code v-pre>beforeMount</code>：在挂载之前调用。此时，DOM还没有被渲染。</li>
<li><code v-pre>mounted</code>：在组件被挂载后调用。此时，组件已经渲染到了 DOM 中。
5 <code v-pre>beforeUpdate</code>：在组件更新之前调用。此时，组件的属性已经被更新，但 DOM 还没有被更新。</li>
<li><code v-pre>updated</code>：在组件更新之后调用。此时，组件的属性已经被更新，DOM 也已经被更新。</li>
<li><code v-pre>beforeUnmount</code>：在组件被卸载之前调用。此时，组件仍然存在于 DOM 中。</li>
<li><code v-pre>unmounted</code>：在组件被卸载之后调用。此时，组件已经被从 DOM 中移除。</li>
</ol>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<h3 id="组件注册-1" tabindex="-1"><a class="header-anchor" href="#组件注册-1" aria-hidden="true">#</a> 组件注册</h3>
<ol>
<li>全局注册</li>
</ol>
<ul>
<li>全局注册的组件可以在任何模板中使用。</li>
<li>全局注册的组件会通过 <code v-pre>app.component()</code> 注册。</li>
</ul>
<blockquote>
<p>示例</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'my-component-name'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 选项 */</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">'&lt;div>{{count}}&lt;/div>'</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> count<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>局部注册</li>
</ol>
<ul>
<li>局部组件只能在当前组件中使用。</li>
<li>局部组件会通过 <code v-pre>components</code> 选项注册。</li>
</ul>
<blockquote>
<p>示例</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入" aria-hidden="true">#</a> 依赖注入</h2>
<p>依赖注入（Dependency Injection，简称 DI）是一种软件设计模式，用于解决模块之间的依赖关系。在依赖注入模式中，一个模块不需要显式地声明依赖关系，而是由容器在运行时注入。</p>
<ol>
<li><code v-pre>provide</code>: 在组件实例创建之前调用，用于配置依赖关系。</li>
<li><code v-pre>inject</code>: 用于从父组件接收依赖。</li>
</ol>
<blockquote>
<p>示例</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h2>
<h3 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> <code v-pre>&lt;Teleport&gt;</code></h3>
<p>允许将一个组件的渲染位置移动到 DOM 树的另一个位置。</p>
<blockquote>
<p>示例</p>
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 组件 A --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teleport-target<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Teleport Target<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 组件 B --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.teleport-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teleport-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Teleport Container<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.teleport-target<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teleport-target<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Teleport Target<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> <code v-pre>&lt;transition&gt;</code></h3>
<p>用于在组件切换时，在合适的时间添加/删除 CSS 类名。</p>
<figure><img src="https://cn.vuejs.org/assets/transition-classes.f0f7b3c9.png" alt="Alt" width="400" tabindex="0" loading="lazy"><figcaption>过渡效果图示</figcaption></figure>
<h4 id="过渡效果" tabindex="-1"><a class="header-anchor" href="#过渡效果" aria-hidden="true">#</a> 过渡效果</h4>
<ol>
<li><code v-pre>&lt;fade&gt;</code>: 淡入淡出</li>
<li><code v-pre>&lt;slide&gt;</code>: 滑动</li>
<li><code v-pre>&lt;zoom&gt;</code>: 缩放</li>
</ol>
<VuePlayground title="%E8%BF%87%E6%B8%A1%E6%95%88%E6%9E%9C" key="318877bc" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYXBwXCI%2BXG4gICAgPGgxPkFwcDwvaDE%2BXG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJzaG93ID0gIXNob3dcIj5Ub2dnbGU8L2J1dHRvbj5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxuICAgICAgPGRpdiB2LWlmPVwic2hvd1wiIGNsYXNzPVwidHJhbnNpdGlvbi1kZW1vXCI%2BXG4gICAgICAgIDxoMj5UcmFuc2l0aW9uIERlbW88L2gyPlxuICAgICAgPC9kaXY%2BXG4gICAgPC90cmFuc2l0aW9uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU%2BXG5cbjxzY3JpcHQ%2BXG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNldHVwKCl7XG4gICAgICBjb25zdCBzaG93PXJlZih0cnVlKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd1xuICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIn0%3D">
</VuePlayground>
<h4 id="过渡状态" tabindex="-1"><a class="header-anchor" href="#过渡状态" aria-hidden="true">#</a> 过渡状态</h4>
<ol>
<li><code v-pre>&lt;appear&gt;</code>: 首次渲染时生效</li>
<li><code v-pre>&lt;appear-active&gt;</code>: 首次渲染时生效，且在动画结束后保持动画效果</li>
<li><code v-pre>&lt;enter&gt;</code>: 首次渲染时生效，且在动画结束后保持动画效果</li>
<li><code v-pre>&lt;enter-active&gt;</code>: 首次渲染时生效，且在动画结束后保持动画效果</li>
<li><code v-pre>&lt;leave&gt;</code>: 离开时生效</li>
<li><code v-pre>&lt;leave-active&gt;</code>: 离开时生效，且在动画结束后保持动画效果</li>
</ol>
<blockquote>
<p>注意：<code v-pre>&lt;appear&gt;</code> 和 <code v-pre>&lt;appear-active&gt;</code> 只适用于 <code v-pre>&lt;transition&gt;</code> 组件，不适用于 <code v-pre>&lt;transition-group&gt;</code> 组件
示例</p>
</blockquote>
<VuePlayground title="%E8%BF%87%E6%B8%A1%E7%8A%B6%E6%80%81" key="3e172658" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxoMj5UcmFuc2l0aW9uPC9oMj5cbiAgICA8dHJhbnNpdGlvbiBhcHBlYXIgYXBwZWFyLWFjdGl2ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJmYWRlLWVudGVyLWFjdGl2ZVwiPkZhZGUgRW50ZXIgQWN0aXZlPC9kaXY%2BXG4gICAgPC90cmFuc2l0aW9uPlxuICAgIDx0cmFuc2l0aW9uIGFwcGVhcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmYWRlLWVudGVyLWFjdGl2ZVwiPkZhZGUgRW50ZXI8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24%2BXG4gICAgPHRyYW5zaXRpb24%2BXG4gICAgICA8ZGl2IGNsYXNzPVwiZmFkZS1lbnRlci1hY3RpdmVcIj5GYWRlPC9kaXY%2BXG4gICAgPC90cmFuc2l0aW9uPlxuICAgIDxocj5cbiAgICA8aDI%2BVHJhbnNpdGlvbiBHcm91cDwvaDI%2BXG4gICAgPHRyYW5zaXRpb24tZ3JvdXAgYXBwZWFyIGFwcGVhci1hY3RpdmU%2BXG4gICAgICA8ZGl2IGNsYXNzPVwiZmFkZS1lbnRlci1hY3RpdmVcIj5GYWRlIEVudGVyIEFjdGl2ZTwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbi1ncm91cD5cbiAgICA8dHJhbnNpdGlvbi1ncm91cCBhcHBlYXI%2BXG4gICAgICA8ZGl2IGNsYXNzPVwiZmFkZS1lbnRlci1hY3RpdmVcIj5GYWRlIEVudGVyPC9kaXY%2BXG4gICAgPC90cmFuc2l0aW9uLWdyb3VwPlxuICAgIDx0cmFuc2l0aW9uLWdyb3VwPlxuICAgICAgPGRpdiBjbGFzcz1cImZhZGUtZW50ZXItYWN0aXZlXCI%2BRmFkZTwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbi1ncm91cD5cbiAgPC9kaXY%2BXG48L3RlbXBsYXRlPlxuIn0%3D">
</VuePlayground>
<h4 id="过渡模式" tabindex="-1"><a class="header-anchor" href="#过渡模式" aria-hidden="true">#</a> 过渡模式</h4>
<ol>
<li><code v-pre>&lt;in-out&gt;</code>: 先执行离开动画，再执行进入动画</li>
<li><code v-pre>&lt;out-in&gt;</code>: 先执行进入动画，再执行离开动画</li>
</ol>
<h4 id="过渡钩子" tabindex="-1"><a class="header-anchor" href="#过渡钩子" aria-hidden="true">#</a> 过渡钩子</h4>
<ol>
<li><code v-pre>&lt;before-enter&gt;</code>: 动画开始前触发</li>
<li><code v-pre>&lt;enter&gt;</code>: 动画开始时触发</li>
<li><code v-pre>&lt;after-enter&gt;</code>: 动画结束时触发</li>
<li><code v-pre>&lt;enter-cancelled&gt;</code>: 动画结束时触发</li>
<li><code v-pre>&lt;before-leave&gt;</code>: 动画开始前触发</li>
<li><code v-pre>&lt;leave&gt;</code>: 动画开始时触发</li>
<li><code v-pre>&lt;after-leave&gt;</code>: 动画结束时触发</li>
<li><code v-pre>&lt;leave-cancelled&gt;</code>: 动画结束时触发</li>
</ol>
<h4 id="过渡类名" tabindex="-1"><a class="header-anchor" href="#过渡类名" aria-hidden="true">#</a> 过渡类名</h4>
<ol>
<li>
<p><code v-pre>v-enter-from</code>：进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。</p>
</li>
<li>
<p><code v-pre>v-enter-active</code>：进入动画的生效状态。应用于整个进入动画阶段。在元素被插入之前添加，在过渡或动画完成之后移除。这个 <code v-pre>class</code> 可以被用来定义进入动画的持续时间、延迟与速度曲线类型。</p>
</li>
<li>
<p><code v-pre>v-enter-to</code>：进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 <code v-pre>v-enter-from</code> 被移除的同时)，在过渡或动画完成之后移除。</p>
</li>
<li>
<p><code v-pre>v-leave-from</code>：离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。</p>
</li>
<li>
<p><code v-pre>v-leave-active</code>：离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。这个 <code v-pre>class</code> 可以被用来定义离开动画的持续时间、延迟与速度曲线类型。</p>
</li>
<li>
<p><code v-pre>v-leave-to</code>：离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 <code v-pre>v-leave-from</code> 被移除的同时)，在过渡或动画完成之后移除。</p>
</li>
<li>
<p><code v-pre>v-enter-active</code> 和 <code v-pre>v-leave-active</code> 给我们提供了为进入和离开动画指定不同速度曲线的能力.</p>
</li>
</ol>
<h3 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a> <code v-pre>&lt;keep-alive&gt;</code></h3>
<p><code v-pre>keep-alive</code> 用于缓存和保持组件的状态，以便在组件切换时可以保留之前的状态数据，提高性能并提供更好的用户体验。</p>
<p>当一个组件被包裹在 <code v-pre>keep-alive</code> 标签内时，该组件会被缓存起来，而不是被销毁。当该组件在父组件中切换可见性时，它不会被销毁和重新创建，而是从缓存中取出并重新激活。</p>
<p><code v-pre>keep-alive</code> 可以接受一个 <code v-pre>include</code> 属性，用于指定哪些组件需要被缓存。它可以是一个字符串或数组，用来指定组件的名称。只有指定的组件会被缓存，其他组件则会被正常销毁和重新创建。</p>
<p>另外，<code v-pre>keep-alive</code> 还可以接受一个 <code v-pre>exclude</code> 属性，用于指定不需要被缓存的组件。它也可以是一个字符串或数组，指定组件的名称。</p>
<p>下面是一个示例，展示了如何使用 <code v-pre>keep-alive</code>：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleComponent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>切换组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentComponent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">currentComponent</span><span class="token operator">:</span> <span class="token string">'ComponentA'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">toggleComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentComponent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentComponent <span class="token operator">===</span> <span class="token string">'ComponentA'</span> <span class="token operator">?</span> <span class="token string">'ComponentB'</span> <span class="token operator">:</span> <span class="token string">'ComponentA'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，<code v-pre>currentComponent</code> 的初始值为 'ComponentA'。点击按钮后，它会在 'ComponentA' 和 'ComponentB' 之间切换。但是，无论切换多少次，每个组件都会保持它们的状态，而不会被销毁和重新创建。</p>
<p>注意，<code v-pre>keep-alive</code> 只会缓存组件实例，而不会缓存组件的模板。这意味着每个被缓存的组件实例之间共享同一个模板。如果需要在每个组件实例之间保持不同的模板状态，可以通过在 <code v-pre>keep-alive</code> 标签内部使用 <code v-pre>&lt;router-view&gt;</code> 或条件渲染来实现。</p>
<h2 id="节点、树和虚拟dom" tabindex="-1"><a class="header-anchor" href="#节点、树和虚拟dom" aria-hidden="true">#</a> 节点、树和虚拟DOM</h2>
<h3 id="虚拟dom-virtual-dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom-virtual-dom" aria-hidden="true">#</a> 虚拟DOM(Virtual DOM)</h3>
<p>虚拟DOM（Virtual DOM）是一种用于提高Web应用性能的技术，它是在内存中以JavaScript对象的形式表示整个DOM树的副本。虚拟DOM可以通过比较前后两次虚拟DOM之间的差异，最小化DOM操作，从而减少了对浏览器的重绘和回流，提高了应用的性能和响应速度。</p>
<p>以下是虚拟DOM的基本原理和工作流程：</p>
<ol>
<li>
<p>创建虚拟DOM树：当Vue或React应用启动时，会通过解析组件的模板或JSX语法，创建整个应用的初始虚拟DOM树。每个组件被表示为一个虚拟DOM节点，包含其对应的标签、属性、事件等信息。</p>
</li>
<li>
<p>进行修改和更新：当应用状态发生变化，需要重新渲染时，新的虚拟DOM树会与之前的虚拟DOM树进行比较和分析，找出二者之间的差异。</p>
</li>
<li>
<p>生成补丁：通过比较两个虚拟DOM树，会生成一棵描述如何将旧DOM树更新为新DOM树的补丁树（Patch Tree），也就是所谓的DOM操作的指令。</p>
</li>
<li>
<p>应用补丁：将补丁树应用于真实的DOM元素上，从而更新实际的用户界面。这些补丁操作通常是高效的，因为实际的DOM操作被最小化，只会修改必要的部分来保持视图的同步。</p>
</li>
</ol>
<p>通过使用虚拟DOM，可以减少直接对真实DOM的操作次数，从而提高渲染性能。虚拟DOM通过批量操作、优化重绘和回流等方式，将多次DOM操作转化为最小的修改，使得页面更新的效率更高。</p>
<p>虽然虚拟DOM在Vue和React等框架中得到广泛应用，但它并非适用于所有场景。对于简单的应用或页面来说，直接操作真实DOM可能更为高效。虚拟DOM的主要目标是通过减少浏览器的DOM操作来提高复杂应用的性能。</p>
<blockquote>
<p>与真实DOM（Real DOM）的区别</p>
</blockquote>
<ol>
<li>
<p>性能：虚拟DOM可以提高应用的性能。它通过在内存中操作轻量级的JavaScript对象来表示整个DOM树，然后将这个虚拟DOM与真实DOM进行比较，并只对实际发生变化的部分进行更新。相比之下，直接对真实DOM进行操作可能会导致频繁的重绘和回流，影响性能。</p>
</li>
<li>
<p>批量操作：虚拟DOM可以对多个DOM更新操作进行批量处理，最小化对真实DOM的操作次数。相比之下，直接对真实DOM进行操作需要立即执行，无法进行批量处理。</p>
</li>
<li>
<p>简化开发：虚拟DOM可以简化开发过程。通过使用虚拟DOM，开发者可以将关注点从低级的DOM操作转移到更高级的应用状态管理和UI组件开发上。</p>
</li>
<li>
<p>跨平台：虚拟DOM是通过JavaScript对象表示的，因此可以在不同的平台上使用，例如浏览器、Node.js等。相比之下，真实DOM是平台特定的，与特定环境绑定。</p>
</li>
<li>
<p>内存消耗：虚拟DOM可能会占用更多的内存，因为需要将整个DOM结构以JavaScript对象的形式存储在内存中。而真实DOM只需要存储实际的DOM元素。</p>
</li>
<li>
<p>学习曲线：对于初学者来说，掌握虚拟DOM的概念和使用可能需要一些时间和学习成本。相比之下，直接对真实DOM进行操作更为直接和易于理解。</p>
</li>
</ol>
<p>总的来说，虚拟DOM在性能优化和开发便利性方面提供了一些优势，但它可能会带来额外的内存消耗，并且对于简单的应用来说，直接操作真实DOM可能更为简单和高效。</p>
<h3 id="节点、树" tabindex="-1"><a class="header-anchor" href="#节点、树" aria-hidden="true">#</a> 节点、树</h3>
<p>节点树（Node Tree）是指由节点组成的层次结构。在Web开发中，常用的节点树就是DOM树（Document Object Model Tree），它是通过HTML文档解析而得到的，表示了HTML文档的结构和内容。</p>
<p>DOM树是一个由各种类型的节点组成的树状结构。每个节点代表HTML中的一个元素、属性、文本等。节点可以有子节点和兄弟节点，形成父子和兄弟关系。根据节点的类型不同，可以将节点分为元素节点、属性节点、文本节点、注释节点等。</p>
<p>以下是一个示例的DOM树结构：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>- Document
  - DocumentType (&lt;!DOCTYPE html>)
  - Element (HTML)
    - Element (HEAD)
      - Element (META charset="UTF-8")
      - Element (TITLE)
        - Text (Example Page)
    - Element (BODY)
      - Element (H1)
        - Text (Hello, World!)
      - Element (P)
        - Text (This is a paragraph.)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，根节点是<code v-pre>Document</code>，它有两个子节点<code v-pre>DocumentType</code>和<code v-pre>Element</code>。<code v-pre>Element</code>节点又有子节点和兄弟节点，形成了树状结构。每个节点都包含了它们的类型和内容，在DOM操作中可以使用节点的属性和方法来访问和修改节点的属性和内容。</p>
<p>通过操作节点树，我们可以对HTML文档进行增加、删除、修改等操作，以实现对页面的动态更新和交互。</p>
<p>需要注意的是，虽然DOM树是常用的节点树表示方式，但在其他领域，比如计算机科学中的树数据结构，节点树可以具有不同的定义和用途。</p>
<ol>
<li>
<p><a href="/blog/code/todoMVC" target="_blank" rel="noopener noreferrer">TODOMVC<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="/blog/code/shop-admin" target="_blank" rel="noopener noreferrer">一个基于element-ui和vue2的后台管理系统<ExternalLinkIcon/></a></p>
</li>
</ol>
<CommentService /></div></template>

<script>
    const buttonCounter={
      data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    }
    /**  new Vue({
      components:{
        'button-counter':ButtonCounter
      }
    }) */
   </script>
