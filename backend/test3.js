require('dotenv').config();
const http = require('https');
const apiKey = process.env.NV_API_KEY || process.env.NVIDIA_API_KEY;
if (!apiKey) {
  console.error('Please set NV_API_KEY in your .env file');
  process.exit(1);
}

const data = JSON.stringify({
  model: 'deepseek-ai/deepseek-v3.2',
  messages: [{ role: 'user', content: 'Say hello in json' }],
  stream: true
});

const options = {
  hostname: 'integrate.api.nvidia.com',
  path: '/v1/chat/completions',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  res.on('data', d => process.stdout.write(d));
});

req.on('error', error => console.error(error));
req.write(data);
req.end();
