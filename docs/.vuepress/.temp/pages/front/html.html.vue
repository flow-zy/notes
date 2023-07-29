<template><div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>HTML（HyperText Markup Language）是一种用于创建网页的标记语言。它使用标记（tag）来描述网页的结构和内容。</p>
<h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2>
<p>一个基本的 文件包含以下几个部分：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>页面标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    页面内容
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;!DOCTYPE html&gt;</code>：声明文档类型为 HTML5。</li>
<li><code v-pre>&lt;html&gt;</code>：文档的根元素，包含了整个 页面的内容。</li>
<li><code v-pre>&lt;head&gt;</code>：头部区域，用于定义页面的元数据和引用外部资源。</li>
<li><code v-pre>&lt;title&gt;</code>：定义网页的标题，会显示在浏览器的标题栏上。</li>
<li><code v-pre>&lt;body&gt;</code>：网页的主体部分，包含显示在浏览器窗口中的内容。</li>
</ul>
<h2 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据" aria-hidden="true">#</a> 元数据</h2>
<p>元数据用于提供关于文档的额外信息，如文档的字符编码、作者、描述等。以下是一些常见的元数据标签：</p>
<ul>
<li><code v-pre>&lt;meta charset=&quot;UTF-8&quot;&gt;</code>：指定文档使用 UTF-8 字符编码。</li>
<li><code v-pre>&lt;meta name=&quot;author&quot; content=&quot;John Doe&quot;&gt;</code>：指定文档的作者。</li>
<li><code v-pre>&lt;meta name=&quot;description&quot; content=&quot;这是网页的描述&quot;&gt;</code>：指定网页的描述信息。</li>
</ul>
<p>可以使用更多的 <code v-pre>&lt;meta&gt;</code> 标签来提供其他元数据，以便搜索引擎和浏览器正确解析并显示相关信息。</p>
<h2 id="标记元素" tabindex="-1"><a class="header-anchor" href="#标记元素" aria-hidden="true">#</a> 标记元素</h2>
<p>使用标记元素来表示不同的内容和结构。以下是一些常用的标记元素：</p>
<ul>
<li><code v-pre>&lt;h1&gt;</code> 到 <code v-pre>&lt;h6&gt;</code>：标题元素，用于定义不同级别的标题。</li>
<li><code v-pre>&lt;p&gt;</code>：段落元素，用于定义文本段落。</li>
<li><code v-pre>&lt;a&gt;</code>：锚点元素，用于创建链接。</li>
<li><code v-pre>&lt;img&gt;</code>：图像元素，用于插入图片。</li>
<li><code v-pre>&lt;ul&gt;</code> 和 <code v-pre>&lt;ol&gt;</code>：无序列表和有序列表，用于显示一组项目。</li>
<li><code v-pre>&lt;li&gt;</code>：列表项元素，用于定义列表中的每个项目。</li>
<li><code v-pre>&lt;strong&gt;</code>: 加粗标签，用于加粗文本</li>
</ul>
<h2 id="块级元素与内联元素" tabindex="-1"><a class="header-anchor" href="#块级元素与内联元素" aria-hidden="true">#</a> 块级元素与内联元素</h2>
<p>元素根据其在页面上显示的方式被分为块级元素和内联元素。</p>
<ul>
<li>
<p>块级元素（Block-level Elements）：在页面中独占一行，顶部和底部会有额外的空白。常见的块级元素包括 <code v-pre>&lt;p&gt;</code>、<code v-pre>&lt;h1&gt;</code>、<code v-pre>&lt;div&gt;</code> 等。</p>
</li>
<li>
<p>内联元素（Inline Elements）：与其他元素共享同一行，在顶部和底部不会有额外的空白。常见的内联元素包括 <code v-pre>&lt;span&gt;</code>、<code v-pre>&lt;a&gt;</code>、<code v-pre>&lt;strong&gt;</code> 等。</p>
</li>
</ul>
<p>通过给块级元素和内联元素设置 CSS 样式，可以控制它们的外观和行为。</p>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p>元素可以包含属性，属性为元素提供了更多的信息和控制。以下是一些常见的 属性：</p>
<ul>
<li><code v-pre>id</code>：为元素指定唯一的标识符。</li>
<li><code v-pre>class</code>：为元素指定一个或多个样式类。</li>
<li><code v-pre>src</code>：指定图像、音频或视频的 URL。</li>
<li><code v-pre>href</code>：指定链接的目标 URL。</li>
<li><code v-pre>style</code>：为元素指定样式信息（如颜色、字体、大小等）。</li>
<li><code v-pre>alt</code>：指定图像无法显示时的替代文本。</li>
</ul>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>
<p>注释是用来给开发人员添加注解和说明的。注释不会在浏览器中显示，而是只在代码中可见。示例如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 这是一个注释 --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="实体字符" tabindex="-1"><a class="header-anchor" href="#实体字符" aria-hidden="true">#</a> 实体字符</h2>
<p>在 中，某些字符具有特殊的含义，如 <code v-pre>&lt;</code>、<code v-pre>&gt;</code> 和 <code v-pre>&amp;</code>。为了在文本中显示这些字符，可以使用实体字符表示。以下是一些常见的实体字符示例：</p>
<ul>
<li><code v-pre>&amp;lt;</code>：小于号 (<code v-pre>&lt;</code>)</li>
<li><code v-pre>&amp;gt;</code>：大于号 (<code v-pre>&gt;</code>)</li>
<li><code v-pre>&amp;amp;</code>：和号 (<code v-pre>&amp;</code>)</li>
<li><code v-pre>&amp;quot;</code>：双引号 (<code v-pre>&quot;</code>)</li>
<li><code v-pre>&amp;nbsp;</code>：空格</li>
</ul>
<h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2>
<p>表格用于在网页中展示数据，通常包含行和列。以下是一个简单的表格示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>城市<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>John<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>New York<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>Jane<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>London<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语义化表格" tabindex="-1"><a class="header-anchor" href="#语义化表格" aria-hidden="true">#</a> 语义化表格</h3>
<ul>
<li><code v-pre>&lt;table&gt;</code>：定义一个表格。</li>
<li><code v-pre>&lt;tr&gt;</code>：定义表格中的一行。</li>
<li><code v-pre>&lt;th&gt;</code>：定义表头单元格。</li>
<li><code v-pre>&lt;td&gt;</code>：定义数据单元格。</li>
<li><code v-pre>&lt;table&gt;</code>：定义表格元素。</li>
<li><code v-pre>&lt;caption&gt;</code>：定义表格标题。</li>
<li><code v-pre>&lt;thead&gt;</code>：定义表格的表头内容。</li>
<li><code v-pre>&lt;tbody&gt;</code>：定义表格的主体内容。</li>
<li><code v-pre>&lt;tfoot&gt;</code>：定义表格的页脚内容。</li>
<li><code v-pre>&lt;th&gt;</code>：定义表格的表头单元格。</li>
<li><code v-pre>&lt;tr&gt;</code>：定义表格的行。</li>
<li><code v-pre>&lt;td&gt;</code>：定义表格的数据单元格。</li>
</ul>
<h2 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h2>
<p>表单允许用户在网页上输入和提交数据。以下是一个简单的表单示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>姓名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>邮箱：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;form&gt;</code>：定义一个表单。</li>
<li><code v-pre>&lt;label&gt;</code>：定义表单字段的标签。</li>
<li><code v-pre>&lt;input&gt;</code>：用于创建输入字段，如文本框、按钮等。</li>
<li><code v-pre>type</code> 属性：指定输入字段的类型，如 <code v-pre>text</code>、<code v-pre>email</code> 等。</li>
<li><code v-pre>id</code> 属性：为字段定义唯一标识符。</li>
<li><code v-pre>name</code> 属性：为字段定义名称。</li>
</ul>
<h3 id="表单验证" tabindex="-1"><a class="header-anchor" href="#表单验证" aria-hidden="true">#</a> 表单验证</h3>
<p>HTML5 引入了一些内置的表单验证功能，可以使用这些功能对用户输入进行验证。例如，可以使用以下属性：</p>
<ul>
<li><code v-pre>required</code>：指定字段为必填项。</li>
<li><code v-pre>pattern</code>：使用正则表达式定义输入字段的模式。</li>
<li><code v-pre>maxlength</code>：限制输入字段的最大长度。</li>
<li><code v-pre>min</code> 和 <code v-pre>max</code>：定义输入字段的最小值和最大值。</li>
</ul>
<p>这些验证属性可以在客户端进行验证，减少了对服务器端验证的依赖。</p>
<h2 id="框架" tabindex="-1"><a class="header-anchor" href="#框架" aria-hidden="true">#</a> 框架</h2>
<p>框架允许将网页分割为独立的区域，每个区域可以显示不同的内容。以下是一个简单的框架示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25%, 75%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frameset</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;frameset&gt;</code>：定义框架集。</li>
<li><code v-pre>&lt;frame&gt;</code>：定义单个框架。</li>
</ul>
<p>请注意，使用框架已经不推荐，而是使用更现代化的技术，如 CSS 和 JavaScript 进行布局和交互。</p>
<h2 id="框架和嵌入内容" tabindex="-1"><a class="header-anchor" href="#框架和嵌入内容" aria-hidden="true">#</a> 框架和嵌入内容</h2>
<p>提供了多种标签和方式来嵌入外部内容，如框架、标记列表、嵌入式视频等。以下是一些示例：</p>
<ul>
<li><code v-pre>&lt;iframe src=&quot;https://www.example.com&quot;&gt;&lt;/iframe&gt;</code>：嵌入其他网页或文档。</li>
<li><code v-pre>&lt;ul&gt;&lt;li&gt;项目1&lt;/li&gt;&lt;li&gt;项目2&lt;/li&gt;&lt;/ul&gt;</code>：创建无序列表。</li>
<li><code v-pre>&lt;ol&gt;&lt;li&gt;项目1&lt;/li&gt;&lt;li&gt;项目2&lt;/li&gt;&lt;/ol&gt;</code>：创建有序列表。</li>
<li><code v-pre>&lt;embed src=&quot;video.mp4&quot;&gt;</code>：嵌入视频文件。</li>
<li><code v-pre>&lt;object data=&quot;document.pdf&quot;&gt;</code>：嵌入 PDF 文档。</li>
</ul>
<p>这些标签可以用于在网页中嵌入其他资源和内容，并增强用户体验。</p>
<h2 id="多媒体" tabindex="-1"><a class="header-anchor" href="#多媒体" aria-hidden="true">#</a> 多媒体</h2>
<p>提供了多种元素来嵌入多媒体内容，如图像、音频和视频。以下是一些示例：</p>
<h3 id="图像" tabindex="-1"><a class="header-anchor" href="#图像" aria-hidden="true">#</a> 图像</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片描述<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;img&gt;</code>：用于插入图像文件。</li>
<li><code v-pre>src</code> 属性：指定图像的文件路径。</li>
<li><code v-pre>alt</code> 属性：定义图像无法显示时的替代文本。</li>
</ul>
<h3 id="音频" tabindex="-1"><a class="header-anchor" href="#音频" aria-hidden="true">#</a> 音频</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;audio&gt;</code>：用于插入音频文件。</li>
<li><code v-pre>src</code> 属性：指定音频的文件路径。</li>
<li><code v-pre>controls</code> 属性：在页面中显示音频控制器。</li>
</ul>
<h3 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;video&gt;</code>：用于插入视频文件。</li>
<li><code v-pre>src</code> 属性：指定视频的文件路径。</li>
<li><code v-pre>controls</code> 属性：在页面中显示视频控制器。</li>
</ul>
<p>当然！这里还有一些其他的 相关主题：</p>
<h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2>
<p>在 中，可以使用 <code v-pre>&lt;a&gt;</code> 元素创建链接。以下是一些示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击这里<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;a&gt;</code>：创建链接的元素。</li>
<li><code v-pre>href</code> 属性：指定链接的目标 URL。</li>
</ul>
<p>可以在 <code v-pre>href</code> 属性中指定不同的 URL 类型，如绝对路径、相对路径、内部锚点等。</p>
<h2 id="html5-新特性" tabindex="-1"><a class="header-anchor" href="#html5-新特性" aria-hidden="true">#</a> HTML5 新特性</h2>
<p>HTML5 是 的最新版本，引入了许多新特性和改进。一些 HTML5 新特性包括语义化元素、表单增强、多媒体支持、Canvas 绘图等。以下是一些 HTML5 新特性示例：</p>
<ul>
<li><code v-pre>&lt;header&gt;</code>：定义文档或区域的页眉。</li>
<li><code v-pre>&lt;nav&gt;</code>：定义导航链接的容器。</li>
<li><code v-pre>&lt;main&gt;</code>：定义文档的主要内容。</li>
<li><code v-pre>&lt;video&gt;</code>：用于插入视频。</li>
<li><code v-pre>&lt;canvas&gt;</code>：用于绘制图形。</li>
<li><code v-pre>&lt;input type=&quot;email&quot;&gt;</code>：用于输入邮箱地址的表单字段。</li>
</ul>
<p>HTML5 提供了更多强大和丰富的功能，以及更好的语义化支持。</p>
<h2 id="语义化" tabindex="-1"><a class="header-anchor" href="#语义化" aria-hidden="true">#</a> 语义化</h2>
<p>语义化是指使用合适的标记元素来正确表示内容的结构和含义，使其在没有样式和脚本的情况下也能够良好地呈现和理解。通过正确使用标签元素，搜索引擎和辅助技术可以更好地理解和解析网页内容。</p>
<p>例如，使用 <code v-pre>&lt;h1&gt;</code> 到 <code v-pre>&lt;h6&gt;</code> 标签来表示标题的层级，<code v-pre>&lt;nav&gt;</code> 定义导航链接，<code v-pre>&lt;article&gt;</code> 表示文章等等。合理使用这些语义化标签将提高网页的可读性、可访问性和可维护性。</p>
<h2 id="语义化表单" tabindex="-1"><a class="header-anchor" href="#语义化表单" aria-hidden="true">#</a> 语义化表单</h2>
<p>表单用于收集用户输入，HTML5 引入了一些新的表单元素和属性，使表单更强大和易于使用。以下是一些语义化表单的示例：</p>
<ul>
<li><code v-pre>&lt;input type=&quot;email&quot;&gt;</code>：用于输入电子邮件地址。</li>
<li><code v-pre>&lt;input type=&quot;url&quot;&gt;</code>：用于输入 URL 地址。</li>
<li><code v-pre>&lt;input type=&quot;date&quot;&gt;</code>：用于选择日期。</li>
<li><code v-pre>&lt;input type=&quot;range&quot;&gt;</code>：用于选择范围。</li>
<li><code v-pre>&lt;textarea&gt;</code>：用于多行文本输入。</li>
</ul>
<p>还有其他许多表单元素和属性，可以根据需要选择合适的类型来创建表单。</p>
<h2 id="语义化图表" tabindex="-1"><a class="header-anchor" href="#语义化图表" aria-hidden="true">#</a> 语义化图表</h2>
<p>HTML5 引入了 <code v-pre>&lt;canvas&gt;</code> 元素，用于创建图表、绘制图形和动画效果。可以使用 JavaScript 来操作和绘制 <code v-pre>&lt;canvas&gt;</code> 元素。以下是一个简单的例子：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCanvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myCanvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，创建了一个红色的矩形图形。</p>
<h2 id="地理定位" tabindex="-1"><a class="header-anchor" href="#地理定位" aria-hidden="true">#</a> 地理定位</h2>
<p>HTML5 引入了地理定位 API，允许网页获取用户的地理位置信息。以下是一个简单的示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>获取位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>showPosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"该浏览器不支持地理定位。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">showPosition</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> latitude <span class="token operator">=</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span>
    <span class="token keyword">var</span> longitude <span class="token operator">=</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"您的位置是："</span> <span class="token operator">+</span> latitude <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击按钮后，浏览器将请求用户的位置信息，并在弹出对话框中显示经纬度。请注意，为了获取位置信息，用户需要在浏览器中授权。</p>
