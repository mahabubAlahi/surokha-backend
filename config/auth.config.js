module.exports = {
    accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    accessTokenLifeSpan: process.env.JWT_ACCESS_TOKEN_AGE,
    refreshTokenLifeSpan: process.env.JWT_REFRESH_TOKEN_AGE
};