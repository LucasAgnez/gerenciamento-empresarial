import { useNavigate } from "react-router-dom";
import styles from "./ProdutoMiniatura.module.css";
import { Button } from "@mui/material";
import { FaMinusCircle, FaPlusCircle} from "react-icons/fa";
import { useState } from "react";

const ProdutoMiniatura = (props) => {
  const navigate = useNavigate();
  const { id, nome, qntd, vendas } = props;
  const [ contador, setContador ] = useState(0)
  const [ qtd, setQtd ] = useState(qntd)
  const [ inc, setInc ] = useState(qntd != 0 )
  const [ dec, setDec ] = useState(false)

  //onClick={navigate(`/gerenciamento/estoque/${id}`)
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
      <section className={styles.conteudo}
      onClick={() => navigate(`/gerenciamento/estoque/${id}`)}>
        <img
          className={styles.image}
          src="404image"
        />
        <section className={styles.infos}>
          <p>{nome}</p>
          <p>{qtd}</p>
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
