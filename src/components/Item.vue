<template>
  <li :class="type === 'parameters' ? 'params-list-item' : 'list-item'">
    <div class="item-id">{{ index + 1 }}.</div>
    <div class="item-name">{{ item.name }}</div>
    <div class="item-quantity" v-if="type === 'pricing'">
      {{ item.quantity }}
    </div>
    <div class="item-length" v-else>{{ item.length / 100 }}m</div>
    <div class="item-price" v-if="type === 'pricing'">{{ item.price }}</div>
    <div class="item-width" v-else>{{ item.width / 100 }}m</div>
    <div class="item-squares" v-if="type === 'parameters'">
      {{ squares }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      squares: "",
    };
  },
  methods: {
    countSquares() {
      this.squares = (this.item.width * this.item.length) / 10000;
    },
  },
  mounted() {
    this.countSquares();
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
.params-list-item {
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.4fr 0.4fr 0.4fr;
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
