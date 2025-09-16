<template>
  <div>
    <HomeHero />
    <HomeCarPark />
    <HomeAbout />
    <HomeFounders />
    <HomeFeedBook />
    <HomePartners />

    <HomeGeography />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Грузоперевозки по России и СНГ для юридических лиц под ключ',
  meta: [
    {
      name: 'description',
      content: 'Грузоперевозки по России и СНГ для юридических лиц под ключ',
    },
    {
      property: 'og:title',
      content:
        'Akrlog - Грузоперевозки по России и СНГ для юридических лиц под ключ',
    },
    {
      property: 'og:description',
      content: 'Грузоперевозки по России и СНГ для юридических лиц под ключ',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://akrlog.ru/' },
    { property: 'og:site_name', content: 'Akrlog' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style></style>
