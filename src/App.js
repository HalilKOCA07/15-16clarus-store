import AuthProvider from "./contexts/AuthProvider";
import ProductsProvider from "./contexts/ProductsProvider";
import Login from "./pages/Login";
import Router from "./routes/Router";

function App() {
  return (
    <ProductsProvider>
      <Router />
    </ProductsProvider>
  );
}

export default App;
