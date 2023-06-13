<template>
  <div>
]    <OAuthConfirm :clientName="clientName" :scope="scope" :authUrl="authUrl" :requestId="requestId" />
  </div>
</template>

<script setup>
import OAuthConfirm from '../components/OAuthConfirm.vue';
defineProps({
  clientName: {
    type: String,
    required: true
  },
  scope: {
    type: String,
    required: true
  },
  requestId: {
    type: String,
    required: true
  }
});
</script>
