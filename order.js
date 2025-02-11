const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Store orders (in-memory storage)
let orders = [];

// Endpoint to create a new order
app.post('/create-order', (req, res) => {
  const order = req.body;
  console.log('Order Created:', order);

  orders.push(order);

  res.status(201).send({ message: 'Order created successfully!' });
});

// Serve the main page with a colorful welcome section and order table
app.get('/', (req, res) => {
  let orderTableRows = orders
    .map(order => 
      <tr>
        <td>${order.orderId}</td>
        <td>${order.product}</td>
        <td>${order.quantity}</td>
      </tr>
    )
    .join('');

  let orderTable = orders.length > 0 ? 
    <h2>Order List</h2>
    <table>
      <tr>
        <th>Order ID</th>
        <th>Product</th>
        <th>Quantity</th>
      </tr>
      ${orderTableRows}
    </table>
   : <p>No orders yet! Use POST /create-order to add orders.</p>;

  let pageContent = 
  <html>
  <head>
    <title>Order Service</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: linear-gradient(120deg, #ff9a9e, #fad0c4);
        text-align: center;
        padding: 20px;
      }
      .container {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        width: 60%;
        margin: auto;
      }
      h1 {
        color: #333;
        font-size: 24px;
      }
      h2 {
        color: #007BFF;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }
      table, th, td {
        border: 1px solid #ddd;
      }
      th, td {
        padding: 10px;
        text-align: center;
      }
      th {
        background: #007BFF;
        color: white;
      }
      tr:nth-child(even) {
        background: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Welcome to Order Service</h1>
      <p><strong>Name:</strong> Ankit Kumar Tiwary</p>
      <p><strong>Topic:</strong> VCC ASSIGNMENT 1</p>
      <p><strong>Roll No:</strong> M23AID022</p>
      <p>Welcome! This service allows you to manage product orders.</p>
      ${orderTable}
    </div>
  </body>
  </html>
  ;

  res.send(pageContent);
});

// Start server
app.listen(port, () => {
  console.log(Order service running at http://localhost:${port});
});