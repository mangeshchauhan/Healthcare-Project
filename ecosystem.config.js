module.exports = {
  apps: [{
    name: 'healthcare-app',
    script: './tailwind.config.js',
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
