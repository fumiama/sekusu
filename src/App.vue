<script setup lang="ts">
import { StyleProvider, Themes } from '@varlet/ui'
import { useDayNightStore } from '@/stores/main';
import { ref } from 'vue';

import IconKantoku from '@/components/icons/IconKantoku.vue'

const { isNight, toggle } = useDayNightStore()
const isNightRef = ref(isNight)

StyleProvider(isNight?Themes.md3Dark:Themes.md3Light)
function toggleTheme() {
  isNightRef.value = toggle()
  StyleProvider(isNightRef.value?Themes.md3Dark:Themes.md3Light)
}

function nav2(l: string) {
  window.location.href = l
}

</script>

<template>
  <div class="background-with-overlay">
    <IconKantoku class="icon-sign" />
    <div class="girls-container">
      <img class="girl-1" :src="'/assets/imgs/g1.png'"/>
      <img class="girl-2" :src="'/assets/imgs/g2.png'"/>
      <img class="girl-3" :src="'/assets/imgs/g3.png'"/>
      <img class="girl-4" :src="'/assets/imgs/g4.png'"/>
    </div>
    <img class="girl-5" :src="'/assets/imgs/g5.png'"/>
  </div>
  <var-cell class="title-container">
    <var-row :gutter="[16, 0]">
      <var-col :span="24" align="center" justify="center">
        <var-chip class="kuzusi-font" type="primary" size="large">
          堰洲
          <template #right>
            <var-button round text color="transparent" @click="toggleTheme">
              <var-icon :name="isNightRef? 'weather-night' : 'white-balance-sunny'"/>
            </var-button>
          </template>
        </var-chip>
      </var-col>
      <var-col :span="24" align="center" justify="center">
        <var-chip type="success">
          临堰洲以少憩兮，芝兰馨而木繁枝
        </var-chip>
      </var-col>
      <var-col :span="24" align="center" justify="center">
        <var-chip type="warning">
          <var-button text round @click="nav2('https\://github.com/fumiama')">
            <var-icon name="github" />
          </var-button>
        </var-chip>
      </var-col>
    </var-row>
  </var-cell>
  <var-cell class="content-container">
    <var-row :gutter="[0, 32]">
      <var-col :span="8" align="center" justify="center">
        <var-card 
          title="CMoe-Counter"
          subtitle="多种风格的萌萌计数器"
        >
          <template #extra>
            <var-button text round @click="nav2('https\://counter.seku.su')">
              <var-icon name="chevron-right" />
            </var-button>
          </template>
        </var-card>
      </var-col>
      <var-col :span="8" align="center" justify="center">
        <var-card 
          title="Emozi"
          subtitle="颜文字汉字抽象转写器"
        >
          <template #extra>
            <var-button text round @click="nav2('https\://emozi.seku.su')">
              <var-icon name="chevron-right" />
            </var-button>
          </template>
        </var-card>
      </var-col>
      <var-col :span="8" align="center" justify="center">
        <var-card 
          title="Words-Away"
          subtitle="误屏蔽词绕过检测工具"
        >
          <template #extra>
            <var-button text round @click="nav2('https\://words-away.seku.su')">
              <var-icon name="chevron-right" />
            </var-button>
          </template>
        </var-card>
      </var-col>
    </var-row>
  </var-cell>
</template>

<style>
body {
  margin: 0;
  transition: background-color .25s, color .25s;
  color: var(--color-text);
  background-image: url('/assets/imgs/bgl.png'), url('/assets/imgs/bgr.png');
  background-size: 42.5vw auto, 38vw auto;
  background-position: top left, top right;
  background-repeat: no-repeat, no-repeat;
  background-color: var(--color-body);
  min-width: 360px;
}
.title-container {
  position: absolute;
  top: 24px;
  opacity: 0.8;
}
.content-container {
  position: absolute;
  bottom: 24px;
  opacity: 0.6;
  padding-left: 32px;
  padding-right: 32px;
}
.girls-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 57%;
  @media (min-width: 800px) {
    width: 70%;
  }
  @media (min-width: 1000px) {
    width: 74%;
  }
}
.girl-1 {
  display: none;
  height: 100vh;
  @media (min-width: 440px) {
    display: inline;
  }
}
.girl-2 {
  display: none;
  height: 100vh;
  @media (min-width: 630px) {
    display: inline;
  }
}
.girl-3 {
  display: none;
  height: 100vh;
  @media (min-width: 800px) {
    display: inline;
  }
}
.girl-4 {
  display: none;
  height: 100vh;
  @media (min-width: 1000px) {
    display: inline;
  }
}
.girl-5 {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}
.icon-sign {
  position: absolute;
  top: 24px;
  left: 35%;
}

.background-with-overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)); /* Adjust the opacity as needed */
}

@font-face {
    font-family: 'FZWenZhengMingXingCaoS';
    src: url('@/assets/fonts/FZWenZMXCJW.woff2') format('woff2');
}

.kuzusi-font {
  font-family: 'FZWenZhengMingXingCaoS';
  font-size: 64px;
  --chip-large-height: 80px;
}
</style>
