# **_我的评分/下载列表_**

---

## **_接口地址_**

```js
https://tea.qingnian8.com/api/bizhi/userWallList
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

| 序号 |  参数名  | 参数值 | 是否必填 | 参数类型 |             描述说明              |
| :--: | :------: | :----: | :------: | :------: | :-------------------------------: |
|  1   | pageNum  |   1    |    是    |  Number  |              第几页               |
|  2   | pageSize |   10   |    是    |  Number  |            一页多少条             |
|  3   |   type   | score  |    是    |  String  | score 我的评分，download 我的下载 |

---

## **_响应示例_**

```ts
{
	"errCode": 0,
	"errMsg": "查询成功",
	"data": [
		{
			"classid": "65237031189f860b7613acf4",
			"createTime": 1699335584683,
			"userScore": "4.5",
			"_id": "6530a53555b3379a663c09ca",
			"classname": "明星美女",
			"description": "颖宝美照，图片赖在微博@赵丽颖",
			"nickname": "努力搬砖ヾ(◍°∇°◍)ﾉﾞ",
			"score": "4.8",
			"smallPicurl": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/xxmBizhi/20231019/1697686630672_1_small.webp",
			"tabs": [
				"赵丽颖",
				"女明星"
			]
		}
	],
	"timeCost": 27
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
