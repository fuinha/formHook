/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Form from './components/Forms';
import Input from './components/Inputs';

import PostList from './components/PostList';

const App: () => React$Node = () => {  // eslint-disable-line

  function onPressLearnMore(){

  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
    
          
              <Form>
              <View>
                <Input name="name" />
                <Input name="email" />
                <Input name="password" />
               </View>
                <Button
                  onPress={onPressLearnMore}
                  title="Learn"
                  color="#841584"
                  accessibilityLabel="Learn  button"
                />
              </Form>
     <PostList></PostList>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
