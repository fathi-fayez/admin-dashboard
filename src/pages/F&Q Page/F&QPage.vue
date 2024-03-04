<template>
  <div>
    <h1 style="color: #2196f3">FAQ</h1>
    <h4 class="mb-5">Frequently Asked Questions Page</h4>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(question, index) in questions"
        class="mb-3"
        :key="index"
        :title="question.question"
        :text="question.answer"
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script setup>
import { ref } from "vue";
const questions = ref([
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, including Visa, Mastercard, and American Express. ",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive a confirmation email containing a tracking number. You can use this tracking number to monitor the status and location of your package on our website or the courier's website.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a hassle-free return policy within 30 days of purchase. If you're not satisfied with your order for any reason, you can return the item(s) for a full refund or exchange. Please ensure that the item(s) are unused and in their original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location and the shipping method selected at checkout. Typically, orders are processed and shipped within 1-2 business days. Standard shipping within the US usually takes 3-5 business days, while international shipping may take 7-14 business days.",
  },
  {
    question: " Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries worldwide. However, shipping rates and delivery times may vary depending on the destination. Please note that customers are responsible for any customs duties or taxes imposed by their country's customs authorities.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our customer support team is available via email and live chat during business hours. You can reach us at support@example.com or by clicking the chat icon in the bottom right corner of our website. We strive to respond to all inquiries promptly and provide assistance with any questions or concerns you may have.",
  },
  {
    question: "Are your products eco-friendly?",
    answer:
      "Yes, we are committed to sustainability and offer a range of eco-friendly products. Our products are made from responsibly sourced materials and manufactured using environmentally friendly processes wherever possible. We prioritize reducing our carbon footprint and promoting sustainable practices throughout our supply chain.",
  },
]);
</script>
