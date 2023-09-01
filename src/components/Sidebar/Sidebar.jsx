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
//  import { useRouter } from "next/router";

const Sidebar = () => {
    //const router = useRouter()
    const navigate = useNavigate()

    return (
    <nav className={styles.sidebar}>
        <Navigation
            // you can use your own router's api to get pathname
            //activeItemId="/management/members"
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
                        itemId: '/management/stock',
                        elemBefore: () => <FaBoxOpen/>,
                    },
                    {
                        title: 'Funcionários',
                        itemId: '/management/members',
                        elemBefore: () => <FiUsers/>,
                  },
                ],
              },
              {
                title: 'Eventos',
                itemId: '/events',
                elemBefore: () => <FiCalendar/>,
              },
            ]}
          />

        <Navigation
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
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