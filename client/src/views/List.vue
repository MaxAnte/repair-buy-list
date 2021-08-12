<template>
  <ItemsList :items="items" type="pricing" @create="createItem" />
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
    createItem(item) {
      this.items.push(item);
    },
    async getItems() {
      try {
        const response = await fetch("/api/items", {
          method: "POST",
          body: null,
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        console.log(response);
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
