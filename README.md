# Mocks json-server

## Run in Local
How to create & deploy a json-server [link](https://chrisdevcode.hashnode.dev/how-to-create-and-deploy-a-json-server)
- Create empty folder
- run command >> npm init -y
- npm install json-server json-server-auth json-serve cors
- npm install -D nodemon
- npm run start


# Mocks - Json-server
- Installation : only for dev mode in test
- Run command >> npm install express json-server json-server-auth --save-dev

    "mock:server": "json-server --watch mocks/data.json",
    "mock:server:route": "json-server --watch mocks/data.json --routes mocks/routes.json",
    "mock:generate": "ts-node mocks/generate.js > mocks/data.json",
    "mock:server:auth": "json-server --watch mocks/data.json -m ./node_modules/json-server-auth",
    "mock:server:auth:route": "json-server --watch mocks/data.json -m ./node_modules/json-server-auth --routes mocks/routes.json",
    "mock:server:route": "json-server --watch mocks/data.json -m ./node_modules/json-server-auth --routes mocks/routes.json --static mocks/public"



