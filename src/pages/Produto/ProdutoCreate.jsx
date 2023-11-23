import React, { useState } from 'react';
import styles from "./Produto.module.css";

const ProdutoCreate = () => {
    const [nome, setNome] = useState('');
    const [qntd, setQntd] = useState(0);
    const [img, setImg] = useState('');

    const postData = async () => {
      const data = {
          nome: nome,
          qntd: qntd,
          img: img,
      };

      console.log('Data a ser enviada:', data);

      try {
          const response = await fetch("https://64ff5d1af8b9eeca9e2a0b54.mockapi.io/produto", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });

          const responseData = await response.json();
          console.log('Produto adicionado com sucesso:', responseData);
      } catch (error) {
          console.error('Erro ao adicionar produto:', error);
      }
  };

  const handleButtonClick = () => {
      postData();
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
