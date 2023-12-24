<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <div>
      <h1>List of Orders</h1>   
    </div>
      <table>
    <thead>
      <tr>      
        <th>ID</th>
        <th> Customer Name</th>
        <th>Order Number</th>
        <th>Order Date</th>
        <th>Total Amount</th>
    
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ getCustomerName(order.customer_id) }}</td>
        <td>{{ order.order_number }}</td>
        <td>{{ order.order_date }}</td>
        <td>{{ order.total_amount }}</td>
      </tr>
    </tbody>
  </table>
  </template>
  
  <script>
 import { ref, onMounted } from 'vue';
 import axios from 'axios';

  export default {
    setup() {
      const orders = ref([]);
      const customers = ref([]);


      onMounted(async () => {
        try {
          const response = await axios.get('order.json');
          orders.value = response.data.orders;

          const customersResponse = await axios.get('customer.json'); // Replace with your actual endpoint
        customers.value = customersResponse.data.customers;
        } catch (error) {
          console.error('Error fetching Orders:', error);
        }
      });

      
    const getCustomerName = (customerId) => {
      const customer = customers.value.find((c) => c.id === customerId);
      return customer ? customer.name : 'Unknown Customer';
    };

      return {
        orders,
        customers,
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