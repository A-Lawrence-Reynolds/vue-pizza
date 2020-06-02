import Contact from './components/Contact'
import About from './components/About'
import History from './components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'


export const routes = [
    {path: '/', name:'homeLink', components: {
        default: Home,
        "ordering-guid": OrderingGuide,
        'delivery': Delivery,
        'history': History
    } },
    {path: '/menu',name:'menuLink', component: Menu},
    {path: '/contact',name:'contactLink', component: Contact},
    {path: '/admin',
    name:'adminLink',
     component: Admin,
     beforeEnter: (to, from, next) => {
       alert('this is a private route, login to continue')
       next()
     }
  
  },
     
    {path: '/about',name:'aboutLink', component: About, children: [
      {path: '/history',name:'historyLink', component: History},
      {path: '/delivery',name:'deliveryLink', component: Delivery},
      {path: '/ordering-guide',name:'orderingLink', component: OrderingGuide},
    ]},
    {path: '/*', redirect: '/'}
  ]
