import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import faker from 'faker';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {BACKGROUND, LIGHT_TEXT, ACCENT, PRIMARY} from '../../utils/colors';
import {BOLD, REGULAR, NORMAL} from '../../utils/values';

const {width, height} = Dimensions.get('screen');

const discussion = ({navigation}) => {
  const [data, setData] = useState([]);

  const enableFriendList = () => {
    for (var i = 0; i < 15; i++) {
      setData(item => [...item, {id: i, name: faker.name.firstName(), image: faker.image.avatar()}])
    }
  }

  const EmptyList = () => {
    const message =
      'a friend is quick to listen, slow to judge & always ready to shop';

    return (
      <View style={styles.emptyListContainer}>
        <Fontisto
          name="quote-a-right"
          color="#7E0CF538"
          size={35}
          style={{alignSelf: 'flex-start'}}
        />

        <Text
          style={styles.emptyListText}>
          {message}
        </Text>

        <Fontisto
          name="quote-a-left"
          color="#7E0CF538"
          size={35}
          style={{alignSelf: 'flex-end'}}
        />

        <TouchableOpacity onPress={enableFriendList} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>add friends</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const FriendList = () => {
    return (
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.itemContainer}>
              <Avatar.Image
                size={50}
                source={{uri: item.image}}
                style={styles.itemImage}
              />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <>
      {data.length == 0 ? <EmptyList /> : <FriendList />}
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 1,
    backgroundColor: BACKGROUND,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    marginVertical: 10,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 14,
    fontFamily: NORMAL,
    marginLeft: 10,
  },
  emptyListContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: BACKGROUND,
    paddingHorizontal: 20,
  },
  emptyListText: {
    fontSize: 20,
    fontFamily: BOLD,
    flexWrap: 'wrap',
    textAlign: 'left',
    marginVertical: 10,
    color: PRIMARY,
  },
  buttonContainer: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ACCENT,
    marginTop: 40,
    borderRadius: 6
  },
  buttonText: {
    color: LIGHT_TEXT,
    fontSize: 16,
    fontFamily: BOLD,
    textTransform: 'uppercase',
  },
});

export default discussion;
