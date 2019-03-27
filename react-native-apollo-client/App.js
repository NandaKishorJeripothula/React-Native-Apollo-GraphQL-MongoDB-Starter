import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//These are for the apollo client-server bridge
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import DataRender from './dataRender.component';
export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={Client}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          padding: 20,
          margin: 10
        }}>
          <Text>Hey Welcome to the GraphQL World</Text>
          <DataRender />
        </View>
      </ApolloProvider>

    );
  }
}
//Create a network instance.
const Client = new ApolloClient({
  uri: 'http://192.168.43.90:8080/graphql',

})
