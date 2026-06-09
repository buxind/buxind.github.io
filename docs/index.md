---
layout: home
title: 安科 26 新生攻略
---

<script setup>
const guideCategories = [
  {
    title: '新生入口',
    desc: '报到清单、线上入口、到校流程和交通路线。',
    href: '/arrival',
    icon: '▣',
    tone: 'red'
  },
  {
    title: '常见问题',
    desc: '宿舍、洗澡、食堂、网络、门禁等高频问题。',
    href: '/campus-life#新生常问',
    icon: '?',
    tone: 'blue'
  },
  {
    title: '物品准备',
    desc: '开学要带什么、什么到校再买、快递怎么寄。',
    href: '/arrival#报到前清单',
    icon: '□',
    tone: 'green'
  },
  {
    title: '校友群组',
    desc: '新生群、论坛、二手群和跑腿代拿入口。',
    href: '/campus-wall',
    icon: '●',
    tone: 'purple'
  },
  {
    title: '信息索引',
    desc: '官网、招生、迎新、校历、地图和常用服务。',
    href: '/tools',
    icon: '⌁',
    tone: 'amber'
  },
  {
    title: '认识安科',
    desc: '学校沿革、三校区、学院专业和办学特色。',
    href: '/about',
    icon: '1950',
    tone: 'slate'
  }
]
</script>

<section class="guide-hero">
  <div>
    <h1>安科 26 新生攻略</h1>
    <p>给准备报考、已经录取和即将报到的同学：先看入口，再查问题，最后按校区确认路线、宿舍、食堂和常用服务。重要时间和政策请以学校当年官方通知为准。</p>
    <div class="hero-actions">
      <a href="/arrival">新生入口</a>
      <a href="/campus-life#新生常问">常见问题</a>
    </div>
  </div>
  <figure class="hero-media">
    <img src="/images/high-quality-development.jpg" alt="安徽科技工程大学高质量发展大会现场">
    <figcaption>安徽科技工程大学高质量发展大会现场图，展示学校更名后的新形象。</figcaption>
  </figure>
</section>

<section class="guide-section entry-section">
  <div class="section-heading">
    <h2>先按这 6 类找</h2>
    <p>不确定从哪里看时，直接点对应卡片。</p>
  </div>
  <div class="entry-grid">
    <a v-for="category in guideCategories" :key="category.title" class="entry-card" :class="`entry-card-${category.tone}`" :href="category.href">
      <span class="entry-icon" aria-hidden="true">{{ category.icon }}</span>
      <span class="entry-copy">
        <strong>{{ category.title }}</strong>
        <span>{{ category.desc }}</span>
      </span>
    </a>
  </div>
</section>

<section class="guide-section">
  <div class="section-heading">
    <h2>新生先确认这 9 件事</h2>
    <p>先确认学校、校区、报到入口和生活服务，再去看具体页面。</p>
  </div>
  <div class="fact-grid">
    <div class="fact-card"><h3>校名</h3><p><span class="source-badge">官方确认</span> 学校简介显示，2026 年更名为安徽科技工程大学。</p></div>
    <div class="fact-card"><h3>校区</h3><p><span class="source-badge">官方确认</span> 现有凤阳、龙湖、滁州三个校区。</p></div>
    <div class="fact-card"><h3>规模</h3><p><span class="source-badge">官方确认</span> 在校全日制本科生、硕士研究生约 2.2 万人。</p></div>
    <div class="fact-card"><h3>专业</h3><p><span class="source-badge">官方确认</span> 学校简介列出 14 个二级学院、67 个本科专业。</p></div>
    <div class="fact-card"><h3>报到入口</h3><p><span class="source-badge">官方确认</span> 新生报到网含网上报到、报到指南、学习生活入口。</p></div>
    <div class="fact-card"><h3>交通</h3><p><span class="source-badge">官方确认</span> 迎新交通页列出三校区高铁、火车、汽车和自驾路线。</p></div>
    <div class="fact-card"><h3>餐饮</h3><p><span class="source-badge">官方确认</span> 迎新网饮食服务页列出三校区餐厅与服务时间。</p></div>
    <div class="fact-card"><h3>生活缴费</h3><p><span class="source-badge">官方确认</span> 校园一卡通可用于食堂、超市、洗浴、购电等场景。</p></div>
    <div class="fact-card"><h3>学长资料</h3><p><span class="source-badge experience">经验参考</span> 已整理 2026 新生腾讯文档资料包，包含校区学院、寝室、美食、群聊和专升本入口。</p></div>
  </div>
</section>

<section class="guide-section">
  <div class="section-heading">
    <h2>三校区速览</h2>
    <p>先看自己在哪个校区，再看路线和生活信息。</p>
  </div>
  <div class="campus-grid">
    <div class="info-card">
      <h3>凤阳校区</h3>
      <p>滁州市凤阳县东华路 9 号。学校历史根脉所在，靠近凤阳城区，报到交通常与蚌埠站、蚌埠南站衔接。</p>
      <div class="tag-row"><span class="tag">邮编 233100</span><span class="tag">凤阳汽车站附近</span></div>
    </div>
    <div class="info-card">
      <h3>龙湖校区</h3>
      <p>蚌埠市龙子湖区黄山大道 1501 号。位于蚌埠大学城，毗邻龙子湖风景区和蚌埠高铁南站方向。</p>
      <div class="tag-row"><span class="tag">邮编 233030</span><span class="tag">蚌埠大学城</span></div>
    </div>
    <div class="info-card">
      <h3>滁州校区</h3>
      <p>滁州市南谯区文慧路 999 号。位于滁州高教科创城，迎新交通与滁州站、全椒站联系较多。</p>
      <div class="tag-row"><span class="tag">邮编 239000</span><span class="tag">滁州高教科创城</span></div>
    </div>
  </div>
</section>

<section class="guide-section">
  <div class="section-heading">
    <h2>新生最常问</h2>
    <p>快速判断该去哪个页面继续查。</p>
  </div>
  <div class="faq-grid">
    <div class="faq-card"><h3>什么时候报到？</h3><p>每年以录取通知书、迎新网和招生办公告为准。本攻略只整理入口与流程，不替代当年通知。</p></div>
    <div class="faq-card"><h3>到站后怎么去学校？</h3><p>报到当天通常会设置新生接待点；平时可按所在校区选择公交、高铁站、汽车站或自驾路线。</p></div>
    <div class="faq-card"><h3>宿舍和食堂怎么样？</h3><p>官方迎新网公开了各校区餐厅、洗浴、开水、洗衣和滁州校区独立卫浴等信息；具体宿舍分配以学校安排为准。</p></div>
    <div class="faq-card"><h3>这是不是官方网站？</h3><p>不是。这是整理型攻略站，所有重要决定请回到学校官网、招生网和迎新网确认。</p></div>
  </div>
</section>

## 资料来源与更新

- 主要来源：[安徽科技工程大学官网](https://www.ahstu.edu.cn/)、[学校简介](https://www.ahstu.edu.cn/xxgk1/xxjj.htm)、[新生报到网](https://yx.ahstu.edu.cn/ahstuyx)、[常用服务](https://www.ahstu.edu.cn/cyfw.htm)。
- 更新时间：2026-06-01。
- 状态说明：<span class="source-badge">官方确认</span> 来自学校公开页面；<span class="source-badge pending">待核验</span> 来自非官方公开资料；<span class="source-badge experience">经验参考</span> 来自学生经验，使用前需要人工复核。
