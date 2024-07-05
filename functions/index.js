const functions = require('firebase-functions');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'http://18.212.119.213:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', 
  },
  secure: false
}));

exports.apiProxy = functions.https.onRequest(app);
