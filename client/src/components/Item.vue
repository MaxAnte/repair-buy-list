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
    <div class="item-delete" @click="deleteItem(item.name)">
      <DeleteIcon width="20px" height="20px" />
    </div>
  </li>
</template>

<script>
import DeleteIcon from "../UI/DeleteIcon";
export default {
  components: {
    DeleteIcon,
  },
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
      this.squares = Math.ceil((this.item.width * this.item.length) / 10000);
    },
    async deleteItem(name) {
      try {
        await fetch(
          `/api/delete-${this.type === "parameters" ? "param" : "item"}`,
          {
            method: "POST",
            body: JSON.stringify({ name }),
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
      } catch (e) {
        console.error("Error on fetch from component:", e.message);
      }
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
  grid-template-columns: 0.1fr 1fr 0.2fr 0.1fr 0.1fr;
  font-size: 18px;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
.params-list-item {
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.2fr 0.2fr 0.1fr 0.1fr;
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
.item-delete {
  cursor: pointer;
}
</style>
