<template>
  <h1 style="color: #2196f3">Pie Chart</h1>
  <h4 class="mb-5">Simple Pie Chart</h4>
  <div>
    <div class="d-flex justify-center">
      <canvas id="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

export default {
  setup() {
    const chart = ref(null);
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 70, 56, 55, 40],
          backgroundColor: [
            "#61cdbb",
            "#e8c1a0",
            "#f47560",
            "#f1e15b",
            "#e8a838",
            "#9c27b0",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 0,
        },
      ],
    };

    onMounted(() => {
      const ctx = document.getElementById("chartCanvas").getContext("2d");

      chart.value = new Chart(ctx, {
        type: "doughnut",
        data: data,
      });
    });

    return { chart };
  },
};
</script>
<style scoped>
canvas {
  height: 500px !important;
}
</style>
