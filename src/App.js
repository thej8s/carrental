import Layout from "./layout/Layout";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Customers from "./pages/customers/Customers";
import AddCustomer from "./pages/customers/AddCustomer";
import CustomerDetails from "./pages/customers/details/CustomerDetails";
import Cars from "./pages/cars/Cars";
import AddCar from "./pages/cars/AddCar";
import EditCustomer from "./pages/customers/EditCustomer";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Cars />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:customId" element={<CustomerDetails />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/edit-customer" element={<EditCustomer />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
