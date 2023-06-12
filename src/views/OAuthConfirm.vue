<template>
  <div>
    <!-- TODO: 需要判断一下是否登录，如果未登录，跳转到登录页面。登录成功后，再跳转到这里。 -->
    <!-- TODO：这里可以加一个缓冲页-->
    <!-- TODO: 请求后端接口（这个接口还没写）判断一下用户是否已经授权给了该Client，是的话，跳过按钮确认，不展示授权页，只展示缓冲页，直接 POST 后端接口-->
    <OAuthConfirm :clientName="clientName" :scope="scope" :authUrl="authUrl" />
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
  authUrl: {
    type: String,
    required: true
  }
});
</script>
