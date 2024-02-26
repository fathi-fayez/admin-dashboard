<template>
  <v-container>
    <h1>Contacts</h1>
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
                {{ header.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <!-- input field -->
    <v-text-field
      v-model="search"
      :label="searchLabel"
      solo-inverted
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>

    <!-- table of data -->
    <v-data-table
      :headers="visibleHeaders"
      :items="filteredMembers"
      class="elevation-1"
    >
    </v-data-table>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

const search = ref("");
const filterKey = ref("");
const searchLabel = ref("Select filter type");
const Members = ref([
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
]);

const headers = ref([
  { title: "Id", value: "id", visible: true },
  { title: "Name", value: "name", visible: true },
  { title: "Email", value: "email", visible: true },
  { title: "Age", value: "age", visible: true },
  { title: "Phone", value: "phone", visible: true },
  { title: "Address", value: "address", visible: true },
  { title: "City", value: "city", visible: true },
  { title: "ZipCode", value: "zipCode", visible: true },
  { title: "RegistrarId", value: "registrarId", visible: true },
]);

const filters = ref([
  { key: "name", label: "Name", active: true },
  { key: "age", label: "Age", active: true },
  { key: "id", label: "Id", active: true },
]);

const setFilterKey = (key) => {
  filterKey.value = key;
  searchLabel.value = key;
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
