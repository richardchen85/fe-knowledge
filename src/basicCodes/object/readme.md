# 常用对象处理方法

| 名称            | 描述                                                | 类型                               |
| --------------- | --------------------------------------------------- | ---------------------------------- |
| getEnumByValue  | 通过 value 获取枚举对象的项                         | Function(Enum: object, value: any) |
| serializeToForm | 将指定的 object 序列化为 x-www-form-urlencoded 格式 | Function(obj: object)              |
| parseFormString | 解析指定的 x-www-form-urlencoded 字符串             | Function(str: string) => object    |
