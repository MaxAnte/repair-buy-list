<template>
  <div class="overall">
    <h4 v-if="type === 'pricing'">
      Overall cost: <span class="ovr">{{ overall }} UAH</span>
    </h4>
    <h4 v-else>
      Overall squares: <span class="ovr">{{ overall }} ㎡</span>
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      overall: 0,
    };
  },
  methods: {
    calcOverall() {
      const ovr =
        this.type === "pricing"
          ? this.items
              .map((el) => el.price)
              .reduce((prev, cur) => (prev += cur))
          : this.items
              .map((el) => (el.width * el.length) / 10000)
              .reduce((prev, cur) => (prev += cur));
      this.overall = ovr;
    },
  },
  beforeMount() {
    this.calcOverall();
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
