import ProdutoMiniatura from "../../components/ProdutoMiniatura/ProdutoMiniatura";
import styles from "./Estoque.module.css";
import { FiSearch } from "react-icons/fi"
import { FaFilter } from "react-icons/fa"

const Estoque = () => {
  return (
    <main className={styles.estoque}>
        <section className={styles.cabecalho}>
            <section className={styles.pesquisa}>
                <div className={styles.barraPesquisa}>
                    <input/>
                    <FiSearch/>
                </div>
            </section>
            <button className={styles.filtro}>
                <FaFilter/>
            </button>
            <button className={styles.butao}>
                registrar compra
            </button>
        </section>
      <section className={styles.estoqueGrid}>
        <ProdutoMiniatura nome="aaa" qntd='0' id="db29126v"/>
        <ProdutoMiniatura nome="aaa" qntd='0' id="db29126v"/>
        <ProdutoMiniatura nome="aaa" qntd='0' id="db29126v"/>
        <ProdutoMiniatura nome="aaa" qntd='0' id="db29126v"/>
        <ProdutoMiniatura nome="aaa" qntd='0' id="db29126v"/>
      </section>
    </main>
  );
};
export default Estoque;
