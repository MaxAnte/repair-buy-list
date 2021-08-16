<template>
  <div class="tabs">
    <router-link class="tab-link" to="/">
      <span>{{ $t("materials") }}</span>
    </router-link>
    <router-link class="tab-link" to="/rooms">
      <span>{{ $t("rooms") }}</span>
    </router-link>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });
    return { t };
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: flex-end;
  padding: 0px 15px;
  margin-bottom: 5px;
  z-index: 2;
}
.tab-link {
  text-decoration: none;
}
.tab-link span {
  background: #ffffff;
  font-size: 16px;
  color: #333333;
  border-radius: 4px 4px 0px 0px;
  padding: 5px 10px;
  box-shadow: 0px -6px 20px rgb(0 0 0 / 15%);
  transition: all 0.2s ease;
}
.tab-link span:hover,
.tab-link.router-link-active span {
  background: #5f4b8bff;
  color: #fff;
  transition: all 0.2s ease;
}
</style>
