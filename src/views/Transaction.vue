<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <div>
      <h1>Payment Transactions</h1>   
    </div>
      <table>
    <thead>
      <tr>      
        <th>ID</th>
        <th> Customer Name</th>
        <th> Payment Date</th>
        <th> Payment Amount</th>
        <th> Payment Method</th>
    
      </tr>
    </thead>
    <tbody>
      <tr v-for="payment_transaction in payment_transactions" :key="payment_transaction.id">
        <td>{{ payment_transaction.id }}</td>
        <td>{{ getCustomerName(payment_transaction.order_id) }}</td>
        <td>{{ payment_transaction.payment_date }}</td>
        <td>{{ payment_transaction.payment_amount }}</td>
        <td>{{ payment_transaction.payment_method }}</td>
      </tr>
    </tbody>
  </table>
  </template>
  
  <script>
 import { ref, onMounted } from 'vue';
 import axios from 'axios';

  export default {
    setup() {
      const payment_transactions = ref([]);
      const orders = ref([]);
      const customers = ref([]);

      onMounted(async () => {
        try {
          const response = await axios.get('transaction.json'); 
          payment_transactions.value = response.data.payment_transactions;

          const OrderResponse = await axios.get('transaction.json'); 
          payment_transactions.value = response.data.payment_transactions;

          const ordersResponse = await axios.get('order.json'); 
          orders.value = ordersResponse.data.orders;

          const customersResponse = await axios.get('customer.json'); 
          customers.value = customersResponse.data.customers;
        } catch (error) {
          console.error('Error fetching payment_transactions:', error);
        }
      });
      const getCustomerName = (orderId) => {
      const order = orders.value.find((o) => o.id === orderId);
      const customerId = order ? order.customer_id : null;
      const customer = customers.value.find((c) => c.id === customerId);
      return customer ? customer.name : 'Unknown Customer';
    };

      return {
        payment_transactions,
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