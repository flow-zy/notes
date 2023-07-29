---
title: CSS
#NavLink
prev:
  text: HTML
  link: /front/html
next:
  text: Javascript
  link: /front/javascript
---
## 介绍

- CSS（Cascading Style Sheets）用于控制网页的样式和布局。
- CSS 使网页开发者能够将标记语言（如 HTML、XML）的内容和表示层（样式）分离。

## 语法

- CSS 规则由选择器和声明块组成。
- 选择器选择要样式化的元素，声明块中包含一个或多个属性声明，每个声明包含属性和对应的值。

``` css
p {
  color: red;
}

```

## 书写方式

在HTML文档中，可以通过以下几种方式来书写CSS代码：

1. 外部样式表（External Stylesheet）：
   创建一个独立的CSS文件（通常以`.css`为后缀），然后使用`link`标签将该文件连接到HTML文档中。`link`标签应放置在HTML文档的`head`标签内。示例：

   ```html
   <head>
     <link rel="stylesheet" href="styles.css">
   </head>
   ```

   然后，在`styles.css`文件中编写CSS代码：

   ```css
   body {
     background-color: #f1f1f1;
   }
   
   h1 {
     color: blue;
   }
   ```

   这种方式适用于对多个页面同时应用相同的样式。

2. 内部样式表（Internal Stylesheet）：
   在HTML文档的`head`标签内，使用`style`标签定义CSS样式。在`style`标签中，可以直接编写CSS代码。示例：

   ```html
   <head>
     <style>
       body {
         background-color: #f1f1f1;
       }
       
       h1 {
         color: blue;
       }
     </style>
   </head>
   ```

   这种方式适用于仅对当前HTML文档应用特定样式。

3. 内联样式（Inline Styles）：
   在HTML元素的`style`属性中，直接编写CSS样式。示例：

   ```html
   <h1 style="color: blue;">Hello, World!</h1>
   ```

   这种方式适用于仅对个别元素应用特定样式。

使用外部样式表和内部样式表可以使CSS代码与HTML代码相分离，更易于维护和管理。内联样式适用于需要对个别元素应用直接的样式调整，但不推荐在整个网页中广泛使用。根据具体需求，在合适的地方选择合适的CSS书写方式。

## 选择器

CSS选择器用于选择要应用样式的HTML元素。以下是一些常见的CSS选择器及其详细解释：

- 元素选择器（Element Selector）:
元素选择器通过HTML元素的名称选择元素。例如，要选择所有的段落元素，可以使用`p`选择器：

```css
p {
  color: blue;
}
```

- 类选择器（Class Selector）:
类选择器通过元素的`class`属性选择元素。类选择器以点号（.）开头，后面跟着类名。例如，要选择具有`red-text`类的元素，可以使用`.red-text`选择器：

```css
.red-text {
  color: red;
}
```

- ID选择器（ID Selector）:
ID选择器通过元素的`id`属性选择元素。ID选择器以井号（#）开头，后面跟着ID名称。例如，要选择具有`header` ID的元素，可以使用`#header`选择器：

```css
#header {
  font-size: 24px;
}
```

- 后代选择器（Descendant Selector）:
后代选择器选择某个元素的后代元素。后代选择器使用空格分隔不同的元素名称。例如，要选择具有`container`类内部的所有段落元素，可以使用`.container p`选择器：

```css
.container p {
  margin: 10px;
}
```

- 子元素选择器（Child Selector）:
子元素选择器选择某个元素的直接子元素。子元素选择器使用大于号（>）分隔不同的元素名称。例如，要选择`container`类的直接子元素中的段落元素，可以使用`.container > p`选择器：

```css
.container > p {
  margin: 10px;
}
```

- 属性选择器（Attribute Selector）:
属性选择器通过元素的属性选择元素。属性选择器可以根据属性的存在、值以及其他匹配条件来选择元素。例如，要选择所有具有`target="_blank"`的链接元素，可以使用`a[target="_blank"]`选择器：

```css
a[target="_blank"] {
  color: blue;
}
```

