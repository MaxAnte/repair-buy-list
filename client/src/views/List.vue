<template>
  <ItemsList :items="items" type="pricing" />
</template>

<script>
import ItemsList from "../components/ItemsList";
export default {
  components: {
    ItemsList,
  },
  data() {
    return {
      items: [{ name: "", quantity: 0, price: 0 }],
    };
  },
  methods: {
    async getItems() {
      try {
        const response = await fetch("/api/items");
        const data = await response.json();
        this.items = Object.values(data);
      } catch (e) {
        console.error("Error on fetch from component:", e.message);
      }
    },
  },
  beforeMount() {
    this.getItems();
  },
};
</script>

<style></style>
