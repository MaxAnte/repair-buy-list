<template>
  <div class="overall">
    <h4>
      Overall cost: <span class="ovr-price">{{ overallPrice }}</span>
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
  },
  data() {
    return {
      overallPrice: 0,
    };
  },
  methods: {
    calcOverall() {
      const ovr = this.items
        .map((el) => el.price)
        .reduce((prev, cur) => (prev += cur));
      this.overallPrice = ovr;
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
}
.overall h4 {
  font-size: 22px;
  font-weight: 400;
}
.ovr-price {
  color: #5f4b8bff;
  font-weight: 700;
  font-size: 26px;
  padding-left: 10px;
}
</style>
