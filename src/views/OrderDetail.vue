<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <div>
      <h1>Order Details</h1>   
    </div>
      <table>
    <thead>
      <tr>      
        <th>ID</th>
        <th> Customer Name</th>
        <th> Menu Item</th>
        <th> Quantity</th>
        <th> Subtotal</th>
    
      </tr>
    </thead>
    <tbody>
      <tr v-for="order_detail in order_details" :key="order_detail.id">
        <td>{{ order_detail.id }}</td>
        <td>{{ getCustomerName(order_detail.order_id) }}</td>
        <td>{{ getMenuName(order_detail.menu_item_id) }}</td>
        <td>{{ order_detail.quantity }}</td>
        <td>{{ order_detail.subtotal }}</td>
      </tr>
    </tbody>
  </table>
  </template>
  
  <script>
 import { ref, onMounted } from 'vue';
 import axios from 'axios';

  export default {
    setup() {
      const order_details = ref([]);
      const menu_items = ref([]);
      const orders = ref([]);
      const customers = ref([]);

      onMounted(async () => {
        try {
          const response = await axios.get('detail.json'); // Replace with the actual path
          order_details.value = response.data.order_details;

          const menuResponse = await axios.get('menu.json'); // Replace with the actual path
          menu_items.value =  menuResponse.data.menu_items;

          const ordersResponse = await axios.get('order.json'); // Replace with the actual path
          orders.value = ordersResponse.data.orders;

        // Fetch customers
        const customersResponse = await axios.get('customer.json'); // Replace with the actual path
        customers.value = customersResponse.data.customers;
        } catch (error) {
          console.error('Error fetching menu_items:', error);
        }
      });

           
    const getMenuName = (menu_itemId) => {
      const menu_item = menu_items.value.find((m) => m.id === menu_itemId);
      return menu_item ? menu_item.name : 'Unknown items';
    };
   const getCustomerName = (orderId) => {
      const order = orders.value.find((o) => o.id === orderId);
      const customerId = order ? order.customer_id : null;
      const customer = customers.value.find((c) => c.id === customerId);
      return customer ? customer.name : 'Unknown Customer';
    };
      return {
        order_details,
        menu_items,
        getMenuName,
        getCustomerName
      };
    },
  };


  </script>
  
  <style scoped>
  .customer-list {
  margin: 20px;
}

h1 {
  color: white;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  letter-spacing: 5px;
}


table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {

  padding: 8px;
  text-align: left;
  background-color: rgba(157, 201, 218, 0.825);
  border: 1px solid rgb(19, 49, 181);
}

th {
  background-color: rgba(27, 47, 106, 0.679);
  text-align: center;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
}
  </style>