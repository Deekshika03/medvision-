require('dotenv').config();
const axios = require('axios');
(async () => {
  try {
    const apiKey = process.env.NV_API_KEY || process.env.NVIDIA_API_KEY;
    if (!apiKey) {
      console.error('Please set NV_API_KEY in your .env file');
      process.exit(1);
    }
    const response = await axios.post('https://integrate.api.nvidia.com/v1/chat/completions', {
      model: 'deepseek-ai/deepseek-r1',
      messages: [{ role: 'user', content: 'Say hello in json' }],
      max_tokens: 50
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });
    console.log(response.data);
  } catch (error) {
    console.log('ERROR:', error.response ? error.response.data : error.message);
  }
})();
