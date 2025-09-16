<template>
  <header class="header" :class="{ header__fixed: isFixed }">
    <div class="container">
      <div class="header__wrapper">
        <img
          src="/img/logo.webp"
          class="header__logo"
          alt="logo"
          @click="scrollToSection('hero')"
        />
        <nav class="header__nav">
          <ul class="list-reset header__nav-list">
            <li class="header__nav-item">
              <a
                class="header__nav-link"
                href="#"
                @click.prevent="scrollToSection('carpark')"
                >Автопарк</a
              >
            </li>
            <li class="header__nav-item">
              <a
                class="header__nav-link"
                href="#"
                @click.prevent="scrollToSection('about')"
                >О нас</a
              >
            </li>
            <li class="header__nav-item">
              <a
                class="header__nav-link"
                href="#"
                @click.prevent="scrollToSection('founders')"
                >Руководство</a
              >
            </li>
            <li class="header__nav-item">
              <a
                class="header__nav-link"
                href="#"
                @click.prevent="scrollToSection('partners')"
                >Наши заказчики</a
              >
            </li>
            <li class="header__nav-item">
              <a
                class="header__nav-link"
                href="#"
                @click.prevent="scrollToSection('geography')"
                >География перевозок</a
              >
            </li>
          </ul>
        </nav>
        <div class="header__links">
          <a class="header__link" href="tel:88005054140">8-800-505-41-40</a>
          <a class="header__link" href="mailto:info@akrlog.ru"
            >info@akrlog.ru</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const isFixed = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isFixed.value = window.scrollY > 20
  })
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  transition: all 0.3s ease;
  padding: 15px 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.24), 2px 4px 8px rgba(0, 0, 0, 0.04);

  @media screen and (max-width: 850px) {
    position: relative;
    margin-bottom: 40px;
  }
  &__fixed {
    padding: 5px 0;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 850px) {
      padding: 15px 0;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.24), 2px 4px 8px rgba(0, 0, 0, 0.04);
      background: white;
    }
  }

  &__wrapper {
    border-bottom: 2px solid transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    transition: all 0.3s ease;
    @media screen and (max-width: 1364px) {
      gap: 15px;
      flex-direction: column;
    }
  }

  &--fixed &__wrapper {
    border-bottom: 2px solid #122e47;
  }
  &__logo {
    width: 300px;
    height: auto;
    cursor: pointer;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.8;
    }
    @media screen and (max-width: 850px) {
      width: 200px;
    }
  }
  &__links {
    display: flex;
    gap: 10px;
  }
  &__link {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Onest';
    color: #ffffff;
    border-radius: 6px;
    padding: 8px 12px;
    background-color: #122e47;
    text-decoration: none;
    transition: background-color 0.2s ease-in;
    &:hover {
      background-color: #1c4b73; /* светлее и контрастнее */
    }

    &:active {
      background-color: #0b1c2b; /* ощутимо темнее */
    }
    @media screen and (max-width: 850px) {
      font-size: 14px;
      padding: 5px 10px;
    }
  }

  &__nav-list {
    display: flex;
    gap: 18px;
    @media screen and (max-width: 659px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      align-items: center;
      justify-items: center;
    }
  }
  &__nav-item {
    @media screen and (max-width: 659px) {
      text-align: center;
      &:last-child {
        grid-column: 1 / -1;
        justify-self: center;
      }
    }
  }
  &__nav-link {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Onest';
    color: #122e47;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: #1c4b73;
    }
    @media screen and (max-width: 659px) {
      font-size: 12px;
    }
  }
}
</style>
