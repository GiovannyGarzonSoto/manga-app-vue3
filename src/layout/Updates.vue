<template>
  <div class="updates">
    <header class="header" v-show="chapters.length >= 0">
      <h3 class="header__title">Ponte al día</h3>
      <a class="header__tag tag">Todo lo Reciente &#x276D;</a>
    </header>

    <section class="titles" v-if="chapters.length > 0">
      <div @mouseleave="removeMangaMask" @mouseenter="setMangaMask" class="title" v-for="(chapter, i) in chapters" :key="chapter.id">
        <div ref="box" class="title__image-box">
          <img class="title__image" :src="`${chapter.manga.images.cover}`" alt="">
          <span class="title__name">{{ chapter.manga.title }}</span>
          <span class="title__author">{{ chapter.author.name }}</span>
        </div>
        <div ref="info" class="title__info">
          <span class="title__number">#{{ chapter.number }}</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo {{ chapter.number }}: {{ chapter.title }}</span>
        </div>
      </div>
      <div @mouseleave="removeMangaMask" @mouseenter="setMangaMask" class="title" v-for="(chapter, i) in chapters" :key="chapter.id">
        <div ref="box" class="title__image-box">
          <img class="title__image" :src="`${chapter.manga.images.cover}`" alt="">
          <span class="title__name">{{ chapter.manga.title }}</span>
          <span class="title__author">{{ chapter.author.name }}</span>
        </div>
        <div ref="info" class="title__info">
          <span class="title__number">#{{ chapter.number }}</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo {{ chapter.number }}: {{ chapter.title }}</span>
        </div>
      </div>
      <div @mouseleave="removeMangaMask" @mouseenter="setMangaMask" class="title" v-for="(chapter, i) in chapters" :key="chapter.id">
        <div ref="box" class="title__image-box">
          <img class="title__image" :src="`${chapter.manga.images.cover}`" alt="">
          <span class="title__name">{{ chapter.manga.title }}</span>
          <span class="title__author">{{ chapter.author.name }}</span>
        </div>
        <div ref="info" class="title__info">
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
import { onMounted, ref } from 'vue'

export default {
  name: 'Updates',
  setup() {
    const chapters = ref([])
    const box = ref(null)
    const info = ref(null)

    const getChapters = async () => {
      const { data } = await axios.get('/chapter')
      chapters.value = data.data
    }

    const setMangaMask = async (e) => {
      e.target.childNodes[1].classList.add('title__info-hover')
    }

    const removeMangaMask = async (e) => {
      e.target.childNodes[1].classList.remove('title__info-hover')
    }

    onMounted(() => {
      getChapters()
    })

    return {
      chapters,
      setMangaMask,
      removeMangaMask,
      box,
      info
    }
  }
}

</script>

<style src="../scss/layout/_updates.scss"></style>