import FuncionarioMiniatura from "../../components/FuncionarioMiniatura/FuncionarioMiniatura";
import styles from "./Equipe.module.css";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { BsFillPencilFill, BsFillTrashFill, BsEyeFill, BsPlusLg } from "react-icons/bs"
import data from "./mock-data.json"
import ModalCadastrarFuncionario from "../../components/Modals/ModalCadastrarFuncionario";
import ModalEditarFuncionario from "../../components/Modals/ModalEditarFuncionario";
import { useState } from "react";


const Equipe = () => {

  const [modalCadastro, setModalCadastro] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState({});
  const [funcionarios, setFuncionarios] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  const handleDeleteFuncionario = (index) => {
    const newFuncionarios = funcionarios.filter((_, i) => i !== index);
    setFuncionarios(newFuncionarios);
  }

  const funcionariosFiltrados = funcionarios.filter(item => {
    return item.nome.toLowerCase().includes(searchInput.toLowerCase())
  })

  const handleEditarFuncionario = (item) => {
    console.log('estou aqui')
    setModalEditar(true);
    setFuncionarioSelecionado(item);
  }

  return (
    <main className={styles.equipe}>
      <section className={styles.cabecalho}>
        <section className={styles.pesquisa}>
          <div className={styles.barraPesquisa}>
            {/* <input />
            <FiSearch /> */}
          </div>
        </section>
        {/* <button className={styles.filtro}>
          <FaFilter style={{margin: 0}}/>
        </button> */}
      </section>

      <h2>Funcionários</h2>

      <div className={styles.search_filter}>
        <label>Buscar:</label>
        <input type="text" maxLength={255} onChange={e => setSearchInput(e.target.value)}/>
      </div>

      <table border={1}>

        <thead>
          <tr className={styles.tableRowHeader}>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Nome</th>
            <th className={styles.tableHeader}>Departamento</th>
            <th className={styles.tableHeader}>CPF</th>
            <th className={styles.tableHeader}>Email</th>
            <th className={styles.tableHeader}>Ações</th>
          </tr>
        </thead>

        <tbody>
          {funcionariosFiltrados.map( (item, index) => (
            <tr key={index} align='center' className={styles.tableRow}>
                <td>{index}</td>
                <td>{item.nome}</td>
                <td>{item.departamento}</td>
                <td>{item.cpf}</td>
                <td>{item.email}</td>
                <td>
                  <div className={styles.actions_div}>
                    <button className={styles.actions_btn}><BsEyeFill size={20} /></button>
                    <button className={styles.actions_btn}><BsFillPencilFill color='orange' size={20} onClick={() => handleEditarFuncionario(item)} /></button>
                    <button className={styles.actions_btn}><BsFillTrashFill color='crimson' size={20} onClick={() => handleDeleteFuncionario(index)} /></button>
                  </div>
                </td>
            </tr>
          ))}

        </tbody>

      </table>
      <button type="button" className={styles.create_btn} onClick={() => setModalCadastro(true)}>
        <div className={styles.btn_div}>
          <BsPlusLg size={20} />
          <span>Cadastrar</span>
        </div>
      </button>
      {modalCadastro && <ModalCadastrarFuncionario closeModal={setModalCadastro} funcionarios={funcionarios} />}
      {modalEditar && <ModalEditarFuncionario closeModal={setModalEditar} funcionario={funcionarioSelecionado} />}
    </main>
  );
};
export default Equipe;
