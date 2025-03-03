import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Link,
  NavLink,
} from "react-router-dom";
import "../styles/App.css"
import { useNavigate  } from "react-router-dom";
const initialProducts = [
  { id: 1, name: "Mobile 1", description: "Description 1", price: "$200" },
  { id: 2, name: "Mobile 2", description: "Description 2", price: "$300" },
  { id: 3, name: "Mobile 3", description: "Description 3", price: "$400" },
  { id: 4, name: "Mobile 4", description: "Description 4", price: "$400" },
  { id: 5, name: "Mobile 5", description: "Description 5", price: "$400" },
  { id: 6, name: "Mobile 6", description: "Description 6", price: "$400" },
];

function AdminProduct({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const product = products.find((p) => p.id === Number(id));

  const [editedProduct, setEditedProduct] = useState({
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
  });

  if (!product) {
    return <p>Product not found</p>;
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  // Save changes
  const handleSave = () => {
    const updatedProducts = products.map((p) =>
      p.id === Number(id) ? { ...p, ...editedProduct } : p
    );
    setProducts(updatedProducts);
    navigate("/admin"); // Navigate back to admin panel
  };

  // Delete product
  const handleDelete = () => {
    setProducts(products.filter((p) => p.id !== Number(id)));
    navigate("/"); // Redirect to Home
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <label>Name:</label>
      <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />

      <label>Description:</label>
      <input type="text" name="description" value={editedProduct.description} onChange={handleChange} />

      <label>Price:</label>
      <input type="text" name="price" value={editedProduct.price} onChange={handleChange} />

      <button onClick={handleSave}>Save Changes</button>
      <button onClick={handleDelete}>Delete</button>

      <Link to="/admin">
        <button>Back</button>
      </Link>
    </div>
  );
}

function Home({ products }) {
  return (
    <>
      <PageNav />
      <div className="col-12">
        <div>
          {products.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`}>
              {item.name} <button>Buy</button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function Product() {
  const { id } = useParams();

  return (
    <>
      <PageNav />
      <div>
        <h1>Product {id} </h1>
        <Link to="/">
          <button className="btn">Other Products</button>
        </Link>
      </div>
    </>
  );
}

function Admin({ products }) {
  return (
    <>
      <PageNav />
      <h1>Admin Panel</h1>
      {products.map((item) => (
        <NavLink key={item.id} to={`/admin/products/${item.id}`}>
          {item.name}
        </NavLink>
      ))}
    </>
  );
}

function PageNav() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </>
  );
}

function App() {
  const [pro, setProducts] = useState(initialProducts);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home products={pro} />} />
        <Route path="admin" element={<Admin products={pro} />} />
        <Route path="products/:id" element={<Product />} />
        <Route
          path="admin/products/:id"
          element={<AdminProduct products={pro} setProducts={setProducts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
