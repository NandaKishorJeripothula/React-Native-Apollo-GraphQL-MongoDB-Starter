/*
 this file will hold our connector. A connector is the piece of code that links a GraphQL server to a specific backend (eg. MySQL, MongoDB, S3, neo4j).
*/
/**This will be the bridge between graphQL Server adn MonogoDB Instance */

const PresidentModel = require('./model');

class President {
    constructor() {
        this.findPresident = (name) => {
            const person = PresidentModel.findOne({ name }, (error, data) => {
                return data;
            });
            return person;
        };
    }
    findPresident() {

    }
}

module.exports = { President };
/**
 * Our connector is a JavaScript class with a single method: findPresident. findPresident takes a name as an argument, and searches our database for that person and return him / her. We then export the class for use in our resolver.
 */