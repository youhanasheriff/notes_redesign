import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
  content: string;
  isList?: boolean;
}

const screenWidth = Dimensions.get('screen').width;

const NotesHolder: React.FC<Props> = ({ title, content, isList = false }) => {
  const numberOfLines = isList ? 2 : 8;
  return (
    <TouchableOpacity>
      <View style={[styles.container, isList ? styles.containerForList : {}]}>
        <View
          style={[
            styles.content,
            isList ? { maxWidth: screenWidth, maxHeight: 70 } : {},
          ]}
        >
          <Text style={styles.head}>{title}</Text>
          <Text style={styles.text} numberOfLines={numberOfLines}>
            {content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotesHolder;

const styles = StyleSheet.create({
  container: {
    margin: 14,
    padding: 14,
    backgroundColor: '#171c26',
    borderRadius: 18,
    marginHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 15,
    marginBottom: 10,
  },
  containerForList: {
    marginVertical: 10,
    marginHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 15,
    marginBottom: 10,
  },
  content: {
    minHeight: 100,
    maxHeight: 200,
    maxWidth: screenWidth / 2 - 52,
  },
  head: {
    color: '#fff',
    fontWeight: '500',
    paddingBottom: 5,
    fontSize: 20,
  },
  text: {
    color: '#e3e3e356',
    fontSize: 18,
  },
});
