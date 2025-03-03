import React, { useState } from "react";

const AdminPanel = ({ products, setProducts }) => {
  const [editProduct, setEditProduct] = useState(null);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
    setEditProduct(null);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      {products.map((product) => (
        <div key={product.id}>
          {editProduct?.id === product.id ? (
            <EditForm product={product} updateProduct={updateProduct} />
          ) : (
            <>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button onClick={() => setEditProduct(product)}>Edit</button>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const EditForm = ({ product, updateProduct }) => {
  const [newData, setNewData] = useState(product);

  return (
    <div>
      <input type="text" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
      <input type="text" value={newData.price} onChange={(e) => setNewData({ ...newData, price: e.target.value })} />
      <button onClick={() => updateProduct(product.id, newData)}>Save</button>
    </div>
  );
};

export default AdminPanel;
