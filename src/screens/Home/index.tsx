import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import { useCallback } from 'react';

import { useIbge } from '../../hooks/useIbge';

import { newsSchema } from '../../validators/newsSchema';

import { Ibge } from '../../ibge';

import { SafeAreaView } from 'react-native';

export function Home() {
  const { data } = useIbge();

  const renderItem = useCallback(({ item }) => {
    return (
      <>
        {newsSchema.safeParse(item).success && (
          <Ibge
            key={item.id}
            item={item}
          />)}
      </>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 30, padding: 20}}>
          TODO
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => String(index)}

        renderItem={renderItem}

        ListEmptyComponent={() => (
          <View >
            <Text >
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text >
              Crie tarefas  organize seus itens a fazer
            </Text>
          </View>
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
});
