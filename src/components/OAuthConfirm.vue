<template>
  <div>
    <h2>{{ clientName }} 正在请求 OAuh2 授权</h2>
    <p>scope: {{ scope }}</p>
    <p>authUrl: {{ authUrl }}</p>
    <button @click="confirmAuthorization(authUrl)">确定授权</button>
  </div>
</template>

<script setup>

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



const confirmAuthorization = (authUrl) => {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };

  console.log('confirmAuthorization', authUrl, headers);

  // 发送POST请求到authUrl
  fetch(authUrl, {
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
