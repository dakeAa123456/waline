# **_用户个人信息_**

---

## **_接口地址_**

```js
https://tea.qingnian8.com/api/bizhi/userInfo
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
	"data": {
		"IP": "100.100.100.101",
		"address": {
			"country": "中国",
			"province": "浙江",
			"city": "杭州"
		},
		"downloadSize": 5,
		"scoreSize": 8
	},
	"timeCost": 132
}
```

| 序号 |  参数名  | 参数类型 |      描述说明      |
| :--: | :------: | :------: | :----------------: |
|  1   | errCode  | Integer  | 0：成功 400：失败  |
|  2   |  errMsg  |  String  |    查询结果描述    |
|  3   | timeCost | Integer  |    接口消耗时间    |
|  4   |   data   |  Object  | 个人信息对象，见下 |

---

## **_Data 参数_**

| 序号 |      参数名      | 参数类型 |      描述说明      |
| :--: | :--------------: | :------: | :----------------: |
|  1   |        IP        |  String  | 当前用户的 IP 地址 |
|  2   |   downloadSize   | Integer  |      下载次数      |
|  3   |    scoreSize     |  String  |    评分过多少次    |
|  4   |     address      |  Object  |     归属地对象     |
|  5   | address.country  |  String  |        国家        |
|  6   | address.province |  String  |        省份        |
|  7   |   address.city   |  String  |        城市        |
