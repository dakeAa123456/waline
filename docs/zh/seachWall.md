# **_搜索壁纸_**

---

## **_接口地址_**

```js
https://tea.qingnian8.com/api/bizhi/searchWall
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

## **_微信小程序扫码查看_**

![壁纸接口](../public/images/pandow.jpg)

---

## **_请求参数_**

| 序号 |  参数名  | 参数值 | 是否必填 | 参数类型 |  描述说明  |
| :--: | :------: | :----: | :------: | :------: | :--------: |
|  1   | keyword  |  美女  |    是    |  String  | 搜索关键字 |
|  2   | pageNum  |   1    |    是    |  String  |   第几页   |
|  3   | pageSize |   10   |    是    |  String  | 一页多少条 |

---

## **_响应示例_**

```ts
{
	"errCode": 0,
	"errMsg": "查询成功",
	"data": [
		{
			"description": "AI写真艺术绘画长发灵动的美女小姐姐。图源：头条@风姿卓越铅笔5E1",
			"classid": "6524ace7213929cbcee72e4d",
			"smallPicurl": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/xxmBizhi/20231107/1699332584747_0_small.webp",
			"tabs": [
				"AI绘画",
				"女神"
			],
			"_id": "6549c24d862066c6022f65d6",
			"score": "5",
			"nickname": "小楼听小雨"
		}
	],
	"total": 169,
	"timeCost": 174
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
