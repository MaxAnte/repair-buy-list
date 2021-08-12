<template>
  <svg
    id="Capa_1"
    enable-background="new 0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    :width="width"
    :height="height"
  >
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1="256"
      x2="256"
      y1="512"
      y2="0"
    >
      <stop offset="0" stop-color="#fd3a84" />
      <stop offset="1" stop-color="#ffa68d" />
    </linearGradient>
    <linearGradient
      id="SVGID_2_"
      gradientUnits="userSpaceOnUse"
      x1="256"
      x2="256"
      y1="421.015"
      y2="60"
    >
      <stop offset="0" stop-color="#ffc2cc" />
      <stop offset="1" stop-color="#fff2f4" />
    </linearGradient>
    <g>
      <g>
        <g>
          <path
            d="m417.4 181 3.6-44.801c.652-9.116-6.531-16.199-15-16.199h-300c-8.483 0-15.651 7.097-15 16.199l3.6 44.801-28.8 15 31.2 15 21.599 259.9c2.401 23.399 21.601 41.1 45 41.1h184.801c23.399 0 42.599-17.701 45-41.4l21.6-259.6 31.2-15zm-221.4-91c8.291 0 15-6.709 15-15 0-24.814 20.186-45 45-45s45 20.186 45 45c0 8.291 6.709 15 15 15s15-6.709 15-15c0-41.353-33.647-75-75-75s-75 33.647-75 75c0 8.291 6.709 15 15 15z"
            fill="url(#SVGID_1_)"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="m76 181c-8.401 0-15 6.599-15 15 0 8.399 6.599 15 15 15h21l-2.4-30zm360 0h-18.6l-2.4 30h21c8.401 0 15-6.601 15-15 0-8.401-6.599-15-15-15zm-30-121h-300c-24.814 0-45 20.186-45 45v30c0 8.291 6.709 15 15 15h360c8.291 0 15-6.709 15-15v-30c0-24.814-20.186-45-45-45zm-217.354 164.755c-.674-8.247-7.939-14.531-16.187-13.696-8.262.688-14.385 7.925-13.696 16.187l15 180c.7 8.509 8.344 14.508 16.187 13.696 8.262-.688 14.385-7.925 13.696-16.187zm150.894-13.696c-8.408-.82-15.498 5.449-16.187 13.696l-15 180c-.688 8.262 5.435 15.498 13.696 16.187 7.858.813 15.489-5.211 16.187-13.696l15-180c.689-8.263-5.434-15.499-13.696-16.187zm-83.54-.059c-8.291 0-15 6.709-15 15v180c0 8.291 6.709 15 15 15s15-6.709 15-15v-180c0-8.291-6.709-15-15-15z"
            fill="url(#SVGID_2_)"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
