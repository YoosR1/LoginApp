import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    Image, 
    TextInput, 
    Pressable, 
    ImageBackground, 
    Dimensions,
    Animated
} from 'react-native';
import FormSelectorBtn from './components/FormSelectorBtn.js';

const {windowHeight, windowWidth} = Dimensions.get('window');
const { width } = Dimensions.get('window');

export default function App() {
    const animation = useRef(new Animated.Value(0)).current;
    const scrollView = useRef();

    const interpolateL = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)'],
    });
    const interpolateR = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)'],
    });
    

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bgImage}
                source={require('./assets/bgcrop.jpg')}>
                <Image
                    style={styles.logo}
                    source={require('./assets/Logo.png')}
                ></Image>
                
                <View style={styles.form}>
                    {/* <View>
                        <FormSelectorBtn
                            style={styles.formSelL}
                            backgroundColor={interpolateL}
                            title='Login'
                            onPress={() => scrollView.current.scrollTo({ x: 0 })}
                        />
                        <FormSelectorBtn
                            style={styles.formSelR}
                            backgroundColor={interpolateR}
                            title='Register'
                            onPress={() => scrollView.current.scrollTo({ x: windowWidth })}
                        />
                    </View> */}
                    <ScrollView
                        ref={scrollView}
                        horizontal 
                        pagingEnabled 
                        // scrollEnabled={false}
                        // nestedScrollEnabled={false}
                        style={styles.scrollForm}>
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
                </View>
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
        top: '5%'
    },
    bgImage: {
        objectFit: 'fill',
        // flex: 1,
        height: '100%',
        // width: windowWidth,
        position: 'absolute',
        tintColor: '#000'
    },
    form: {
        flex: 1,
        marginHorizontal: '10%',
        marginTop: '50%',
        marginBottom: '30%',
        backgroundColor: '#F2BD00',
        borderRadius: 30,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    scrollForm: {
        // flex: 2
    },
    login: {
        flex: 1,
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
