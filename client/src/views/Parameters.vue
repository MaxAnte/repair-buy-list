<template>
  <ItemsList :items="items" type="parameters" />
</template>

<script>
import ItemsList from "../components/ItemsList";
export default {
  components: {
    ItemsList,
  },
  data() {
    return {
      items: [{ name: "Room", length: 0, width: 0 }],
    };
  },
  methods: {
    async getParams() {
      try {
        const response = await fetch("/api/params");
        const data = await response.json();
        this.items = Object.values(data);
      } catch (e) {
        console.error("Error on fetch from component:", e.message);
      }
    },
  },
  beforeMount() {
    this.getParams();
  },
};
</script>

<style></style>
