<template>
  <div class="admission-campaign">
    <div class="container">
      <h2 class="admission-campaign__title">Приемная кампания 2022</h2>
      <p class="admission-campaign__description">
        Начни обучение, когда тебе удобно: поступить в&nbsp;Университет «МУИТ»
        можно в&nbsp;течение всего&nbsp;года
      </p>
      <div class="admission-campaign__items">
        <span class="admission-campaign__item">Бюджетные <br />места</span
        ><span class="admission-campaign__item"
          >Предоставление <br />общежития</span
        ><span class="admission-campaign__item"
          >Гранты <br />на&nbsp;обучение</span
        ><span class="admission-campaign__item"
          >Прием после <br />9&nbsp;и&nbsp;11&nbsp;классов</span
        ><span class="admission-campaign__item"
          >Перевод из&nbsp;других <br />вузов&nbsp;без потери курса</span
        ><span class="admission-campaign__item"
          >Прием иностранных <br />граждан</span
        >
      </div>
      <div class="form-wrapper form-wrapper_bg-gray">
        <form
          action="https://synergy.ru/lander/alm/lander.php?r=land/index&amp;land=synergy.ru&amp;grcampaign=e_mail_chain_vpo&amp;unit=synergy&amp;type=univer&amp;version=index&amp;form=admission-campaign&amp;graccount=synergy"
          method="post"
          class="form form_"
          novalidate="novalidate"
        >
          <div class="form__title">Поступи в университет</div>
          <div class="form__inner">
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
                placeholder="Электронная почта" /></span
            ><span class="form__filed form__filed_btn"
              ><button class="button form__button" type="submit">
                Отправить
              </button></span
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
                  href="//synergy.ru/lp/_chunk/privacy.php?lang=ru"
                  class="link link_underline fancybox-privacy-link"
                  >политикой конфиденциальности</a
                >
              </span></label
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.admission-campaign {
  padding: 45px 0 0;
  overflow: hidden;
}

.admission-campaign__description {
  margin: 18px 0 28px;
  font-size: 16px;
  line-height: 1.4;
}

.admission-campaign__items {
  margin: 0 0 28px;
  padding-right: 60px;
}
.admission-campaign__items.owl-carousel .owl-stage-outer {
  overflow: visible;
}
.admission-campaign__items.owl-carousel .owl-stage {
  display: flex;
}
.admission-campaign__items.owl-carousel .owl-item {
  flex: none;
}

.admission-campaign__item {
  display: block;
  margin: 0 25px 0 0;
  font-size: 14px;
  line-height: 1.5;
}
.admission-campaign__item:before {
  display: block;
  width: 10px;
  height: 20px;
  margin: 0 0 12px;
  background: url("/assets/template/v5/images/_ico/runa_red.svg") no-repeat 0 0;
  background-size: contain;
  content: "";
}

@media (min-width: 768px) {
  .admission-campaign {
    padding: 65px 0;
  }
  .admission-campaign__description {
    max-width: 70%;
    margin: 6px 0;
    font-size: 18px;
    line-height: 1.5;
  }
  .admission-campaign__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }
  .admission-campaign__item {
    display: inline-flex;
    align-items: center;
    padding: 32px 0 0;
    font-size: 18px;
  }
  .admission-campaign__item br {
    display: none;
  }
  .admission-campaign__item:before {
    flex: none;
    width: 18px;
    height: 36px;
    margin: 0 14px 0 0;
  }
}

@media (min-width: 992px) {
  .admission-campaign {
    padding: 80px 0;
  }
  .admission-campaign__description {
    max-width: 100%;
    margin: 27px 0;
  }
  .admission-campaign__items {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 0 58px;
  }
  .admission-campaign__item {
    padding: 40px 0 0;
    line-height: 1.15;
  }
}
</style>
