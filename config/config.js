module.exports = {
  development: {
      username: process.env.DEVELOPMENT_DATABASE_USERNAME,
      password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
      database: process.env.DEVELOPMENT_DATABASE_NAME,
      host: process.env.DEVELOPMENT_HOST_NAME,
      dialect: "mysql",
  },
  staging: {
      username: process.env.STAGING_DATABASE_USERNAME,
      password: process.env.STAGING_DATABASE_PASSWORD,
      database: process.env.STAGING_DATABASE_NAME,
      host: process.env.STAGING_HOST_NAME,
      dialect: "mysql",
  },
  production: {
      username: process.env.PRODUCTION_DATABASE_USERNAME,
      password: process.env.PRODUCTION_DATABASE_PASSWORD,
      database: process.env.PRODUCTION_DATABASE_NAME,
      host: process.env.PRODUCTION_HOST_NAME,
      dialect: "mysql",
  },
};
