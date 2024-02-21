<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <h1>done1</h1>
      <h1>done2</h1>
      <h1>done3</h1>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <h1>dine</h1>
      <h1>dine</h1>
      <h1>dine</h1>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>
