<template>
  <div>
    <div class="d-flex justify-center">
      <canvas :id="canvasId"></canvas>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

export default {
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    backgroundColor: {
      type: Object,
      required: true,
    },
    canvasId: {
      type: String,
      default: "chartCanvas",
    },
  },
  setup(props) {
    const chart = ref(null);
    const data = {
      datasets: [
        {
          data: props.chartData,
          backgroundColor: props.backgroundColor,
          borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
          borderWidth: 0,
        },
      ],
    };

    onMounted(() => {
      const ctx = document.getElementById(props.canvasId).getContext("2d");

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
  height: 50px;
  max-height: 100%;
}
</style>
