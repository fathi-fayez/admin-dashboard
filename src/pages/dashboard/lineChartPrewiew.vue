<template>
  <div>
    <div class="d-flex justify-center"><canvas id="chartCanvas"></canvas></div>
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
          data: [45, 50, 60, 48, 56, 66, 54],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
        {
          label: "My Second Dataset",
          data: [40, 55, 50, 45, 55, 60, 50],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
        },
        {
          label: "My Third Dataset",
          data: [35, 51, 40, 43, 54, 40, 45],
          fill: false,
          borderColor: "rgb(45, 162, 195)",
          tension: 0.3,
        },
        {
          label: "My Fourth Dataset",
          data: [30, 40, 35, 40, 45, 35, 40],
          fill: false,
          borderColor: "rgb(45, 162, 195)",
          tension: 0.3,
        },
      ],
    };

    onMounted(() => {
      const ctx = document.getElementById("chartCanvas").getContext("2d");

      chart.value = new Chart(ctx, {
        type: "line",
        data: data,
      });
    });

    return { chart };
  },
};
</script>
