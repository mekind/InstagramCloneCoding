import React from 'react';
import {View, StyleSheet, FlatList, ScrollView, Text} from 'react-native';
import {Divider} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Jo,
  Test1,
  Test2,
  Test3,
  LikeIcons,
  Comment,
  PlaneIcon,
  Bookmark,
} from '../assets/icons';
import ButtonWithIcons from './ButtonWithIcons';

const BoardComponent = ({post}) => {
  return (
    <View style={styles.container}>
      {/* <Divider width={1} orientation="vertical" /> */}
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      alignItems: 'center',
      backgroundColor: 'white',
      borderBottomColor: 'white',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <FastImage source={post.profile_picture} style={styles.stories} />
      <Text style={{marginLeft: 5, fontWeight: '700'}}>{post.user}</Text>
    </View>
    <Text style={{fontWeight: '900', marginRight: 10}}>...</Text>
  </View>
);

const PostImage = ({post}) => (
  <View style={{width: '100%', height: 400}}>
    <FastImage
      source={post.imageUrl}
      style={{height: '100%', resizeMode: 'cover'}}
    />
  </View>
);

const PostFooter = ({post}) => (
  <View style={{backgroundColor: 'white'}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row'}}>
        <FastImage source={LikeIcons} style={styles.image} />
        <FastImage source={Comment} style={styles.image} />
        <FastImage source={PlaneIcon} style={styles.image} />
      </View>
      <FastImage source={Bookmark} style={styles.image} />
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{fontWeight: '700', margin: 6}}>{post.user}</Text>
      <Text style={{}}>{post.caption}</Text>
    </View>
    <Text style={{margin: 6}}>댓글 {post.comments.length}개 모두 보기</Text>
    {post.comments.map((comment, idx) => (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{margin: 6, fontWeight: '700'}}>{comment.user}</Text>
        <Text style={{letterSpacing: 1}}>{comment.comment}</Text>
      </View>
    ))}
  </View>
);

export default BoardComponent;

const styles = StyleSheet.create({
  container: {},
  header: {},
  image: {
    width: 25,
    height: 25,
    margin: 7,
  },
  footer: {},
  stories: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: 'orange',
  },
});
