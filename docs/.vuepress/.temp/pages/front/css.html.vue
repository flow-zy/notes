<template><div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>CSS（Cascading Style Sheets）用于控制网页的样式和布局。</li>
<li>CSS 使网页开发者能够将标记语言（如 HTML、XML）的内容和表示层（样式）分离。</li>
</ul>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<ul>
<li>CSS 规则由选择器和声明块组成。</li>
<li>选择器选择要样式化的元素，声明块中包含一个或多个属性声明，每个声明包含属性和对应的值。</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="书写方式" tabindex="-1"><a class="header-anchor" href="#书写方式" aria-hidden="true">#</a> 书写方式</h2>
<p>在HTML文档中，可以通过以下几种方式来书写CSS代码：</p>
<ol>
<li>外部样式表（External Stylesheet）：
创建一个独立的CSS文件（通常以<code v-pre>.css</code>为后缀），然后使用<code v-pre>link</code>标签将该文件连接到HTML文档中。<code v-pre>link</code>标签应放置在HTML文档的<code v-pre>head</code>标签内。示例：</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在<code v-pre>styles.css</code>文件中编写CSS代码：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
   
<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式适用于对多个页面同时应用相同的样式。</p>
<ol start="2">
<li>内部样式表（Internal Stylesheet）：
在HTML文档的<code v-pre>head</code>标签内，使用<code v-pre>style</code>标签定义CSS样式。在<code v-pre>style</code>标签中，可以直接编写CSS代码。示例：</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
     <span class="token property">background-color</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token selector">h1</span> <span class="token punctuation">{</span>
     <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式适用于仅对当前HTML文档应用特定样式。</p>
