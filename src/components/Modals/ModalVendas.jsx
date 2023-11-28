import React, { useContext, useEffect, useState } from "react";
import styles from "./ModalVendas.module.css";
import data from "../../pages/Equipe/mock-data.json"
import { Select, MenuItem, Button } from "@mui/material";
import { FaAngleLeft } from "react-icons/fa";
import { ProdutosContext } from "../../context/produtosContext";


const ModalVendas = (props) => {
    const { closeModal } = props;
    const [funcionarioId, setFuncionarioId] = useState('')
    const [funcionarios, setFuncionarios] = useState(data);
    const {lista} = useContext(ProdutosContext)

    const handleSubmit = () => {
        setLista(produtos.map((item) => ({...item, qntd: 0})));
        //atualiza estoque
    }
    function filterZeros(num){
        if(num.qntd > 0){
            return true
        }
        return false
    }
    const handleChange = (e) => {
        setFuncionarioId(e.target.value);
      };

    return (
        <main className={styles.modal_background}>
            <div className={styles.modal_container}>
                <Button 
                    onClick={() => closeModal(false)}
                    variant="contained"
                    style={{borderRadius: "100px",
                        padding: "0px"
                    }}>
                    <FaAngleLeft/>
                </Button>
            <form>
                <h3>Carrinho</h3>
                <div className={styles.vendedor}>
                    <p>ID Vendedor:</p>
                    <Select
                        required={true}
                        labelId="ID funcionario"
                        id="select-funcionario"
                        value={funcionarioId}
                        label="ID"
                        onChange={handleChange}
                    >
                        {funcionarios.map((f, key) => (
                            <MenuItem key={f.id} value={f.nome}> {f.nome} </MenuItem>
                        ))}
                    </Select>
                </div>
                <table className={styles.itens} key={0}>
                    <tbody>
                        <tr>
                            <th>Nome Produto:</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                        </tr>
                        {lista.filter(filterZeros).map((item) => ( 
                        <tr key={item.id} className={styles.item}>
                            <td>{item.nome}:</td>
                            <td>{item.qntd}</td>
                            <td>R${parseFloat(item.qntd * item.preco).toFixed(2)}</td>
                        </tr> 
                        ))}
                    </tbody>
                </table>
                <Button type="submit" className={styles.btn_cadastrar} 
                    onSubmit={() => {
                        handleSubmit();
                        closeModal(false)                        
                    }}>
                    Confirmar
                </Button>
                </form>
            </div>
        </main>
    )
}

export default ModalVendas;