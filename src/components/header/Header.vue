<template>
    <HeaderTop />
    <MainNav />
    <MainNavLevels />
    <NavCollapsed />
</template>

<script>
import HeaderTop from "./HeaderTop.vue";
import MainNav from "./MainNav.vue";
import MainNavLevels from "./MainNavLevels.vue";
import NavCollapsed from "./NavCollapsed.vue";
export default {
  components: { HeaderTop, MainNav, MainNavLevels, NavCollapsed },
};
</script>

<style>
.header-wrapper {
  width: 100%;
  max-width: 1920px;
  max-width: var(--wrap-width);
  margin: 0 auto;
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
}

/*******************x
 topnav
*******************/
.topnav {
  display: none;
  padding: 8px 0;
  background: var(--gray);
  font-size: 12px;
}

.topnav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topnav__inner:before,
.topnav__inner:after {
  content: none;
}

.topnav__sveden {
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
  text-decoration: underline;
  color: #61656e;
  /*color: #A5A8B8;*/
  transition: 0.2s;
}
.topnav__sveden:hover {
  text-decoration: none;
}

/*******************
 header
*******************/
.header {
  position: sticky;
  top: 0;
  z-index: 6001;
  padding: 8px 0;
  border-bottom: 1px solid var(--gray);
  background: #fff;
}

.header__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  display: inline-block;
  width: 28px;
  height: 28px;
}
.header__logo img {
  width: auto;
  height: 100%;
}
.header__logo_desc {
  display: none;
}

.header__apply {
  display: flex;
  /* display: none; */
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 8px 15px;
  border: 1px solid;
  border-radius: 4px;
  background: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: var(--red);
  transition: 0.2s;
}
.header__apply:hover {
  border-color: var(--red);
  background: var(--red);
  color: #fff;
}
.header__apply:active {
  border-color: inherit;
}

.header__phones {
  display: none;
}

.header__burger {
  border: none;
  background: none;
  font-size: 0;
  line-height: 1;
  transition: 0.2s;
}
.header__burger-ico {
  display: block;
  width: 30px;
  height: 30px;
  background: url("https://synergy.ru/assets/template/v5/images/_ico/burger_blue.svg") no-repeat
    center;
}
.menu-visible .header__burger-ico {
  background-image: url("https://synergy.ru/assets/template/v5/images/_ico/close_white_small.svg");
}

/*******************
 mainnav
*******************/
.mainnav {
  display: none;
  overflow: hidden;
}

.mainnav-levels {
  position: relative;
  z-index: 2;
  background: #fff;
  overflow: hidden;
}

.nav-levels {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding: 10px 0 0;
}

.nav-levels .nav-levels.owl-loaded {
  position: relative;
  display: block;
  width: 100%;
}

.nav-levels.owl-carousel .owl-stage {
  display: flex;
}
.nav-levels.owl-carousel .owl-stage-outer {
  overflow: visible;
}

.nav-levels a,
.nav-levels span {
  flex: none;
  display: block;
  max-height: unset;
  margin: 0 18px 0 0;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  color: var(--primary);
  white-space: nowrap;
  transition: 0.2s;
}
.nav-levels a:hover,
.nav-levels span {
  color: var(--red);
}

/*******************
 collapsed
*******************/
.menu-visible .wrapper {
  display: none;
}

.nav-collapsed {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 6000;
  max-height: 0;
  background: #fff;
  overflow: hidden;
  opacity: 0;
}
.menu-visible .nav-collapsed {
  max-height: fit-content;
  max-height: -moz-fit-content;
  padding: 0 0 30px;
  opacity: 1;
}

.nav-collapsed__inner {
  padding: 8px 0 0;
}

/* levels */
.nav-collapsed__levels {
  padding: 22px 0;
  background: var(--gray);
}

.nav-collapsed__levels-inner {
  display: grid;
  grid-gap: 18px;
  grid-template-columns: repeat(2, 1fr);
}

