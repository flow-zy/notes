<template><div><h2 id="引入jquery库" tabindex="-1"><a class="header-anchor" href="#引入jquery库" aria-hidden="true">#</a> 引入jQuery库</h2>
<ul>
<li>下载最新版本的jQuery库并将其引入到HTML文件中。例如：</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://code.jquery.com/jquery-3.6.0.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文档加载事件" tabindex="-1"><a class="header-anchor" href="#文档加载事件" aria-hidden="true">#</a> 文档加载事件</h2>
<ul>
<li>使用<code v-pre>$(document).ready()</code>方法确保代码在文档加载完成后执行。例如：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在这里编写你的代码</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2>
<ul>
<li>使用选择器来选取DOM元素，并对其进行操作或应用事件。例如：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过元素标签名选取元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span> <span class="token comment">// 选取所有的段落元素</span>

<span class="token comment">// 通过ID选取元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span> <span class="token comment">// 选取ID为"myElement"的元素</span>

<span class="token comment">// 通过类名选取元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".example"</span><span class="token punctuation">)</span> <span class="token comment">// 选取所有具有类名"example"的元素</span>

<span class="token comment">// 通过属性选取元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"input[type='text']"</span><span class="token punctuation">)</span> <span class="token comment">// 选取所有type为"text"的输入框元素</span>

<span class="token comment">// 通过父子关系选取元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#parentElement > #childElement"</span><span class="token punctuation">)</span> <span class="token comment">//选取父元素下的子元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h2>
<ul>
<li>使用<code v-pre>.on()</code>方法来绑定事件处理程序。例如：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 点击事件</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在这里编写你的代码</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 鼠标悬停事件</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"mouseover"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在这里编写你的代码</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom操作" tabindex="-1"><a class="header-anchor" href="#dom操作" aria-hidden="true">#</a> DOM操作</h2>
<ul>
<li>使用jQuery对DOM元素进行操作。例如：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 修改元素内容</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"新的文本内容"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取或修改元素属性</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"href"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取href属性</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"href"</span><span class="token punctuation">,</span> <span class="token string">"newLink"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 修改href属性为"newLink"</span>

<span class="token comment">// 添加或移除CSS类</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"highlight"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加CSS类</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">"highlight"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除CSS类</span>

<span class="token comment">// 显示或隐藏元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 插入新的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;p>新的段落&lt;/p>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在元素内部末尾添加新的段落</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string">"&lt;p>新的段落&lt;/p>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在元素内部开头添加新的段落</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token string">"&lt;div>新的元素&lt;/div>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在元素后面添加新的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token string">"&lt;div>新的元素&lt;/div>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在元素前面添加新的元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> AJAX</h2>
<ul>
<li>使用jQuery的AJAX方法与服务器进行数据交互。例如：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 发送GET请求获取JSON数据</span>
$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"data.json"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在这里处理返回的数据</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 发送POST请求提交表单数据</span>
$<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"submit.php"</span><span class="token punctuation">,</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myForm"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在这里处理服务器响应</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动画效果" tabindex="-1"><a class="header-anchor" href="#动画效果" aria-hidden="true">#</a> 动画效果</h2>
<ul>
<li>
<p>jQuery提供了丰富的动画效果和方法，可以让元素以不同的方式显示、隐藏、移动和改变大小。</p>
</li>
<li>
<p>使用<code v-pre>.animate()</code>方法可以创建自定义动画效果：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 淡入淡出效果</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeIn</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 滑动效果</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideDown</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideUp</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 自定义动画效果</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">'250px'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'+=100px'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历和过滤" tabindex="-1"><a class="header-anchor" href="#遍历和过滤" aria-hidden="true">#</a> 遍历和过滤</h2>
<ul>
<li>使用<code v-pre>.each()</code>方法可以遍历集合中的每个元素，并对其执行相同的操作：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在这里编写针对每个li元素的操作</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用过滤选择器可以根据特定的条件筛选元素：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 筛选第一个元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:first"</span><span class="token punctuation">)</span>

