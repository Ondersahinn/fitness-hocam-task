
import {ProgressBar} from 'react-bootstrap'
import Dasboard from './views/Dashboard'

export const accountRoutes = [
    {
        path: '/',
        name: 'Home',
        icon: ProgressBar,
        component: Dasboard,
        layout: '/home',
    },
 
]

