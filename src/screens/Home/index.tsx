import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import { useCallback } from 'react';

import { useIbgeStore } from '../../store/useIbgeStore';
import { useIbge } from '../../hooks/useIbge';

import { newsSchema } from '../../validators/newsSchema';

import { Ibge } from '../../ibge';



export function Home() {
  const { data } = useIbge();

  const renderItem = useCallback(({ item }) => {
    return (
      <>
        {newsSchema.safeParse(item).success && (
          <Ibge
            key={item.id}
            item = {item}
          />)}
      </>
    );
  }, []);

  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <FlatList
          data={data}
          keyExtractor={(_, index) => String(index)}
          
          renderItem={renderItem}

          ListEmptyComponent={() => (
            <View >
              <View>
                
              </View>
              <Text >
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text >
                Crie tarefas  organize seus itens a fazer
              </Text>

            </View>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
