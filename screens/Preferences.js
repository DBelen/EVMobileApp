import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Header from '../components/Header';

export default class Preferences extends Component {
    constructor(){
        super();
        this.state = {
            costValue: 33,
            envValue: 33,
            socValue: 33
        }
    }

    setSliderValues = (s1, s2) => {
        let env = s2 - s1;
        let soc = 100 - (s1 + env);
        this.setState({
            costValue: s1,
            envValue: env,
            socValue: soc
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title='Preferences'/>
                <View style={styles.prefContainer}>
                    <Text style={styles.costText}>Cost: {this.state.costValue}</Text>
                    <Text style={styles.envText}>Environment: {this.state.envValue}</Text>
                    <Text style={styles.socText}>Society: {this.state.socValue}</Text>
                    <MultiSlider
                        values={[30,70]}
                        max={100}
                        onValuesChange={(values) => this.setSliderValues(values[0], values[1])}
                        isMarkersSeparated={false}
                        enabledOne={true}
                        enabledTwo={true}
                        minMarkerOverlapDistance={10}
                    />
                </View>
                <View style={styles.descriptionContainer}>
                    <View style={styles.costDescriptionBox}>
                        <Text>Cost Description</Text>
                        <Text style={styles.right}>[Low]</Text>
                        <Text>You Cost is Trash</Text>
                    </View>
                    <View style={styles.envDescriptionBox}>
                        <Text>Environment Description</Text>
                        <Text style={styles.right}>[Low]</Text>
                        <Text>You Environment is Trash</Text>
                    </View>
                    <View style={styles.socDescriptionBox}>
                        <Text>Society Description</Text>
                        <Text style={styles.right}>[Low]</Text>
                        <Text>You Society is Trash</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.saveBtn}> Save Preferences </Text>
                    </View>
                </TouchableOpacity>
            </View> 
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    prefContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        top: 20
    },
    costText: {
        fontSize: 20,
        color: "#42b6f5",
        fontWeight: "bold",
        paddingBottom: 10
    },  
    envText: {
        fontSize: 20,
        color: "#65CB89",
        fontWeight: "bold",
        paddingBottom: 10
    },  
    socText: {
        fontSize: 20,
        color: "#d4c559",
        paddingBottom: 10
    },
    descriptionContainer: {
        flex: 2,
        top: 0
    },
    costDescriptionBox: {
        borderColor: 'black',
        borderTopWidth: 1,
        paddingRight: '30%'
    },
    envDescriptionBox: {
        borderColor: 'black',
        borderTopWidth: 1,
        paddingRight: '30%'
    },
    socDescriptionBox: {
        borderColor: 'black',
        borderTopWidth: 1,
        paddingRight: '30%'
    },
    right: {
        position: 'absolute',
        right: 0
    },
    saveBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        fontSize: 24,
        fontWeight: "bold",
        color: '#65CB89'
    }
})