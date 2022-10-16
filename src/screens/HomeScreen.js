import * as React from 'react';
import ButtonWithIcons from '../components/ButtonWithIcons';
import {ScrollView, View, RefreshControl, StyleSheet} from 'react-native';
import StoriesComponent from '../components/StoriesComponent';
import BoardComponent from '../components/BoardComponent';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

function HomeScreen() {
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
        <View style={{flex: 1}}>
          {/* 친구 스토리 게시 */}
          <View style={styles.stories}>
            <StoriesComponent />
          </View>
          {/* 게시글 목록 */}
          <View style={styles.boards}>
            <BoardComponent />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stories: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
  },
  boards: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default HomeScreen;
