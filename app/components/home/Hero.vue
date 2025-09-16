<template>
  <section class="hero">
    <Header />
    <div class="container" style="position: relative">
      <div class="hero__content">
        <div class="hero__left">
          <p class="hero__description">
            Грузоперевозки по России и СНГ для юридических лиц под ключ
          </p>
          <PButton @click="scrollToFeedbook">Рассчитать стоимость</PButton>
          <div class="hero__wrapper">
            <ul class="list-reset hero__list">
              <div class="hero__item-wrapper">
                <img src="/img/arr.png" class="hero__arr" alt="arr" />
                <li class="hero__item">7 лет в грузоперевозках</li>
              </div>
              <div class="hero__item-wrapper">
                <img src="/img/arr.png" class="hero__arr" alt="arr" />
                <li class="hero__item">Подадим машину в течение 3 часов</li>
              </div>
              <div class="hero__item-wrapper">
                <img src="/img/arr.png" class="hero__arr" alt="arr" />
                <li class="hero__item">Личный менеджер 24/7</li>
              </div>
              <div class="hero__item-wrapper">
                <img src="/img/arr.png" class="hero__arr" alt="arr" />
                <li class="hero__item">
                  Доставим сборный груз без перегрузкина сторонних складах
                </li>
              </div>
              <div class="hero__item-wrapper">
                <img src="/img/arr.png" class="hero__arr" alt="arr" />
                <li class="hero__item">Оформим документы за 40 минут</li>
              </div>
              <div class="hero__item-wrapper">
                <img src="/img/arr.png" class="hero__arr" alt="arr" />
                <li class="hero__item">Работает с НДС и без НДС</li>
              </div>
            </ul>
            <p class="hero__description2">
              <span class="hero__percentage">90%</span>
              <span class="hero__text-block">
                <span class="hero__text-line">Заказчиков</span>
                <span class="hero__text-line">обращаются к нам повторно</span>
              </span>
            </p>
          </div>
        </div>
        <!-- <img src="/img/home-hero.webp" class="hero__img" alt="img" /> -->
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
  padding: 150px 0 20px 0;
  overflow: hidden;
  background-image: url('/img/hero.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(18, 46, 71, 0.6);
    z-index: 1;
  }

  @media screen and (max-width: 850px) {
    display: block;
    padding: 0px 0 50px 0;
  }
  &__arr {
    width: 25px;
    height: 25px;
    @media screen and (max-width: 1200px) {
      width: 20px;
      height: 20px;
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }
  &__content {
    position: relative;
    z-index: 2;
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // gap: 50px;
    // @media screen and (max-width: 850px) {
    //   grid-template-columns: 1fr;
    // }
    // @media screen and (max-width: 850px) {
    //   gap: 10px;
    // }
    // @media screen and (max-width: 850px) {
    //   width: 100%;
    //   height: 100%;
    //   position: absolute;
    //   top: 80%;
    //   left: 0;
    //   transform: translate(-50%, 0);
    // }
  }
  &__item-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &__description2 {
    max-width: 400px;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Onest';
    line-height: normal;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 15px;
    @media screen and (max-width: 850px) {
      font-size: 14px;
    }
  }

  &__percentage {
    font-size: 48px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1;
    @media screen and (max-width: 1200px) {
      font-size: 30px;
    }
    @media screen and (max-width: 850px) {
      font-size: 18px;
    }
  }

  &__text-block {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__text-line {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.2;
    letter-spacing: 0.5px;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__description {
    margin-bottom: 20px;
    max-width: 650px;
    font-size: 50px;
    font-weight: 700;
    font-family: 'Onest';
    line-height: normal;
    color: #ffffff;
    // @media screen and (max-width: 1383px) {
    //   font-size: 60px;
    // }
    @media screen and (max-width: 1200px) {
      font-size: 40px;
    }
    @media screen and (max-width: 850px) {
      font-size: 20px;
      margin-bottom: 30px;
    }
    // @media screen and (max-width: 850px) {
    //   font-size: 30px;
    //   max-width: 100%;
    // }
    // @media screen and (max-width: 619px) {
    //   font-size: 20px;
    //   max-width: 100%;
    // }
  }
  &__item {
    font-size: 20px;
    font-weight: 700;
    font-family: 'Onest';
    line-height: normal;
    color: #ffffff;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
  }
  &__img {
    // transform: translateX(100%);
    // opacity: 0;
    // animation: truck-in 1s ease-out forwards;
    // animation-delay: 0.3s;

    // @keyframes truck-in {
    //   to {
    //     transform: translateX(0);
    //     opacity: 1;
    //   }
    // }
    // @media screen and (max-width: 850px) {
    //   width: 100%;
    //   max-width: 600px;
    //   height: auto;
    // }
  }
}
:deep(.p-button) {
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 850px) {
    font-size: 14px;
    padding: 5px 10px;
  }
}
</style>
