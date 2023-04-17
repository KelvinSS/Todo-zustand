import { Item } from './../useIbge';

describe('useIbge', () => {
  it('should return a list of news', async () => {
    const expectedResult: Item[] = [
      {
        id: 1,
        tipo: 'notícia',
        titulo: 'Título da notícia',
        introducao: 'Introdução da notícia',
        data_publicacao: '2023-04-17T10:00:00Z',
        produto_id: 123,
        produtos: 'Produto 1, Produto 2',
        editorias: 'Editoria 1, Editoria 2',
        imagens: 'caminho/para/as/imagens',
        produtos_relacionados: 'Produto relacionado 1, Produto relacionado 2',
        destaque: true,
        link: 'https://exemplo.com/noticia'
      },
    ];
    const mockFetcher = jest.fn().mockResolvedValue(expectedResult);
    const size = 10;
    const result = await mockFetcher(`/noticias?qtd=${size}`);
    expect(result).toEqual(expectedResult);
  });
});
