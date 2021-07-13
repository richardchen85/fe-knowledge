// 浮点数
export const decimal = '^([+-]?)\\d*\\.\\d+$';

// 正浮点数
export const decimalPositive = '^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$';

// 负浮点数
export const decimalNegative = '^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$';

// 浮点数
export const decimal3 = '^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$';

// 非负浮点数（正浮点数 + 0）
export const decimalPositiveAndZero =
  '^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$';

// 非正浮点数（负浮点数 + 0）
export const decimalNegativeAndZero =
  '^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$';

// 整数
export const integer = '^-?[1-9]\\d*$';

// 正整数
export const integerPositive = '^[1-9]\\d*$';

// 负整数
export const integerNegative = '^-[1-9]\\d*$';

// 数字
export const number = '^([+-]?)\\d*\\.?\\d+$';

// 正数（正整数 + 0）
export const numberPositiveAndZero = '^[1-9]\\d*|0$';

// 负数（负整数 + 0）
export const numberNegativeAndZero = '^-[1-9]\\d*|0$';

// 仅ACSII字符
export const ascii = '^[\\x00-\\xFF]+$';

// 仅中文
export const chinese = '^[\\u4e00-\\u9fa5]+$';

// 颜色16进制
export const colorHex = '^[a-fA-F0-9]{6}$';

// 日期 YYYY-MM-DD
export const date = '^\\d{4}(\\-|\\/|.)\\d{1,2}\\1\\d{1,2}$';

// 邮件
export const email =
  '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$';

// 身份证
export const idCard = '^[1-9]([0-9]{14}|[0-9]{17})$';
// ip地址
export const ip4 =
  '^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$';

// 字母
export const letter = '^[A-Za-z]+$';

// 小写字母
export const letterLowercase = '^[a-z]+$';

// 大写字母
export const letterCapital = '^[A-Z]+$';

// 手机
export const mobile = '^0?1(3|4|5|6|7|8)[0-9]{9}$';

// 非空
export const notEmpty = '^\\S+$';

// 密码
export const password = '^.*[A-Za-z0-9\\w_-]+.*$';

// 数字
export const fullNumber = '^[0-9]+$';

// 图片
export const picture = '(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$';

// QQ号码
export const qq = '^[1-9]*[1-9][0-9]*$';

// 压缩文件
export const rar = '(.*)\\.(rar|zip|7zip|tgz)$';

// 电话号码的函数(包括验证国内区号,国际区号,分机号)
export const tel = '^[0-9-()（）]{7,18}$';

// url
export const url = '^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$';

// 户名
export const username = '^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$';

// 单位名
export const departmentName = '^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$';

// 邮编
export const zipCode = '^\\d{6}$';

// 地址
export const address = '^[A-Za-z0-9_()（）\\#\\-\\u4e00-\\u9fa5]+$';
