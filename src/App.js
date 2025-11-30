import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import PantryPage from "./pages/PantryPage";
import OrdersPage from "./pages/OrdersPage";
import MealPlannerPage from "./pages/MealPlannerPage";
import FavoritesPage from "./pages/FavoritesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import recipesData from "./data/recipesData";


const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);


const SplashScreen = () => {
  return (
   <motion.div
  style={{
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f6e9d4", 
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>

    <motion.img
  src="/images/logoweb.png"
  alt="Lebaneats logo"
  style={{
    width: "1100px",     
    height: "auto",
    marginBottom: "1.5rem",
  }}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0 }}  
  transition={{ duration: 1, ease: "easeOut" }}
/>


    
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const [recipes] = useState(recipesData);
  const [favorites, setFavorites] = useState([]);
  const [pantryItems, setPantryItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [mealPlan, setMealPlan] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isFavorite = (id) => favorites.includes(id);

  const addOrderItems = (items) => {
    const newItems = items.map((i) => ({
      id: `${i.name}-${Date.now()}`,
      name: i.name,
      quantity: i.quantity || "",
      fromRecipeName: i.fromRecipeName || "",
    }));

    setOrders((prev) => [...prev, ...newItems]);
  };

  const clearOrders = () => setOrders([]);

  const generateShoppingListFromMealPlan = () => {
    let ids = [];

    Object.values(mealPlan).forEach((day) => {
      if (!day) return;
      Object.values(day).forEach((recipeId) => {
        if (recipeId) ids.push(recipeId);
      });
    });

    ids = [...new Set(ids)];

    const items = [];

    ids.forEach((id) => {
      const r = recipes.find((x) => x.id === id);
      if (!r) return;

      r.ingredients.forEach((ing) => {
        items.push({
          name: ing.name,
          quantity: ing.quantity,
          fromRecipeName: r.name,
        });
      });
    });

    addOrderItems(items);
  };

  if (showSplash) {
    return (
      <div className="app-root">
        <SplashScreen />
      </div>
    );
  }

  return (
    <div className="app-root">
      <main className="app-main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <HomePage recipes={recipes} />
                </PageWrapper>
              }
            />

            <Route
              path="/recipes"
              element={
                <PageWrapper>
                  <RecipesPage
                    recipes={recipes}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                </PageWrapper>
              }
            />

            <Route
              path="/recipes/:id"
              element={
                <PageWrapper>
                  <RecipeDetailsPage
                    recipes={recipes}
                    isFavorite={isFavorite}
                    toggleFavorite={toggleFavorite}
                    addOrderItems={addOrderItems}
                  />
                </PageWrapper>
              }
            />

            <Route
              path="/pantry"
              element={
                <PageWrapper>
                  <PantryPage
                    recipes={recipes}
                    pantryItems={pantryItems}
                    setPantryItems={setPantryItems}
                    addOrderItems={addOrderItems}
                  />
                </PageWrapper>
              }
            />

            <Route
              path="/orders"
              element={
                <PageWrapper>
                  <OrdersPage
                    orders={orders}
                    clearOrders={clearOrders}
                  />
                </PageWrapper>
              }
            />

            <Route
              path="/meal-planner"
              element={
                <PageWrapper>
                  <MealPlannerPage
                    recipes={recipes}
                    mealPlan={mealPlan}
                    setMealPlan={setMealPlan}
                    generateShoppingListFromMealPlan={
                      generateShoppingListFromMealPlan
                    }
                  />
                </PageWrapper>
              }
            />

            <Route
              path="/favorites"
              element={
                <PageWrapper>
                  <FavoritesPage
                    recipes={recipes}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                </PageWrapper>
              }
            />

            <Route
              path="/about"
              element={
                <PageWrapper>
                  <AboutPage />
                </PageWrapper>
              }
            />

            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <ContactPage />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
