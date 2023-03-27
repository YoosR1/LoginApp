import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>
            {/* <Text>UCFGO</Text> */}
            <Image
                style={styles.logo}
                source={require('./assets/Logo.png')}
            ></Image>

            <View style={styles.loginForm}>
                
                <Text style={styles.inputBoxText}>
                    Username:</Text>
                <TextInput style={styles.inputBox}

                />
                <Text style={styles.inputBoxText}>
                    Password:</Text>
                <TextInput style={styles.inputBox}

                />
                <View style={styles.loginButton}>
                    {/* todo: connect login api */}
                    <Pressable /*onPress={onPressLogIn}*/>
                        <Text style={styles.loginButtonText}>Confirm</Text>
                    </Pressable> 
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        alignSelf: 'center',
        top: 50
    },
    loginForm: {
        minWidth: '80%',
        // marginHorizontal: '10%',
        marginVertical: '50%',
        backgroundColor: '#f2bd00',
        borderRadius: 30,
        alignContent: 'center',
        // justifyContent: 'center'
    },
    inputBox: {
        height: 40,
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: '#D9D9D9'
    },
    inputBoxText: {
        marginHorizontal: 10,
        marginVertical: 5,
        fontSize: 25,
        fontWeight: '500'
    },
    loginButton: {
        width: '50%',
        margin: 10,
        padding: 10,
        alignSelf: 'center',
        borderRadius: 30,
        backgroundColor: '#D9D9D9'
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: '500'
    }
});
