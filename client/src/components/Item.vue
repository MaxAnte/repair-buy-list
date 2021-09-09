<template>
  <li :class="type === 'rooms' ? 'rooms-list-item' : 'list-item'">
    <div class="item-id">{{ index + 1 }}.</div>
    <div class="item-name">
      <div class="item-tags">
        <span
          class="item-tag"
          v-if="type === 'materials'"
          v-for="tag in item.tags"
        >
          {{ tag }}
        </span>
      </div>
      {{ item.name }}
    </div>
    <div class="item-quantity" v-if="type === 'materials'">
      {{ item.quantity }}
    </div>
    <div class="item-length" v-else>{{ item.length / 100 }}{{ $t("m") }}</div>
    <div class="item-price" v-if="type === 'materials'">
      {{ item.price }}
      <span class="item-price__sum" v-if="item.quantity > 1">{{
        item.price * item.quantity
      }}</span>
    </div>
    <div class="item-width" v-else>{{ item.width / 100 }}{{ $t("m") }}</div>
    <div class="item-squares" v-if="type === 'rooms'">
      {{ squares }}
    </div>
    <div class="item-delete" @click="deleteItem(item.name)">
      <DeleteIcon width="20px" height="20px" />
    </div>
  </li>
</template>

<script>
import DeleteIcon from "../UI/DeleteIcon";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });
    return { t };
  },
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
        await fetch(`/api/delete-${this.type === "rooms" ? "room" : "item"}`, {
          method: "POST",
          body: JSON.stringify({ name }),
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
      } catch (e) {
        console.error("Error on fetch from component:", e.message);
      }
      this.$store.dispatch("getItems");
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
  align-items: center;
  font-size: 18px;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
.rooms-list-item {
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.2fr 0.2fr 0.1fr 0.1fr;
  grid-gap: 2px;
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
  display: flex;
  align-items: center;
}
.item-delete {
  cursor: pointer;
}
.item-tags {
  display: flex;
  align-items: center;
  margin-right: 5px;
}
.item-tag {
  font-size: 10px;
  padding: 3px 5px;
  border-radius: 5px;
  background-color: #0cc10c;
  margin-right: 2px;
  color: #fff;
}
.item-price {
  position: relative;
  cursor: pointer;
}
.item-price:hover > .item-price__sum {
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.3s ease;
}
.item-price__sum {
  padding: 3px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  opacity: 0;
  transform: translateY(15px);
  box-shadow: 0px 0px 20px 10px rgb(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
@media (max-width: 500px) {
  .list-item {
    font-size: 16px !important;
    grid-template-columns: 0.1fr 1fr 0.3fr 0.3fr 0.1fr !important;
  }
  .rooms-list-item {
    font-size: 16px !important;
    grid-template-columns: 0.1fr 1fr 0.3fr 0.3fr 0.3fr 0.1fr !important;
  }
  .item-delete svg {
    width: 16px;
    height: 16px;
  }
  .item-tags {
    flex-direction: column;
    margin: 0px 5px;
    width: 100%;
    max-width: 80px;
  }
  .item-tag {
    width: 100%;
    margin: 1px 0px;
    text-align: center;
  }
}
</style>
