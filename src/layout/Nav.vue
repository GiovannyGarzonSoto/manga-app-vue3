<template>
  <nav class="nav">
    <a class="nav__logo"><img src="../../public/logo-full.png" alt="logo"></a>
    <a class="nav__item">Reciente</a>
    <a class="nav__item">Destacados</a>
    <a class="nav__item">Descubre</a>
    <a class="nav__item">Creators</a>
    <a class="nav__item">Favoritos</a>
    <a class="nav__item">Sobre</a>
    <div class="nav__search">
        <input class="nav__search-input input" maxlength="24" type="text" placeholder="Buscar por serie o autor">
    </div>
  </nav>
</template>

<script setup>
name: 'Nav'
</script>