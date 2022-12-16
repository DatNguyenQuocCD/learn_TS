import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IUserProps} from './user';

const RenderListUser = ({listUsers}: {listUsers: IUserProps[]}) => {
  return (
    <View>
      {listUsers?.length > 0 &&
        listUsers?.map((e, i) => {
          return (
            <View key={i} style={styles.container}>
              <Text>{e?.name}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default RenderListUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
});
