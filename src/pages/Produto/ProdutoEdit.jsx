import React, { useState, useEffect } from 'react';
import styles from "./Produto.module.css";
import { useNavigate, useParams } from 'react-router-dom';

const ProdutoEdit = () => {
    const [nome, setNome] = useState('');
    const [qntd, setQntd] = useState(1);
    const [img, setImg] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await fetch(`https://64ff5d1af8b9eeca9e2a0b54.mockapi.io/produto/${id}`);
                const produtoData = await response.json();

                setNome(produtoData.nome);
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
            qntd: qntd,
            img: img,
        };

        console.log('Produto a ser atualizado:', produto);

        try {
            const response = await fetch(`https://64ff5d1af8b9eeca9e2a0b54.mockapi.io/produto/${id}`, {
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

    const editarProduto = (e) => {
        e.preventDefault();
        updateProduto();
        navigate('/gerenciamento/estoque');
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
