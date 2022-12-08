import * as React from "react";
import { Text, View, RefreshControl, StyleSheet, ScrollView, Dimensions, TouchableWithoutFeedback } from "react-native";

const SearchScreen = ({navigation,route}) => {
  const { width, height } = Dimensions.get("window");
  const datas = [
    {
      "color": "blue",
      "type": "p",
      "details": [
        {
          "color": "blue",
          "type": "p",
        },
        {
          "color": "red",
          "type": "p",
        },
        {
          "color": "red",
          "type": "p",
        },
        {
          "color": "blue",
          "type": "p",
        },
      ],
    },
    {
      "color": "green",
      "type": "v",
    },
    {
      "color": "green",
      "type": "v",
    },
    {
      "color": "blue",
      "type": "p",
      "details": [
        {
          "color": "blue",
          "type": "p",
        },
        {
          "color": "red",
          "type": "p",
        },
        {
          "color": "red",
          "type": "p",
        },
        {
          "color": "blue",
          "type": "p",
        },
      ],
    },
  ];
  const a = () =>{
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {/*<View style={{backgroundColor : "blue", width: width/3, height: width/3}}>*/}
          {/*  <Text>hihi</Text>*/}
          {/*</View>*/}
          {datas.map(({ color, type, details }) => {
            console.log(color);


            if (type == "p"){
              return (<View style={{ width: width / 3 * 2, height: width / 3 *2 ,flexDirection : "", flexWrap: "wrap"}}>
                {details.map(({ color, type }) => {
                  console.log('hihi')
                  console.log(color)
                  return (
                    <TouchableWithoutFeedback onPress={a}>
                      <View style={{ backgroundColor: color, width: width / 3, height: width / 3 }}>
                        <Text>{type}</Text>
                      </View>
                    </TouchableWithoutFeedback>)
                }

                )}
              </View>);
            }


            else
              return (<View style={{ backgroundColor: color, width: width / 3, height: width / 3 * 2 }}>
                <Text>{type}</Text>
              </View>);

          })}
        </View>


      </ScrollView>
    </View>

  );
};

export default SearchScreen;

