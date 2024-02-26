<template>
  <v-container>
    <v-form @submit.prevent="handleSubmit" v-model="valid">
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="firstName"
            label="First Name"
            :error-messages="firstNameErrors"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="lastName"
            label="Last Name"
            :error-messages="lastNameErrors"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        v-model="email"
        label="Email"
        :error-messages="emailErrors"
        required
      ></v-text-field>
      <v-text-field
        v-model="contactNumber"
        label="Contact Number"
        :error-messages="contactNumberErrors"
        required
      ></v-text-field>
      <v-text-field v-model="address1" label="Address 1"></v-text-field>
      <v-text-field v-model="address2" label="Address 2"></v-text-field>
      <v-select v-model="role" :items="roles" label="Role"></v-select>
      <v-btn type="submit" :disabled="!valid" color="primary"
        >Create New User</v-btn
      >
    </v-form>
    <v-snackbar v-model="snackbar" top right :timeout="3000">
      <v-alert text dense color="info" v-if="snackbar"
        >Account created successfully</v-alert
      >
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref, watch } from "vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const contactNumber = ref("");
const address1 = ref("");
const address2 = ref("");
const role = ref("User");
const valid = ref(false);
const snackbar = ref(false);

const roles = ["Admin", "Manager", "User"];

const handleSubmit = () => {
  // Validation
  const firstNameValid = firstName.value.trim().length >= 3;
  const lastNameValid = lastName.value.trim().length >= 3;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  const contactNumberValid = /^[0-9]{3,4}-?[0-9]{3,4}-?[0-9]{3,4}$/.test(
    contactNumber.value.trim()
  );

  valid.value =
    firstNameValid && lastNameValid && emailValid && contactNumberValid;

  if (valid.value) {
    // Perform submission logic here
    // For demo purpose, just show snackbar
    snackbar.value = true;
    resetForm();
  }
};

const resetForm = () => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  contactNumber.value = "";
  address1.value = "";
  address2.value = "";
  role.value = "User";
  valid.value = false;
};

const firstNameErrors = ref([]);
const lastNameErrors = ref([]);
const emailErrors = ref([]);
const contactNumberErrors = ref([]);

watch(() => {
  firstNameErrors.value =
    firstName.value.trim().length >= 3
      ? []
      : ["This field is required & min 3 characters"];
  lastNameErrors.value =
    lastName.value.trim().length >= 3
      ? []
      : ["This field is required & min 3 characters"];
  emailErrors.value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
    ? []
    : ["Please provide a valid email address"];
  contactNumberErrors.value = /^[0-9]{3,4}-?[0-9]{3,4}-?[0-9]{3,4}$/.test(
    contactNumber.value.trim()
  )
    ? []
    : ["Please provide a valid Phone number"];
});
</script>
