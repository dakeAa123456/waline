# **_壁纸大分类_**

---

## **_接口地址_**

```js
https://tea.qingnian8.com/api/bizhi/classify
```

---

## **_请求方式_**

```ts
GET;
```

---

## **_秘钥验证_**

| 序号 |   参数名   |   参数值   | 是否必填 | 参数类型 |    描述说明    |
| :--: | :--------: | :--------: | :------: | :------: | :------------: |
|  1   | access-key | dake123321 |    是    |  String  | 获得秘钥参数。 |

---

## **_扫码获取秘钥_**

![壁纸接口](../public/images/pandow.jpg)

---

## **_请求参数_**

| 序号 |  参数名  | 参数值 | 是否必填 | 参数类型 |  描述说明  |
| :--: | :------: | :----: | :------: | :------: | :--------: |
|  1   | pageNum  |   1    |    是    |  Number  |   第几页   |
|  2   | pageSize |   10   |    是    |  Number  | 一页多少条 |

---

## **_响应示例_**

```ts
{
	"errCode": 0,
	"errMsg": "查询成功",
	"data": [
		{
			"name": "可爱萌宠",
			"sort": 1,
			"picurl": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/xxmBizhi/20231010/1696900747351_2102.jpg",
			"select": true,
			"updateTime": 1698053820768,
			"_id": "6524a48f6523417a8a8b825d"
		},
		{
			"name": "平铺卡通",
			"sort": 2,
			"picurl": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/xxmBizhi/20231010/1696901099086_3215.jpg",
			"select": false,
			"updateTime": 1698110927368,
			"_id": "65237596189f860b7614d971"
		}
	],
	"total": 14,
	"timeCost": 132
}
```

| 序号 |  参数名  | 参数类型 |     描述说明      |
| :--: | :------: | :------: | :---------------: |
|  1   | errCode  | Integer  | 0：成功 400：失败 |
|  2   |  errMsg  |  String  |   查询结果描述    |
|  3   | timeCost | Integer  |   接口消耗时间    |
|  4   |   data   |  Array   |  详情数组，见下   |
|  5   |  total   | Integer  |      总条数       |

---

## **_Data 参数_**

| 序号 |   参数名   | 参数类型 |       描述说明       |
| :--: | :--------: | :------: | :------------------: |
|  1   |    name    |  String  |       分类名称       |
|  2   |    sort    | Integer  |       排序字段       |
|  3   |   picurl   |  String  |        缩略图        |
|  4   | updateTime |   Date   | 该分类内最后更新时间 |
|  5   |   appid    |  String  | 外部小程序的 app-id  |
|  6   |    \_id    |  String  |       唯一 id        |
