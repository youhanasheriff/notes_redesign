import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface Props {
  isList?: boolean;
}

const HomeBody: React.FC<Props> = ({ isList = false, children }) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.container, isList ? styles.forList : {}]}>
        {children}
      </View>
    </ScrollView>
  );
};

export default HomeBody;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    
  },
  forList: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
});
