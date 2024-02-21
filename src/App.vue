<template>
  <v-app id="inspire">
    <!-- drawer sidebar -->
    <v-navigation-drawer v-model="drawer">
      <h1>done1</h1>
      <h1>done2</h1>
      <h1>done3</h1>
    </v-navigation-drawer>

    <!-- navbar -->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <input type="search" name="" id="" />

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- main content area -->
    <v-main>
      <h1>dine</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque iusto
        architecto dicta aperiam quo, odit laudantium neque, unde recusandae
        illo cumque enim ullam dignissimos doloribus, sunt quae ratione
        asperiores possimus.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque iusto
        architecto dicta aperiam quo, odit laudantium neque, unde recusandae
        illo cumque enim ullam dignissimos doloribus, sunt quae ratione
        asperiores possimus.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque iusto
        architecto dicta aperiam quo, odit laudantium neque, unde recusandae
        illo cumque enim ullam dignissimos doloribus, sunt quae ratione
        asperiores possimus.
      </p>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>
