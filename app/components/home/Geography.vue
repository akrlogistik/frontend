<template>
  <section class="geography" id="geography">
    <div class="container">
      <h2 class="geography__title">Обширная география перевозок</h2>
      <div class="geography__wrapper">
        <img src="/img/hpme-geography.webp" class="geography__img" alt="img" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.geography {
  padding: 80px 0;
  background: linear-gradient(135deg, #122e47 0%, #1a3a5c 100%);
  // position: relative;
  // overflow: hidden;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.03"/><circle cx="10" cy="60" r="0.5" fill="%23ffffff" opacity="0.03"/><circle cx="90" cy="40" r="0.5" fill="%23ffffff" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  //   animation: grain 25s linear infinite;
  // }
  @media screen and (max-width: 1204px) {
    padding: 40px 0;
  }
  &__title {
    margin-bottom: 45px;
    font-size: 40px;
    font-weight: 700;
    font-family: 'Onest';
    color: #ffffff;
    text-align: center;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 1204px) {
      font-size: 30px;
    }
    @media screen and (max-width: 850px) {
      font-size: 22px;
      margin-bottom: 30px;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  &__img {
    width: 100%;
    max-width: 1000px;
    height: auto;
    @media screen and (max-width: 1204px) {
      max-width: 800px;
    }
  }
}

@keyframes grain {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  10% {
    transform: translate(5%, -8%) rotate(3deg);
  }
  20% {
    transform: translate(-3%, 5%) rotate(-2deg);
  }
  30% {
    transform: translate(8%, 10%) rotate(4deg);
  }
  40% {
    transform: translate(-10%, -5%) rotate(-3deg);
  }
  50% {
    transform: translate(3%, -12%) rotate(2deg);
  }
  60% {
    transform: translate(-5%, 8%) rotate(-4deg);
  }
  70% {
    transform: translate(12%, -3%) rotate(3deg);
  }
  80% {
    transform: translate(-8%, 12%) rotate(-2deg);
  }
  90% {
    transform: translate(6%, 3%) rotate(1deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
</style>
