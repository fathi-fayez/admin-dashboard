<template>
  <!-- container -->
  <div class="container d-flex justify-space-between flex-wrap">
    <!-- box one -->
    <div class="box d-flex justify-space-between align-center">
      <div class="right-content d-flex flex-column">
        <v-icon>mdi-mail</v-icon>
        <span>12,361</span>
        <span>Emails Sent</span>
      </div>
      <div class="left-content d-flex flex-column">
        <nutChart :chartData="[90, 270]" canvasId="one" />
        <span>+14%</span>
      </div>
    </div>
    <!-- box two -->
    <div class="box d-flex justify-space-between align-center">
      <div class="right-content d-flex flex-column">
        <v-icon>mdi-cash-register</v-icon>
        <span>431,225</span>
        <span>Sales Obtained</span>
      </div>
      <div class="left-content d-flex flex-column">
        <nutChart :chartData="[75, 285]" canvasId="two" />
        <span>+21%</span>
      </div>
    </div>
    <!-- box three -->
    <div class="box d-flex justify-space-between align-center">
      <div class="right-content d-flex flex-column">
        <v-icon>mdi-account-plus-outline</v-icon>
        <span>32,441</span>
        <span>New Clients</span>
      </div>
      <div class="left-content d-flex flex-column">
        <nutChart :chartData="[18, 342]" canvasId="three" />
        <span>+5%</span>
      </div>
    </div>
    <!-- box four -->
    <div class="box d-flex justify-space-between align-center">
      <div class="right-content d-flex flex-column">
        <v-icon>mdi-traffic-light</v-icon>
        <span>1,325,134</span>
        <span>Traffic Received</span>
      </div>
      <div class="left-content d-flex flex-column">
        <nutChart :chartData="[140, 220]" canvasId="four" />
        <span>+43%</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import nutChart from "./chart.vue";
</script>
<style>
.box {
  background-color: #009688;
  border-radius: 4px;
  width: 250px;
  padding: 20px;
  margin: auto 20px;
}
.left-content canvas {
  height: 50px;
  max-height: 100%;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
