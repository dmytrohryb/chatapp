import React from 'react'
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default class LoginScreen extends React.Component{
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    continue = () => {
        if(this.state.name !== ''){
            this.props.navigation.navigate('Chat', {name: this.state.name})
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={{marginTop: 64}}>
                    <Image
                        source={require('../assets/chat.png')}
                        style={{width: 100, height: 100, alignSelf: 'center'}}
                    />
                </View>
                <View style={{marginHorizontal: 32}}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='type here...'
                        onChangeText={name => {
                            this.setState({name})
                        }}
                        value={this.state.name}
                    />
                </View>
                <TouchableOpacity onPress={this.continue}>
                    <View style={styles.circleButton}>
                        <Icon
                            size={42}
                            name='right'
                            color='#fff'
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f5f7'
    },
    circle: {
        width: 700,
        height: 700,
        borderRadius: 700/2,
        backgroundColor: '#fff',
        position: 'absolute',
        left: -90,
        top: -250
    },
    header: {
        fontWeight: "bold",
        fontSize: 30,
        color: '#514e5a',
        marginTop: 38
    },
    input: {
        marginTop: 38,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#bab7c3',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#514e5a',
        fontWeight: '400'
    },
    circleButton: {
        width: 58,
        height: 58,
        borderRadius: 58/2,
        backgroundColor: '#00a2e0',
        marginTop: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
