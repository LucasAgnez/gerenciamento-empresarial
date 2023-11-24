import { useNavigate } from "react-router-dom";
import styles from "./ProdutoMiniatura.module.css";
import { Button } from "@mui/material";
import { FaMinusCircle, FaPlusCircle} from "react-icons/fa";
import { useState } from "react";

const ProdutoMiniatura = (props) => {
  const navigate = useNavigate();
  const { id, nome, qntd, vendas, img, recarregarEstoque } = props;
  const [ contador, setContador ] = useState(0)
  const [ qtd, setQtd ] = useState(qntd)
  const [ inc, setInc ] = useState(qntd != 0 )
  const [ dec, setDec ] = useState(false)

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
    if(qtd == 0){
      return
    }
    setInc(true)
    setDec(true)
    setContador(contador + 1)
    setQtd(qtd-1)
    if(qtd-1==0){
      setInc(false)
    }
  }
  function decrementa(){
    if(contador==0){
      return
    }
    setContador(contador-1)
    setQtd(qtd+1)
    setInc(true)
    if(contador-1==0){
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
          <p>{qtd}</p>
        </section>
        <section>
          <button>Editar</button>
          <button onClick={() => deleteProduto(id)}>Excluir</button>
        </section>
      </section>
      { vendas ? 
      <>
        <section className={styles.butoes}>
          <Button disabled={!dec} onClick={() => decrementa()}size='small' variant="text" ><FaMinusCircle/></Button>
          <Button disabled={!inc} onClick={() => incrementa()}size='small' variant="text"><FaPlusCircle/></Button>
        </section>
        <section>
          <b>{contador}</b>
        </section>
      </>
      : null
      }
    </div>
  );
};
export default ProdutoMiniatura;
