
## What package.json does
The package.json file is used in Node.js projects to store metadata about the project. It includes information like the project name, version, dependencies, and scripts such as start and dev. It allows npm to manage and run the project efficiently.

---

## What process.env is
process.env is a built-in Node.js object that gives access to environment variables. These are values set outside the code, such as PORT or NODE_ENV. If a variable is not set, we can provide a default value in the code.

---

## What npm start runs
npm start runs the command defined in the start script inside package.json. In this project, it runs:
node index.js