import * as React from 'react';
import ButtonWithIcons from '../components/ButtonWithIcons';
import {ScrollView, View, RefreshControl, StyleSheet} from 'react-native';
import StoriesComponent from '../components/StoriesComponent';
import BoardComponent from '../components/BoardComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Jo, Test1, Test2, Test3, Testuser3} from '../assets/icons';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Posts = [
  {
    id: 1,
    user: 'jo_glass',
    profile_picture: Jo,
    lieks: 7870,
    caption: '너무 예쁜 풍경들. 그리고 나.',
    imageUrl: Test1,
    comments: [
      {
        user: 'seulgi',
        comment: '정말 멋지다.@@@@@@',
      },
      {
        user: 'yenaaa',
        comment: 'lovely!😍😍😍😍',
      },
    ],
  },
  {
    id: 2,
    user: 'jo_glass',
    profile_picture: Jo,
    lieks: 7870,
    caption: '너무 예쁜 풍경들. 그리고 나.',
    imageUrl: Test3,
    comments: [
      {
        user: 'seulgi',
        comment: '정말 멋지다.',
      },
      {
        user: 'yenaaa',
        comment: 'lovely!',
      },
    ],
  },
  {
    id: 3,
    user: 'yeeena',
    profile_picture: Testuser3,
    lieks: 7870,
    caption: '너무 예쁜 풍경들. 그리고 나.',
    imageUrl: Test2,
    comments: [
      {
        user: 'seulgi',
        comment: '정말 멋지다.@@@@@@',
      },
      {
        user: 'yenaaa',
        comment: 'lovely!😍😍😍😍',
      },
    ],
  },
];

const HomeScreen = ({}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        // contentContainerStyle={{flex: 1}}
        style={{flexDirection: 'column'}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{backgroundColor: 'red'}}>
          {/* 친구 스토리 게시 */}
          <View style={styles.stories}>
            <StoriesComponent />
          </View>
        </View>
        {/* 게시글 목록 */}
        {Posts.map((post, index) => (
          <BoardComponent post={post} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stories: {
    flex: 2,
    backgroundColor: 'white',
    borderBottomWidth: 0.2,
  },
  boards: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default HomeScreen;
