import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Customer from '../components/Customer.vue';
import MenuView from '../views/MenuView.vue';
import OrderView from '../views/OrderView.vue';
import OrderDetail from '../views/OrderDetail.vue';
import Transaction from '../views/Transaction.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/CustomerView.vue')
    },
    {
      path: '/menu_items',
      name: 'menu_items',
      component: MenuView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    },
    {
      path: '/order_details',
      name: 'order_details',
      component: OrderDetail
    },
    {
      path: '/payment_Transactions',
      name: 'payment_Transactions',
      component: Transaction
    },

  ]
})

export default router
