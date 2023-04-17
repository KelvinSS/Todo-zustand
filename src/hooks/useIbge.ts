import { instanceIbge } from "../api"
import useSWR from 'swr';

export interface Ibge {
    count: number
    page: number
    totalPages: number
    nextPage: number
    previousPage: number
    showingFrom: number
    showingTo: number
    items: Item[]
  }
  
  export interface Item {
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

  const fetcher = (url: any) => instanceIbge.get(url).then((res) => res.data.items)

export const useIbge = () => {  
    return useSWR<Item[], any>('/noticias?qtd=20', fetcher)
}