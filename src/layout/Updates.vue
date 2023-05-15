<template>
  <div class="updates">
    <header class="header" v-show="chapters.length >= 0">
      <h3 class="header__title">Ponte al día</h3>
      <a class="header__tag tag">Todo lo Reciente &#x276D;</a>
    </header>

    <section class="titles" v-if="chapters.length>0">
      <div class="title" v-for="(chapter, i) in chapters" :key="chapter.id">
        <div class="title__image-box" ref="titleImage">
          <img class="title__image" :src="`${chapter.manga.images.cover}`" alt="">
          <span class="title__name">{{ chapter.title }}</span>
          <span class="title__author">{{ chapter.author.name }}</span>
        </div>
        <div class="title__info">
          <span class="title__number">#{{ chapter.number }}</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo {{ chapter.number }}: {{ chapter.title }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script >
import axios from '@axios'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

export default {
  name: 'Updates',
  setup() {
    const chapters = ref([])

    const getChapters = async() => {
      const {data} = await axios.get('/chapter') 
      chapters.value = data.data
      console.log("🚀 ~ file: Updates.vue:159 ~ getChapters ~ chapters.value:", chapters.value)
    }

    onMounted(() => {
      getChapters()
    })

    return {
      chapters,
    }
  }
}

</script>

<style src="../scss/layout/_updates.scss"></style>