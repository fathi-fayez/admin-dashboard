<template>
  <v-table fixed-header>
    <thead>
      <tr>
        <th class="text-left">Id</th>
        <th class="text-left">Name</th>
        <th class="text-left">Email</th>
        <th class="text-left">Age</th>
        <th class="text-left">Phone</th>
        <th class="text-left">Access</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in Members" :key="item.name">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.phone }}</td>
        <td
          :class="{
            'admin-box': item.access === 'Admin',
            'user-box': item.access === 'User',
            'manager-box': item.access === 'Manager',
          }"
        >
          <v-icon v-if="item.access === 'Admin'">mdi-security</v-icon>
          <v-icon v-else-if="item.access === 'User'">mdi-shield-account</v-icon>
          <v-icon v-else>mdi-shield-lock</v-icon>
          {{ item.access }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
import { ref } from "vue";

const Members = ref([
  {
    id: 1,
    name: "Khaled mohamed",
    email: "khaledmohamed@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "Admin",
  },
  {
    id: 1,
    name: "Khaled mohamed",
    email: "khaledmohamed@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "Admin",
  },
  {
    id: 1,
    name: "Khaled mohamed",
    email: "khaledmohamed@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "Admin",
  },
  {
    id: 2,
    name: "Amr elsayed",
    email: "amrelsayed@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "Admin",
  },
  {
    id: 3,
    name: "Alaa kamel",
    email: "Alaakamel@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "Manager",
  },
  {
    id: 4,
    name: "Mena ahmad",
    email: "menaahmad@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "Manager",
  },
  {
    id: 5,
    name: "Emad ebrahim",
    email: "emad ebrahim@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "Manager",
  },
  {
    id: 6,
    name: "Adham morsy",
    email: "Adhammorsy@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "User",
  },
  {
    id: 7,
    name: "Fares  abdelraouf",
    email: "Faresabdelraouf@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "User",
  },
  {
    id: 8,
    name: "Hamdy  elsharkawi",
    email: "Hamdyelsharkawi@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "User",
  },
  {
    id: 9,
    name: "Nema mahmoud",
    email: "Nemamahmoud@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "User",
  },
]);
</script>
<style>
.admin-box {
  background-color: #0873ff;
  text-align: center;
}
.user-box {
  background-color: rgb(21, 203, 173);
  text-align: center;
}
.manager-box {
  background-color: #7b1fa2;
  text-align: center;
}
</style>
