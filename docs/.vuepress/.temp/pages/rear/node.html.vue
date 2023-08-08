<template><div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>Node.js 是基于 Chrome V8 引擎的 JavaScript 运行时环境，它使 JavaScript 可以在服务器端运行。Node.js 的出现打破了以往将 JavaScript 仅限于客户端浏览器运行的局限，使开发者可以使用 JavaScript 构建高效、可扩展的网络应用和服务端程序。</p>
<p>Node.js 的设计理念是基于事件驱动和非阻塞 I/O 的模型，这使得它能够处理大量并发请求而不会阻塞其他操作，因此非常适合构建高性能的网络应用。Node.js 提供了丰富的内置模块，例如 HTTP、文件系统、加密等，同时也支持使用第三方模块通过 npm (Node Package Manager) 进行管理。</p>
<p>通过 Node.js，开发人员可以使用 JavaScript 进行服务器端编程，实现与数据库的交互、处理 HTTP 请求、构建 API、处理文件系统等操作。同时，Node.js 还提供了强大的扩展能力，可以通过自定义模块和中间件来满足各种应用需求。</p>
<p>Node.js 的一个流行的开源框架是 Express.js，它提供了更高级的抽象和工具，简化了 Web 应用的开发流程。</p>
<p>总之，Node.js 在现代 Web 开发中扮演着重要的角色，它的高性能、可扩展性和丰富的生态系统使得它成为构建实时应用、聊天应用、API、代理服务器等的首选工具之一。</p>
<h2 id="安装node-js" tabindex="-1"><a class="header-anchor" href="#安装node-js" aria-hidden="true">#</a> 安装Node.js</h2>
<p>要安装Node.js，请按照以下步骤进行操作：</p>
<ol>
<li>
<p>前往Node.js官方网站：<a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">https://nodejs.org<ExternalLinkIcon/></a></p>
</li>
<li>
<p>在网站首页上，您将看到两个不同的版本可供选择：LTS版本（长期支持）和Current版本（最新版本）。如果您不需要最新功能，建议选择LTS版本，因为它在稳定性和支持方面更有保障。</p>
</li>
<li>
<p>根据您的操作系统，选择相应的版本。Node.js支持Windows、Mac和Linux等多个平台。</p>
</li>
<li>
<p>在下载页面上，您将看到一个推荐下载的按钮，点击它即可。如果您想要手动选择不同的版本，请单击&quot;Previous Releases&quot;（之前版本）链接。</p>
</li>
<li>
<p>下载完成后，运行安装程序，并按照提示进行安装。如果您使用Windows系统，可能还需要选择是否将Node.js添加到系统的环境变量中。</p>
</li>
<li>
<p>安装完成后，打开终端（命令行界面）窗口，并输入以下命令来检查Node.js是否正确安装并显示版本号：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果输出显示了Node.js的版本号，说明安装成功。</p>
</li>
<li>
<p>此外，Node.js还附带了一个包管理器工具npm（Node Package Manager），您可以通过以下命令来验证npm是否正确安装：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果输出显示了npm的版本号，则npm也已成功安装。</p>
</li>
</ol>
<p>现在，您已经成功安装了Node.js，并可以在自己的计算机上进行Node.js开发和运行应用程序了。</p>
<h2 id="创建node-js应用" tabindex="-1"><a class="header-anchor" href="#创建node-js应用" aria-hidden="true">#</a> 创建Node.js应用</h2>
<p>要创建一个基本的Node.js应用程序，请按照以下步骤进行操作：</p>
<ol>
<li>
<p>创建一个新的文件夹，用于保存您的应用程序文件。</p>
</li>
<li>
<p>打开一个文本编辑器或集成开发环境（IDE），创建一个新的文件。</p>
</li>
<li>
<p>在新文件中，使用以下代码作为应用程序的入口点。将代码复制到文件中，并保存为<code v-pre>app.js</code>（或您喜欢的其他名称）。</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello, Node.js!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这段代码将在控制台中打印出&quot;Hello, Node.js!&quot;。</p>
<ol start="4">
<li>
<p>打开命令行（终端）窗口，并导航到您创建的应用程序文件夹。</p>
</li>
<li>
<p>在命令行中运行以下命令来执行应用程序：</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6">
<li>如果一切顺利，您应该在命令行中看到输出：&quot;Hello, Node.js!&quot;。</li>
</ol>
<p>恭喜！您已经成功创建并运行了一个简单的Node.js应用程序。</p>
<p>您可以在<code v-pre>app.js</code>文件中编写更复杂的代码来构建更强大的应用程序。Node.js提供了许多内置模块和第三方模块，您可以使用它们来处理文件系统、网络请求、数据库连接等各种任务。了解并运用这些模块，将帮助您构建更强大、可扩展的Node.js应用程序。</p>
<h2 id="使用模块" tabindex="-1"><a class="header-anchor" href="#使用模块" aria-hidden="true">#</a> 使用模块</h2>
<p>在Node.js中，可以使用内置模块和第三方模块来扩展和增强应用程序的功能。下面是使用模块的一些示例：</p>
<ol>
<li>
<p>内置模块：</p>
<ul>
<li><code v-pre>fs</code>模块：用于处理文件系统操作，如创建、读取、写入和删除文件等。</li>
<li><code v-pre>http</code>模块：用于创建HTTP服务器和处理HTTP请求和响应。</li>
<li><code v-pre>path</code>模块：用于处理文件路径。</li>
<li><code v-pre>os</code>模块：用于获取操作系统相关信息，如CPU架构、操作系统类型等。</li>
</ul>
<p>下面是一个使用内置模块的示例，读取文件内容并打印在控制台上：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'filename.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>第三方模块（使用npm安装）：</p>
<ul>
<li><code v-pre>express</code>模块：一个流行的Web开发框架，用于构建API和服务器端应用程序。</li>
<li><code v-pre>lodash</code>模块：提供了一组实用的JavaScript函数，用于简化数据处理和集合操作。</li>
<li><code v-pre>mongoose</code>模块：用于连接和操作MongoDB数据库的对象模型工具。</li>
</ul>
<p>下面是一个使用第三方模块的示例，创建一个简单的Express应用并启动服务器：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello, Express!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Server is running on port 3000'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>在使用模块之前，需要通过<code v-pre>require()</code>函数将它们引入到您的应用程序中。对于内置模块，只需提供模块的名称即可；对于第三方模块，您需要首先通过npm安装它们，并使用相应的包名称进行引入。</p>
<p>通过使用模块，您可以轻松地扩展您的Node.js应用程序，添加各种功能和服务，提升您的开发效率。</p>
<h2 id="包管理器-npm" tabindex="-1"><a class="header-anchor" href="#包管理器-npm" aria-hidden="true">#</a> 包管理器（npm）</h2>
<p>包管理器是一种工具，用于管理和安装软件包（也称为模块或库），以便在您的项目中使用它们。在Node.js生态系统中，npm（Node Package Manager）是最常用的包管理器。</p>
<p>以下是一些关于npm的重要概念和常用命令：</p>
<ol>
<li>
<p>初始化项目：</p>
<ul>
<li><code v-pre>npm init</code>：初始化一个新的Node.js项目，生成<code v-pre>package.json</code>文件，其中包含项目的相关信息和依赖管理。</li>
</ul>
</li>
<li>
<p>安装和更新模块：</p>
<ul>
<li><code v-pre>npm install &lt;package&gt;</code>：安装一个模块。您可以指定具体的版本号、版本范围或标签（如latest）。</li>
<li><code v-pre>npm install &lt;package&gt; --save</code>：将模块添加到项目的<code v-pre>dependencies</code>中，以便在项目部署时安装依赖。</li>
<li><code v-pre>npm install &lt;package&gt; --save-dev</code>： 将模块添加到项目的<code v-pre>devDependencies</code>中，用于开发和构建工具。</li>
<li><code v-pre>npm update &lt;package&gt;</code>：更新特定模块到最新版本。</li>
<li><code v-pre>npm outdated</code>：检查项目中已安装的模块是否有可用的更新。</li>
</ul>
</li>
<li>
<p>卸载模块：</p>
<ul>
<li><code v-pre>npm uninstall &lt;package&gt;</code>：卸载指定的模块。</li>
</ul>
</li>
<li>
<p>其他常用命令：</p>
<ul>
<li><code v-pre>npm start</code>：运行项目的启动脚本，通常用于启动应用程序。</li>
<li><code v-pre>npm test</code>：运行项目的测试脚本。</li>
<li><code v-pre>npm run &lt;script&gt;</code>：运行项目自定义的脚本命令，可以在<code v-pre>package.json</code>中配置。</li>
</ul>
</li>
</ol>
<p>除了管理模块和依赖，npm还有其他功能，例如发布自己的模块到npm公共仓库、管理项目的脚本命令等。</p>
<p>要了解更多关于npm的详细信息，您可以访问npm官方文档：<a href="https://docs.npmjs.com/%E3%80%82" target="_blank" rel="noopener noreferrer">https://docs.npmjs.com/。<ExternalLinkIcon/></a></p>
<h2 id="异步编程" tabindex="-1"><a class="header-anchor" href="#异步编程" aria-hidden="true">#</a> 异步编程</h2>
<p>异步编程是一种编程范式，用于处理可能耗时的操作，如文件读取、网络请求或数据库查询。它的目的是在进行这些操作时不会阻塞主线程，从而使应用程序能够继续进行其他任务。</p>
<p>在JavaScript中，异步编程通常通过回调函数、Promises和Async/Await来实现。下面是对这些概念的简要说明：</p>
<ol>
<li>回调函数：使用回调函数是一种经典的异步编程模式。您可以在一个函数中指定一个回调函数作为参数，该函数将在异步操作完成后被调用。例如，Node.js中的<code v-pre>fs.readFile</code>方法就是使用回调函数的典型例子。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'filename.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Promises：Promises是一种更现代和清晰的处理异步代码的方式。通过使用Promises，您可以更容易地处理异步操作的结果。一个Promise表示一个可能的未来值，可以通过<code v-pre>.then()</code>方法注册成功的回调，或者使用<code v-pre>.catch()</code>方法注册错误的回调。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs/promises'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'filename.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Async/Await：Async/Await是ES2017引入的一种编写异步代码的简洁方式。通过使用<code v-pre>async</code>关键字和<code v-pre>await</code>关键字，您可以使用类似同步代码的语法编写异步操作。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs/promises'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'filename.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Async/Await使得异步代码的编写和阅读更加直观和可维护。</p>
<p>异步编程有助于避免阻塞主线程，提高应用程序的响应能力。在Node.js和其他JavaScript环境中，使用异步编程模式是处理网络请求、数据库查询等异步操作的常见做法。无论你选择使用回调函数、Promises还是Async/Await，都可以根据自己的需求和编程风格来选择最适合的方式。</p>
<h2 id="express框架" tabindex="-1"><a class="header-anchor" href="#express框架" aria-hidden="true">#</a> Express框架</h2>
<ul>
<li>
<p>Express是一个流行的Node.js Web应用框架，简化了路由、中间件等方面的开发。</p>
</li>
<li>
<p>先使用<code v-pre>npm install express</code>安装Express。</p>
</li>
<li>
<p>示例代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello, Express!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Server started on port 3000'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


