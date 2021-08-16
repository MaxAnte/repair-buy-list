<template>
  <div class="overall">
    <h4 v-if="type === 'materials'">
      {{ $t("overall-cost") }}:
      <span class="ovr">{{ $store.getters.sumOfPrices }} {{ $t("UAH") }}</span>
    </h4>
    <h4 v-else>
      {{ $t("overall-squares") }}:
      <span class="ovr"
        >{{ $store.getters.sumOfSquareMeters }} {{ $t("㎡") }}</span
      >
    </h4>
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
  props: {
    type: {
      type: String,
    },
  },
};
</script>

<style scoped>
.overall {
  background: #ffffff;
  padding: 20px 25px;
  box-shadow: 0px 0px 20px 20px rgba(95, 75, 139, 0.15);
  margin-top: 35px;
  text-align: left;
  border-radius: 10px;
}
.overall h4 {
  font-size: 22px;
  font-weight: 400;
}
.ovr {
  color: #5f4b8bff;
  font-weight: 700;
  font-size: 26px;
  padding-left: 10px;
}
</style>