<span class="token comment">// 筛选最后一个元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:last"</span><span class="token punctuation">)</span>

<span class="token comment">// 筛选奇数位置的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:odd"</span><span class="token punctuation">)</span>

<span class="token comment">// 筛选包含特定文本的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:contains('apple')"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ajax的进一步使用" tabindex="-1"><a class="header-anchor" href="#ajax的进一步使用" aria-hidden="true">#</a> AJAX的进一步使用</h2>
<ul>
<li>使用<code v-pre>$.ajax()</code>方法可以更灵活地发送HTTP请求，并处理请求和响应的各个阶段。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"data.json"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"GET"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">"json"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求成功时的处理</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span> status<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求失败时的处理</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span> status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求完成时的处理</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2>
<ul>
<li>
<p>jQuery拥有大量的插件可供使用，可以扩展jQuery的功能和效果。</p>
</li>
<li>
<p>插件通常由第三方开发者创建，并提供额外的功能和特性，从图像轮播器到表单验证等等。</p>
</li>
<li>
<p>要使用插件，请先引入相应的插件脚本，并根据插件提供的文档进行配置和调用。</p>
</li>
</ul>
<h2 id="表单操作" tabindex="-1"><a class="header-anchor" href="#表单操作" aria-hidden="true">#</a> 表单操作</h2>
<ul>
<li>使用jQuery可以轻松地操作表单元素，包括获取和设置输入值，验证表单等。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取输入框的值</span>
<span class="token keyword">var</span> inputValue <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置输入框的值</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">"New Value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 验证表单</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myForm"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"请输入内容"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 阻止表单提交</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式操作" tabindex="-1"><a class="header-anchor" href="#样式操作" aria-hidden="true">#</a> 样式操作</h2>
<ul>
<li>使用<code v-pre>.css()</code>方法可以获取和设置元素的样式属性。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取元素的样式属性值</span>
<span class="token keyword">var</span> color <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置元素的样式属性值</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"red"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插入和移除元素" tabindex="-1"><a class="header-anchor" href="#插入和移除元素" aria-hidden="true">#</a> 插入和移除元素</h2>
<ul>
<li>使用<code v-pre>.append()</code>、<code v-pre>.prepend()</code>、<code v-pre>.after()</code>和<code v-pre>.before()</code>等方法可以插入新的元素到DOM中，或者移除现有的元素。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 在元素内部末尾添加新的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"&lt;p>新的段落&lt;/p>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在元素内部开头添加新的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string">"&lt;p>新的段落&lt;/p>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在元素后面添加新的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token string">"&lt;div>新的元素&lt;/div>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在元素前面添加新的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token string">"&lt;div>新的元素&lt;/div>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 移除元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式设计" tabindex="-1"><a class="header-anchor" href="#响应式设计" aria-hidden="true">#</a> 响应式设计</h2>
<ul>
<li>使用<code v-pre>.resize()</code>方法可以在浏览器窗口大小改变时执行相应的操作。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在窗口大小改变时执行的操作</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展jquery" tabindex="-1"><a class="header-anchor" href="#扩展jquery" aria-hidden="true">#</a> 扩展jQuery</h2>
<ul>
<li>如果你希望自定义功能或扩展已有的jQuery方法，可以使用<code v-pre>.fn</code>对象。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 自定义插件</span>
$<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function-variable function">myPlugin</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在这里编写自定义插件的代码</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用自定义插件</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级选择器" tabindex="-1"><a class="header-anchor" href="#高级选择器" aria-hidden="true">#</a> 高级选择器</h2>
<ul>
<li>jQuery提供了许多高级选择器来选择特定类型的元素、根据属性和内容筛选元素等。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 选择可见的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">":visible"</span><span class="token punctuation">)</span>

<span class="token comment">// 选择隐藏的元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">":hidden"</span><span class="token punctuation">)</span>

<span class="token comment">// 选择第一个子元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"parent > :first-child"</span><span class="token punctuation">)</span>

<span class="token comment">// 根据属性选择元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"[name='username']"</span><span class="token punctuation">)</span>

