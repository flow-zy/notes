## css

### 手风琴

手风琴式CSS也被称为折叠菜单，是一种常用的网站导航设计。它的名字来自于手风琴乐器，因为当你点击其中一个标签时，其他标签会像手风琴一样折叠起来
::: normal-demo 手风琴

```html
<div class="container">
  <div class="tabs">
    <div class="tab">
      <input type="radio" id="rd1" name="rd" />
      <label class="tab-label" for="rd1">Item 1</label>
      <div class="tab-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
        facilis.
      </div>
    </div>
    <div class="tab">
      <input type="radio" id="rd2" name="rd" />
      <label class="tab-label" for="rd2">Item 2</label>
      <div class="tab-content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
      </div>
    </div>
    <div class="tab">
      <input type="radio" id="rd3" name="rd" />
      <label for="rd3" class="tab-close">Close others ×</label>
    </div>
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 600px;
  margin: auto;
} 
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}

.tab {
  width: 100%;
  color: white;
  overflow: hidden;
}
.tab-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: #2c3e50;
  font-weight: bold;
  cursor: pointer;
  /* Icon */
}
.tab-label:hover {
  background: #1a252f;
}
.tab-label::after {
  content: '❯';
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.35s;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background: white;
  transition: all 0.35s;
}
.tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  font-size: 0.75em;
  background: #2c3e50;
  cursor: pointer;
}
.tab-close:hover {
  background: #1a252f;
}

input:checked + .tab-label {
  background: #1a252f;
}
input:checked + .tab-label::after {
  transform: rotate(90deg);
}
input:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
}
```

:::

### 碰撞检测

::: normal-demo 碰撞检测

```html
<div class="container">
  <div class="ball"></div>
</div>
```

```css
* {
    margin: 0;
    padding: 0;
  }
.container {
  height: 300px;
  /* border:1px solid #ccc; */
  box-sizing:border-box;
}
.ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(to right, #ffa7a7, #f8fdb4);
  animation: horizontal 2.6s linear infinite alternate,
    vertical 1.9s linear infinite alternate, colorX 26s infinite steps(10),
    colorY 14s infinite steps(7);
  animation-composition: accumulate; /* 动画合成 */
}
@keyframes horizontal {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(500px - 100%));
  }
}
@keyframes vertical {
  0% {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(300px - 100%));
  }
}
@keyframes colorX {
  to {
    filter: hue-rotate(360deg); /* 应用色相旋转 */
  }
}
@keyframes colorY {
  to {
    filter: hue-rotate(360deg);
  }
}
```

:::

### 导航栏

::: normal-demo 底部导航栏

```css
@import url(https://at.alicdn.com/t/c/font_3837480_ujoq20dz4oi.css);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222327;
  height: 200px;
  width: 600px;
  position: relative;
}

.container {
  width: 440px;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
}

.icon {
  position: absolute;
  font-size: 1.7em;
  color: var(--color);
  font-weight: bold;
  transition: 0.5s;
}

.text {
  transform: translateY(20px);
  font-size: 0.75em;
  font-weight: bold;
  transition: 0.5s;
  opacity: 0;
}

.item.active .icon {
  transform: translateY(-32px);
  z-index: 1;
}

.item.active .text {
  opacity: 1;
  transform: translateY(10px);
}

.indicator {
  position: absolute;
  width: 70px;
  height: 70px;
  background: #29fd53;
  left: 35px;
  top: -50%;
  border-radius: 50%;
  border: 6px solid var(--color);
  transition: 0.5s;
  line-height: 70px;
  font-size: 30px;
  text-align: center;
}
.indicator i {
  font-size: 30px;
}
.indicator::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-right-radius: 20px;
  box-shadow: 0 -10px 0 0 var(--color);
}
.indicator::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-left-radius: 20px;
  box-shadow: 0 -10px 0 0 var(--color);
}

.item:nth-child(1).active ~ .indicator {
  transform: translateX(calc(100px * 0));
}

.item:nth-child(2).active ~ .indicator {
  transform: translateX(calc(100px * 1));
}

.item:nth-child(3).active ~ .indicator {
  transform: translateX(calc(100px * 2));
}

.item:nth-child(4).active ~ .indicator {
  transform: translateX(calc(100px * 3));
}
```

```html
<div class="box">
  <div class="container">
    <div class="item active">
      <i class="iconfont icon icon-home"></i>
      <div class="text">Home</div>
    </div>

    <div class="item">
      <i class="iconfont icon icon-message"></i>
      <div class="text">Message</div>
    </div>

    <div class="item">
      <i class="iconfont icon icon-love"></i>
      <div class="text">Love</div>
    </div>

    <div class="item">
      <i class="iconfont icon icon-user"></i>
      <div class="text">User</div>
    </div>
    <div class="indicator"></div>
  </div>
</div>
```

```js
var list = document.querySelectorAll('.item');
var indicator = document.querySelector('.indicator');
var dom = null;
function activeLink() {
  list.forEach(function (item) {
    indicator.innerHTML = '';
    item.classList.remove('active');
  });
  this.classList.add('active');
  dom = this.querySelector('i');
  indicator.appendChild(doc.cloneNode(dom));
}
list.forEach(function (item) {
  item.addEventListener('click', activeLink);
});
indicator.appendChild(doc.cloneNode(list[0].querySelector('i')));
```

:::

### 创意清单

::: normal-demo 创意清单

```html
<div class="box">
  <div class="list">
    <h2>CSS Only Item Check List</h2>
    <label>
      <input type="checkbox" name="" />
      <i></i>
      <span>with the increasing development of society</span>
    </label>
    <label>
      <input type="checkbox" name="" />
      <i></i>
      <span>therefore,the ability to study CSS is important</span>
    </label>
    <label>
      <input type="checkbox" name="" />
      <i></i>
      <span>the followings are reasons and concrete evidence</span>
    </label>
    <label>
      <input type="checkbox" name="" />
      <i></i>
      <span>in the first place</span>
    </label>
    <label>
      <input type="checkbox" name="" />
      <i></i>
      <span>moreover</span>
    </label>
    <label>
      <input type="checkbox" name="" />
      <i></i>
      <span>last but not least</span>
    </label>
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
  font-family: consolas;
  box-sizing: border-box;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: auto;
  background: #001925;
}
.list {
  padding: 0 75px 0 30px;
  position: relative;
  background: #042b3e;
}
.list h2 {
  color: #fff;
  font-size: 30px;
  padding: 10px 0;
  margin-left: 10px;
  display: inline-block;
  border-bottom: 4px solid #fff;
}
.list label {
  position: relative;
  display: block;
  margin: 40px 0;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
.list input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
}
.list i {
  position: absolute;
  top: 0;
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 2px solid #fff;
}
.list input[type='checkbox']:checked ~ i {
  /* 用边框变换成对勾 */
  top: 1;
  border-top: none;
  border-right: none;
  height: 15px;
  width: 25px;
  transform: rotate(-45deg);
}
.list span {
  position: relative;
  left: 40px;
  transition: 0.5s;
}
.list span:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #fff;
  transform: translateY(-50%) scaleX(0);
  transform-origin: right;
  transition: 0.5s transform;
}
.list input[type='checkbox']:checked ~ span:before {
  transform: translateY(-50%) scaleX(1);
  transform-origin: left;
  transition: 0.5s transform;
}
.list input[type='checkbox']:checked ~ span {
  color: #154e6b;
}
```

:::

### loading动画

::: normal-demo loading动画

