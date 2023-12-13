import React, { useContext, useEffect, useState } from "react";
import styles from "./ModalVendas.module.css";
import { Select, MenuItem, Button } from "@mui/material";
import { FaAngleLeft } from "react-icons/fa";
import { ProdutosContext } from "../../context/ProdutosContext";
import axios from "axios";


const ModalVendas = (props) => {
    const { closeModal } = props;
    const [funcionarioId, setFuncionarioId] = useState('')
    const [funcionarios, setFuncionarios] = useState([]);
    const {lista, setLista, setProdutos, produtos} = useContext(ProdutosContext)

    async function fetchData() {
        let response = await axios.get("http://localhost:3000/funcionario");
        let funcs = response.data;
        setFuncionarios(funcs.filter(f => {
            if(f.departamento=="vendas") {
                return true
            }
            return false
        }));
    }
    
    useEffect(() => {
        fetchData();
    }, []); 

    const handleSubmit = () => {
        addVenda()
        updateProduto()
        window.location.reload(false)
    }

    function addVenda(){
        const prods = lista.filter(filterZeros).map(item => {
            const prod = {
                idProduto: item._id,
                preco: parseFloat(item.preco).toFixed(2),
                nome: item.nome,
                qntd: item.qntd
            }
            return prod
        })
        const venda = {
            data: setData(),
            idVendedor: funcionarioId,
            produtos: prods,
        }
        console.log(venda)
        axios.post('http://localhost:3000/venda', venda).then(() => console.log('venda criada'))
    }
    function setData(){
        const date = new Date();
        let currentDay= String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
        let currentYear = date.getFullYear();
        return `${currentDay}-${currentMonth}-${currentYear}`;
    }

    function updateProduto(){
        const atualizaEstoque = produtos.map(item => {
            const vendido = lista.find(itemVendido => itemVendido._id === item._id);
            if (vendido) {
                const restante = item.qntd - vendido.qntd;
                const prod = {
                    nome: item.nome, 
                    qntd: restante, 
                    img: item.img, 
                    preco: item.preco
                }
                console.log(prod)
                axios.put('http://localhost:3000/produto/' + item._id, prod).then(() => console.log('estoque atualizado'))
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
        setFuncionarioId(e.target.value)
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
                            <MenuItem key={f.id} value={f._id}> {f.nome} </MenuItem>
                        ))}
                    </Select>
                </div>
                <table className={styles.itens} key={0}>
                    <tbody>
                        <tr>
                            <th>Nome Produto</th>
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