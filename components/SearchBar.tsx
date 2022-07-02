import { StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface PropsS {
  placeHolder: string;
}

interface PropsC {
  name: string;
}

const CircleAvatar: React.FC<PropsC> = ({ name }) => {
  return (
    <View
      style={{
        marginLeft: 'auto',
        marginRight: 5,
        width: 38,
        height: 38,
        borderRadius: 25,
        backgroundColor: '#3369ff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: '500',
          color: '#fff',
        }}
      >
        {name[0]}
      </Text>
    </View>
  );
};

const SearchBar: React.FC<PropsS> = ({ placeHolder }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={28} color="white" />
      <TextInput
        style={styles.input}
        placeholderTextColor="#596070"
        placeholder={placeHolder}
      />
      <CircleAvatar name="Youhana Sheriff" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    flexDirection: 'row',
    backgroundColor: '#171c26',
    height: 50,
    borderRadius: 22,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 4,
  },
  input: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 4,
  },
});