```css
.container {
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: #403833;
  font-size: 100%;
  font-family: 'Open Sans';
  font-weight: 100;
  height: 200px;
  position: relative;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -mos-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}

.loader {
  width: 80%;
  height: 36px;
  overflow: visible;
}

.loader div {
  position: absolute;
  width: 30px;
  height: 36px;
  margin: 0 10px;
  opacity: 0;
  animation: move 2s linear infinite;
  -o-animation: move 2s linear infinite;
  -moz-animation: move 2s linear infinite;
  -webkit-animation: move 2s linear infinite;
  transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  color: #fff;
  font-size: 3em;
}
.loader div:nth-child(8):before {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0px;
  width: 30px;
  height: 30px;
  background: #db2f00;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
.loader div:nth-child(9):before {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0px;
  width: 30px;
  height: 30px;
  background: #f2f2f2;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
.loader div:nth-child(10):before {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0px;
  width: 30px;
  height: 30px;
  background: #13a3a5;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}

.loader div:after {
  content: '';
  position: absolute;
  bottom: -40px;
  left: 0px;
  width: 30px;
  height: 5px;
  background: #39312d;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}

.loader div:nth-child(2) {
  animation-delay: 0.2s;
  -o-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
}
.loader div:nth-child(3) {
  animation-delay: 0.4s;
  -o-animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
}
.loader div:nth-child(4) {
  animation-delay: 0.6s;
  -o-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
}
.loader div:nth-child(5) {
  animation-delay: 0.8s;
  -o-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  -webkit-animation-delay: 0.8s;
}
.loader div:nth-child(6) {
  animation-delay: 1s;
  -o-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
}
.loader div:nth-child(7) {
  animation-delay: 1.2s;
  -o-animation-delay: 1.2s;
  -moz-animation-delay: 1.2s;
  -webkit-animation-delay: 1.2s;
}
.loader div:nth-child(8) {
  animation-delay: 1.4s;
  -o-animation-delay: 1.4s;
  -moz-animation-delay: 1.4s;
  -webkit-animation-delay: 1.4s;
}
.loader div:nth-child(9) {
  animation-delay: 1.6s;
  -o-animation-delay: 1.6s;
  -moz-animation-delay: 1.6s;
  -webkit-animation-delay: 1.6s;
}
.loader div:nth-child(10) {
  animation-delay: 1.8s;
  -o-animation-delay: 1.8s;
  -moz-animation-delay: 1.8s;
  -webkit-animation-delay: 1.8s;
}

@keyframes move {
  0% {
    right: 0;
    opacity: 0;
  }
  35% {
    right: 41%;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  65% {
    right: 59%;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  100% {
    right: 100%;
    -moz-transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0;
  }
}

@-moz-keyframes move {
  0% {
    right: 0;
    opacity: 0;
  }
  35% {
    right: 41%;
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  65% {
    right: 59%;
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  100% {
    right: 100%;
    -moz-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0;
  }
}

@-webkit-keyframes move {
  0% {
    right: 0;
    opacity: 0;
  }
  35% {
    right: 41%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  75% {
    right: 59%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  100% {
    right: 100%;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0;
  }
}

@-o-keyframes move {
  0% {
    right: 0;
    opacity: 0;
  }
  35% {
    right: 41%;
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  65% {
    right: 59%;
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }
  100% {
    right: 100%;
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0;
  }
}
```

```html
<div class="container">
  <div class="loader">
    <div>L</div>
    <div>O</div>
    <div>A</div>
    <div>D</div>
    <div>I</div>
    <div>N</div>
    <div>G</div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

:::

### 春节快乐

::: normal-demo 春节快乐

```html
<div class="container">
  <div class="deng-box1">
    <div class="deng">
      <div class="xian"></div>
      <div class="deng-a">
        <div class="deng-b"><div class="deng-t">春</div></div>
      </div>
      <div class="shui shui-a">
        <div class="shui-c"></div>
        <div class="shui-b"></div>
      </div>
    </div>
  </div>
  <div class="deng-box2">
    <div class="deng">
      <div class="xian"></div>
      <div class="deng-a">
        <div class="deng-b"><div class="deng-t">节</div></div>
      </div>
      <div class="shui shui-a">
        <div class="shui-c"></div>
        <div class="shui-b"></div>
      </div>
    </div>
  </div>
  <div class="deng-box3">
    <div class="deng">
      <div class="xian"></div>
      <div class="deng-a">
        <div class="deng-b"><div class="deng-t">乐</div></div>
      </div>
      <div class="shui shui-a">
        <div class="shui-c"></div>
        <div class="shui-b"></div>
      </div>
    </div>
  </div>
  <div class="deng-box4">
    <div class="deng">
      <div class="xian"></div>
      <div class="deng-a">
        <div class="deng-b"><div class="deng-t">快</div></div>
      </div>
      <div class="shui shui-a">
        <div class="shui-c"></div>
        <div class="shui-b"></div>
      </div>
    </div>
  </div>
</div>
```

```css
.container {
  position: relative;
  height:150px;
}
.deng-box1 {
  position: absolute;
  top: -30px;
  left: 100px;
  z-index: 9999;
  pointer-events: none;
}

.deng-box2 {
  position: absolute;
  top: -25px;
  left: 150px;
  z-index: 9999;
  pointer-events: none;
}

.deng-box3 {
  position: absolute;
  top: -28px;
  right: 400px;
  z-index: 9999;
  pointer-events: none;
}

.deng-box4 {
  position: absolute;
  top: -26px;
  right: 450px;
  z-index: 9999;
  pointer-events: none;
}

.deng-box1 .deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50% 50%;
  -webkit-transform-origin: 50% -100px;
  -webkit-animation: swing 3s infinite ease-in-out;
  box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1);
}

.deng-box2 .deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50% 50%;
  -webkit-transform-origin: 50% -100px;
  -webkit-animation: swing 4s infinite ease-in-out;
  box-shadow: -5px 5px 30px 4px rgba(252, 144, 61, 1);
}

.deng-box3 .deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50% 50%;
  -webkit-transform-origin: 50% -100px;
  -webkit-animation: swing 5s infinite ease-in-out;
  box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1);
}

.deng-box4 .deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50% 50%;
  -webkit-transform-origin: 50% -100px;
  -webkit-animation: swing 4s infinite ease-in-out;
  box-shadow: -5px 5px 30px 4px rgba(252, 144, 61, 1);
}

.deng-a {
  width: 100px;
  height: 90px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.1);
  margin: 12px 8px 8px 10px;
  border-radius: 50% 50%;
  border: 2px solid #dc8f03;
}

.deng-b {
  width: 45px;
  height: 90px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.1);
  margin: -2px 8px 8px 26px;
  border-radius: 50% 50%;
  border: 2px solid #dc8f03;
}

.xian {
  position: absolute;
  top: -50px;
  left: 60px;
  width: 2px;
  height: 50px;
  background: #dc8f03;
}

.shui-a {
  position: relative;
  width: 5px;
  height: 20px;
  margin: -5px 0 0 59px;
  -webkit-animation: swing 4s infinite ease-in-out;
  -webkit-transform-origin: 50% -45px;
  background: #ffa500;
  border-radius: 0 0 5px 5px;
}

.shui-b {
  position: absolute;
  top: 14px;
  left: -2px;
  width: 10px;
  height: 10px;
  background: #dc8f03;
  border-radius: 50%;
}

.shui-c {
  position: absolute;
  top: 18px;
  left: -2px;
  width: 10px;
  height: 35px;
  background: #ffa500;
  border-radius: 0 0 0 5px;
}

.deng:before {
  position: absolute;
  top: -7px;
  left: 29px;
  height: 12px;
  width: 60px;
  content: ' ';
  display: block;
  z-index: 999;
  border-radius: 5px 5px 0 0;
  border: solid 1px #dc8f03;
  background: #ffa500;
  background: linear-gradient(
    to right,
    #dc8f03,
    #ffa500,
    #dc8f03,
    #ffa500,
    #dc8f03
  );
}

.deng:after {
  position: absolute;
  bottom: -7px;
  left: 10px;
  height: 12px;
  width: 60px;
  content: ' ';
  display: block;
  margin-left: 20px;
  border-radius: 0 0 5px 5px;
  border: solid 1px #dc8f03;
  background: #ffa500;
  background: linear-gradient(
    to right,
    #dc8f03,
    #ffa500,
    #dc8f03,
    #ffa500,
    #dc8f03
  );
}

.deng-t {
  font-family: 华文行楷, Arial, Lucida Grande, Tahoma, sans-serif;
  font-size: 3.2rem;
  color: #dc8f03;
  font-weight: bold;
  line-height: 85px;
  text-align: center;
}

.night .deng-t,
.night .deng-box,
.night .deng-box1 {
  background: transparent !important;
}

@-moz-keyframes swing {
  0% {
    -moz-transform: rotate(-10deg);
  }

  50% {
    -moz-transform: rotate(10deg);
  }

  100% {
    -moz-transform: rotate(-10deg);
  }
}

