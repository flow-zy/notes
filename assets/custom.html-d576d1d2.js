import{_ as c,r as l,o as i,c as r,a as u,w as n,e as t,b as p,d as e}from"./app-491f955e.js";const d="/notes/assets/image-a90d81d0.png",k="/notes/assets/image-1-70b738c1.png",v={},m=p(`<h2 id="从零开始搭建后台管理系统" tabindex="-1"><a class="header-anchor" href="#从零开始搭建后台管理系统" aria-hidden="true">#</a> 从零开始搭建后台管理系统</h2><p>技术栈： react：用于构建UI界面 react-router-dom：用于管理路由 react-redux：用于管理状态 @reduxjs/toolkit：用于管理redux antd：用于构建UI组件 axios：用于处理网络请求 ahooks: hooks less：用于编写样式 vite::用于构建项目 typescript: 类型检查 eslint: 代码规范检查 prettier: 代码格式化 tailwindcss: 原子css yarn: 包管理器</p><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>custom-demo
├─ .browserslistrc <span class="token comment"># 浏览器兼容性配置</span>
├─.env.development <span class="token comment"># 开发环境变量</span>
├─.env.production <span class="token comment"># 生产环境变量</span>
├─.env.test <span class="token comment"># 测试环境变量</span>
├─.env.staging <span class="token comment"># 预发布环境变量</span>
├─.env.local <span class="token comment"># 本地环境变量</span>
├─ .editorconfig <span class="token comment"># 编辑器配置</span>
├─ .eslintignore <span class="token comment"># eslint忽略文件</span>
├─ .eslintrc.cjs <span class="token comment"># eslint配置</span>
├─ commitlint.config.cjs <span class="token comment"># commitlint配置</span>
├─ index.html <span class="token comment"># html模板</span>
├─ LICENSE <span class="token comment"># 许可证</span>
├─ package.json <span class="token comment"># 项目配置</span>
├─ postcss.config.cjs <span class="token comment"># postcss配置</span>
├─ public <span class="token comment"># 静态资源</span>
│  └─ vite.svg <span class="token comment"># 项目图标</span>
├─ README.en.md <span class="token comment"># 英文文档</span>
├─ .git <span class="token comment"># git忽略文件</span>
├─ .gitee <span class="token comment"># gitee忽略文件</span>
│  ├─ ISSUE_TEMPLATE.zh-CN.md <span class="token comment"># issue模板</span>
│  └─ PULL_REQUEST_TEMPLATE.zh-CN.md <span class="token comment"># pr模板</span>
├─ .github <span class="token comment"># github忽略文件</span>
├─ .gitignore <span class="token comment"># git忽略文件</span>
├─ .husky <span class="token comment"># husky配置</span>
│  ├─ commit-msg <span class="token comment"># commit钩子</span>
│  ├─ pre-commit <span class="token comment"># pre-commit钩子</span>
│  └─ pre-push <span class="token comment"># pre-push钩子</span>
├─ .prettierignore <span class="token comment"># prettier忽略文件</span>
├─ .prettierrc.cjs <span class="token comment"># prettier配置</span>
├─ .stylelintrc.cjs <span class="token comment"># stylelint配置</span>
├─ src <span class="token comment"># 源码目录</span>
│  ├─ api <span class="token comment"># api请求</span>
│  ├─ App.tsx <span class="token comment"># 根组件</span>
│  ├─ assets <span class="token comment"># 静态资源</span>
│  │  └─ react.svg
│  ├─ components <span class="token comment"># 组件</span>
│  │  ├─ index.ts <span class="token comment"># 导出组件</span>
│  ├─ constant <span class="token comment"># 常量</span>
│  │  └─ index.ts
│  ├─ language <span class="token comment"># 国际化</span>
│  │  └─ index.ts
│  ├─ hooks <span class="token comment"># hooks</span>
│  │  └─ index.ts <span class="token comment"># 导出hooks</span>
│  ├─ layout <span class="token comment"># 布局</span>
│  ├─ index.css <span class="token comment"># 全局样式</span>
│  ├─ main.tsx <span class="token comment"># 入口文件</span>
│  ├─ mock <span class="token comment"># mock数据</span>
│  ├─ store <span class="token comment"># store</span>
│  │  ├─ index.ts <span class="token comment"># 导出store</span>
│  │  └─ module <span class="token comment"># store模块</span>
│  ├─ types <span class="token comment"># 类型</span>
│  ├─ utils <span class="token comment"># 工具</span>
│  │  ├─ auth.ts <span class="token comment"># 权限工具</span>
│  │  ├─ premission.ts <span class="token comment"># 权限工具</span>
│  │  └─ request.ts <span class="token comment"># 网络请求工具</span>
│  ├─ views <span class="token comment"># 视图</span>
│  └─ vite-env.d.ts <span class="token comment"># 类型声明</span>
├─ tailwind.config.cjs <span class="token comment"># tailwind配置</span>
├─ tsconfig.json <span class="token comment"># typescript配置</span>
├─ tsconfig.node.json <span class="token comment"># typescript配置</span>
├─ vite.config.ts <span class="token comment"># vite配置</span>
└─ yarn.lock <span class="token comment"># 依赖锁定文件</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2><ol><li>使用vite</li></ol><p>打开命令行工具，输入以下命令：</p>`,7),b=e("p",null,"npm create vite@latest",-1),g=e("p",null,"yarn create vite",-1),y=e("p",null,"pnpm create vite",-1),f=p('<blockquote><p>project name:项目名称 Select a framework:选择框架 Select a variant:选择不同的语言</p></blockquote><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>安装依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> custom-demo <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>启动项目</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><p>这样就搭建好了一个简单的react项目</p><h2 id="修改vite配置" tabindex="-1"><a class="header-anchor" href="#修改vite配置" aria-hidden="true">#</a> 修改vite配置</h2><p>在<code>vite.config.ts</code>中加入以下配置</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code> resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  server<span class="token operator">:</span> <span class="token punctuation">{</span>
    port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    host<span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span>
    cors<span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置路由" tabindex="-1"><a class="header-anchor" href="#配置路由" aria-hidden="true">#</a> 配置路由</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i react-router-dom <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>在<code>src</code>文件夹下创建<code>router</code>文件夹，用于存放路由</p></li><li><p>在<code>router</code>文件夹下创建<code>base-router.ts</code>文件，用于配置路由</p></li><li><p>在<code>base-router.ts</code>文件中配置路由</p></li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> Fragment<span class="token punctuation">,</span> lazy<span class="token punctuation">,</span> ReactElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Navigate<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">RouteObject</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> auth <span class="token keyword">from</span> <span class="token string">&#39;@/utils/auth&#39;</span>
<span class="token keyword">const</span> Layout <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/layout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/About&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Login <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name">Props</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ReactElement
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Auth<span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> Props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> token <span class="token operator">=</span> auth<span class="token punctuation">.</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> token <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Navigate</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> routes<span class="token operator">:</span> RouteObject<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    element<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Auth</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Auth</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> element<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span>
        element<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    element<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Login</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> routes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>在<code>router</code>文件夹下创建<code>index.tsx</code>文件，用于配置路由</p></li><li><p>在<code>index.tsx</code>文件中配置路由</p></li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">RouteObject</span><span class="token punctuation">,</span> useRouteError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Spinner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components&#39;</span>
<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">&#39;./base-router&#39;</span>
<span class="token keyword">const</span> router<span class="token operator">:</span> RouteObject<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>routes<span class="token punctuation">]</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ErrorBoundary</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">useRouteError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> error <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">routingConversion</span><span class="token punctuation">(</span>router<span class="token operator">:</span> RouteObject<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> RouteObject<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> router<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>route<span class="token operator">:</span> RouteObject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newRoute<span class="token operator">:</span> RouteObject <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>route<span class="token punctuation">,</span>
      element<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Spinner</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>element<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span>
      errorElement<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newRoute<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">routingConversion</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> newRoute
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> RouteObject<span class="token punctuation">,</span> routingConversion <span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">routingConversion</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li><p>在<code>src</code>下创建·<code>layout</code>文件夹，用于存放布局组件</p></li><li><p>在<code>layout</code>文件夹下创建<code>index.tsx</code>文件，用于配置布局组件</p></li><li><p>在<code>index.tsx</code>文件中配置布局组件</p></li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useOutlet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> RouterView <span class="token operator">=</span> <span class="token function">useOutlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      sdhfhsd
      </span><span class="token punctuation">{</span>RouterView<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Layout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li><p>在<code>src</code>下创建<code>views</code>文件夹，用于存放视图组件</p></li><li><p>在<code>views</code>文件夹下创建<code>Home/index.tsx</code>,<code>Login/index.tsx</code>,<code>Eorror/index.tsx</code>, <code>About/index.tsx</code>文件，用于配置视图组件</p></li><li><p>在<code>Home/index.tsx</code>,<code>Login/index.tsx</code>,<code>Eorror/index.tsx</code>, <code>About/index.tsx</code>文件中配置视图组件</p></li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// Home/index.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Home
<span class="token comment">// Login/index.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span><span class="token string">&#39;react&#39;</span>
<span class="token keyword">function</span> <span class="token function">Login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Login</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Login
<span class="token comment">// Eorror/index.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span><span class="token string">&#39;react&#39;</span>
<span class="token keyword">function</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Error</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Error
<span class="token comment">// About/index.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span><span class="token string">&#39;react&#39;</span>
<span class="token keyword">function</span> <span class="token function">About</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">About</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> About
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12"><li><p>在<code>src</code>下创建<code>components</code>文件夹，用于存放公共组件</p></li><li><p>在<code>components</code>文件夹下创建<code>Spinner/index.tsx</code>文件，用于配置公共组件</p></li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">&#39;nprogress&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;nprogress/nprogress.css&#39;</span>

<span class="token keyword">function</span> <span class="token function">Spinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Spinner

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14"><li>在<code>components</code>文件夹下创建<code>index.ts</code>文件，加入以下代码：</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> Spinner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Spinner&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="15"><li>在<code>App.tsx</code>中使用路由</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createHashRouter<span class="token punctuation">,</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RootState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks&#39;</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token operator">:</span> RootState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>router<span class="token punctuation">)</span>
  <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token function">createHashRouter</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>router<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RouterProvider</span></span> <span class="token attr-name">router</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>routes<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RouterProvider</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置状态管理" tabindex="-1"><a class="header-anchor" href="#配置状态管理" aria-hidden="true">#</a> 配置状态管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i react-redux @reduxjs/toolkit <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>在<code>src</code>下创建<code>store</code>文件夹，用于存放状态管理</p></li><li><p>在<code>store</code>文件夹下创建<code>index.ts</code>文件，用于配置状态管理</p></li><li><p>在<code>index.ts</code>文件中配置状态管理</p></li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers<span class="token punctuation">,</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span>
<span class="token keyword">import</span> routerReducer <span class="token keyword">from</span> <span class="token string">&#39;./module/routes&#39;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  reducer<span class="token operator">:</span> <span class="token punctuation">{</span>
    route<span class="token operator">:</span>routerReducer
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在<code>main.tsx</code>中引入状态管理</li></ol><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span><span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span><span class="token string">&#39;react-dom&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>创建<code>module/routes.ts</code>文件</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createSlice <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span>
<span class="token keyword">import</span> router<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">RouteObject</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/router&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">State</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  router<span class="token operator">:</span> RouteObject<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> initialState<span class="token operator">:</span> State <span class="token operator">=</span> <span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> routerSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;router&#39;</span><span class="token punctuation">,</span>
  initialState<span class="token punctuation">,</span>
  reducers<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 路由跳转</span>
    <span class="token function">routeChange</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>router <span class="token operator">=</span> action<span class="token punctuation">.</span>payload
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Action creators are generated for each case reducer function</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> routeChange <span class="token punctuation">}</span> <span class="token operator">=</span> routerSlice<span class="token punctuation">.</span>actions

