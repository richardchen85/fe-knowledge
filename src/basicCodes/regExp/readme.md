# 正则表达式

```javascript
import { decimal } from './regExp';
new RegExp(decimal).test('3.14');
```

| 名称                   | 描述                                             |
| ---------------------- | ------------------------------------------------ |
| decimal                | 浮点数                                           |
| decimalPositive        | 正浮点数                                         |
| decimalNegative        | 负浮点数                                         |
| decimalPositiveAndZero | 非负浮点数（正浮点数 + 0）                       |
| decimalNegativeAndZero | 非正浮点数（负浮点数 + 0）                       |
| integer                | 整数                                             |
| integerPositive        | 正整数                                           |
| integerNegative        | 负整数                                           |
| number                 | 数字                                             |
| numberPositiveAndZero  | 正数（正整数 + 0）                               |
| numberNegativeAndZero  | 负数（负整数 + 0）                               |
| ascii                  | 仅 ACSII 字符                                    |
| chinese                | 仅中文                                           |
| colorHex               | 颜色 16 进制                                     |
| date                   | 日期 YYYY-MM-DD                                  |
| email                  | 邮件                                             |
| idCard                 | 身份证                                           |
| ip4                    | ip 地址                                          |
| letter                 | 字母                                             |
| letterLowercase        | 小写字母                                         |
| letterCapital          | 大写字母                                         |
| mobile                 | 手机                                             |
| notEmpty               | 非空                                             |
| password               | 密码                                             |
| fullNumber             | 数字                                             |
| picture                | 图片                                             |
| qq                     | QQ 号码                                          |
| rar                    | 压缩文件                                         |
| tel                    | 电话号码的函数(包括验证国内区号,国际区号,分机号) |
| url                    | url                                              |
| username               | 户名                                             |
| departmentName         | 单位名                                           |
| zipCode                | 邮编                                             |
| address                | 地址                                             |
