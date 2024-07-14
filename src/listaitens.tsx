import { listaItensProps } from "./type";

const ListaItens = ({itens, editarItem, deletarItem} : listaItensProps) => {
  return (
    <div className="p-2 m -2 flex flex-col gap-2">
      <h2 className="text-3xl font-bold ">Lista de Itens</h2>
      <ul className="flex flex-wrap gap-4">
        {itens.map(item => (
          <li key={item.id} className="flex flex-col gap-2 bg-slate-100 shadow-sm shadow-slate-200 rounded-2xl p-4">
            <h3 className="font-bold text-xl">{item.nome}</h3>
            <p className="font-light">{item.descricao}</p>
            <div>
              <button className="bg-yellow-500 text-white hover:bg-yellow-600 px-2 m-1 py-1 rounded-2xl" onClick={() => editarItem(item)}>Editar</button>
              <button className="bg-red-500 text-white hover:bg-red-600 px-2 m-1 py-1 rounded-2xl" onClick={() => deletarItem(item.id)}>Deletar</button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};
export default ListaItens;