.nav-collapsed__levels a {
  width: fit-content;
  width: -moz-fit-content;
  max-height: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--primary);
  text-decoration: none;
  transition: 0.2s;
}
.nav-collapsed__levels a:hover {
  color: var(--red);
}

.nav-collapsed__sveden {
  display: inline-block;
  margin: 18px 0 0;
  font-size: 12px;
  font-style: italic;
  font-weight: 600;
  text-decoration: underline;
  color: #2f2f2f;
}
.nav-collapsed__sveden:hover {
  text-decoration: none;
}

@media (min-width: 576px) {
  .nav-collapsed__levels .nav-levels {
    grid-template-columns: repeat(3, 1fr);
  }
}

/*******************
 collapsed > sections
*******************/
.nav-sections__section {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid var(--gray);
}
.nav-sections__section_active {
  padding-bottom: 2px;
  border-bottom: 0;
}

.nav-sections__mainlink {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.15;
  text-decoration: none;
  color: var(--primary);
  transition: 0.2s;
}
.nav-sections__mainlink:hover,
.nav-sections__mainlink.active {
  color: var(--red);
}

.nav-sections__link {
  display: inline-block;
  max-height: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.15;
  text-decoration: none;
  color: #666a87;
  transition: 0.2s;
  overflow: hidden;
}
.nav-sections__link:hover,
.nav-sections__link.active {
  color: var(--red);
}
.nav-sections__section_active .nav-sections__link {
  max-height: 5em;
  margin: 16px 0 0;
}

.nav-sections__link_sitemap {
  display: none;
}

.nav-sections__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-sections__toggle {
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-left: 30px;
  margin-right: 6px;
  padding: 0;
  border: none;
  background: none;
  font-size: 0;
}
.nav-sections__toggle span {
  position: relative;
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #e8edf9;
  color: var(--primary);
  transition: 0.2s;
  font-size: 0;
}
.nav-sections__toggle:hover span {
  background: #666a87;
  color: #fff;
}
.nav-sections__toggle span:after {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
  width: 8px;
  height: 8px;
  margin: auto;
  border-left: 2px solid;
  border-bottom: 2px solid;
  transform: rotate(-45deg);
  content: "";
}
.nav-sections__section_active .nav-sections__toggle span:after {
  transform: rotate(135deg);
}

/*******************
 collapsed > contacts
*******************/
.nav-contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0 32px;
  padding: 26px 16px;
  border-radius: 4px;
  background-color: #e8edf9;
  color: var(--primary);
}
.nav-collapsed .nav-contacts {
  display: none;
}

.nav-contacts__section {
  display: block;
}

.nav-contacts__title {
  display: block;
  margin: 0 0 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  color: rgba(24, 25, 64, 0.5);
}

/* address */
.nav-contacts__metro {
  display: block;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
}
.nav-contacts__metro:before {
  margin-right: 8px;
  content: url("https://synergy.ru/assets/template/v5/images/_ico/metro_red.svg");
}

.nav-contacts__address {
  display: block;
  margin: 8px 0 12px;
  font-size: 14px;
  line-height: 1.2;
}

/* schedule */
.nav-contacts__section_schedule {
  margin: 26px 0 16px;
}
.nav-contacts__schedule {
  display: block;
  margin: 0 0 8px;
  font-size: 16px;
  line-height: 1.2;
}
.nav-contacts__schedule i {
  display: inline-block;
  min-width: 50px;
  padding-right: 8px;
  font-style: normal;
  white-space: nowrap;
}
.nav-contacts__schedule b {
  font-weight: 600;
}

/* students */
.nav-contacts__section_students {
  order: 2;
  margin-top: 4px;
}

/* feedback */
.nav-contacts__section_phones {
  order: 1;
}
.nav-contacts__section_phones a:last-child:after {
  height: 27px;
  width: 27px;
  margin-left: 8px;
  content: url("https://synergy.ru/assets/template/v5/images/template/24-7.svg");
}

