import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    Image, 
    TextInput, 
    Pressable, 
    ImageBackground, 
    ScrollViewBase
} from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bgImage}
                source={require('./assets/bgcrop.jpg')}>
                <Image
                    style={styles.logo}
                    source={require('./assets/Logo.png')}
                ></Image>

                <ScrollView horizontal pagingEnabled style={styles.scrollForm}>
                    {/* Login */}
                    <View style={styles.login}>
                        <Text>Login Placeholder</Text>
                        <Text style={styles.inputBoxText}>
                            Username:</Text>
                        <TextInput style={styles.inputBox}

                        />
                        <Text style={styles.inputBoxText}>
                            Password:</Text>
                        <TextInput style={styles.inputBox}

                        />
                        <Text style={styles.smallText}>
                            {/* todo: link to register page */}
                            Don't have an account? <Text style={{textDecorationLine: 'underline'}}>Register</Text>
                        </Text>
                        <View style={styles.loginButton}>
                            {/* todo: connect login api */}
                            <Pressable /*onPress={onPressLogIn}*/>
                                <Text style={styles.loginButtonText}>Confirm</Text>
                            </Pressable> 
                        </View>
                    </View>
                    {/* Register */}
                    <View style={styles.login}>
                        <Text>Register Placeholder</Text>
                        <Text style={styles.inputBoxText}>
                            Username:</Text>
                        <TextInput style={styles.inputBox}

                        />
                        <Text style={styles.inputBoxText}>
                            Password:</Text>
                        <TextInput style={styles.inputBox}

                        />
                        <Text style={styles.inputBoxText}>
                            Name:</Text>
                        <TextInput style={styles.inputBox}

                        />
                        <Text style={styles.inputBoxText}>
                            Email:</Text>
                        <TextInput style={styles.inputBox}

                        />
                        <Text style={styles.smallText}>
                            {/* todo: link to login page */}
                            Already have an account? <Text style={{textDecorationLine: 'underline'}}>Log In</Text>
                        </Text>
                        <View style={styles.loginButton}>
                            {/* todo: connect login api */}
                            <Pressable /*onPress={onPressLogIn}*/>
                                <Text style={styles.loginButtonText}>Confirm</Text>
                            </Pressable> 
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        alignSelf: 'center',
        top: 50
    },
    bgImage: {
        // objectFit: 'stretch',
        // flex: 1,
        height: '100%',
        position: 'absolute',
        tintColor: '#000'
    },
    scrollForm: {
        width: 350,
        height: 500,
        marginHorizontal: '10%',
        marginTop: '50%',
        marginBottom: '30%',
        backgroundColor: '#F2BD00',
        borderRadius: 30,
        // alignSelf: 'center',
        // alignContent: 'center',
        // justifyContent: 'center',
    },
    login: {
        // flex: 1,
        // margin: 50,
        width: 300,
        margin: 25,
        alignContent: 'center',
        justifyContent: 'center'
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
        marginVertical: 3,
        fontSize: 25,
        fontWeight: '500'
    },
    smallText: {
        fontSize: 20,
        textAlign: 'center'
    },
    loginButton: {
        // width: '50%',
        margin: 10,
        padding: 10,
        alignSelf: 'center',
        // justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#D9D9D9'
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: '500'
    }
});
