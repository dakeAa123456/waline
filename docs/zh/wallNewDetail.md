# **_壁纸资讯公告详情_**

---

## **_接口地址_**

```js
https://tea.qingnian8.com/api/bizhi/wallNewsDetail
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

| 序号 | 参数名 |          参数值          | 是否必填 | 参数类型 |  描述说明   |
| :--: | :----: | :----------------------: | :------: | :------: | :---------: |
|  1   |   id   | 653507c6466d417a3718e94b |    是    |  String  | 公告资讯 ID |

---

## **_响应示例_**

```ts
{
	"errCode": 0,
	"errMsg": "查询成功",
	"data": {
		"_id": "653507c6466d417a3718e94b",
		"view_count": 541,
		"publish_date": 1697974214505,
		"article_status": 1,
		"author": "小龙虾",
		"content": "<div><p><img src=\"https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/69e3dd04-1bc0-4aaa-809c-e37cbb587d58.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p><p>扫码关注“咸虾米圈子”微信公众号，分享最新的技术及动态。</p></div>",
		"select": true
	},
	"timeCost": 57
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

| 序号 |     参数名     | 参数类型 |        描述说明         |
| :--: | :------------: | :------: | :---------------------: |
|  1   |   view_count   | Integer  |        阅读次数         |
|  2   |  publish_date  |   Date   |  发布时间，13 位时间戳  |
|  3   |     title      |  String  |        资讯标题         |
|  4   | article_status | Integer  | 资讯状态 0 草稿，1 发布 |
|  5   |     author     |  String  |         发布人          |
|  6   |    content     |  String  |     详细的资讯内容      |
|  7   |     select     | Boolean  |     是否为推荐资讯      |
|  8   |      \_id      |  String  |         唯一 id         |
