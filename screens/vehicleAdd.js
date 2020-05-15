import React, {Component} from 'react';
import {Alert, Button, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TouchableHighlightBase} from 'react-native';
import { TextInput } from 'react-native';
import Header from '../components/Header';
import axiosInstance from '../components/axiosInstance';

import Background from '../components/Background'

export default class Vehicles extends Component {
    state = {
        carData: '',
        responseData: '',
        status: '',
        index: 0,
        car: '',
        nickname: '',
        make: '',
        model: '',
        year: ''
    };

    setCars = (value, index) => {
        this.setState({
            index: index,
            car: value,
            nickname: this.state.carData[index]["nickname"],
            make: this.state.carData[index]["manufacturer"],
            model: this.state.carData[index]["model"],
            year: this.state.carData[index]["year"]
        })
    }

    initCars = () => {
        this.setState({
            nickname: this.state.carData[this.state.index]["nickname"],
            make: this.state.carData[this.state.index]["manufacturer"],
            model: this.state.carData[this.state.index]["model"],
            year: this.state.carData[this.state.index]["year"]
        })
    }

    getData = async () => {
        if (this.state.carData === ''){
            let res = await axiosInstance.get(
                '/api.php',
                {params : {version: 1, collection : 'cars'}}
                )
            this.setState({carData: res.data});
            this.initCars();
        }
    }

    postData = async () => {
        let res = await axiosInstance.post(
            '/update.php',
            {
                nickname:'Vinh',
                manufacturer:'Tesla',
                model:'Model S',
                year:'2018'
            },
            {data: {collection: 'cars'}}
        )
        this.setState({responseData: res.data});
        Alert.alert('Car Added!');
    }

    render() {
        //TESTING POST
        // this.postData();

        return (
            <View style={styles.container}>
                <Header title='Vehicles'/>
                <Background/>
                <View style={styles.container}>

                    <View style={styles.container}>
                        <Text style={styles.headingText}>Vehicle Information</Text>
                        <View style={styles.infoView}>
                            <Text style={styles.infoTextLeft}>Nickname</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.infoTextLeft}>Make</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.infoTextLeft}>Model</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.infoTextLeft}>Year</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </View>
                    </View>

                    <View style={styles.optionsContainer}>
                        <Text style={styles.headingText}>Vehicle Options</Text>
                        <View style={styles.buttonContainer}>
                            <View style={{width: "100%"}}>
                                <Button
                                title="Save"
                                onPress={this.postData}
                                />
                            </View>
                        </View>
                    </View>

                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    optionsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headingText: {
        paddingTop: 10,
        fontSize: 24,
        color: '#999999',
    },
    infoTextLeft: {
        flex: 1,
        textAlign: 'left',
        paddingTop: 15,
        paddingLeft: 16,
        fontSize: 18,
    },
    infoTextRight: {
        flex: 1,
        textAlign: 'right',
        paddingTop: 15,
        paddingRight: 16,
        fontSize: 18,
    },
    infoView: {
        flexDirection: 'row',
    },
})