<span class="token comment">// 根据文本内容选择元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p:contains('Hello')"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片和多媒体操作" tabindex="-1"><a class="header-anchor" href="#图片和多媒体操作" aria-hidden="true">#</a> 图片和多媒体操作</h2>
<ul>
<li>使用jQuery可以轻松地加载、显示和操作图像和其他多媒体元素。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 图片加载完成事件</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"load"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 图片加载完成后的处理</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置图像源</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"src"</span><span class="token punctuation">,</span> <span class="token string">"image.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示/隐藏图像</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 播放/暂停视频</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"video"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"video"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="滚动操作" tabindex="-1"><a class="header-anchor" href="#滚动操作" aria-hidden="true">#</a> 滚动操作</h2>
<ul>
<li>使用jQuery可以监听页面的滚动事件，并执行相应的操作。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 监听页面滚动事件</span>
<span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scroll</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在页面滚动时执行的操作</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="19">
<li>动态加载内容：</li>
</ol>
<ul>
<li>使用jQuery的<code v-pre>.load()</code>方法可以通过AJAX从服务器加载HTML内容，并将其添加到页面中。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 加载并插入HTML内容</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">"content.html"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 加载完成后的处理</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h2>
<ul>
<li>使用事件委托可以将事件处理程序绑定到祖先元素上，以处理子元素触发的事件。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 事件委托</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".parent"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token string">".child"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在这里编写处理子元素点击事件的代码</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="父子关系和遍历" tabindex="-1"><a class="header-anchor" href="#父子关系和遍历" aria-hidden="true">#</a> 父子关系和遍历</h2>
<ul>
<li>使用<code v-pre>.parent()</code>方法可以获取元素的父元素，使用<code v-pre>.children()</code>方法可以获取元素的子元素。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取父元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取所有子元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取特定子元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token string">".child"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用<code v-pre>.find()</code>方法可以在后代元素中查找特定的元素。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 在后代元素中查找特定元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">".child"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性操作" tabindex="-1"><a class="header-anchor" href="#属性操作" aria-hidden="true">#</a> 属性操作</h2>
<ul>
<li>使用<code v-pre>.prop()</code>方法可以获取和设置元素的属性值。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取元素的属性值</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">"disabled"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置元素的属性值</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">"disabled"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据存储" tabindex="-1"><a class="header-anchor" href="#数据存储" aria-hidden="true">#</a> 数据存储</h2>
<ul>
<li>使用<code v-pre>.data()</code>方法可以在元素上存储和获取数据。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 存储数据</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取数据</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deferred对象和promise" tabindex="-1"><a class="header-anchor" href="#deferred对象和promise" aria-hidden="true">#</a> Deferred对象和Promise</h2>
<ul>
<li>
<p>jQuery中的Deferred对象和Promise是处理异步操作的强大工具。</p>
</li>
<li>
<p>使用<code v-pre>.Deferred()</code>方法可以创建一个Deferred对象，使用<code v-pre>.promise()</code>方法可以创建一个Promise对象。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建Deferred对象</span>
<span class="token keyword">var</span> deferred <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">Deferred</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建Promise对象</span>
<span class="token keyword">var</span> promise <span class="token operator">=</span> deferred<span class="token punctuation">.</span><span class="token function">promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 异步操作完成时解决Deferred对象</span>
deferred<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听Promise对象的完成事件</span>
promise<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在异步操作完成时执行的代码</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多库共存" tabindex="-1"><a class="header-anchor" href="#多库共存" aria-hidden="true">#</a> 多库共存</h2>
<ul>
<li>如果在同一个页面中同时使用多个JavaScript库（如jQuery和其他库），可以使用<code v-pre>$.noConflict()</code>方法来解决可能的冲突。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> $j <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">noConflict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将jQuery的$符号赋给变量$j，避免冲突</span>

<span class="token comment">// 使用$j来代替$</span>
<span class="token function">$j</span><span class="token punctuation">(</span><span class="token string">"#myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><CommentService /></div></template>


