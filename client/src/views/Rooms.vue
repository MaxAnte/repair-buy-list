<template>
  <ItemsList :items="rooms" type="rooms" />
</template>

<script>
import ItemsList from "../components/ItemsList";
export default {
  components: {
    ItemsList,
  },
  computed: {
    rooms() {
      return this.$store.getters.sortedRooms;
    },
  },
  mounted() {
    this.$store.dispatch("getRooms");
  },
};
</script>

<style></style>
