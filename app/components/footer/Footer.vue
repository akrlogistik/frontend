<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__links">
          <img src="/img/logo.webp" class="footer__logo" alt="logo" />

          <a href="tel:88005054140" class="footer__link">8-800-505-41-40</a>
          <a href="mailto:info@akrlog.ru" class="footer__link"
            >info@akrlog.ru</a
          >
        </div>
        <img src="/img/qr.webp" class="footer__qr" alt="qr" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  padding: 80px 0;
  @media screen and (max-width: 619px) {
    padding: 40px 0;
  }
  &__links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__link {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Onest';
    color: #122e47;
    @media screen and (max-width: 850px) {
      font-size: 14px;
    }
  }
  &__logo {
    margin-bottom: 40px;
    width: 300px;
    height: auto;
    @media screen and (max-width: 850px) {
      width: 200px;
    }
    @media screen and (max-width: 619px) {
      margin-bottom: 20px;
    }
  }
  &__qr {
    width: 150px;
    height: auto;
    @media screen and (max-width: 850px) {
      width: 100px;
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    @media screen and (max-width: 619px) {
      gap: 20px;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
