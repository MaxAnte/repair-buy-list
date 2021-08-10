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
      items: [
        { id: 1, name: "Paint", quantity: "2", price: 1200 },
        { id: 2, name: "Sand", quantity: "1", price: 400 },
        { id: 3, name: "Light", quantity: "5", price: 1000 },
        { id: 4, name: "Table", quantity: "3", price: 4000 },
      ],
    };
  },
};
</script>

<style></style>
