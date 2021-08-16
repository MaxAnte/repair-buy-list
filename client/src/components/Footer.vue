<template>
  <footer>
    <p>© Max Zahorskyi, 2021</p>
    <LangSwitch />
  </footer>
</template>

<script>
import LangSwitch from "./LangSwitch";
export default {
  components: {
    LangSwitch,
  },
};
</script>

<style scoped>
footer {
  margin-top: auto;
  padding: 25px 0px;
}
</style>
