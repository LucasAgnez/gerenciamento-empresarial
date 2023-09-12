import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FiUsers } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';
import { FaGears } from 'react-icons/fa6';
import { FaBoxOpen } from 'react-icons/fa6';
import { GrUserManager } from "react-icons/gr";
import styles from './Sidebar.module.css'
import { useNavigate } from 'react-router-dom';
import { FaBoxes } from  'react-icons/fa'

const Sidebar = () => {
    const navigate = useNavigate()

    return (
    <nav className={styles.sidebar}>
        <Navigation
            //activeItemId="/"
            onSelect={({itemId}) => {
                if(itemId == "gerenciamento" || itemId == "eventos"){
                    return
                }
              navigate(itemId)
            }}
            items={[
              {
                title: 'Página Inicial',
                itemId: '/',
                elemBefore: () => <FiHome/>,

            },
            {
                title: 'Gerenciamento',
                itemId: 'gerenciamento',
                elemBefore: () => <GrUserManager/>,
                subNav: [
                    {
                        title: 'Estoque',
                        itemId: '/gerenciamento/estoque',
                        elemBefore: () => <FaBoxOpen/>,
                    },
                    {
                        title: 'Equipe',
                        itemId: '/gerenciamento/equipe',
                        elemBefore: () => <FiUsers/>,
                  },
                ],
              },
              {
                title: 'Eventos',
                itemId: 'eventos',
                elemBefore: () => <FiCalendar/>,
                subNav: [
                    {
                        title: 'Registrar Reabastecimento',
                        itemId: '/eventos/reabastecimento',
                    },
                    {
                        title: 'Contratação',
                        itemId: '/eventos/contratacao',
                  },
                ],
              },
            ]}
          />

        <Navigation
            activeItemId="/"
            onSelect={({itemId}) => {
                navigate(itemId)
            }}
            items={[
              {
                title: 'Configurações',
                itemId: '/configuracoes',
                elemBefore: () => <FaGears/>,
              },
              {
                title: 'Sair',
                itemId: '/sair',
              },
            ]}
          />
      </nav>
    )
}
export default Sidebar