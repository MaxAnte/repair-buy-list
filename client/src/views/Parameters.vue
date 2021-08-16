<template>
  <ItemsList :items="params" type="parameters" />
</template>

<script>
import ItemsList from "../components/ItemsList";
export default {
  components: {
    ItemsList,
  },
  computed: {
    params() {
      return this.$store.getters.sortedParams;
    },
  },
  mounted() {
    this.$store.dispatch("getParams");
  },
};
</script>

<style></style>
