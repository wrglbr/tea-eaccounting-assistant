from random import shuffle

fetcher_items_config = [
    # Fountain Stuff
    61700000002,  # 磁轨炮冲击加速器蓝图 I
    61700000004,  # 磁轨炮冲击加速器蓝图 II
    61700000006,  # 磁轨炮冲击加速器蓝图 III
    61700010002,  # 磁轨炮范围扩大装置蓝图 I
    61700010004,  # 磁轨炮范围扩大装置蓝图 II
    61700010006,  # 磁轨炮范围扩大装置蓝图 III
    61700020002,  # 磁轨炮节能设备蓝图 I
    61700020004,  # 磁轨炮节能设备蓝图 II
    61700020006,  # 磁轨炮节能设备蓝图 III
    61700030002,  # 磁轨炮射速调节装置蓝图 I
    61700030004,  # 磁轨炮射速调节装置蓝图 II
    61700030006,  # 磁轨炮射速调节装置蓝图 III
    61700040002,  # 磁轨炮冷凝混合管理单元蓝图 I
    61700040004,  # 磁轨炮冷凝混合管理单元蓝图 II
    61700040006,  # 磁轨炮冷凝混合管理单元蓝图 III

    61710000002,  # 动态燃料控制阀蓝图 I
    61710000004,  # 动态燃料控制阀蓝图 II
    61710000006,  # 动态燃料控制阀蓝图 III
    61710060002,  # 超空间速度调节器蓝图 I
    61710060004,  # 超空间速度调节器蓝图 II
    61710060006,  # 超空间速度调节器蓝图 III
    61710030002,  # 货柜舱优化改造蓝图 I
    61710030004,  # 货柜舱优化改造蓝图 II
    61710030006,  # 货柜舱优化改造蓝图 III
    61710010002,  # 辅助推进器蓝图 I
    61710010004,  # 辅助推进器蓝图 II
    61710010006,  # 辅助推进器蓝图 III
    61710020002,  # 复合碳素引擎舱蓝图 I
    61710020004,  # 复合碳素引擎舱蓝图 II
    61710020006,  # 复合碳素引擎舱蓝图 III
    61710040002,  # 希格斯粒子锚蓝图 I
    61710040004,  # 希格斯粒子锚蓝图 II
    61710040006,  # 希格斯粒子锚蓝图 III
    61710050002,  # 跃迁核心优化系统蓝图 I
    61710050004,  # 跃迁核心优化系统蓝图 II
    61710050006,  # 跃迁核心优化系统蓝图 III

    61718030002,  # 反动能横贯舱壁蓝图 I
    61718030004,  # 反动能横贯舱壁蓝图 II
    61718030006,  # 反动能横贯舱壁蓝图 III
    61718040002,  # 反热能横贯舱壁蓝图 I
    61718040004,  # 反热能横贯舱壁蓝图 II
    61718040006,  # 反热能横贯舱壁蓝图 III
    61718020002,  # 反电磁横贯舱壁蓝图 I
    61718020004,  # 反电磁横贯舱壁蓝图 II
    61718020006,  # 反电磁横贯舱壁蓝图 III
    61718010002,  # 反爆破横贯舱壁蓝图 I
    61718010004,  # 反爆破横贯舱壁蓝图 II
    61718010006,  # 反爆破横贯舱壁蓝图 III
    61718000002,  # 横贯舱壁蓝图 I
    61718000004,  # 横贯舱壁蓝图 II
    61718000006,  # 横贯舱壁蓝图 III

    64000020006,  # MK5 地精灵蓝图
    64000020008,  # MK7 地精灵蓝图
    64000020010,  # MK9 地精灵蓝图
    64000120006,  # MK5 战锤蓝图
    64000120008,  # MK7 战锤蓝图
    64000120010,  # MK9 战锤蓝图
    64000220008,  # MK7 蛮妖蓝图
    64000220010,  # MK9 蛮妖蓝图
    64000320008,  # MK7 卫兵蓝图
    64000320010,  # MK9 卫兵蓝图

    44020000004,  # 盖伦特4级受损结构
    44020000005,  # 盖伦特5级受损结构
    44020000006,  # 盖伦特6级受损结构
    44020000007,  # 盖伦特7级受损结构
    44020000008,  # 盖伦特8级受损结构
    44020000009,  # 盖伦特9级受损结构
    44020000010,  # 盖伦特10级受损结构
    44090000000,  # 天蛇受损结构

    # Delve Stuff
    64000100006,  # MK5 渗透者蓝图
    64000100008,  # MK7 渗透者蓝图
    64000200008,  # MK7 执政官蓝图
    64000000006,  # MK5 侍僧蓝图
    64000000008,  # MK7 侍僧蓝图
    64000300008,  # MK7 监护官蓝图

    61540000006,  # MK5 小型群体装甲维修器蓝图
    61540000008,  # MK7 小型群体装甲维修器蓝图
    61540100006,  # MK5 中型群体装甲维修器蓝图
    61540100008,  # MK7 中型群体装甲维修器蓝图
    61540200008,  # MK7 大型群体装甲维修器蓝图

    61541000006,  # MK5 小型群体电容传输器蓝图
    61541000008,  # MK7 小型群体电容传输器蓝图
    61541100006,  # MK5 中型群体电容传输器蓝图
    61541100008,  # MK7 中型群体电容传输器蓝图
    61541200008,  # MK7 大型群体电容传输器蓝图

    61702000002,  # 激光炮冲击加速器蓝图 I
    61702000004,  # 激光炮冲击加速器蓝图 II
    61702000006,  # 激光炮冲击加速器蓝图 III
    61702010002,  # 激光炮范围扩大设备蓝图 I
    61702010004,  # 激光炮范围扩大设备蓝图 II
    61702010006,  # 激光炮范围扩大设备蓝图 III
    61702020002,  # 激光炮释放过滤器蓝图 I
    61702020004,  # 激光炮释放过滤器蓝图 II
    61702020006,  # 激光炮释放过滤器蓝图 III
    61702030002,  # 激光炮发散调节装置蓝图 I
    61702030004,  # 激光炮发散调节装置蓝图 II
    61702030006,  # 激光炮发散调节装置蓝图 III
    61702040002,  # 冷凝能量管理单元蓝图 I
    61702040004,  # 冷凝能量管理单元蓝图 II
    61702040006,  # 冷凝能量管理单元蓝图 III

    61708000002,  # 纳米机器人加速器蓝图 I
    61708000004,  # 纳米机器人加速器蓝图 II
    61708000006,  # 纳米机器人加速器蓝图 III
    61708010002,  # 辅助纳米聚合器蓝图 I
    61708010004,  # 辅助纳米聚合器蓝图 II
    61708010006,  # 辅助纳米聚合器蓝图 III
    61708020002,  # 维修增效器蓝图 I
    61708020004,  # 维修增效器蓝图 II
    61708020006,  # 维修增效器蓝图 III
    61708030002,  # 三角装甲聚合器蓝图 I
    61708030004,  # 三角装甲聚合器蓝图 II
    61708030006,  # 三角装甲聚合器蓝图 III
    61708040002,  # 反爆破聚合器蓝图 I
    61708040004,  # 反爆破聚合器蓝图 II
    61708040006,  # 反爆破聚合器蓝图 III
    61708050002,  # 反电磁聚合器蓝图 I
    61708050004,  # 反电磁聚合器蓝图 II
    61708050006,  # 反电磁聚合器蓝图 III
    61708060002,  # 反动能聚合器蓝图 I
    61708060004,  # 反动能聚合器蓝图 II
    61708060006,  # 反动能聚合器蓝图 III
    61708070002,  # 反热能聚合器蓝图 I
    61708070004,  # 反热能聚合器蓝图 II
    61708070006,  # 反热能聚合器蓝图 III

    61711000002,  # 半导体记忆电池蓝图 I
    61711000004,  # 半导体记忆电池蓝图 II
    61711000006,  # 半导体记忆电池蓝图 III
    61711010002,  # 电容器控制电路蓝图 I
    61711010004,  # 电容器控制电路蓝图 II
    61711010006,  # 电容器控制电路蓝图 III
    61711020002,  # 辅助能量路由器蓝图 I
    61711020004,  # 辅助能量路由器蓝图 II
    61711020006,  # 辅助能量路由器蓝图 III
    61711030002,  # 锁定系统辅助控制器蓝图 I
    61711030004,  # 锁定系统辅助控制器蓝图 II
    61711030006,  # 锁定系统辅助控制器蓝图 III

    61714000002,  # 引力电容器升级蓝图 I
    61714000004,  # 引力电容器升级蓝图 II
    61714000006,  # 引力电容器升级蓝图 III
    61714010002,  # 放射范围约束装置蓝图 I
    61714010004,  # 放射范围约束装置蓝图 II
    61714010006,  # 放射范围约束装置蓝图 III

    61717000002,  # 采矿器能效提升器蓝图 I
    61717000004,  # 采矿器能效提升器蓝图 II
    61717000006,  # 采矿器能效提升器蓝图 III
    61717010002,  # 采矿器循环加速器蓝图 I
    61717010004,  # 采矿器循环加速器蓝图 II
    61717010006,  # 采矿器循环加速器蓝图 III
    61717020002,  # 采矿器距离控制器蓝图 I
    61717020004,  # 采矿器距离控制器蓝图 II
    61717020006,  # 采矿器距离控制器蓝图 III
    61717030002,  # 采矿器冷凝调节器蓝图 I
    61717030004,  # 采矿器冷凝调节器蓝图 II
    61717030006,  # 采矿器冷凝调节器蓝图 III

    61719000002,  # 无人机火力增幅装置蓝图 I
    61719000004,  # 无人机火力增幅装置蓝图 II
    61719000006,  # 无人机火力增幅装置蓝图 III
    61719010002,  # 无人机射程扩展装置蓝图 I
    61719010004,  # 无人机射程扩展装置蓝图 II
    61719010006,  # 无人机射程扩展装置蓝图 III
    61719020002,  # 无人机射速加强装置蓝图 I
    61719020004,  # 无人机射速加强装置蓝图 II
    61719020006,  # 无人机射速加强装置蓝图 III
    61719030002,  # 无人机控制加强装置蓝图 I
    61719030004,  # 无人机控制加强装置蓝图 II
    61719030006,  # 无人机控制加强装置蓝图 III

    61538000006,  # MK5 小型装甲连接模块蓝图
    61538000008,  # MK7 小型装甲连接模块蓝图
    61538100006,  # MK5 中型装甲连接模块蓝图
    61538100008,  # MK7 中型装甲连接模块蓝图
    61538200008,  # MK7 大型装甲连接模块蓝图

    44000000004,  # 艾玛4级受损结构
    44000000005,  # 艾玛5级受损结构
    44000000006,  # 艾玛6级受损结构
    44000000007,  # 艾玛7级受损结构
    44000000008,  # 艾玛8级受损结构
    44000000009,  # 艾玛9级受损结构
    44000000010,  # 艾玛10级受损结构

    44070000000,  # 血袭者受损结构

    44130000001,  # 星捷运中型受损结构
    44130000002,  # 星捷运大型受损结构

    42002000012,  # 重水
    42002000013,  # 悬浮等离子
    42002000014,  # 液化臭氧
    42002000015,  # 离子溶液
    42002000016,  # 同位素燃料
    42002000017,  # 等离子体团

    42001000000,  # 光泽合金
    42001000001,  # 光彩合金
    42001000002,  # 闪光合金
    42001000003,  # 浓缩合金
    42001000004,  # 精密合金
    42001000005,  # 杂色复合物
    42001000006,  # 纤维复合物
    42001000007,  # 透光复合物
    42001000008,  # 多样复合物
    42001000009,  # 光滑复合物
    42001000010,  # 晶体复合物
    42001000011,  # 黑暗复合物
    42001000020,  # 基础金属
    42001000021,  # 重金属
    42001000022,  # 贵金属
    42001000023,  # 反应金属
    42001000024,  # 有毒金属
    {
        # 活性气体
        'id': 42001000018,
        'also_fetch_buy_orders': True,
    },
    {
        # 稀有气体
        'id': 42001000019,
        'also_fetch_buy_orders': True,
    },
    {
        # 工业纤维
        'id': 42001000025,
        'also_fetch_buy_orders': True,
    },
    {
        # 超张力塑料
        'id': 42001000026,
        'also_fetch_buy_orders': True,
    },
    {
        # 聚芳酰胺
        'id': 42001000027,
        'also_fetch_buy_orders': True,
    },
    {
        # 冷却剂
        'id': 42001000028,
        'also_fetch_buy_orders': True,
    },
    {
        # 凝缩液
        'id': 42001000029,
        'also_fetch_buy_orders': True,
    },
    {
        # 建筑模块
        'id': 42001000030,
        'also_fetch_buy_orders': True,
    },
    {
        # 纳米体
        'id': 42001000031,
        'also_fetch_buy_orders': True,
    },
    {
        # 硅结构铸材
        'id': 42001000032,
        'also_fetch_buy_orders': True,
    },
    {
        # 灵巧单元建筑模块
        'id': 42001000033,
        'also_fetch_buy_orders': True,
    },

    41400000000,  # 烧焦的微电路
    41400000001,  # 烧焦的接口电路
    41400000002,  # 堆砌的能源电路
    41400000004,  # 损毁的触发机关
    41400000005,  # 损坏的近防系统
    41400000006,  # 烧毁的遥感探测处理器
    41400000008,  # 被污染的洛伦兹流体
    41400000009,  # 聚合导体
    41400000010,  # 受污染的纳米聚合体
    41400000011,  # 有故障的电力泵

    11100000006,  # MK5 小型远程电容传输装置
    11100000008,  # MK7 小型远程电容传输装置
    11100000010,  # MK9 小型远程电容传输装置
    11100100006,  # MK5 中型远程电容传输装置
    11100100008,  # MK7 中型远程电容传输装置
    11100100010,  # MK9 中型远程电容传输装置
    11100200010,  # MK9 大型远程电容传输装置

    11529000006,  # MK5 反应式装甲增强器
    11529000008,  # MK7 反应式装甲增强器
    11529000010,  # MK9 反应式装甲增强器
    11529000013,  # 帝国海军 反应式装甲增强器
    11529000024,  # 科波姆C 反应式装甲增强器

    11519000006,  # MK5 无人机伤害增效装置
    11519000008,  # MK7 无人机伤害增效装置
    11519000010,  # MK9 无人机伤害增效装置
    11519000013,  # 帝国海军 无人机伤害增效装置

    11514100006,  # MK5 100mm钢附甲板
    11514100008,  # MK7 100mm钢附甲板
    11514100010,  # MK9 100mm钢附甲板
    11514100013,  # 帝国海军 100mm钢附甲板
    11514200006,  # MK5 200mm钢附甲板
    11514200008,  # MK7 200mm钢附甲板
    11514200010,  # MK9 200mm钢附甲板
    11514200013,  # 帝国海军 200mm钢附甲板
    11514300006,  # MK5 400mm钢附甲板
    11514300008,  # MK7 400mm钢附甲板
    11514300010,  # MK9 400mm钢附甲板
    11514300013,  # 帝国海军 400mm钢附甲板
    11514400006,  # MK5 800mm钢附甲板
    11514400008,  # MK7 800mm钢附甲板
    11514400010,  # MK9 800mm钢附甲板
    11514400013,  # 帝国海军 800mm钢附甲板
    11514500010,  # MK9 1600mm钢附甲板
    11514500013,  # 帝国海军 1600mm钢附甲板

    11002110006,  # MK5 小型集束激光炮
    11002110008,  # MK7 小型集束激光炮
    11002110010,  # MK9 小型集束激光炮
    11002110013,  # 帝国海军 小型集束激光炮
    11002110025,  # 科必伊C 小型集束激光炮
    11002220006,  # MK5 中型集束激光炮
    11002220008,  # MK7 中型集束激光炮
    11002220010,  # MK9 中型集束激光炮
    11002220013,  # 帝国海军 中型集束激光炮
    11002220025,  # 科波姆C 中型集束激光炮
    11002310008,  # MK7 大型集束激光炮
    11002310010,  # MK9 大型集束激光炮
    11002310013,  # 帝国海军 大型集束激光炮
    11002310025,  # 科波斯C 大型集束激光炮
    11002510006,  # MK5 小型脉冲激光炮
    11002510008,  # MK7 小型脉冲激光炮
    11002510010,  # MK9 小型脉冲激光炮
    11002510013,  # 帝国海军 小型脉冲激光炮
    11002510025,  # 科必伊C 小型脉冲激光炮
    11002600006,  # MK5 中型脉冲激光炮
    11002600008,  # MK7 中型脉冲激光炮
    11002600010,  # MK9 中型脉冲激光炮
    11002600013,  # 帝国海军 中型脉冲激光炮
    11002600025,  # 科波姆C 中型脉冲激光炮
    11002710008,  # MK7 大型脉冲激光炮
    11002710010,  # MK9 大型脉冲激光炮
    11002710013,  # 帝国海军 大型脉冲激光炮
    11002710025,  # 科波斯C 大型脉冲激光炮

    11006100006,  # MK5 采矿器
    11006100008,  # MK7 采矿器
    11006100010,  # MK9 采矿器

    11008100006,  # MK5 露天采矿器
    11008100008,  # MK7 露天采矿器
    11008100010,  # MK9 露天采矿器

    11031000006,  # MK5 小型掠能器
    11031000008,  # MK7 小型掠能器
    11031000010,  # MK9 小型掠能器
    11031000013,  # 帝国海军 小型掠能器
    11031100006,  # MK5 中型掠能器
    11031100008,  # MK7 中型掠能器
    11031100010,  # MK9 中型掠能器
    11031100013,  # 帝国海军 中型掠能器
    11031200010,  # MK9 大型掠能器
    11031200013,  # 帝国海军 大型掠能器

    11102000006,  # MK5 小型远程装甲维修器
    11102000008,  # MK7 小型远程装甲维修器
    11102000010,  # MK9 小型远程装甲维修器
    11102000013,  # 帝国海军 小型远程装甲维修器
    11102000024,  # 科必伊C 小型远程装甲维修器
    11102100006,  # MK5 中型远程装甲维修器
    11102100008,  # MK7 中型远程装甲维修器
    11102100010,  # MK9 中型远程装甲维修器
    11102100013,  # 帝国海军 中型远程装甲维修器
    11102100024,  # 科波姆C 中型远程装甲维修器
    11102200010,  # MK9 大型远程装甲维修器
    11102200013,  # 帝国海军 大型远程装甲维修器
    11102200024,  # 科波斯C 大型远程装甲维修器

    11503000006,  # MK5 小型装甲维修器
    11503000008,  # MK7 小型装甲维修器
    11503000010,  # MK9 小型装甲维修器
    11503000013,  # 帝国海军 小型装甲维修器
    11503000024,  # 科必伊C 小型装甲维修器
    11503100006,  # MK5 中型装甲维修器
    11503100008,  # MK7 中型装甲维修器
    11503100010,  # MK9 中型装甲维修器
    11503100013,  # 帝国海军 中型装甲维修器
    11503100024,  # 科波姆C 中型装甲维修器
    11503200010,  # MK9 大型装甲维修器
    11503200013,  # 帝国海军 大型装甲维修器
    11503200024,  # 科波斯C 大型装甲维修器

    11506000006,  # MK5 散热槽
    11506000008,  # MK7 散热槽
    11506000010,  # MK9 散热槽
    11506000013,  # 帝国海军 散热槽
    11506000025,  # 科波姆C 散热槽

    11513100006,  # MK5 自适应装甲增强器
    11513100008,  # MK7 自适应装甲增强器
    11513100010,  # MK9 自适应装甲增强器
    11513100013,  # 帝国海军 自适应装甲增强器
    11513100024,  # 科波斯C 自适应装甲增强器

    # Common stuff
    {
        # 凡晶石
        'id': 51000000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 双多特石
        'id': 51013000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 同位原矿
        'id': 51008000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 基腹断岩
        'id': 51015000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 奥贝尔石
        'id': 51004000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 希莫非特
        'id': 51007000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 干焦岩
        'id': 51002000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 斜长岩
        'id': 51003000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 杰斯贝矿
        'id': 51006000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 水硼砂
        'id': 51005000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 灰岩
        'id': 51009000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 灼烧岩
        'id': 51001000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 片麻岩
        'id': 51011000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 艾克诺岩
        'id': 51014000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 黑赭石
        'id': 51010000000,
        'also_fetch_buy_orders': True,
    },

    {
        # 三钛合金
        'id': 41000000000,
        'also_fetch_buy_orders': True,
    },
    {
        # 类晶体胶矿
        'id': 41000000002,
        'also_fetch_buy_orders': True,
    },
    {
        # 类银超金属
        'id': 41000000003,
        'also_fetch_buy_orders': True,
    },
    {
        # 同位聚合体
        'id': 41000000004,
        'also_fetch_buy_orders': True,
    },
    {
        # 超新星诺克石
        'id': 41000000005,
        'also_fetch_buy_orders': True,
    },
    {
        # 晶状石英核岩
        'id': 41000000006,
        'also_fetch_buy_orders': True,
    },
    {
        # 超噬矿
        'id': 41000000007,
        'also_fetch_buy_orders': True,
    },
    {
        # 莫尔石
        'id': 41000000008,
        'also_fetch_buy_orders': True,
    },

    27021000003,  # 数据核心 - 电磁物理
    27021000008,  # 数据核心 - 高能物理
    27021000011,  # 数据核心 - 火箭科学
    27021000012,  # 数据核心 - 机械工程
    27021000013,  # 数据核心 - 激光物理

    27021000000,  # 数据核心 - 艾玛星舰工程
    27021000007,  # 数据核心 - 盖伦特星舰工程
    27021000014,  # 数据核心 - 加达里星舰工程
    27021000016,  # 数据核心 - 米玛塔尔星舰工程

    28008000013,  # 野兔成灾
    28008000016,  # 甜美的毒药
    28008000006,  # 血之友
    28008000010,  # 天使还是恶魔

    28007000000,  # 伊甸币
]

shuffle(fetcher_items_config)
