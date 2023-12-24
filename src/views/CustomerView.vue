

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <div>
      <h1>List of Customers</h1>


        
    </div>

      <table>
    <thead>
      <tr>      
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Address</th>
    
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in customers" :key="customer.id">
        <td>{{ customer.id }}</td>
        <td>{{ customer.name }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.phone_number }}</td>
        <td>{{ customer.address }}</td>
      </tr>
    </tbody>
  </table>
  </template>
  
  <script>
 import { ref, onMounted } from 'vue';
 import axios from 'axios';

  export default {
    setup() {
      const customers = ref([]);

      onMounted(async () => {
        try {
          const response = await axios.get('customer.json'); // Replace with the actual path
          customers.value = response.data.customers;
        } catch (error) {
          console.error('Error fetching customers:', error);
        }
      });

      return {
        customers,
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
  