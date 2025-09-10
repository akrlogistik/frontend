<template>
  <section class="feedbook" id="feedbook">
    <div class="container">
      <div class="feedbook__wrapper">
        <div class="feedbook__content">
          <p class="feedbook__description">
            Расчитать стоимость доставки за 10 минут
          </p>
          <div class="feedbook__links">
            <a class="feedbook__link" href="mailto:info@akrlog.ru"
              >info@akrlog.ru</a
            >
            <a class="feedbook__link" href="tel:88005054140">8-800-505-41-40</a>
          </div>
          <form class="feedbook__form">
            <PInputText
              class="feedbook__input"
              placeholder="Ваше имя"
              autocompleted="off"
              required
            />
            <PInputMask
              class="feedbook__input"
              mask="+7 (999) 999-99-99"
              placeholder="+7 (___) ___-__-__"
              autocompleted="off"
              required
            />
            <PButton>Получить консультацию</PButton>
          </form>
        </div>
        <div class="feedbook__img">
          <img
            src="/img/feedbook-img.webp"
            alt="feedbook"
            class="feedbook__image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.feedbook {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23122e47" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="%23054263" opacity="0.05"/><circle cx="50" cy="10" r="0.5" fill="%23122e47" opacity="0.03"/><circle cx="10" cy="60" r="0.5" fill="%23054263" opacity="0.03"/><circle cx="90" cy="40" r="0.5" fill="%23122e47" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    animation: grain 25s linear infinite;
  }
  @media screen and (max-width: 1204px) {
    padding: 40px 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 850px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  &__description {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    font-family: 'Onest';
    color: #122e47;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 1204px) {
      font-size: 30px;
    }
    @media screen and (max-width: 850px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  &__links {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 850px) {
      flex-direction: column;
      gap: 10px;
    }
  }
  &__link {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Onest';
    color: #122e47;
    max-width: max-content;
    @media screen and (max-width: 850px) {
      font-size: 16px;
    }
  }

  &__img {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    background: linear-gradient(135deg, #122e47 0%, #1a3a5c 100%);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(18, 46, 71, 0.2);
    @media screen and (max-width: 850px) {
      border-radius: 10px;
      overflow: visible;
      position: static;
      display: block;
    }
  }

  &__image {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 600px;
    object-fit: cover;
    height: auto;
    @media screen and (max-width: 850px) {
      position: static;
      transform: none;
      width: 100%;
      height: auto;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 850px) {
      gap: 10px;
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
:deep(.p-button) {
  @media screen and (max-width: 850px) {
    font-size: 14px;
    padding: 5px 10px;
  }
}
:deep(.p-inputtext) {
  @media screen and (max-width: 850px) {
    font-size: 14px;
    padding: 5px 10px;
    &::placeholder {
      font-size: 14px;
    }
  }
}
</style>
