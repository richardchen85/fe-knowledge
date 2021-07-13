# JavaScript 代码规范

## 源文件相关

### 文件名

- 纯 js 项目，文件使用小写，并使用 `-` 或者 `_` 作为分隔符
- 其它项目（如 `react` 等）推荐使用驼峰命名法，组件使用 pascal 命名法（即：首字母大写）

### 文件编码

统一使用 `UTF-8` 编码

### 特殊字符

#### 空格字符

除了行终止符序列之外，ASCII 水平空格字符（0x20）是唯一出现在源文件中任何地方的空格字符。 这意味着：

- 字符串文字中的所有其他空格字符均被转义，并且
- 制表符不用于缩进

#### 特殊转义序列

对于具有特殊转义序列（\'，\“，\\，\ b，\ f，\ n，\ r，\ t，\ v）的任何字符，将使用该序列，、
而不是相应的数字转义符（例如， \ x0a，\ u000a 或\ u {a}），不使用旧式八进制转义符。

#### 非 ASCII 字符

对于其余的非 ASCII 字符，使用实际的 Unicode 字符（例如 ∞）或等效的十六进制或 Unicode 转义（例如\ u221e），
这仅取决于哪个使代码更易于阅读和理解。

## 文件结构

文件整体结构按以下顺序：

- 证书或版权信息（如果有的话）
- @fileoverview JSDoc（如果有的话）
- ES import statements（ES module 文件）
- 实现代码

> 除了文件的实现代码（每行前面可能会出现 1 或 2 个空行）外，
> 每个出现的部分之间只有一个空行分隔

## 格式

### 列宽

默认 80 字符宽，最多不超过 120 字符宽

## 语言特性

### 变量声明

- 尽量使用 `const` 和 `let`
- 需要时声明，并且尽量给出初始值
- 必要时，声明数据类型

### for 循环

- 尽量使用 `for - of` 循环
- `for - in` 用在字典类型的对象上，并且要结合 `hasOwnProperty` 使用
- 建议使用 `for - of` 和 `Object.keys` 代替 `for - in`（可能的话）

### 相等判断

- 使用严格相等（不相等）：``=== / !==`
- 同时判断 `null` 和 `undefined` 时可以使用非严格相等

### 禁止使用的特性

- with
- eval 和 Function(...string)
- 修改内置对象

## 命名

- 包名使用 `lowerCamelCase`
- 类名 `UpperCamelCase`
- 方法名 `lowerCamelCase`
- 常量使用全大写 `CONSTANT_CASS`
- 参数名和本地变量名 `lowerCamelCase`

## JSDoc

### 基本格式

```javascript
/**
 * Multiple lines of JSDoc text are written here,
 * wrapped normally.
 * @param {number} arg A number to do something to.
 */
function doSomething(arg) {}
```

### 类组件

```javascript
/**
 * A fancier event target that does cool things.
 * @implements {Iterable<string>}
 */
class MyFancyTarget extends EventTarget {
  /**
   * @param {string} arg1 An argument that makes this more interesting.
   * @param {!Array<number>} arg2 List of numbers to be processed.
   */
  constructor(arg1, arg2) {
    // ...
  }
}

/**
 * Records are also helpful.
 * @extends {Iterator<TYPE>}
 * @record
 * @template TYPE
 */
class Listable {
  /** @return {TYPE} The next item in line to be returned. */
  next() {}
}
```

### 属性

```javascript
/** My class. */
class MyClass {
  /** @param {string=} someString */
  constructor(someString = 'default string') {
    /** @private @const {string} */
    this.someString_ = someString;

    /** @private @const {!OtherType} */
    this.someOtherThing_ = functionThatReturnsAThing();

    /**
     * Maximum number of things per pane.
     * @type {number}
     */
    this.someProperty = 4;
  }
}

/**
 * The number of times we'll try before giving up.
 * @const {number}
 */
MyClass.RETRY_COUNT = 33;
```

## 其它

整体格式通过 [prettier](https://prettier.io/) 控制

命名规范统一参考 `开发规范 -> 命名规范`