<ol start="3">
<li>内联样式（Inline Styles）：
在HTML元素的<code v-pre>style</code>属性中，直接编写CSS样式。示例：</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Hello, World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种方式适用于仅对个别元素应用特定样式。</p>
<p>使用外部样式表和内部样式表可以使CSS代码与HTML代码相分离，更易于维护和管理。内联样式适用于需要对个别元素应用直接的样式调整，但不推荐在整个网页中广泛使用。根据具体需求，在合适的地方选择合适的CSS书写方式。</p>
<h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2>
<p>CSS选择器用于选择要应用样式的HTML元素。以下是一些常见的CSS选择器及其详细解释：</p>
<ul>
<li>元素选择器（Element Selector）:
元素选择器通过HTML元素的名称选择元素。例如，要选择所有的段落元素，可以使用<code v-pre>p</code>选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>类选择器（Class Selector）:
类选择器通过元素的<code v-pre>class</code>属性选择元素。类选择器以点号（.）开头，后面跟着类名。例如，要选择具有<code v-pre>red-text</code>类的元素，可以使用<code v-pre>.red-text</code>选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.red-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>ID选择器（ID Selector）:
ID选择器通过元素的<code v-pre>id</code>属性选择元素。ID选择器以井号（#）开头，后面跟着ID名称。例如，要选择具有<code v-pre>header</code> ID的元素，可以使用<code v-pre>#header</code>选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>后代选择器（Descendant Selector）:
后代选择器选择某个元素的后代元素。后代选择器使用空格分隔不同的元素名称。例如，要选择具有<code v-pre>container</code>类内部的所有段落元素，可以使用<code v-pre>.container p</code>选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container p</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>子元素选择器（Child Selector）:
子元素选择器选择某个元素的直接子元素。子元素选择器使用大于号（&gt;）分隔不同的元素名称。例如，要选择<code v-pre>container</code>类的直接子元素中的段落元素，可以使用<code v-pre>.container &gt; p</code>选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container > p</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>属性选择器（Attribute Selector）:
属性选择器通过元素的属性选择元素。属性选择器可以根据属性的存在、值以及其他匹配条件来选择元素。例如，要选择所有具有<code v-pre>target=&quot;_blank&quot;</code>的链接元素，可以使用<code v-pre>a[target=&quot;_blank&quot;]</code>选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">a[target="_blank"]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>伪类选择器（Pseudo-class Selector）:
伪类选择器用于选择元素的特殊状态或行为。伪类选择器以冒号（:）开头，后面跟着伪类的名称。例如，要选择鼠标悬停在链接上的状态，可以使用<code v-pre>:hover</code>伪类选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>伪元素选择器（Pseudo-element Selector）:
伪元素选择器用于选择元素的特殊部分或位置。伪元素选择器以两个冒号（::）开头，后面跟着伪元素的名称。例如，要选择段落的第一个字母，可以使用<code v-pre>::first-letter</code>伪元素选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p::first-letter</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>相邻兄弟选择器（Adjacent Sibling Selector）:
相邻兄弟选择器选择某个元素之后紧邻的兄弟元素。相邻兄弟选择器使用加号（+）分隔两个选择器。例如，要选择紧跟在<code v-pre>h1</code>元素后面的<code v-pre>p</code>元素，可以使用<code v-pre>h1 + p</code>选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h1 + p</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>全体元素选择器（Universal Selector）:
全体元素选择器选择所有的HTML元素。全体元素选择器使用星号（*）。例如，要选择页面上的所有元素，可以使用<code v-pre>*</code>选择器：</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式属性" tabindex="-1"><a class="header-anchor" href="#样式属性" aria-hidden="true">#</a> 样式属性</h2>
<p>CSS样式属性是用于设置HTML元素的外观和布局的属性。以下是一些常见的CSS样式属性：</p>
<ol>
<li>
<p>盒模型属性（Box Model Properties）：</p>
<ul>
<li><code v-pre>width</code>：设置元素的宽度。</li>
<li><code v-pre>height</code>：设置元素的高度。</li>
<li><code v-pre>margin</code>：设置元素的外边距。</li>
<li><code v-pre>padding</code>：设置元素的内边距。</li>
<li><code v-pre>border</code>：设置元素的边框样式和边框宽度。</li>
<li><code v-pre>box-sizing</code>：控制元素的盒模型计算方式。</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>字体和文本属性（Font and Text Properties）：</p>
<ul>
<li><code v-pre>color</code>：设置文本的颜色。</li>
<li><code v-pre>font-family</code>：设置字体的名称。</li>
<li><code v-pre>font-size</code>：设置字体的大小。</li>
<li><code v-pre>font-weight</code>：设置字体的粗细。</li>
<li><code v-pre>text-align</code>：设置文本的对齐方式。</li>
<li><code v-pre>text-decoration</code>：设置文本的修饰效果，如下划线、删除线等.</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>背景属性（Background Properties）：</p>
<ul>
<li><code v-pre>background-color</code>：设置元素的背景颜色。</li>
<li><code v-pre>background-image</code>：设置元素的背景图片。</li>
<li><code v-pre>background-size</code>：设置背景图片的尺寸。</li>
<li><code v-pre>background-position</code>：设置背景图片的位置。</li>
<li><code v-pre>background-repeat</code>：设置背景图片的重复方式。</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.btn</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"button-bg.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>定位属性（Positioning Properties）：</p>
<ul>
<li><code v-pre>position</code>：设置元素的定位方式。</li>
<li><code v-pre>top</code>、<code v-pre>right</code>、<code v-pre>bottom</code>、<code v-pre>left</code>：设置元素相对于其定位父级的位置。</li>
<li><code v-pre>z-index</code>：设置元素的堆叠顺序。</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>布局属性（Layout Properties）：</p>
<ul>
<li><code v-pre>display</code>：设置元素的显示方式。</li>
<li><code v-pre>float</code>：设置元素的浮动方式。</li>
<li><code v-pre>clear</code>：清除浮动元素对布局的影响。</li>
<li><code v-pre>flex</code>：设置弹性布局的子项属性。</li>
<li><code v-pre>grid</code>：设置网格布局的容器和项目属性。</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.column</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.grid</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>边框属性（Border Properties）：</p>
<ul>
<li><code v-pre>border-style</code>：设置边框的样式。</li>
<li><code v-pre>border-width</code>：设置边框的宽度。</li>
<li><code v-pre>border-color</code>：设置边框的颜色。</li>
<li><code v-pre>border-radius</code>：设置边框的圆角半径。</li>
<li><code v-pre>border</code>：简写属性，同时设置边框的样式、宽度和颜色。</li>
<li><code v-pre>border-top</code>、<code v-pre>border-right</code>、<code v-pre>border-bottom</code>、<code v-pre>border-left</code>：设置单独边框的样式、宽度和颜色。</li>
<li><code v-pre>border-image</code>：使用图片来定义边框样式。</li>
</ul>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>
<p>尺寸属性（Dimension Properties）：</p>
<ul>
<li>
<p><code v-pre>width</code>：设置元素的宽度。</p>
</li>
<li>
<p><code v-pre>height</code>：设置元素的高度。</p>
</li>
<li>
<p><code v-pre>max-width</code>：设置元素的最大宽度限制。</p>
</li>
<li>
<p><code v-pre>max-height</code>：设置元素的最大高度限制。</p>
</li>
<li>
<p><code v-pre>min-width</code>：设置元素的最小宽度限制。</p>
</li>
<li>
<p><code v-pre>min-height</code>：设置元素的最小高度限制。</p>
</li>
<li>
<p><code v-pre>box-sizing</code>：控制元素包含的内容对宽度和高度的影响。</p>
</li>
</ul>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.image</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn</span> <span class="token punctuation">{</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>
<p>动画属性（Animation Properties）：</p>
<p>CSS动画属性用于创建元素的动画效果。你可以使用关键帧（keyframes）规则来定义动画的不同阶段，并使用动画属性来指定动画的细节和行为。</p>
<ul>
<li>
<p><code v-pre>animation-name</code>：指定要应用的关键帧名称。</p>
</li>
<li>
<p><code v-pre>animation-duration</code>：指定动画的持续时间。</p>
</li>
<li>
<p><code v-pre>animation-delay</code>：指定动画开始之前的延迟时间。</p>
</li>
<li>
<p><code v-pre>animation-iteration-count</code>：指定动画的重复次数。</p>
</li>
<li>
<p><code v-pre>animation-timing-function</code>：指定动画的时间函数（用于控制动画的速度变化）。</p>
</li>
<li>
<p><code v-pre>animation-fill-mode</code>：指定动画在非激活状态时（动画结束前和开始之后）的表现方式。</p>
</li>
</ul>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
  <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
  <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9">
<li>
<p>渐变属性（Gradient Properties）：</p>
<p>CSS渐变属性用于创建元素的渐变效果，可以在背景、边框和文本等属性上应用渐变。</p>
<ul>
<li>
<p><code v-pre>background-image</code>：指定背景图片为渐变。</p>
</li>
<li>
<p><code v-pre>background</code>：简写属性，同时设置背景的颜色或图片为渐变。</p>
</li>
<li>
<p><code v-pre>border-image</code>：使用渐变图片作为边框样式。</p>
</li>
<li>
<p><code v-pre>text-fill-color</code>：使用渐变作为文本颜色。</p>
</li>
<li>
<p><code v-pre>mask-image</code>：创建可见部分是渐变的遮罩效果。</p>
</li>
</ul>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #ff0000<span class="token punctuation">,</span> #00ff00<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>#ff0000<span class="token punctuation">,</span> #00ff00<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10.其他常见属性：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.8<span class="token punctuation">;</span>//透明度
<span class="token punctuation">}</span>

