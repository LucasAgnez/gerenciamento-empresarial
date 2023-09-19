import FuncionarioMiniatura from "../../components/FuncionarioMiniatura/FuncionarioMiniatura";
import styles from "./Equipe.module.css";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { BsFillPencilFill, BsFillTrashFill, BsEyeFill, BsPlusLg } from "react-icons/bs"
import data from "./mock-data.json"
import ModalCadastrarFuncionario from "../../components/Modals/ModalCadastrarFuncionario";
import { useState } from "react";


const Equipe = () => {

  const [modalCadastro, setModalCadastro] = useState(false);

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
          <tr className={styles.tableRowHeader}>
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
            <tr key={index} align='center' className={styles.tableRow}>
                <td>{index}</td>
                <td>{item.nome}</td>
                <td>{item.departamento}</td>
                <td>{item.cpf}</td>
                <td>{item.email}</td>
                <td>{item.salario}</td>
                <td>
                  <div className={styles.actions_div}>
                    <button className={styles.actions_btn}><BsEyeFill size={20} /></button>
                    <button className={styles.actions_btn}><BsFillPencilFill color='orange' size={20} /></button>
                    <button className={styles.actions_btn}><BsFillTrashFill color='crimson' size={20} /></button>
                  </div>
                </td>
            </tr>
          ))}

        </tbody>

      </table>
      <button type="button" class={styles.create_btn}>
        <div className={styles.btn_div}>
          <BsPlusLg size={20} />
          <span>Cadastrar</span>
        </div>
      </button>


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
