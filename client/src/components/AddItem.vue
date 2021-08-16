<template>
  <div class="add-item">
    <button class="btn" @click="this.openForm = true">{{ $t("add") }}</button>
    <div class="add-item-popup" v-if="openForm">
      <span class="close" @click="this.openForm = false">
        <CloseIcon width="12px" height="12px" />
      </span>
      <h5>{{ $t("add") }} {{ $t("material") }}</h5>
      <form @submit.prevent>
        <input
          type="text"
          id="name"
          :placeholder="$t('name-of-material')"
          v-model="item.name"
        />
        <input
          type="number"
          id="price"
          :placeholder="$t('price-per-item')"
          v-if="type === 'materials'"
          v-model="item.price"
        />
        <input
          type="number"
          id="length"
          :placeholder="($t('length'), $t('cm'))"
          v-else
          v-model="item.length"
        />
        <input
          type="text"
          id="quantity"
          :placeholder="$t('quantity')"
          v-if="type === 'materials'"
          v-model="item.quantity"
        />
        <input
          type="number"
          id="width"
          :placeholder="($t('width'), $t('cm'))"
          v-else
          v-model="item.width"
        />
        <button type="submit" class="btn" @click="createItem">
          {{ $t("save") }}
        </button>
      </form>
    </div>
    <div class="popup-bg" v-if="openForm" @click="this.openForm = false"></div>
  </div>
</template>

<script>
import CloseIcon from "../UI/CloseIcon";
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
    CloseIcon,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      openForm: false,
      item: {
        name: "",
        quantity: "",
        price: "",
        width: "",
        height: "",
        length: "",
      },
    };
  },
  methods: {
    async createItem() {
      try {
        const body =
          this.type === "rooms"
            ? {
                name: this.item.name,
                width: this.item.width,
                length: this.item.length,
              }
            : {
                name: this.item.name,
                quantity: this.item.quantity,
                price: this.item.price,
              };
        await fetch(`/api/add-${this.type === "rooms" ? "room" : "item"}`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
      } catch (e) {
        console.error("Error on fetch from component:", e.message);
      }

      this.openForm = false;
      this.$store.dispatch("getItems");
      this.item = {
        name: "",
        quantity: "",
        price: "",
        width: "",
        height: "",
        length: "",
      };
    },
  },
};
</script>

<style scoped>
.add-item {
  margin-top: 15px;
}
.btn {
  background: #5f4b8bff;
  border: 2px solid #5f4b8bff;
  border-radius: 2px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn:hover {
  background: #fff;
  color: #5f4b8bff;
  transition: all 0.2s ease;
}
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
.add-item-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.05);
  z-index: 3;
}
.popup-bg {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.add-item-popup h5 {
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  display: inline-block;
  padding: 3px 10px;
  margin-bottom: 15px;
}
.add-item-popup form {
  display: flex;
  flex-direction: column;
}
.add-item-popup form input {
  margin-bottom: 15px;
  font-size: 18px;
}
</style>
