<template>
  <div class="container">
    <Header />
    <Tabs />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";

export default {
  components: {
    Header,
    Footer,
    Tabs,
  },
};
</script>

<style>
@import "./vars.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  width: 100vw;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  background-image: url("./assets/bg.png");
  height: 100%;
}
.container {
  max-width: 1200px;
  padding: 0px 15px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
ul {
  list-style: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input {
  background: #ffffff;
  padding: 5px 10px;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
  outline: none;
}
</style>
