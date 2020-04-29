import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  MaskedViewIOS,
  Animated,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={{flex: 1}}>
        <MaskedViewIOS
          style={{flex: 1}}
          maskElement={
            <View style={styles.centered}>
              <Animated.Image
                source={require('./assets/twitter_logo.png')}
                style={[{width: 1000}]}
                resizeMode="contain"
              />
            </View>
          }></MaskedViewIOS>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
