import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AddIcon, LikeIcons, PlaneIcon } from '../assets/icons';



const ButtonWithIcons = (props) => {
    const ImageName = props.name
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('AddBoard');
        Alert.alert("not ready");
    };

    const getUri = (IamgeName) => {
        switch (ImageName) {
            case 'AddBoard':
                return AddIcon;
            case 'Like':
                return LikeIcons;
            case 'Plane':
                return PlaneIcon;
            default:
                return AddIcon;
        }

    };
    const ImageUri = getUri(ImageName);

    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <FastImage
                source={ImageUri}
                style={styles.image}
            />
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    alarm: {
        marginRight: 16,
        paddingRight: 2,
    },
    image: {
        width: 24,
        height: 24,
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
});

export default ButtonWithIcons;
