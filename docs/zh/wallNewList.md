# **_壁纸资讯公告列表_**

---

## **_接口地址_**

```js
https://tea.qingnian8.com/api/bizhi/wallNewsList
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

| 序号 |  参数名  | 参数值 | 是否必填 | 参数类型 |    描述说明    |
| :--: | :------: | :----: | :------: | :------: | :------------: |
|  1   |  select  |  true  |    是    | Boolean  | 是否为推荐资讯 |
|  2   | pageNum  |   1    |    是    |  String  |     第几页     |
|  3   | pageSize |   10   |    是    |  String  |   一页多少条   |

---

## **_响应示例_**

```ts
{
	"errCode": 0,
	"errMsg": "查询成功",
	"data": [
		{
			"_id": "65360ea7bd0220d7635bd34b",
			"view_count": 368,
			"publish_date": 1698041511788,
			"title": "小熊猫壁纸，版权公告",
			"author": "小龙虾",
			"select": true
		}
	],
	"timeCost": 90
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

| 序号 |    参数名    | 参数类型 |       描述说明        |
| :--: | :----------: | :------: | :-------------------: |
|  1   |  view_count  | Integer  |       阅读次数        |
|  2   | publish_date |   Date   | 发布时间，13 位时间戳 |
|  3   |    title     |  String  |       资讯标题        |
|  4   |    author    |  String  |        发布人         |
|  5   |    select    | Boolean  |    是否为推荐资讯     |
|  6   |     \_id     |  String  |        唯一 id        |
