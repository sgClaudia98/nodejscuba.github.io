<template>
  <cio-navbar></cio-navbar>
  <cio-content class="p-2">
    <router-view></router-view>
  </cio-content>
  <cio-footer></cio-footer>
</template>

<script>
import cioNavbar from "./elements/CioNavbar.vue";
import cioContent from "./elements/CioContent.vue";
import CioFooter from "./elements/CioFooter.vue";
export default {
  name: "Index",
  components: { cioNavbar, cioContent, CioFooter },
  props: {},
  data() {
    return {};
  },
  mounted() {},
  beforeUnmount() {},
  methods: {},
};
</script>

<style lang="css" scoped></style>
