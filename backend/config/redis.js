const redis = require("redis");

const redisClient = redis.createClient({ port: 6379, host: "localhost" });

redisClient.on("connect", () => {
  console.log("Redis Connected");
});

redisClient.on("error", (error) => {
  console.log("Redis Connection error", error);
});

module.exports = redisClient;
