module.exports = ({ env }) => ({
  redis: {
    config: {
      connections: {
        default: {
          host: env('REDIS_HOST'),
          port: env.int('REDIS_PORT'),
          db: 0,
        },
      },
    },
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '1d',
      },
    },
  },
});