<span class="token selector">.text</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>//文本换行
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>//溢出
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>//文本溢出
<span class="token punctuation">}</span>

<span class="token selector">.input</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>//盒子阴影
<span class="token punctuation">}</span>

<span class="token selector">.dropdown</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>//鼠标移入
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单位" tabindex="-1"><a class="header-anchor" href="#单位" aria-hidden="true">#</a> 单位</h2>
<ol>
<li><code v-pre>px</code>（像素）： 像素是最常用的单位，表示屏幕上的一个物理像素点。</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>%</code>（百分比）： 百分比基于父元素的尺寸进行计算。</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><code v-pre>em</code>：相对于元素的字体大小（font-size）来计算。</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li><code v-pre>rem</code>： 相对于根元素（html）的字体大小（font-size）来计算。</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>vh<code v-pre>/</code>vw`： 视口高度（viewport height）和视口宽度（viewport width）的百分比。</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50vh<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 75vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li><code v-pre>pt</code>（点）： 1英寸的1/72大小。</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 24pt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li><code v-pre>cm</code>（厘米）、<code v-pre>mm</code>（毫米）： 以厘米和毫米为单位的长度。</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5cm<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 3mm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li><code v-pre>ex</code>：相对于当前字体中小写字母x的高度。</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 2ex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9">
<li><code v-pre>ch</code>：相对于当前字体中数字0的宽度。</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10ch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，还有一些其他单位可用于地理坐标、时间等特定场景。选择恰当的单位非常重要，因为它会直接影响网页的布局和响应性。</p>
<h2 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h2>
<p>CSS盒模型是一种用于描述网页元素的布局和尺寸的概念。它将每个HTML元素视为一个矩形的盒子，由内容、内边距、边框和外边距组成。以下是CSS盒模型的不同部分：</p>
<ol>
<li>
<p>内容区域（Content）： 这是盒子包含的实际内容，如文本、图像等。</p>
</li>
<li>
<p>内边距（Padding）： 内边距是内容区域与边框之间的区域。它可以在内容和边框之间创建间距。</p>
</li>
<li>
<p>边框（Border）： 边框是围绕内容和内边距的线条或样式。它定义了盒子的可见边界。</p>
</li>
<li>
<p>外边距（Margin）： 外边距是盒子与周围元素之间的空间。它用于在元素之间创建间距。</p>
</li>
</ol>
<p>以下是一个示例，展示了CSS盒模型的不同部分：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>      +----------------+
      |    Margin      |
      |                |
      | +------------+ |
      | |  Padding   | |
      | |            | |
      | | +--------+ | |
      | | | Content| | |
      | | |        | | |
      | | +--------+ | |
      |                |
      +----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在CSS中，可以使用各种属性来控制盒模型的不同部分。例如：</p>
<ul>
<li><code v-pre>width</code> 和 <code v-pre>height</code> 属性用于设置内容区域的宽度和高度。</li>
<li><code v-pre>padding</code> 属性用于设置内边距的大小。</li>
<li><code v-pre>border</code> 属性用于设置边框的样式、宽度和颜色。</li>
<li><code v-pre>margin</code> 属性用于设置外边距的大小。</li>
</ul>
<p>这些属性可以帮助你控制元素的大小、边距和边框，从而实现所需的布局效果。了解并熟练运用CSS盒模型是进行网页布局和设计的基础。</p>
<p>在CSS中，有两种常见的盒模型：标准盒模型和IE盒模型（也称为怪异盒模型）。</p>
<ol>
<li>
<p>标准盒模型：
标准盒模型是CSS中的默认盒模型。它包括内容区域、内边距、边框和外边距。元素的宽度和高度属性（如<code v-pre>width</code>和<code v-pre>height</code>）只会影响内容区域的尺寸，而内边距和边框会增加元素的总尺寸。</p>
<img src="https://img1.baidu.com/it/u=3153382498,1133393016&fm=253&fmt=auto&app=138&f=PNG?w=646&h=500" alt="Standard Box Model" style="zoom:50%;" />
</li>
<li>
<p>IE盒模型（怪异盒模型）：
IE盒模型是在早期的Internet Explorer版本中引入的盒模型。在IE盒模型中，元素的宽度和高度属性（如<code v-pre>width</code>和<code v-pre>height</code>）会包括内容区域、内边距和边框，而不会计算外边距。这导致元素的总尺寸大于在标准盒模型下相同的宽度和高度属性。</p>
</li>
</ol>
  <img src="https://img1.sycdn.imooc.com/5d01f11c00013e1712800720.jpg" alt="IE Box Model" style="zoom:50%;" />
<p>为了改变盒模型的类型，可以使用<code v-pre>box-sizing</code>属性。默认情况下，<code v-pre>box-sizing</code>属性的值为<code v-pre>content-box</code>，即标准盒模型。如果想切换到IE盒模型（怪异盒模型），可以将<code v-pre>box-sizing</code>属性设置为<code v-pre>border-box</code>。示例如下：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，元素的宽度和高度属性将包括内边距和边框，而不会增加元素的总尺寸。</p>
<p>通过改变盒模型的类型，可以对元素的布局和尺寸产生不同的影响。具体使用哪种盒模型取决于你的需求和个人偏好。标准盒模型更常用，但在某些情况下，IE盒模型可能提供更方便的尺寸计算。</p>
<h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2>
<p>CSS布局是指通过CSS样式来安排和组织网页中的元素，以实现所需的页面结构和视觉效果。以下是一些常见的CSS布局技术：</p>
<ol>
<li>
<p>流式布局（Flow Layout）：
流式布局是默认的布局方式，在这种布局中，元素按照其在HTML文档中的顺序自动流动。元素的位置由其前面的元素决定，会根据浏览器视口的大小而自动调整。这种布局适合简单的网页结构。例如：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Paragraph 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Paragraph 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Paragraph 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>相对定位（Relative Positioning）：
使用<code v-pre>position: absolute;</code>属性可以将元素从正常文档流中脱离，相对于最近的具有定位属性（比如父级元素）的祖先元素进行定位。通过设置<code v-pre>top</code>、<code v-pre>right</code>、<code v-pre>bottom</code>和<code v-pre>left</code>属性，可以精确控制元素的位置。例如：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>绝对定位（Absolute Positioning）：
使用<code v-pre>position: absolute;</code>属性可以将元素从正常文档流中脱离，相对于最近的具有定位属性（比如父级元素）的祖先元素进行定位。通过设置<code v-pre>top</code>、<code v-pre>right</code>、<code v-pre>bottom</code>和<code v-pre>left</code>属性，可以精确控制元素的位置。例如：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>浮动（Float）：</p>
<p>使用<code v-pre>float</code>属性可以将元素从正常文档流中脱离，并使其浮动到其容器的左侧或右侧。浮动元素可以使其他元素环绕在其周围。常用于创建多列布局。例如：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>网格布局（Grid Layout）：
CSS网格布局是一个强大的布局系统，可以将网页的内容划分为列和行，使其更灵活和响应式地适应不同的屏幕尺寸和布局需求。通过使用<code v-pre>display: grid;</code>和相关属性，可以创建复杂的网格布局。例如：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr 1fr<span class="token punctuation">;</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>弹性布局（Flexbox Layout）：
CSS弹性布局是一种用于创建灵活和响应式布局的技术。通过使用<code v-pre>display: flex;</code>和相关属性，可以将容器中的元素放置在一条或多条轴上，并灵活地调整元素的大小、顺序和对齐方式。例如：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="响应式设计" tabindex="-1"><a class="header-anchor" href="#响应式设计" aria-hidden="true">#</a> 响应式设计</h2>
<p>CSS响应式设计是一种让网页在不同设备上自适应布局和样式的技术。通过使用媒体查询（Media Queries）和流动单元（Fluid Units），可以根据不同的屏幕尺寸和特定的设备要求，动态地改变网页的外观和布局。</p>
<p>下面是一些常见的用于实现响应式设计的CSS技术和方法：</p>
<ol>
<li>
<p>媒体查询（Media Queries）：使用媒体查询可以根据不同的媒体类型和特定的CSS条件，应用不同的样式规则。比如，你可以根据屏幕宽度来应用不同的样式，以适应不同的设备尺寸。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* 在屏幕宽度小于等于768px时应用的样式 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>流动单元（Fluid Units）：使用相对单位（如百分比、vw/vh）而不是固定像素值来设置元素的尺寸和间距。这样，元素的大小会相对于父元素或视口的大小进行调整，使得布局更加灵活适应不同的屏幕大小。</p>
</li>
<li>
<p>弹性盒子布局（Flexbox）：Flexbox 是一种用于灵活布局元素的 CSS 布局模型。通过将容器元素设置为 <code v-pre>display: flex;</code>，并使用弹性盒子属性来定义子元素的大小和排列方式，可以轻松实现响应式布局。</p>
</li>
<li>
<p>网格布局（CSS Grid）：CSS Grid 是一种二维布局系统，通过将网页划分为行和列的网格，可以更精确地控制元素的位置和大小。它可以在不同的屏幕尺寸上创建灵活的、自适应的布局。</p>
</li>
<li>
<p>图片自适应：通过使用 <code v-pre>max-width: 100%;</code> 和 <code v-pre>height: auto;</code> 来使图片在不同屏幕上自适应大小，避免图片溢出或变形。</p>
</li>
</ol>
<p>通过结合使用这些技术和方法，可以创建出具有良好响应性的网页设计，使网页在各种设备上都能提供优秀的用户体验。</p>
<h2 id="css3-功能" tabindex="-1"><a class="header-anchor" href="#css3-功能" aria-hidden="true">#</a> CSS3 功能</h2>
<p>当涉及到CSS3的新功能时，以下是更详细的介绍：</p>
<h3 id="_2d和3d转换-2d-and-3d-transforms" tabindex="-1"><a class="header-anchor" href="#_2d和3d转换-2d-and-3d-transforms" aria-hidden="true">#</a> 2D和3D转换（2D and 3D Transforms）</h3>
<p>CSS3引入了一组转换属性（<code v-pre>transform</code>）来改变元素的形状、大小和方向。这些属性包括<code v-pre>translate</code>、<code v-pre>scale</code>、<code v-pre>rotate</code>和<code v-pre>skew</code>等。可以通过指定不同的转换属性值将元素平移、缩放、旋转和倾斜，创造出一些有趣和交互性的效果。还可以使用<code v-pre>perspective</code>属性创建一个3D透视效果，使元素看起来具有立体感。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过渡-transitions" tabindex="-1"><a class="header-anchor" href="#过渡-transitions" aria-hidden="true">#</a> 过渡（Transitions）</h3>
<p>过渡属性（<code v-pre>transition</code>）允许你在元素的属性发生改变时，应用一种平滑的效果来实现过渡。通过指定过渡的属性、持续时间、延迟和过渡函数等，可以控制过渡效果的速度和样式。过渡可以应用于许多属性，如颜色、大小、位置和透明度等。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> width 1s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:hover</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动画-animations" tabindex="-1"><a class="header-anchor" href="#动画-animations" aria-hidden="true">#</a> 动画（Animations）</h3>
<p>动画功能通过<code v-pre>@keyframes</code>规则和<code v-pre>animation</code>属性，可以让元素实现更复杂和精细的动画效果。通过在<code v-pre>@keyframes</code>规则中定义关键帧（关键时间点）和关键帧之间的过渡状态，然后使用<code v-pre>animation</code>属性将动画应用到元素上，可以指定动画的名称、持续时间、延迟、重复次数和播放模式等。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> slide-in</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> slide-in 1s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渐变-gradients" tabindex="-1"><a class="header-anchor" href="#渐变-gradients" aria-hidden="true">#</a> 渐变（Gradients）</h3>
<p>渐变可用于创建平滑过渡的背景。CSS3提供了线性渐变（由一种颜色向另一种颜色逐渐过渡）和径向渐变（从中心点向外辐射的颜色过渡）两种类型。可以通过<code v-pre>linear-gradient()</code>和<code v-pre>radial-gradient()</code>函数来指定渐变的颜色和起止位置，可以在背景属性中使用渐变作为背景图像。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多列布局-multi-column-layout" tabindex="-1"><a class="header-anchor" href="#多列布局-multi-column-layout" aria-hidden="true">#</a> 多列布局（Multi-column Layout）</h3>
<p>多列布局允许将文本内容分割成多个列来显示。通过<code v-pre>column-count</code>和<code v-pre>column-width</code>等属性，可以控制列的数量和宽度。这种布局类似于报纸的版面布局，可以让文本内容更好地利用空间。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">column-count</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">column-width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="弹性盒子-flexbox" tabindex="-1"><a class="header-anchor" href="#弹性盒子-flexbox" aria-hidden="true">#</a> 弹性盒子（Flexbox）</h3>
<p>弹性盒子布局提供了一种简单、灵活的方法来创建响应式和可伸缩的布局。通过将容器元素的<code v-pre>display</code>属性设置为<code v-pre>flex</code>，可以使用弹性盒子属性来定位和排列子元素，如<code v-pre>justify-content</code>控制主轴上元素的对齐方式，<code v-pre>align-items</code>控制交叉轴上元素的对齐方式。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网格布局-css-grid" tabindex="-1"><a class="header-anchor" href="#网格布局-css-grid" aria-hidden="true">#</a> 网格布局（CSS Grid）</h3>
<p>网格布局是一种二维布局系统，通过将元素划分为行和列的网格，可以创建复杂的布局。通过设置容器元素的<code v-pre>display</code>属性为<code v-pre>grid</code>，并使用网格属性（如<code v-pre>grid-template-columns</code>、<code v-pre>grid-template-rows</code>、<code v-pre>grid-gap</code>等）来定义和调整网格布局。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr 1fr<span class="token punctuation">;</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="媒体查询-media-queries" tabindex="-1"><a class="header-anchor" href="#媒体查询-media-queries" aria-hidden="true">#</a> 媒体查询（Media Queries）</h3>
<p>媒体查询允许根据设备特性和视口尺寸应用不同的样式。通过在CSS样式表中使用<code v-pre>@media</code>规则，可以针对不同的媒体类型（如屏幕或打印机）、不同的设备宽度和高度等条件，编写对应的样式规则。这使得可以创建响应式设计，从而在不同的设备上提供最佳的用户体验。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景-background" tabindex="-1"><a class="header-anchor" href="#背景-background" aria-hidden="true">#</a> 背景（BackGround）</h3>
<p>能够更灵活地控制元素的背景效果，实现更多样化和富有创意的设计.</p>
<ul>
<li>
<p><code v-pre>background-size</code>：用于定义背景图像的尺寸大小。可以使用像素值、百分比或关键字（如<code v-pre>cover</code>和<code v-pre>contain</code>）来设置背景图像的宽度和高度。</p>
</li>
<li>
<p><code v-pre>background-origin</code>：控制背景图像的起始位置。可以设置为<code v-pre>content-box</code>、<code v-pre>padding-box</code>或<code v-pre>border-box</code>，以指定背景图像相对于内容框、内边距框或边框框之间的位置。</p>
</li>
<li>
<p><code v-pre>background-clip</code>：控制背景图像的显示范围。可以设置为<code v-pre>content-box</code>、<code v-pre>padding-box</code>或<code v-pre>border-box</code>，以指定背景图像是否应裁剪到内容框、内边距框或边框框之内。</p>
</li>
<li>
<p><code v-pre>background-origin</code>和<code v-pre>background-clip</code>的组合使用：</p>
</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"image.jpg"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-origin</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子将背景图像应用于<code v-pre>div</code>元素，背景图像的起始位置相对于内容框，而背景图像的显示范围相对于内边距框。</p>
<ul>
<li>
<p><code v-pre>background-repeat</code>：控制背景图像的重复方式。可以设置为<code v-pre>repeat</code>（默认值，在水平和垂直方向上重复）、<code v-pre>repeat-x</code>（仅在水平方向上重复）、<code v-pre>repeat-y</code>（仅在垂直方向上重复）或<code v-pre>no-repeat</code>（不重复）。</p>
</li>
<li>
<p><code v-pre>background-attachment</code>：控制背景图像的滚动方式。可以设置为<code v-pre>scroll</code>（默认值，在元素滚动时背景图像也跟随滚动）、<code v-pre>fixed</code>（固定在元素区域不随滚动而移动）或<code v-pre>local</code>（背景图像随元素内部内容滚动）。</p>
</li>
<li>
<p><code v-pre>background-image</code>：允许使用多个背景图像来创建复合背景效果。可以使用逗号分隔多个值，每个值表示一个背景图像的URL。</p>
</li>
</ul>
</div></template>


