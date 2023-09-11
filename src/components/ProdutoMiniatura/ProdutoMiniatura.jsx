import { useNavigate } from "react-router-dom";
import styles from "./ProdutoMiniatura.module.css";

const ProdutoMiniatura = (props) => {
  const navigate = useNavigate();
  const { id, nome, qntd, img } = props;

  //onClick={navigate(`/gerenciamento/estoque/${id}`)

  return (
    <div
      className={styles.produtoMiniatura}
      onClick={() => navigate(`/gerenciamento/estoque/${id}`)}
    >
      <section className={styles.conteudo}>
        <img
          className={styles.image}
          src={img}
        />
        <section className={styles.infos}>
          <p>{nome}</p>
          <p>{qntd}</p>
        </section>
      </section>
    </div>
  );
};
export default ProdutoMiniatura;
