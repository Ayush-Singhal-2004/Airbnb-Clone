import { StyleSheet, View } from 'react-native';
import Explore from './app/Explore';

export default function App() {
  return (
    <View style={styles.container}>
      <Explore />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
