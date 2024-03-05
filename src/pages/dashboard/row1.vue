<template>
  <!-- container -->
  <div class="container d-flex justify-space-between">
    <!-- box one -->
    <div
      class="box d-flex justify-space-between align-center"
      :class="{ 'dark-mode': $vuetify.theme.name === 'dark' }"
    >
      <div class="right-content d-flex flex-column">
        <v-icon>mdi-mail</v-icon>
        <span>12,361</span>
        <span>Emails Sent</span>
      </div>
      <div class="left-content d-flex flex-column">
        <nutChart
          :chartData="[90, 270]"
          :backgroundColor="['rgb(255 103 0)', 'rgb(227 191 135)']"
          canvasId="one"
        />
        <span>+14%</span>
      </div>
    </div>
    <!-- box two -->
    <div
      class="box d-flex justify-space-between align-center"
      :class="{ 'dark-mode': $vuetify.theme.name === 'dark' }"
    >
      <div class="right-content d-flex flex-column">
        <v-icon>mdi-cash-register</v-icon>
        <span>431,225</span>
        <span>Sales Obtained</span>
      </div>
      <div class="left-content d-flex flex-column">
        <nutChart
          :chartData="[75, 285]"
          :backgroundColor="['#03A9F4', 'rgb(131 167 7)']"
          canvasId="two"
        />
        <span>+21%</span>
      </div>
    </div>
    <!-- box three -->
    <div
      class="box d-flex justify-space-between align-center"
      :class="{ 'dark-mode': $vuetify.theme.name === 'dark' }"
    >
      <div class="right-content d-flex flex-column">
        <v-icon>mdi-account-plus-outline</v-icon>
        <span>32,441</span>
        <span>New Clients</span>
      </div>
      <div class="left-content d-flex flex-column">
        <nutChart
          :chartData="[18, 342]"
          :backgroundColor="['#3F51B5', 'rgb(246 51 96)']"
          canvasId="three"
        />
        <span>+5%</span>
      </div>
    </div>
    <!-- box four -->
    <div
      class="box d-flex justify-space-between align-center"
      :class="{ 'dark-mode': $vuetify.theme.name === 'dark' }"
    >
      <div class="right-content d-flex flex-column">
        <v-icon>mdi-traffic-light</v-icon>
        <span>1,325,134</span>
        <span>Traffic Received</span>
      </div>
      <div class="left-content d-flex flex-column">
        <nutChart
          :chartData="[140, 220]"
          :backgroundColor="['rgb(252 17 216)', '#9E9E9E']"
          canvasId="four"
        />
        <span>+43%</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import nutChart from "./chart.vue";
</script>
<style scoped>
.box {
  background-color: white;
  border-radius: 4px;
  width: 320px;
  padding: 20px;
  margin: 10px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 4px 2px 6px 0px;
}
.left-content {
  text-align: center;
}
.left-content span {
  margin-top: 5px;
}
.dark-mode {
  background-color: rgb(43, 39, 39);
}
i {
  color: var(--primary-color);
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
@media (max-width: 1000px) {
  .container {
    flex-wrap: wrap;
  }
}
</style>
