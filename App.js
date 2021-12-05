import React from 'react';
import {View, Text} from 'react-native';

import { APP_NAME } from './src/utils/values';
import {PRIMARY_BACKGROUND, DARK_TEXT} from './src/utils/colors'

const App = () => {
  return(
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: PRIMARY_BACKGROUND}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: DARK_TEXT}}>{APP_NAME}</Text>
      </View>
    </>
  )
};

export default App;