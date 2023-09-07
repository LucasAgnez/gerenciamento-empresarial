import FuncionarioMiniatura from "../../components/FuncionarioMiniatura/FuncionarioMiniatura";
import styles from "./Equipe.module.css";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { BsFillPencilFill, BsFillTrashFill, BsEyeFill } from "react-icons/bs"
import data from "./mock-data.json"


const Equipe = () => {

  return (
    <main className={styles.equipe}>
      <section className={styles.cabecalho}>
        <section className={styles.pesquisa}>
          <div className={styles.barraPesquisa}>
            <input />
            <FiSearch />
          </div>
        </section>
        <button className={styles.filtro}>
          <FaFilter style={{margin: 0}}/>
        </button>
      </section>

      <caption>Funcionários</caption>
      <table border={1}>

        <thead>
          <tr className={styles.tr}>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Nome</th>
            <th className={styles.tableHeader}>Departamento</th>
            <th className={styles.tableHeader}>CPF</th>
            <th className={styles.tableHeader}>Email</th>
            <th className={styles.tableHeader}>Salário</th>
            <th className={styles.tableHeader}>Ações</th>
          </tr>
        </thead>

        <tbody>
          {data.map( (item, index) => (
            //Uso de parenteses por estarmos lidando com uma expressao (html)
            //Chaves seria para código
            <tr key={index} align='center'>
                <td className={styles.td}>{index}</td>
                <td className={styles.td}>{item.nome}</td>
                <td className={styles.td}>{item.departamento}</td>
                <td className={styles.td}>{item.cpf}</td>
                <td className={styles.td}>{item.email}</td>
                <td className={styles.td}>{item.salario}</td>
                <td className={styles.td}>
                  <span>
                    <BsEyeFill />
                    <BsFillPencilFill />
                    <BsFillTrashFill />
                  </span>
                </td>
            </tr>
          ))}

        </tbody>

      </table>
      <section className={styles.listaEquipe}>
        <FuncionarioMiniatura
          nome="Daniel Sehn Colao"
          id="10500312"
          cargo="gestor de vendas"
          idade="30"
          departamento="vendas"
        />
        <FuncionarioMiniatura />
        <FuncionarioMiniatura />
        <FuncionarioMiniatura />
      </section>
    </main>
  );
};
export default Equipe;
