<template>
  <div ref="map" class="map-container"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import L from "leaflet";

export default {
  name: "Map",
  setup() {
    const map = ref(null);

    onMounted(() => {
      // Initialize the map
      const mapInstance = L.map(map.value).setView([51.505, -0.09], 13);

      // Add a tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapInstance);
    });

    return {
      map,
    };
  },
};
</script>

<style scoped>
.map-container {
}
</style>
