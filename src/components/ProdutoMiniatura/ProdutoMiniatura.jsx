import styles from "./ProdutoMiniatura.module.css";
import { Button } from "@mui/material";
import { FaMinusCircle, FaPlusCircle} from "react-icons/fa";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProdutosContext } from "../../context/ProdutosContext";


const ProdutoMiniatura = ({ id, nome, preco, qntd, venda, img, recarregarEstoque}) => {
  const [produto, setProduto] = useState({
    qntd: qntd,
    contador: 0,
  })
  const [ inc, setInc ] = useState(qntd != 0 )
  const [ dec, setDec ] = useState(false)
  const navigate = useNavigate();
  const {setLista, lista} = useContext(ProdutosContext)

  function updateStorage(){
    localStorage.setItem('lista', JSON.stringify())
  }

  const deleteProduto = async (id) => {
    try {
      const response = await fetch(`https://64ff5d1af8b9eeca9e2a0b54.mockapi.io/produto/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Produto excluído com sucesso');
        recarregarEstoque();
      } else {
        console.error('Erro ao excluir produto:', response.status);
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  //onClick={navigate(`/gerenciamento/estoque/${id}`)
  //onClick={() => navigate(`/gerenciamento/estoque/${id}`)}
  function incrementa(){
    if(produto.qntd == 0){
      return
    }
    setLista(lista.map((item) => ({...item, qntd: item.id==id ? produto.contador+1 : item.qntd})));
    updateStorage()
    setInc(true)
    setDec(true)
    setProduto({qntd: produto.qntd - 1, contador: produto.contador + 1})
    if(produto.qntd-1==0){
      setInc(false)
    }
  }


  function decrementa(){
    if(produto.contador==0){
      return
    }
    setLista(lista.map((item) => ({...item, qntd: item.id==id ? produto.contador-1 : item.qntd})));
    updateStorage()
    setProduto({qntd: produto.qntd + 1, contador: produto.contador - 1})
    setInc(true)
    if(produto.contador-1==0){
      setDec(false)
    }
  }
  return (
    <div
      className={styles.produtoMiniatura}
    >
      <section className={styles.conteudo}>
        <img
          className={styles.image}
          src={img}
        />
        <section className={styles.infos}>
          <p>{nome}</p>
          <p>{produto.qntd}</p>
        </section>
      </section>
      { venda ? 
      <>
        <section className={styles.butoes}>
          <Button disabled={!dec} onClick={() => decrementa()}size='small' variant="text" ><FaMinusCircle/></Button>
          <Button disabled={!inc} onClick={() => incrementa()}size='small' variant="text"><FaPlusCircle/></Button>
        </section>
        <section>
          <b>{produto.contador}</b>
        </section>
      </>
      : 
        <section className={styles.butoes}>
          <Button onClick={() => navigate(`/gerenciamento/estoque/edit/${id}`)}>Editar</Button>
          <Button onClick={() => deleteProduto(id)}>Excluir</Button>
        </section>
      }
    </div>
  );
};
export default ProdutoMiniatura;
