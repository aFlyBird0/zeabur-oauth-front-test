# zeabur-oauth front test

这里是 Zeabur 的 OAuth Server 的前端 demo （因为不会 react 所以用了 ChatGPT 来快速生成 demo）

主要关注 views 与 components 的 `OAuthConfirm.vue` 内部的代码实现和 TODO 注释，然后改写到 dashboard front end 就好。

逻辑主要是：
1. gateway 会往本前端的 `/oauth/authorize` 路由发送一个请求，带上 `client_name`，`scope` 和 `request_id` 三个参数。

其中，`client_name`，`scope` 是渲染用的。

`request_id` 的作用如下：

(`auth_url` 的格式是：http://xxx/oauth/authorize，`request_id` 的格式是字符串id)

1. 向 `<gateway_host>/oauth/needConfirm?request_id=xxx` 的请求，返回体如下：

```json
{
  "need_confirm": bool
}
```

如果返回是 `false`，那就说明该用户以前授权过该client，自动进行第二步

2. 在用户点击了 “确定授权” 按钮后（后者当第一步的返回为false，自动触发），前端往 `<gateway_host>/oauth/othorize?request_id=xxx` 发送 POST 请求，携带 auth header。

如果成功，后端的响应是一个 302 跳转（跳转到 OAuth Client），前端设置一下跳转即可。
