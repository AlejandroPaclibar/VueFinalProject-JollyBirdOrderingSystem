<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <header>
   
<div class="btn">
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/customers">Customer</RouterLink>
        <RouterLink to="/menu_items">Menu Items</RouterLink>
        <RouterLink to="/orders">Orders</RouterLink>
        <RouterLink to="/order_details">Order Details</RouterLink>
        <RouterLink to="/payment_Transactions">Payment Transactions</RouterLink>
      </nav>
</div>
    
  </header>

  <RouterView />
</template>
<style scoped>
  /* Reset some default styles for better consistency */
  body, h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
  }

  /* Apply a background color to the body */
  body {
    background-color: #f5f5f5;
    font-family: 'Arial', sans-serif;
  }

  /* Style the header */
  header {
    background-color: rgba(27, 47, 106, 0.679);
    color: #fff;
    padding: 20px;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 2px;
    border-bottom: 2px solid white;
  
  }

  /* Style the navigation bar */
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;

  }

  /* Style the navigation links */
  nav {
    text-decoration: none;
    color: #fff;
    margin: 0 10px;
    padding: 5px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  a{
    text-decoration: none;
    color: #f5f5f5;
  }

  a:hover {
    background-color: rgba(34, 27, 241, 0.326);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
  }

 
 
</style>

