import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Link,
  NavLink,
} from "react-router-dom";

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
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  const handleDelete = () => {
    setProducts(products.filter((p) => p.id !== Number(id)));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
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
        {products.map((item) => (
          <div key={item.id}>
            <Link to={`/products/${item.id}`}>{item.name}</Link>
            <button>Buy</button>
          </div>
        ))}
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
          <button>Other Products</button>
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
        <div key={item.id}>
          <NavLink to={`/admin/products/${item.id}`}>{item.name}</NavLink>
        </div>
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
  const [products, setProducts] = useState(initialProducts);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home products={products} />} />
        <Route path="admin" element={<Admin products={products} />} />
        <Route path="products/:id" element={<Product />} />
        <Route
          path="admin/products/:id"
          element={<AdminProduct products={products} setProducts={setProducts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
