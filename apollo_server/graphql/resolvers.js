/**
 * this file will hold our resolver. Resolvers tell our server how to respond to a query. We will be writing a basic resolver for our app.
 */

/**
 * In this file, we create a resolveFunctions object. In this object we create a RootQuery object.
 *  This RootQuery object correlates directly to the schema we declared in schema.js.
 *  The RootQuery object contains a single method, president, which takes three arguments.
 *  The first argument is the rootValue, the second argument is the actual query that we will
 *  be getting, and the third is the context.
 */
const PresidentModel = require('./model')

const resolveFunctions = {
    RootQuery: {
        president(_, { name }, ) {
            const person = PresidentModel.findOne({ name }, (error, data) => {
                return data;

            });
            return person;
        },
    },
};

module.exports = resolveFunctions;