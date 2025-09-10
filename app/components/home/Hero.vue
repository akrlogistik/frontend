<template>
  <section class="hero">
    <Header />
    <div class="container">
      <div class="hero__content">
        <div class="hero__left">
          <p class="hero__description">
            Грузоперевозки по России и СНГ для юридических лиц под ключ
          </p>
          <PButton @click="scrollToFeedbook" class="hero__right"
            >Получить консультацию</PButton
          >
        </div>
        <img src="/img/home-hero.png" class="hero__img" alt="img" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const scrollToFeedbook = () => {
  const feedbook = document.getElementById('feedbook')
  if (feedbook) {
    const getHeaderHeight = () => {
      if (window.innerWidth <= 850) {
        return 0
      } else if (window.innerWidth <= 1204) {
        return 78
      } else {
        return 79
      }
    }

    const headerHeight = getHeaderHeight()
    const elementPosition = feedbook.offsetTop
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 170px 0 100px 0;
  overflow: hidden;

  @media screen and (max-width: 850px) {
    padding: 0px 0 50px 0;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 850px) {
      gap: 10px;
    }
  }
  &__description {
    margin-bottom: 20px;
    max-width: 650px;
    font-size: 70px;
    font-weight: 700;
    font-family: 'Onest';
    line-height: normal;
    color: #122e47;
    @media screen and (max-width: 1383px) {
      font-size: 60px;
    }
    @media screen and (max-width: 1204px) {
      font-size: 40px;
    }
    @media screen and (max-width: 850px) {
      font-size: 30px;
      max-width: 100%;
    }
    @media screen and (max-width: 619px) {
      font-size: 20px;
      max-width: 100%;
    }
  }
  &__img {
    transform: translateX(100%);
    opacity: 0;
    animation: truck-in 1s ease-out forwards;
    animation-delay: 0.3s;

    @keyframes truck-in {
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @media screen and (max-width: 850px) {
      width: 100%;
      max-width: 600px;
      height: auto;
    }
  }
}
:deep(.p-button) {
  @media screen and (max-width: 850px) {
    font-size: 14px;
    padding: 5px 10px;
  }
}
</style>
