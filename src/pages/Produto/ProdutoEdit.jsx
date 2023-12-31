import React, { useState, useEffect } from 'react';
import styles from "./Produto.module.css";
import { useNavigate, useParams } from 'react-router-dom';

const ProdutoEdit = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(1);
    const [qntd, setQntd] = useState(1);
    const [img, setImg] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await fetch(`http://localhost:3000/produto/${id}`);
                const produtoData = await response.json();

                setNome(produtoData.nome);
                setPreco(produtoData.preco);
                setQntd(produtoData.qntd);
                setImg(produtoData.img);
            } catch (error) {
                console.error('Erro ao obter dados do produto:', error);
            }
        };

        fetchProduto();
    }, [id]);

    const updateProduto = async () => {
        const produto = {
            nome: nome,
            preco: preco,
            qntd: qntd,
            img: img,
        };

        console.log('Produto a ser atualizado:', produto);

        try {
            const response = await fetch(`http://localhost:3000/produto/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });

            const responseProduto = await response.json();
            console.log('Produto atualizado com sucesso:', responseProduto);
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
        }
    };

    const editarProduto = async (e) => {
        e.preventDefault();
        try {
            await updateProduto();
            navigate('/gerenciamento/estoque');
        } catch (error) {
            console.error('Erro ao editar produto:', error);
        }
    };

    return (
        <main className={styles.estoque}>
            <form className={styles.produtoCreateForm}>
                <label>
                    Nome do Produto:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <label>
                    Preço:
                    <input
                        type="number"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </label>
                <label>
                    Quantidade:
                    <input
                        type="number"
                        value={qntd}
                        onChange={(e) => setQntd(e.target.value)}
                    />
                </label>
                <label>
                    URL da Imagem:
                    <input
                        type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </label>

                <button onClick={editarProduto}>Editar Produto</button>
                <button onClick={() => navigate('/gerenciamento/estoque')}>Cancelar</button>
            </form>
        </main>
    );
};

export default ProdutoEdit;
