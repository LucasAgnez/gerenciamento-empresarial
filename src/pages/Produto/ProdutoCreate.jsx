import React, { useState } from 'react';
import styles from "./Produto.module.css";
import { useNavigate } from 'react-router-dom';

const ProdutoCreate = () => {
    const [nome, setNome] = useState('');
    const [qntd, setQntd] = useState(1);
    const [img, setImg] = useState('');
    const navigate = useNavigate();

    const postProduto = async () => {
      const produto = {
          nome: nome,
          qntd: qntd,
          img: img,
      };

      console.log('Produto a ser enviado:', produto);

      try {
          const response = await fetch("https://64ff5d1af8b9eeca9e2a0b54.mockapi.io/produto", {
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

  const handleButtonClick = (e) => {
      e.preventDefault();
      postProduto();
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
              
                <button onClick={handleButtonClick}>Adicionar Produto</button>
            </form>
        </main>
    );
};

export default ProdutoCreate;
