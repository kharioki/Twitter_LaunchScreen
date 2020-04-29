import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, Animated} from 'react-native';
import MaskedView from '@react-native-community/masked-view';

const App = () => {
  const [loadingProgress, setLoadingProgress] = useState(new Animated.Value(0));
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 400,
    }).start(() => {
      setAnimationDone(true);
    });
  }, []);

  const colorLayer = animationDone ? null : (
    <View style={[StyleSheet.absoluteFill, {backgroundColor: '#00acee'}]} />
  );

  const whiteLayer = (
    <View style={[StyleSheet.absoluteFill, {backgroundColor: '#fff'}]} />
  );

  const imageScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 15, 100],
          outputRange: [0.1, 0.06, 16],
        }),
      },
    ],
  };

  const opacity = {
    opacity: loadingProgress.interpolate({
      inputRange: [0, 25, 50],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    }),
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={{flex: 1}}>
        {colorLayer}
        <MaskedView
          style={{flex: 1}}
          maskElement={
            <View style={styles.centered}>
              <Animated.Image
                source={require('./assets/twitter_logo.png')}
                style={[{width: 1000}, imageScale]}
                resizeMode="contain"
              />
            </View>
          }>
          {whiteLayer}
          <Animated.View style={[opacity, styles.centered]}>
            <Text>Kharioki</Text>
          </Animated.View>
        </MaskedView>
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
