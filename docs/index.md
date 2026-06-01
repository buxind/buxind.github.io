---
layout: home
title: 安科 26 新生攻略
---

<script setup>
import { ref } from 'vue'

const groupChats = [
  { title: '26 新生群', label: '报到咨询', mark: '新' },
  { title: '校内论坛', label: '校园问答', mark: '问' },
  { title: '校内二手群', label: '闲置流转', mark: '二' },
  { title: '校内跑腿代拿', label: '互助代办', mark: '跑' }
]
const wechatId = 'USTA2023'
const isGroupModalOpen = ref(false)

async function copyWechat() {
  try {
    await navigator.clipboard.writeText(wechatId)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = wechatId
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }

  isGroupModalOpen.value = true
}
</script>

<section class="guide-hero">
  <div>
    <h1>安科 26 新生攻略</h1>
    <p>给准备报考、已经录取和即将报到的同学：用一站式页面快速熟悉安徽科技工程大学的校区、报到、交通、食宿、校园卡和常用入口。重要时间和政策请以学校当年官方通知为准。</p>
    <div class="hero-actions">
      <a href="/arrival">查看报到清单</a>
      <a href="/campus-life">了解校园生活</a>
      <a href="/freshman-pack">打开 26 资料包</a>
      <a href="/tools">打开常用入口</a>
    </div>
  </div>
  <figure class="hero-media">
    <img src="/images/high-quality-development.jpg" alt="安徽科技工程大学高质量发展大会现场">
    <figcaption>安徽科技工程大学高质量发展大会现场图，展示学校更名后的新形象。</figcaption>
  </figure>
</section>

<section class="guide-section group-chat-section">
  <h2>校内必备群聊</h2>
  <div class="group-chat-grid">
    <div v-for="chat in groupChats" :key="chat.title" class="group-chat-card">
      <div class="group-chat-head">
        <span class="group-chat-mark" aria-hidden="true">{{ chat.mark }}</span>
        <span class="group-chat-pill">{{ chat.label }}</span>
      </div>
      <h3>{{ chat.title }}</h3>
      <button type="button" :aria-label="`复制${chat.title}微信号`" @click="copyWechat">复制微信</button>
    </div>
  </div>
</section>

<div v-if="isGroupModalOpen" class="copy-modal-mask" role="dialog" aria-modal="true" aria-labelledby="copy-modal-title">
  <div class="copy-modal">
    <h2 id="copy-modal-title">复制成功</h2>
    <p>你已经复制微信号，请添加微信，审核后，说明你想要加入的群聊类型</p>
    <div class="wechat-code">{{ wechatId }}</div>
    <button type="button" @click="isGroupModalOpen = false">知道了</button>
  </div>
</div>

<section class="guide-section">
  <h2>先看这 9 件事</h2>
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
  <h2>三校区速览</h2>
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
  <h2>快捷入口</h2>
  <div class="link-grid">
    <a class="quick-link" href="https://yx.ahstu.edu.cn/ahstuyx" target="_blank" rel="noreferrer">新生报到网</a>
    <a class="quick-link" href="https://www.ahstu.edu.cn/zsc/" target="_blank" rel="noreferrer">招生就业处</a>
    <a class="quick-link" href="/freshman-pack">2026 新生资料包</a>
    <a class="quick-link" href="https://www.ahstu.edu.cn/cyfw.htm" target="_blank" rel="noreferrer">常用服务</a>
    <a class="quick-link" href="https://www.ahstu.edu.cn/jwc/jxrl.htm" target="_blank" rel="noreferrer">校历查询</a>
  </div>
</section>

<section class="guide-section">
  <h2>新生最常问</h2>
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
