export interface item {
  id:number
  nome:string
  descricao:string
}

export interface listaItensProps {
  itens: item[],
  editarItem: (item: item) => void
  deletarItem: (id: number) => void
}

export interface formItemProps {
  itemAtual: item | null;
  salvarItem: (item: item) => void
  cancelarEdicao: () => void
}