- 伪类选择器（Pseudo-class Selector）:
伪类选择器用于选择元素的特殊状态或行为。伪类选择器以冒号（:）开头，后面跟着伪类的名称。例如，要选择鼠标悬停在链接上的状态，可以使用`:hover`伪类选择器：

```css
a:hover {
  color: red;
}
```

- 伪元素选择器（Pseudo-element Selector）:
伪元素选择器用于选择元素的特殊部分或位置。伪元素选择器以两个冒号（::）开头，后面跟着伪元素的名称。例如，要选择段落的第一个字母，可以使用`::first-letter`伪元素选择器：

```css
p::first-letter {
  font-size: 24px;
}
```

- 相邻兄弟选择器（Adjacent Sibling Selector）:
相邻兄弟选择器选择某个元素之后紧邻的兄弟元素。相邻兄弟选择器使用加号（+）分隔两个选择器。例如，要选择紧跟在`h1`元素后面的`p`元素，可以使用`h1 + p`选择器：

```css
h1 + p {
  font-style: italic;
}
```

- 全体元素选择器（Universal Selector）:
全体元素选择器选择所有的HTML元素。全体元素选择器使用星号（*）。例如，要选择页面上的所有元素，可以使用`*`选择器：

```css
* {
  margin: 0;
  padding: 0;
}
```

## 样式属性

CSS样式属性是用于设置HTML元素的外观和布局的属性。以下是一些常见的CSS样式属性：

1. 盒模型属性（Box Model Properties）：
   - `width`：设置元素的宽度。
   - `height`：设置元素的高度。
   - `margin`：设置元素的外边距。
   - `padding`：设置元素的内边距。
   - `border`：设置元素的边框样式和边框宽度。
   - `box-sizing`：控制元素的盒模型计算方式。

   ```css
   .box {
     width: 200px;
     height: 150px;
     margin: 10px;
     padding: 20px;
     border: 1px solid #ccc;
     box-sizing: border-box;
   }
   ```

2. 字体和文本属性（Font and Text Properties）：
   - `color`：设置文本的颜色。
   - `font-family`：设置字体的名称。
   - `font-size`：设置字体的大小。
   - `font-weight`：设置字体的粗细。
   - `text-align`：设置文本的对齐方式。
   - `text-decoration`：设置文本的修饰效果，如下划线、删除线等.

   ```css
   h1 {
     color: blue;
     font-family: Arial, sans-serif;
     font-size: 24px;
     font-weight: bold;
     text-align: center;
     text-decoration: underline;
   }
   ```

3. 背景属性（Background Properties）：
   - `background-color`：设置元素的背景颜色。
   - `background-image`：设置元素的背景图片。
   - `background-size`：设置背景图片的尺寸。
   - `background-position`：设置背景图片的位置。
   - `background-repeat`：设置背景图片的重复方式。

   ```css
   .btn {
     background-color: #ff0000;
     background-image: url("button-bg.png");
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
   }
   ```

4. 定位属性（Positioning Properties）：
   - `position`：设置元素的定位方式。
   - `top`、`right`、`bottom`、`left`：设置元素相对于其定位父级的位置。
   - `z-index`：设置元素的堆叠顺序。

   ```css
   .header {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     background-color: #333;
     color: #fff;
     padding: 10px;
     z-index: 999;
   }
   ```

5. 布局属性（Layout Properties）：
   - `display`：设置元素的显示方式。
   - `float`：设置元素的浮动方式。
   - `clear`：清除浮动元素对布局的影响。
   - `flex`：设置弹性布局的子项属性。
   - `grid`：设置网格布局的容器和项目属性。

   ```css
   .container {
     display: flex;
     justify-content: space-between;
   }
   
   .column {
     width: 30%;
   }
   
   .grid {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-gap: 10px;
   }
   ```

6. 边框属性（Border Properties）：
   - `border-style`：设置边框的样式。
   - `border-width`：设置边框的宽度。
   - `border-color`：设置边框的颜色。
   - `border-radius`：设置边框的圆角半径。
   - `border`：简写属性，同时设置边框的样式、宽度和颜色。
   - `border-top`、`border-right`、`border-bottom`、`border-left`：设置单独边框的样式、宽度和颜色。
   - `border-image`：使用图片来定义边框样式。

