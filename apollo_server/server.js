const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

const PORT = 8080;
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');

Mongoose.Promise = global.Promise;
var Connection = Mongoose.connect('mongodb://localhost/apollo', { useNewUrlParser: true }, (err) => {
    if (err) {
        return err;
    }
    return true;
});

const seed = require('./graphql/seed');
//uncomment this only on first running of the server to insert data into DB
//seed();

const Schema = require('./graphql/schema');
const Resolvers = require('./graphql/resolvers');
const Connectors = require('./graphql/connectors');

const server = new ApolloServer({
    typeDefs: Schema,
    resolvers: Resolvers,
});

server.applyMiddleware({ app });

app.listen(PORT, () => {
    if (Connection) {
        console.log(
            `GraphQL Server is now running on http://localhost:${PORT}/graphql`
        )
    }
    else {
        console.log("DB Conneciton failes")
    }
});



/**
 * The Process Flows Like this,
 *
 * model.js => containing the schema and model of President
 * connectors.js =>Class with single method to get the president data with name
 * querySchema.js=> Has type definitions for the query type and allowed data retrievals
 * seed.js => bulk data inserter function for the president data
 * resolvers.js => has the code to handle the query received by using the connector
 *
 * query->graphQL server-> resolver->[querySchema(also called context)]->connector ->data
 */