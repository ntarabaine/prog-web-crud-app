import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { formItemProps, item } from "./type";

const FormItem = ({itemAtual, salvarItem,cancelarEdicao}:formItemProps) => {
  const [item, setItem] = useState<item>({
    id: 0,
    nome: '',
    descricao: ''  
  })
  
  useEffect(() => {
    if(itemAtual){
      setItem(itemAtual)
    }
  }, [itemAtual])


  const handleChange = (e: ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    salvarItem(item);
    setItem({
      id: 0,
      nome: '',
      descricao: ''
    });
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <h1 className="font-light">Adicionar item</h1>
      <div className="flex gap-2">
        <label className="font-light">Nome:</label>
        <input className="border border-slate-500 rounded" type="text" name="nome" value={item.nome} onChange={handleChange} />
      </div>
      <div className="flex gap-2">
        <label className="font-light">Descrição:</label>
        <textarea className="border border-slate-500 rounded" name="descricao" value={item.descricao} onChange={handleChange} />
      </div>
      <div className="p-2 flex gap-2">
        <button className=" bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg " type="submit">Salvar</button> 
        {itemAtual?.id != 0 ? <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg" type="button" onClick={cancelarEdicao}>Cancelar</button> : ''}
      </div>
    </form>
  );
};

export default FormItem;