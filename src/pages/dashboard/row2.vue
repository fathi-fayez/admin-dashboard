<template>
  <div class="container d-flex mt-10 flex-wrap justify-center">
    <div class="line-chart">
      <h2 class="title py-5">Revenue Generated</h2>
      <lineChart />
    </div>
    <div
      class="box-container"
      style="overflow: auto; border-radius: 4px; min-width: 280px; flex-grow: 1"
    >
      <div class="paper">
        <h2 class="title pt-5 ps-5">Recent Transactions</h2>
      </div>

      <div
        v-for="(transaction, index) in transactions"
        :key="index"
        class="paper"
        style="
          margin-top: 0.4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div class="box-content" style="padding: 1.2rem">
          <p>{{ transaction.txId }}</p>
          <p>{{ transaction.user }}</p>
        </div>
        <p>{{ transaction.date }}</p>
        <p
          style="
            border-radius: 4px;
            padding: 1rem;
            margin-right: 10px;
            background-color: rgb(1, 208, 255);
          "
        >
          ${{ transaction.cost }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import lineChart from "../Line Chart/lineChart.vue";
const transactions = ref([
  { txId: "123456", user: "User A", date: "2024-02-28", cost: 10.99 },
  { txId: "654321", user: "User B", date: "2024-02-27", cost: 15.75 },
  { txId: "654321", user: "User B", date: "2024-02-27", cost: 15.75 },
  { txId: "654321", user: "User B", date: "2024-02-27", cost: 15.75 },
]);
</script>
<style>
.line-chart {
  width: 700px;
  margin: 10px;
}
@media (max-width: 768px) {
  .line-chart {
    width: 400px;
  }
}

.box-container {
  background-color: #8096a7;
}
.box-content {
  background-color: #8096a7;
}
</style>
