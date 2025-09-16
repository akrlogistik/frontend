<template>
  <section class="CarPark">
    <div class="container">
      <h2 class="CarPark__title">Собственный автопарк</h2>
      <h3 class="CarPark__subTitle">Широкая партнерская сеть</h3>
      <p class="CarPark__subTitle2">Более 100 единиц техники</p>
      <div class="CarPark__wrapper">
        <div class="CarPark__item">
          <img class="CarPark__img" src="/img/car-1.webp" alt="img" />
          <p class="CarPark__description">Негабаритные перевозки</p>
        </div>
        <div class="CarPark__item">
          <img class="CarPark__img" src="/img/car-2.webp" alt="img" />
          <p class="CarPark__description">Междугородние перевозки</p>
        </div>
        <div class="CarPark__item">
          <img class="CarPark__img" src="/img/car-3.webp" alt="img" />
          <p class="CarPark__description">Доставка сборного груза</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.CarPark {
  padding: 80px 0;
  background: #122e47;
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
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 0 20px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 1204px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
      padding: 0;
      gap: 20px;
    }
  }
  &__title {
    margin-bottom: 5px;
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
    }
  }
  &__subTitle {
    font-size: 30px;
    font-weight: 400;
    font-family: 'Onest';
    color: #ffffff;
    text-align: center;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 1204px) {
      font-size: 20px;
    }
    @media screen and (max-width: 850px) {
      font-size: 18px;
    }
  }
  &__subTitle2 {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 400;
    font-family: 'Onest';
    color: #ffffff;
    text-align: center;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 1204px) {
      font-size: 20px;
    }
    @media screen and (max-width: 850px) {
      font-size: 18px;
    }
  }
  &__img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 850px) {
      height: 200px;
      object-position: 50% 43%;
    }
  }
  &__description {
    font-size: 18px;
    font-weight: 600;
    font-family: 'Onest';
    color: #ffffff;
    margin: 0;
    padding: 0 10px;
    @media screen and (max-width: 850px) {
      font-size: 16px;
    }
  }
  &__item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    padding: 25px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 850px) {
      padding: 15px;
    }
  }
}
// @keyframes grain {
//   0% {
//     transform: translate(0, 0) rotate(0deg);
//   }
//   10% {
//     transform: translate(5%, -8%) rotate(3deg);
//   }
//   20% {
//     transform: translate(-3%, 5%) rotate(-2deg);
//   }
//   30% {
//     transform: translate(8%, 10%) rotate(4deg);
//   }
//   40% {
//     transform: translate(-10%, -5%) rotate(-3deg);
//   }
//   50% {
//     transform: translate(3%, -12%) rotate(2deg);
//   }
//   60% {
//     transform: translate(-5%, 8%) rotate(-4deg);
//   }
//   70% {
//     transform: translate(12%, -3%) rotate(3deg);
//   }
//   80% {
//     transform: translate(-8%, 12%) rotate(-2deg);
//   }
//   90% {
//     transform: translate(6%, 3%) rotate(1deg);
//   }
//   100% {
//     transform: translate(0, 0) rotate(0deg);
//   }
// }
</style>
