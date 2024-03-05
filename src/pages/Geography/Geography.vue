<template>
  <div id="svgMap" ref="map"></div>
</template>

<script>
import svgMap from "svgmap";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const map = ref(null);

    onMounted(() => {
      new svgMap({
        targetElementID: "svgMap",
        mouseWheelZoomEnabled: true,
        hideFlag: false,
        countries: {
          UA: "dshs",
        },
        data: {
          data: {
            countresidents: {
              name: "count residents",
              format: "{0}",
              thousandSeparator: ",",
              thresholdMax: 50000,
              thresholdMin: 1000,
            },
          },
          applyData: "countresidents",
          values: {},
        },
      });
    });

    return { map };
  },
};
</script>
<style>
.svgMap-map-image {
  background-color: rgb(165, 165, 165) !important;
}
.svgMap-country {
  background-color: red !important;
  color: red !important;
}
.svgMap-tooltip {
  background: rgba(31, 41, 55, 0.9);
  box-shadow: 0px 4px 8px rgba(24, 33, 45, 0.4);
  border-radius: 11px;
  color: #ffffff !important;
}
.svgMap-tooltip .svgMap-tooltip-content-wrapper {
  color: #ffffff !important;
}
.svgMap-tooltip .svgMap-tooltip-content .svgMap-tooltip-no-data {
  color: #f20000 !important;
}
.svgMap-tooltip .svgMap-tooltip-content {
  color: #ffffff !important;
}
.svgMap-tooltip .svgMap-tooltip-content table td span {
  color: #ffffff;
}

.svgMap-tooltip-pointer {
  display: none;
}
.svgMap-tooltip .svgMap-tooltip-title {
  padding: 0;
}
.svgMap-tooltip .svgMap-tooltip-content-container .svgMap-tooltip-content {
  font-weight: 500;
}
</style>
