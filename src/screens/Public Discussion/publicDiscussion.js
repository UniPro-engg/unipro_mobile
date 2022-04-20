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
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {BACKGROUND, LIGHT_TEXT, ACCENT, PRIMARY, PRIMARY_BACKGROUND, GREY, DARK_TEXT, CAPTION} from '../../utils/colors';
import {BOLD, NORMAL} from '../../utils/values';

const {width, height} = Dimensions.get('screen');

const discussion = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    enableFriendList()
  }, [])

  const enableFriendList = () => {
    for (var i = 0; i < 15; i++) {

      setData(item => [
        ...item,
        {
          name: faker.name.firstName(),
          image: faker.image.avatar(),
          date: faker.date.past(),
          caption: faker.lorem.paragraph(),
          liked: Math.random() > 0.5 ? true : false
        },
      ]);

    }
  };

  const EmptyList = () => {
    const message = "couldn't load data :(";

    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.emptyListText}>{message}</Text>

        <TouchableOpacity
          onPress={enableFriendList}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>refresh</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const FriendList = () => {
    const renderListHeader = () => (
      <>
        <View style={styles.listHeader}>
          <Text style={styles.listText}>what's on your mind</Text>
        </View>
      </>
    )

    const renderList = ({item}) => (
      <>
        <View style={styles.mainContainer}>

          <View style={styles.itemDetailsContainer}>
            <Avatar.Image size={40} source={{uri: item.image}} />

            <View style={styles.itemPostDetailsContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDate}>{moment(item.date.toString()).fromNow()}</Text>
            </View>
          </View>

          <Text style={styles.itemCaption}>{item.caption}</Text>

          <View style={styles.actionsContainer}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name={item.liked ? "md-arrow-up-circle" : "md-arrow-up-circle-outline"} size={32} color={item.liked ? ACCENT : DARK_TEXT} />
              <Fontisto name="comment" size={20} color={DARK_TEXT} style={{marginLeft: 15}} />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome name="share" size={20} color={DARK_TEXT} />
              <Entypo name="dots-three-horizontal" size={20} color={DARK_TEXT} style={{marginLeft: 15}} />
            </View>   

          </View>

        </View>
      </>
    )

    return (
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
        renderItem={item => renderList(item)}
      />
    );
  };

  return <>{data.length == 0 ? <EmptyList /> : <FriendList />}</>;
};

const styles = StyleSheet.create({
  listHeader: {
    backgroundColor: PRIMARY_BACKGROUND,
    width,
    justifyContent: "center",
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 5
  },
  listText: {
    fontSize: 22,
    color: GREY,
    fontFamily: NORMAL,
    textTransform: 'lowercase'
  },
  mainContainer: {
    paddingTop: 15,
    backgroundColor: PRIMARY_BACKGROUND,
    paddingLeft: 10,
    paddingRight: 5
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemPostDetailsContainer: {
    marginLeft: 10
  },
  itemName: {
    fontSize: 15,
    fontFamily: NORMAL,
    color: DARK_TEXT
  },
  itemDate: {
    fontSize: 12,
    fontFamily: NORMAL,
    color: GREY
  },
  itemCaption: {
    fontSize: 15,
    fontFamily: NORMAL,
    color: CAPTION,
    marginTop: 6
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginTop: 8
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
    borderRadius: 6,
  },
  buttonText: {
    color: LIGHT_TEXT,
    fontSize: 16,
    fontFamily: BOLD,
    textTransform: 'uppercase',
  },
});

export default discussion;
