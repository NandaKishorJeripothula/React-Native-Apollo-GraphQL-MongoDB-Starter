/** this file will hold our GraphQL schema */
/**
 *This schema will be used to query the details from fontend
 Note : The front end can pick total or some of the attributes provided here to get the details
 Means it will let you know the total queries that the frontend is allowed to call
 */

/**
 * 1.the President type that will define the fields we will be using.
   2.the RootQuery type which tells the schema to allow the president query
3.the schema type which tells the server which types represent the root query
 */
const typeDefinitions = `
schema{
    query: RootQuery
} 
type President {
    name: String,
    term: String,
    party: String,

}
type RootQuery {
   
    president(name: String, party: String, term: String): President
}


`;
module.exports = [typeDefinitions];