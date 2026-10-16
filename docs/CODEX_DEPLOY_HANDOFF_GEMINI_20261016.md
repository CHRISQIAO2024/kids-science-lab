# 乔薪钰 AI CODING 梦工厂 · 科学文明溯源馆（126舱全交互动画版）Codex 交接与完工验收清单

本交接单专为 **Codex 自动部署代理** 编制，旨在将已完成的 **12 个文明与地区、126 条科学探索记录全交互 HTML5 动画实验台** 部署并同步至 GitHub 仓库 `chrisqiao2024/kids-science-lab`（目标线上地址：[https://chrisqiao2024.github.io/kids-science-lab/civilization.html](https://www.google.com/search?q=https%3A%2F%2Fchrisqiao2024.github.io%2Fkids-science-lab%2Fcivilization.html)），且与主实验室控制台 [https://chrisqiao2024.github.io/kids-science-lab/?v=81e7035](https://www.google.com/search?q=https%3A%2F%2Fchrisqiao2024.github.io%2Fkids-science-lab%2F%3Fv%3D81e7035) 保持视觉、交互与双向导航一致。

## 一、 直接复制给 Codex 的执行指令（Prompt 模板）

将下方文本直接粘贴给 Codex 即可启动自动化部署与核验：

> **任务目标**：请将附件包中的 `civilization_interactive_126.html` 部署到我的 GitHub 仓库 `chrisqiao2024/kids-science-lab`，覆盖更新根目录下的 `civilization.html`，并将构建脚本与文档归档入库，完成线上 GitHub Pages 发布与完工自检。
>
> **执行步骤要求**：
>
> 1. **备份原文件**：将仓库根目录现有的 `civilization.html` 备份为 `archive/civilization_v1_static.html`（若无 `archive/` 目录请新建）。
>
> 2. **替换主页面**：将附件中的 `civilization_interactive_126.html` 复制并重命名为仓库根目录的 `civilization.html`。
>
> 3. **检查双向导航链接**：
>
>    * 确认 `civilization.html` 顶部与 Hero 区的“返回108舱实验室 ↗”按钮指向 `index.html`（或 `https://chrisqiao2024.github.io/kids-science-lab/`）。
>
>    * 确认 `index.html` 中指向“科学文明溯源馆”的入口链接指向 `civilization.html#explore`。
>
> 4. **归档模块化生成器与储备库文档（可选维护目录）**：
>
>    * 将构建脚本 `data_part1.py`、`data_part2.py`、`sim_engine_part1.py`、`sim_engine_part2.py`、`build_civilization_app.py` 存入 `tools/civilization_builder/` 目录，便于后续自动化维护。
>
>    * 将扩展储备文档 `science_lab_historical_expansion_catalog.md` 存入 `docs/` 目录。
>
> 5. **自动化完整性校验**：提交前运行校验脚本，确认 `RECORDS` 数组长度为 `126`、`SIM_RENDERERS` 包含全部 `126` 个代号（`GR-01` 至 `CN-22`），无缺失或语法报错。
>
> 6. **Git 提交与推送**：提交变更（Commit Message: `feat(civilization): upgrade all 126 science civilization records with interactive HTML5 Canvas workbenches`），推送至主分支触发 GitHub Pages 部署，并返回带最新 commit hash 的预览链接。

## 二、 附件明细表（Deliverable & Asset Manifest）

| 

| **序号** | **附件/文件名称** | **文件类型与大小** | **仓库目标路径** | **核心内容与用途说明** | 
| **01** | `civilization_interactive_126.html` | 单文件 HTML5 应用（约 253 KB） | `/civilization.html` | **核心主交付物**：自包含 HTML + Tailwind CSS + 126条完整JSON数据 + 126个专属Canvas 2D/3D投影动画渲染引擎 + SPA模态实验台，部署时直接重命名为 `civilization.html` | 
| **02** | `CODEX_DEPLOY_HANDOFF.md` | Markdown 交接规范 | `/docs/CODEX_DEPLOY_HANDOFF.md` | **本交接清单**：供 Codex 执行文件映射、双向链接绑定、Git 发布及 126 舱逐项验收 | 
| **03** | `kids_science_lab_codex_handoff_bundle.zip` | ZIP 完整交付压缩包 | 本地解压用 | **一键交付包**：内含已重命名好的 `civilization.html`、本交接说明及全套模块化生成源码 | 
| **04** | `data_part1.py` | Python 数据模块 | `/tools/civilization_builder/data_part1.py` | 前 61 条探索记录结构化元数据（`GR` 古希腊 15、`EG` 古埃及两河 5、`RO` 古罗马 4、`IT` 意大利 8、`DE` 德国 14、`FR` 法国 15）及各自 3 组滑块参数范围 | 
| **05** | `data_part2.py` | Python 数据模块 | `/tools/civilization_builder/data_part2.py` | 后 65 条探索记录结构化元数据（`UK` 英国 16、`NL` 荷兰 7、`AT` 奥地利 7、`ND` 北欧 7、`EE` 俄国东欧 6、`CN` 中国 22）及各自 3 组滑块参数范围 | 
| **06** | `sim_engine_part1.py` | JS 仿真引擎模块 1 | `/tools/civilization_builder/sim_engine_part1.py` | 第 1～61 号记录（`GR-01` 至 `FR-15`）的独立 Canvas 动态物理/几何仿真函数与 4 路遥测实时解算逻辑 | 
| **07** | `sim_engine_part2.py` | JS 仿真引擎模块 2 | `/tools/civilization_builder/sim_engine_part2.py` | 第 62～126 号记录（`UK-01` 至 `CN-22`）的独立 Canvas 动态物理/数学/生物/天文仿真函数与 4 路遥测实时解算逻辑 | 
| **08** | `build_civilization_app.py` | Python 自动构建脚本 | `/tools/civilization_builder/build_civilization_app.py` | 将上述数据与仿真引擎一键编译组装为单文件 `civilization.html` 的生成器脚本 | 
| **09** | `science_lab_historical_expansion_catalog.md` | Markdown 扩展储备库 | `/docs/science_lab_historical_expansion_catalog.md` | 前期梳理的 83 位科学家、122 项成果（含定理/公式/猜想/假说四维分类与 108 舱查重表） | 

## 三、 12 个文明与 126 个交互动画舱完整核对表（供 Codex 自动化校验）

Codex 部署时可通过脚本核对以下 **12 个文明分组、126 个实验舱 ID** 是否全部在 `RECORDS` 与 `SIM_RENDERERS` 中一一对应：

| **文明代码** | **文明与地区名称** | **舱位数量** | **编号起止范围** | **代表性交互动画实验舱抽检点** | 
| **GR** | 古希腊 (Ancient Greece) | 15 舱 | `GR-01` \~ `GR-15` | `GR-01` 泰勒斯半圆直角拖动、`GR-02` 勾股注水拼图、`GR-05` 柏拉图五正多面体3D旋转、`GR-09` 埃拉托色尼双城日影测地球、`GR-13` 托勒密本轮逆行轨迹 | 
| **EG** | 古埃及·两河流域 (Egypt & Mesopotamia) | 5 舱 | `EG-01` \~ `EG-05` | `EG-01` 莱因德纸草书九宫八角切圆、`EG-03` 巴比伦几何割补配方法、`EG-04` 普林顿322号泥板勾股数、`EG-05` 沙罗周期三轨齿轮共振 | 
| **RO** | 古罗马 (Ancient Rome) | 4 舱 | `RO-01` \~ `RO-04` | `RO-01` 维特鲁威半圆石拱楔石推力线、`RO-02` 普林尼日月大潮小潮水包、`RO-04` 斯特拉波球形地球纬度辐射带 | 
| **IT** | 文艺复兴·意大利 (Renaissance Italy) | 8 舱 | `IT-01` \~ `IT-08` | `IT-01` 达·芬奇摩擦定律姿态对比、`IT-03` 卡尔达诺三次曲线与虚数根、`IT-05` 伽利略斜面 1:3:5:7 节拍、`IT-06` 托里拆利水塔三孔射流、`IT-08` 土星环卡西尼缝2:1共振 | 
| **DE** | 德国 (Germany) | 14 舱 | `DE-01` \~ `DE-14` | `DE-01` 开普勒椭圆等面积扇形、`DE-02` 莱布尼茨 dy/dx 特征三角形与黎曼和、`DE-07` 黎曼 ζ(1/2+it) 临界线零点螺旋、`DE-10` 普朗克黑体辐射消解紫外灾难、`DE-12` 爱因斯坦时空网格弯曲与星光偏折 | 
| **FR** | 法国 (France) | 15 舱 | `FR-01` \~ `FR-15` | `FR-02` 帕斯卡连通液压机、`FR-04` 拉瓦锡密闭曲颈甑氧化汞天平守恒、`FR-07` 傅里叶旋转本轮圆环合成方波/锯齿波、`FR-12` 菲涅耳圆盘阴影中心泊松亮斑、`FR-13` 庞加莱双轨混沌蝴蝶效应 | 
| **UK** | 英国 (United Kingdom) | 16 舱 | `UK-01` \~ `UK-16` | `UK-03` 哈维心脏搏动与体肺循环、`UK-06` 牛顿高山大炮发射入轨、`UK-10` 麦克斯韦三维正交电磁波、`UK-13` 狄拉克负能海正反电子对产生、`UK-14` 图灵机纸带读写头状态转移、`UK-15` 卢瑟福 α粒子金箔大角散射 | 
| **NL** | 荷兰 (Netherlands) | 7 舱 | `NL-01` \~ `NL-07` | `NL-01` 斯台文平行四边形力合成、`NL-02` 惠更斯次波包络面、`NL-04` 范德华真实气体等温线、`NL-06` 昂内斯 4.2K 水银超导电阻骤降与迈斯纳磁悬浮 | 
| **AT** | 奥地利 (Austria) | 7 舱 | `AT-01` \~ `AT-07` | `AT-01` 多普勒运动波前压缩、`AT-02` 孟德尔豌豆庞氏表 3:1 分离比、`AT-03` 马赫超音速激波锥、`AT-05` 薛定谔波函数势垒量子隧穿、`AT-06` 泡利不相容费米能级排布、`AT-07` 哥德尔自指编码环 | 
| **ND** | 北欧 (DK·SE·NO) | 7 舱 | `DK-01`\~`04`, `SE-01`\~`02`, `NO-01` | `DK-01` 第谷折衷宇宙与墙式象限仪、`DK-02` 罗默木卫一食光程延迟测光速、`DK-03` 奥斯特通电导线磁针偏转、`DK-04` 玻尔氢原子能级跃迁光谱 | 
| **EE** | 俄国·东欧 (RU·PL) | 6 舱 | `PL-01`\~`02`, `RU-01`\~`04` | `RU-01` 罗巴切夫斯基庞加莱双曲圆盘测地线三角形、`RU-02` 门捷列夫周期表预言镓/锗高亮、`RU-03` 巴甫洛夫赫布突触强化、`RU-04` 柯尔莫哥洛夫概率测度空间 | 
| **CN** | 中国 (China) | 22 舱 | `CN-01` \~ `CN-22` | `CN-01` 墨子小孔成倒像、`CN-02` 九章算术算筹矩阵消元、`CN-03` 赵爽弦图、`CN-04/05` 刘徽割圆术与祖冲之密率、`CN-06` 祖暅原理截面扫描、`CN-08` 沈括缕悬指南针磁偏角、`CN-10` 秦九韶大衍求一术同余矩阵、`CN-13` 郭守敬四十尺高表与景符、`CN-14` 朱载堉十二平均律管、`CN-17` 华罗庚0.618黄金分割优选、`CN-19` 吴文俊机器证明、`CN-20` 陈景润(1+2)筛法、`CN-21` 袁隆平三系杂交稻、`CN-22` 屠呦呦青蒿素3D过氧桥低温萃取 | 

## 四、 Codex 完工验收标准（Definition of Done Checklist）

Codex 在向你汇报“已完工”前，必须逐项确认以下 6 条标准全部通过：

* \[ \] **1. 线上 URL 可访问且无控制台报错**：访问 `https://chrisqiao2024.github.io/kids-science-lab/civilization.html#explore` 时，浏览器 Console 无任何 `ReferenceError`、`SyntaxError` 或 404 资源报错。

* \[ \] **2. 12 文明与多维筛选器联动正常**：点击顶部 12 个文明快捷胶囊（`GR` 至 `CN`）、输入关键词搜索、切换成果类型与学习领域下拉框、切换“按12文明分组 / 126舱紧凑平铺 / 📋 126舱矩阵总表”三种视图，卡片数量徽标（`126`）实时准确更新。

* \[ \] **3. 卡片双按钮交互正常**：

  * 点击任意卡片左下角 `CLICK · EXPAND ▼` 可内联展开显示【今天的认识】、【💡 一句话秒懂】与【🚀 工程映射】。

  * 点击任意卡片右下角 `INITIATE MISSION // 启动实验台 ⤢`（或矩阵总表行尾按钮、顶部 `🚀 随机启动文明实验舱`）可立即弹出全屏 SPA 原理实验台。

* \[ \] **4. 实验台 60FPS 画布与滑块调参实时响应**：在实验台内拖动 `PARAM-1`、`PARAM-2`、`PARAM-3` 三个滑块，Canvas 动画图形与下方 `TELE-1` \~ `TELE-4` 四个遥测数据框实时联动更新；点击 `⏸ 暂停演化`、`↺ 重置初始参数`、`⚡ 注入脉冲扰动` 按钮及点击画布触发脉冲波纹均正常生效。

* \[ \] **5. 键盘快捷键与跨舱切换正常**：在实验台打开状态下，按键盘 `←` / `→` 方向键（或点击顶部 `← 上一舱` / `下一舱 →`）可在 126 个实验舱之间无缝循环切换；按 `ESC` 键（或点击 `⤶ 返回主控台`）可关闭弹窗并恢复页面滚动。

* \[ \] **6. 主副站双向跳转闭环**：点击顶部或 Hero 区的 `返回108舱实验室 ↗` 可正常回到主站 `index.html`，并提供带最新 Git Commit 短哈希（如 `?v=xxxxxx`）的防缓存访问链接。