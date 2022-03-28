<template>
  <div class="dod">
    <div class="container">
      <h2 class="dod__title">
        Посети день открытых дверей очно или&nbsp;онлайн
      </h2>
      <p class="dod__description">
        Подробно рассмотрим важные для&nbsp;абитуриентов темы:
      </p>
      <div class="dod__items">
        <div class="dod__item">
          <span class="dod__item-title">Обучение</span
          ><span class="dod__item-description"
            >Презентации образовательных программ и&nbsp;знакомство
            с&nbsp;ведущими преподавателями</span
          >
        </div>
        <div class="dod__item">
          <span class="dod__item-title">Правила приема</span
          ><span class="dod__item-description"
            >Документы, необходимые для&nbsp;поступления, стоимость обучения,
            специальные условия и&nbsp;льготы</span
          >
        </div>
        <div class="dod__item">
          <span class="dod__item-title">Студенческая жизнь</span
          ><span class="dod__item-description">
            в&nbsp;общежитии, яркие мероприятия и&nbsp;волонтерские
            программы</span
          >
        </div>
      </div>
      <div class="form-wrapper form-wrapper_bg-gray">
        <form
          action="https://synergy.ru/lander/alm/lander.php?r=land/index&amp;land=synergy.ru&amp;grcampaign=e_mail_chain_vpo&amp;unit=synergy&amp;type=univer&amp;version=index&amp;form=dod&amp;graccount=synergy"
          method="post"
          class="form form_"
          novalidate="novalidate"
        >
          <div class="form__title">Запишись на день открытых дверей</div>
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
                Отправить заявку
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
                >.
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
.dod {
  padding: 20px 0;
}

.dod__description {
  margin: 16px 0 30px;
}

.dod__items {
  margin: 0 0 20px;
}

.dod__item {
  margin: 25px 0 0;
}
.dod__item-title {
  display: flex;
  align-items: center;
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--red);
}
.dod__item-title:before {
  width: 10px;
  height: 20px;
  margin: 0 10px 0 0;
  background: url("/assets/template/v5/images/_ico/runa_red.svg") no-repeat 0 0;
  background-size: contain;
  content: "";
}

.dod__item-description {
  display: block;
  font-size: 14px;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .dod {
    padding: 64px 0 56px;
  }

  .dod__description {
    font-size: 18px;
  }

  .dod__items {
    margin: 0 0 28px;
  }

  .dod__item {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    padding: 24px 0 38px;
    border-top: 1px solid #dcdcdc;
  }
  .dod__item:first-child {
    border: none;
  }
  .dod__item-title {
    font-size: 24px;
  }
  .dod__item-title:before {
    width: 18px;
    height: 36px;
    margin: 0 15px 0 0;
  }
  .dod__item-description {
    font-size: 18px;
    line-height: 1.4;
  }
}

@media (min-width: 992px) {
  .dod__items {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  .dod__item {
    display: block;
    padding: 0;
    border: none;
  }
}

@media (min-width: 1200px) {
  .dod {
    padding: 80px 0 56px;
  }
  .dod__description {
    margin: 28px 0 40px;
  }
  .dod__title {
    max-width: 70%;
  }
  .dod__items {
    margin: 0 0 50px;
  }
  .dod__item-title {
    margin: 0 0 9px;
    font-size: 32px;
  }
  .dod__item-description {
    line-height: 1.35;
  }
}
</style>
