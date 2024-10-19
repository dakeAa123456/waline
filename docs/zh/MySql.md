::: tip 温馨提示
此页面主要记录了云端数据库的相关信息，在日常工作中使用频率较高的数据表在这里都可以查询。此表仅供内部使用，严禁泄露！
:::

# 数据库列表

> 1.如下所示的数据库表是查询从 WCC 系统传输过来的 BOM,主要查询 BOM 是否为空的数据问题。

```ts{1}
select * from dake.w_idbgpl a where a.ORDERID like "%202308010031%";
select * from dake.w_idbprf a where a.ORDERID like "%202308010031%";  // [!code highlight]
select * from dake.w_idbpurch a where a.ORDERID like "%202307030036%";// [!code --]
select * from dake.w_idbspp a where a.ORDERID like "%202307030036%";// [!code ++]
```

> 2.如下图所展示的是扫码出入库系统的主表和副表，通过下面的 SQL 可以查询产品的扫码出入库相关信息。

```ts
select * from dake.packingnew a where a.ProductNo="D060010030192"
and a.Batch="20240528-0831" and a.Location=1 and a.ProductHousePosName='K';
select * from dake.packingnewdetail a where a.PackingNewId=5691;   // [!code focus]
```

> 3.如下图所展示的是扫码出入库系统核对库存，查询入库或出库出现重复与负数问题的 SQL。

```ts
select * from dake.packingnewdetail a where a.LogType in (1,2)
and a.status !=-1 and a.PackingNewId in (
select a.PackingNewId from dake.packingnewdetail a where a.LogType in (1,2)
group by a.PackingNewId,a.LogType
having count(*)>1
) group by a.PackingNewId,a.LogType,a.PackingNo,a.CreateTime
```

> 4.查询两张表的 SQL 如下图所示。

```ts
select * from dake.packingnewdetail a,dake.packingnew
b where a.PackingNewId=b.PackingNewId  and b.ProductNo in ('D060010051702') and
a.CreateTime='2024-07-08 16:01:52'  and a.LogType in (3,4) and
a.ProductHousePosId in ('464','463') order by a.PackingNo  ;
```

---

# 状态码 packingnew

| 序号 | status |  含义  |
| :--: | :----: | :----: |
|  一  |   1    | 待入库 |
|  二  |   2    | 已入库 |
|  三  |   5    | 已出库 |
|  四  |   -1   | 已删除 |

# 状态码 packingnewdetail

| 序号 | logType |   含义   |
| :--: | :-----: | :------: |
|  一  |    0    |  初始值  |
|  二  |    1    |  已入库  |
|  三  |    2    |  已出库  |
|  四  |    3    |  移出库  |
|  五  |    4    |  移入库  |
|  六  |    5    |  已删除  |
|  七  |    7    | 恢复删除 |
|  八  |    6    | 出库回退 |
|  九  |   10    |   修改   |

# 微信小程序秘钥

| 序号 |         ID         |               秘钥               |
| :--: | :----------------: | :------------------------------: |
|  1   | wx92313372b53089c1 | 09b4c144c98dd40934528bb94a556ff7 |

<github />