```css
.box {
  border: 1px solid red;
  border-radius: 5px;
}
```

7.尺寸属性（Dimension Properties）：

   - `width`：设置元素的宽度。

   - `height`：设置元素的高度。

   - `max-width`：设置元素的最大宽度限制。

   - `max-height`：设置元素的最大高度限制。
   - `min-width`：设置元素的最小宽度限制。
   - `min-height`：设置元素的最小高度限制。
   - `box-sizing`：控制元素包含的内容对宽度和高度的影响。

```css
.image {
  width: 100%;
  height: auto;
}

.container {
  width: 50%;
  max-width: 800px;
}

.btn {
  min-width: 120px;
}
```

8. 动画属性（Animation Properties）：

   CSS动画属性用于创建元素的动画效果。你可以使用关键帧（keyframes）规则来定义动画的不同阶段，并使用动画属性来指定动画的细节和行为。

   - `animation-name`：指定要应用的关键帧名称。

   - `animation-duration`：指定动画的持续时间。

   - `animation-delay`：指定动画开始之前的延迟时间。

   - `animation-iteration-count`：指定动画的重复次数。

   - `animation-timing-function`：指定动画的时间函数（用于控制动画的速度变化）。

   - `animation-fill-mode`：指定动画在非激活状态时（动画结束前和开始之后）的表现方式。

```css
.box {
  animation-name: move;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes move {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}
```

9. 渐变属性（Gradient Properties）：

   CSS渐变属性用于创建元素的渐变效果，可以在背景、边框和文本等属性上应用渐变。

   - `background-image`：指定背景图片为渐变。

   - `background`：简写属性，同时设置背景的颜色或图片为渐变。

   - `border-image`：使用渐变图片作为边框样式。

   - `text-fill-color`：使用渐变作为文本颜色。

   - `mask-image`：创建可见部分是渐变的遮罩效果。

```css
.box {
  background: linear-gradient(to right, #ff0000, #00ff00);
}

.btn {
  background: radial-gradient(#ff0000, #00ff00);
}
```

10.其他常见属性：

```css
.box {
  opacity: 0.8;//透明度
}

.text {
  white-space: nowrap;//文本换行
  overflow: hidden;//溢出
  text-overflow: ellipsis;//文本溢出
}

.input {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);//盒子阴影
}

.dropdown {
  cursor: pointer;//鼠标移入
  pointer-events: none;
}

```

## 单位

1. `px`（像素）： 像素是最常用的单位，表示屏幕上的一个物理像素点。

```css
div {
  width: 200px;
  height: 150px;
}
```

2.`%`（百分比）： 百分比基于父元素的尺寸进行计算。

```css
div {
  width: 50%;
  height: 50%;
}
```

3.`em`：相对于元素的字体大小（font-size）来计算。

```css
p {
  font-size: 16px;
  margin: 0.5em;
}
```

4.`rem`： 相对于根元素（html）的字体大小（font-size）来计算。

```css
p {
  font-size: 16px;
  margin: 1rem;
}
```

