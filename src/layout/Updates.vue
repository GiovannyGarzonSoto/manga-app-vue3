<template>
  <div class="updates">
    <header class="header">
      <h3 class="header__title">Ponte al día</h3>
      <a class="header__tag tag">Todo lo Reciente &#x276D;</a>
    </header>

    <section class="titles">
      <div class="title" v-for="(chapter, i) in chapters" :key="chapter.id">
        <div class="title__image" ref="title__image">
          <span class="title__name">{{ chapter.title }}</span>
          <span class="title__author">{{ chapter.manga.author.name }}</span>
        </div>
        <div class="title__info">
          <span class="title__number">#{{ chapter.number }}</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo {{ chapter.number }}: {{ chapter.title }}</span>
        </div>
      </div>

      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
        </div>
      </div>
      <div class="title">
        <div class="title__image">
          <span class="title__name">8Kaijuu</span>
          <span class="title__author">Matsumoto Naoya</span>
        </div>
        <div class="title__info">
          <span class="title__number">#80</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capitulo 80: Es ahora!</span>
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
    const title__image = ref(null);
    const getChapters = async() => {
      const {data} = await axios.get('/chapter') 
      chapters.value = data.data
      console.log("🚀 ~ file: Updates.vue:157 ~ getChapters ~ chapter:", chapters)
    }

    const setMangaImage = () => {
      console.log(title__image.value)
    }

    onMounted(() => {
      getChapters()
      setMangaImage()
    })

    return {
      chapters,
    }
  }
}

</script>

<style src="../scss/layout/_updates.scss"></style>