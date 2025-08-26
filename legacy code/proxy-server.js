/**
 * Simple CORS proxy for n8n API access
 * Run this on a server that supports CORS
 */

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({
  origin: 'https://tpsmaidscc.github.io',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-N8N-API-KEY']
}));

// Proxy middleware
app.use('/api', createProxyMiddleware({
  target: 'https://n8n-test.teljoy.io',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove /api prefix when forwarding
  },
  onProxyReq: (proxyReq, req, res) => {
    // Forward all headers including API key
    console.log('Proxying request:', req.method, req.url);
  }
}));

app.listen(PORT, () => {
  console.log(`CORS proxy server running on port ${PORT}`);
  console.log(`Use this URL in your n8n editor: http://localhost:${PORT}/api`);
});

// package.json needed:
/*
{
  "name": "n8n-cors-proxy",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0",
    "http-proxy-middleware": "^2.0.0",
    "cors": "^2.8.0"
  }
}
*/
