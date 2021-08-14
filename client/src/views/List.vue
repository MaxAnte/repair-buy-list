<template>
  <ItemsList :items="items" type="pricing" />
</template>

<script>
import ItemsList from "../components/ItemsList";
export default {
  components: {
    ItemsList,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  mounted() {
    this.$store.dispatch("getItems");
  },
};
</script>

<style></style>
