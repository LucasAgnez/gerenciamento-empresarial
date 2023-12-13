import styles from "./Equipe.module.css";
import { BsFillPencilFill, BsFillTrashFill, BsEyeFill, BsPlusLg } from "react-icons/bs"
import ModalCadastrarFuncionario from "../../components/Modals/ModalCadastrarFuncionario";
import ModalEditarFuncionario from "../../components/Modals/ModalEditarFuncionario";
import { useEffect, useState } from "react";
import axios from "axios";
import { backend_config } from "../../config/backend.config";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import { FiSearch } from "react-icons/fi";
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

const Equipe = () => {

  const [modalFechado, setModalFechado] = useState(true);
  const [modalCadastro, setModalCadastro] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState({});
  const [funcionarios, setFuncionarios] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleDeleteFuncionario = async (idFuncionario) => {
    try {
      const response = await axios.delete(
        backend_config.url+'/funcionario/'+idFuncionario
      )
      if(response.status === 200 &&
        response.data){
          toast.success('Funcionário Removido com Sucesso.')
        await getFuncionarios();
      }
    } catch (error) {
      console.error(error)
    }
  }

  const funcionariosFiltrados = funcionarios.filter(item => {
    return item.nome.toLowerCase().includes(searchInput.toLowerCase())
  })

  const handleEditarFuncionario = (item) => {
    setModalEditar(true);
    setFuncionarioSelecionado(item);
  }

  const getFuncionarios = async () => {
    try {
      const response = await axios.get(
        backend_config.url+"/funcionario"
      );
      
      if(!response.data) return;

      setFuncionarios(response.data);
    } catch (error) {
      console.warn(error)
    }
  };

  useEffect(() => {
    if(modalFechado){
      getFuncionarios();
      setModalFechado(false);
    }
  }, [modalFechado]);

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
        <TextField id="outlined-basic" 
          label="Buscar Funcionário" 
          size="small"
          variant="outlined" 
          onChange={e => setSearchInput(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FiSearch />
              </InputAdornment>
            ),
          }}
        />
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
                    <button className={styles.actions_btn}>
                      <BsEyeFill size={20} />
                    </button>

                    <button className={styles.actions_btn}>
                      <BsFillPencilFill color='orange' size={20} onClick={() => handleEditarFuncionario(item)} />
                    </button>

                    <button className={styles.actions_btn}>
                      <BsFillTrashFill color='crimson' size={20} onClick={() => handleDeleteFuncionario(item._id)} />
                    </button>
                  </div>
                </td>
            </tr>
          ))}

        </tbody>

      </table>

      <div className={styles.btn_div}>
          <Button 
              variant="contained"
              type="submit"
              onClick={() => setModalCadastro(true)}
              color="success"
              startIcon={<BsPlusLg />}
              >
                Cadastrar
          </Button>
      </div>

      {/* Renderizacao condicional */}
      {modalCadastro && <ModalCadastrarFuncionario closeModal={setModalCadastro} modal={setModalFechado} />}
      {modalEditar && <ModalEditarFuncionario closeModal={setModalEditar} funcionario={funcionarioSelecionado} modal={setModalFechado} />}
    </main>
  );
};
export default Equipe;
