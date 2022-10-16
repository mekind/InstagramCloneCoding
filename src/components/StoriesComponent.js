import ButtonWithIcons from './ButtonWithIcons';
import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import ProfileComponent from './ProfileComponent';
import {
  Jo,
  Test1,
  Test2,
  Test3,
  Testuser1,
  Testuser2,
  Testuser3,
  Testuser4,
  Testuser5,
} from '../assets/icons';
import FastImage from 'react-native-fast-image';

const testusers = [
  {
    image: Testuser1,
    username: 'jo_glass',
  },
  {
    image: Testuser2,
    username: 'seulgi',
  },
  {
    image: Testuser3,
    username: 'yenaaa',
  },
  {
    image: Testuser4,
    username: 'testuser4dfsdfsdfs',
  },
  {
    image: Testuser5,
    username: 'testuser5',
  },
  {
    image: Testuser1,
    username: 'testuser6',
  },
  {
    image: Testuser2,
    username: 'testuser7',
  },
  {
    image: Testuser3,
    username: 'testuser8',
  },
];

const handleClick = () => {
  return;
};

const StoriesComponent = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    name="stories"
    contentContainerStyle={styles.storiescontent}>
    {testusers.map((story, index) => (
      <View style={{alginItems: 'center'}}>
        <FastImage
          source={story.image}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={{alignSelf: 'center', marginTop: 0, marginBottom: 4}}>
          {story.username.length > 11
            ? story.username.slice(0, 10) + '...'
            : story.username}
        </Text>
      </View>
    ))}
  </ScrollView>
);

export default StoriesComponent;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
  },
  storiescontent: {
    backgroundColor: 'white',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    padding: 30,
    margin: 5,
    marginBottom: 1,
    borderWidth: 3,
    borderColor: 'orange',
  },
  story: {},
});
