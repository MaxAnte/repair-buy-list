<template>
  <div class="add-item">
    <button class="btn" @click="this.openForm = true">Add</button>
    <div class="add-item-popup" v-if="openForm">
      <span class="close" @click="this.openForm = false">
        <CloseIcon width="12px" height="12px" />
      </span>
      <h5>Add Item</h5>
      <form @submit.prevent>
        <input
          type="text"
          id="name"
          placeholder="Name of item"
          v-model="item.name"
        />
        <input
          type="number"
          id="price"
          placeholder="Price per item"
          v-if="type === 'pricing'"
          v-model="item.price"
        />
        <input
          type="number"
          id="length"
          placeholder="Length, cm"
          v-else
          v-model="item.length"
        />
        <input
          type="text"
          id="quantity"
          placeholder="Quantity"
          v-if="type === 'pricing'"
          v-model="item.quantity"
        />
        <input
          type="number"
          id="width"
          placeholder="Width, cm"
          v-else
          v-model="item.width"
        />
        <button type="submit" class="btn" @click="createItem">Save</button>
      </form>
    </div>
    <div class="popup-bg" v-if="openForm" @click="this.openForm = false"></div>
  </div>
</template>

<script>
import CloseIcon from "../UI/CloseIcon";
export default {
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
          this.type === "parameters"
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
        await fetch(
          `/api/add-${this.type === "parameters" ? "param" : "item"}`,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
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
