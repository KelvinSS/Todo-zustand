import * as z from 'zod';

export const newsSchema = z.object({
  id: z.number(),
  tipo: z.string(),
  titulo: z.string(),
  introducao: z.string(),
  data_publicacao: z.string(),
  produto_id: z.number(),
  produtos: z.string(),
  editorias: z.string(),
  imagens: z.string(),
  produtos_relacionados: z.string(),
  destaque: z.boolean(),
  link: z.string()
});