@-webkit-keyframes swing {
  0% {
    -webkit-transform: rotate(-10deg);
  }

  50% {
    -webkit-transform: rotate(10deg);
  }

  100% {
    -webkit-transform: rotate(-10deg);
  }
}
```

:::

### 3D相册

::: normal-demo 3D相册

```html
<div class='container'>
  <div class="content">
    <div class="photo-cube__wrapper">
      <input type="radio" id="1" name="cube" checked="true" class="photo-cube__control">
      <input type="radio" id="2" name="cube" class="photo-cube__control">
      <input type="radio" id="3" name="cube" class="photo-cube__control">
      <input type="radio" id="4" name="cube" class="photo-cube__control">
      <input type="radio" id="5" name="cube" class="photo-cube__control">
      <input type="radio" id="6" name="cube" class="photo-cube__control">
      <div class="photo-cube">
        <div class="photo-cube__panel"></div>
        <div class="photo-cube__panel"></div>
        <div class="photo-cube__panel"></div>
        <div class="photo-cube__panel"></div>
        <div class="photo-cube__panel"></div>
        <div class="photo-cube__panel"></div>
      </div>
      <div class="photo-cube__actions--left">
        <label for="6" class="photo-cube__action"></label>
        <label for="1" class="photo-cube__action"></label>
        <label for="2" class="photo-cube__action"></label>
        <label for="3" class="photo-cube__action"></label>
        <label for="4" class="photo-cube__action"></label>
        <label for="5" class="photo-cube__action"></label>
      </div>
      <div class="photo-cube__actions--right">
        <label for="2" class="photo-cube__action"></label>
        <label for="3" class="photo-cube__action"></label>
        <label for="4" class="photo-cube__action"></label>
        <label for="5" class="photo-cube__action"></label>
        <label for="6" class="photo-cube__action"></label>
        <label for="1" class="photo-cube__action"></label>
      </div>
      <div class="photo-cube__indicators">
        <label for="1" class="photo-cube__indicator"></label>
        <label for="2" class="photo-cube__indicator"></label>
        <label for="3" class="photo-cube__indicator"></label>
        <label for="4" class="photo-cube__indicator"></label>
        <label for="5" class="photo-cube__indicator"></label>
        <label for="6" class="photo-cube__indicator"></label>
      </div>
    </div>
  </div>
</div>
```

```css

