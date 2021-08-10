<template>
  <ul class="items-list">
    <li class="list-head">
      <div class="head-id">#</div>
      <div class="head-name">Name</div>
      <div class="head-quantity">Quantity</div>
      <div class="head-price">Price</div>
    </li>
    <Item class="list-item" v-for="item in items" :item="item" />
    <AddItem />
  </ul>

  <Overall :items="items" />
</template>

<script>
import Item from "./Item";
import AddItem from "./AddItem";
import Overall from "./Overall";
export default {
  components: {
    Item,
    AddItem,
    Overall,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-head {
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.3fr 0.3fr;
  font-size: 14px;
  color: #7b7b7b;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
.head-name {
  text-align: left;
}
.items-list {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.05);
}
</style>
