# **_首页海报列表_**

---

## **_接口地址_**

```js
https://tea.qingnian8.com/api/bizhi/homeBanner
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

## **_响应示例_**

```ts
{
	"errCode": 0,
	"errMsg": "查询成功",
	"data": [
		{
			"_id": "654893ad652341d97ccbc9c7",
			"sort": 1,
			"target": "self",
			"picurl": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/xxmBizhi/banner/1699255179817_5858.jpg",
			"url": "/pages/list/list?id=6524adaffe975f09c72ce896&name=创意色彩",
            "appid":""
		}
	],
	"timeCost": 2
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

| 序号 | 参数名 | 参数类型 |                描述说明                 |
| :--: | :----: | :------: | :-------------------------------------: |
|  1   |  url   |  String  |              跳转链接地址               |
|  2   |  sort  | Integer  |                排序字段                 |
|  3   | picurl |  String  |                 缩略图                  |
|  4   | target |  String  | 跳转方式，默认：self，外站：miniProgram |
|  5   | appid  |  String  |           外部小程序的 app-id           |
|  6   |  \_id  |  String  |                 唯一 id                 |