.nav-contacts__phone {
  display: flex;
  flex-direction: column;
}
.nav-contacts__phone a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 22px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  color: var(--primary);
}
.nav-contacts__phone a:before {
  height: 15px;
  margin: 0 9px 0 0;
  opacity: 0.5;
  transition: 0.2s;
  content: '';
}
.nav-contacts__phone a:hover:before {
  opacity: 1;
}

.nav-contacts__section_feedback {
  order: 2;
}
.nav-contacts__feedback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: 1px solid rgba(24, 25, 64, 0.5);
  background: none;
  font-size: 16px;
  font-weight: 700;
  color: var(--primary);
  transition: 0.2s;
}
.nav-contacts__feedback:hover {
  border-color: var(--red);
  background: var(--red);
  color: #fff;
}

/*******************
 collapsed > tools
*******************/

.nav-collapsed .nav-socials {
  display: flex;
}

#nav-collapsed .nav-students {
  display: none;
}

.nav-tools {
  margin: 24px 0 0;
}

.nav-tool {
  margin: 0 0 16px;
}

.nav-tool__title {
  display: block;
  margin: 0 0 16px;
  font-size: 12px;
  line-height: 1.25;
  color: #666a87;
}

.nav-tool__content {
  display: flex;
  flex-wrap: wrap;
}

.nav-tool__logo {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: left;
}

/* social */
.nav-social__link {
  display: block;
  width: 36px;
  height: 36px;
  margin-left: 12px;
  background: url("https://synergy.ru/assets/template/v5/images/social/round-grey-vk.svg")
    no-repeat center;
  background-size: contain;
  font-size: 0;
}
.nav-social__link:first-child {
  margin: 0;
}
.nav-social__link:hover {
  opacity: 0.7;
}
.nav-social__link_vk {
  background-image: url("https://synergy.ru/assets/template/v5/images/social/round-grey-vk.svg");
}
.nav-social__link_facebook {
  background-image: url("https://synergy.ru/assets/template/v5/images/social/round-grey-fb.svg");
}
.nav-social__link_instagram {
  background-image: url("https://synergy.ru/assets/template/v5/images/social/round-grey-inst.svg");
}
.nav-social__link_youtube {
  background-image: url("https://synergy.ru/assets/template/v5/images/social/round-grey-yt.svg");
}
.nav-social__link_telegram {
  background-image: url("https://synergy.ru/assets/template/v5/images/social/round-grey-telegram.svg");
}

/* app */
.nav-app a {
  margin-left: 16px;
  transition: 0.2s;
}
.nav-app a:first-child {
  margin-left: 0;
}
.nav-app a:hover {
  opacity: 0.8;
}
.nav-app img {
  width: 130px;
  height: auto;
}
/*******************
 topnav
*******************/
@media (min-width: 768px) {
	.topnav {
		display: block;
		padding: 6px 0;
	}
	.topnav__sveden {
		font-size: 12px;
	}
}



/*******************
 lang
*******************/
@media (min-width: 768px) {
	.header__lang {
		margin: 0 0 0 20px;
	}
	.nav-collapsed .header__lang { display: none }
}

/*******************
 header
*******************/
@media (min-width: 768px) {
	.header {
		padding: 16px 0;
	}

	/*******************
	 header > logo
	*******************/
	.header__logo {
		flex: 1;
		width: auto;
		height: 26px;
		margin: 0 auto 0 40px;
	}
	.header__logo_mob {
		display: none;
	}
	.header__logo_desc {
		display: block;
	}

	.header__apply {
		height: 42px;
		padding: 10px 24px;
		font-size: 16px;
	}


	/*******************
	 header > phones
	*******************/
	.header__phones {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		grid-gap: 0 20px;
	}
	.header__phones a {
		display: inline-flex;
		align-items: center;
		margin: 4px 0;
		font-size: 15px;
		font-weight: 700;
		line-height: 1;
		text-decoration: none;
		color: #181940;
		white-space: nowrap;
		transition: .2s;
	}
	.header__phones a:last-child:after {
		height: 27px;
		width: 27px;
    	margin-left: 8px;
		content: url('https://synergy.ru/assets/template/v5/images/template/24-7.svg');
	}
	.header__phones a:hover {
		color: #FE334A;
	}
	.header__phones a:before {
		margin: 0 12px 0 0;
		content: url('https://synergy.ru/assets/template/v5/images/_ico/phone_red.svg');
	}


	/*******************
	 header > burger
	*******************/
	.header__burger {
		order: -1;
	}

}


