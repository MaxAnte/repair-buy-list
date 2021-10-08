<template>
  <ul class="items-list">
    <li :class="type === 'rooms' ? 'rooms-head' : 'list-head'">
      <div class="head-id">#</div>
      <div class="head-name">{{ $t("name") }}</div>
      <div class="head-quantity" v-if="type === 'materials'">
        {{ $t("quantity") }}
      </div>
      <div class="head-length" v-else>{{ $t("length") }}</div>
      <div class="head-price" v-if="type === 'materials'">
        {{ $t("price") }}
      </div>
      <div class="head-price" v-else>{{ $t("width") }}</div>
      <div class="head-price" v-if="type === 'rooms'">{{ $t("㎡") }}</div>
    </li>
    <Item
      class="list-item"
      v-for="(item, index) in items"
      :key="item.name"
      :item="item"
      :index="index"
      :type="type"
    />
    <AddItem :type="type" />
  </ul>

  <Overall :type="type" />
</template>

<script>
import Item from "./Item";
import AddItem from "./AddItem";
import Overall from "./Overall";
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
    Item,
    AddItem,
    Overall,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-head {
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.2fr 0.1fr 0.1fr;
  font-size: 14px;
  color: #7b7b7b;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
.rooms-head {
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.2fr 0.2fr 0.1fr 0.1fr;
  grid-gap: 2px;
  align-items: end;
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

@media (max-width: 500px) {
  .list-head {
    font-size: 12px !important;
    grid-template-columns: 0.1fr 1fr 0.3fr 0.3fr 0.1fr !important;
  }
  .rooms-head {
    font-size: 12px !important;
    grid-template-columns: 0.1fr 1fr 0.3fr 0.3fr 0.3fr 0.1fr !important;
  }
}
</style>
