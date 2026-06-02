/**
 * Mapeamento de fotos por produto (paths em /public/produtos/).
 * Independente do idioma — usado pela seção Produtos.
 *
 * Para PCR PE, primeira foto é a "principal" (verde oliva uniforme),
 * as demais aparecem como miniaturas que trocam a foto principal.
 */
export type FotoProduto = {
  src: string;
  legenda: string;   // descrição curta (acessibilidade + alt)
};

/** Chave = sigla do produto (deve bater com dictionary.ts → produtos.items[].sigla) */
export const FOTOS_PRODUTOS: Record<string, FotoProduto[]> = {
  'PCR PE': [
    { src: '/produtos/pcr3-pe.jpeg', legenda: 'Verde oliva — uniforme' },
    { src: '/produtos/pcr2-pe.jpeg', legenda: 'Verde escuro' },
    { src: '/produtos/pcr-pe.jpeg',  legenda: 'Cinza esverdeado' },
    { src: '/produtos/pcr1-pe.jpeg', legenda: 'Preto grafite' },
  ],
  'PCR PP': [
    { src: '/produtos/pcr-pp.jpg', legenda: 'Bege natural' },
  ],
  'PIR PE': [
    { src: '/produtos/pir_pe.jpeg', legenda: 'Translúcido perolado' },
  ],
  'PIR PP': [
    { src: '/produtos/pir-pp.jpg', legenda: 'Branco perolado' },
  ],
  'FLK': [
    { src: '/produtos/flakes.jpg', legenda: 'Flakes lavados' },
  ],
  // CUSTOM: renderizado como mosaico de 4 fotos (composição visual)
  'CUSTOM': [
    { src: '/produtos/pcr3-pe.jpeg', legenda: 'PCR PE Verde' },
    { src: '/produtos/pcr1-pe.jpeg', legenda: 'PCR PE Preto' },
    { src: '/produtos/pir_pe.jpeg',  legenda: 'PIR PE Perolado' },
    { src: '/produtos/flakes.jpg',   legenda: 'Flakes Azul' },
  ],
};

/** Helper: retorna fotos do produto pela sigla. */
export function getFotosProduto(sigla: string): FotoProduto[] {
  return FOTOS_PRODUTOS[sigla] ?? [];
}
