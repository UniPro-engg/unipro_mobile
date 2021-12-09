import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

import CustomIcon from '../../components/CustomIcon'
import {PRIMARY_BACKGROUND, PRIMARY, DARK_TEXT} from '../../utils/colors';
import { REGULAR, EXTRA_BOLD, BOLD, APP_NAME } from '../../utils/values';
import Button from '../../components/Button'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <>
      <View style={{flex: 1, backgroundColor: PRIMARY_BACKGROUND, padding: 15}}>
        <Text style={styles.appName}>{APP_NAME}</Text>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.signInText}>Sign in</Text>

          <View style={styles.textInputContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomIcon name='at-email' size={20} color={DARK_TEXT} />
              <TextInput
                style={styles.textInput}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Enter your email address"
                placeholderTextColor={DARK_TEXT}
              />
             </View>
          </View>

          <View style={styles.textInputContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomIcon name='lock' size={20} color={DARK_TEXT} />
              <TextInput
                style={styles.textInput}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Enter your password"
                placeholderTextColor={DARK_TEXT}
                placeholderStyle={{fontFamily: REGULAR, fontSize: 10}}
                secureTextEntry={secureText}
              />
            </View>
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <CustomIcon name={secureText ? 'eye-open' : 'eye-closed'} size={20} color={DARK_TEXT} />
            </TouchableOpacity>
          </View>

          <Button onPress={() => console.log('Pressed Login Button')} text={"Login"} buttonStyles={{width: '100%', marginTop: 30}} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appName: {
    fontSize: 20,
    color: DARK_TEXT,
    fontFamily: EXTRA_BOLD,
    textTransform: 'uppercase'
  },
  signInText: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: DARK_TEXT,
    fontFamily: BOLD
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: PRIMARY_BACKGROUND,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderBottomWidth: 1
  },
  textInput: {
    color: DARK_TEXT,
    paddingLeft: 10,
  },
});

export default Login;
