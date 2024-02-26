<template>
  <v-container>
    <v-toolbar flat color="white">
      <v-toolbar-title>Filter By:</v-toolbar-title>
      <!-- Filter menu -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">Filter</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(filter, index) in filters"
            :key="index"
            :value="index"
            @click="setFilterKey(filter.key)"
          >
            <v-list-item-title>{{ filter.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Column specifier menu -->
      <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">Columns</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(header, index) in headers" :key="index">
            <v-list-item-content
              class="d-flex align-center justify-space-between"
            >
              <v-list-item-icon>
                <v-switch v-model="header.visible" color="primary"></v-switch>
              </v-list-item-icon>
              <v-list-item-title @click="toggleColumn(header.value)">
                {{ header.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-text-field
      v-model="search"
      label="Search"
      solo-inverted
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>

    <v-data-table
      :headers="visibleHeaders"
      :items="filteredMembers"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Desserts</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

const search = ref("");
const filterKey = ref("");
const Members = ref([
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    age: 30,
    phone: "1234567890",
    access: "Admin",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    age: 25,
    phone: "9876543210",
    access: "User",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    age: 25,
    phone: "9876543210",
    access: "User",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    age: 25,
    phone: "9876543210",
    access: "User",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    age: 25,
    phone: "9876543210",
    access: "User",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    age: 25,
    phone: "9876543210",
    access: "User",
  },
  // Add more members as needed
]);

const filters = ref([
  { key: "name", label: "Name", active: true },
  { key: "age", label: "Age", active: true },
  { key: "id", label: "Id", active: true },
]);

const setFilterKey = (key) => {
  filterKey.value = key;
};

const filteredMembers = computed(() => {
  let filtered = Members.value;
  if (search.value && filterKey.value) {
    filtered = filtered.filter((member) => {
      return member[filterKey.value]
        .toString()
        .toLowerCase()
        .includes(search.value.toLowerCase());
    });
  }
  return filtered;
});

const headers = ref([
  { text: "Id", value: "id", visible: true },
  { text: "Name", value: "name", visible: true },
  { text: "Email", value: "email", visible: true },
  { text: "Age", value: "age", visible: true },
  { text: "Phone", value: "phone", visible: true },
  { text: "Access", value: "access", visible: true },
]);

const visibleHeaders = computed(() => {
  return headers.value.filter((header) => header.visible);
});

const toggleColumn = (value) => {
  const header = headers.value.find((h) => h.value === value);
  if (header) {
    header.visible = !header.visible;
  }
};
</script>
