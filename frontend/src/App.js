import React from "react";


// COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";
import StoreList from "./components/StoreList";
import ProductSearchBar from "./components/ProductSearchBar";
import ProductsToBeSearchedList from "./components/ProductsToBeSearchedList";
import BottomButtons from "./components/BottomButtons";

// CONTEXTPROVIDERS
import ShoppingListContextProvider from "./contexts/ShoppingListContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import AutoCompleteContextProvider from "./contexts/AutoCompleteContext";
import StoreContextProvider from "./contexts//StoreContext";

// CSS/SASS
import "./sass/styles.scss";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <ShoppingListContextProvider>
          <CategoryContextProvider>
            <AutoCompleteContextProvider>
              <Header />
              <main className="container">
                <div className="row">
                  <ProductSearchBar />
                  <ProductsToBeSearchedList />
                  <StoreList />
                  <BottomButtons />
                </div>
              </main>
              <Footer />
            </AutoCompleteContextProvider>
          </CategoryContextProvider>
        </ShoppingListContextProvider>
      </StoreContextProvider>
    </div>
  );
}

export default App;
