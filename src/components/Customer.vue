

<template>
    <div>
      <h1>Customer List</h1>


        
    </div>

      <table>
    <thead>
      <tr>      
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Address</th>
        <th></th>
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
  color: #333;
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
}


table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: rgb(121, 149, 160);
}

th {
  background-color: rgb(203, 242, 159);
  text-align: center;
}
  </style>
  