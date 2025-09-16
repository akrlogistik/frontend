<script lang="ts" setup>
import type { YMap } from '@yandex/ymaps3-types'
import { shallowRef } from 'vue'
import {
  YandexMap,
  YandexMapControlButton,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps'

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)

const handleClickOnBtnToMap = () => {
  window.open(
    'https://yandex.ru/maps?ll=37.630133,55.719513&z=18&l=map&pt=37.630133,55.719513',
    '_blank'
  )
}
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [37.630133, 55.719513],
        zoom: 16,
      },
    }"
    class="map"
    width="100%"
    height="350px"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-marker
      position="top-center left-center"
      :settings="{ coordinates: [37.630133, 55.719513] }"
    >
      <img class="pin" src="/img/marker.png" alt="" />
    </yandex-map-marker>
    <yandex-map-controls
      :settings="{
        position: 'bottom left',
        orientation: 'vertical',
      }"
    >
      <YandexMapControlButton
        style="padding: 0"
        :settings="{
          onClick: handleClickOnBtnToMap,
          background: '#054263',
        }"
      >
        <button class="btn-reset btn-map">Посмотреть</button>
      </YandexMapControlButton>
    </yandex-map-controls>
  </yandex-map>
</template>

<style lang="scss" scoped>
.pin {
  cursor: pointer;
  max-width: unset;
  object-fit: cover;
  width: 70px;
  height: 70px;
  @media screen and (max-width: 900px) {
    width: 40px;
    height: 40px;
  }
}
.btn-map {
  font-size: 14px;
  position: relative;
  z-index: 200000000000000;
  cursor: pointer;
  color: #fff;
  border-radius: 11px;
  background: #054263;
}
@media screen and (max-width: 564px) {
  .btn-map {
    font-size: 12px;
    padding: 0 0;
  }
}
</style>
