import React, {Component, useState} from 'react';
import {Alert, Button, View, Text, TextInput, StyleSheet, Image} from 'react-native';
import Background from '../components/Background';

export default function RegisterCharger({navigation}) {
    return(
        <View style={styles.container}>
            <Background/>
            <Text>Hello World</Text>
            <Button
                title="Go to Drawer"
                color="#f04646"
                onPress={() => navigation.navigate('Home')}
            />
            <View style={styles.infoView}>
                <Text style={styles.infoTextLeft}>Nickname</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={(val) => this.setState({nickname: val})}
                    value={"Hello"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    input: {
        justifyContent: 'space-around',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#65CB87',
        textAlign: 'left',
        padding: 8,
        margin: 10,
        width: 200,
        fontSize: 18,
    },
    infoView: {
        alignItems: 'center',
        // justifyContent: 'center'
    },
})