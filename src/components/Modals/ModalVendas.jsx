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
    const {lista, setLista, setProdutos, produtos} = useContext(ProdutosContext)

    const handleSubmit = () => {
        console.log(produtos)
        updateProduto()
    }
    
    function updateProduto(){
        const atualizaEstoque = produtos.map(item => {
            const vendido = lista.find(itemVendido => itemVendido.id === item.id);
            if (vendido) {
                const restante = item.qntd - vendido.qntd;
                return { ...item, qntd: restante };
            }
            return item;
        });
        setProdutos(atualizaEstoque)
        setLista(lista.map((item) => ({...item, qntd: 0})));
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
                    <p>Vendedor:</p>
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
                <Button className={styles.btn_cadastrar} 
                    onClick={() => {
                        handleSubmit();
                        //closeModal(false)                        
                    }}>
                    Confirmar
                </Button>
                </form>
            </div>
        </main>
    )
}

export default ModalVendas;