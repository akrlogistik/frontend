<template>
  <section class="about">
    <div class="container">
      <h2 class="about__title">О нас</h2>
      <div class="about__content">
        <div class="about__intro">
          <h3 class="about__subtitle">
            Лучшее соотношение цены/сервис на отправления крупным объемом
            межгород
          </h3>
          <p class="about__description">
            АКР Логистика отправит фуру настолько дешево, насколько этого можно
            добиться с таким уровнем сервиса, и с такими преимуществами которые
            мы даем, а именно:
          </p>
        </div>

        <div class="about__features">
          <div class="about__feature">
            <div class="about__feature-content">
              <h4 class="about__feature-title">Надежность</h4>
              <p class="about__feature-text">
                Работаем по договору. Обязательное страхование груза.
              </p>
            </div>
          </div>

          <div class="about__feature">
            <div class="about__feature-content">
              <h4 class="about__feature-title">
                Ежедневно свободный транспорт
              </h4>
              <p class="about__feature-text">
                Во всех городах России – организуем перевозки любой сложности в
                день обращения. Даже если машина сломалась быстро организуем
                замену.
              </p>
            </div>
          </div>

          <div class="about__feature">
            <div class="about__feature-content">
              <h4 class="about__feature-title">Проверенные водители</h4>
              <p class="about__feature-text">
                Каждый наш водитель проходит службу безопасности
              </p>
            </div>
          </div>

          <div class="about__feature">
            <div class="about__feature-content">
              <h4 class="about__feature-title">Персональный менеджер</h4>
              <p class="about__feature-text">
                24/7 на связи. Осуществляет контроль на всех этапах перевозки с
                вниманием к клиенту и заботой о грузе. Предложит самые
                оптимальные варианты.
              </p>
            </div>
          </div>

          <div class="about__feature">
            <div class="about__feature-content">
              <h4 class="about__feature-title">От двери до двери</h4>
              <p class="about__feature-text">
                Без дополнительных выгрузок и загрузок на терминалах и складах.
                Сроки доставки короче, а груз целее.
              </p>
            </div>
          </div>

          <div class="about__feature">
            <div class="about__feature-content">
              <h4 class="about__feature-title">Честное ценообразование</h4>
              <p class="about__feature-text">
                Стоимость услуги закреплена в договоре. Никаких сюрпризов в виде
                доплат на месте. Форма оплаты на ваш выбор.
              </p>
            </div>
          </div>

          <div class="about__feature">
            <div class="about__feature-content">
              <h4 class="about__feature-title">Электронный документооборот</h4>
              <p class="about__feature-text">
                Не нужно никуда ходить, все юридически значимые документы
                оформим удаленно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.about {
  padding: 80px 0;
  background: linear-gradient(135deg, #122e47 0%, #1a3a5c 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.03"/><circle cx="10" cy="60" r="0.5" fill="%23ffffff" opacity="0.03"/><circle cx="90" cy="40" r="0.5" fill="%23ffffff" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    animation: grain 25s linear infinite;
  }
  @media screen and (max-width: 1204px) {
    padding: 40px 0;
  }
  &__title {
    margin-bottom: 40px;
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
      margin-bottom: 20px;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__intro {
    text-align: center;
    margin-bottom: 80px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1204px) {
      margin-left: 0;
      margin-right: 0;
      max-width: 100%;
      margin-bottom: 40px;
    }
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 700;
    font-family: 'Onest';
    color: #ffffff;
    margin-bottom: 10px;
    line-height: 1.3;
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
    font-size: 18px;
    font-weight: 400;
    font-family: 'Onest';
    color: #e2e8f0;
    line-height: 1.6;
    margin: 0;
    @media screen and (max-width: 1204px) {
      font-size: 16px;
      line-height: normal;
    }
  }

  &__features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  &__feature {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    background: rgba(255, 255, 255, 0.05);
    padding: 30px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    @media screen and (max-width: 850px) {
      padding: 15px;
    }
  }

  &__feature-content {
    flex: 1;
  }

  &__feature-title {
    font-size: 18px;
    font-weight: 700;
    font-family: 'Onest';
    color: #ffffff;
    margin-bottom: 12px;
    line-height: 1.3;
    @media screen and (max-width: 850px) {
      font-size: 16px;
      line-height: normal;
    }
  }

  &__feature-text {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Onest';
    color: #cbd5e1;
    line-height: 1.6;
    margin: 0;
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
