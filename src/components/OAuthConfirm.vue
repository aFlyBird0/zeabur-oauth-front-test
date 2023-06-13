<template>
  <div>
    <h2>{{ clientName }} 正在请求 OAuh2 授权</h2>
    <p>scope: {{ scope }}</p>
    <p>requestId: {{ requestId }}</p>
    <button @click="confirmAuthorization(requestId)">确定授权</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';


const props = defineProps({
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

onMounted(() => {
  console.log('OAuthConfirm mounted');
  checkIfNeedConfirm(props.requestId);
});

const checkIfNeedConfirm = (requestId) => {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };

  // 请求 localhost:8080/needConfirm，带上 header 和 requestId

  fetch('http://localhost:8080/oauth/needConfirm?request_id=' + requestId, {
    method: 'GET',
    headers: headers,
  })
    .then(response => response.json())
    .then(data => {
      // 处理响应
      // 如果返回的 json 的 "need_confirm" 是 fasle，那么直接调用 confirmAuthorization
      console.log('confirmAuthorization data', data);
      console.log('confirmAuthorization data.need_confirm', data['need_confirm'])
      if (data.need_confirm === false) {
        console.log('already confirmed, redirect to authUrl');
        confirmAuthorization(requestId);
      }
    })
    .catch(error => {
      // 处理错误
      console.log('confirmAuthorization error', error);
    });
}


const confirmAuthorization = (requestId) => {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };

  const authUrl = "http://localhost:8080/oauth/authorize";

  // 发送POST请求到authUrl
  fetch(authUrl + "?request_id=" +requestId, {
    method: 'POST',
    headers: headers,
    redirect: 'follow'
  })
    .then(response => {
      // 处理响应
      window.location.href = response.url;
    })
    .catch(error => {
      // 处理错误
    });
};
</script>
