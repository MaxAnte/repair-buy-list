<template>
  <li class="list-item">
    <div class="item-id">{{ item.id }}.</div>
    <div class="item-name">{{ item.name }}</div>
    <div class="item-quantity">{{ item.quantity }}</div>
    <div class="item-price">{{ item.price }}</div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-item {
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.3fr 0.3fr;
  font-size: 18px;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
.list-item:first-child {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.list-item:hover {
  background: rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
.item-name {
  text-align: left;
}
</style>