5.vh` / `vw`： 视口高度（viewport height）和视口宽度（viewport width）的百分比。

```css
div {
  height: 50vh;
  width: 75vw;
}
```

6.`pt`（点）： 1英寸的1/72大小。

```css
h1 {
  font-size: 24pt;
}
```

7.`cm`（厘米）、`mm`（毫米）： 以厘米和毫米为单位的长度。

```css
img {
  width: 5cm;
  height: 3mm;
}
```

8.`ex`：相对于当前字体中小写字母x的高度。

```css
p {
  line-height: 2ex;
}
```

9.`ch`：相对于当前字体中数字0的宽度。

```css
p {
  width: 10ch;
}
```

此外，还有一些其他单位可用于地理坐标、时间等特定场景。选择恰当的单位非常重要，因为它会直接影响网页的布局和响应性。

## 盒模型

CSS盒模型是一种用于描述网页元素的布局和尺寸的概念。它将每个HTML元素视为一个矩形的盒子，由内容、内边距、边框和外边距组成。以下是CSS盒模型的不同部分：

1. 内容区域（Content）： 这是盒子包含的实际内容，如文本、图像等。

2. 内边距（Padding）： 内边距是内容区域与边框之间的区域。它可以在内容和边框之间创建间距。

3. 边框（Border）： 边框是围绕内容和内边距的线条或样式。它定义了盒子的可见边界。

4. 外边距（Margin）： 外边距是盒子与周围元素之间的空间。它用于在元素之间创建间距。

以下是一个示例，展示了CSS盒模型的不同部分：

```
      +----------------+
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
```

在CSS中，可以使用各种属性来控制盒模型的不同部分。例如：

- `width` 和 `height` 属性用于设置内容区域的宽度和高度。
- `padding` 属性用于设置内边距的大小。
- `border` 属性用于设置边框的样式、宽度和颜色。
- `margin` 属性用于设置外边距的大小。

这些属性可以帮助你控制元素的大小、边距和边框，从而实现所需的布局效果。了解并熟练运用CSS盒模型是进行网页布局和设计的基础。

在CSS中，有两种常见的盒模型：标准盒模型和IE盒模型（也称为怪异盒模型）。

1. 标准盒模型：
   标准盒模型是CSS中的默认盒模型。它包括内容区域、内边距、边框和外边距。元素的宽度和高度属性（如`width`和`height`）只会影响内容区域的尺寸，而内边距和边框会增加元素的总尺寸。

   `<img src="https://img1.baidu.com/it/u=3153382498,1133393016&fm=253&fmt=auto&app=138&f=PNG?w=646&h=500" alt="Standard Box Model" style="zoom:50%;" />`

2. IE盒模型（怪异盒模型）：
   IE盒模型是在早期的Internet Explorer版本中引入的盒模型。在IE盒模型中，元素的宽度和高度属性（如`width`和`height`）会包括内容区域、内边距和边框，而不会计算外边距。这导致元素的总尺寸大于在标准盒模型下相同的宽度和高度属性。

  `<img src="https://img1.sycdn.imooc.com/5d01f11c00013e1712800720.jpg" alt="IE Box Model" style="zoom:50%;" />`

为了改变盒模型的类型，可以使用`box-sizing`属性。默认情况下，`box-sizing`属性的值为`content-box`，即标准盒模型。如果想切换到IE盒模型（怪异盒模型），可以将`box-sizing`属性设置为`border-box`。示例如下：

```css
div {
  box-sizing: border-box;
}
```

这样，元素的宽度和高度属性将包括内边距和边框，而不会增加元素的总尺寸。

通过改变盒模型的类型，可以对元素的布局和尺寸产生不同的影响。具体使用哪种盒模型取决于你的需求和个人偏好。标准盒模型更常用，但在某些情况下，IE盒模型可能提供更方便的尺寸计算。

## 布局

CSS布局是指通过CSS样式来安排和组织网页中的元素，以实现所需的页面结构和视觉效果。以下是一些常见的CSS布局技术：

1. 流式布局（Flow Layout）：
   流式布局是默认的布局方式，在这种布局中，元素按照其在HTML文档中的顺序自动流动。元素的位置由其前面的元素决定，会根据浏览器视口的大小而自动调整。这种布局适合简单的网页结构。例如：

   ```html
   <div>
     <p>Paragraph 1</p>
     <p>Paragraph 2</p>
     <p>Paragraph 3</p>
   </div>
   ```

2. 相对定位（Relative Positioning）：
   使用`position: absolute;`属性可以将元素从正常文档流中脱离，相对于最近的具有定位属性（比如父级元素）的祖先元素进行定位。通过设置`top`、`right`、`bottom`和`left`属性，可以精确控制元素的位置。例如：

   ```css
   .box {
     position: relative;
     top: 20px;
     left: 30px;
   }
   ```

3. 绝对定位（Absolute Positioning）：
   使用`position: absolute;`属性可以将元素从正常文档流中脱离，相对于最近的具有定位属性（比如父级元素）的祖先元素进行定位。通过设置`top`、`right`、`bottom`和`left`属性，可以精确控制元素的位置。例如：

   ```css
   .container {
     position: relative;
   }
   
   .box {
     position: absolute;
     top: 50px;
     left: 100px;
   }
   ```

4. 浮动（Float）：

   使用`float`属性可以将元素从正常文档流中脱离，并使其浮动到其容器的左侧或右侧。浮动元素可以使其他元素环绕在其周围。常用于创建多列布局。例如：

   ```css
   .left {
     float: left;
     width: 200px;
   }
   
   .right {
     float: right;
     width: 300px;
   }
   ```

5. 网格布局（Grid Layout）：
   CSS网格布局是一个强大的布局系统，可以将网页的内容划分为列和行，使其更灵活和响应式地适应不同的屏幕尺寸和布局需求。通过使用`display: grid;`和相关属性，可以创建复杂的网格布局。例如：

   ```css
   .container {
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     grid-gap: 10px;
   }
   
   .item {
     background-color: #ddd;
     padding: 10px;
   }
   ```

6. 弹性布局（Flexbox Layout）：
   CSS弹性布局是一种用于创建灵活和响应式布局的技术。通过使用`display: flex;`和相关属性，可以将容器中的元素放置在一条或多条轴上，并灵活地调整元素的大小、顺序和对齐方式。例如：

   ```css
   .container {
     display: flex;
     justify-content: space-between;
   }
   
   .item {
     flex-basis: 30%;
   }
   ```

## 响应式设计

CSS响应式设计是一种让网页在不同设备上自适应布局和样式的技术。通过使用媒体查询（Media Queries）和流动单元（Fluid Units），可以根据不同的屏幕尺寸和特定的设备要求，动态地改变网页的外观和布局。

下面是一些常见的用于实现响应式设计的CSS技术和方法：

1. 媒体查询（Media Queries）：使用媒体查询可以根据不同的媒体类型和特定的CSS条件，应用不同的样式规则。比如，你可以根据屏幕宽度来应用不同的样式，以适应不同的设备尺寸。

   ```css
   @media screen and (max-width: 768px) {
     /* 在屏幕宽度小于等于768px时应用的样式 */
   }
   ```

2. 流动单元（Fluid Units）：使用相对单位（如百分比、vw/vh）而不是固定像素值来设置元素的尺寸和间距。这样，元素的大小会相对于父元素或视口的大小进行调整，使得布局更加灵活适应不同的屏幕大小。

3. 弹性盒子布局（Flexbox）：Flexbox 是一种用于灵活布局元素的 CSS 布局模型。通过将容器元素设置为 `display: flex;`，并使用弹性盒子属性来定义子元素的大小和排列方式，可以轻松实现响应式布局。

4. 网格布局（CSS Grid）：CSS Grid 是一种二维布局系统，通过将网页划分为行和列的网格，可以更精确地控制元素的位置和大小。它可以在不同的屏幕尺寸上创建灵活的、自适应的布局。

5. 图片自适应：通过使用 `max-width: 100%;` 和 `height: auto;` 来使图片在不同屏幕上自适应大小，避免图片溢出或变形。

通过结合使用这些技术和方法，可以创建出具有良好响应性的网页设计，使网页在各种设备上都能提供优秀的用户体验。

## CSS3 功能

当涉及到CSS3的新功能时，以下是更详细的介绍：

### 2D和3D转换（2D and 3D Transforms）

CSS3引入了一组转换属性（`transform`）来改变元素的形状、大小和方向。这些属性包括`translate`、`scale`、`rotate`和`skew`等。可以通过指定不同的转换属性值将元素平移、缩放、旋转和倾斜，创造出一些有趣和交互性的效果。还可以使用`perspective`属性创建一个3D透视效果，使元素看起来具有立体感。

   ```css
   div {
     transform: translateX(100px);
   }
   ```

### 过渡（Transitions）

过渡属性（`transition`）允许你在元素的属性发生改变时，应用一种平滑的效果来实现过渡。通过指定过渡的属性、持续时间、延迟和过渡函数等，可以控制过渡效果的速度和样式。过渡可以应用于许多属性，如颜色、大小、位置和透明度等。

   ```css
   div {
     transition: width 1s ease-in-out;
   }
   
   div:hover {
     width: 200px;
   }
   ```

### 动画（Animations）

动画功能通过`@keyframes`规则和`animation`属性，可以让元素实现更复杂和精细的动画效果。通过在`@keyframes`规则中定义关键帧（关键时间点）和关键帧之间的过渡状态，然后使用`animation`属性将动画应用到元素上，可以指定动画的名称、持续时间、延迟、重复次数和播放模式等。

   ```css
   @keyframes slide-in {
     0% {
       transform: translateX(-100%);
     }
     100% {
       transform: translateX(0);
     }
   }
   
   div {
     animation: slide-in 1s ease-in-out;
   }
   ```

### 渐变（Gradients）

渐变可用于创建平滑过渡的背景。CSS3提供了线性渐变（由一种颜色向另一种颜色逐渐过渡）和径向渐变（从中心点向外辐射的颜色过渡）两种类型。可以通过`linear-gradient()`和`radial-gradient()`函数来指定渐变的颜色和起止位置，可以在背景属性中使用渐变作为背景图像。

   ```css
   div {
     background: linear-gradient(to right, red, blue);
   }
   ```

### 多列布局（Multi-column Layout）

多列布局允许将文本内容分割成多个列来显示。通过`column-count`和`column-width`等属性，可以控制列的数量和宽度。这种布局类似于报纸的版面布局，可以让文本内容更好地利用空间。

   ```css
   div {
     column-count: 3;
     column-width: 200px;
   }
   ```

### 弹性盒子（Flexbox）

弹性盒子布局提供了一种简单、灵活的方法来创建响应式和可伸缩的布局。通过将容器元素的`display`属性设置为`flex`，可以使用弹性盒子属性来定位和排列子元素，如`justify-content`控制主轴上元素的对齐方式，`align-items`控制交叉轴上元素的对齐方式。

   ```css
   .container {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ```

### 网格布局（CSS Grid）

网格布局是一种二维布局系统，通过将元素划分为行和列的网格，可以创建复杂的布局。通过设置容器元素的`display`属性为`grid`，并使用网格属性（如`grid-template-columns`、`grid-template-rows`、`grid-gap`等）来定义和调整网格布局。

   ```css
   .container {
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     grid-gap: 10px;
   }
   ```

### 媒体查询（Media Queries）

媒体查询允许根据设备特性和视口尺寸应用不同的样式。通过在CSS样式表中使用`@media`规则，可以针对不同的媒体类型（如屏幕或打印机）、不同的设备宽度和高度等条件，编写对应的样式规则。这使得可以创建响应式设计，从而在不同的设备上提供最佳的用户体验。

   ```css
   @media screen and (max-width: 600px) {
     body {
       font-size: 14px;
     }
   }
   ```

### 背景（BackGround）

能够更灵活地控制元素的背景效果，实现更多样化和富有创意的设计.

- `background-size`：用于定义背景图像的尺寸大小。可以使用像素值、百分比或关键字（如`cover`和`contain`）来设置背景图像的宽度和高度。

- `background-origin`：控制背景图像的起始位置。可以设置为`content-box`、`padding-box`或`border-box`，以指定背景图像相对于内容框、内边距框或边框框之间的位置。

- `background-clip`：控制背景图像的显示范围。可以设置为`content-box`、`padding-box`或`border-box`，以指定背景图像是否应裁剪到内容框、内边距框或边框框之内。

- `background-origin`和`background-clip`的组合使用：

```css
div {
  background-image: url("image.jpg");
  background-origin: content-box;
  background-clip: padding-box;
}
```

这个例子将背景图像应用于`div`元素，背景图像的起始位置相对于内容框，而背景图像的显示范围相对于内边距框。

- `background-repeat`：控制背景图像的重复方式。可以设置为`repeat`（默认值，在水平和垂直方向上重复）、`repeat-x`（仅在水平方向上重复）、`repeat-y`（仅在垂直方向上重复）或`no-repeat`（不重复）。

- `background-attachment`：控制背景图像的滚动方式。可以设置为`scroll`（默认值，在元素滚动时背景图像也跟随滚动）、`fixed`（固定在元素区域不随滚动而移动）或`local`（背景图像随元素内部内容滚动）。

- `background-image`：允许使用多个背景图像来创建复合背景效果。可以使用逗号分隔多个值，每个值表示一个背景图像的URL。
