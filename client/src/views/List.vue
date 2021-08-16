<template>
  <ItemsList :items="items" type="materials" />
</template>

<script>
import ItemsList from "../components/ItemsList";
export default {
  components: {
    ItemsList,
  },
  computed: {
    items() {
      return this.$store.getters.sortedItems;
    },
  },
  mounted() {
    this.$store.dispatch("getItems");
  },
};
</script>

<style></style>