.container{
  background:#000;
  height:600px;
}
.photo-cube__control {
  z-index: 2;
}
.photo-cube__control:nth-of-type(1):checked ~ .photo-cube__indicators .photo-cube__indicator:nth-of-type(1) {
  opacity: 1;
}
.photo-cube__control:nth-of-type(2):checked ~ .photo-cube__indicators .photo-cube__indicator:nth-of-type(2) {
  opacity: 1;
}
.photo-cube__control:nth-of-type(3):checked ~ .photo-cube__indicators .photo-cube__indicator:nth-of-type(3) {
  opacity: 1;
}
.photo-cube__control:nth-of-type(4):checked ~ .photo-cube__indicators .photo-cube__indicator:nth-of-type(4) {
  opacity: 1;
}
.photo-cube__control:nth-of-type(5):checked ~ .photo-cube__indicators .photo-cube__indicator:nth-of-type(5) {
  opacity: 1;
}
.photo-cube__control:nth-of-type(6):checked ~ .photo-cube__indicators .photo-cube__indicator:nth-of-type(6) {
  opacity: 1;
}
.photo-cube__control:nth-of-type(1):checked ~ .photo-cube {
  transform: rotateX(0deg) rotateY(0deg);
}
.photo-cube__control:nth-of-type(6):checked ~ .photo-cube {
  transform: rotateX(90deg) rotateY(0deg);
}
.photo-cube__control:nth-of-type(3):checked ~ .photo-cube {
  transform: rotateX(180deg) rotateY(0deg);
}
.photo-cube__control:nth-of-type(5):checked ~ .photo-cube {
  transform: rotateX(270deg) rotateY(0deg);
}
.photo-cube__control:nth-of-type(4):checked ~ .photo-cube {
  transform: rotateX(360deg) rotateY(90deg);
}
.photo-cube__control:nth-of-type(2):checked ~ .photo-cube {
  transform: rotateX(360deg) rotateY(-90deg);
}
.content {
  height: 600px;
  left: 50%;
  margin-left: -300px;
  margin-top: -300px;
  position: absolute;
  top: 50%;
  transform: scale(0.25);
  transition: all 0.5s ease 0s;
  width: 600px;
}
.content:hover {
  transform: scale(1);
  transition: all 0.5s ease 0s;
}
.content:hover .photo-cube__wrapper {
  animation: entrance 0.5s ease;
  transform: rotate(0deg);
  transition: all 0.5s ease 0s;
}
.content:hover .photo-cube__indicators {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(1):checked ~ .photo-cube .photo-cube__panel:nth-of-type(1) {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(1):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(1),
.content:hover .photo-cube__control:nth-of-type(1):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(1) {
  transition: opacity 0.5s ease 0s;
  display: block;
}
.content:hover .photo-cube__control:nth-of-type(1):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(1):hover,
.content:hover .photo-cube__control:nth-of-type(1):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(1):hover {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(2):checked ~ .photo-cube .photo-cube__panel:nth-of-type(2) {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(2):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(2),
.content:hover .photo-cube__control:nth-of-type(2):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(2) {
  transition: opacity 0.5s ease 0s;
  display: block;
}
.content:hover .photo-cube__control:nth-of-type(2):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(2):hover,
.content:hover .photo-cube__control:nth-of-type(2):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(2):hover {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(3):checked ~ .photo-cube .photo-cube__panel:nth-of-type(3) {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(3):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(3),
.content:hover .photo-cube__control:nth-of-type(3):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(3) {
  transition: opacity 0.5s ease 0s;
  display: block;
}
.content:hover .photo-cube__control:nth-of-type(3):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(3):hover,
.content:hover .photo-cube__control:nth-of-type(3):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(3):hover {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(4):checked ~ .photo-cube .photo-cube__panel:nth-of-type(4) {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(4):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(4),
.content:hover .photo-cube__control:nth-of-type(4):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(4) {
  transition: opacity 0.5s ease 0s;
  display: block;
}
.content:hover .photo-cube__control:nth-of-type(4):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(4):hover,
.content:hover .photo-cube__control:nth-of-type(4):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(4):hover {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(5):checked ~ .photo-cube .photo-cube__panel:nth-of-type(5) {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(5):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(5),
.content:hover .photo-cube__control:nth-of-type(5):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(5) {
  transition: opacity 0.5s ease 0s;
  display: block;
}
.content:hover .photo-cube__control:nth-of-type(5):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(5):hover,
.content:hover .photo-cube__control:nth-of-type(5):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(5):hover {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(6):checked ~ .photo-cube .photo-cube__panel:nth-of-type(6) {
  opacity: 1;
}
.content:hover .photo-cube__control:nth-of-type(6):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(6),
.content:hover .photo-cube__control:nth-of-type(6):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(6) {
  transition: opacity 0.5s ease 0s;
  display: block;
}
.content:hover .photo-cube__control:nth-of-type(6):checked ~ .photo-cube__actions--right .photo-cube__action:nth-of-type(6):hover,
.content:hover .photo-cube__control:nth-of-type(6):checked ~ .photo-cube__actions--left .photo-cube__action:nth-of-type(6):hover {
  opacity: 1;
}
.photo-cube__wrapper {
  animation: axial-spin 10s infinite linear;
  height: 300px;
  left: 50%;
  margin-left: -150px;
  margin-top: -150px;
  position: absolute;
  top: 50%;
  transform: scale(0.25);
  transform-style: preserve-3d;
  transition: all 0.5s ease 0s;
  width: 300px;
}
.photo-cube {
  height: 300px;
  left: 50%;
  margin-left: -150px;
  margin-top: -150px;
  position: absolute;
  top: 50%;
  transform: rotateX(45deg) rotateY(45deg);
  transform-style: preserve-3d;
  transition: all 0.5s ease 0s;
  width: 300px;
}
.photo-cube__panel {
  height: 100%;
  left: 0;
  position: absolute;
  opacity: 0.45;
  top: 0;
  transition: all 0.5s ease 0s;
  width: 100%;
}
.photo-cube__panel:nth-of-type(3) {
  background: #f22613;
  transform: translateZ(-150px) rotateY(180deg) rotate(180deg);
}
.photo-cube__panel:nth-of-type(2) {
  background: #f9690e;
  transform: rotateY(-270deg) translateX(150px);
  transform-origin: top right;
}
.photo-cube__panel:nth-of-type(1) {
  background: #e9d460;
  transform: translateZ(150px);
}
.photo-cube__panel:nth-of-type(4) {
  background: #00b16a;
  transform: rotateY(270deg) translateX(-150px);
  transform-origin: center left;
}
.photo-cube__panel:nth-of-type(5) {
  background: #be90d4;
  transform: rotateX(90deg) translateY(-150px);
  transform-origin: top center;
}
.photo-cube__panel:nth-of-type(6) {
  background: #8e44ad;
  transform-origin: bottom center;
  transform: rotateX(-90deg) translateY(150px);
}
.photo-cube__indicators {
  bottom: -75px;
  left: 0;
  opacity: 0;
  padding: 25px;
  position: absolute;
  right: 0;
  transition: all 0.5s ease 0s;
}
.photo-cube__control {
  display: none;
}
.photo-cube__actions--left .photo-cube__action {
  left: -75px;
  top: 50%;
  transform: translateY(-50%);
}
.photo-cube__actions--left .photo-cube__action:before {
  transform: translate(-40%, -50%) rotate(135deg);
}
.photo-cube__actions--right .photo-cube__action {
  right: -75px;
  top: 50%;
  transform: translateY(-50%);
}
.photo-cube__action {
  animation: none;
  background-color: #fafafa;
  border-radius: 100%;
  cursor: pointer;
  height: 40px;
  display: none;
  opacity: 0.15;
  position: absolute;
  transition: opacity 0.5s ease 0s;
  width: 40px;
  z-index: 3;
}
.photo-cube__action:before {
  border-bottom: solid 4px #111;
  border-right: solid 4px #111;
  content: '';
  display: block;
  height: 25%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-70%, -50%) rotate(-45deg);
  width: 25%;
}
.photo-cube__indicator {
  background: #fafafa;
  background-color: #fafafa;
  border-radius: 100%;
  cursor: pointer;
  display: inline-block;
  height: 14px;
  margin: 4px;
  opacity: 0.15;
  width: 14px;
}
* {
  box-sizing: border-box;
  animation: fadeIn 0.5s;
}
body {
  background-color: #111;
  text-align: center;
}
.photo-cube__panel:nth-of-type(1) {
  background-image: url(https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641);
  background-size: cover;
  background-position: center;
}
.photo-cube__panel:nth-of-type(2) {
  background-image: url(https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641);
  background-size: cover;
  background-position: center;
}
.photo-cube__panel:nth-of-type(3) {
  background-image: url(https://img1.baidu.com/it/u=1458656822,2078909008&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750);
  background-size: cover;
  background-position: center;
}
.photo-cube__panel:nth-of-type(4) {
  background-image: url(https://lmg.jj20.com/up/allimg/1113/062520105I8/200625105I8-6-1200.jpg);
  background-size: cover;
  background-position: center;
}
.photo-cube__panel:nth-of-type(5) {
  background-image: url(https://img0.baidu.com/it/u=1435639120,2241364006&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500);
  background-size: cover;
  background-position: center;
}
.photo-cube__panel:nth-of-type(6) {
  background-image: url(https://lmg.jj20.com/up/allimg/tp08/51042223242816-lp.jpg);
  background-size: cover;
  background-position: center;
}
@-moz-keyframes axial-spin {
  from {
    transform: rotateX(45deg) rotateY(45deg);
  }
  to {
    transform: rotateX(405deg) rotateY(765deg);
  }
}
@-webkit-keyframes axial-spin {
  from {
    transform: rotateX(45deg) rotateY(45deg);
  }
  to {
    transform: rotateX(405deg) rotateY(765deg);
  }
}
@-o-keyframes axial-spin {
  from {
    transform: rotateX(45deg) rotateY(45deg);
  }
  to {
    transform: rotateX(405deg) rotateY(765deg);
  }
}
@keyframes axial-spin {
  from {
    transform: rotateX(45deg) rotateY(45deg);
  }
  to {
    transform: rotateX(405deg) rotateY(765deg);
  }
}
@-moz-keyframes entrance {
  from {
    transform: rotateX(45deg) rotateY(45deg);
  }
}
@-webkit-keyframes entrance {
  from {
    transform: rotateX(45deg) rotateY(45deg);
  }
}
@-o-keyframes entrance {
  from {
    transform: rotateX(45deg) rotateY(45deg);
  }
}
@keyframes entrance {
  from {
    transform: rotateX(45deg) rotateY(45deg);
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

```

:::

### 图片放大镜

::: normal-demo 图片放大镜

```html
<div class="container">
  <div class="container">
    <ul class="gallery">
      <li class="gallery__item"></li>

      <li class="gallery__item"></li>

      <li class="gallery__item"></li>

      <li class="gallery__item"></li>

      <li class="gallery__item"></li>

      <li class="gallery__item"></li>
    </ul>
  </div>
</div>
```

```css
.container{
  height:600px;
  position:relative;
}
.gallery {
  list-style: none;
}

.gallery:before,
.gallery__item:last-child {
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -31.25em;
  width: 62.5em;
  height: 62.5em;
}

.gallery:before {
  z-index: -1;
  border-radius: 50%;
  content: '';
  box-shadow: inset 0 0 5em dimgrey, 0 0 0 50vw dimgrey;
}

.gallery__item {
  background-blend-mode: luminosity;
  transition: -webkit-transform 0.5s
      cubic-bezier(0.175, 0.885, 0.32, 1.275),
    background-image 0.5s;
}

.gallery__item:not(:last-child) {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32vmin;
  height: 32vmin;
  border-radius: 50%;
  box-shadow: 0 0 0.5em white;
}

.gallery__item:nth-child(1) {
  margin: 13.87457vmin -4.53223vmin;
  transform: scale(0.5);
  -webkit-transform: scale(0.5);
  background: url(https://img2.baidu.com/it/u=1361506290,4036378790&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500)
    50% 50% fixed whitesmoke;
}

.gallery__item:nth-child(1):hover {
  -webkit-transform: scale(1);
  transform: scale(1);
  background-blend-mode: normal;
  cursor: pointer;
}

.gallery__item:nth-child(1):hover ~ :last-child {
  background: url(https://img2.baidu.com/it/u=1361506290,4036378790&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500)
    50% 50% fixed dimgray;
}

.gallery__item:nth-child(1):hover ~ :last-child:after {
  opacity: 0.001;
}

.gallery__item:nth-child(2) {
  margin: 4.13825vmin -40.86867vmin;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  background: url(https://img2.baidu.com/it/u=2537370952,3446004972&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500)
    50% 50% fixed whitesmoke;
}

.gallery__item:nth-child(2):hover {
  -webkit-transform: scale(1);
  transform: scale(1);
  background-blend-mode: normal;

  cursor: pointer;
}

.gallery__item:nth-child(2):hover ~ :last-child {
  background: url(https://img2.baidu.com/it/u=2537370952,3446004972&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500)
    50% 50% fixed dimgray;
}

.gallery__item:nth-child(2):hover ~ :last-child:after {
  opacity: 0.001;
}

.gallery__item:nth-child(3) {
  margin: -33.42845vmin -42.83746vmin;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  background: url(https://img2.baidu.com/it/u=638285213,1746517464&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800)
    50% 50% fixed whitesmoke;
}

.gallery__item:nth-child(3):hover {
  -webkit-transform: scale(1);
  transform: scale(1);
  background-blend-mode: normal;
  cursor: pointer;
}

.gallery__item:nth-child(3):hover ~ :last-child {
  background: url(https://img2.baidu.com/it/u=638285213,1746517464&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800)
    50% 50% fixed dimgray;
}

.gallery__item:nth-child(3):hover ~ :last-child:after {
  opacity: 0.001;
}

.gallery__item:nth-child(4) {
  margin: -46.90963vmin -7.71779vmin;
  transform: scale(0.5);
  -webkit-transform: scale(0.5);

  background: url(https://img2.baidu.com/it/u=2048195462,703560066&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333)
    50% 50% fixed whitesmoke;
}

.gallery__item:nth-child(4):hover {
  transform: scale(1);
  -webkit-transform: scale(1);
  background-blend-mode: normal;
  cursor: pointer;
}

.gallery__item:nth-child(4):hover ~ :last-child {
  background: url(https://img2.baidu.com/it/u=2048195462,703560066&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333)
    50% 50% fixed dimgray;
}

.gallery__item:nth-child(4):hover ~ :last-child:after {
  opacity: 0.001;
}

.gallery__item:nth-child(5) {
  margin: -17.67475vmin 15.95615vmin;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  background: url(https://img1.baidu.com/it/u=1699929707,733321099&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800)
    50% 50% fixed whitesmoke;
}

.gallery__item:nth-child(5):hover {
  transform: scale(1);
  -webkit-transform: scale(1);
  background-blend-mode: normal;
  cursor: pointer;
}

.gallery__item:nth-child(5):hover ~ :last-child {
  background: url(https://img1.baidu.com/it/u=1699929707,733321099&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800)
    50% 50% fixed dimgray;
}

.gallery__item:nth-child(5):hover ~ :last-child:after {
  opacity: 0.001;
}

.gallery__item:last-child {
  z-index: -2;
}

.gallery__item:last-child:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.999;
  background: dimgrey;
  transition: opacity 2s;
  content: '';
}
```

:::

## js

### 时钟切换

::: normal-demo 时钟切换

```js
function $(v) {
  if (typeof v === 'function') {
    window.onload = v;
  } else if (typeof v === 'string') {
    return document.getElementById(v);
  } else if (typeof v === 'object') {
    return v;
  }
}
function getStyle(obj, attr) {
  return obj.currentStyle
    ? obj.currentStyle[attr]
    : getComputedStyle(obj)[attr];
}
function doMove(obj, attr, dir, target, endFn) {
  dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var speed = parseInt(getStyle(obj, attr)) + dir;
    if ((speed > target && dir > 0) || (speed < target && dir < 0)) {
      speed = target; //寰€鍓嶈窇
    }
    obj.style[attr] = speed + 'px';
    if (speed == target) {
      clearInterval(obj.timer);
      endFn && endFn();
    }
  }, 30);
}
function shake(obj, attr, endFn) {
  if (obj.onOff) {
    return;
  }
  obj.onOff = true;
  clearInterval(obj.shake);
  var pos = parseInt(getStyle(obj, attr));
  var arr = [];
  var num = 0;
  obj.shake = null;
  for (var i = 10; i > 0; i -= 2) {
    arr.push(i, -i);
  }
  arr.push(0);
  obj.shake = setInterval(function () {
    num = num % arr.length;
    obj.style[attr] = pos + arr[num] + 'px';
    num++;

    if (num === arr.length) {
      clearInterval(obj.shake);
      endFn && endFn();
      obj.onOff = false;
    }
  }, 50);
}

function opacity(obj, dir, target) {
  // 鍒ゆ柇褰撳墠鐨勪綅缃槸涓嶆槸澶т簬鐩爣鐐癸紝灏忎簬dir灏辨槸姝ｅ€硷紝澶т簬dir灏辨槸璐熷€�
  dir = Number(getStyle(obj, 'opacity')) < target ? dir : -dir;
  // alert(dir)

  clearInterval(obj.opaTimer);
  obj.opaTimer = setInterval(function () {
    var speed = Number(getStyle(obj, 'opacity')) + dir;
    // alert(speed)
    if ((speed < target && dir < 0) || (speed > target && dir > 0)) {
      speed = target;
    }
    obj.style.opacity = speed;
    // alert(speed)

    if (speed === target) {
      clearInterval(obj.opaTimer);
    }
  }, 100);
}

function toTwo(n) {
  return n < 10 ? '0' + n : '' + n;
}

var arr=['/images/0.png','/images/1.png','/images/2.png','/images/3.png','/images/4.png','/images/5.png','/images/6.png','/images/7.png','/images/8.png','/images/9.png','/images/mao.png',]
var panel=document.getElementById("panel");
var aLi=panel.getElementsByTagName("li");
var nTime=null;
var str=null;
var nstr;
for(var i=0;i<aLi.length;i++){
  aLi[i].style.left=56*i+'px';
}

function showTime1(){
  var iNow=new Date();
  var nHours=iNow.getHours();
  var nMinutes=iNow.getMinutes();
  var nSecondes=iNow.getSeconds();
  str=toTwo(nHours)+':'+toTwo(nMinutes)+':'+toTwo(nSecondes);
}

function showTime2(){
  var iNow=new Date();
  nTime=iNow.getTime()+1000;
  iNew=new Date(nTime);
  var tHours=iNew.getHours();
  var tMinutes=iNew.getMinutes();
  var tSecondes=iNew.getSeconds();
  nstr=toTwo(tHours)+':'+toTwo(tMinutes)+':'+toTwo(tSecondes);
}

showTime1();
showTime2();
setInterval(function(){
  showTime1();
  showTime2();
},1000);

function initial(aLi){
  for(var i=0;i<aLi.length;i++){
  if(i!=2&&i!=5){
    aLi[i].getElementsByTagName("img")[0].src=arr[str.charAt(i)];
    aLi[i].getElementsByTagName("img")[1].src=arr[nstr.charAt(i)];
  }else{
    aLi[i].getElementsByTagName("img")[0].src=arr[10];
  }
  }
}
initial(aLi);

timeRoll(aLi,0);
timeRoll(aLi,1);
timeRoll(aLi,3);
timeRoll(aLi,4);
timeRoll(aLi,6);
timeRoll(aLi,7);

function timeRoll(obj,i){
  setInterval(function(){
    var pNumber=str.charAt(i);
    var tNumber=nstr.charAt(i);
    var pImg=obj[i].getElementsByTagName("img")[0];
      var nImg=obj[i].getElementsByTagName("img")[1];
    if(pNumber!==tNumber&&parseInt(getStyle(nImg,'top'))==92){
      
      nImg.src=arr[nstr.charAt(i)];
      doMove(nImg,'top',5,0,function(){
          
      });
      doMove(pImg,'top',5,-92,function(){
          pImg.style.top='92px';
          pImg.src=arr[str.charAt(i)];

      });
      
    }else if(pNumber!==tNumber&&parseInt(getStyle(pImg,'top'))==92){

      pImg.src=arr[nstr.charAt(i)];
      doMove(pImg,'top',5,0,function(){
          
      });
      doMove(nImg,'top',5,-92,function(){
          nImg.style.top='92px';
          nImg.src=arr[str.charAt(i)];

      });
    }
  },1000)
};
```

```css
*{
  margin: 0;
  padding:0;
  font-family: "微软雅黑";
 }
 .container{
  max-width:400px;
  height:130px;
  margin:auto;
 }
ul{
  list-style: none;
  position: relative;
  top:30px;
  left: 30px;
}
ul li{
  position: absolute;
  top:0;
  overflow: hidden;
  width: 56px;
  height: 92px;
}
ul li img{
  display: block;
  position: absolute;
}
ul li .pic01{
  top:0;
}
ul li .pic02{
  top:92px;
}
```

```html
<div class="container">
<ul id="panel">
   <li>
    <img src="" class="pic01"> <img src="" class="pic02">
   </li>
   <li>
    <img src="" class="pic01"> <img src="" class="pic02">
   </li>
   <li>
    <img src="">
    
   </li>
   <li>
    <img src="" class="pic01"> <img src="" class="pic02">
   </li>
   <li>
    <img src="" class="pic01"> <img src="" class="pic02">
   </li>
   <li>
    <img src="">
    
   </li>
   <li>
    <img src="" class="pic01"> <img src="" class="pic02">
   </li>
   <li>
    <img src="" class="pic01"> <img src="" class="pic02">
   </li>
  </ul>
</div>

```

:::

### 轮播图

::: normal-demo 轮播图

```css
html,
body,
ul,
ol,
div {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  border: 0;
}
.container {
  background-color: #151515;
  height: 350px;
}
.swiper {
  width: 1200px;
  height: 350px;
  margin: 50px auto;
  position: relative;
}

.swiper .pic {
  width: 100%;
  height: 100%;
  position: relative;
}

.swiper .pic li {
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
  width: 330px;
  height: 200px;
  position: absolute;
  top: 30px;
  left: 50%;
  margin-left: -300px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}

.swiper .pic li img {
  width: 100%;
  height: 100%;
}

.now {
  z-index: 9;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}

.next {
  z-index: 6;
  -webkit-transform: translateX(300px);
  -moz-transform: translateX(300px);
  -o-transform: translateX(300px);
  -ms-transform: translateX(300px);
  transform: translateX(300px);
}

.prev {
  z-index: 6;
  -webkit-transform: translateX(-260px);
  -moz-transform: translateX(-260px);
  -o-transform: translateX(-260px);
  -ms-transform: translateX(-260px);
  transform: translateX(-260px);
}

._bg {
  background-color: red !important;
}

.swiper .cricle {
  height: 16px;
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.swiper .cricle li {
  float: left;
  width: 14px;
  height: 14px;
  background-color: #cccccc;
  margin-right: 6px;
  border-radius: 50%;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.swiper .btns {
  display: none;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
  height: 38px;
  z-index: 9;
}

.swiper .btns .leftbtn,
.swiper .btns .rightbtn {
  height: 100%;
  width: 38px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
}

.swiper .btns .leftbtn::after,
.swiper .btns .rightbtn::after {
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  border-left: 3px solid #ffffff;
  border-top: 3px solid #ffffff;
}

.swiper .btns .leftbtn::after {
  -webkit-transform: translate(12px, 8px) rotate(-45deg);
  -moz-transform: translate(12px, 8px) rotate(-45deg);
  -o-transform: translate(12px, 8px) rotate(-45deg);
  -ms-transform: translate(12px, 8px) rotate(-45deg);
  transform: translate(12px, 8px) rotate(-45deg);
}

.swiper .btns .rightbtn::after {
  -webkit-transform: translate(4px, 8px) rotate(135deg);
  -moz-transform: translate(4px, 8px) rotate(135deg);
  -o-transform: translate(4px, 8px) rotate(135deg);
  -ms-transform: translate(4px, 8px) rotate(135deg);
  transform: translate(4px, 8px) rotate(135deg);
}

.leftBox,
.rightBox {
  height: 100px;
  position: absolute;
  top: 30px;
  z-index: 99;
}

.leftBox {
  width: 61px;
  left: 0;
}

.rightBox {
  width: 222px;
  right: 0;
}
```

```html
<div class="container">
  <div class="swiper">
    <ul class="pic">
      <li class="now">
        <a href="#"
          ><img
            src="https://img0.baidu.com/it/u=3319997766,4089593231&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
            alt=""
        /></a>
      </li>
      <li class="next">
        <a href="#"
          ><img
            src="https://img0.baidu.com/it/u=1838040407,1274103844&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
            alt=""
        /></a>
      </li>
      <li>
        <a href="#"
          ><img
            src="https://img2.baidu.com/it/u=724223739,2372869883&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
            alt=""
        /></a>
      </li>
      <li>
        <a href="#"
          ><img
            src="https://img1.baidu.com/it/u=3549522664,2004387788&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
            alt=""
        /></a>
      </li>
    </ul>
    <ol class="cricle"></ol>
    <div class="btns">
      <a
        href="javascript:;"
        class="leftbtn"
        style="float: left; margin-left: 6px"
      ></a>
      <a
        href="javascript:;"
        class="rightbtn"
        style="float: right; margin-right: 6px"
      ></a>
    </div>
    <div class="leftBox"></div>
    <div class="rightBox"></div>
  </div>
</div>
```

```js
  var swiper = document.querySelector('.swiper');
  var pic = swiper.querySelectorAll('.pic li');
  var btns = swiper.querySelector('.btns');
  var cricle = swiper.querySelector('.cricle');
  var leftbtn = swiper.querySelector('.leftbtn');
  var rightbtn = swiper.querySelector('.rightbtn');
  var leftBox = swiper.querySelector('.leftBox');
  var rightBox = swiper.querySelector('.rightBox');

  function clearPicName() {
    for (var i = 0; i < pic.length; i++) {
      pic[i].className = '';
    }
  }
  function leave() {
    btns.style.display = 'none';
    timer = setInterval(function () {
      rightbtn.click();
    }, 2000);
  }
  var timer = setInterval(function () {
    rightbtn.click();
  }, 2000);
  swiper.addEventListener('mouseenter', function () {
    btns.style.display = 'block';
    clearInterval(timer);
    swiper.removeEventListener('mouseleave', leave);
    swiper.addEventListener('mouseleave', leave);
  });
  var lili = '';
  for (var j = 0; j < pic.length; j++) {
    lili += '<li></li>';
  }
  cricle.innerHTML = lili;
  var lis = cricle.querySelectorAll('li');
  lis[0].className = '_bg';
  function clearCricleName() {
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = '';
    }
  }
  var pic_index = 0;
  var lisArr = [];
  for (var i = 0; i < lis.length; i++) {
    lisArr.push(lis[i]);
  }

  lisArr.forEach(function (ele, i) {
    ele.addEventListener('mouseenter', function () {
      clearCricleName();
      ele.className = '_bg';
      var index = i;
      clearPicName();
      i = i == 0 ? lisArr.length : i;
      pic[i - 1].className = 'prev';
      i = index;
      pic[i].className = 'now';
      i = i == lisArr.length - 1 ? -1 : i;
      pic[i + 1].className = 'next';
      i = index;
      pic_index = i;
    });
  });

  leftbtn.addEventListener('click', function () {
    pic_index--;
    pic_index = pic_index < 0 ? pic.length - 1 : pic_index;
    var index = pic_index;
    clearPicName();
    pic_index = pic_index == 0 ? pic.length : pic_index;
    pic[pic_index - 1].className = 'prev';
    pic_index = index;
    pic[pic_index].className = 'now';
    clearCricleName();
    lis[pic_index].className = '_bg';
    pic_index = pic_index == pic.length - 1 ? -1 : pic_index;
    pic[pic_index + 1].className = 'next';
    pic_index = index;
  });

  rightbtn.addEventListener('click', function () {
    pic_index++;
    pic_index = pic_index == pic.length ? 0 : pic_index;
    var index = pic_index;
    clearPicName();
    pic_index = pic_index == 0 ? pic.length : pic_index;
    pic[pic_index - 1].className = 'prev';
    pic_index = index;
    pic[pic_index].className = 'now';
    clearCricleName();
    lis[pic_index].className = '_bg';
    pic_index = pic_index == pic.length - 1 ? -1 : pic_index;
    pic[pic_index + 1].className = 'next';
  });
  leftBox.addEventListener('click', function () {
    leftbtn.click();
  });
  rightBox.addEventListener('click', function () {
    rightbtn.click();
  });
```

:::

### 选项卡

::: normal-demo 选项卡

```html
<div class="tab-container">
  <div id="tabs">  
    <div class="tab active">选项卡1</div>  
    <div class="tab">选项卡2</div>  
    <div class="tab">选项卡3</div>  
  </div>  

  <div id="panels">  
    <div class="panel active">面板1的内容</div>  
    <div class="panel">面板2的内容</div>  
    <div class="panel">面板3的内容</div>  
  </div>
</div>
```

```js
var currentTab = 0;  
var tabs = document.querySelectorAll('.tab');  
var panels = document.querySelectorAll('.panel');  

tabs[currentTab].classList.add('active');  
panels[currentTab].style.display = 'block';  

tabs.forEach(function(tab) {  
  tab.addEventListener('click', function () {  
      tabs.forEach(function(tab){ tab.classList.remove('active')});  
      this.classList.add('active');  
      panels.forEach(function(panel){panel.style.display = 'none'});  
      currentTab = Array.prototype.indexOf.call(tabs, this);  
      panels[currentTab].style.display = 'block';  
  });  
});
```

```css
/* 样式化选项卡 */  
#tabs {  
  width: 100%;  
  overflow: hidden;  
}  

.tab {  
  display: inline-block;  
  padding: 10px;  
  background-color: #fff;  
  cursor: pointer;  
}  

/* 样式化面板 */  
#panels {  
  width: 100%;  
  overflow: auto;  
}  

.panel {  
  display: none;  
  padding: 10px;  
  border: 1px solid #ccc;  
}  

/* 高亮激活的选项卡和显示面板 */  
.tab.active {  
  background-color: #123456; 
  color:#fff;
}  
.panel.active {  
  background-color: #fff;
  display: block;  
}
```

:::

### 省市级联

::: normal-demo 省市级联

```html
<div class="container">
  <div class="province">
    <div class="title">省份</div>
    <select placeholder="请选择省份" id="provinceSelect"></select>
  </div>
  <div class="city">
    <div class="title">城市</div>
    <select placeholder="请选择城市" id="citySelect"></select>
  </div>
  <div class="county">
    <div class="title">县/区</div>
    <select placeholder="请选择县/区" id="countySelect"></select>
  </div>
</div>
```

```css
/* 样式化容器 */  
.container {  
  width: 600px;  
  display:flex;
  align-items:center;
  justify-content:space-between;
}  

/* 样式化省份选择框 */  
.province,.city,.county {  
  flex:0.3;
  padding: 10px;  
  border: 1px solid #ccc;  
  border-radius: 5px; 
  display:flex;
  justify-content:space-around;
}  

.title {  
  font-weight: bold;  
  margin-bottom: 10px;  
}  

```

```js
var data = [
  {
    code: '110000',
    value: '北京市',
    children: [
      {
        code: '110100',
        value: '北京市',
        children: [
          {
            code: '110101',
            value: '东城区',
          },
          {
            code: '110102',
            value: '西城区',
          },
          {
            code: '110105',
            value: '朝阳区',
          },
          {
            code: '110106',
            value: '丰台区',
          },
          {
            code: '110107',
            value: '石景山区',
          },
          {
            code: '110108',
            value: '海淀区',
          },
          {
            code: '110109',
            value: '门头沟区',
          },
          {
            code: '110111',
            value: '房山区',
          },
          {
            code: '110112',
            value: '通州区',
          },
          {
            code: '110113',
            value: '顺义区',
          },
          {
            code: '110114',
            value: '昌平区',
          },
          {
            code: '110115',
            value: '大兴区',
          },
          {
            code: '110116',
            value: '怀柔区',
          },
          {
            code: '110117',
            value: '平谷区',
          },
          {
            code: '110118',
            value: '密云区',
          },
          {
            code: '110119',
            value: '延庆区',
          },
        ],
      },
    ],
  },
  {
    code: '320000',
    value: '江苏省',
    children: [
      {
        code: '320100',
        value: '南京市',
        children: [
          {
            code: '320102',
            value: '玄武区',
          },
          {
            code: '320104',
            value: '秦淮区',
          },
          {
            code: '320105',
            value: '建邺区',
          },
          {
            code: '320106',
            value: '鼓楼区',
          },
          {
            code: '320111',
            value: '浦口区',
          },
          {
            code: '320113',
            value: '栖霞区',
          },
          {
            code: '320114',
            value: '雨花台区',
          },
          {
            code: '320115',
            value: '江宁区',
          },
          {
            code: '320116',
            value: '六合区',
          },
          {
            code: '320117',
            value: '溧水区',
          },
          {
            code: '320118',
            value: '高淳区',
          },
        ],
      },
      {
        code: '320200',
        value: '无锡市',
        children: [
          {
            code: '320205',
            value: '锡山区',
          },
          {
            code: '320206',
            value: '惠山区',
          },
          {
            code: '320211',
            value: '滨湖区',
          },
          {
            code: '320213',
            value: '梁溪区',
          },
          {
            code: '320214',
            value: '新吴区',
          },
          {
            code: '320281',
            value: '江阴市',
          },
          {
            code: '320282',
            value: '宜兴市',
          },
        ],
      },
      {
        code: '320300',
        value: '徐州市',
        children: [
          {
            code: '320302',
            value: '鼓楼区',
          },
          {
            code: '320303',
            value: '云龙区',
          },
          {
            code: '320305',
            value: '贾汪区',
          },
          {
            code: '320311',
            value: '泉山区',
          },
          {
            code: '320312',
            value: '铜山区',
          },
          {
            code: '320321',
            value: '丰县',
          },
          {
            code: '320322',
            value: '沛县',
          },
          {
            code: '320324',
            value: '睢宁县',
          },
          {
            code: '320381',
            value: '新沂市',
          },
          {
            code: '320382',
            value: '邳州市',
          },
        ],
      },
      {
        code: '320400',
        value: '常州市',
        children: [
          {
            code: '320402',
            value: '天宁区',
          },
          {
            code: '320404',
            value: '钟楼区',
          },
          {
            code: '320411',
            value: '新北区',
          },
          {
            code: '320412',
            value: '武进区',
          },
          {
            code: '320413',
            value: '金坛区',
          },
          {
            code: '320481',
            value: '溧阳市',
          },
        ],
      },
      {
        code: '320500',
        value: '苏州市',
        children: [
          {
            code: '320505',
            value: '虎丘区',
          },
          {
            code: '320506',
            value: '吴中区',
          },
          {
            code: '320507',
            value: '相城区',
          },
          {
            code: '320508',
            value: '姑苏区',
          },
          {
            code: '320509',
            value: '吴江区',
          },
          {
            code: '320581',
            value: '常熟市',
          },
          {
            code: '320582',
            value: '张家港市',
          },
          {
            code: '320583',
            value: '昆山市',
          },
          {
            code: '320585',
            value: '太仓市',
          },
        ],
      },
      {
        code: '320600',
        value: '南通市',
        children: [
          {
            code: '320602',
            value: '崇川区',
          },
          {
            code: '320611',
            value: '港闸区',
          },
          {
            code: '320612',
            value: '通州区',
          },
          {
            code: '320623',
            value: '如东县',
          },
          {
            code: '320681',
            value: '启东市',
          },
          {
            code: '320682',
            value: '如皋市',
          },
          {
            code: '320684',
            value: '海门市',
          },
          {
            code: '320685',
            value: '海安市',
          },
        ],
      },
      {
        code: '320700',
        value: '连云港市',
        children: [
          {
            code: '320703',
            value: '连云区',
          },
          {
            code: '320706',
            value: '海州区',
          },
          {
            code: '320707',
            value: '赣榆区',
          },
          {
            code: '320722',
            value: '东海县',
          },
          {
            code: '320723',
            value: '灌云县',
          },
          {
            code: '320724',
            value: '灌南县',
          },
        ],
      },
      {
        code: '320800',
        value: '淮安市',
        children: [
          {
            code: '320803',
            value: '淮安区',
          },
          {
            code: '320804',
            value: '淮阴区',
          },
          {
            code: '320812',
            value: '清江浦区',
          },
          {
            code: '320813',
            value: '洪泽区',
          },
          {
            code: '320826',
            value: '涟水县',
          },
          {
            code: '320830',
            value: '盱眙县',
          },
          {
            code: '320831',
            value: '金湖县',
          },
        ],
      },
      {
        code: '320900',
        value: '盐城市',
        children: [
          {
            code: '320902',
            value: '亭湖区',
          },
          {
            code: '320903',
            value: '盐都区',
          },
          {
            code: '320904',
            value: '大丰区',
          },
          {
            code: '320921',
            value: '响水县',
          },
          {
            code: '320922',
            value: '滨海县',
          },
          {
            code: '320923',
            value: '阜宁县',
          },
          {
            code: '320924',
            value: '射阳县',
          },
          {
            code: '320925',
            value: '建湖县',
          },
          {
            code: '320981',
            value: '东台市',
          },
        ],
      },
      {
        code: '321000',
        value: '扬州市',
        children: [
          {
            code: '321002',
            value: '广陵区',
          },
          {
            code: '321003',
            value: '邗江区',
          },
          {
            code: '321012',
            value: '江都区',
          },
          {
            code: '321023',
            value: '宝应县',
          },
          {
            code: '321081',
            value: '仪征市',
          },
          {
            code: '321084',
            value: '高邮市',
          },
        ],
      },
      {
        code: '321100',
        value: '镇江市',
        children: [
          {
            code: '321102',
            value: '京口区',
          },
          {
            code: '321111',
            value: '润州区',
          },
          {
            code: '321112',
            value: '丹徒区',
          },
          {
            code: '321181',
            value: '丹阳市',
          },
          {
            code: '321182',
            value: '扬中市',
          },
          {
            code: '321183',
            value: '句容市',
          },
        ],
      },
      {
        code: '321200',
        value: '泰州市',
        children: [
          {
            code: '321202',
            value: '海陵区',
          },
          {
            code: '321203',
            value: '高港区',
          },
          {
            code: '321204',
            value: '姜堰区',
          },
          {
            code: '321281',
            value: '兴化市',
          },
          {
            code: '321282',
            value: '靖江市',
          },
          {
            code: '321283',
            value: '泰兴市',
          },
        ],
      },
      {
        code: '321300',
        value: '宿迁市',
        children: [
          {
            code: '321302',
            value: '宿城区',
          },
          {
            code: '321311',
            value: '宿豫区',
          },
          {
            code: '321322',
            value: '沭阳县',
          },
          {
            code: '321323',
            value: '泗阳县',
          },
          {
            code: '321324',
            value: '泗洪县',
          },
        ],
      },
    ],
  },
];

// 过滤数据
function filterData(data) {
  return data.map(function (item) {
    var obj = {
      value: item.value,
    };
    if (item.children) {
      obj.children = filterData(item.children);
    }
    return obj;
  });
}
function render(item, dom) {
  var option = doc.createElement('option');
  option.value = item.value;
  option.innerHTML = item.value;
  dom.appendChild(option);
}
var newData = filterData(data);
var citySelect = document.getElementById('citySelect');
var countySelect = document.getElementById('countySelect');
var provinceSelect = document.getElementById('provinceSelect');
var citySelectedIndex = 0;
var provinceSelectedIndex = 0;
// 初始化省份数据
newData.forEach(function (item) {
  render(item, provinceSelect);
});
// 初始化市数据
newData[provinceSelectedIndex].children.forEach(function (child) {
  render(child, citySelect);
});
// 初始化县数据
newData[provinceSelectedIndex].children[citySelectedIndex].children.forEach(
  function (child) {
    render(child, countySelect);
  }
);
// 选择省份
provinceSelect.onchange = function () {
  provinceSelectedIndex = provinceSelect.selectedIndex;
  citySelect.innerHTML = '';
  countySelect.innerHTML = '';
  // 市
  newData[provinceSelectedIndex].children.forEach(function (item) {
    render(item, citySelect);
  });
  // 区
  newData[provinceSelectedIndex].children[0].children.forEach(function (
    item
  ) {
    render(item, countySelect);
  });
};
// 选择市
citySelect.onchange = function () {
  citySelectedIndex = citySelect.selectedIndex;
  countySelect.innerHTML = '';
  // 区
  newData[provinceSelectedIndex].children[
    citySelectedIndex
  ].children.forEach(function (item) {
    render(item, countySelect);
  });
};
```

:::

## vue

### TODOMVC

TODOMVC 是一个使用 Vue 开发的待办事项应用。

::: vue-playground TODOMVC

@file App.vue

```vue
<template>
<section class="todoapp">
  <TodoHeader @add="addTodo" v-model="title" />
  <TodoMain
    :list="filteredTodos"
    v-if="state.length"
    @toggle="toggleAll"
    @remove="removeTodo"
    @edit="editTodo"
    :editedTodo="editedTodo"
    @done="doneEdit"
    @cancel="cancelEdit"
  />
  <TodoFooter
    v-if="state.length"
    :visibility="visibility"
    :remaining="remaining"
    @remove="removeCompleted"
    :todos="state"
  />
</section>
</template>
<script setup>
import TodoHeader from './Header.vue';
import TodoMain from './Main.vue';
import TodoFooter from './Footer.vue';
import { ref, computed, watchEffect } from 'vue';
const STORAGE = 'todo-vue';
// 本地存储
const todo = [
{ id: 1, title: '抽烟', completed: false },
{ id: 2, title: '喝酒', completed: true },
{ id: 3, title: '烫头', completed: false },
];
// 添加的title
const title = ref('');
// todo
const state = ref(JSON.parse(localStorage.getItem(STORAGE)) ?? todo);
// 过滤
const filters = {
all: (todos) => todos,
active: (todos) => todos.filter((todo) => !todo.completed),
completed: (todos) => todos.filter((todo) => todo.completed),
};
let beforeEditCache = '';
// 过滤条件
const visibility = ref('all');
// 修改对象
const editedTodo = ref();
// 获取的状态
const filteredTodos = computed(() => filters[visibility.value](state.value));
const remaining = computed(() => filters.active(state.value).length);
// 浏览器路径变化
const onHashChange = () => {
const route = window.location.hash.replace(/#\/?/, '');
if (filters[route]) {
  visibility.value = route;
} else {
  window.location.hash = '';
  visibility.value = 'all';
}
};
// 添加todo
const addTodo = () => {
// 判断输入的值不为空
if (title.value.trim()) {
  state.value.push({
    id: Date.now(),
    title: title.value,
    completed: false,
  });
  title.value = '';
} else {
  alert('Please enter title');
}
};
// 全选
const toggleAll = (checked) => {
state.value.forEach((todo) => (todo.completed = checked));
};
// 修改
const editTodo = (todo) => {
beforeEditCache = todo.title;
editedTodo.value = todo;
};
// 删除
const removeTodo = (id) => {
state.value = state.value.filter((todo) => todo.id !== id);
};
// 删除全部的
const removeCompleted = () => {
state.value = filters.active(state.value);
};
const cancelEdit = (todo) => {
editedTodo.value = null;
todo.title = beforeEditCache;
};

const doneEdit = (todo) => {
if (editedTodo.value) {
  editedTodo.value = null;
  todo.title = todo.title.trim();
  if (!todo.title) removeTodo(todo.id);
}
};

// 持久化
watchEffect(() => {
localStorage.setItem(STORAGE, JSON.stringify(state.value));
});
// 处理路由
window.addEventListener('hashchange', onHashChange);
onHashChange();
</script>
<style>
@import 'https://unpkg.com/todomvc-app-css@2.4.1/index.css';
.todoapp{
min-height:200px;
}
</style>

```

@file Header.vue

```vue
<template>
<header class="header">
  <h1>todos</h1>
  <input
    class="new-todo"
    autofocus
    placeholder="What needs to be done?"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keyup.enter="$emit('add')"
  />
</header>
</template>
<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue', 'add']);
</script>

```

@file Main.vue

```vue
<template>
<section class="main">
  <input
    id="toggle-all"
    class="toggle-all"
    type="checkbox"
    @change="$emit('toggle', $event.target.checked)"
  />
  <label for="toggle-all">Mark all as complete</label>
  <ul class="todo-list">
    <li
      class="todo"
      v-for="item in list"
      :key="item.id"
      :class="{ completed: item.completed, editing: item === editedTodo }"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.completed" />
        <label @dblclick="$emit('edit', item)">{{ item.title }}</label>
        <button class="destroy" @click="$emit('remove', item.id)"></button>
      </div>
      <input
        class="edit"
        v-if="item === editedTodo"
        v-model="item.title"
        type="text"
        @vue:mounted="({ el }) => el.focus()"
        @blur="$emit('done', item)"
        @keyup.enter="$emit('done', item)"
        @keyup.escape="$emit('cancel', item)"
      />
    </li>
  </ul>
</section>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps(['list', 'editedTodo']);
const emit = defineEmits(['remove', 'toggle', 'edit', 'done', 'cancel']);
</script>

```

@file Footer.vue

```vue
<template>
<footer class="footer">
  <span class="todo-count">
    <strong>{{ remaining }}</strong>
    <span>{{ remaining === 1 ? ' item' : ' items' }} left</span>
  </span>
  <ul class="filters">
    <li>
      <a href="#/all" :class="{ selected: visibility === 'all' }">All</a>
    </li>
    <li>
      <a href="#/active" :class="{ selected: visibility === 'active' }"
        >Active</a
      >
    </li>
    <li>
      <a href="#/completed" :class="{ selected: visibility === 'completed' }"
        >Completed</a
      >
    </li>
  </ul>
  <button
    class="clear-completed"
    @click="$emit('remove')"
    v-show="todos.length > remaining"
  >
    Clear completed
  </button>
</footer>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps(['remaining', 'visibility', 'todos']);
const emit = defineEmits(['remove']);
</script>

```

:::

### 虚拟列表

虚拟列表（Virtual List）是一种可以解决大数据列表渲染性能问题的解决方案。
通过虚拟列表可以只渲染可视区域的数据，减少渲染开销，从而提高性能。

::: vue-playground 虚拟列表

@file App.vue

```vue
<template>
<div class="container" @scroll="onScroll">
  <div class="panel" ref="panel" :style="{ paddingTop: paddingTop + 'px' }">
    <div class="item" v-for="item in visibleList" :key="item">
      {{ item }}
    </div>
  </div>
</div>
</template>
<script setup>
import {ref,onMounted,computed} from 'vue'
const panel = ref(null); //列表容器DOM

//构造的长列表原始数据
const raw = Array(100000)
.fill(0)
.map((v, i) => `item-${i}`);
const count = 10; //实际渲染DOM的列表数量
const start = ref(0); //从长列表数组总截取数据的起点
const end = ref(10); //从长列表数组总截取数据的终点
const itemHeight = 30; //单个列表项的高度
const paddingTop = ref(0); //列表容器的上内边距
const totalHeight = raw.length * itemHeight; //原始数据理论上完全渲染后占据的总高度

const visibleList = computed(() => raw.slice(start.value, end.value)); //根据起点和终点获取要渲染的数据
onMounted(() => (panel.value.style.height = totalHeight + 'px')); //在mounted后设置列表容器的高度

//滚动-->根据滚动距离计算起点和终点的下标-->计算属性得到visibleList-->真实DOM被替换 同时设置paddingTop让元素视觉上没跳动
const onScroll = function (e) {
start.value = Math.floor(e.target.scrollTop / itemHeight); //当滚动后，重新计算起点的位置
end.value = start.value + count; //设置终点的位置
paddingTop.value = start.value * itemHeight;
};
</script>
<style>
* {
box-sizing: border-box;
margin: 0;
}

.container {
height: 100vh;
overflow-y: scroll;
}

.item {
border: 1px solid #eee;
line-height: 30px;
height: 30px;
padding: 0 10px;
cursor: pointer;
}
</style>
```

:::
