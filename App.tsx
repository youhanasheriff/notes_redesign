import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Header, NotesHolder, SearchBar } from './components';
import { HomeBody } from './containers';

export default function App() {
  const [isList, setIsList] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then(data => setData(data.quotes));
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="light" />
        <Header title="Notes" changeTo={() => setIsList(!isList)} />
        <SearchBar placeHolder="Search your notes" />
        <HomeBody isList={isList}>
          {data.map((d: any) => (
            <NotesHolder
              key={d.id}
              isList={isList}
              title={d.author}
              content={d.quote}
            />
          ))}
        </HomeBody>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e121b',
  },
});
