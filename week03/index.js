// Identification Header
console.log("Nicholas Knight");
console.log("Course: CS31103");
console.log("Week 3");

// Runtime Information
console.log("\nNode Version:", process.version);
console.log("Current Date/Time:", new Date());

// Environment Variables with Defaults
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

// Simple Data Object
const appConfig = {
  port: PORT,
  environment: NODE_ENV,
  startedAt: new Date()
};

// Print formatted JSON
console.log("\nApp Configuration:");
console.log(JSON.stringify(appConfig, null, 2));