import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Link,
  NavLink,
} from "react-router-dom";

const products = [
  { id: 1, name: "Mobile 1", description: "Description 1", price: "$200" },
  { id: 2, name: "Mobile 2", description: "Description 2", price: "$300" },
  { id: 3, name: "Mobile 3", description: "Description 3", price: "$400" },
  { id: 4, name: "Mobile 4", description: "Description 4", price: "$400" },
  { id: 5, name: "Mobile 5", description: "Description 5", price: "$400" },
  { id: 6, name: "Mobile 6", description: "Description 6", price: "$400" },
];

function AdminProduct() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h2>Edit Product: {product.name}</h2>
      <input name="title" id="title" defaultValue={product.name} />
      <div>
        <button>Delete</button>
        <button>Save</button>
      </div>
    </div>
  );
}

function Home() {
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


function Product() {
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

function Admin() {
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
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="admin/products/:id" element={<AdminProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
