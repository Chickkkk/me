module.exports = {
  apps: [
    {
      name: 'qkun-fun-me',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
