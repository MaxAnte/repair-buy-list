<template>
  <div class="edit-item-popup">
    <span class="close" @click="this.$emit('closeEditPopup', false)">
      <CloseIcon width="12px" height="12px" />
    </span>
    <h5>{{ $t("edit") }} {{ $t("material") }}</h5>
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
      <input
        type="text"
        id="tags"
        :placeholder="$t('categories')"
        v-if="type === 'materials'"
        v-model="item.tags"
      />
      <button type="submit" class="btn" @click="editItem">
        {{ $t("save") }}
      </button>
    </form>
  </div>
  <div class="popup-bg" @click="this.$emit('closeEditPopup', false)"></div>
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
    itemInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      item: { ...this.itemInfo, tags: this.itemInfo.tags.join(", ") },
    };
  },
  methods: {
    async editItem() {
      try {
        const body =
          this.type === "rooms"
            ? {
                _id: this.item._id,
                name: this.item.name,
                width: this.item.width,
                length: this.item.length,
              }
            : {
                _id: this.item._id,
                name: this.item.name,
                quantity: this.item.quantity,
                price: this.item.price,
                tags: this.item.tags.split(",").map((el) => el.trim()),
              };
        await fetch(`/api/edit-${this.type === "rooms" ? "room" : "item"}`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
      } catch (e) {
        console.error("Error on fetch, message:", e.message);
      }

      this.$emit("closeEditPopup", false);
      this.$store.dispatch("getItems");
    },
  },
};
</script>

<style scoped>
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
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
.edit-item-popup {
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
.edit-item-popup h5 {
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  display: inline-block;
  padding: 3px 10px;
  margin-bottom: 15px;
}
.edit-item-popup form {
  display: flex;
  flex-direction: column;
}
.edit-item-popup form input {
  margin-bottom: 15px;
  font-size: 18px;
}
</style>
