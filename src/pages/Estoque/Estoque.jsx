import ProdutoMiniatura from "../../components/ProdutoMiniatura/ProdutoMiniatura";
import styles from "./Estoque.module.css";
import { FiSearch } from "react-icons/fi"

const Estoque = () => {
  return (
    <main className={styles.estoque}>
      <section className={styles.pesquisa}>
        <div className={styles.barraPesquisa}>
            <input/>
            <FiSearch/>
        </div>
      </section>
      <section className={styles.estoqueGrid}>
        <ProdutoMiniatura />
        <ProdutoMiniatura />
        <ProdutoMiniatura />
        <ProdutoMiniatura />
        <ProdutoMiniatura />
      </section>
    </main>
  );
};
export default Estoque;
