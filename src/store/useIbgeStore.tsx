import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Item {
    id: number
    tipo: string
    titulo: string
    introducao: string
    data_publicacao: string
    produto_id: number
    produtos: string
    editorias: string
    imagens: string
    produtos_relacionados: string
    destaque: boolean
    link: string    
}

interface IIbgeStore {
    ibge: Item | null;
    checkedNews: Number[];
    setIbge: (ibge: Item) => void;
    resetIbgeStore: () => void;
    handleChecked: (id: number) => void ;
    removeChecked: (id: number) => void;
}

export const useIbgeStore = create(
    persist<IIbgeStore>(
        (set) => ({
            ibge: null,
            checkedNews: [],
            handleChecked: (id: number) : void => {
                set((state) => ({
                  checkedNews: [
                    ...state.checkedNews,
                    id
                ],
                }));
            },
            removeChecked: (id: number) : void => {
                set((state) => ({
                  checkedNews: state.checkedNews.filter((item) => item !== id)
                }));
            },
            setIbge: (ibge): void => {
                set({ ibge })                
            },
            setItem: (ibge: any): void => {
                set({ ibge })
            },
            resetIbgeStore: (): void => {
                set({ ibge: null })
            },
        }),
        {
            name: 'cached-news',
            storage: createJSONStorage(() => AsyncStorage)
        }
    ))

