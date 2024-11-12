# **_单个壁纸详情_**

---

## **_接口地址_**

```js
https://tea.qingnian8.com/api/bizhi/detailWall
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

| 序号 | 参数名 |          参数值          | 是否必填 | 参数类型 | 描述说明 |
| :--: | :----: | :----------------------: | :------: | :------: | :------: |
|  1   |   id   | 6543440409664cd61412021d |    是    |  String  | 壁纸 ID  |

---

## **_响应示例_**

```ts
{
	"errCode": 0,
	"errMsg": "查询成功",
	"data": [
		{
			"_id": "6543440409664cd61412021d",
			"description": "美出高级感的AI绘画美女。图源：头条@汩汩AI",
			"classid": "6524ace7213929cbcee72e4d",
			"smallPicurl": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/xxmBizhi/20231102/1698907066245_0_small.webp",
			"tabs": [
				"AI美女",
				"CG绘画"
			],
			"score": "5",
			"nickname": "小丸子O"
		}
	],
	"timeCost": 33
}
```

| 序号 |  参数名  | 参数类型 |     描述说明      |
| :--: | :------: | :------: | :---------------: |
|  1   | errCode  | Integer  | 0：成功 400：失败 |
|  2   |  errMsg  |  String  |   查询结果描述    |
|  3   | timeCost | Integer  |   接口消耗时间    |
|  4   |   data   |  Array   |  详情数组，见下   |

---

## **_Data 参数_**

| 序号 |   参数名    | 参数类型 |    描述说明     |
| :--: | :---------: | :------: | :-------------: |
|  1   | description |  String  |    壁纸描述     |
|  2   |   classid   |  String  | 壁纸所属分类 ID |
|  3   | smallPicurl |  String  |    缩略小图     |
|  4   |    tabs     |  Array   |     标签组      |
|  5   |    score    |  String  |      评分       |
|  6   |    \_id     |  String  |     唯一 id     |
|  7   |  nickname   |  String  |   发布者昵称    |
