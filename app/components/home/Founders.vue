<template>
  <section class="founders" id="founders">
    <div class="container">
      <h2 class="founders__title">Руководство компании</h2>
      <div class="founders__wrapper">
        <div class="founders__item founders__item--left">
          <div class="founders__photo">
            <img
              src="/img/founders.webp"
              alt="Основатель 1"
              class="founders__image"
            />
          </div>
          <div class="founders__info">
            <h3 class="founders__name">Кильметьев Айрат Раушатович</h3>
            <p class="founders__description">Генеральный директор</p>
            <a href="mailto:ceo@akrlog.ru" class="founders__description"
              >ceo@akrlog.ru</a
            >
          </div>
        </div>

        <div class="founders__item founders__item--right">
          <div class="founders__photo">
            <img
              src="/img/founders.webp"
              alt="Основатель 2"
              class="founders__image"
            />
          </div>
          <div class="founders__info">
            <h3 class="founders__name">Кадиев Руслан Кадиевич</h3>
            <p class="founders__description">
              Руководитель службы безопасности
            </p>
            <a href="mailto:ceo@akrlog.ru" class="founders__description"
              >sb@akrlog.ru</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.founders {
  padding: 80px 0 0 0;
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
    padding: 40px 0 0 0;
  }
  &__title {
    margin-bottom: 50px;
    font-size: 40px;
    font-weight: 700;
    font-family: 'Onest';
    color: #122e47;
    text-align: center;
    z-index: 2;
    @media screen and (max-width: 1204px) {
      font-size: 30px;
      margin-bottom: 40px;
    }
    @media screen and (max-width: 850px) {
      font-size: 22px;
      margin-bottom: 30px;
    }
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 24px;
    padding: 40px 30px;
    box-shadow: 0 20px 60px rgba(18, 46, 71, 0.1);
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 850px) {
      padding: 20px;
    }
  }

  &__photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 25px;
    border: 5px solid #122e47;
    position: relative;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(18, 46, 71, 0.2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, #122e47, #054263);
      opacity: 0.1;
      z-index: 1;
    }
    @media screen and (max-width: 850px) {
      width: 100px;
      height: 100px;
      margin-bottom: 15px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 2;
    transition: transform 0.4s ease;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(18, 46, 71, 0.9),
      rgba(5, 66, 99, 0.9)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 3;
    border-radius: 50%;
    @media screen and (max-width: 850px) {
      border-radius: 25px;
    }
  }

  &__info {
    text-align: center;
  }

  &__name {
    font-size: 20px;
    font-weight: 700;
    font-family: 'Onest';
    color: #122e47;
    margin-bottom: 2px;
    line-height: 1.2;
    @media screen and (max-width: 1204px) {
      font-size: 18px;
      line-height: normal;
    }
    @media screen and (max-width: 850px) {
      font-size: 16px;
      line-height: normal;
    }
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Onest';
    color: #666;

    max-width: 280px;
    @media screen and (max-width: 1204px) {
      font-size: 16px;
      line-height: normal;
    }
    @media screen and (max-width: 850px) {
      font-size: 14px;
      line-height: normal;
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
