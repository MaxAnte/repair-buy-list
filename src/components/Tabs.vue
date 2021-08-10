<template>
  <div class="tabs">
    <router-link class="tab-link" to="/">
      <span>Pricing</span>
    </router-link>
    <router-link class="tab-link" to="/params">
      <span>Parameters</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: flex-end;
  padding: 0px 5px;
}
.tab-link {
  text-decoration: none;
}
.tab-link span {
  background: #ffffff;
  font-size: 16px;
  color: #333333;
  border-radius: 4px 4px 0px 0px;
}
</style>
