import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Divider, Icon, IconElement, Layout, List, ListItem, Text } from '@ui-kitten/components';

import { api } from "./api";
import SpeechCard from "./speech";

export default function Page() {

  const [isListening, setIsListening] = useState(false);
  const [textListening, setTextListening] = useState<string>('E se eu cair a tua mao vai me levantar');
  const [dataList, setDataList] = useState([]);

  const getData = useCallback(async () => {
    const texto = textListening.replace(' ', '%20')
    const resp: any = await api.get(`/search/findPalco?texto=${texto}`);
    console.log('resp', resp)
    setDataList(resp.data.response.docs)
  }, [])

  const renderItem = ({ item, index }: { item: any; index: number }): React.ReactElement => (
    <ListItem
      title={`${item.m}`}
      description={`${item.a}`}
    />
  );

  const HomeScreen = () => (
    <Layout style={styles.container}>

      <List
        style={styles.containerList}
        data={dataList}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />

      <SpeechCard textListening={textListening}  />
    </Layout>
  );

  useEffect(() => {
    getData()
  }, [])


  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <HomeScreen />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerList: {
    flex: 1,
    flexDirection: 'column',
    margin: 15
  }
});
