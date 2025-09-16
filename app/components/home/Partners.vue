<template>
  <section class="partners" id="partners">
    <div class="container">
      <h2 class="partners__title">Наши заказчики</h2>
    </div>
    <Vue3Marquee class="partners__items">
      <img class="partners__img" src="/img/partners-1.webp" alt="img" />
      <img class="partners__img" src="/img/partners-2.webp" alt="img" />
      <img class="partners__img" src="/img/partners-3.webp" alt="img" />
      <img class="partners__img" src="/img/partners-4.webp" alt="img" />
      <img class="partners__img" src="/img/partners-5.webp" alt="img" />
      <img class="partners__img" src="/img/partners-6.webp" alt="img" />
      <img class="partners__img" src="/img/partners-7.webp" alt="img" />
      <img class="partners__img" src="/img/partners-8.webp" alt="img" />
      <img class="partners__img" src="/img/partners-9.webp" alt="img" />
      <img class="partners__img" src="/img/partners-10.webp" alt="img" />
    </Vue3Marquee>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.partners {
  padding: 80px 0 80px 0;
  background: #f8fafc;
  // position: relative;
  // overflow: hidden;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23122e47" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="%23054263" opacity="0.05"/><circle cx="50" cy="10" r="0.5" fill="%23122e47" opacity="0.03"/><circle cx="10" cy="60" r="0.5" fill="%23054263" opacity="0.03"/><circle cx="90" cy="40" r="0.5" fill="%23122e47" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  //   animation: grain 25s linear infinite;
  // }
  @media screen and (max-width: 1204px) {
    padding: 40px 0 40px 0;
  }
  &__title {
    margin-bottom: 50px;
    font-size: 40px;
    font-weight: 700;
    font-family: 'Onest';
    color: #122e47;
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

  &__img {
    margin-right: 50px;
    padding: 20px 30px;
    background: linear-gradient(145deg, #ffffff, #f1f5f9);
    border-radius: 20px;
    width: 200px;
    height: 120px;
    object-fit: contain;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(18, 46, 71, 0.1);
    @media screen and (max-width: 1204px) {
      margin-right: 20px;
      padding: 10px 20px;
      width: 150px;
      height: 90px;
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
