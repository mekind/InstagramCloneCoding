import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SearchBar} from 'react-native-screens';
import {
  AddIcon,
  DefaultProfile,
  HomeIcon,
  LikeIcons,
  PlaneIcon,
  ReelsIcon,
  SearchIcon,
  ShopIcon,
} from '../assets/icons';

const ButtonWithIcons = props => {
  const ImageName = props.name;
  const navigation = useNavigation();
  const handleClick = () => {
    // console.log(ImageName);
    navigation.navigate(`${ImageName}`);
  };

  const getUri = ImageName => {
    switch (ImageName) {
      case 'AddBoard':
        return AddIcon;
      case 'Like':
        return LikeIcons;
      case 'Plane':
        return PlaneIcon;
      case 'DefaultProfile':
        return DefaultProfile;
      case 'Home':
        return HomeIcon;
      case 'Search':
        return SearchIcon;
      case 'Reels':
        return ReelsIcon;
      case 'Shop':
        return ShopIcon;
      case 'Profile':
        return DefaultProfile;
      default:
        return AddIcon;
    }
  };

  const getStyle = ImageName => {
    switch (ImageName) {
      // case 'Plane':
      //   return styles.lastimage;
      case 'Home':
      case 'Search':
      case 'Reels':
      case 'Shop':
      case 'Profile':
        return styles.bottom;
      case 'DefaultProfile':
        return styles.user;
      default:
        return styles.image;
    }
  };

  const ImageUri = getUri(ImageName);
  const ImageStyle = getStyle(ImageName);

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <FastImage source={ImageUri} style={ImageStyle} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  alarm: {
    marginRight: 16,
    paddingRight: 2,
  },
  user: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 10,
    alignSelf: 'center',
  },
  image: {
    marginRight: 20,
    // paddingRight: 20,
    width: 22,
    height: 22,
  },
  lastimage: {
    width: 22,
    height: 22,
  },
  unreadContainer: {
    position: 'absolute',
    right: 0,
    // top: -2.5,
    // backgroundColor: 'pink',
    flex: 1,
  },
  unread: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  bottom: {
    marginLeft: 15,
    marginRight: 35,
    // padding: 15,
    alignSelf: 'center',
    width: 30,
    height: 30,
    // backgroundColor: 'green',
  },
});

export default ButtonWithIcons;
