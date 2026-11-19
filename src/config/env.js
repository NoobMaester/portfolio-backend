import "dotenv/config";

export default {
	PORT: process.env.PORT || 4400,
	NODE_ENV: process.env.NODE_ENV || "development"
};