import { useNavigate } from "react-router-dom"
import styles from "./ProdutoMiniatura.module.css"


const ProdutoMiniatura = (props) => {
    
    const navigate = useNavigate()
    const { id , nome, qntd} = props ;

    //onClick={navigate(`/gerenciamento/estoque/${id}`)

    return(
        <div className={styles.produtoMiniatura} >
            <section className={styles.conteudo}>
                <img className={styles.image} src="404image" onerror="this.src='images/not_found.png';" />
                <section className={styles.infos}>
                    <p>{nome}</p>
                    <p>{qntd}</p>
                </section>
            </section>
        </div>
    )
}
export default ProdutoMiniatura