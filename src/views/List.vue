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
      items: [
        { name: "Paint", quantity: "2", price: 1200 },
        { name: "Sand", quantity: "1", price: 400 },
        { name: "Light", quantity: "5", price: 1000 },
        { name: "Table", quantity: "3", price: 4000 },
      ],
    };
  },
  methods: {
    createItem(item) {
      this.items.push(item);
    },
  },
};
</script>

<style></style>