@media (min-width: 992px) {
	.header {
		padding: 18px 0;
	}

	.header__logo {
		flex: none;
		order: 0;
		margin: 0 25px 0 0;
	}
	.header__phones {
		flex: none;
		order: 20;
		grid-gap: 0;
		flex-direction: row;
		margin: 0;
	}
	.header__phones a {
		margin: 0 0 0 20px;
	}
	.header__apply {
		order: 30;
		margin: 0 0 0 20px;
	}


	/*******************
	 header > burger
	*******************/
	.header__burger {
		order: 10;
		display: flex;
		align-items: center;
		margin: 0 auto 0 0;
		padding: 10px 28px;
		border: 1px solid rgba(24, 25, 64, 0.33);
		border-radius: 4px;
		font-size: 12px;
		font-weight: 600;
		line-height: 1.2;
	}
	.header__burger:hover {
		border-color: rgba(24, 25, 64, 1);
	}
	.menu-visible .header__burger {
		border-color: #FE334A;
		background-color: #FE334A;
		color: #fff;
	}
	.menu-visible .header__burger:hover {
		border-color: inherit;
	}

	.header__burger-ico {
		flex: none;
		width: 16px;
		height: 10px;
		margin: 0 8px 0 0;
		background-size: contain;
	}
	.menu-visible .header__burger-ico {
		background-image: url('https://synergy.ru/assets/template/v5/images/_ico/close_white_small.svg');
	}
}


@media (min-width: 1200px) {
	.header__logo {
		margin: 0 35px 0 0;
	}

	.header__phones a {
		margin-left: 32px;
		font-size: 16px;
		letter-spacing: 0;
	}
	.header__phones a:last-child:after {
		margin-left: 14px;
	}
	.header__apply {
		margin: 0 0 0 30px;
	}
}





/*******************
 mainnav
*******************/
@media (min-width: 768px) {
	.mainnav {
		display: block;
	}

	.mainnav__menu {
		display: flex;
		align-items: center;
		padding: 0;
	}

	.mainnav__menu.owl-carousel .owl-stage {
		display: flex;
	}
	.mainnav__menu.owl-carousel .owl-stage-outer {
		overflow: visible;
	}

	.mainnav__menu-link {
		display: inline-block;
		margin: 0 38px 0 0;
		padding: 20px 0;
		font-size: 20px;
		font-weight: 700;
		line-height: 1;
		text-decoration: none;
		white-space: nowrap;
		color: #181940;
		transition: .2s;
	}
	.mainnav__menu-link:hover,
	.mainnav__menu-link_active {
		color: #FE334A;
	}
	.mainnav__menu-link_active {
		position: relative;
	}
	.mainnav__menu-link_active:after {
		position: absolute;
		top: auto;
		bottom: 0;
		left: 0;
		right: 0;
		height: 3px;
		background-color: var(--red);
		content: '';
	}


	/*******************
	 mainnav > levels
	*******************/
	.mainnav-levels {
		border-top: 1px solid #F3F6FD;
		border-bottom: 1px solid #F3F6FD;
	}
	.nav-levels {
		padding: 0;
	}
	.nav-levels a,
	.nav-levels span {
		display: block;
		padding: 18px 0;
		margin: 0 36px 0 0;
		font-size: 18px;
		line-height: 1.3;
	}
	.nav-levels .nav-levels__sm {
		display: none;
	}



	/*******************
	 mainnav > search
	*******************/
	.nav-search {
		position: relative;
    	align-self: stretch;
		display: flex;
    	align-items: center;
		margin-left: auto;
	}

	.nav-search__form {
		margin: 0;
		line-height: 1;
	}

	.nav-search__input {
		position: absolute;
    	right: 0px;
    	top: 50%;
		width: 0;
		height: 42px;
		margin-top: -21px;
		border: 1px solid transparent;
		border-radius: 4px;
		font-size: 16px;
		outline: none;
		transition: .2s;
	}
	.nav-search:hover .nav-search__input,
	.nav-search__input:focus {
		width: 200px;
		padding: 8px 34px 8px 8px;
		border-color: #181940;
		background: #fff;
		opacity: 1;
	}

	.nav-search__submit {
		position: relative;
		right: 0;
		display: block;
		width: 26px;
		height: 24px;
		border: none;
		background: url('https://synergy.ru/assets/template/v5/images/_ico/search_dark.svg') no-repeat center;
		outline: none;
		transition: .2s;
	}
	.nav-search:hover .nav-search__submit,
	.nav-search__input:focus ~ .nav-search__submit {
		right: 8px;
	}
	.nav-search__input:focus ~ .nav-search__submit:hover {
		background-image: url('https://synergy.ru/assets/template/v5/images/_ico/search_red.svg');
	}
}


