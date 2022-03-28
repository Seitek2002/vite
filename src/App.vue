<template>
  <Header />
  <!-- <router-view /> -->
  <h1>HIIII!!!</h1>
  <Footer />
</template>

<script>
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  setup() {
    
  },
};
</script>

<style>
:root {
  --wrap-width: 1920px;
  --btn-sm-width: 162px;
  --primary: #181940;
  --blue: #244cc8;
  --red: #fe334a;
  --gray: #f3f6fd;
  --link: #244cc8;
  --bs-gutter-x: 16px;
  --border-radius: 4px;
}
/*@import "redmond/jquery-ui-1.10.4.custom.min.css";*/

#mse2_sort a.active,
#mse2_tpl a.active {
  color: black;
  text-decoration: none;
  cursor: default;
}

#mse2_filters .disabled {
  color: #aaa;
}

#mse2_results {
  margin-bottom: 20px;
}

#mse2_filters .mse2_number_slider {
  font-size: 0.7em;
  margin-bottom: 10px;
}
#mse2_filters .mse2_number_inputs label {
  display: inline-block;
}
/*
#mse2_filters .mse2_number_inputs label:last-child {
	margin-left: 20px;
}
*/
#mse2_selected_wrapper {
  min-height: 2em;
  margin: 10px 0;
}
#mse2_selected {
  display: none;
  background: #f9f9f9;
  padding: 5px 0 5px 5px;
  border-radius: 3px;
}

#mse2_selected .mse2_selected_link em {
  color: #000;
}

.mSearchLog,
.mFilterLog {
  width: 100%;
  overflow: auto;
  word-wrap: normal;
  white-space: pre;
}

#mse2_sort .sort span {
  color: #000000;
}
#mse2_sort .sort[data-dir="asc"] span:after {
  content: "↑";
}
#mse2_sort .sort[data-dir="desc"] span:after {
  content: "↓";
}

.mse2-ac-wrapper {
  font-size: 12px;
  padding: 2px 5px;
}
.mse2-ac-link {
  padding: 0 !important;
  font-size: 12px;
  border: 1px solid transparent;
  border-bottom-color: #efefef;
}
.mse2-ac-wrapper:last-child .mse2-ac-link {
  border-color: transparent;
}
.mse2-ac-link.ui-state-focus {
  background-image: none !important;
  border-color: transparent !important;
  margin: 0 !important;
}

.mse2-ac-item {
  padding: 2px 5px;
}
.mse2-ac-item:hover {
  cursor: pointer;
}
.mse2-ac-item .mse2-ac-weight {
  display: inline-block;
  float: right;
}

.form-group .input-sm {
  width: 50%;
  display: inline-block;
}

body {
  min-height: 100vh;
  font: 400 16px/1.4 "ProximaNova", sans-serif;
  color: var(--primary);
}

/*******************
768
*******************/
@media (min-width: 768px) {
  body {
    font-size: 18px;
    line-height: 1.5;
  }
}

.wrapper {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  box-shadow: 0 7px 15px rgb(0 0 0 / 10%);
  background: #fff;
  overflow: hidden;
}

[hidden],
.hidden {
  display: none !important;
}

.lazy {
  background-image: none !important;
  opacity: 0;
}
.lazy:before,
.lazy:after {
  content: none !important;
}
.lazy-loaded {
  opacity: 1;
  transition: 0.1s;
}

a {
  text-decoration: none;
}
a:hover {
  color: var(--red);
}
.overflow-hidden {
  overflow: hidden;
}

/*******************
 bootstrap
 *******************/
@media (min-width: 1200px) {
  .container,
  .cnontaier-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1170px;
    margin: 0 auto;
  }
}

/*******************
 breadcrumb
 *******************/
.breadcrumb {
  margin: 2rem 0 2.5rem;
}

/*******************
768
*******************/
@media (min-width: 768px) {
  .breadcrumb {
    margin: 5rem 0 1rem;
  }
}

/*******************
992
*******************/
@media (min-width: 992px) {
  .breadcrumb {
    margin: 5rem 0 2rem;
  }
}

/*******************
buttons
*******************/
.btn,
.button {
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
.btn:disabled,
.button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.btn:hover,
.button:hover {
  opacity: 0.8;
}

@media (min-width: 768px) {
  .btn,
  .button {
    max-width: 250px;
    height: 56px;
    font-size: 18px;
  }
}

/*******************
ICON-WRAP
*******************/
.icon-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  margin: 0 0 24px;
  border-radius: 50%;
  background: var(--gray);
}

.icon-wrap__img {
  width: 100%;
  height: auto;
  max-width: 49%;
  max-height: 82%;
}

@media (min-width: 768px) {
  .icon-wrap {
    width: 64px;
    height: 64px;
    margin: 0 0 36px;
  }
}

@media (min-width: 1200px) {
  .icon-wrap {
    width: 72px;
    height: 72px;
  }
}

/*******************
block-more
*******************/
.block-more {
  text-align: center;
}

.block-more__btn {
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-width: 200px;
  height: 48px;
  margin: 0 auto;
  border: 1px solid #cfd1df;
  background: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: var(--primary);
  transition: 0.2s;
  cursor: pointer;
}
.block-more__btn:focus {
  outline: 0;
}
.block-more__btn:hover {
  color: #244cc8;
}
.block-more__btn:before {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 6px 0 0;
  background-image: url("/assets/template/v5/images/_ico/up-right-ico_blue.svg");
  background: url("/assets/template/v5/images/_ico/up-right-ico_black.svg")
    no-repeat center;
  content: "";
}
.block-more__btn:hover:before {
  background-image: url("/assets/template/v5/images/_ico/up-right-ico_blue.svg");
}

/*******************
fancybox
*******************/
.fancybox-content {
  padding: 0;
}

/*******************
 scroll-h
*******************/
.scroll-h {
  scrollbar-color: #ff0040 #f3f6fd;
  scrollbar-width: thin;
}

/* webkit скроллбар */
.scroll-h::-webkit-scrollbar {
  height: 4px;
  background-color: #f3f6fd;
}

/* ползунок скроллбара */
.scroll-h::-webkit-scrollbar-thumb {
  background-color: #ff0040;
  border-radius: 4px;
  box-shadow: none;
}

.scroll-h::-webkit-scrollbar-thumb:hover {
  background-color: #fe334a;
}

/* Стрелки */
.scroll-h::-webkit-scrollbar-button:horizontal:start:decrement,
.scroll-h::-webkit-scrollbar-button:horizontal:end:increment {
  display: none;
}

/*******************
 scroll-top
*******************/
@media screen and (max-width: 767px) {
  .scroll-top {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .scroll-top {
    background-color: #e8edf9;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 16px;
    line-height: 48px;
    width: 48px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease;
  }
  .scroll-top:hover {
    opacity: 0.7;
  }
  .scroll-top__show {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-top__arrow {
    border: solid var(--primary);
    border-width: 0 3px 3px 0;
    display: inline-block;
    margin-top: 5px;
    padding: 4px;
  }
  .scroll-top__up {
    transform: rotate(-135deg);
  }
}

/*******************
dev-grid
*******************/
.dev-grid {
  position: relative;
}
.dev-grid:after {
  content: "";
  opacity: 0.25;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAASBAMAAADbMYGVAAAAD1BMVEX+SBn+SBn/q5X/cU3////7dpXTAAAABXRSTlNGWUZKJg9ROHAAAAAZSURBVHgBY2QAAUEQ8R5EKIGIISOoNIQFAYpaFan+ujdTAAAAAElFTkSuQmCC");
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  display: block;
}
</style>
