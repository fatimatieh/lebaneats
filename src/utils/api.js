const BASE_URL = "http://localhost:5000/api";

function getToken() {
  return localStorage.getItem("token") || "";
}

async function request(path, options = {}) {
  const token = getToken();

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || data.ok === false) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

//favorites

export async function getFavorites() {
  const data = await request("/favorites");
  return data.favorites || [];
}

export async function addFavorite(recipeId) {
  await request("/favorites", {
    method: "POST",
    body: JSON.stringify({ recipe_id: recipeId }),
  });
}

export async function removeFavorite(recipeId) {
  await request(`/favorites/${recipeId}`, { method: "DELETE" });
}

//meal planner 

export async function getMealPlan() {
  const data = await request("/meal-plans");
  return data.mealPlan || {};
}

export async function saveMealSlot(day_of_week, meal_type, recipeId) {
  await request("/meal-plans", {
    method: "PUT",
    body: JSON.stringify({
      day_of_week,
      meal_type,
      recipe_id: recipeId || null,
    }),
  });
}

//pantry

export async function getPantryItems() {
  const data = await request("/pantry");
  return data.items || [];
}

export async function addPantryItem(itemName) {
  const data = await request("/pantry", {
    method: "POST",
    body: JSON.stringify({ item_name: itemName }),
  });
  return data.item;
}

export async function removePantryItem(itemId) {
  await request(`/pantry/${itemId}`, { method: "DELETE" });
}

export async function clearPantry() {
  await request("/pantry", { method: "DELETE" });
}

//shopping list

const GUEST_ORDERS_KEY = "orders_guest";

function loadGuestOrders() {
  try {
    return JSON.parse(localStorage.getItem(GUEST_ORDERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveGuestOrders(list) {
  localStorage.setItem(GUEST_ORDERS_KEY, JSON.stringify(list));
}


function dbToUiItem(row) {
  return {
    id: row.id,
    name: row.item_name,
    quantity: row.quantity || "",
    fromRecipeName: row.from_recipe_name || "",
  };
}


function uiToDbItem(item) {
  return {
    item_name: item.item_name || item.name || "",
    quantity: item.quantity || "",
    from_recipe_name: item.from_recipe_name || item.fromRecipeName || "",
  };
}


export async function getShoppingList() {
  const token = getToken();

  if (!token) {
    return loadGuestOrders();
  }


  const data = await request("/shopping-list");
  const rows = data.items || [];
  return rows.map(dbToUiItem);
}


export async function addShoppingItem(item_name, quantity = "", from_recipe_name = "") {
  const token = getToken();

  
  if (!token) {
    const list = loadGuestOrders();
    const newItem = {
      id: `guest-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: item_name,
      quantity: quantity || "",
      fromRecipeName: from_recipe_name || "",
    };
    const updated = [newItem, ...list];
    saveGuestOrders(updated);
    return newItem;
  }

  
  const data = await request("/shopping-list", {
    method: "POST",
    body: JSON.stringify({ item_name, quantity, from_recipe_name }),
  });

  
  return dbToUiItem(data.item);
}

export async function addShoppingItemsBulk(items = []) {
  const token = getToken();

  
  if (!token) {
    const list = loadGuestOrders();
    const now = Date.now();

    const toAdd = (items || [])
      .map((x, idx) => {
        const cleaned = uiToDbItem(x);
        if (!cleaned.item_name.trim()) return null;
        return {
          id: `guest-${now}-${idx}-${Math.random().toString(16).slice(2)}`,
          name: cleaned.item_name,
          quantity: cleaned.quantity || "",
          fromRecipeName: cleaned.from_recipe_name || "",
        };
      })
      .filter(Boolean);

    const updated = [...toAdd, ...list];
    saveGuestOrders(updated);
    return { ok: true, message: "Items added (guest)" };
  }

  
  const payload = (items || []).map(uiToDbItem);

  const data = await request("/shopping-list/bulk", {
    method: "POST",
    body: JSON.stringify({ items: payload }),
  });

  return data;
}


export async function removeShoppingItem(itemId) {
  const token = getToken();

  
  if (!token) {
    const list = loadGuestOrders();
    const updated = list.filter((x) => x.id !== itemId);
    saveGuestOrders(updated);
    return;
  }

  
  await request(`/shopping-list/${itemId}`, { method: "DELETE" });
}


export async function clearShoppingList() {
  const token = getToken();

  
  if (!token) {
    saveGuestOrders([]);
    return;
  }

 
  await request("/shopping-list", { method: "DELETE" });
}

//feedback

export async function sendFeedback({ name, email, message }) {
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  const res = await fetch("http://localhost:5000/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      message,
      user_id: user?.id || null,
    }),
  });

  const data = await res.json();
  if (!res.ok || !data.ok) {
    throw new Error(data.message || "Failed to send feedback");
  }
}
