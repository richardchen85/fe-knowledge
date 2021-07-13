# HTML & CSS 代码规范

本文包含 HTML 和 CSS 的编写规范，旨在增进合作、提高代码质量和支持基础设施建设。

## 通用规则

### 协议

优先使用 `https` 引入外部资源（包含图片、样式文件、脚本等），除非资源文件不支持 `https` 协议

不推荐写死为 `http` 协议引入资源，可以使用兼容方式代替：

```html
<!-- 优先使用 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- 可以使用 -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- 图片、样式文件等同理 -->
```

### 缩进

推荐 2 个空格缩进，不能同时混合使用 `tab` 和 空格

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>

<style>
  .example {
    color: blue;
  }
</style>
```

### 大小写

推荐使用小写，包含 `HTML` 标签名称、属性、属性值（text/CDATA 除外）；CSS 选择器、属性、属性值（字符串除外）

```nohighlight
<!-- 不推荐 -->
<A HREF="/">Home</A>

<!-- 推荐 -->
<img src="google.png" alt="Google">

/* 不推荐 */
color: #E5E5E5;

/* 推荐 */
color: #e5e5e5;
```

### 行尾空格

去掉行尾空格：没用并且影响 `diff`

### 文件编码

使用 UTF-8 (no BOM)

`HTML` 文件使用 `<meta charset="utf-8">` 声明编码，样式表不需要声明编码。

### 使用 TODO

```html
<!-- TODO: remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
```

## HTML

### Document Type

使用 `HTML5` 的：`<!DOCTYPE html>`

### HTML 验证

正确使用 `HTML` 标签：

```html
<!-- Not recommended -->
<title>Test</title>
<article>
  This is only a test.
  <!-- Recommended -->
  <!DOCTYPE html>
  <meta charset="utf-8" />
  <title>Test</title>
  <article>This is only a test.</article>
</article>
```

### 语义化

使用语义化的 `HTML` 标签：

```html
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>
<!-- Recommended -->
<a href="recommendations/">All recommendations</a>
```

### 多媒体引入兜底

```html
<!-- Not recommended -->
<img src="spreadsheet.png" />
<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot." />
```

### 关注点分离

表现和行为分离

```html
<!-- Not recommended -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen" />
<link rel="stylesheet" href="grid.css" media="screen" />
<link rel="stylesheet" href="print.css" media="print" />
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>
  I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
  <center>
    I can’t believe there’s no way to control the styling of my website without
    doing everything all over again!
  </center>
  <!-- Recommended -->
  <!DOCTYPE html>
  <title>My first CSS-only redesign</title>
  <link rel="stylesheet" href="default.css" />
</p>

<h1>My first CSS-only redesign</h1>
<p>
  I’ve read about this on a few sites but today I’m actually doing it:
  separating concerns and avoiding anything in the HTML of my website that is
  presentational.
</p>
<p>It’s awesome!</p>
```

### 实体引用符号

不要使用实体引用符号，除非是有特殊含义的 `HTML` 字符（例如 `<` 和 `&`；控制字符；和不可见字符）

```html
<!-- Not recommended -->
The currency symbol for the Euro is &ldquo;&eur;&rdquo;.
<!-- Recommended -->
The currency symbol for the Euro is “€”.
```

### type 属性

忽略样式表和 `script` 的 type 属性

```html
<!-- Not recommended -->
<link
  rel="stylesheet"
  href="https://www.google.com/css/maia.css"
  type="text/css"
/>
<!-- Recommended -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css" />
<!-- Not recommended -->
<script
  src="https://www.google.com/js/gweb/analytics/autotrack.js"
  type="text/javascript"
></script>
<!-- Recommended -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js"></script>
```

### 能用格式

在块、`list` 和 表格元素行尾使用新行，并在子元素前使用缩进

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
<ul>
  <li>Moe</li>
  <li>Larry</li>
  <li>Curly</li>
</ul>
<table>
  <thead>
    <tr>
      <th scope="col">Income</th>
      <th scope="col">Taxes</th>
  <tbody>
    <tr>
      <td>$ 5.00</td>
      <td>$ 4.50</td>
</table>
```

### 折行

一行很长的代码建议折行，以下方式都可以：

```html
<md-progress-circular
  md-mode="indeterminate"
  class="md-accent"
  ng-show="ctrl.loading"
  md-diameter="35"
>
</md-progress-circular>
<md-progress-circular
  md-mode="indeterminate"
  class="md-accent"
  ng-show="ctrl.loading"
  md-diameter="35"
>
</md-progress-circular>
<md-progress-circular
  md-mode="indeterminate"
  class="md-accent"
  ng-show="ctrl.loading"
  md-diameter="35"
>
</md-progress-circular>
```

### 引号

属性建议使用双引号

```html
<!-- Not recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>
<!-- Recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>
```

## CSS

### ID 和类名

使用有意义的 ID 和类名，不要使用与样式表现相关的名称。

```css
/* Not recommended: meaningless */
#yee-1901 {
}

/* Not recommended: presentational */
.button-green {
}
.clear {
}

/* Recommended: specific */
#gallery {
}
#login {
}
.video {
}

/* Recommended: generic */
.aux {
}
.alt {
}
```

名称要尽可能短，但要通俗易懂

```css
/* Not recommended */
#navigation {
}
.atr {
}

/* Recommended */
#nav {
}
.author {
}
```

避免在 ID 和类名前加元素类型限定

```css
/* Not recommended */
ul#example {
}
div.error {
}

/* Recommended */
#example {
}
.error {
}
```

### 使用缩写属性

```css
/* Not recommended */
.xxx {
  border-top-style: none;
  font-family: palatino, georgia, serif;
  font-size: 100%;
  line-height: 1.6;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0;
}

/* Recommended */
.xxx {
  border-top: 0;
  font: 100%/1.6 palatino, georgia, serif;
  padding: 0 1em 2em;
}
```

### 0 值和单位

非必要时，不在 0 后面加单位

```css
.xxx {
  flex: 0px; /* flex-basis 需要单位. */
  flex: 1 1 0px; /* IE11需要单位 */
  margin: 0;
  padding: 0;
}
```

### 0 开头的值

-1 到 1 之间的值，应该忽略前端的 0

```css
.xxx {
  font-size: 0.8em;
}
```

### 十六进制表示法

尽可能使用十六进制表示法表示颜色，建议使用 3 位色值

```css
.xxx {
  /* Not recommended */
  color: #eebbcc;
  /* Recommended */
  color: #ebc;
}
```

### 前缀

使用前缀当命名空间（选用）

```css
.adw-help {
} /* AdWords */
#maia-note {
} /* Maia */
```

### 命名规范

强烈推荐 [BEM 方案](http://getbem.com/introduction/)