<h2 id="语义化标记" tabindex="-1"><a class="header-anchor" href="#语义化标记" aria-hidden="true">#</a> 语义化标记</h2>
<p>语义化标记是指使用适当的语义元素来描述内容的结构和含义，以提高可访问性和搜索引擎优化。以下是一些常见的语义化标记示例：</p>
<ul>
<li><code v-pre>&lt;header&gt;</code>：定义文档或区域的页眉。</li>
<li><code v-pre>&lt;nav&gt;</code>：定义导航链接的容器。</li>
<li><code v-pre>&lt;main&gt;</code>：定义文档的主要内容。</li>
<li><code v-pre>&lt;article&gt;</code>：定义一个独立的文章或内容块。</li>
<li><code v-pre>&lt;section&gt;</code>：定义文档中的一个区域。</li>
<li><code v-pre>&lt;aside&gt;</code>：定义与主要内容相关但不属于主要流的部分。</li>
</ul>
<p>语义化标记可以使页面结构更清晰，并帮助辅助技术和搜索引擎更好地理解和处理页面内容。</p>
<h2 id="微数据" tabindex="-1"><a class="header-anchor" href="#微数据" aria-hidden="true">#</a> 微数据</h2>
<p>微数据（Microdata）是用于在 中表示语义信息的一种机制，使搜索引擎能够更准确地理解和解释页面内容。以下是一个示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">itemscope</span> <span class="token attr-name">itemtype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schema.org/Person<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>John Doe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>年龄: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>岁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>职业: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jobTitle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Web Developer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，使用 Microdata 定义了一个人物信息的结构，包括姓名、年龄和职业。这有助于搜索引擎更好地理解和显示页面内容。</p>
<h2 id="访问键盘导航" tabindex="-1"><a class="header-anchor" href="#访问键盘导航" aria-hidden="true">#</a> 访问键盘导航</h2>
<p>通过在 元素中添加快捷键，可以提供访问键盘导航的功能。以下是一个示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">accesskey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">accesskey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关于我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">accesskey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>联系我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code v-pre>accesskey</code> 属性指定了在按下相应快捷键时激活链接。不同浏览器可能有不同的快捷键触发方式。</p>
<h2 id="响应式框架" tabindex="-1"><a class="header-anchor" href="#响应式框架" aria-hidden="true">#</a> 响应式框架</h2>
<p>响应式框架是用于创建适应不同屏幕大小和设备的网页布局的工具。这些框架提供了预定义的 CSS 样式和栅格系统，使网页能够自动适应不同的屏幕宽度。</p>
<p>一些流行的响应式框架包括 Bootstrap、Foundation、Bulma 等。使用这些框架可以快速开发具有响应式布局的网页。</p>
<h2 id="语义化表单验证与-ajax" tabindex="-1"><a class="header-anchor" href="#语义化表单验证与-ajax" aria-hidden="true">#</a> 语义化表单验证与 AJAX</h2>
<p>表单验证用于确保用户输入的合法性，但默认情况下验证是在客户端完成的。如果需要与服务器进行交互或执行更复杂的验证逻辑，可以使用 JavaScript 和 AJAX 技术。</p>
<p>使用 AJAX，可以在用户填写完表单之后，通过异步请求将表单数据发送到服务器端，并对响应进行处理。这样可以实现更高级的表单验证和交互效果。
当然！这里还有更多关于 HTML 的内容：</p>
<h2 id="全球化-internationalization-i18n" tabindex="-1"><a class="header-anchor" href="#全球化-internationalization-i18n" aria-hidden="true">#</a> 全球化（Internationalization, i18n）</h2>
<p>HTML 提供了一些功能来支持全球化，使网页能够适应不同的语言和地区。以下是一些常用的全球化相关的功能：</p>
<ul>
<li><code v-pre>&lt;html lang=&quot;en&quot;&gt;</code>：使用 <code v-pre>lang</code> 属性指定网页的语言。</li>
<li>字符编码：使用 <code v-pre>&lt;meta charset=&quot;UTF-8&quot;&gt;</code> 指定字符编码，使网页能够正确显示各种字符。</li>
<li>文字方向：使用 <code v-pre>dir</code> 属性指定文字方向，如 <code v-pre>dir=&quot;rtl&quot;</code> 表示从右到左的文字方向（如阿拉伯语、希伯来语）。</li>
<li>日期和时间格式：使用 <code v-pre>&lt;time&gt;</code> 元素和 <code v-pre>datetime</code> 属性指定日期和时间的格式。</li>
</ul>
<p>这些功能有助于确保网页在全球范围内能够正确地显示和交互。</p>
<h2 id="web-存储" tabindex="-1"><a class="header-anchor" href="#web-存储" aria-hidden="true">#</a> Web 存储</h2>
<p>HTML5 引入了一些用于在客户端存储数据的机制，称为 Web 存储。以下是几种常见的 Web 存储方式：</p>
<ul>
<li><code v-pre>localStorage</code>：用于在客户端保留持久化数据，并且可以跨会话保留。</li>
<li><code v-pre>sessionStorage</code>：用于在客户端保留会话级别的数据，当会话结束时会被清除。</li>
<li><code v-pre>IndexedDB</code>：用于在客户端存储结构化数据。</li>
<li><code v-pre>Web SQL Database</code>：弃用的技术，用于在客户端创建和管理数据库。</li>
</ul>
<p>这些机制可以用于在客户端存储和管理数据，适用于离线应用、本地缓存等场景。</p>
<h2 id="图形化与绘图" tabindex="-1"><a class="header-anchor" href="#图形化与绘图" aria-hidden="true">#</a> 图形化与绘图</h2>
<p>HTML5 提供了几种响应式的图形化和绘图功能，如 <code v-pre>&lt;canvas&gt;</code> 和 SVG（Scalable Vector Graphics）。以下是一些示例：</p>
<ul>
<li><code v-pre>&lt;canvas&gt;</code>：通过使用 JavaScript 绘制 2D 和 3D 图形。</li>
<li>SVG: 使用 XML 格式定义矢量图形，可缩放且保持清晰。</li>
</ul>
<p>这些功能允许开发人员在网页中创建交互式的图形和绘图效果。</p>
<h2 id="跨文档通信" tabindex="-1"><a class="header-anchor" href="#跨文档通信" aria-hidden="true">#</a> 跨文档通信</h2>
<p>在 HTML 页面之间进行跨文档通信是很常见的需求，HTML5 提供了一些方法来实现这一目的：</p>
<ul>
<li><code v-pre>postMessage()</code> 方法：允许在不同的窗口或框架之间发送消息，以实现跨文档通信。</li>
<li>跨域资源共享（CORS）：允许在不同域之间进行跨域请求，以实现数据交换。</li>
</ul>
<p>这些方法允许不同的 HTML 页面之间进行安全的通信和数据共享。</p>
<h2 id="响应式图片" tabindex="-1"><a class="header-anchor" href="#响应式图片" aria-hidden="true">#</a> 响应式图片</h2>
<p>在不同的设备上显示适应性的图片是一种常见的需求，HTML 提供了一些方法来实现响应式图片：</p>
<ul>
<li><code v-pre>&lt;picture&gt;</code> 元素：可以根据不同的屏幕尺寸和像素密度选择不同的图片资源。</li>
<li><code v-pre>srcset</code> 和 <code v-pre>sizes</code> 属性：用于指定不同宽度的图片源和显示尺寸。</li>
</ul>
<p>使用这些方法，可以根据设备的特性自动选择最适合的图片，并提供更好的用户体验。</p>
<h2 id="浏览器存储" tabindex="-1"><a class="header-anchor" href="#浏览器存储" aria-hidden="true">#</a> 浏览器存储</h2>
<p>除了 Web 存储之外，HTML 还提供了其他一些用于在客户端存储数据的机制：</p>
<ul>
<li>Cookies：用于在客户端存储小量的数据，并且在每次请求时都会发送到服务器。</li>
<li>Application Cache：允许网页在离线状态下访问和加载资源。</li>
</ul>
<p>这些机制可以在客户端存储和管理数据，并提供离线访问和其他功能。</p>
<h2 id="后端集成" tabindex="-1"><a class="header-anchor" href="#后端集成" aria-hidden="true">#</a> 后端集成</h2>
<p>虽然 HTML 主要是一种前端语言，但它也可以与后端技术进行集成，以实现更复杂的功能。常见的后端集成方式包括：</p>
<ul>
<li>使用表单和服务器端脚本语言（如 PHP、Python、Node.js 等）进行数据交互和处理。</li>
<li>使用 AJAX 和服务器端 API 进行异步数据交互。</li>
<li>使用服务器端模板引擎生成 HTML 内容。</li>
</ul>
<p>这些方法使 HTML 能够与后端技术无缝集成，实现更丰富和动态的网页功能。</p>
<h2 id="拖放功能" tabindex="-1"><a class="header-anchor" href="#拖放功能" aria-hidden="true">#</a> 拖放功能</h2>
<p>HTML5 引入了拖放功能，使用户可以拖动元素并将其放置到指定的位置。以下是一些相关的 HTML 拖放事件：</p>
<ul>
<li><code v-pre>dragstart</code>：拖动开始时触发。</li>
<li><code v-pre>drag</code>：正在拖动时触发。</li>
<li><code v-pre>dragenter</code>：拖动元素进入目标元素时触发。</li>
<li><code v-pre>dragover</code>：拖动元素在目标元素上方时触发。</li>
<li><code v-pre>dragleave</code>：拖动元素离开目标元素时触发。</li>
<li><code v-pre>drop</code>：拖动元素在目标元素上释放时触发。</li>
<li><code v-pre>dragend</code>：拖动结束时触发。</li>
</ul>
<p>通过处理这些事件，可以实现自定义的拖放交互和行为。</p>
<h2 id="渐进式网络应用-progressive-web-apps-pwa" tabindex="-1"><a class="header-anchor" href="#渐进式网络应用-progressive-web-apps-pwa" aria-hidden="true">#</a> 渐进式网络应用（Progressive Web Apps, PWA）</h2>
<p>渐进式网络应用是一种结合了传统网页和原生应用功能的应用程序。HTML 提供了一些功能来支持 PWA 的开发：</p>
<ul>
<li>Service Workers：允许使用离线缓存和后台同步功能，使应用能够在离线状态下运行并具有更好的性能。</li>
<li>Web App Manifest：允许定义应用的元数据，如图标、名称、主题色等，从而使应用能够以原生应用的方式显示。</li>
<li>Push Notifications：允许应用向用户发送推送通知。</li>
</ul>
<p>这些功能使得基于 HTML 的 Web 应用能够更接近原生应用的体验，具有更好的离线访问和交互特性。</p>
<h2 id="web-组件" tabindex="-1"><a class="header-anchor" href="#web-组件" aria-hidden="true">#</a> Web 组件</h2>
<p>HTML Web 组件是一种用于封装可重用和独立功能的自定义 HTML 元素。通过使用 HTML 标记、样式和脚本，可以创建自定义的 Web 组件。</p>
<p>使用 Web 组件，可以将复杂的用户界面拆分成多个独立和可重用的组件，从而提高代码的可维护性和可复用性。</p>
<h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2>
<p>HTML5 引入了 <code v-pre>&lt;template&gt;</code> 元素，用于定义页面中可以复制和重用的 HTML 内容。使用模板，可以创建可复用的结构和内容，并在需要时进行克隆和插入。</p>
<p>模板可以通过 JavaScript 脚本来操纵和填充数据，从而实现动态内容的生成。</p>
<h2 id="访问性-accessibility" tabindex="-1"><a class="header-anchor" href="#访问性-accessibility" aria-hidden="true">#</a> 访问性（Accessibility）</h2>
<p>HTML 提供了一些功能来提高网页的可访问性，以确保所有用户，包括视力、听力或移动功能受限的用户，都能够访问和使用网页。以下是一些常见的访问性功能：</p>
<ul>
<li><code v-pre>alt</code> 属性：在 <code v-pre>&lt;img&gt;</code> 元素中使用 <code v-pre>alt</code> 属性提供图像的替代文本，以便屏幕阅读器能够理解图像的内容。</li>
<li><code v-pre>aria-*</code> 属性：用于提供更详细的语义信息，以改善网页在辅助技术中的表现。</li>
<li><code v-pre>tabindex</code> 属性：指定元素的焦点可以通过键盘导航到达，以使页面可访问性更好。</li>
<li><code v-pre>&lt;label&gt;</code> 元素：与表单元素结合使用，提供关联文本以增加可用性。</li>
</ul>
</div></template>


