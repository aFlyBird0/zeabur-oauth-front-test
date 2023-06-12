# zeabur-oauth front test

这里是 Zeabur 的 OAuth Server 的前端 demo （因为不会 react 所以用了 ChatGPT 来快速生成 demo）

主要关注 views 与 components 的 `OAuthConfirm.vue` 内部的代码实现和 TODO 注释，然后改写到 dashboard front end 就好。

逻辑主要是：
1. gateway 会往本前端的 `/oauth/authorize` 路由发送一个请求，带上 `client_name`，`scope` 和 `auth_url` 三个参数。

其中，`client_name`，`scope` 是渲染用的。

`auth_url` 在用户点击了 “确定授权” 按钮后，前端应往这个 url 发送 POST 请求，并携带 auth header。`auth_url` 的格式是：http://xxx/oauth/authorize?request_id=6486dada2d43d38e0504bc19 （其实前端不需要关心格式，直接 POST 即可）

如果成功，后端的响应是一个 302 跳转（跳转到 OAuth Client），前端设置一下跳转即可。
