import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import gql from "graphql-tag";
import { Query } from 'react-apollo'
export default class DataRender extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
        };
        this.updateInput = this.updateInput.bind(this);
    }
    updateInput(e) {
        this.setState({ name: e.value });
    }
    render() {
        const Fetch_USA = gql`query PresidentQuery($name:String!){
            president(name:$name){
                name
                term
                party
            }
        }`;
        const ReceivedDataParser = ({ data }) => (
            <View style={{ paddingLeft: 20, paddingTop: 20 }}>
                <Text>Name:{data.president && data.president.name}</Text>
                <Text>Party:{data.president && data.president.party}</Text>
                <Text>Term:{data.president && data.president.term}</Text>

            </View>
        );
        // const ViewData = Query(query, {
        //     options: { variables: { name: this.state.name } }
        // })(receivedDataParser)
        // const ViewData = 


        const ViewData = () => (
            <Query query={Fetch_USA}
                variables={{ name: this.state.name }} >
                {({ loading, error, data }) => {
                    if (error) return <Text >Error</Text>
                    if (loading || !data) return <Text>Loading</Text>
                    return <ReceivedDataParser data={data} />
                }}
            </Query >
        );

        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'left' }}>
                    Find Presiden Info {this.state.name}
                </Text>
                <TextInput style={{
                    alignItems: 'stretch'
                }}
                    onChangeText={(name) => this.setState({ name })}
                    style={styles.input} />
                <ViewData />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                    <View style={{ height: 50, width: 50, backgroundColor: 'red' }} />
                    <View style={{ height: 50, width: 50, backgroundColor: 'black' }} />
                    <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
                    <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: '#dddddd',
        height: 50,
        margin: 20,
        marginBottom: 0,
        paddingLeft: 10
    }
});

