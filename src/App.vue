<template>
  <v-app id="inspire">
    <!-- drawer sidebar -->
    <v-navigation-drawer v-model="drawer" app>
      <!-- avatar -->
      <v-row class="justify-center">
        <v-col cols="auto">
          <v-avatar>
            <v-img
              src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="auto">
          <div class="d-flex justify-center">
            <v-card width="300px">
              <v-card-title class="text-h6 text-md-h5 text-lg-h4"
                >Fathi Fayez</v-card-title
              >
              <v-card-text> FrontEnd developer </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <v-col cols="auto"> </v-col>

      <!-- list one -->
      <v-list>
        <v-list-item v-for="(item, index) in itemsOne" :key="index" link>
          <v-row>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <!-- list two -->
      <v-list>
        <v-list-item v-for="(item, index) in itemsTwo" :key="index" link>
          <v-row>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <!-- list three -->
      <v-list>
        <v-list-item v-for="(item, index) in itemsThree" :key="index" link>
          <v-row>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <!-- navbar -->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>

      <!-- icons -->
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <input type="search" name="" id="" />

      <v-btn
        v-if="$vuetify.theme.name === 'light'"
        @click="$vuetify.theme.name = 'dark'"
        icon
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-btn v-else @click="$vuetify.theme.name = 'light'" icon>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
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
const itemsOne = ref([
  { text: "Dashboard", icon: "mdi-home-account" },
  { text: "Mange Team", icon: "mdi-account-multiple" },
  { text: "Contacts Information", icon: "mdi-contacts" },
  { text: "Invoices Balances", icon: "mdi-receipt-text-outline" },
]);
const itemsTwo = ref([
  { text: "Profile Form", icon: "mdi-account" },
  { text: "Calendar", icon: "mdi-calendar-blank" },
  { text: "F&Q Page", icon: "mdi-help-circle" },
]);
const itemsThree = ref([
  { text: "Bar Chart", icon: "mdi-poll" },
  { text: "Pie Chart", icon: "mdi-chart-pie" },
  { text: "Line Chart", icon: "mdi-chart-timeline-variant" },
]);
</script>
