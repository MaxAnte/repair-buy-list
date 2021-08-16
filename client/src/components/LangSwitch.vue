<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
        lang
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return { langs: ["ru", "en"] };
  },
};
</script>

<style>
.locale-changer {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
select {
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px;
}
</style>
