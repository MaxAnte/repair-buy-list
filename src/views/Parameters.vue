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
      items: [
        { id: 1, name: "Room", length: 200, width: 200, height: 200 },
        { id: 2, name: "Room", length: 200, width: 200, height: 200 },
        { id: 3, name: "Room", length: 200, width: 200, height: 200 },
        { id: 4, name: "Room", length: 200, width: 200, height: 200 },
        { id: 5, name: "Room", length: 200, width: 200, height: 200 },
      ],
    };
  },
};
</script>

<style></style>
