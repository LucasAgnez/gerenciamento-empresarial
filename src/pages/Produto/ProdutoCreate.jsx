import React, { useState } from 'react';
import styles from "./Produto.module.css";
import { useNavigate } from 'react-router-dom';

const ProdutoCreate = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(1);
    const [qntd, setQntd] = useState(1);
    const [img, setImg] = useState('');
    const navigate = useNavigate();

    const postProduto = async () => {
      const produto = {
          nome: nome,
          preco: preco,
          qntd: qntd,
          img: img,
      };

      console.log('Produto a ser enviado:', produto);

      try {
          const response = await fetch("http://localhost:3000/produto", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(produto),
          });

          const responseProduto = await response.json();
          console.log('Produto adicionado com sucesso:', responseProduto);
      } catch (error) {
          console.error('Erro ao adicionar produto:', error);
      }
  };

  const adicionarProduto = async (e) => {
    e.preventDefault();
    try {
        await postProduto();
        navigate('/gerenciamento/estoque');
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
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
              
                <button onClick={adicionarProduto}>Adicionar Produto</button>
                <button onClick={() => navigate('/gerenciamento/estoque')}>Cancelar</button>
            </form>
        </main>
    );
};

export default ProdutoCreate;
