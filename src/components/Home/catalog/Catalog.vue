<template>
  <div class="container">
    <div class="catalog catalog_ru">
      <h4 class="catalog__title">Каталог Университета «МУИТ»</h4>
      <p class="catalog__description">
        Мы собрали подробную информацию об&nbsp;институтах, студенческой жизни
        и&nbsp;возможностях трудоустройства. Узнай про&nbsp;обучение в&nbsp;один
        клик!
      </p>
      <form
        action="https://synergy.ru/lander/alm/lander.php?r=land/index&amp;land=synergy.ru&amp;grcampaign=e_mail_chain_vpo&amp;unit=synergy&amp;type=univer&amp;version=index&amp;form=getcatalog_page&amp;graccount=synergy"
        method="post"
        class="form catalog__form"
        novalidate="novalidate"
      >
        <div class="form__fileds">
          <span class="form__filed"
            ><input
              name="name"
              type="text"
              class="form__input GoodLocal"
              placeholder="Имя" /></span
          ><span class="form__filed"
            ><input
              name="phone"
              type="tel"
              class="form__input"
              inputmode="tel"
              placeholder="Телефон"
              data-inputmasks-inited="" /></span
          ><span class="form__filed"
            ><input
              name="email"
              type="email"
              class="form__input"
              placeholder="Электронная почта"
          /></span>
        </div>
        <div class="form__bottom">
          <button class="button form__button">Скачать</button
          ><label class="form__privacy"
            ><input
              class="form__privacy-checkbox"
              type="checkbox"
              name="personalDataAgree"
              checked=""
            /><span class="form__privacy-ico"></span
            ><span class="form__privacy-text">
              Согласен на&nbsp;обработку персональных данных, получение
              рассылок, а&nbsp;также с&nbsp;
              <a
                href="https://synergy.ru/lp/_chunk/privacy.php?lang=ru"
                class="link link_underline fancybox-privacy-link"
                >политикой конфиденциальности</a
              >.
            </span></label
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.catalog {
  padding: 40px 0 45px;
}
.catalog__title {
  margin: 0 0 15px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
}
.catalog__description {
  margin: 0 0 30px;
  font-size: 16px;
  line-height: 1.4;
}

.catalog__form .form__fileds {
  display: flex;
  flex-direction: column;
}
.catalog__form .form__filed {
  margin: 0 0 18px;
}

.form-wrapper {
  padding: 36px 16px 36px 28px;
  border-radius: 4px;
}

.form-wrapper_bg-gray {
  background-color: var(--gray);
}

.form_vertical {
  flex-direction: column;
}

.form__title {
  margin: 0 0 18px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--blue);
}

.form__inner {
  display: grid;
  grid-gap: 18px;
  width: 100%;
}

.form__filed {
  width: 100%;
}

.form__input {
  width: 100%;
  padding: 14px 18px;
  margin: 0;
  border: 1px solid #cfd1df;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.15;
  text-transform: none;
  transition: 0.2s;
}
.form__input:focus {
  border-color: var(--primary);
  outline: none;
}
.form__input.error,
.form__input.error:focus {
  border-color: red;
}

label.error {
  display: none !important;
}

.form__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 162px;
  height: 48px;
  border: none;
  border-radius: 4px;
  background-color: var(--red);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  transition: 0.2s;
}
.form__button:hover {
  opacity: 0.8;
}

/*******************
privacy
*******************/
.form__privacy {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 18px 0 0;
}

.form__privacy-checkbox {
  position: absolute;
  z-index: 1;
  display: block;
  opacity: 0;
}
.form__privacy-checkbox,
.form__privacy-ico {
  width: 20px;
  height: 20px;
}
.form__privacy-ico {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  margin: 1px 10px 0 0;
  border: 1px solid #cfd1df;
  border-radius: 4px;
  overflow: hidden;
}
.form__privacy-ico:after {
  display: block;
  opacity: 0;
  transition: 0.2s;
  content: url("https://synergy.ru/assets/template/v5/images/form/checked.svg");
}
.form__privacy-checkbox:checked ~ .form__privacy-ico {
  border-color: transparent;
  background-color: var(--primary);
}
.form__privacy-checkbox:checked ~ .form__privacy-ico:after {
  opacity: 1;
}

.form__privacy-text {
  font-size: 10px;
  line-height: 1.4;
  color: inherit;
}
.form__privacy-text a {
  text-decoration: underline;
  color: inherit;
}

@media (min-width: 768px) {
  .form-wrapper {
    padding: 36px 22px 50px;
  }
  .form__title {
    margin: 0 0 24px;
  }
  .form__inner {
    grid-template-columns: repeat(4, 1fr);
  }
  .form_vertical .form__inner {
    grid-template-columns: 1fr 1fr 162px;
    padding-right: 0;
  }
  .form_vertical .form__inner {
    display: flex;
    flex-direction: column;
  }
  .form__input {
    padding: 16px 18px;
    font-size: 18px;
    line-height: 1.2;
  }
  .form__button {
    max-width: 250px;
    height: 56px;
    font-size: 18px;
  }

  .form__privacy {
    grid-column: 1 / 4;
    margin: 0;
  }
  .form__privacy-text {
    font-size: 12px;
  }
}

@media (min-width: 992px) {
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .form__title {
    flex: 1;
    margin: 0 0 20px;
    padding-right: 20px;
    line-height: 1.25;
  }
}

@media (min-width: 1200px) {
  .form-wrapper {
    padding: 36px 35px 50px;
  }
  .form__inner {
    grid-template-columns: repeat(4, 1fr);
    flex: 4;
  }
}

@media (min-width: 576px) {
  .catalog {
    background: url("/assets/template/v5/images/catalog/catalog.png") no-repeat
      right bottom;
    background-size: auto 180px;
  }
  .catalog_en {
    background-image: url("/assets/template/v5/images/abiturientam/catalog_en.svg");
  }
  .catalog__form {
    max-width: 330px;
  }
}

@media (min-width: 768px) {
  .catalog {
    padding: 58px 0 90px;
    background-size: auto 300px;
  }
  .catalog__title {
    font-size: 36px;
  }
  .catalog__description {
    max-width: 460px;
    margin: 0 0 38px;
    font-size: 18px;
    line-height: 1.5;
  }

  .catalog__form .form__fileds {
    margin: 0 0 6px;
  }
  .catalog__form .form__filed {
    margin: 0 0 20px;
  }
  .catalog__form .form__privacy {
    margin: 24px 0 0;
  }
}

@media (min-width: 992px) {
  .catalog {
    padding: 94px 0 106px;
    background-size: auto 300px;
  }
  .catalog__title {
    margin: 0 0 26px;
    font-size: 48px;
  }
  .catalog__description,
  .catalog__form {
    max-width: 58%;
  }
  .catalog__description {
    margin: 0 0 40px;
  }
  .catalog__form {
    display: block;
  }
  .catalog__form .form__fileds {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 0 0 10px;
  }
  .catalog__form .form__bottom {
    display: flex;
    align-items: flex-end;
  }
  .catalog__form .form__button {
    margin: 0 32px 0 0;
  }
}

@media (min-width: 1200px) {
  .catalog {
    padding: 75px 0 106px;
    background-size: auto 360px;
  }
}
</style>