<span class="token keyword">export</span> <span class="token keyword">default</span> routerSlice<span class="token punctuation">.</span>reducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置axios" tabindex="-1"><a class="header-anchor" href="#配置axios" aria-hidden="true">#</a> 配置axios</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i axios antd <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>在<code>src</code>下创建<code>utils</code>文件夹，用于存放工具类</p></li><li><p>在<code>utils</code>文件夹下创建<code>request.ts</code>文件，用于配置axios</p></li><li><p>在<code>request.ts</code>文件中配置axios</p></li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span>
<span class="token keyword">import</span> Axios<span class="token punctuation">,</span> <span class="token punctuation">{</span> AxiosError<span class="token punctuation">,</span> AxiosResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> auth <span class="token keyword">from</span> <span class="token string">&#39;./auth&#39;</span>
<span class="token comment">// 定义请求参数的类型</span>
<span class="token keyword">interface</span> <span class="token class-name">RequestParams</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span>
  method<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span>
  params<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定义错误类型</span>
<span class="token keyword">interface</span> <span class="token class-name">MyError</span> <span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定义响应数据的类型</span>
<span class="token keyword">interface</span> <span class="token class-name">ResponseData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  data<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> Axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 请求拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  config <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> auth<span class="token punctuation">.</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>err<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment">// 响应拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>response<span class="token operator">:</span> AxiosResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
  <span class="token punctuation">(</span>err<span class="token operator">:</span> AxiosError<span class="token operator">&lt;</span>MyError<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> errorData <span class="token operator">=</span> err<span class="token punctuation">.</span>response<span class="token operator">?.</span>data
    <span class="token keyword">const</span> message <span class="token operator">=</span> errorData<span class="token operator">?.</span>message <span class="token operator">??</span> <span class="token string">&#39;Unknown error&#39;</span>
    <span class="token keyword">const</span> error<span class="token operator">:</span> MyError <span class="token operator">=</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> code<span class="token operator">:</span> errorData<span class="token operator">?.</span>code <span class="token operator">??</span> <span class="token number">500</span> <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token generic-function"><span class="token function">async</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>config<span class="token operator">:</span> RequestParams<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResponseData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> instance<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span>ResponseData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>config <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> errMessage <span class="token operator">=</span> <span class="token punctuation">(</span>error <span class="token keyword">as</span> MyError<span class="token punctuation">)</span><span class="token punctuation">.</span>message
    message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>errMessage <span class="token operator">||</span> <span class="token string">&#39;请求出错&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>errMessage <span class="token operator">||</span> <span class="token string">&#39;请求出错&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>创建<code>auth.ts</code>文件，加入以下代码：</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">TOKEN_KEY</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/constain&#39;</span>

<span class="token keyword">const</span> auth <span class="token operator">=</span> <span class="token punctuation">{</span>
  getToken<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token constant">TOKEN_KEY</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  setToken<span class="token operator">:</span> <span class="token punctuation">(</span>token<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token constant">TOKEN_KEY</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">removeToken</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token constant">TOKEN_KEY</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">clearToken</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> auth

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>在<code>src</code>下创建<code>contain/index.ts</code>文件，加入以下代码：</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">TOKEN_KEY</span> <span class="token operator">=</span> <span class="token string">&#39;ADMIN_TOKEN&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置-reduxjs-toolkit-持久化" tabindex="-1"><a class="header-anchor" href="#配置-reduxjs-toolkit-持久化" aria-hidden="true">#</a> 配置@reduxjs/toolkit 持久化</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i redux-persist <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>修改<code>src/store/index.ts</code>内容，代码如下：</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers<span class="token punctuation">,</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  <span class="token constant">FLUSH</span><span class="token punctuation">,</span>
  <span class="token constant">PAUSE</span><span class="token punctuation">,</span>
  <span class="token constant">PERSIST</span><span class="token punctuation">,</span>
  persistReducer<span class="token punctuation">,</span>
  persistStore<span class="token punctuation">,</span>
  <span class="token constant">PURGE</span><span class="token punctuation">,</span>
  <span class="token constant">REGISTER</span><span class="token punctuation">,</span>
  <span class="token constant">REHYDRATE</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-persist&#39;</span>
<span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">&#39;redux-persist/lib/storage&#39;</span> <span class="token comment">// localStorage 或 AsyncStorage</span>
<span class="token keyword">import</span> routerReducer <span class="token keyword">from</span> <span class="token string">&#39;./module/routes&#39;</span>
<span class="token comment">// 定义持久化配置</span>
<span class="token keyword">const</span> persistConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 用于在存储引擎中标识你的数据</span>
  storage<span class="token punctuation">,</span> <span class="token comment">// 使用的存储引擎</span>
  blacklist<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;router&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 排除不需要持久化的部分</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> rootReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token operator">:</span> routerReducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 创建持久化 reducer</span>
<span class="token keyword">const</span> persistedReducer <span class="token operator">=</span> <span class="token function">persistReducer</span><span class="token punctuation">(</span>persistConfig<span class="token punctuation">,</span> rootReducer<span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  reducer<span class="token operator">:</span> persistedReducer<span class="token punctuation">,</span>
  <span class="token function-variable function">middleware</span><span class="token operator">:</span> getDefaultMiddleware <span class="token operator">=&gt;</span>
    <span class="token function">getDefaultMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      serializableCheck<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//忽略了 Redux Persist 调度的所有操作类型。这样做是为了在浏览器控制台读取a non-serializable value was detected in the state时不会出现错误。</span>
        ignoredActions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">FLUSH</span><span class="token punctuation">,</span> <span class="token constant">REHYDRATE</span><span class="token punctuation">,</span> <span class="token constant">PAUSE</span><span class="token punctuation">,</span> <span class="token constant">PERSIST</span><span class="token punctuation">,</span> <span class="token constant">PURGE</span><span class="token punctuation">,</span> <span class="token constant">REGISTER</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 创建持久化的 store</span>
<span class="token keyword">const</span> persistor <span class="token operator">=</span> <span class="token function">persistStore</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> store<span class="token punctuation">,</span> persistor <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>修改<code>main.tsx</code>内容，代码如下：</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PersistGate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-persist/integration/react&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.tsx&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> persistor<span class="token punctuation">,</span> store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./index.css&#39;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>PersistGate loading<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span> persistor<span class="token operator">=</span><span class="token punctuation">{</span>persistor<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>PersistGate<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置eslint和prettier" tabindex="-1"><a class="header-anchor" href="#配置eslint和prettier" aria-hidden="true">#</a> 配置eslint和prettier</h2><ol><li>安装依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i eslint prettier eslint-config-prettier eslint-plugin-simple-import-sort <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用 命令创建配置文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx eslint <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><p>选择<code>Use a popular style guide</code>选项，选择<code>Airbnb</code>风格，然后选择<code>typescript</code>语言，最后选择<code>Use a different formatter</code>选项，选择<code>Prettier</code>格式化工具。</p></li><li><p>修改<code>.eslintrc.js</code>文件，文件重命名为：<code>.eslintrc.cjs</code>,内容如下</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2020</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:react-hooks/recommended&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;react-refresh&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;simple-import-sort&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;simple-import-sort/imports&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">[</span>
            <span class="token string">&#39;^react&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 以字母(或数字或下划线)或“@”后面跟着字母开头的东西,通常为nodeModules引入</span>
            <span class="token string">&#39;^@?\\\\w&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;^@(/.*|$)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 内部导入 &quot;@/&quot;</span>
            <span class="token string">&#39;^\\\\.\\\\.(?!/?$)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 父级导入. 把 \`..\` 放在最后.</span>
            <span class="token string">&#39;^\\\\.\\\\./?$&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 同级导入. 把同一个文件夹.放在最后</span>
            <span class="token string">&#39;^\\\\./(?=.*/)(?!/?$)&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;^\\\\.(?!/?$)&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;^\\\\./?$&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;^.\\\\.?(css|less|scss)$&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 样式导入.</span>
            <span class="token string">&#39;^\\\\u0000&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 带有副作用导入，比如import &#39;a.css&#39;这种.</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ignoreRestSiblings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;array-callback-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;allow-null&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-extra-semi&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;semi-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;before&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;after&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>创建<code>.prettierrc.cjs</code>文件，内容如下</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 箭头函数只有一个参数的时候可以忽略括号</span>
  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&#39;avoid&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 括号内部不要出现空格</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 行结束符</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 行宽</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token comment">// 换行方式</span>
  <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&#39;preserve&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 分号</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用单引号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 缩进</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用tab缩进</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 后置逗号，多行对象、数组在最后一行增加逗号</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;es5&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;typescript&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>创建 <code>.prettierignore</code>和<code>.eslintignore</code>文件，加入以下内容：</li></ol><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>node_modules
dist
public
.vscode
.husky
.gitignore
*.html
dist
.eslintrc.cjs
commitlint.config.cjs
.prettierrc.cjs
tailwind.config.cjs
postcss.config.cjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置tailwindcss" tabindex="-1"><a class="header-anchor" href="#配置tailwindcss" aria-hidden="true">#</a> 配置tailwindcss</h2><ol><li>安装依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i tailwindcss postcss autoprefixer <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建<code>tailwind.config.cjs</code>文件，内容如下：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;tailwindcss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/**/*.{js,tsx,tsx}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建<code>postcss.config.cjs</code>文件，内容如下：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tailwindcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>修改<code>src/index.css</code>文件，内容如下：</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置husky-和-commitlint、lint-staged-git-cz" tabindex="-1"><a class="header-anchor" href="#配置husky-和-commitlint、lint-staged-git-cz" aria-hidden="true">#</a> 配置husky 和 commitlint、lint-staged,git-cz</h2><ol><li>安装依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> husky lint-staged @commitlint/cli @commitlint/config-conventional @commitlint/prompt-cli git-cz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>执行下面的命令，向<code>package.json</code> 文件中加入脚本：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> pkg <span class="token builtin class-name">set</span> <span class="token assign-left variable">scripts.prepare</span><span class="token operator">=</span><span class="token string">&quot;husky install&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>启用<code>git</code>钩子：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run prepare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>新增一个<code>pre-commit</code>钩子，以便在代码提交之前运行npm命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npx lint-staged&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>添加<code>lint-staged</code>配置到<code>package.json</code>：</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.{ts,tsx,js,jsx,cjs,mjs}&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.{ts,tsx,js,jsx,cjs,mjs,css,scss,md}&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>创建<code>commitlint.config.cjs</code>文件，内容如下：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// @see: https://cz-git.qbenben.com/zh/guide</span>
<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;cz-git&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UserConfig<span class="token punctuation">}</span></span> */</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// @see: https://commitlint.js.org/#/reference-rules</span>
  <span class="token string-property property">&#39;body-leading-blank&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;footer-leading-blank&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;header-max-length&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;subject-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;type-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;subject-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;type-enum&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token number">2</span><span class="token punctuation">,</span>
   <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span>
    <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ci&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;wip&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;workflow&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;types&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;release&#39;</span>
   <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token comment">// type: &quot;Select the type of change that you&#39;re committing:&quot;,</span>
   <span class="token comment">// scope: &#39;Denote the SCOPE of this change (optional):&#39;,</span>
   <span class="token comment">// customScope: &#39;Denote the SCOPE of this change:&#39;,</span>
   <span class="token comment">// subject: &#39;Write a SHORT, IMPERATIVE tense description of the change:\\n&#39;,</span>
   <span class="token comment">// body: &#39;Provide a LONGER description of the change (optional). Use &quot;|&quot; to break new line:\\n&#39;,</span>
   <span class="token comment">// breaking:</span>
   <span class="token comment">//  &#39;List any BREAKING CHANGES (optional). Use &quot;|&quot; to break new line:\\n&#39;,</span>
   <span class="token comment">// footerPrefixsSelect:</span>
   <span class="token comment">//  &#39;Select the ISSUES type of changeList by this change (optional):&#39;,</span>
   <span class="token comment">// customFooterPrefixs: &#39;Input ISSUES prefix:&#39;,</span>
   <span class="token comment">// footer: &#39;List any ISSUES by this change. E.g.: #31, #34:\\n&#39;,</span>
   <span class="token comment">// confirmCommit: &#39;Are you sure you want to proceed with the commit above?&#39;</span>
   <span class="token comment">// 中文版</span>
   <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;选择你要提交的类型 :&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">&#39;选择一个提交范围（可选）:&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">&#39;请输入自定义的提交范围 :&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;填写简短精炼的变更描述 :\\n&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;填写更加详细的变更描述（可选）。使用 &quot;|&quot; 换行 :\\n&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">breaking</span><span class="token operator">:</span> <span class="token string">&#39;列举非兼容性重大的变更（可选）。使用 &quot;|&quot; 换行 :\\n&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">footerPrefixsSelect</span><span class="token operator">:</span> <span class="token string">&#39;选择关联issue前缀（可选）:&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">customFooterPrefixs</span><span class="token operator">:</span> <span class="token string">&#39;输入自定义issue前缀 :&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&#39;列举关联issue (可选) 例如: #31, #I3244 :\\n&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">&#39;是否提交或修改commit ?&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;feat&#39;,</span>
   <span class="token comment">//  name: &#39;feat:     🚀  A new feature&#39;,</span>
   <span class="token comment">//  emoji: &#39;🚀&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;fix&#39;,</span>
   <span class="token comment">//  name: &#39;fix:      🧩  A bug fix&#39;,</span>
   <span class="token comment">//  emoji: &#39;🧩&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;docs&#39;,</span>
   <span class="token comment">//  name: &#39;docs:     📚  Documentation only changes&#39;,</span>
   <span class="token comment">//  emoji: &#39;📚&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;style&#39;,</span>
   <span class="token comment">//  name: &#39;style:    🎨  Changes that do not affect the meaning of the code&#39;,</span>
   <span class="token comment">//  emoji: &#39;🎨&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;refactor&#39;,</span>
   <span class="token comment">//  name: &#39;refactor: ♻️   A code change that neither fixes a bug nor adds a feature&#39;,</span>
   <span class="token comment">//  emoji: &#39;♻️&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;perf&#39;,</span>
   <span class="token comment">//  name: &#39;perf:     ⚡️  A code change that improves performance&#39;,</span>
   <span class="token comment">//  emoji: &#39;⚡️&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;test&#39;,</span>
   <span class="token comment">//  name: &#39;test:     ✅  Adding missing tests or correcting existing tests&#39;,</span>
   <span class="token comment">//  emoji: &#39;✅&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;build&#39;,</span>
   <span class="token comment">//  name: &#39;build:    📦️   Changes that affect the build system or external dependencies&#39;,</span>
   <span class="token comment">//  emoji: &#39;📦️&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;ci&#39;,</span>
   <span class="token comment">//  name: &#39;ci:       🎡  Changes to our CI configuration files and scripts&#39;,</span>
   <span class="token comment">//  emoji: &#39;🎡&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;chore&#39;,</span>
   <span class="token comment">//  name: &quot;chore:    🔨  Other changes that don&#39;t modify src or test files&quot;,</span>
   <span class="token comment">//  emoji: &#39;🔨&#39;</span>
   <span class="token comment">// },</span>
   <span class="token comment">// {</span>
   <span class="token comment">//  value: &#39;revert&#39;,</span>
   <span class="token comment">//  name: &#39;revert:   ⏪️  Reverts a previous commit&#39;,</span>
   <span class="token comment">//  emoji: &#39;⏪️&#39;</span>
   <span class="token comment">// }</span>
   <span class="token comment">// 中文版</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;特性&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;特性:   🚀  新增功能&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🚀&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;修复&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;修复:   🧩  修复缺陷&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🧩&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;文档&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;文档:   📚  文档变更&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;📚&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;格式&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🎨&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;重构&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;重构:   ♻️  代码重构（不包括 bug 修复、功能新增）&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;♻️&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;性能&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;性能:   ⚡️  性能优化&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;⚡️&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;测试&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;测试:   ✅  添加疏漏测试或已有测试改动&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;✅&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;构建&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;📦️&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;集成&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;集成:   🎡  修改 CI 配置、脚本&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🎡&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;回退&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;回退:   ⏪️  回滚 commit&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;⏪️&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;其他&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🔨&#39;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeColorCode</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">allowEmptyScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">customScopesAlign</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">customScopesAlias</span><span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emptyScopesAlias</span><span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">upperCaseSubject</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">allowBreakingChanges</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fix&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breaklineNumber</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breaklineChar</span><span class="token operator">:</span> <span class="token string">&#39;|&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">issuePrefixs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;closed&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;closed:   ISSUES has been processed&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">customIssuePrefixsAlign</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emptyIssuePrefixsAlias</span><span class="token operator">:</span> <span class="token string">&#39;skip&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">customIssuePrefixsAlias</span><span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">allowCustomIssuePrefixs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">allowEmptyIssuePrefixs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">confirmColorize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxHeaderLength</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxSubjectLength</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minSubjectLength</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scopeOverrides</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">defaultBody</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">defaultIssues</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">defaultScope</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">defaultSubject</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>执行下面的命令，向<code>package.json</code> 文件中加入脚本：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> pkg <span class="token builtin class-name">set</span> <span class="token assign-left variable">scripts.commit</span><span class="token operator">=</span><span class="token string">&quot;git pull &amp;&amp; git add . &amp;&amp; git-cz &amp;&amp; git push&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置stylelint" tabindex="-1"><a class="header-anchor" href="#配置stylelint" aria-hidden="true">#</a> 配置stylelint</h2><ol><li>安装：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> stylelint stylelint-config-standard stylelint-config-prettier stylelint-config-standard-scss --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>配置：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-prettier&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-standard-scss&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;customSyntax&quot;</span><span class="token operator">:</span> <span class="token string">&quot;postcss-lit&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;property-no-unknown&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;comment-no-empty&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;禁止空注释&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;keyframes-name-pattern&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-descending-specificity&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;function-url-quotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;string-quotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;single&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;unit-case&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;color-hex-case&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lower&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;color-hex-length&quot;</span><span class="token operator">:</span> <span class="token string">&quot;short&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;font-family-no-missing-generic-family-keyword&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;block-opening-brace-space-before&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-empty-source&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;declaration-block-trailing-semicolon&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;selector-class-pattern&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;value-no-vendor-prefix&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;at-rule-no-unknown&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;order/properties-order&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 规则顺序</span>
      <span class="token string">&#39;position&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;z-index&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;display&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;float&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;max-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;max-height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;min-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;min-height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-top-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-right-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-bottom-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-left-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow-x&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow-y&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;clip&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;clear&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-family&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-size&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-smoothing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;osx-font-smoothing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-weight&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;line-height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;letter-spacing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;word-spacing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-align&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-decoration&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-indent&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-overflow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-rendering&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-size-adjust&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-shadow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-transform&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;word-break&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;word-wrap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;white-space&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;vertical-align&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style-type&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style-position&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;pointer-events&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;cursor&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;outline&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;outline-offset&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;opacity&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;filter&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;visibility&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;size&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>执行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx stylelint <span class="token string">&quot;**/*.css&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置editor" tabindex="-1"><a class="header-anchor" href="#配置editor" aria-hidden="true">#</a> 配置editor</h2><p>新建一个文件<code>.editorconfig</code>,加入以下内容：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code># https://editorconfig.org

root = true

[*] //表示所有的文件都可用
charset = utf-8 //设置文件的字符集
indent_style = space //缩进的风格是space 回车键
indent_size = 2//缩进大小是2
end_of_line = lf //缩进类型视lf
insert_final_newline = true //始终再文章末尾进入一个新行
trim_trailing_whitespace = true //移除无效空格

[*.md] //表示md文档只需要尊行以下规则
insert_final_newline = false
trim_trailing_whitespace = false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>end ：初始化配置就已经完成了(后续考虑增加国际化配置)</p>`,95);function h(w,x){const o=l("Tabs");return i(),r("div",null,[m,u(o,{id:"23",data:[{id:"npm"},{id:"yarn"},{id:"pnpm"}]},{title0:n(({value:s,isActive:a})=>[t("npm")]),title1:n(({value:s,isActive:a})=>[t("yarn")]),title2:n(({value:s,isActive:a})=>[t("pnpm")]),tab0:n(({value:s,isActive:a})=>[b]),tab1:n(({value:s,isActive:a})=>[g]),tab2:n(({value:s,isActive:a})=>[y]),_:1}),f])}const j=c(v,[["render",h],["__file","custom.html.vue"]]);export{j as default};
