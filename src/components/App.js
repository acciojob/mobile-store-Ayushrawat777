import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

function AdminProduct({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Product not found.</p>;

  const handleDelete = () => {
    const updatedProducts = products.filter((p) => p.id !== Number(id));
    setProducts(updatedProducts);
    navigate("/admin"); // Redirect to Admin Panel after deleting
  };

  return (
    <div>
      <h2>Edit Product: {product.name}</h2>
      <input name="title" id="title" defaultValue={product.name} />
      <div>
        <button onClick={handleDelete}>Delete</button>
        <Link to="/admin">
        <button className="col-12">Save</button>
        </Link>
      </div>
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
            <div key={item.id}>
              <Link to={`/products/${item.id}`}>{item.name}</Link>
              <button>Buy</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Product({products}) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <PageNav />
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
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
      <div>
        {products.map((item) => (
          <div key={item.id}>
            <NavLink to={`/admin/products/${item.id}`}>{item.name}</NavLink>
          </div>
        ))}
      </div>
    </>
  );
}


function PageNav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
}

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Mobile 1", description: "Description 1", price: "$200" },
    { id: 2, name: "Mobile 2", description: "Description 2", price: "$300" },
    { id: 3, name: "Mobile 3", description: "Description 3", price: "$400" },
    { id: 4, name: "Mobile 4", description: "Description 4", price: "$400" },
    { id: 5, name: "Mobile 5", description: "Description 5", price: "$400" },
    { id: 6, name: "Mobile 6", description: "Description 6", price: "$400" },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home products={products} />} />
        <Route path="admin" element={<Admin products={products} />} />
        <Route path="products/:id" element={<Product products={products} />} />
        <Route path="admin/products/:id" element={<AdminProduct products={products} setProducts={setProducts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
