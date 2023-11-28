import React, { useEffect, useState } from "react";
import styles from "./ModalVendas.module.css";
import data from "../../pages/Equipe/mock-data.json"
import { Select, MenuItem, Button } from "@mui/material";
import { FaAngleLeft } from "react-icons/fa";

const ModalVendas = (props) => {
    const { closeModal } = props;
    const [funcionarioId, setFuncionarioId] = useState('')
    const [funcionarios, setFuncionarios] = useState(data);

    const [lista, setLista] = useState([])
    useEffect(() => {
        setLista(JSON.parse(localStorage.getItem('lista')))
    },[])

    const handleSubmit = () => {
     //atualiza estoque
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
                            <MenuItem key={f.nome} value={f.nome}> {f.nome} </MenuItem>
                        ))}
                    </Select>
                </div>
                <section className={styles.itens}>
                {lista.map((item) => (
                    <>
                        <p>{item.nome}:</p>
                        <p>{item.qntd}&nbsp;</p>
                        <p>{item.preco}</p>
                    </>
                    ))}
                </section>
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