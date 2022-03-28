<template>
  <Catalog />
  <Programs />
  <About />
  <Education />
  <Admission />
  <Dod />
</template>

<script>
import Catalog from '../components/catalog/Catalog.vue';
import Programs from "../components/programs/Programs.vue";
import About from "../components/about/About.vue";
import Education from "../components/education/Education.vue";
import Admission from "../components/admission/Admission.vue";
import Dod from "../components/dod/Dod.vue";
export default {
  name: 'Home',
  components: {
    Catalog,
    Programs,
    About,
    Education,
    Admission,
    Dod
  }
}
</script>