@media (min-width: 1200px) {
	.mainnav__menu-link {
		margin: 0 48px 0 0;
	    padding: 22px 0;
	    font-size: 22px;
	    font-weight: 600;
	}
	.mainnav-levels {
		margin: 0;
	}

	.nav-levels a,
	.nav-levels span {
		padding: 22px 0;
	}
}




/*******************
 collapsed
*******************/
@media (min-width: 768px) {
	.nav-collapsed {
		background: #F3F6FD;
	}
	.menu-visible .nav-collapsed {
		padding: 48px 0;
	}

	.nav-collapsed__levels {
		display: none;
	}

	.nav-collapsed__sveden {
		display: none;
	}
}


@media (min-width: 992px) {
	.nav-collapsed {
		transition: .1s;
	}
	.nav-collapsed__inner {
		display: grid;
		grid-gap: 38px;
    	grid-template-columns: repeat(3, 1fr);
    	align-items: flex-start;
    	margin: 0;
	}
}


@media (min-width: 1200px) {
	.menu-visible .nav-collapsed {
		padding: 32px 0;
	}
}



/*******************
 collapsed > sections
*******************/
@media (min-width: 768px) {
	.nav-sections {
		display: grid;
		grid-gap: 20px;
    	grid-template-columns: repeat(3, 1fr);
	}

	.nav-sections__col {
		display: flex;
		flex-direction: column;
	}
	.nav-sections__col_has-about .nav-sections__section:last-child {
		order: -1;
	}

	.nav-sections__section {
		align-items: flex-start;
		margin: 0 0 20px;
		padding: 0;
		border: none;
	}

	.nav-sections__top {
		margin: 0 0 18px;
	}

	.nav-sections__toggle {
		display: none;
	}


	.nav-sections__link {
		max-height: 100%;
		margin: 0 0 16px;
		font-size: 16px;
		line-height: 1.2;
	}
	.nav-sections__link_sitemap {
		display: inline-block;
		text-decoration: underline;
		opacity: .85;
		color: var(--primary);
	}
	.nav-sections__link_sitemap:hover {
		text-decoration: none;
		opacity: 1;
	}

	.nav-sections__mainlink {
		font-size: 12px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.nav-sections__section.replaced-faculties {
		flex-wrap: wrap;
		flex-direction: row;
		margin: 0 0 18px;
	}
	.nav-sections__section.replaced-faculties .nav-sections__top {
		width: 100%;
	}
	.nav-sections__section.replaced-faculties .nav-sections__link {
		padding: 6px 8px;
		margin-right: 8px;
		margin-bottom: 10px;
		border-radius: 4px;
		background: #E8EDF9;
		font-size: 16px;
		line-height: 1.2;
		color: #666A87;
	}
	.nav-sections__section.replaced-faculties .nav-sections__link:hover,
	.nav-sections__section.replaced-faculties .nav-sections__link.active {
		background: var(--red);
		color: #fff;
	}
}


@media (min-width: 992px) {
	.nav-sections {
		grid-column: span 2;
	}

	.nav-sections__section {
		margin: 0 0 24px;
	}

	.nav-sections__link {
		margin: 0 0 14px;
	}

	.nav-sections__section.replaced-faculties {
		margin: 0 0 16px;
	}

	.nav-sections__section.replaced-faculties .nav-sections__link {
		margin-bottom: 14px;
	}
}



/*******************
 collapsed > contacts
*******************/
@media (min-width: 768px) {
	.nav-contacts,
	.nav-collapsed .nav-contacts {
		display: grid;
	    grid-template-columns: 1fr 1fr;
	    grid-gap: 0 40px;
	    margin: 0 -16px;
	    padding: 34px 16px;
	}


	/* address */
	.nav-contacts__address {
		font-size: 16px;
	}

	/* schedule */
	.nav-contacts__section_schedule {
		margin: 0;
	}

	/* phones */
	.nav-contacts__section_phones {
		margin: -20px 0 0;
	}
	.nav-contacts__phone {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		grid-gap: 16px 0;
	}
	.nav-contacts__phone a {
		margin: 0;
	}

	.nav-collapsed .nav-contacts__section_phones {
		display: none;
	}

	/* students */
	.nav-contacts__section_students {
		order: initial;
		margin-top: 25px;
	}

	/* feedback */
	.nav-contacts__section_feedback {
		grid-column: 2;
		margin-top: -18px;
	}
	.nav-contacts__feedback {
		margin: 0;
	}

}


@media (min-width: 992px) {
	.nav-contacts,
	.nav-collapsed .nav-contacts {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 0 24px;
	}

	.nav-contacts__metro {
		margin: 20px 0 8px;
	}

	.nav-contacts__address {
		margin: 8px 0 20px;
	}

	.nav-collapsed .nav-contacts__section_students {
		display: none;
	}

	.nav-contacts__section_schedule {
		margin: 12px 0 0;
	}

	.nav-contacts__section_feedback {
		margin: 24px 0 0;
	}
}



/*******************
 collapsed > tools
*******************/
@media (min-width: 768px) {
	.nav-tools {
		display: flex;
	    justify-content: space-between;
		margin: 12px 0 0;
	}

	.nav-tool {
		margin: 0;
	}

	.nav-tool__title {
		margin: 0 0 10px;
		font-size: 14px;
	}

	/* app */
	.nav-app {
		justify-self: flex-end;
	}

	/* social */
	#nav-collapsed .nav-social {
		display: block;
	}

}


@media (min-width: 992px) {
	.nav-tools {
	    grid-template-columns: repeat(3, 1fr);
	}

	/* students */
	#nav-collapsed .nav-students {
		display: block;
	}

	.nav-students a {
		display: flex;
		align-items: center;
		margin-right: 8px;
		font-size: 16px;
		font-weight: bold;
		line-height: 1.4;
		text-decoration: none;
		color: #181940;
		transition: .2s;
	}
	.nav-students a:hover {
		color: #FE334A;
	}
	.nav-students a:before {
		height: 15px;
	    margin: 0 9px 0 0;
	    content: url("https://synergy.ru/assets/template/v5/images/_ico/phone_red.svg");
	}
}


@media (min-width: 1200px) {
	.nav-tools {
		display: flex;
	}

	.nav-tool {
		margin: 0;
	}

	.nav-tool__title {
		margin: 0 0 8px;
		font-weight: 600;
	}

	#nav-collapsed .nav-social {
		margin: 0;
	}
}
</style>
