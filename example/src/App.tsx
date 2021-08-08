import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import CityList from 'rn-turkey-city-list';

export default function App() {
  const [result, setResult] = React.useState<object | undefined>();

  React.useEffect(() => {
    CityList.getCities().then((data) => {
      setResult(data)
    })
  }, []);

  return (
    <View style={styles.container}>
      {
        result ? result.map((item: { id: String, name: String; }) => {
          return <Text key={item.id} style={{ margin: 5 }}>{item.name}</Text>
        }) : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
