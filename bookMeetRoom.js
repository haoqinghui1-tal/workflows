const http = require('http');
console.log('log')
// 选项设置
// const options = {
//   hostname: 'www.example.com', // 这里替换为你想请求的域名
//   port: 80, // HTTP端口80，HTTPS则是443
//   path: '/', // 请求路径
//   method: 'GET' // 请求方法
// };

// // 创建请求
// const req = http.request(options, (res) => {
//   console.log(`状态码: ${res.statusCode}`);
//   console.log(`响应头: ${JSON.stringify(res.headers)}`);
//   res.setEncoding('utf8');

//   res.on('data', (chunk) => {
//     console.log(`响应主体: ${chunk}`);
//   });

//   res.on('end', () => {
//     console.log('响应中已无更多数据。');
//   });
// });

// req.on('error', (e) => {
//   console.error(`请求遇到问题: ${e.message}`);
// });

// // 结束请求
// req.end();
