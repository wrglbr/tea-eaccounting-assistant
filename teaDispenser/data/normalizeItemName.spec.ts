import ItemIcon from './ItemIcon';
import { NormalizationResult, normalizeItemName } from './normalizeItemName';

describe('normalizeItemName', () => {
  it('works', async () => {
    const itemNames = [
      '秃鹫级',
      '茶隼级',
      '伊毕斯号',
      '探索级隐匿型',
      '富豪级隐匿型',
      '伊米卡斯级',
      '弦月级原型',
      '残月级原型',
      '狐鼬级',
      '茅斯卡特 小型来复磁',
      '火石 中型来复磁轨炮',
      '恶徒 中型短管磁轨炮',
      '恶徒 中型短B磁轨炮',
      '科必伊C 小型远程装...',
      '科波姆C 反应式装甲...',
      '科必伊C 小型装甲维...',
      '科波斯C 大型装甲维...',
      '科波斯C 大型远程装...',
      '科波斯C 大型集束激...',
      '科波姆C 中型装甲维...',
      '科波姆C 中型远程装...',
      '科必伊C 小型集束激...',
      '血袭者受损结构',
      '科必伊C 小型脉冲激...',
      '科波姆C 中型脉冲激...',
      'MK7大型集束激光炮',
      '科波斯C 大型集束激...',
      'MK7 中型脉冲激光炮',
      '科波姆C 中型脉冲激...',
      'MK7 中型掠能器',
      '科波姆C 中型远程装...',
      'MK7 无人机导航电脑',
      'MK7 全方位索敌连接',
      'MK7 损伤控制',
      '科波姆C 中型装甲维...',
      '艾玛B级受损结构',
      '商人 小型跃迁推进器',
      'MK5 中型跃迁推进器',
      '圣光 跃迁核心稳定器',
      '基础型 惯性稳定器',
      'MK7 胡蜂',
      '数据核心 一 激光物理',
      '舰载扫描与跃迁指南',
      '空间航行技术理论',
      'MK7 Medium Torpedo...',
      'MK7 Small Energy...',
      'MK7 Medium Energy...',
      'MK5 Covert Ops Cloakin...',
      `'DeaIer' Small...`,
      'MK5 Medium...',
      `'Aura' Warp Core...`,
      'Basic Inertial Stabilizer',
      'MK7 Wasp',
      'Datacore - Laser...',
      'Shipboard Scanning and',
      'Interstellar Navigation...',
      'Condor',
      'Kestrel',
      'Ibis',
      'Probe Covert Ops',
      'Magnate Covert Ops',
      'Imicus',
      'Xian-Yue Prototype',
      'Can-Yue Prototype',
      'Tayra',
      `'Musket' Small Rifled...`,
      `'FIintIock' Medium Rifle`,
      `'HustIer' Medium...`,
      'Slasher II',
      'Imious',
      'Warhead Calefaction...',
      'MK7 Warden',
      'Lv. 3 Pilot Medal',
      'Ancient Remains',
      'New Eden Source',
      'Ancient Treasure Map',
      'Vial of Mikramurka',
      'Magic Crystal Ball',
      'Dice of Jade',
      'Ancient Painblade',
      `Kri'tak Knife`,
      'Raata Wind Chimes',
      'Nursery Rhyme',
      'Onyx Heart of Valor',
      '~Onyx Heart of Valor',
      'Onyx Heart of Valor~',
      'Random text',
    ];
    const actual = await Promise.all(itemNames.map(run));

    expect(actual).toEqual([
      { type: 'ExactMatch', text: '秃鹫级' },
      { type: 'ExactMatch', text: '茶隼级' },
      { type: 'ExactMatch', text: '伊毕斯号' },
      { type: 'ExactMatch', text: '探索级隐匿型' },
      { type: 'ExactMatch', text: '富豪级隐匿型' },
      { type: 'ExactMatch', text: '伊米卡斯级' },
      { type: 'ExactMatch', text: '弦月级原型' },
      { type: 'ExactMatch', text: '残月级原型' },
      { type: 'ExactMatch', text: '狐鼬级' },
      { type: 'ExactMatch', text: '茅斯卡特 小型来复磁轨炮' },
      { type: 'ExactMatch', text: '火石 中型来复磁轨炮' },
      { type: 'ExactMatch', text: '恶徒 中型短管磁轨炮' },
      { type: 'ExactMatch', text: '恶徒 中型短管磁轨炮' },
      { type: 'ExactMatch', text: '科必伊C 小型远程装甲维修器' },
      { type: 'ExactMatch', text: '科波姆C 反应式装甲增强器' },
      { type: 'ExactMatch', text: '科必伊C 小型装甲维修器' },
      { type: 'ExactMatch', text: '科波斯C 大型装甲维修器' },
      { type: 'ExactMatch', text: '科波斯C 大型远程装甲维修器' },
      { type: 'ExactMatch', text: '科波斯C 大型集束激光炮' },
      { type: 'ExactMatch', text: '科波姆C 中型装甲维修器' },
      { type: 'ExactMatch', text: '科波姆C 中型远程装甲维修器' },
      { type: 'ExactMatch', text: '科必伊C 小型集束激光炮' },
      { type: 'ExactMatch', text: '血袭者受损结构' },
      { type: 'ExactMatch', text: '科必伊C 小型脉冲激光炮' },
      { type: 'ExactMatch', text: '科波姆C 中型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK7 大型集束激光炮' },
      { type: 'ExactMatch', text: '科波斯C 大型集束激光炮' },
      { type: 'ExactMatch', text: 'MK7 中型脉冲激光炮' },
      { type: 'ExactMatch', text: '科波姆C 中型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK7 中型掠能器' },
      { type: 'ExactMatch', text: '科波姆C 中型远程装甲维修器' },
      { type: 'ExactMatch', text: 'MK7 无人机导航电脑' },
      { type: 'ExactMatch', text: 'MK7 全方位索敌连接' },
      { type: 'ExactMatch', text: 'MK7 损伤控制' },
      { type: 'ExactMatch', text: '科波姆C 中型装甲维修器' },
      { type: 'ExactMatch', text: '艾玛8级受损结构' },
      { type: 'ExactMatch', text: '商人 小型跃迁推进器' },
      { type: 'ExactMatch', text: 'MK5 中型跃迁推进器' },
      { type: 'ExactMatch', text: '圣光 跃迁核心稳定器' },
      { type: 'ExactMatch', text: '基础型 惯性稳定器' },
      { type: 'ExactMatch', text: 'MK7 胡蜂' },
      { type: 'ExactMatch', text: '数据核心 - 激光物理' },
      { type: 'ExactMatch', text: '舰载扫描与跃迁指南' },
      { type: 'ExactMatch', text: '空间航行技术理论' },
      { type: 'ExactMatch', text: 'MK7 Medium Torpedo Launcher' },
      { type: 'NormalizationOnly', normalizedText: 'MK7 Small Energy N' },
      { type: 'NormalizationOnly', normalizedText: 'MK7 Medium Energy N' },
      { type: 'NormalizationOnly', normalizedText: 'MK5 Covert Ops Cloaking Device' },
      { type: 'NormalizationOnly', normalizedText: "'Dealer' Small" },
      { type: 'NormalizationOnly', normalizedText: 'MK5 Medium' },
      { type: 'ExactMatch', text: "'Aura' Warp Core Stabilizer" },
      { type: 'ExactMatch', text: 'Basic Inertial Stabilizer' },
      { type: 'ExactMatch', text: 'MK7 Wasp' },
      { type: 'ExactMatch', text: 'Datacore - Laser Physics' },
      { type: 'ExactMatch', text: 'Shipboard Scanning and Warping Guide' },
      { type: 'ExactMatch', text: 'Interstellar Navigation Technology' },
      { type: 'ExactMatch', text: 'Condor' },
      { type: 'ExactMatch', text: 'Kestrel' },
      { type: 'ExactMatch', text: 'Ibis' },
      { type: 'ExactMatch', text: 'Probe Covert Ops' },
      { type: 'ExactMatch', text: 'Magnate Covert Ops' },
      { type: 'ExactMatch', text: 'Imicus' },
      { type: 'ExactMatch', text: 'Xian-Yue Prototype' },
      { type: 'ExactMatch', text: 'Can-Yue Prototype' },
      { type: 'ExactMatch', text: 'Tayra' },
      { type: 'ExactMatch', text: "'Musket' Small Rifled Railgun" },
      { type: 'ExactMatch', text: "'Flintlock' Medium Rifled Railgun" },
      { type: 'NormalizationOnly', normalizedText: "'Hustler' Medium" },
      { type: 'ExactMatch', text: 'Slasher II' },
      { type: 'ExactMatch', text: 'Imicus' },
      { type: 'NormalizationOnly', normalizedText: 'Warhead Calefaction Catalyst I' },
      { type: 'ExactMatch', text: 'MK7 Warden' },
      { type: 'ExactMatch', text: 'Lv. 3 Pilot Medal' },
      { type: 'ExactMatch', text: 'Ancient Remains' },
      { type: 'ExactMatch', text: 'New Eden Source' },
      { type: 'ExactMatch', text: 'Ancient Treasure Map' },
      { type: 'ExactMatch', text: 'Vial of Mikramurka' },
      { type: 'ExactMatch', text: 'Magic Crystal Ball' },
      { type: 'ExactMatch', text: 'Dice of Jade' },
      { type: 'ExactMatch', text: 'Ancient Painblade' },
      { type: 'ExactMatch', text: "Kri'tak Knife" },
      { type: 'ExactMatch', text: 'Raata Wind Chimes' },
      { type: 'ExactMatch', text: 'Nursery Rhyme' },
      { type: 'ExactMatch', text: 'Onyx Heart of Valor' },
      { type: 'NoMatch' },
      { type: 'NoMatch' },
      { type: 'NoMatch' },
    ]);
  });

  it('works under exhaustive test', async () => {
    const itemNames: readonly (string | ItemNameData)[] = [
      'MK7 Small Pulse Laser',
      'Imperial Navy Small...',
      'Imperial Navy Medium',
      'Gistii C-Type Small Strik',
      'MK5 Miner',
      'MK7 Strip Miner',
      'MKS Small Missile...',
      "'ChaIIenger' Medium...",
      "'ChaIIenger' Medium",
      "'ChaIIenger' Medium...",
      "'ChaIIenger' Medium...",
      'Caldari Navy Medium...',
      '残月级原型',
      '火石 中型来薹磁轨炮',
      '商人 小型短簪磁轨炮',
      '恶徒 中型短管磁轨炮',
      '联邦海军 中型短管磁...',
      '绞架 小型导弹发射器',
      '挑战者 中型导弹发射...',
      '绞架 大型巡肮导弹发...',
      'Anti-Explosive Pump I...',
      'Anti-Explosive Pump II',
      'Anti-EM Pump I',
      'Anti-Thermal Pump I...',
      'Gravity Capacitor...',
      'Miner Efficiency...',
      'Miner Range Controller II...',
      'MK5 Small Group Shield',
      'MK7 Small Group...',
      'MK5 Medium Group...',
      'Railgun Discharge...',
      'Laser Ambit Extension I',
      'Laser Burst Aerator I...',
      'Algid Energy...',
      'Warhead Rigor Catalyst I...',
      'MK7 反应式装甲 增强...',
      'MK9 反应式装甲增强...',
      '城壕 反应式装甲增强...',
      '城壕 反应式装甲增强...',
      '帝国海军 反应式装甲...',
      '联邦海军 反应式装甲...',
      '联邦海军 反应式装甲...',
      '璀璨 反应式装甲 增强...',
      '克尔兽姆C 反应式装...',
      'MK3 反应式护盾力场',
      'MK5 反应式护盾力场',
      'MK5 反应式护盾力场',
      'MK7 400mm钢附 甲板',
      '堡垒 400mm钢附 甲板',
      '帝国海军 400mm钢附...',
      '帝国海军 400mm钢附...',
      '联邦海军 400mm钢附...',
      'MK5 BOOmm钢附 甲板',
      'MK7 BOOmm钢附 甲板',
      '堡垒 BOOmm钢附甲板',
      '堡垒 BOOmm钢附 甲板',
      '帝 国 海 军 BOOmm钢附...',
      '联邦海军 B00mm钢附...',
      '壁垒 1600mm钢附 甲板',
      '铁网 100mm钢附甲木反',
      '帝国海军 100mm钢附...',
      '联邦海军 100mm钢附...',
      '要塞 100mm钢附 甲板',
      'MK3 200mm钢 附 甲板',
      'MK5 200mm钢附 甲板',
      'MK7 200mm钢附 甲板',
      '铁网 200mm钢附 甲板',
      '联邦海军 200mm钢附',
      '要塞 200mm钢附 甲板',
      'MK5 400mm钢附 甲板',
      'MK7 400mm钢附 甲板',
      '偷窃 自适应装甲 增强...',
      '偷窃 自适应装甲增强...',
      '帝国海军 自适应装甲...',
      '联邦海军 自适应装甲...',
      '联邦海军 自适应装甲...',
      '联邦海军 自适应装甲...',
      '璀璨 自 适应装 甲 增强...',
      '科波斯C 自 适应装 甲...',
      'MK1 100mm钢附 甲板',
      'MK3 100mm钢附 甲板',
      'MK5 100mm钢附 甲板',
      'MK7 100mm钢附 甲板',
      '科波斯C 大型装甲维...',
      '科尔C 大型装甲维修器',
      'MK1 散热槽',
      'MK3 散热槽',
      'MK5 散热槽',
      'MK5 散热槽',
      'MK7 散热槽',
      '基础型 散热槽',
      '帝国海军 散热槽',
      '帝国海军 散热槽',
      '科波姆C 散热槽',
      'MK1磁性力场稳定器',
      '甲胃 小型装甲维修器',
      '帝国海军 小型装甲维...',
      '联邦海军 小型装甲维...',
      '骑士 小型装甲维修器',
      '科必伊C 小型装甲维...',
      'MK5 中型装甲维修器',
      'MK7 中型装甲维修器',
      'MK7 中型装甲维修器',
      'MK9 中型装甲维修器',
      '甲胃 中型装甲维修器',
      '帝国海军 中型装甲维...',
      '联邦海军 中型装甲维...',
      'MK7 无人机导航电脑',
      'MK7 无人机导航电脑',
      'MK9 无人机导航电脑',
      '破解者 无人机导航电...',
      '联邦海军 无f几导航',
      'MK5 全方位索敌连接',
      'MK7全方位索敌连接',
      'MK9 全方位索敌连接',
      '破解者 全方位索敌连...',
      '帝国海军 全方位索敌...',
      '联邦海军 全方位索敌...',
      '联邦海军 全方位索敌...',
      '帝国海军 小型远程装...',
      '宁静 小型远程装甲维...',
      'MK5 中型远程装甲维...',
      'MK5 中型远程装甲维...',
      'MK7 中型远程装甲维...',
      '比特尼克 中型远程装...',
      '帝国海军 中型远程装...',
      '科波姆C 中型远程装...',
      'MK9 大型远程装甲维...',
      '科波斯C 大型远程装',
      'MK5 隐形装置',
      'MK7隐形装置',
      'MK7 中型远程电容传...',
      '随从 中型远程电容传...',
      '随从 中型远程电容传...',
      '帝国海军 中型远程电...',
      '随从 大型远程电容传...',
      '帝国海军 大型远程电...',
      'MK5小型远程护盾回...',
      '微型 小型远程护盾回...',
      'MK3 小型远程装甲维...',
      'MK5 小型远程装甲维...',
      'MK7 小型远程装甲维...',
      '比特尼克 小型远程装...',
      '城壕 小型能呈中和器',
      'MK5 中型能呈中和器',
      '蒺藜 中型能皇中和器',
      '帝国海军 中型能呈中...',
      '蒺藜 大型能呈中和器',
      '帝国海军 大型能呈中...',
      'MK3 小型远程电容传...',
      'MK5 小型远程电容传...',
      '随从 小型远程电容传...',
      '帝国海军 小型远程电...',
      '骑士 小型远程电容传...',
      'MK5 中型远程电容传...',
      'MK5 小型掠能器',
      'MK5 小型掠能器',
      '吸血鬼 小型掠能器',
      '帝国海军 小型掠能器',
      '帝国海军 小型掠能器',
      '食灵者 小型掠能器',
      'MK5 中型掠能器',
      '吸血鬼 中型掠能器',
      '帝国海军 中型掠能器',
      'MK5小型能呈中和器',
      '蒺藜 小型能童中和器',
      '帝国海军 小型能呈中...',
      '科波斯C 大型脉冲激...',
      'MK5 小型自动加农炮',
      '共和舰队 小型自动加...',
      '共和舰队 中型自动加...',
      '吉斯塔姆C 中型自动...',
      '长者 大型自动加农炮',
      '摇摆 小型强袭加农炮',
      '共和舰队 小型强袭加...',
      '罪犯 小型强袭加农炮',
      'MK5 中型强袭加农炮',
      'MK5 中型强袭加农炮',
      'MK5 中型强袭加农炮',
      'MK7 中型脉冲激光炮',
      'MK7 中型脉冲激光炮',
      'MK7 中型脉冲激光炮',
      '马枪 中型脉冲激光炮',
      '马枪 中型脉冲激光炮',
      '马枪 中型脉冲激光炮',
      '帝国海军 中型脉冲激...',
      '帝国海军 中型脉冲激...',
      '科波姆C 中型脉冲激...',
      'MK7 大型脉冲激光炮',
      '战戟 大型脉冲激光炮',
      '帝国海军 大型脉冲激...',
      '帝国海军 中型集束激...',
      '仪式 中型集束激光炮',
      '科波姆C 中型集束激...',
      '投石车 大型集束激光...',
      '帝国海军 大型集束激...',
      '科波斯C 大型集束激...',
      'MK1小型脉冲激光炮',
      'MK3 小型脉冲激光炮',
      'MK5 小型脉冲激光炮',
      'MK5 小型脉冲激光炮',
      'MK7 小型脉冲激光炮',
      '长弓 小型脉冲激光炮',
      'MK7 大型短管磁轨炮',
      '骗子 大型短管磁轨炮',
      'MK3 小型集束激光炮',
      'MK7小型集束激光炮',
      'MK7 小型集束激光炮',
      '权杖 小型集束激光炮',
      '帝国海军 小型集束激...',
      '叛军 小型集束激光炮',
      '科必伊C 小型集束激...',
      'MK5 中型集束激光炮',
      'MK7 中型集束激光炮',
      '石弓 中型集束激光炮',
      'MK7 隐秘行动装置蓝...',
      'MK5 小型群体护盾回...',
      'MK7 小型群体电容传...',
      'MK5 中型群体电容传...',
      '磁轨炮节能设备蓝图I',
      '激光炮范围扩大设备...',
      '激光炮发散调节装置...',
      '冷凝能皇管理单元蓝...',
      '弹头强化辅助系统蓝...',
      '液压舱推进器蓝图I',
      '核心防御节能装置蓝...',
      '纳米机器人加速器蓝...',
      '维修增效器蓝图 II',
      '反爆破聚合器蓝图I',
      '反爆破聚合器蓝图 II',
      '反电磁聚合器蓝图I',
      '反动能聚合器蓝图I',
      '反热能聚合器蓝图I',
      '引力电容器升级蓝图I',
      '采矿器能效提升器蓝...',
      { name: '采矿器距离控制器蓝...', icon: { type: 'BlueprintIcon', techLevel: 3 } },
      '采矿器冷凝调节器蓝...',
      '采矿器冷凝调节器蓝...',
      '无人机火力增幅装置...',
      { name: '无人机射程扩展装置...', icon: { type: 'BlueprintIcon', techLevel: 2 } },
      '无人机射程扩展装置...',
      '无人机射速加强装置...',
      'MK3 侍僧蓝图',
      'MK5 侍僧蓝图',
      'MK7侍僧蓝图',
      'MK3 大黄蜂蓝图',
      'MK5 渗透者蓝图',
      'MK5 战锤蓝图',
      'MK7 战锤蓝图',
      'MK7 蛮妖蓝图',
      'MK7瓦尔基里',
      'MK7 狂战士',
      '数据核心 一 艾玛星舰...',
      '数据核心 一 电磁物理',
      '数据核心 一 盖伦特星',
      '数据核心 一 高能物理',
      '数据核心 一 火箭科学',
      '数据核心 一 机械工程',
      '数据核心 一 激光物理',
      '数据核心 一 加达里星...',
      '金属碎片',
      '三钛合金',
      '等离子体团',
      '艾玛4级受损结构',
      '艾玛5级受损结构',
      '艾玛6级受损结构',
      '艾玛7级受损结构',
      '艾玛7级受损结构',
      '艾玛B级受损结构',
      '艾玛9级受损结构',
      '艾玛10级受损结构',
      '加达里4级受损结构',
      '加达里5级受损结构',
      '加达里6级受损结构',
    ];
    const actual = await Promise.all(itemNames.map(run));

    expect(actual).toEqual([
      { type: 'ExactMatch', text: 'MK7 Small Pulse Laser' },
      { type: 'NormalizationOnly', normalizedText: 'Imperial Navy Small' },
      { type: 'NormalizationOnly', normalizedText: 'Imperial Navy Medium' },
      { type: 'ExactMatch', text: 'Gistii C-Type Small Strike Cannon' },
      { type: 'ExactMatch', text: 'MK5 Miner' },
      { type: 'ExactMatch', text: 'MK7 Strip Miner' },
      { type: 'ExactMatch', text: 'MK5 Small Missile Launcher' },
      { type: 'NormalizationOnly', normalizedText: "'Challenger' Medium" },
      { type: 'NormalizationOnly', normalizedText: "'Challenger' Medium" },
      { type: 'NormalizationOnly', normalizedText: "'Challenger' Medium" },
      { type: 'NormalizationOnly', normalizedText: "'Challenger' Medium" },
      { type: 'NormalizationOnly', normalizedText: 'Caldari Navy Medium' },
      { type: 'ExactMatch', text: '残月级原型' },
      { type: 'ExactMatch', text: '火石 中型来复磁轨炮' },
      { type: 'ExactMatch', text: '商人 小型短管磁轨炮' },
      { type: 'ExactMatch', text: '恶徒 中型短管磁轨炮' },
      { type: 'ExactMatch', text: '联邦海军 中型短管磁轨炮' },
      { type: 'ExactMatch', text: '绞架 小型导弹发射器' },
      { type: 'ExactMatch', text: '挑战者 中型导弹发射器' },
      { type: 'ExactMatch', text: '绞架 大型巡航导弹发射器' },
      {
        type: 'NormalizationOnly',
        normalizedText: 'Anti-Explosive Pump I',
      },
      { type: 'ExactMatch', text: 'Anti-Explosive Pump II' },
      { type: 'ExactMatch', text: 'Anti-EM Pump I' },
      { type: 'NormalizationOnly', normalizedText: 'Anti-Thermal Pump I' },
      {
        type: 'NormalizationOnly',
        normalizedText: 'Gravity Capacitor Upgrade',
      },
      {
        type: 'NormalizationOnly',
        normalizedText: 'Miner Efficiency Upgrade',
      },
      {
        type: 'NormalizationOnly',
        normalizedText: 'Miner Range Controller II',
      },
      {
        type: 'NormalizationOnly',
        normalizedText: 'MK5 Small Group Shield Booster',
      },
      { type: 'NormalizationOnly', normalizedText: 'MK7 Small Group' },
      { type: 'NormalizationOnly', normalizedText: 'MK5 Medium Group' },
      {
        type: 'NormalizationOnly',
        normalizedText: 'Railgun Discharge Elutriation I',
      },
      { type: 'ExactMatch', text: 'Laser Ambit Extension I' },
      {
        type: 'NormalizationOnly',
        normalizedText: 'Laser Burst Aerator I',
      },
      {
        type: 'NormalizationOnly',
        normalizedText: 'Algid Energy Administrations Unit',
      },
      {
        type: 'NormalizationOnly',
        normalizedText: 'Warhead Rigor Catalyst I',
      },
      { type: 'ExactMatch', text: 'MK7 反应式装甲增强器' },
      { type: 'ExactMatch', text: 'MK9 反应式装甲增强器' },
      { type: 'ExactMatch', text: '城壕 反应式装甲增强器' },
      { type: 'ExactMatch', text: '城壕 反应式装甲增强器' },
      { type: 'ExactMatch', text: '帝国海军 反应式装甲增强器' },
      { type: 'ExactMatch', text: '联邦海军 反应式装甲增强器' },
      { type: 'ExactMatch', text: '联邦海军 反应式装甲增强器' },
      { type: 'ExactMatch', text: '璀璨 反应式装甲增强器' },
      { type: 'ExactMatch', text: '克尔鲁姆C 反应式装甲增强器' },
      { type: 'ExactMatch', text: 'MK3 反应式护盾力场' },
      { type: 'ExactMatch', text: 'MK5 反应式护盾力场' },
      { type: 'ExactMatch', text: 'MK5 反应式护盾力场' },
      { type: 'ExactMatch', text: 'MK7 400mm钢附甲板' },
      { type: 'ExactMatch', text: '堡垒 400mm钢附甲板' },
      { type: 'ExactMatch', text: '帝国海军 400mm钢附甲板' },
      { type: 'ExactMatch', text: '帝国海军 400mm钢附甲板' },
      { type: 'ExactMatch', text: '联邦海军 400mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK5 800mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK7 800mm钢附甲板' },
      { type: 'ExactMatch', text: '堡垒 800mm钢附甲板' },
      { type: 'ExactMatch', text: '堡垒 800mm钢附甲板' },
      { type: 'ExactMatch', text: '帝国海军 800mm钢附甲板' },
      { type: 'ExactMatch', text: '联邦海军 800mm钢附甲板' },
      { type: 'ExactMatch', text: '壁垒 1600mm钢附甲板' },
      { type: 'ExactMatch', text: '铁网 100mm钢附甲板' },
      { type: 'ExactMatch', text: '帝国海军 100mm钢附甲板' },
      { type: 'ExactMatch', text: '联邦海军 100mm钢附甲板' },
      { type: 'ExactMatch', text: '要塞 100mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK3 200mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK5 200mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK7 200mm钢附甲板' },
      { type: 'ExactMatch', text: '铁网 200mm钢附甲板' },
      { type: 'ExactMatch', text: '联邦海军 200mm钢附甲板' },
      { type: 'ExactMatch', text: '要塞 200mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK5 400mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK7 400mm钢附甲板' },
      { type: 'ExactMatch', text: '偷窃 自适应装甲增强器' },
      { type: 'ExactMatch', text: '偷窃 自适应装甲增强器' },
      { type: 'ExactMatch', text: '帝国海军 自适应装甲增强器' },
      { type: 'ExactMatch', text: '联邦海军 自适应装甲增强器' },
      { type: 'ExactMatch', text: '联邦海军 自适应装甲增强器' },
      { type: 'ExactMatch', text: '联邦海军 自适应装甲增强器' },
      { type: 'ExactMatch', text: '璀璨 自适应装甲增强器' },
      { type: 'ExactMatch', text: '科波斯C 自适应装甲增强器' },
      { type: 'ExactMatch', text: 'MK1 100mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK3 100mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK5 100mm钢附甲板' },
      { type: 'ExactMatch', text: 'MK7 100mm钢附甲板' },
      { type: 'ExactMatch', text: '科波斯C 大型装甲维修器' },
      { type: 'ExactMatch', text: '科尔C 大型装甲维修器' },
      { type: 'ExactMatch', text: 'MK1 散热槽' },
      { type: 'ExactMatch', text: 'MK3 散热槽' },
      { type: 'ExactMatch', text: 'MK5 散热槽' },
      { type: 'ExactMatch', text: 'MK5 散热槽' },
      { type: 'ExactMatch', text: 'MK7 散热槽' },
      { type: 'ExactMatch', text: '基础型 散热槽' },
      { type: 'ExactMatch', text: '帝国海军 散热槽' },
      { type: 'ExactMatch', text: '帝国海军 散热槽' },
      { type: 'ExactMatch', text: '科波姆C 散热槽' },
      { type: 'ExactMatch', text: 'MK1 磁性力场稳定器' },
      { type: 'ExactMatch', text: '甲胄 小型装甲维修器' },
      { type: 'ExactMatch', text: '帝国海军 小型装甲维修器' },
      { type: 'ExactMatch', text: '联邦海军 小型装甲维修器' },
      { type: 'ExactMatch', text: '骑士 小型装甲维修器' },
      { type: 'ExactMatch', text: '科必伊C 小型装甲维修器' },
      { type: 'ExactMatch', text: 'MK5 中型装甲维修器' },
      { type: 'ExactMatch', text: 'MK7 中型装甲维修器' },
      { type: 'ExactMatch', text: 'MK7 中型装甲维修器' },
      { type: 'ExactMatch', text: 'MK9 中型装甲维修器' },
      { type: 'ExactMatch', text: '甲胄 中型装甲维修器' },
      { type: 'ExactMatch', text: '帝国海军 中型装甲维修器' },
      { type: 'ExactMatch', text: '联邦海军 中型装甲维修器' },
      { type: 'ExactMatch', text: 'MK7 无人机导航电脑' },
      { type: 'ExactMatch', text: 'MK7 无人机导航电脑' },
      { type: 'ExactMatch', text: 'MK9 无人机导航电脑' },
      { type: 'ExactMatch', text: '破解者 无人机导航电脑' },
      { type: 'ExactMatch', text: '联邦海军 无人机导航电脑' },
      { type: 'ExactMatch', text: 'MK5 全方位索敌连接' },
      { type: 'ExactMatch', text: 'MK7 全方位索敌连接' },
      { type: 'ExactMatch', text: 'MK9 全方位索敌连接' },
      { type: 'ExactMatch', text: '破解者 全方位索敌连接' },
      { type: 'ExactMatch', text: '帝国海军 全方位索敌连接' },
      { type: 'ExactMatch', text: '联邦海军 全方位索敌连接' },
      { type: 'ExactMatch', text: '联邦海军 全方位索敌连接' },
      { type: 'ExactMatch', text: '帝国海军 小型远程装甲维修器' },
      { type: 'ExactMatch', text: '宁静 小型远程装甲维修器' },
      { type: 'ExactMatch', text: 'MK5 中型远程装甲维修器' },
      { type: 'ExactMatch', text: 'MK5 中型远程装甲维修器' },
      { type: 'ExactMatch', text: 'MK7 中型远程装甲维修器' },
      { type: 'ExactMatch', text: '比特尼克 中型远程装甲维修器' },
      { type: 'ExactMatch', text: '帝国海军 中型远程装甲维修器' },
      { type: 'ExactMatch', text: '科波姆C 中型远程装甲维修器' },
      { type: 'ExactMatch', text: 'MK9 大型远程装甲维修器' },
      { type: 'ExactMatch', text: '科波斯C 大型远程装甲维修器' },
      { type: 'ExactMatch', text: 'MK5 隐形装置' },
      { type: 'ExactMatch', text: 'MK7 隐形装置' },
      { type: 'ExactMatch', text: 'MK7 中型远程电容传输装置' },
      { type: 'ExactMatch', text: '随从 中型远程电容传输装置' },
      { type: 'ExactMatch', text: '随从 中型远程电容传输装置' },
      { type: 'ExactMatch', text: '帝国海军 中型远程电容传输装置' },
      { type: 'ExactMatch', text: '随从 大型远程电容传输装置' },
      { type: 'ExactMatch', text: '帝国海军 大型远程电容传输装置' },
      { type: 'ExactMatch', text: 'MK5 小型远程护盾回充增量器' },
      { type: 'ExactMatch', text: '微型 小型远程护盾回充增量器' },
      { type: 'ExactMatch', text: 'MK3 小型远程装甲维修器' },
      { type: 'ExactMatch', text: 'MK5 小型远程装甲维修器' },
      { type: 'ExactMatch', text: 'MK7 小型远程装甲维修器' },
      { type: 'ExactMatch', text: '比特尼克 小型远程装甲维修器' },
      { type: 'ExactMatch', text: '城壕 小型能量中和器' },
      { type: 'ExactMatch', text: 'MK5 中型能量中和器' },
      { type: 'ExactMatch', text: '蒺藜 中型能量中和器' },
      { type: 'ExactMatch', text: '帝国海军 中型能量中和器' },
      { type: 'ExactMatch', text: '蒺藜 大型能量中和器' },
      { type: 'ExactMatch', text: '帝国海军 大型能量中和器' },
      { type: 'ExactMatch', text: 'MK3 小型远程电容传输装置' },
      { type: 'ExactMatch', text: 'MK5 小型远程电容传输装置' },
      { type: 'ExactMatch', text: '随从 小型远程电容传输装置' },
      { type: 'ExactMatch', text: '帝国海军 小型远程电容传输装置' },
      { type: 'ExactMatch', text: '骑士 小型远程电容传输装置' },
      { type: 'ExactMatch', text: 'MK5 中型远程电容传输装置' },
      { type: 'ExactMatch', text: 'MK5 小型掠能器' },
      { type: 'ExactMatch', text: 'MK5 小型掠能器' },
      { type: 'ExactMatch', text: '吸血鬼 小型掠能器' },
      { type: 'ExactMatch', text: '帝国海军 小型掠能器' },
      { type: 'ExactMatch', text: '帝国海军 小型掠能器' },
      { type: 'ExactMatch', text: '食灵者 小型掠能器' },
      { type: 'ExactMatch', text: 'MK5 中型掠能器' },
      { type: 'ExactMatch', text: '吸血鬼 中型掠能器' },
      { type: 'ExactMatch', text: '帝国海军 中型掠能器' },
      { type: 'ExactMatch', text: 'MK5 小型能量中和器' },
      { type: 'ExactMatch', text: '蒺藜 小型能量中和器' },
      { type: 'ExactMatch', text: '帝国海军 小型能量中和器' },
      { type: 'ExactMatch', text: '科波斯C 大型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK5 小型自动加农炮' },
      { type: 'ExactMatch', text: '共和舰队 小型自动加农炮' },
      { type: 'ExactMatch', text: '共和舰队 中型自动加农炮' },
      { type: 'ExactMatch', text: '吉斯塔姆C 中型自动加农炮' },
      { type: 'ExactMatch', text: '长者 大型自动加农炮' },
      { type: 'ExactMatch', text: '摇摆 小型强袭加农炮' },
      { type: 'ExactMatch', text: '共和舰队 小型强袭加农炮' },
      { type: 'ExactMatch', text: '罪犯 小型强袭加农炮' },
      { type: 'ExactMatch', text: 'MK5 中型强袭加农炮' },
      { type: 'ExactMatch', text: 'MK5 中型强袭加农炮' },
      { type: 'ExactMatch', text: 'MK5 中型强袭加农炮' },
      { type: 'ExactMatch', text: 'MK7 中型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK7 中型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK7 中型脉冲激光炮' },
      { type: 'ExactMatch', text: '马枪 中型脉冲激光炮' },
      { type: 'ExactMatch', text: '马枪 中型脉冲激光炮' },
      { type: 'ExactMatch', text: '马枪 中型脉冲激光炮' },
      { type: 'ExactMatch', text: '帝国海军 中型脉冲激光炮' },
      { type: 'ExactMatch', text: '帝国海军 中型脉冲激光炮' },
      { type: 'ExactMatch', text: '科波姆C 中型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK7 大型脉冲激光炮' },
      { type: 'ExactMatch', text: '战戟 大型脉冲激光炮' },
      { type: 'ExactMatch', text: '帝国海军 大型脉冲激光炮' },
      { type: 'ExactMatch', text: '帝国海军 中型集束激光炮' },
      { type: 'ExactMatch', text: '仪式 中型集束激光炮' },
      { type: 'ExactMatch', text: '科波姆C 中型集束激光炮' },
      { type: 'ExactMatch', text: '投石车 大型集束激光炮' },
      { type: 'ExactMatch', text: '帝国海军 大型集束激光炮' },
      { type: 'ExactMatch', text: '科波斯C 大型集束激光炮' },
      { type: 'ExactMatch', text: 'MK1 小型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK3 小型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK5 小型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK5 小型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK7 小型脉冲激光炮' },
      { type: 'ExactMatch', text: '长弓 小型脉冲激光炮' },
      { type: 'ExactMatch', text: 'MK7 大型短管磁轨炮' },
      { type: 'ExactMatch', text: '骗子 大型短管磁轨炮' },
      { type: 'ExactMatch', text: 'MK3 小型集束激光炮' },
      { type: 'ExactMatch', text: 'MK7 小型集束激光炮' },
      { type: 'ExactMatch', text: 'MK7 小型集束激光炮' },
      { type: 'ExactMatch', text: '权杖 小型集束激光炮' },
      { type: 'ExactMatch', text: '帝国海军 小型集束激光炮' },
      { type: 'ExactMatch', text: '叛军 小型集束激光炮' },
      { type: 'ExactMatch', text: '科必伊C 小型集束激光炮' },
      { type: 'ExactMatch', text: 'MK5 中型集束激光炮' },
      { type: 'ExactMatch', text: 'MK7 中型集束激光炮' },
      { type: 'ExactMatch', text: '石弓 中型集束激光炮' },
      { type: 'ExactMatch', text: 'MK7 隐秘行动装置蓝图' },
      { type: 'NormalizationOnly', normalizedText: 'MK5 小型群体护盾回充增量器' },
      { type: 'NormalizationOnly', normalizedText: 'MK7 小型群体电容传输器' },
      { type: 'NormalizationOnly', normalizedText: 'MK5 中型群体电容传输器' },
      { type: 'ExactMatch', text: '磁轨炮节能设备蓝图 I' },
      { type: 'NormalizationOnly', normalizedText: '激光炮范围扩大设备' },
      { type: 'NormalizationOnly', normalizedText: '激光炮发散调节装置' },
      { type: 'NormalizationOnly', normalizedText: '冷凝能量管理单元蓝图 I' },
      { type: 'NormalizationOnly', normalizedText: '弹头强化辅助系统蓝图 I' },
      { type: 'ExactMatch', text: '液压舱推进器蓝图 I' },
      { type: 'NormalizationOnly', normalizedText: '核心防御节能装置蓝图 I' },
      { type: 'NormalizationOnly', normalizedText: '纳米机器人加速器蓝图 I' },
      { type: 'ExactMatch', text: '维修增效器蓝图 II' },
      { type: 'ExactMatch', text: '反爆破聚合器蓝图 I' },
      { type: 'ExactMatch', text: '反爆破聚合器蓝图 II' },
      { type: 'ExactMatch', text: '反电磁聚合器蓝图 I' },
      { type: 'ExactMatch', text: '反动能聚合器蓝图 I' },
      { type: 'ExactMatch', text: '反热能聚合器蓝图 I' },
      { type: 'ExactMatch', text: '引力电容器升级蓝图 I' },
      { type: 'NormalizationOnly', normalizedText: '采矿器能效提升器蓝图 I' },
      { type: 'ExactMatch', text: '采矿器距离控制器蓝图 III' },
      { type: 'NormalizationOnly', normalizedText: '采矿器冷凝调节器蓝图 I' },
      { type: 'NormalizationOnly', normalizedText: '采矿器冷凝调节器蓝图 I' },
      { type: 'NormalizationOnly', normalizedText: '无人机火力增幅装置' },
      { type: 'ExactMatch', text: '无人机射程扩展装置蓝图 II' },
      { type: 'NormalizationOnly', normalizedText: '无人机射程扩展装置' },
      { type: 'NormalizationOnly', normalizedText: '无人机射速加强装置' },
      { type: 'ExactMatch', text: 'MK3 侍僧蓝图' },
      { type: 'ExactMatch', text: 'MK5 侍僧蓝图' },
      { type: 'ExactMatch', text: 'MK7 侍僧蓝图' },
      { type: 'ExactMatch', text: 'MK3 大黄蜂蓝图' },
      { type: 'ExactMatch', text: 'MK5 渗透者蓝图' },
      { type: 'ExactMatch', text: 'MK5 战锤蓝图' },
      { type: 'ExactMatch', text: 'MK7 战锤蓝图' },
      { type: 'ExactMatch', text: 'MK7 蛮妖蓝图' },
      { type: 'ExactMatch', text: 'MK7 瓦尔基里' },
      { type: 'ExactMatch', text: 'MK7 狂战士' },
      { type: 'ExactMatch', text: '数据核心 - 艾玛星舰工程' },
      { type: 'ExactMatch', text: '数据核心 - 电磁物理' },
      { type: 'ExactMatch', text: '数据核心 - 盖伦特星舰工程' },
      { type: 'ExactMatch', text: '数据核心 - 高能物理' },
      { type: 'ExactMatch', text: '数据核心 - 火箭科学' },
      { type: 'ExactMatch', text: '数据核心 - 机械工程' },
      { type: 'ExactMatch', text: '数据核心 - 激光物理' },
      { type: 'ExactMatch', text: '数据核心 - 加达里星舰工程' },
      { type: 'ExactMatch', text: '金属碎片' },
      { type: 'ExactMatch', text: '三钛合金' },
      { type: 'ExactMatch', text: '等离子体团' },
      { type: 'ExactMatch', text: '艾玛4级受损结构' },
      { type: 'ExactMatch', text: '艾玛5级受损结构' },
      { type: 'ExactMatch', text: '艾玛6级受损结构' },
      { type: 'ExactMatch', text: '艾玛7级受损结构' },
      { type: 'ExactMatch', text: '艾玛7级受损结构' },
      { type: 'ExactMatch', text: '艾玛8级受损结构' },
      { type: 'ExactMatch', text: '艾玛9级受损结构' },
      { type: 'ExactMatch', text: '艾玛10级受损结构' },
      { type: 'ExactMatch', text: '加达里4级受损结构' },
      { type: 'ExactMatch', text: '加达里5级受损结构' },
      { type: 'ExactMatch', text: '加达里6级受损结构' },
    ]);
  });
});

function run(itemNameData: string | ItemNameData): Promise<NormalizationResult> {
  let name;
  let icon: ItemIcon | null = null;
  if (typeof itemNameData === 'string') {
    name = itemNameData;
  } else {
    ({ name, icon } = itemNameData);
  }
  return normalizeItemName(name, () => Promise.resolve(icon));
}

interface ItemNameData {
  readonly name: string;
  readonly icon: ItemIcon;
}
