import { useState } from 'react'
import { item } from './type';
import FormItem from './formItem';
import ListaItens from './listaitens';
import seedData from './seedData';

const App= () => {
  const [itens, setItens] = useState<item[]>(seedData)
  const [itemEditando, setItemEditando] = useState<item>({
    id: 0,
    nome: '',
    descricao: ''  
  })

  const adddOuEditItem = (item: item) => {
    if (item.id === 0) {
      item.id = Math.random();
      setItens(prev => [item, ...prev]);
    } else {
      setItens(prev => prev.map(i => (i.id ===
      item.id ? item : i)));
    }
    setItemEditando({
      id: 0,
      nome: '',
      descricao: ''  
    });
  };

  const editarItem = (item: item) => {
    setItemEditando(item);
  };
  
  const deletarItem = (id: number) => {
    setItens(prev => prev.filter(item => item.
    id !== id));
  };

  const cancelarEdicao = () => {
    setItemEditando({
      id: 0,
      nome: '',
      descricao: ''  
    })
  }

  return (
    <div className='p-2 m-2 flex flex-col gap-2'> 
      <h1 className='font-bold text-4xl'>Gerenciamento de itens</h1>
      <FormItem
        itemAtual={itemEditando}
        salvarItem={adddOuEditItem}
        cancelarEdicao={cancelarEdicao}
      />

      <ListaItens
        itens={itens}
        editarItem={editarItem}
        deletarItem={deletarItem}
      />
    </div>
  );
};

export default App;