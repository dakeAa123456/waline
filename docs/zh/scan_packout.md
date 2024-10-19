# **_扫码出入库系统-成品出库 :shark:_**

## **_:green_apple: 产品出库_**

::: tip 功能介绍
此功能模块的主要作用是对已经打包入库的产品包装，选择合适的车牌号对应出库单号，扫描包装编号生成的二维码，然后点击出库提交按钮即可完成出库操作！
:::

## **_接口地址_**

```bash
http://test.api.99niucai.com/production/postpackingnewstatus
```

## _请求方式_

```bash
POST
```

## _请求参数_

|   参数名   |  参数值   | 是否必填 | 参数类型 |  描述说明  |                                         文档接口                                         |
| :--------: | :-------: | :------: | :------: | :--------: | :--------------------------------------------------------------------------------------: |
|    ids     |   58215   |    是    |  Number  |    主键    |                                                                                          |
|  logType   |     2     |    是    |  Number  | 出库状态码 |                                                                                          |
|  houseId   |    199    |    是    |  Number  |  仓库 ID   |                                                                                          |
| housePosId |    462    |    是    |  Number  |  库位 ID   |                                                                                          |
| outstoreno | C26245389 |    是    |  String  |  出库单号  | [产品出库](https://doc.apipost.net/docs/detail/338eb91adc64000?target_id=38e72d60bbb000) |

## **_:apple: 出库回退_**

::: tip 功能介绍
此功能模块的主要作用是当某个产品包装已经出库完成了，但是在装车时不小心破损了，需要临时换新的包装，新包装编号与破损的包装编号不是一致的
每个产品的包装编号和二维码都是独一无二的，出现这种情况就需要使用此功能将破损的包装编号回退到原来的库位，然后选择【产品出库】功能扫码出库，扫描新的包装编号即可。
:::

## **_接口地址_**

```bash
http://test.api.99niucai.com/production/postpackingnewstatus
```

## _请求方式_

```bash
POST
```

## _请求参数_

|   参数名   | 参数值 | 是否必填 | 参数类型 |  描述说明  |                                         文档接口                                         |
| :--------: | :----: | :------: | :------: | :--------: | :--------------------------------------------------------------------------------------: |
|    ids     | 58215  |    是    |  Number  |    主键    |                                                                                          |
|  logType   |   6    |    是    |  Number  | 出库状态码 |                                                                                          |
|  houseId   |  199   |    是    |  Number  |  仓库 ID   |                                                                                          |
| housePosId |  462   |    是    |  Number  |  库位 ID   |                                                                                          |
|  location  |   A    |    是    |  String  |    道号    | [出库回退](https://doc.apipost.net/docs/detail/338eded0a464000?target_id=38ec477e7bb00f) |

## **_:eggplant: 产品修改_**

::: tip 功能介绍
此功能模块的主要作用是当某个产品包装里面的参数有误，可以单独扫描包装二维码，进入产品详情进行修改，完成后提交修改即可！
:::

## **_接口地址_**

```bash
http://test.api.99niucai.com/production/getpackingnew
```

## _请求方式_

```bash
GET
```

## _请求参数_

| 参数名 |    参数值    | 是否必填 | 参数类型 | 描述说明 |                                         文档接口                                         |
| :----: | :----------: | :------: | :------: | :------: | :--------------------------------------------------------------------------------------: |
|  key   | PYH240922001 |    是    |  String  | 包装编号 |                                                                                          |
| status |      0       |    是    |  Number  |  初始值  | [产品修改](https://doc.apipost.net/docs/detail/338f23aaa464000?target_id=38efbe527bb01d) |

## **_接口地址_**

```bash
http://test.api.99niucai.com/production/updatepackingnew
```

## _请求方式_

```bash
POST
```

## _请求参数_

| 参数名 |  参数值  | 是否必填 | 参数类型 |     描述说明     |                                         文档接口                                         |
| :----: | :------: | :------: | :------: | :--------------: | :--------------------------------------------------------------------------------------: |
|  Data  | \*\*\*\* |    是    |   Json   | 传 Json 格式数据 | [修改明细](https://doc.apipost.net/docs/detail/338f2dbbe464000?target_id=38ee78d8bbb01b) |

## **_:tomato: 产品移库_**

::: tip 功能介绍
此功能模块的主要作用是当产品包装入库后，需要从 A 库位移动到 B 库位，此时可以单独扫描包装二维码，选择新的库位和道号即可！

温馨提示：此功能仅限对单个包装编号进行移动，需要单独对每个包装编号二维码进行扫码才能成功移库！
:::

## **_接口地址_**

```bash
http://test.api.99niucai.com/production/postpackingnewstatus
```

## _请求方式_

```bash
POST
```

## _请求参数_

|   参数名   | 参数值 | 是否必填 | 参数类型 |  描述说明  |                                         文档接口                                         |
| :--------: | :----: | :------: | :------: | :--------: | :--------------------------------------------------------------------------------------: |
|    ids     | 58215  |    是    |  Number  |    主键    |                                                                                          |
|  logType   |   3    |    是    |  Number  | 出库状态码 |                                                                                          |
|  houseId   |  199   |    是    |  Number  |  仓库 ID   |                                                                                          |
| housePosId |  462   |    是    |  Number  |  库位 ID   |                                                                                          |
|  location  |   A    |    是    |  String  |    道号    | [产品移库](https://doc.apipost.net/docs/detail/338f60ec4464000?target_id=38f506d83bb023) |

## **_:mango: 整堆移库_**

::: tip 功能介绍
此功能模块的主要作用是对 A 库位或者 B 库位里所有产品包装进行移动，此功能不再局限于只能移动一个产品包装，与上面的功能正好相反，
此功能是需要谨慎操作，移库完成后请注意检查！
:::

## **_接口地址_**

```bash
http://test.api.99niucai.com/production/postpackingnewbatch
```

## _请求方式_

```bash
POST
```

## _请求参数_

|    参数名     | 参数值 | 是否必填 | 参数类型 |  描述说明  |                                         文档接口                                         |
| :-----------: | :----: | :------: | :------: | :--------: | :--------------------------------------------------------------------------------------: |
|    logType    |   3    |    是    |  Number  | 出库状态码 |                                                                                          |
|    houseId    |  199   |    是    |  Number  |  仓库 ID   |                                                                                          |
|  housePosId   |  462   |    是    |  Number  |  库位 ID   |                                                                                          |
|   location    |   A    |    是    |  String  |    道号    |                                                                                          |
|  newhouseId   |  182   |    是    |  Number  | 新仓库 ID  |                                                                                          |
| newhousePosId |  466   |    是    |  Number  | 新库位 ID  |                                                                                          |
|  newlocation  |   F    |    是    |  String  |   新道号   | [整堆移库](https://doc.apipost.net/docs/detail/338f80f74c64000?target_id=38f67ca23bb033) |

## **_:kiwi_fruit: 作废/恢复_**

::: tip 功能介绍
此功能模块的主要作用是对当天已经打印出来但是未使用完的标签先进行作废处理，待第二天上班后如果还需要生产昨天的产品再进行标签
回收，可以继续使用，不用再去打印浪费标签纸了！节能环保，低碳生活！
:::

## **_标签作废_**

```bash
http://test.api.99niucai.com/production/postpackingnewstatus
```

## _请求方式_

```bash
POST
```

## _请求参数_

|   参数名   | 参数值 | 是否必填 | 参数类型 |  描述说明  |                                         文档接口                                         |
| :--------: | :----: | :------: | :------: | :--------: | :--------------------------------------------------------------------------------------: |
|    ids     | 58215  |    是    |  Number  |    主键    |                                                                                          |
|  logType   |   5    |    是    |  Number  | 出库状态码 |                                                                                          |
|  houseId   |  199   |    是    |  Number  |  仓库 ID   |                                                                                          |
| housePosId |  462   |    是    |  Number  |  库位 ID   |                                                                                          |
|  location  |   A    |    是    |  String  |    道号    | [标签作废](https://doc.apipost.net/docs/detail/338fc2ddc464000?target_id=38fa1ae63bb043) |

## **_标签恢复_**

```bash
http://test.api.99niucai.com/production/postpackingnewstatus
```

## _请求方式_

```bash
POST
```

## _请求参数_

|   参数名   | 参数值 | 是否必填 | 参数类型 |  描述说明  |                                         文档接口                                         |
| :--------: | :----: | :------: | :------: | :--------: | :--------------------------------------------------------------------------------------: |
|    ids     | 58215  |    是    |  Number  |    主键    |                                                                                          |
|  logType   |   7    |    是    |  Number  | 出库状态码 |                                                                                          |
|  houseId   |  199   |    是    |  Number  |  仓库 ID   |                                                                                          |
| housePosId |  462   |    是    |  Number  |  库位 ID   |                                                                                          |
|  location  |   A    |    是    |  String  |    道号    | [标签恢复](https://doc.apipost.net/docs/detail/338fd1e53464000?target_id=38fca0c23bb04f) |
