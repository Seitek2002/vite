<template>
  <div class="container header__inner">
    <router-link to="/">
      <span class="header__logo">
        <img
          class="header__logo_mob"
          src="https://synergy.ru/assets/template/v5/images/logos/costum_part_dark_ru.svg"
          alt=""
          width="27"
          height="28"
          loading="lazy"
        />
        <img
          class="header__logo_desc"
          src="https://synergy.ru/assets/template/v5/images/logos/costum_part_dark_ru.svg"
          alt=""
          width="137"
          height="26"
          loading="lazy"
        />
      </span>
    </router-link>
    <span class="header__phones">
      <a href="tel:74958001001">+996 (502)-34-30-34</a>
      <a href="tel:88001000011">+996 (706)-88-40-96</a>
    </span>
    <button class="header__apply" type="button">Подобрать программу</button>
    <button class="header__burger" type="button">
      <span class="header__burger-ico"></span> Меню сайта
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
