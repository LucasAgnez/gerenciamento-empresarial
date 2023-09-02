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

const Sidebar = () => {
    const navigate = useNavigate()

    return (
    <nav className={styles.sidebar}>
        <Navigation
            //activeItemId="/"
            onSelect={({itemId}) => {
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
                itemId: '',
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
                itemId: '/eventos',
                elemBefore: () => <FiCalendar/>,
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
                itemId: '/config',
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