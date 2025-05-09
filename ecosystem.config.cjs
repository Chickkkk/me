module.exports = {
  apps: [
    {
      name: 'seikonn_me',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
