# Lab11设计文档

[github地址](https://github.com/wukefei1/SOFT130002_lab/tree/master/lab11/)

### Cookie 和 Session 的功能

##### 同为会话技术

1. 会话：包含多次请求和响应。浏览器第一次给服务器资源发送请求，会话建立，直到有一方断开为止。

2. 功能：在一次会话的范围内的多次请求间，共享数据。

3. 区别：Cookie为客户端会话技术，Session服务器端会话技术。

##### Cookie

1. 用户在登录时向服务器发送post请求，服务器接受请求，检验请求参数无误后，服务器端生成对应的cookie字符串，响应到前端浏览器，

2. 浏览器本地保存cookie值；

3. 在登录后用户再向服务器发送请求，则带着浏览器本地保存的cookie值，发送给服务器；

4. 服务器在接受到请求后，获取到请求参数（里面带有cookie），服务器把获取的cookie值跟之前服务器生成的cookie比较，发现cookie值相同，则默认是同一个用户再访问服务器，从而实现保持用户登录状态。

##### Session
和 Cookie 作用和用法类似，区别在于 Session 保存在服务器端，且其实现依赖于 Cookie。

### 各自的优劣

##### Cookie
只能存储少量数据，但是不占用服务器资源

##### Session
更加安全、但占用服务器资源。