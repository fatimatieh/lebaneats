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
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
  addShoppingItemsBulk,
} from "./utils/api";

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
        zIndex: 9999,
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

//helpers for order dedupe

const normalize = (s) => (s || "").toString().trim().toLowerCase();

function mergeOrderItems(existing = [], incoming = []) {
  const map = new Map();

  const put = (it) => {
    const name = (it?.name || "").toString().trim();
    if (!name) return;

    const key = normalize(name);
    const qty = (it.quantity || "").toString().trim();
    const from = (it.fromRecipeName || "").toString().trim();

    if (!map.has(key)) {
      map.set(key, {
        id: it.id || `${name}-${Date.now()}-${Math.random()}`,
        name,
        quantity: qty,
        fromRecipeName: from,
      });
      return;
    }

    const cur = map.get(key);

    
    if (!cur.quantity && qty) cur.quantity = qty;

    const sources = new Set(
      (cur.fromRecipeName || "")
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean)
    );
    if (from) sources.add(from);
    cur.fromRecipeName = Array.from(sources).join(", ");
  };

  existing.forEach(put);
  incoming.forEach(put);

  return Array.from(map.values());
}

function App() {
  const location = useLocation();

  
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const [recipes] = useState(recipesData);

  
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(() => {
    try {
      const u = JSON.parse(localStorage.getItem("user") || "null");
      return u?.id || "";
    } catch {
      return "";
    }
  });

  
 useEffect(() => {
  const t = localStorage.getItem("token") || "";
  if (t !== token) setToken(t);

  try {
    const u = JSON.parse(localStorage.getItem("user") || "null");
    const id = u?.id || "";
    if (id !== userId) setUserId(id);
  } catch {
    if (userId !== "") setUserId("");
  }
}, [location.pathname, token, userId]);



  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function loadFavorites() {
      if (!token) {
        setFavorites([]);
        return;
      }

      try {
        const favs = await getFavorites();
        if (!cancelled) setFavorites(favs);
      } catch (e) {
        console.log("Load favorites error:", e.message);
        if (!cancelled) setFavorites([]);
      }
    }

    loadFavorites();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const isFavorite = (id) => favorites.includes(id);

  const toggleFavorite = async (id) => {
    if (!token) {
      alert("Please login first.");
      return;
    }

    const already = favorites.includes(id);

    setFavorites((prev) =>
      already ? prev.filter((x) => x !== id) : [...prev, id]
    );

    try {
      if (already) {
        await removeFavorite(id);
      } else {
        await addFavorite(id);
      }
    } catch (e) {
      
      setFavorites((prev) =>
        already ? [...prev, id] : prev.filter((x) => x !== id)
      );
      alert(e.message);
    }
  };

  const [mealPlan, setMealPlan] = useState({});

  useEffect(() => {
    let cancelled = false;

    async function loadMealPlan() {
     
      if (!token) {
        try {
          const guest = JSON.parse(
            localStorage.getItem("mealPlan_guest") || "{}"
          );
          if (!cancelled) setMealPlan(guest);
        } catch {
          if (!cancelled) setMealPlan({});
        }
        return;
      }

      
      try {
        const res = await fetch("http://localhost:5000/api/meal-plans", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok || !data.ok)
          throw new Error(data.message || "Failed to load meal plan");

        let mp = data.mealPlan || {};

        const looksFlat =
          mp &&
          !("Monday" in mp) &&
          (("breakfast" in mp) || ("lunch" in mp) || ("dinner" in mp));

        if (looksFlat) {
          mp = { Monday: mp };
        }

        if (!cancelled) setMealPlan(mp);
      } catch (e) {
        console.log("Load meal plan error:", e.message);
        if (!cancelled) setMealPlan({});
      }
    }

    loadMealPlan();
    return () => {
      cancelled = true;
    };
  }, [token]);

  useEffect(() => {
    if (token) return;
    localStorage.setItem("mealPlan_guest", JSON.stringify(mealPlan));
  }, [mealPlan, token]);


  const [pantryItems, setPantryItems] = useState([]);
  const [orders, setOrders] = useState([]);

 
  const addOrderItems = async (items) => {
    const incoming = (items || []).map((i) => ({
      name: (i.name || "").toString().trim(),
      quantity: i.quantity || "",
      fromRecipeName: i.fromRecipeName || "",
    }));

   
    setOrders((prev) => mergeOrderItems(prev, incoming));

   
    if (token) {
      const dedupIncoming = mergeOrderItems([], incoming);

      try {
        await addShoppingItemsBulk(
          dedupIncoming.map((x) => ({
            item_name: x.name,
            quantity: x.quantity || "",
            from_recipe_name: x.fromRecipeName || "",
          }))
        );
      } catch (e) {
        console.log("Save shopping list error:", e.message);
      }
    }
  };

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

  return (
    <div className="app-root">
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>

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
              path="/login"
              element={
                <PageWrapper>
                  <LoginPage />
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
                    token={token}
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
                  <OrdersPage token={token} orders={orders} setOrders={setOrders} />
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
                    generateShoppingListFromMealPlan={generateShoppingListFromMealPlan}
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

            <Route
              path="/register"
              element={
                <PageWrapper>
                  <RegisterPage />
                </PageWrapper>
              }
            />

            <Route
              path="/forgot-password"
              element={
                <PageWrapper>
                  <ForgotPasswordPage />
                </PageWrapper>
              }
            />

            <Route
              path="*"
              element={
                <PageWrapper>
                  <div style={{ padding: 30 }}>
                    <h2>404 - Page not found</h2>
                    <p>{location.pathname}</p>
                  </div>
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
