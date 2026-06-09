---
title: 校园墙
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

# 校园墙

<section class="guide-section group-chat-section campus-wall-page">
  <div class="section-heading">
    <h2>校内必备群聊</h2>
    <p>需要进群或咨询时，点对应按钮复制微信号，再说明要加入的群聊类型。</p>
  </div>
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

更新时间：2026-06-09
