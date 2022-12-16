import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RenderListUser from './RenderListUser';
import {IUserProps} from './user';

const listUsers = [
  {
    id: 1,
    name: 'nguyen quoc dat1',
    address: 'Da nang',
  },
  {
    id: 2,
    name: 'nguyen quoc dat2',
    address: 'Da nang',
  },
  {
    id: 3,
    name: 'nguyen quoc dat3',
    address: 'Da nang',
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>ddddd</Text>
      <RenderListUser listUsers={listUsers as IUserProps[]} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
