const recipes = [
 
  {
  id: "tabbouleh",
  name: "Tabbouleh",
  shortDescription: "Fresh parsley salad with bulgur, tomatoes, and lemon.",
  category: "Mezze",
  cookTime: 35,
  servings: 4,
  difficulty: "Easy",
  image: "/images/tabbouleh.jpg",
  videoUrl: "https://www.youtube.com/watch?v=tj7HF_iMO5U",
  ingredients: [
    { name: "Fresh parsley", quantity: "2 bunches" },
    { name: "Fine bulgur", quantity: "1/2 cup" },
    { name: "Tomatoes", quantity: "3 medium, diced" },
    { name: "Green onions", quantity: "3 stalks, sliced" },
    { name: "Lemon juice", quantity: "1/3 cup" },
    { name: "Olive oil", quantity: "1/4 cup" },
    { name: "Salt", quantity: "To taste" },
    { name: "Pepper", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Rinse the bulgur and soak it in warm water for 10–15 minutes.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Finely chop the parsley and green onions.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Dice the tomatoes into small cubes.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Drain the bulgur well and squeeze out any extra water.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "In a large bowl, combine parsley, tomatoes, green onions, and bulgur.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Add lemon juice, olive oil, salt, and pepper. Mix well and adjust seasoning.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "fattoush",
  name: "Fattoush",
  shortDescription: "Crispy salad with toasted Arabic bread and sumac.",
  category: "Mezze",
  cookTime: 25,
  servings: 4,
  difficulty: "Easy",
  image: "/images/fattoush.jpg",
  videoUrl: "https://www.youtube.com/watch?v=2VwJwYxK5IM",
  ingredients: [
    { name: "Lettuce", quantity: "1 small head, chopped" },
    { name: "Tomatoes", quantity: "2 medium, chopped" },
    { name: "Cucumbers", quantity: "2 small, sliced" },
    { name: "Radishes", quantity: "4, sliced" },
    { name: "Green onions", quantity: "3 stalks, sliced" },
    { name: "Arabic bread", quantity: "2 loaves, toasted" },
    { name: "Lemon juice", quantity: "1/4 cup" },
    { name: "Olive oil", quantity: "1/4 cup" },
    { name: "Sumac", quantity: "2 tbsp" },
    { name: "Salt", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Chop and slice all vegetables into bite-size pieces.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Toast or fry the Arabic bread until crispy, then break into small pieces.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "In a small bowl, whisk together olive oil, lemon juice, sumac, and salt.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "In a large bowl, toss vegetables with the dressing.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add the crispy bread just before serving and gently mix.",
      minutes: 4,
      durationSeconds: 4 * 60
    }
  ]
},

{
  id: "manakish-zaatar",
  name: "Manakish Zaatar",
  shortDescription: "Lebanese flatbread topped with zaatar and olive oil.",
  category: "Breakfast",
  cookTime: 30,
  servings: 4,
  difficulty: "Medium",
  image: "/images/manakish-zaatar.jpg",
  videoUrl: "https://www.youtube.com/watch?v=ARmQEJK2qTg",
  ingredients: [
    { name: "Flour", quantity: "3 cups" },
    { name: "Warm water", quantity: "1 cup" },
    { name: "Yeast", quantity: "1 tbsp" },
    { name: "Sugar", quantity: "1 tsp" },
    { name: "Salt", quantity: "1 tsp" },
    { name: "Olive oil", quantity: "1/4 cup + extra" },
    { name: "Zaatar mix", quantity: "1/3 cup" }
  ],
  steps: [
    {
      text: "In a bowl, mix warm water, yeast, sugar, and let it sit for 5–10 minutes.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "In a large bowl, mix flour and salt, then add the yeast mixture and olive oil.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Knead until smooth, cover, and let rise for 45–60 minutes.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "Preheat oven to 220°C. Divide dough into small balls and flatten into circles.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Mix zaatar with olive oil to form a paste and spread over the dough.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Bake for 8–10 minutes until the edges are lightly golden.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "hummus",
  name: "Hummus",
  shortDescription: "Smooth chickpea and tahini dip with lemon and garlic.",
  category: "Mezze",
  cookTime: 15,
  servings: 4,
  difficulty: "Easy",
  image: "/images/hummus.jpg",
  videoUrl: "https://www.youtube.com/watch?v=_JNhOq14irM",
  ingredients: [
    { name: "Cooked chickpeas", quantity: "1 1/2 cups (or 1 can, drained)" },
    { name: "Tahini", quantity: "1/4 cup" },
    { name: "Lemon juice", quantity: "2–3 tbsp" },
    { name: "Garlic", quantity: "1–2 cloves, crushed" },
    { name: "Ice-cold water", quantity: "2–3 tbsp" },
    { name: "Olive oil", quantity: "2 tbsp + extra to serve" },
    { name: "Salt", quantity: "1/2 tsp or to taste" },
    { name: "Ground cumin (optional)", quantity: "1/2 tsp" },
    { name: "Paprika & parsley", quantity: "For garnish" }
  ],
  steps: [
    {
      text: "Add chickpeas, tahini, lemon juice, garlic, salt, and cumin to a food processor.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Blend until thick and creamy, adding ice water 1 tbsp at a time until smooth.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Taste and adjust lemon and salt.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Spoon into a shallow plate, swirl the top, and drizzle with olive oil.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Garnish with paprika and parsley and serve with warm pita bread.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

{
  id: "mtabbal",
  name: "Mtabbal / Baba Ghanouj",
  shortDescription: "Smoky roasted eggplant dip with tahini, lemon, and garlic.",
  category: "Mezze",
  cookTime: 30,
  servings: 4,
  difficulty: "Easy",
  image: "/images/baba-ghanoush.jpg",
  videoUrl: "https://www.youtube.com/watch?v=qf0fO68_4N8",
  ingredients: [
    { name: "Eggplants", quantity: "2 medium" },
    { name: "Tahini", quantity: "2–3 tbsp" },
    { name: "Lemon juice", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 clove, crushed" },
    { name: "Olive oil", quantity: "2 tbsp + extra to serve" },
    { name: "Salt", quantity: "To taste" },
    { name: "Parsley & pomegranate seeds", quantity: "For garnish (optional)" }
  ],
  steps: [
    {
      text: "Pierce eggplants and roast over open flame or in a very hot oven until skin is charred and flesh is soft.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Let cool slightly, peel off the skin, and place the flesh in a bowl or food processor.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add tahini, lemon juice, garlic, salt, and olive oil, then mash or blend until creamy with small chunks.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Transfer to a serving plate and drizzle with more olive oil.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Garnish with parsley and pomegranate seeds if desired and serve with pita.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

{
  id: "warak-enab",
  name: "Warak Enab",
  shortDescription: "Stuffed grape leaves with rice, meat, and herbs.",
  category: "Mezze",
  cookTime: 90,
  servings: 6,
  difficulty: "Medium",
  image: "/images/warak-enab.jpg",
  videoUrl: "https://www.youtube.com/watch?v=x9u4B4b7F78",
  ingredients: [
    { name: "Grape leaves", quantity: "300 g, rinsed" },
    { name: "Short-grain rice", quantity: "1 1/2 cups, rinsed" },
    { name: "Minced beef or lamb", quantity: "250 g" },
    { name: "Onion", quantity: "1 medium, finely chopped" },
    { name: "Parsley", quantity: "2 tbsp, chopped" },
    { name: "Fresh mint", quantity: "2 tbsp, chopped" },
    { name: "Tomato paste", quantity: "2 tbsp" },
    { name: "Olive oil", quantity: "1/4 cup + extra" },
    { name: "Lemon juice", quantity: "Juice of 2 lemons" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Water or broth", quantity: "As needed" }
  ],
  steps: [
    {
      text: "Rinse grape leaves. If fresh, blanch briefly in boiling water and drain.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "In a bowl, mix rice, minced meat, onion, parsley, mint, tomato paste, salt, pepper, and olive oil.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Place a leaf shiny side down, add a small line of filling near the stem side, fold sides over, and roll tightly.",
      minutes: 30,
      durationSeconds: 30 * 60
    },
    {
      text: "Arrange rolls in a pot in tight layers, place lemon slices or a plate on top.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Pour lemon juice and enough water or broth to almost cover. Drizzle with olive oil, cover, and simmer on low for 45–60 minutes until rice and meat are cooked.",
      minutes: 30,
      durationSeconds: 30 * 60
    }
  ]
},

{
  id: "kebbeh-nayyeh",
  name: "Kebbeh Nayyeh",
  shortDescription: "Traditional raw kibbeh with fine bulgur and minced meat.",
  category: "Mezze",
  cookTime: 40,
  servings: 4,
  difficulty: "Hard",
  image: "images/kibbeh-nayye.jpg",
  videoUrl: "https://www.youtube.com/watch?v=6w-HQwgt90Y",
  ingredients: [
    { name: "Lean beef or lamb, very fresh", quantity: "400 g, finely minced" },
    { name: "Fine bulgur", quantity: "1/2 cup, rinsed and drained" },
    { name: "Onion", quantity: "1 small, finely grated" },
    { name: "Ground cinnamon", quantity: "1 tsp" },
    { name: "Ground allspice", quantity: "1 tsp" },
    { name: "Ground black pepper", quantity: "1/2 tsp" },
    { name: "Salt", quantity: "To taste" },
    { name: "Olive oil", quantity: "To drizzle" },
    { name: "Mint leaves & green onions", quantity: "To serve" }
  ],
  steps: [
    {
      text: "Soak bulgur in cold water for 5–10 minutes, then drain and squeeze out excess water.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "Mix minced meat with bulgur, grated onion, spices, and salt.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "Knead the mixture well with your hands until smooth and paste-like.",
      minutes: 12,
      durationSeconds: 12 * 60
    },
    {
      text: "Spread on a flat plate and shape with a knife or fork pattern.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Drizzle with olive oil and serve immediately with mint, onions, and bread.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "kebbeh-makliyeh",
  name: "Kebbeh Makliyeh",
  shortDescription: "Fried kibbeh shells stuffed with spiced meat and pine nuts.",
  category: "Mezze",
  cookTime: 70,
  servings: 6,
  difficulty: "Hard",
  image: "/images/kebbeh-makleye.jpg",
  videoUrl: "https://www.youtube.com/watch?v=R7eT8au-77U",
  ingredients: [
    { name: "Fine bulgur", quantity: "2 cups" },
    { name: "Minced meat for shell", quantity: "500 g lean beef or lamb" },
    { name: "Onion for shell", quantity: "1 small, grated" },
    { name: "Ground cinnamon", quantity: "1 tsp" },
    { name: "Allspice", quantity: "1 tsp" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Flour (optional)", quantity: "2 tbsp, for binding" },
    { name: "Minced meat for filling", quantity: "250 g" },
    { name: "Onions for filling", quantity: "2 medium, finely chopped" },
    { name: "Pine nuts", quantity: "2 tbsp, toasted" },
    { name: "Vegetable oil", quantity: "2–3 tbsp + extra for frying" }
  ],
  steps: [
    {
      text: "Soak bulgur in water for 10–15 minutes, then drain and squeeze well.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Mix bulgur with 500 g minced meat, grated onion, spices, salt, and flour if needed. Knead until smooth to form the kibbeh shell dough.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "For the filling, sauté chopped onions in a little oil, add 250 g minced meat, season with salt and spices, and cook until browned. Stir in pine nuts and let cool.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Shape shell dough into oval balls, open a hole with your finger, fill with meat mixture, and close to form pointed-ended kibbeh.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Fry in hot oil until deep golden and crisp. Drain on paper towels and serve warm.",
      minutes: 15,
      durationSeconds: 15 * 60
    }
  ]
},

{
  id: "falafel",
  name: "Falafel",
  shortDescription: "Crispy fried patties made from chickpeas, herbs, and spices.",
  category: "Mezze",
  cookTime: 60,
  servings: 6,
  difficulty: "Medium",
  image: "/images/falafel.jpg",
  videoUrl: "https://www.youtube.com/watch?v=t0Z5oSulHtE",
  ingredients: [
    { name: "Dried chickpeas", quantity: "2 cups, soaked overnight" },
    { name: "Onion", quantity: "1 small, chopped" },
    { name: "Garlic", quantity: "3–4 cloves" },
    { name: "Fresh parsley", quantity: "1 cup leaves" },
    { name: "Fresh cilantro (optional)", quantity: "1/2 cup" },
    { name: "Ground cumin", quantity: "1 tsp" },
    { name: "Ground coriander", quantity: "1 tsp" },
    { name: "Baking powder", quantity: "1 tsp" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Sesame seeds", quantity: "For coating (optional)" },
    { name: "Oil for frying", quantity: "As needed" }
  ],
  steps: [
    {
      text: "Drain soaked chickpeas very well.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "In a food processor, pulse chickpeas, onion, garlic, parsley, and cilantro until finely ground but not a paste.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Add cumin, coriander, salt, pepper, and baking powder. Mix and chill for 30 minutes.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "Form small balls or patties and roll in sesame seeds if desired.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Fry in hot oil until deep golden and crisp. Serve hot with tahini sauce and salad.",
      minutes: 15,
      durationSeconds: 15 * 60
    }
  ]
},

{
  id: "batata-harra",
  name: "Batata Harra",
  shortDescription: "Spicy roasted potatoes with garlic, coriander, and lemon.",
  category: "Mezze",
  cookTime: 35,
  servings: 4,
  difficulty: "Easy",
  image: "/images/batata-harra.jpg",
  videoUrl: "https://www.youtube.com/watch?v=DdH4749ObOE",
  ingredients: [
    { name: "Potatoes", quantity: "800 g, cut into cubes" },
    { name: "Olive oil", quantity: "3 tbsp" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Garlic", quantity: "3 cloves, minced" },
    { name: "Green chilies or chili flakes", quantity: "1–2 or to taste" },
    { name: "Fresh coriander (cilantro)", quantity: "1/4 cup, chopped" },
    { name: "Lemon juice", quantity: "Juice of 1/2 lemon" }
  ],
  steps: [
    {
      text: "Toss potato cubes with 3 tbsp olive oil, salt, and pepper and roast in a hot oven until golden and crisp.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "In a pan, sauté garlic and chilies briefly in a little oil until fragrant.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add roasted potatoes and toss with garlic and chilies.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Stir in chopped coriander and lemon juice.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Serve immediately as a hot mezze dish.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

  {
  id: "mohammara",
  name: "Mohammara",
  shortDescription: "Walnut and roasted red pepper dip with pomegranate molasses.",
  category: "Mezze",
  cookTime: 20,
  servings: 4,
  difficulty: "Easy",
  image: "/images/mohammara.jpg",
  videoUrl: "https://www.youtube.com/watch?v=FetbU_N8rk8",
  ingredients: [
    { name: "Roasted red bell peppers", quantity: "3, peeled and seeded" },
    { name: "Walnuts", quantity: "1 cup" },
    { name: "Breadcrumbs", quantity: "1/2 cup" },
    { name: "Pomegranate molasses", quantity: "2–3 tbsp" },
    { name: "Olive oil", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "1 small clove" },
    { name: "Ground cumin", quantity: "1/2 tsp" },
    { name: "Chili flakes", quantity: "Pinch" },
    { name: "Salt", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Place roasted peppers, walnuts, breadcrumbs, garlic, cumin, chili, and salt in a food processor.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Blend until smooth but still slightly textured.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add olive oil and pomegranate molasses and blend again.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Adjust seasoning and sweetness/sourness to taste.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Serve drizzled with olive oil and extra walnuts or pomegranate seeds.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "loubieh-b-zeit",
  name: "Loubieh b Zeit",
  shortDescription: "Green beans cooked slowly in olive oil with tomatoes and garlic.",
  category: "Mezze",
  cookTime: 45,
  servings: 4,
  difficulty: "Easy",
  image: "/images/loubieh-bzet.jpg",
  videoUrl: "https://www.youtube.com/watch?v=MjbH8NFdKwk",
  ingredients: [
    { name: "Green beans", quantity: "500 g, trimmed and cut" },
    { name: "Onion", quantity: "1 medium, chopped" },
    { name: "Garlic", quantity: "3 cloves, sliced" },
    { name: "Tomatoes", quantity: "3 medium, chopped (or 1 can diced)" },
    { name: "Olive oil", quantity: "1/4 cup" },
    { name: "Salt & pepper", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Heat olive oil in a pot and sauté onions until soft.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Add garlic and cook briefly until fragrant.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Add green beans and sauté for a few minutes.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Stir in tomatoes, salt, and pepper, cover, and cook on low heat 30–40 minutes until beans are tender and sauce is thick.",
      minutes: 25,
      durationSeconds: 25 * 60
    },
    {
      text: "Serve warm or at room temperature with bread.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "rekakat-jebneh",
  name: "Rekakat Jebneh",
  shortDescription: "Crispy cheese rolls made with thin pastry.",
  category: "Mezze",
  cookTime: 30,
  servings: 4,
  difficulty: "Easy",
  image: "/images/rekakat-jebneh.jpg",
  videoUrl: "https://www.youtube.com/watch?v=SyTpHl82zSY",
  ingredients: [
    { name: "Spring roll wrappers or pastry squares", quantity: "12–16 pieces" },
    { name: "White cheese (akkawi, feta, etc.)", quantity: "1 1/2 cups, shredded" },
    { name: "Parsley", quantity: "2 tbsp, chopped" },
    { name: "Egg white", quantity: "1, for sealing" },
    { name: "Oil for frying", quantity: "As needed" }
  ],
  steps: [
    {
      text: "In a bowl, mix shredded cheese with chopped parsley.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Place a spoon of filling near one edge of each wrapper, fold sides in, and roll tightly.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Seal the edge with a little egg white.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Fry rolls in hot oil until golden and crisp.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Drain on paper towels and serve hot.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "sambousek-lahmeh",
  name: "Sambousek Lahmeh",
  shortDescription: "Fried savory pastries filled with minced meat and pine nuts.",
  category: "Mezze",
  cookTime: 45,
  servings: 6,
  difficulty: "Medium",
  image: "/images/sambosek-lahme.jpg",
  videoUrl: "https://www.youtube.com/watch?v=HbGdAiPa6M8",
  ingredients: [
    { name: "Sambousek dough circles", quantity: "As needed" },
    { name: "Minced beef or lamb", quantity: "250 g" },
    { name: "Onion", quantity: "1 small, finely chopped" },
    { name: "Pine nuts", quantity: "2 tbsp, toasted" },
    { name: "Vegetable oil", quantity: "1 tbsp + extra for frying" },
    { name: "Salt, pepper, allspice", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Sauté onions in 1 tbsp oil until soft, then add minced meat and cook until browned.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Season with salt, pepper, and allspice, then stir in toasted pine nuts and let filling cool.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Place a spoon of filling in the center of each dough circle and fold into a half moon, sealing edges well.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Fry in hot oil until golden and crisp.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Drain on paper towels and serve warm.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "arnabeet-mekleh",
  name: "Arnabeet Mekleh",
  shortDescription: "Fried cauliflower served with garlic tahini tarator sauce.",
  category: "Mezze",
  cookTime: 35,
  servings: 4,
  difficulty: "Easy",
  image: "/images/arnabit-me2le.jpg",
  videoUrl: "https://www.youtube.com/watch?v=dUMk-q4VmeU",
  ingredients: [
    { name: "Cauliflower", quantity: "1 medium, cut into florets" },
    { name: "Oil for frying", quantity: "As needed" },
    { name: "Salt", quantity: "To taste" },
    { name: "Tahini", quantity: "1/4 cup" },
    { name: "Lemon juice", quantity: "2–3 tbsp" },
    { name: "Garlic", quantity: "1 clove, crushed" },
    { name: "Water", quantity: "As needed for sauce" },
    { name: "Salt for sauce", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Blanch cauliflower florets briefly in salted boiling water, then drain well.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Fry the florets in hot oil until golden and tender. Drain on paper towels and sprinkle with salt.",
      minutes: 12,
      durationSeconds: 12 * 60
    },
    {
      text: "For the sauce, whisk tahini, lemon juice, garlic, salt, and enough water to reach a pourable consistency.",
      minutes: 6,
      durationSeconds: 6 * 60
    },
    {
      text: "Arrange fried cauliflower on a plate.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Drizzle with tahini sauce or serve the sauce on the side.",
      minutes: 4,
      durationSeconds: 4 * 60
    }
  ]
},

{
  id: "makanek",
  name: "Makanek",
  shortDescription: "Lebanese spiced sausages sautéed and finished with lemon.",
  category: "Mezze",
  cookTime: 20,
  servings: 4,
  difficulty: "Easy",
  image: "/images/makanek.jpg",
  videoUrl: "https://www.youtube.com/watch?v=6_r02HeOxSM",
  ingredients: [
    { name: "Makanek sausages", quantity: "400 g" },
    { name: "Vegetable oil", quantity: "1–2 tbsp" },
    { name: "Lemon juice", quantity: "Juice of 1 lemon" },
    { name: "Pine nuts (optional)", quantity: "2 tbsp, toasted" },
    { name: "Parsley (optional)", quantity: "2 tbsp, chopped" }
  ],
  steps: [
    {
      text: "Heat oil in a pan over medium heat.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Add makanek and cook, stirring, until browned and cooked through.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Add lemon juice and let it bubble for 1–2 minutes to coat the sausages.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Transfer to a serving plate.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Garnish with toasted pine nuts and parsley if desired and serve hot.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

{
  id: "soujouk-mekleh",
  name: "Soujouk Mekleh",
  shortDescription: "Spicy soujouk sausages cooked in a simple tomato-lemon sauce.",
  category: "Mezze",
  cookTime: 20,
  servings: 4,
  difficulty: "Easy",
  image: "/images/sujuk.jpg",
  videoUrl: "https://www.youtube.com/shorts/cd8OcSXXRJo",
  ingredients: [
    { name: "Soujouk sausages", quantity: "400 g, sliced or whole" },
    { name: "Oil", quantity: "1 tbsp" },
    { name: "Tomato", quantity: "1 small, finely chopped (or 1/2 cup tomato sauce)" },
    { name: "Lemon juice", quantity: "Juice of 1/2 lemon" },
    { name: "Chili flakes (optional)", quantity: "Pinch" }
  ],
  steps: [
    {
      text: "Heat oil in a pan and sauté soujouk until it releases fat and begins to brown.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "Add chopped tomato or tomato sauce and chili flakes if using.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Cook a few minutes until the sauce thickens slightly.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Finish with a squeeze of lemon juice.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Serve hot with bread as mezze.",
      minutes: 1,
      durationSeconds: 1 * 60
    }
  ]
},

{
  id: "salatet-raheb",
  name: "Salatet Raheb",
  shortDescription: "Smoky eggplant and tomato salad with olive oil and lemon.",
  category: "Mezze",
  cookTime: 30,
  servings: 4,
  difficulty: "Easy",
  image: "/images/salatet-raheb.jpg",
  videoUrl: "https://www.youtube.com/watch?v=uE9n8hT4_xo",
  ingredients: [
    { name: "Eggplants", quantity: "2 medium" },
    { name: "Tomatoes", quantity: "2, diced" },
    { name: "Cucumber", quantity: "1 small, diced" },
    { name: "Onion or green onions", quantity: "1 small or 2 green, chopped" },
    { name: "Parsley", quantity: "2 tbsp, chopped" },
    { name: "Olive oil", quantity: "2–3 tbsp" },
    { name: "Lemon juice", quantity: "2 tbsp" },
    { name: "Salt & pepper", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Roast eggplants over flame or in the oven until skin is charred and flesh is soft.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Peel, chop the flesh, and place in a bowl.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add tomatoes, cucumber, onions, and parsley.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Season with salt, pepper, olive oil, and lemon juice.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Toss gently and serve at room temperature.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "hindbeh-b-zeit",
  name: "Hindbeh b Zeit",
  shortDescription: "Sautéed dandelion greens with caramelized onions and olive oil.",
  category: "Mezze",
  cookTime: 40,
  servings: 4,
  difficulty: "Medium",
  image: "/images/hindbeh.jpg",
  videoUrl: "https://www.youtube.com/watch?v=0kaUE6YQIF4",
  ingredients: [
    { name: "Dandelion or similar greens", quantity: "500 g, washed" },
    { name: "Onions", quantity: "2 large, thinly sliced" },
    { name: "Olive oil", quantity: "1/4 cup + extra" },
    { name: "Lemon juice", quantity: "Juice of 1 lemon" },
    { name: "Salt", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Boil greens in salted water for about 10 minutes, then drain and squeeze out excess water. Chop roughly.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "In a pan, heat olive oil and sauté onions until well caramelized and golden.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Remove half of the onions for garnish.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Add chopped greens to the pan with remaining onions, season with salt, and sauté a few minutes.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Arrange hindbeh on a plate, top with reserved onions, and drizzle with lemon juice and extra olive oil.",
      minutes: 7,
      durationSeconds: 7 * 60
    }
  ]
},

{
  id: "shanklish",
  name: "Shanklish",
  shortDescription: "Aged cheese balls served with tomatoes, onions, and herbs.",
  category: "Mezze",
  cookTime: 10,
  servings: 4,
  difficulty: "Easy",
  image: "/images/shanklish.jpg",
  videoUrl: "https://www.youtube.com/watch?v=WXpz6AHFy_w",
  ingredients: [
    { name: "Shanklish cheese balls", quantity: "4 small" },
    { name: "Tomatoes", quantity: "2, finely chopped" },
    { name: "Onion", quantity: "1 small, finely chopped" },
    { name: "Parsley", quantity: "2 tbsp, chopped" },
    { name: "Olive oil", quantity: "2–3 tbsp" },
    { name: "Dried thyme or oregano (optional)", quantity: "Pinch" }
  ],
  steps: [
    {
      text: "Place shanklish balls on a serving plate, whole or crumbled.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "In a bowl, mix chopped tomatoes, onions, and parsley.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Spoon the tomato mixture around or over the cheese.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Drizzle generously with olive oil and sprinkle with thyme if desired.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Serve with fresh bread as part of a mezze spread.",
      minutes: 1,
      durationSeconds: 1 * 60
    }
  ]
},

  {
  id: "kibbeh-bil-sayniyeh",
  name: "Kibbeh bil Sayniyeh",
  shortDescription: "Baked kibbeh tray layered with meat and onions.",
  category: "Main",
  cookTime: 70,
  servings: 6,
  difficulty: "Medium",
  image: "/images/kibbe-bl-sayniyeh.jpg",
  videoUrl: "https://www.youtube.com/watch?v=MiQoG_z5RLk",
  ingredients: [
    { name: "Fine bulgur", quantity: "2 cups, rinsed" },
    { name: "Lean minced beef or lamb", quantity: "700 g (for shell & filling)" },
    { name: "Onions", quantity: "3 medium, finely chopped" },
    { name: "Pine nuts", quantity: "3 tbsp, toasted" },
    { name: "Ground cinnamon", quantity: "1 1/2 tsp" },
    { name: "Allspice", quantity: "1 1/2 tsp" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Olive oil or ghee", quantity: "3–4 tbsp" }
  ],
  steps: [
    {
      text: "Soak bulgur in water for 10–15 minutes, then drain and squeeze well.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Mix half the minced meat with bulgur, grated onion from 1 onion, salt, pepper, and spices. Knead to form a smooth kibbeh dough.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "For the filling, sauté remaining onions in oil until soft, add the rest of the minced meat, season, and cook until browned. Stir in toasted pine nuts.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Grease a baking dish. Press half the kibbeh dough evenly on the bottom.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Spread the meat filling on top, then cover with the remaining kibbeh dough, smoothing the surface. Score diamond patterns.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Drizzle with oil or dot with ghee and bake at 190°C for 35–40 minutes until browned.",
      minutes: 20,
      durationSeconds: 20 * 60
    }
  ]
},

{
  id: "sayadiyeh",
  name: "Sayadiyeh",
  shortDescription: "Spiced rice with caramelized onions and fried fish.",
  category: "Main",
  cookTime: 60,
  servings: 4,
  difficulty: "Medium",
  image: "/images/sayadiyeh.jpg",
  videoUrl: "https://www.youtube.com/watch?v=tKKqpioIyag",
  ingredients: [
    { name: "White fish fillets", quantity: "800 g" },
    { name: "Long-grain rice", quantity: "2 cups, rinsed" },
    { name: "Onions", quantity: "3 large, sliced" },
    { name: "Fish stock or water", quantity: "4 cups" },
    { name: "Allspice", quantity: "1 tsp" },
    { name: "Ground cumin", quantity: "1 tsp" },
    { name: "Cinnamon", quantity: "1/2 tsp" },
    { name: "Flour", quantity: "For dusting fish" },
    { name: "Vegetable oil", quantity: "As needed for frying" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Pine nuts & parsley", quantity: "For garnish" }
  ],
  steps: [
    {
      text: "Season fish with salt and pepper, dust lightly with flour, and fry until golden. Set aside.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "In a pot, fry onion slices in oil until deeply caramelized and brown.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Add spices to onions, then pour in fish stock or water. Simmer 5 minutes and adjust salt.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Remove some onions for garnish. Add rinsed rice to the pot, bring to a boil, then cover and cook on low heat until rice is done.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "Serve rice on a platter topped with fried fish and reserved onions, garnished with pine nuts and parsley.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "mujadara",
  name: "Mujadara",
  shortDescription: "Comforting lentils and rice with caramelized onions.",
  category: "Main",
  cookTime: 45,
  servings: 4,
  difficulty: "Easy",
  image: "/images/mujadara.jpg",
  videoUrl: "https://www.youtube.com/watch?v=rZKrzK5hZcc",
  ingredients: [
    { name: "Brown lentils", quantity: "1 cup, rinsed" },
    { name: "Rice or coarse bulgur", quantity: "3/4 cup" },
    { name: "Onions", quantity: "3 large, sliced" },
    { name: "Olive oil", quantity: "1/4 cup" },
    { name: "Water", quantity: "4 cups (approx.)" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Cumin (optional)", quantity: "1/2 tsp" }
  ],
  steps: [
    {
      text: "In a pot, cook lentils in water for about 15 minutes until half done.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Add rice or bulgur, salt, pepper, and cumin if using. Add more water if needed to cover by about 1 cm.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Cover and cook on low heat until lentils and rice are soft and mixture is thick and porridge-like.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Meanwhile, in a pan, fry onion slices in olive oil until deeply caramelized and brown.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Stir half the onions into the mujadara and use the rest on top for serving.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "mloukhiyeh",
  name: "Mloukhiyeh",
  shortDescription: "Jute leaf stew with chicken served over rice.",
  category: "Main",
  cookTime: 70,
  servings: 6,
  difficulty: "Medium",
  image: "/images/mloukhiye.jpg",
  videoUrl: "https://www.youtube.com/watch?v=JKBiJ_U0__c",
  ingredients: [
    { name: "Frozen or dried mloukhiyeh leaves", quantity: "800 g" },
    { name: "Chicken pieces (with bone)", quantity: "1 whole chicken cut or 1.2 kg" },
    { name: "Onion", quantity: "1 large, halved" },
    { name: "Garlic", quantity: "6 cloves, minced" },
    { name: "Coriander (cilantro)", quantity: "1/4 cup, chopped" },
    { name: "Lemon juice", quantity: "Juice of 2 lemons" },
    { name: "Bay leaf & spices", quantity: "1 bay, 1 tsp allspice, salt, pepper" },
    { name: "Rice", quantity: "3 cups, cooked separately" },
    { name: "Oil or ghee", quantity: "3–4 tbsp" }
  ],
  steps: [
    {
      text: "Boil chicken with onion, bay leaf, salt, pepper, and allspice until cooked. Remove chicken, shred or cut pieces, and keep the stock.",
      minutes: 30,
      durationSeconds: 30 * 60
    },
    {
      text: "If using frozen leaves, thaw and roughly chop. If dried, rinse and soak briefly, then drain.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "In a pot, heat oil and sauté garlic and coriander until fragrant.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add mloukhiyeh leaves and stir, then pour in enough chicken stock to form a stew. Simmer 20–30 minutes.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "Add chicken pieces and lemon juice, adjust salt, and cook another 5–10 minutes.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Serve hot mloukhiyeh over plain rice with extra lemon on the side.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "bamieh-bi-lahme",
  name: "Bamieh bi Lahme",
  shortDescription: "Okra stew with meat in tomato sauce served with rice.",
  category: "Main",
  cookTime: 60,
  servings: 4,
  difficulty: "Medium",
  image: "/images/bemye.jpg",
  videoUrl: "https://www.youtube.com/watch?v=799yWhU7D74",
  ingredients: [
    { name: "Okra (fresh or frozen)", quantity: "600 g" },
    { name: "Beef or lamb cubes", quantity: "400 g" },
    { name: "Onion", quantity: "1 medium, chopped" },
    { name: "Garlic", quantity: "3 cloves, minced" },
    { name: "Tomato paste", quantity: "2 tbsp" },
    { name: "Tomatoes or tomato sauce", quantity: "2 cups" },
    { name: "Water or stock", quantity: "2–3 cups" },
    { name: "Lemon juice", quantity: "Juice of 1 lemon" },
    { name: "Oil", quantity: "3 tbsp" },
    { name: "Salt & pepper", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Brown meat cubes in oil in a pot, then add chopped onion and sauté until soft.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Stir in garlic and tomato paste and cook briefly.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add tomato sauce and enough water or stock to cover. Season and simmer until meat is almost tender.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "Add okra and cook 20–25 minutes until okra and meat are fully cooked.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Finish with lemon juice and adjust seasoning. Serve with rice.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "fasoulia-bi-lahme",
  name: "Fasoulia bi Lahme",
  shortDescription: "White bean and meat stew in tomato sauce.",
  category: "Main",
  cookTime: 75,
  servings: 6,
  difficulty: "Medium",
  image: "/images/fasolya.jpg",
  videoUrl: "https://www.youtube.com/watch?v=Pq7UU-VHgKA",
  ingredients: [
    { name: "Dry white beans (or canned)", quantity: "2 cups dry or 3 cans" },
    { name: "Beef or lamb cubes", quantity: "400 g" },
    { name: "Onion", quantity: "1 large, chopped" },
    { name: "Garlic", quantity: "3 cloves, minced" },
    { name: "Tomato paste", quantity: "2–3 tbsp" },
    { name: "Water or stock", quantity: "4–5 cups" },
    { name: "Olive oil", quantity: "3 tbsp" },
    { name: "Salt, pepper, allspice", quantity: "To taste" }
  ],
  steps: [
    {
      text: "If using dry beans, soak overnight then boil until almost tender. Drain.",
      minutes: 30,
      durationSeconds: 30 * 60
    },
    {
      text: "Brown meat in olive oil, then add onion and cook until soft.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Add garlic, tomato paste, spices, and stir.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add beans and enough water or stock to cover well. Simmer until beans and meat are tender and sauce is thick.",
      minutes: 25,
      durationSeconds: 25 * 60
    },
    {
      text: "Adjust seasoning and serve hot with rice.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "kafta-w-batata",
  name: "Kafta w Batata",
  shortDescription: "Baked kafta patties with potato slices in tomato sauce.",
  category: "Main",
  cookTime: 60,
  servings: 4,
  difficulty: "Easy",
  image: "/images/kafta-wbatata.jpg",
  videoUrl: "https://www.youtube.com/watch?v=NwGHZGAAi4U",
  ingredients: [
    { name: "Kafta mixture", quantity: "600 g (minced meat, parsley, onion, spices)" },
    { name: "Potatoes", quantity: "3–4 medium, sliced into rounds" },
    { name: "Tomatoes", quantity: "2, sliced" },
    { name: "Onion", quantity: "1, sliced" },
    { name: "Tomato paste", quantity: "2 tbsp" },
    { name: "Water", quantity: "1 1/2 cups" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Olive oil", quantity: "2–3 tbsp" }
  ],
  steps: [
    {
      text: "Shape kafta mixture into flat patties and arrange in a baking dish.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Layer potato slices, onion rings, and tomato slices over the kafta.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Mix tomato paste with water, salt, and pepper, then pour over the dish. Drizzle with olive oil.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Cover with foil and bake at 190°C for about 35–40 minutes, then uncover and bake until potatoes are tender and top is slightly browned.",
      minutes: 30,
      durationSeconds: 30 * 60
    }
  ]
},

{
  id: "kafta-meshwi",
  name: "Kafta Meshwi",
  shortDescription: "Grilled kafta skewers of spiced minced meat.",
  category: "Main",
  cookTime: 30,
  servings: 4,
  difficulty: "Easy",
  image: "/images/kafta-meshwe.jpg",
  videoUrl: "https://www.youtube.com/shorts/JE9N0mUTIfE",
  ingredients: [
    { name: "Minced beef or lamb", quantity: "600 g" },
    { name: "Onion", quantity: "1 small, very finely chopped" },
    { name: "Parsley", quantity: "1/2 cup, finely chopped" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Allspice & cinnamon", quantity: "1 tsp total" },
    { name: "Skewers", quantity: "As needed" }
  ],
  steps: [
    {
      text: "Mix minced meat with onion, parsley, salt, pepper, and spices until sticky.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Shape the mixture around skewers into long kebabs.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Grill over charcoal or in a grill pan until cooked through, turning occasionally.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "Serve with grilled vegetables, salad, and bread.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

{
  id: "shish-taouk",
  name: "Shish Taouk",
  shortDescription: "Marinated grilled chicken skewers with garlic and lemon.",
  category: "Main",
  cookTime: 40,
  servings: 4,
  difficulty: "Easy",
  image: "/images/shishtawook.jpg",
  videoUrl: "https://www.youtube.com/watch?v=MGmZWMpd6Gk",
  ingredients: [
    { name: "Chicken breast or thighs", quantity: "800 g, cut into cubes" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Lemon juice", quantity: "1/4 cup" },
    { name: "Garlic", quantity: "4 cloves, minced" },
    { name: "Tomato paste", quantity: "1 tbsp" },
    { name: "Paprika", quantity: "1 tsp" },
    { name: "Vegetable oil", quantity: "3 tbsp" },
    { name: "Salt & pepper", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Mix yogurt, lemon juice, garlic, tomato paste, paprika, oil, salt, and pepper to make a marinade.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Add chicken cubes and coat well. Marinate at least 2 hours or overnight.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Thread chicken onto skewers and grill over medium heat, turning until cooked and slightly charred.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "Serve with garlic sauce, fries, and salad.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "lahm-meshwi",
  name: "Lahm Meshwi",
  shortDescription: "Grilled marinated meat skewers.",
  category: "Main",
  cookTime: 35,
  servings: 4,
  difficulty: "Easy",
  image: "/images/lahme-meshwi.jpg",
  videoUrl: "https://www.youtube.com/watch?v=wVuN5afEw0c",
  ingredients: [
    { name: "Beef or lamb cubes", quantity: "800 g" },
    { name: "Olive oil", quantity: "3 tbsp" },
    { name: "Lemon juice", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "3 cloves, minced" },
    { name: "Onion", quantity: "1 small, grated" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Allspice", quantity: "1 tsp" }
  ],
  steps: [
    {
      text: "Combine olive oil, lemon juice, garlic, grated onion, salt, pepper, and allspice for a marinade.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Add meat cubes, mix well, and marinate for at least 2 hours.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Thread onto skewers and grill over hot coals or on a grill pan until cooked to your liking.",
      minutes: 18,
      durationSeconds: 18 * 60
    },
    {
      text: "Serve with grilled vegetables, onions, and parsley.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},


  {
  id: "farrouj-meshwi",
  name: "Farrouj Meshwi",
  shortDescription: "Butterflied marinated chicken grilled until crispy.",
  category: "Main",
  cookTime: 60,
  servings: 4,
  difficulty: "Medium",
  image: "/images/farrouj-meshwe.jpg",
  videoUrl: "https://www.youtube.com/watch?v=wekUxHdSI-8",
  ingredients: [
    { name: "Whole chicken", quantity: "1.2–1.5 kg, butterflied" },
    { name: "Lemon juice", quantity: "1/4 cup" },
    { name: "Olive oil", quantity: "3 tbsp" },
    { name: "Garlic", quantity: "5 cloves, minced" },
    { name: "Paprika", quantity: "1 tsp" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Oregano or thyme", quantity: "1 tsp" }
  ],
  steps: [
    {
      text: "Mix lemon juice, olive oil, garlic, paprika, herbs, salt, and pepper.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "Rub the mixture all over the chicken, including under the skin. Marinate at least 2 hours.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Grill chicken on barbecue or bake in a hot oven, turning occasionally, until skin is crisp and meat is cooked through.",
      minutes: 40,
      durationSeconds: 40 * 60
    },
    {
      text: "Serve cut into pieces with fries and garlic sauce.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "shawarma-lahme",
  name: "Shawarma Lahme",
  shortDescription: "Marinated beef shawarma served in pita with garlic, tahini, and pickles.",
  category: "Main",
  cookTime: 45,
  servings: 4,
  difficulty: "Medium",
  image: "/images/shawarma-lahme.jpg",
  videoUrl: "https://www.youtube.com/watch?v=Y_UmFqWFbuw",
  ingredients: [
    { name: "Beef strips", quantity: "500 g" },
    { name: "Yogurt", quantity: "1/4 cup" },
    { name: "Olive oil", quantity: "3 tbsp" },
    { name: "Vinegar", quantity: "2 tbsp" },
    { name: "Garlic, minced", quantity: "4 cloves" },
    { name: "Shawarma spices", quantity: "1 tbsp" },
    { name: "Paprika", quantity: "1 tsp" },
    { name: "Cumin", quantity: "1 tsp" },
    { name: "Cinnamon", quantity: "1/2 tsp" },
    { name: "Salt", quantity: "To taste" },
    { name: "Black pepper", quantity: "To taste" },
    { name: "Pita bread", quantity: "As needed" },
    { name: "Pickles", quantity: "As needed" },
    { name: "Onions", quantity: "1 sliced" },
    { name: "Tahini sauce or garlic sauce", quantity: "As needed" }
  ],
  steps: [
    {
      text: "Mix yogurt, olive oil, vinegar, garlic, and all spices to form a marinade.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Add beef strips and mix well. Marinate at least 1 hour (overnight is best).",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Heat a pan with a bit of oil and cook the beef until browned and juicy.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Warm the pita bread and spread garlic or tahini sauce.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add beef, onions, and pickles. Roll tightly.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "Optionally toast the wrap for extra crispiness.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "shawarma-djej",
  name: "Shawarma Djej",
  shortDescription: "Juicy marinated chicken shawarma with garlic sauce and pickles.",
  category: "Main",
  cookTime: 40,
  servings: 4,
  difficulty: "Easy",
  image: "/images/shawrma-djej.jpg",
  videoUrl: "https://www.youtube.com/watch?v=R6e7HItOVNA",
  ingredients: [
    { name: "Chicken breast or thighs, sliced", quantity: "600 g" },
    { name: "Yogurt", quantity: "1/4 cup" },
    { name: "Olive oil", quantity: "3 tbsp" },
    { name: "Vinegar or lemon juice", quantity: "2 tbsp" },
    { name: "Garlic, minced", quantity: "4 cloves" },
    { name: "Shawarma spices", quantity: "1 tbsp" },
    { name: "Turmeric", quantity: "1 tsp" },
    { name: "Paprika", quantity: "1 tsp" },
    { name: "Cumin", quantity: "1 tsp" },
    { name: "Salt", quantity: "To taste" },
    { name: "Black pepper", quantity: "To taste" },
    { name: "Pita bread", quantity: "As needed" },
    { name: "Pickles", quantity: "As needed" },
    { name: "Garlic toum sauce", quantity: "As needed" }
  ],
  steps: [
    {
      text: "Mix yogurt, olive oil, lemon/vinegar, garlic, and all spices.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Add chicken slices and mix well. Marinate 1–3 hours.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Cook the chicken in a hot pan until golden and fully cooked.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Warm the pita bread and spread garlic sauce.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Fill with chicken and pickles, then roll.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Toast the wrap lightly in a pan for extra flavor.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "riz-a-djej",
  name: "Riz a Djej",
  shortDescription: "Spiced rice with shredded chicken and toasted nuts.",
  category: "Main",
  cookTime: 60,
  servings: 6,
  difficulty: "Medium",
  image: "/images/riz-djej.jpg",
  videoUrl: "https://www.youtube.com/watch?v=o5yw_R64nMk",
  ingredients: [
    { name: "Whole chicken or chicken pieces", quantity: "1.2 kg" },
    { name: "Long-grain rice", quantity: "2 cups, rinsed" },
    { name: "Onion", quantity: "1 medium, chopped" },
    { name: "Cinnamon stick", quantity: "1" },
    { name: "Allspice & cinnamon (ground)", quantity: "1 tsp total" },
    { name: "Clarified butter or oil", quantity: "3 tbsp" },
    { name: "Pine nuts & almonds", quantity: "1/2 cup, toasted" },
    { name: "Salt & pepper", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Boil chicken with onion, cinnamon stick, salt, and pepper until cooked. Remove chicken, shred meat, and reserve stock.",
      minutes: 30,
      durationSeconds: 30 * 60
    },
    {
      text: "In a pot, heat butter or oil and sauté rice briefly.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add 3 cups of chicken stock, ground spices, and salt. Bring to a boil, then cover and cook on low heat until rice is done.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Serve rice on a large platter topped with shredded chicken and toasted nuts.",
      minutes: 10,
      durationSeconds: 10 * 60
    }
  ]
},

{
  id: "sheikh-el-mahshi",
  name: "Sheikh el Mahshi",
  shortDescription: "Stuffed baby eggplants with meat in yogurt or tomato sauce.",
  category: "Main",
  cookTime: 70,
  servings: 4,
  difficulty: "Medium",
  image: "/images/sheikh-al-mahshoi.jpg",
  videoUrl: "https://www.youtube.com/watch?v=IQQZq428eNM",
  ingredients: [
    { name: "Small eggplants", quantity: "10–12" },
    { name: "Minced meat", quantity: "400 g" },
    { name: "Onion", quantity: "1 medium, chopped" },
    { name: "Pine nuts", quantity: "3 tbsp, toasted" },
    { name: "Yogurt or tomato sauce", quantity: "3 cups yogurt OR 3 cups tomato sauce" },
    { name: "Garlic & dried mint (for yogurt)", quantity: "2 cloves & 1 tsp" },
    { name: "Salt, pepper, allspice", quantity: "To taste" },
    { name: "Oil", quantity: "For frying and cooking" }
  ],
  steps: [
    {
      text: "Peel eggplants in stripes and fry or roast until lightly browned and soft. Slit each lengthwise and set aside.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "For filling, sauté onion in a little oil, add minced meat, season, and cook until browned. Stir in pine nuts.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Stuff each eggplant with meat mixture and arrange in a pot.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Cover with yogurt sauce (yogurt mixed with a little water, salt, garlic, and mint) or tomato sauce and simmer gently 20–30 minutes.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "Serve hot with rice.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "kousa-mehshi",
  name: "Kousa Mehshi",
  shortDescription: "Stuffed zucchini with rice and meat in tomato sauce.",
  category: "Main",
  cookTime: 70,
  servings: 6,
  difficulty: "Medium",
  image: "/images/kousa.jpg",
  videoUrl: "https://www.youtube.com/watch?v=iXmDiiV7Zwo",
  ingredients: [
    { name: "Small zucchini", quantity: "18–20" },
    { name: "Short-grain rice", quantity: "1 cup, rinsed" },
    { name: "Minced meat", quantity: "300 g" },
    { name: "Tomatoes", quantity: "2, finely chopped" },
    { name: "Tomato paste", quantity: "2–3 tbsp" },
    { name: "Water or stock", quantity: "4–5 cups" },
    { name: "Salt, pepper, allspice", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Core zucchini using a corer, leaving walls about 0.5 cm thick.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "Mix rice, minced meat, chopped tomatoes, spices, and a little tomato paste for the filling.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Fill zucchini loosely with mixture, leaving some space for rice to expand.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Arrange zucchini in a pot, cover with water mixed with tomato paste and salt.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Simmer gently 40–50 minutes until zucchini, rice, and meat are cooked.",
      minutes: 25,
      durationSeconds: 25 * 60
    }
  ]
},

{
  id: "kibbeh-labaniyeh",
  name: "Kibbeh Labaniyeh",
  shortDescription: "Kibbeh balls cooked in warm garlicky yogurt sauce.",
  category: "Main",
  cookTime: 60,
  servings: 6,
  difficulty: "Hard",
  image: "/images/kibbe-b-laban.jpg",
  videoUrl: "https://www.youtube.com/watch?v=GbAhem0CBQk",
  ingredients: [
    { name: "Prepared kibbeh balls", quantity: "24 (from kibbeh mixture)" },
    { name: "Plain yogurt", quantity: "1.5 kg" },
    { name: "Cornstarch or rice flour", quantity: "2 tbsp" },
    { name: "Egg", quantity: "1" },
    { name: "Garlic", quantity: "3 cloves, crushed" },
    { name: "Dried mint", quantity: "1 tsp" },
    { name: "Salt", quantity: "To taste" },
    { name: "Water", quantity: "1–2 cups" }
  ],
  steps: [
    {
      text: "In a bowl, whisk yogurt with cornstarch, egg, salt, and enough water to reach a soup-like consistency.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Cook yogurt over medium heat, stirring constantly in one direction until it comes to a gentle boil and thickens.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Drop kibbeh balls carefully into the boiling yogurt and simmer 15–20 minutes until cooked.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "In a small pan, fry garlic and dried mint in a bit of oil or ghee and pour over the yogurt.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Serve hot with rice.",
      minutes: 10,
      durationSeconds: 10 * 60
    }
  ]
},

{
  id: "fattet-hummus",
  name: "Fattet Hummus",
  shortDescription: "Layered chickpeas, toasted bread, and garlicky yogurt with nuts.",
  category: "Main",
  cookTime: 30,
  servings: 4,
  difficulty: "Easy",
  image: "/images/fattet-hummus.jpg",
  videoUrl: "https://www.youtube.com/watch?v=XvX5y2yTgnM",
  ingredients: [
    { name: "Cooked chickpeas", quantity: "2 cups" },
    { name: "Pita bread", quantity: "3, toasted or fried pieces" },
    { name: "Yogurt", quantity: "2 cups" },
    { name: "Tahini", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "2 cloves, crushed" },
    { name: "Lemon juice", quantity: "2–3 tbsp" },
    { name: "Salt", quantity: "To taste" },
    { name: "Butter or ghee", quantity: "2 tbsp" },
    { name: "Pine nuts", quantity: "3 tbsp, toasted" }
  ],
  steps: [
    {
      text: "Warm the chickpeas in a little of their cooking liquid and season with salt.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "Cut pita bread into squares and toast or fry until crisp.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Mix yogurt, tahini, garlic, lemon juice, and salt to make the sauce.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "In a serving dish, place a layer of bread, top with chickpeas and some of their warm liquid, then cover with yogurt sauce.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Melt butter or ghee, toast pine nuts in it, and pour over the top just before serving.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "maqloubeh",
  name: "Maqloubeh",
  shortDescription: "Layered rice with vegetables and meat flipped upside down.",
  category: "Main",
  cookTime: 80,
  servings: 6,
  difficulty: "Medium",
  image: "/images/maqloube.jpg",
  videoUrl: "https://www.youtube.com/watch?v=OmxfzjNE4_o",
  ingredients: [
    { name: "Meat or chicken pieces", quantity: "600–800 g" },
    { name: "Long-grain rice", quantity: "2 cups, rinsed" },
    { name: "Eggplant, cauliflower, or other vegetables", quantity: "700 g total, sliced and fried/roasted" },
    { name: "Onion", quantity: "1, chopped" },
    { name: "Allspice, cinnamon, cardamom", quantity: "2 tsp total" },
    { name: "Water or stock", quantity: "4 cups" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Oil", quantity: "For frying and cooking" }
  ],
  steps: [
    {
      text: "Cook meat or chicken with onion, spices, salt, and water until tender. Reserve stock.",
      minutes: 25,
      durationSeconds: 25 * 60
    },
    {
      text: "Fry or roast vegetables until lightly browned.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "In a deep pot, arrange meat at the bottom, then a layer of vegetables, then rice on top.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Pour in enough hot stock to just cover the rice, season if needed, and bring to a boil.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Cover and cook on low heat until rice is done and liquid absorbed. Let rest 10 minutes, then invert pot carefully onto a large platter and lift off to reveal the layered maqloubeh.",
      minutes: 20,
      durationSeconds: 20 * 60
    }
  ]
},

{
  id: "freekeh-ma-djej",
  name: "Freekeh ma Djej",
  shortDescription: "Smoked green wheat cooked with tender chicken.",
  category: "Main",
  cookTime: 60,
  servings: 4,
  difficulty: "Medium",
  image: "/images/freeki.jpg",
  videoUrl: "https://www.youtube.com/watch?v=3Ge6MMj3EBE",
  ingredients: [
    { name: "Freekeh", quantity: "2 cups, rinsed" },
    { name: "Chicken pieces", quantity: "800 g" },
    { name: "Onion", quantity: "1 large, chopped" },
    { name: "Butter or oil", quantity: "3 tbsp" },
    { name: "Chicken stock or water", quantity: "4–5 cups" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Cinnamon & allspice", quantity: "1 tsp total" },
    { name: "Toasted nuts", quantity: "For garnish" }
  ],
  steps: [
    {
      text: "Boil chicken with spices and salt until cooked. Remove chicken and keep the stock.",
      minutes: 25,
      durationSeconds: 25 * 60
    },
    {
      text: "In a pot, sauté onion in butter or oil until soft, then add freekeh and stir for a few minutes.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Add 4 cups of chicken stock, salt, and spices. Bring to a boil then cover and simmer until freekeh is tender.",
      minutes: 20,
      durationSeconds: 20 * 60
    },
    {
      text: "Serve freekeh on a platter topped with chicken pieces and toasted nuts.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "daoud-basha",
  name: "Daoud Basha",
  shortDescription: "Meatballs simmered in rich tomato sauce with pine nuts.",
  category: "Main",
  cookTime: 45,
  servings: 4,
  difficulty: "Medium",
  image: "/images/daoud-basha.jpg",
  videoUrl: "https://www.youtube.com/watch?v=CWuThAz8Hs4",
  ingredients: [
    { name: "Minced beef or lamb", quantity: "600 g" },
    { name: "Onion", quantity: "1 small, grated (for meatballs)" },
    { name: "Parsley", quantity: "2 tbsp, chopped" },
    { name: "Salt, pepper, allspice", quantity: "To taste" },
    { name: "Onion", quantity: "1 medium, chopped (for sauce)" },
    { name: "Tomato paste", quantity: "3 tbsp" },
    { name: "Water or stock", quantity: "3 cups" },
    { name: "Pine nuts", quantity: "3 tbsp, toasted" },
    { name: "Oil", quantity: "3 tbsp" }
  ],
  steps: [
    {
      text: "Mix minced meat with grated onion, parsley, salt, pepper, and allspice. Shape into small meatballs.",
      minutes: 12,
      durationSeconds: 12 * 60
    },
    {
      text: "Brown meatballs in a little oil and set aside.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "In the same pot, sauté chopped onion, then add tomato paste and cook briefly.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Add water or stock, bring to a boil, then return meatballs to the sauce and simmer 20 minutes.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Garnish with toasted pine nuts and serve with rice.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "moghrabieh",
  name: "Moghrabieh",
  shortDescription: "Lebanese pearl pasta cooked with chickpeas and chicken or meat.",
  category: "Main",
  cookTime: 90,
  servings: 6,
  difficulty: "Hard",
  image: "/images/moghrabieh.jpg",
  videoUrl: "https://www.youtube.com/watch?v=kJcbmUsV3NI",
  ingredients: [
    { name: "Moghrabieh pearls", quantity: "500 g" },
    { name: "Chicken pieces or lamb chunks", quantity: "800 g" },
    { name: "Chickpeas (cooked)", quantity: "2 cups" },
    { name: "Onions", quantity: "3 medium, whole or sliced" },
    { name: "Caraway & cinnamon", quantity: "2 tsp total" },
    { name: "Butter or oil", quantity: "3–4 tbsp" },
    { name: "Water or stock", quantity: "6 cups" },
    { name: "Salt & pepper", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Boil chicken or meat with onions, spices, salt, and water until tender. Remove meat and keep the stock.",
      minutes: 30,
      durationSeconds: 30 * 60
    },
    {
      text: "In a pot, sauté moghrabieh pearls in butter or oil for a few minutes.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Add enough hot stock to cover, season, and cook on low heat until pearls are tender, adding more stock as needed.",
      minutes: 30,
      durationSeconds: 30 * 60
    },
    {
      text: "In the last 10 minutes, add chickpeas and some of the onions from the stock.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Serve moghrabieh in a deep dish with chicken or meat pieces on top and extra broth on the side.",
      minutes: 10,
      durationSeconds: 10 * 60
    }
  ]
},


{
  id: "manakish-jebneh",
  name: "Manakish Jebneh",
  shortDescription: "Lebanese flatbread topped with salty white cheese.",
  category: "Breakfast",
  cookTime: 30,
  servings: 4,
  difficulty: "Medium",
  image: "/images/manakish-jebne.jpg",
  videoUrl: "https://www.youtube.com/watch?v=Jt1Z1pzxHLY",
  ingredients: [
    { name: "Flour", quantity: "3 cups" },
    { name: "Warm water", quantity: "1 cup" },
    { name: "Yeast", quantity: "1 tbsp" },
    { name: "Sugar", quantity: "1 tsp" },
    { name: "Salt", quantity: "1 tsp" },
    { name: "Olive oil", quantity: "1/4 cup" },
    { name: "White cheese (akkawi, feta…)", quantity: "2 cups, shredded" },
    { name: "Nigella or sesame seeds (optional)", quantity: "1 tbsp" }
  ],
  steps: [
    {
      text: "Prepare the dough: mix warm water, yeast, and sugar. Let it sit 5–10 minutes.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Combine flour and salt, then add yeast mixture and olive oil. Knead until smooth.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Cover and let rise 45–60 minutes.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Preheat oven to 220°C. Divide dough into balls and flatten into circles.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Top with shredded cheese and nigella/sesame if desired.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Bake 8–10 minutes until edges are golden and cheese is melted.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "manakish-lahmeh",
  name: "Manakish Lahmeh/ Lahme Bi Ajeen",
  shortDescription: "Flatbread topped with spiced minced meat mixture.",
  category: "Breakfast",
  cookTime: 35,
  servings: 4,
  difficulty: "Medium",
  image: "/images/lahme-b-ajeen.jpg",
  videoUrl: "https://www.youtube.com/watch?v=AX9SDJezR44",
  ingredients: [
    { name: "Manakish dough", quantity: "From basic dough recipe" },
    { name: "Minced beef or lamb", quantity: "300 g" },
    { name: "Onion", quantity: "1 small, finely chopped" },
    { name: "Tomato", quantity: "1 small, finely chopped" },
    { name: "Parsley", quantity: "2 tbsp, chopped" },
    { name: "Salt, pepper, allspice", quantity: "To taste" },
    { name: "Olive oil", quantity: "2 tbsp" }
  ],
  steps: [
    {
      text: "Mix minced meat with onion, tomato, parsley, salt, pepper, and allspice. Add olive oil and combine.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Prepare and flatten dough into circles.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Spread a thin layer of meat mixture over each.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Bake at 220°C for 8–10 minutes until meat is cooked and edges are golden.",
      minutes: 10,
      durationSeconds: 10 * 60
    }
  ]
},

{
  id: "labneh-w-zeit",
  name: "Labneh w Zeit",
  shortDescription: "Strained yogurt drizzled with olive oil and herbs.",
  category: "Breakfast",
  cookTime: 5,
  servings: 3,
  difficulty: "Easy",
  image: "/images/labneh.jpg",
  videoUrl: "https://www.youtube.com/shorts/UsfyLO2ZCxI",
  ingredients: [
    { name: "Labneh", quantity: "2 cups" },
    { name: "Olive oil", quantity: "2–3 tbsp" },
    { name: "Dried mint or zaatar", quantity: "1 tsp" },
    { name: "Salt", quantity: "Pinch" },
    { name: "Fresh vegetables", quantity: "Tomatoes, cucumbers, olives to serve" }
  ],
  steps: [
    {
      text: "Spread labneh in a shallow plate and smooth the surface.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Sprinkle with a pinch of salt if needed.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Drizzle generously with olive oil.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Sprinkle dried mint or zaatar on top.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Serve with fresh vegetables and warm bread.",
      minutes: 1,
      durationSeconds: 1 * 60
    }
  ]
},

  {
  id: "foul-moudammas",
  name: "Foul Moudammas",
  shortDescription: "Warm fava beans with lemon, garlic, and olive oil.",
  category: "Breakfast",
  cookTime: 20,
  servings: 4,
  difficulty: "Easy",
  image: "/images/foul.jpg",
  videoUrl: "https://www.youtube.com/watch?v=VAb5u-RvXVA",
  ingredients: [
    { name: "Canned or cooked fava beans", quantity: "2 cans (400 g each) or 3 cups cooked" },
    { name: "Garlic", quantity: "2 cloves, crushed" },
    { name: "Lemon juice", quantity: "3–4 tbsp" },
    { name: "Olive oil", quantity: "3–4 tbsp" },
    { name: "Salt", quantity: "To taste" },
    { name: "Cumin (optional)", quantity: "1/2 tsp" },
    { name: "Parsley", quantity: "2 tbsp, chopped" }
  ],
  steps: [
    {
      text: "Warm the fava beans with a bit of their liquid in a small pot.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Lightly mash some beans with a spoon while heating.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Add salt, lemon juice, garlic, and cumin. Stir and adjust seasoning.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Transfer to a serving dish, drizzle with olive oil, and sprinkle with parsley.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Serve hot with fresh vegetables and bread.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

{
  id: "balila",
  name: "Balila",
  shortDescription: "Warm chickpeas with cumin, lemon, and garlic.",
  category: "Breakfast",
  cookTime: 20,
  servings: 3,
  difficulty: "Easy",
  image: "/images/balila.jpg",
  videoUrl: "https://www.youtube.com/watch?v=mt4pJ59UMtw",
  ingredients: [
    { name: "Cooked chickpeas", quantity: "2 cups" },
    { name: "Garlic", quantity: "1–2 cloves, crushed" },
    { name: "Lemon juice", quantity: "3 tbsp" },
    { name: "Cumin", quantity: "1 tsp" },
    { name: "Salt", quantity: "To taste" },
    { name: "Olive oil", quantity: "2–3 tbsp" }
  ],
  steps: [
    {
      text: "Warm chickpeas in a small pot with a little water.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Season with salt and cumin and simmer a few minutes.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Remove from heat and stir in garlic and lemon juice.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Transfer to a bowl and drizzle with olive oil.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Serve hot with bread and pickles.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "bayd-w-awarma",
  name: "Bayd w Awarma",
  shortDescription: "Eggs fried with preserved meat (awarma).",
  category: "Breakfast",
  cookTime: 10,
  servings: 2,
  difficulty: "Easy",
  image: "/images/bayd-w-awarma.jpg",
  videoUrl: "https://www.youtube.com/watch?v=OrqIvjniLjs",
  ingredients: [
    { name: "Eggs", quantity: "4" },
    { name: "Awarma (preserved meat in fat)", quantity: "3–4 tbsp" },
    { name: "Salt & pepper", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Melt awarma in a pan over medium heat until the fat is released and meat is sizzling.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Crack eggs on top and cook to your preferred doneness (sunny-side or scrambled).",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Season lightly with salt and pepper.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Serve hot with fresh bread and vegetables.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

{
  id: "bayd-w-sujuk",
  name: "Bayd w Sujuk",
  shortDescription: "Eggs cooked with spicy Lebanese sausage.",
  category: "Breakfast",
  cookTime: 15,
  servings: 2,
  difficulty: "Easy",
  image: "/images/bayd-w-sujuk.jpg",
  videoUrl: "https://www.youtube.com/watch?v=04QYUv_Oy7o",
  ingredients: [
    { name: "Sujuk sausage", quantity: "200 g, sliced" },
    { name: "Eggs", quantity: "4" },
    { name: "Oil or butter", quantity: "1 tbsp" },
    { name: "Salt & pepper", quantity: "To taste" }
  ],
  steps: [
    {
      text: "Heat oil or butter in a pan and add sliced sujuk.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Cook until it releases its fat and is slightly browned.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Crack eggs over the sujuk and cook until set, or scramble together.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Season lightly with salt and pepper and serve immediately.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

{
  id: "halloumi-meshwi",
  name: "Halloumi Meshwi",
  shortDescription: "Grilled halloumi cheese served warm with tomatoes and olives.",
  category: "Breakfast",
  cookTime: 10,
  servings: 3,
  difficulty: "Easy",
  image: "/images/halloumi.jpg",
  videoUrl: "https://www.youtube.com/watch?v=onygyyVWLZA",
  ingredients: [
    { name: "Halloumi cheese", quantity: "250 g, sliced" },
    { name: "Olive oil", quantity: "1 tbsp" },
    { name: "Tomatoes & cucumbers", quantity: "To serve" },
    { name: "Olives", quantity: "To serve" }
  ],
  steps: [
    {
      text: "Brush halloumi slices lightly with olive oil.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Grill on a hot pan or grill for 1–2 minutes per side until golden marks appear.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Serve immediately with fresh vegetables and olives.",
      minutes: 4,
      durationSeconds: 4 * 60
    }
  ]
},

{
  id: "kishk",
  name: "Kishk",
  shortDescription: "Warm porridge made from fermented yogurt and bulgur.",
  category: "Breakfast",
  cookTime: 20,
  servings: 4,
  difficulty: "Medium",
  image: "/images/kishk.jpg",
  videoUrl: "https://www.youtube.com/watch?v=WdorgtrG1xk",
  ingredients: [
    { name: "Kishk powder", quantity: "1 cup" },
    { name: "Water or milk", quantity: "4 cups" },
    { name: "Butter or oil", quantity: "2–3 tbsp" },
    { name: "Onion (optional)", quantity: "1 small, finely chopped" },
    { name: "Salt", quantity: "To taste" }
  ],
  steps: [
    {
      text: "If using onion, sauté it in butter or oil until soft.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "In a bowl, dissolve kishk powder in some of the cold water or milk until smooth.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Add mixture to the pot with remaining liquid, stirring constantly.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Cook over medium heat until it thickens to a porridge consistency, stirring to avoid lumps.",
      minutes: 6,
      durationSeconds: 6 * 60
    },
    {
      text: "Season with salt and serve hot with bread and olives.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

{
  id: "saj-bread",
  name: "Saj Bread with Cheese or Zaatar",
  shortDescription: "Thin saj bread topped and folded with cheese or zaatar.",
  category: "Breakfast",
  cookTime: 15,
  servings: 2,
  difficulty: "Easy",
  image: "/images/saj-jebne-zaatar.jpeg",
  videoUrl: "https://www.youtube.com/watch?v=i13UAChy4wY",
  ingredients: [
    { name: "Saj bread rounds", quantity: "2 large" },
    { name: "White cheese or akkawi", quantity: "1 cup, shredded" },
    { name: "Zaatar mix", quantity: "2–3 tbsp" },
    { name: "Olive oil", quantity: "2–3 tbsp" }
  ],
  steps: [
    {
      text: "Preheat saj or large pan.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "For zaatar version, mix zaatar with olive oil and spread thinly on the bread.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "For cheese version, spread cheese over half the bread.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Warm on saj or pan until bread is slightly crisp and cheese melts, then fold and serve.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "knefeh-bel-jebn",
  name: "Knefeh bel Jebn",
  shortDescription: "Sweet cheese dessert with semolina crust, served for breakfast.",
  category: "Breakfast",
  cookTime: 45,
  servings: 6,
  difficulty: "Hard",
  image: "/images/knefe.jpg",
  videoUrl: "https://www.youtube.com/watch?v=_6fOwLGGyYI",
  ingredients: [
    { name: "Kataifi or semolina dough", quantity: "400 g" },
    { name: "Sweet cheese or mozzarella/akkawi mix", quantity: "500 g" },
    { name: "Butter or ghee", quantity: "150 g, melted" },
    { name: "Sugar syrup (ater)", quantity: "2 cups" },
    { name: "Orange blossom or rose water", quantity: "1–2 tbsp" }
  ],
  steps: [
    {
      text: "Prepare sugar syrup by boiling sugar and water, then adding flavoring and cooling.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Mix kataifi or semolina with melted butter or ghee.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Spread half the dough in a greased pan, press down, then add cheese layer.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Top with remaining dough and bake at 190°C until golden.",
      minutes: 15,
      durationSeconds: 15 * 60
    },
    {
      text: "Flip onto a tray and immediately soak with warm syrup. Serve hot.",
      minutes: 5,
      durationSeconds: 5 * 60
    }
  ]
},

{
  id: "knefeh-bel-ashta",
  name: "Knefeh bel Ashta",
  shortDescription: "Knefeh filled with rich cream instead of cheese.",
  category: "Breakfast",
  cookTime: 45,
  servings: 6,
  difficulty: "Hard",
  image: "/images/knefe-ashta.jpg",
  videoUrl: "https://www.youtube.com/watch?v=KGX3rLInwqk",
  ingredients: [
    { name: "Knefeh dough (kataifi/semolina)", quantity: "400 g" },
    { name: "Ashta cream", quantity: "500 g" },
    { name: "Butter or ghee", quantity: "150 g, melted" },
    { name: "Sugar syrup", quantity: "2 cups" }
  ],
  steps: [
    {
      text: "Prepare sugar syrup and set aside.",
      minutes: 10,
      durationSeconds: 10 * 60
    },
    {
      text: "Mix dough with melted butter or ghee.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Spread half the dough in a greased pan and press down.",
      minutes: 8,
      durationSeconds: 8 * 60
    },
    {
      text: "Spread ashta in an even layer, then top with remaining dough.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Bake until golden, flip, and soak with syrup. Serve warm.",
      minutes: 15,
      durationSeconds: 15 * 60
    }
  ]
},

{
  id: "omelette-b-khodar",
  name: "Omelette b Khodar",
  shortDescription: "Shakshoka - eggs with tomato and veggies.",
  category: "Breakfast",
  cookTime: 10,
  servings: 2,
  difficulty: "Easy",
  image: "/images/shakshoka.jpg",
  videoUrl: "https://www.youtube.com/shorts/afJcClLdK_4",
  ingredients: [
    { name: "Eggs", quantity: "4" },
    { name: "Tomato", quantity: "1 small, diced" },
    { name: "Green pepper", quantity: "1/2, diced" },
    { name: "Onion or green onion", quantity: "1 small, chopped" },
    { name: "Salt & pepper", quantity: "To taste" },
    { name: "Oil or butter", quantity: "1–2 tbsp" }
  ],
  steps: [
    {
      text: "Beat eggs in a bowl and season with salt and pepper.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Heat oil or butter in a pan and sauté vegetables briefly until slightly soft.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Pour eggs over the vegetables and cook until set, folding or flipping as desired.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Serve hot with bread.",
      minutes: 1,
      durationSeconds: 1 * 60
    }
  ]
},

{
  id: "zaatar-w-zeyt-bread",
  name: "Zaatar & Olive Oil with Fresh Bread",
  shortDescription: "Classic Lebanese breakfast plate with zaatar and olive oil.",
  category: "Breakfast",
  cookTime: 5,
  servings: 3,
  difficulty: "Easy",
  image: "/images/zaatar.jpg",
  videoUrl: "https://www.youtube.com/shorts/j0Xk9QnL-j8",
  ingredients: [
    { name: "Zaatar mix", quantity: "1/3 cup" },
    { name: "Olive oil", quantity: "1/3 cup" },
    { name: "Fresh bread", quantity: "As needed" },
    { name: "Vegetables", quantity: "Tomatoes, cucumbers, olives to serve" }
  ],
  steps: [
    {
      text: "In a small bowl, mix zaatar with olive oil to make a dip.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Arrange on a plate with fresh bread and vegetables.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Dip bread into the zaatar and olive oil mixture and enjoy.",
      minutes: 1,
      durationSeconds: 1 * 60
    }
  ]
},

{
  id: "jebneh-baladiyeh-plate",
  name: "Jebneh Baladiyeh Plate",
  shortDescription: "Local Lebanese cheese served with tomatoes, cucumbers, and olives.",
  category: "Breakfast",
  cookTime: 5,
  servings: 3,
  difficulty: "Easy",
  image: "/images/jebne-baladiye.jpg",
  videoUrl: "https://www.youtube.com/watch?v=P7k3Q9Kk12Y",
  ingredients: [
    { name: "Jebneh baladiyeh (local white cheese)", quantity: "250 g, sliced" },
    { name: "Tomatoes", quantity: "2, sliced" },
    { name: "Cucumbers", quantity: "2, sliced" },
    { name: "Olives", quantity: "1/2 cup" },
    { name: "Olive oil", quantity: "2 tbsp" }
  ],
  steps: [
    {
      text: "Arrange cheese slices on a plate.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Surround with tomato slices, cucumber slices, and olives.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Drizzle cheese lightly with olive oil.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Serve with fresh bread.",
      minutes: 2,
      durationSeconds: 2 * 60
    }
  ]
},

{
  id: "ashta-with-honey",
  name: "Ashta with Honey & Fruits",
  shortDescription: "Rich clotted cream served with honey and seasonal fruits.",
  category: "Breakfast",
  cookTime: 5,
  servings: 3,
  difficulty: "Easy",
  image: "/images/ashta.jpg",
  videoUrl: "https://www.youtube.com/shorts/ehAHy_i7ONc",
  ingredients: [
    { name: "Ashta cream", quantity: "2 cups" },
    { name: "Honey", quantity: "3–4 tbsp" },
    { name: "Seasonal fruits", quantity: "Bananas, strawberries, grapes, etc." },
    { name: "Pistachios (optional)", quantity: "2 tbsp, chopped" }
  ],
  steps: [
    {
      text: "Place ashta in small bowls or on a serving plate.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Drizzle generously with honey.",
      minutes: 1,
      durationSeconds: 1 * 60
    },
    {
      text: "Arrange sliced fruits around or on top.",
      minutes: 2,
      durationSeconds: 2 * 60
    },
    {
      text: "Sprinkle with chopped pistachios if desired and serve with bread.",
      minutes: 1,
      durationSeconds: 1 * 60
    }
  ]
},

{
  id: "kaak-bel-zaatar",
  name: "Kaak bel Zaatar",
  shortDescription: "Lebanese street bread filled or topped with zaatar.",
  category: "Breakfast",
  cookTime: 15,
  servings: 2,
  difficulty: "Easy",
  image: "/images/kaak-zaatar.jpg",
  videoUrl: "https://www.youtube.com/watch?v=0uGyax27Oq8",
  ingredients: [
    { name: "Kaak bread", quantity: "2 pieces" },
    { name: "Zaatar mix", quantity: "3–4 tbsp" },
    { name: "Olive oil", quantity: "3–4 tbsp" }
  ],
  steps: [
    {
      text: "Mix zaatar with olive oil to form a spreadable paste.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Open kaak slightly and spread zaatar mixture inside, or spread on the surface.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Warm briefly in the oven if desired and serve.",
      minutes: 6,
      durationSeconds: 6 * 60
    }
  ]
},

{
  id: "kaak-bel-jebneh",
  name: "Kaak bel Jebneh",
  shortDescription: "Kaak bread stuffed with melty cheese.",
  category: "Breakfast",
  cookTime: 15,
  servings: 2,
  difficulty: "Easy",
  image: "/images/kaak-jebn.jpg",
  videoUrl: "https://www.youtube.com/watch?v=WBzr6XZkOKo",
  ingredients: [
    { name: "Kaak bread", quantity: "2 pieces" },
    { name: "White cheese or halloumi", quantity: "200 g, sliced or shredded" },
    { name: "Butter or olive oil", quantity: "1 tbsp (optional)" }
  ],
  steps: [
    {
      text: "Open kaak bread and stuff with cheese.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Toast in a sandwich press, oven, or pan until cheese melts.",
      minutes: 7,
      durationSeconds: 7 * 60
    },
    {
      text: "Brush with a little butter or olive oil if desired and serve hot.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
},

{
  id: "musabaha",
  name: "Musabaha",
  shortDescription: "Warm chunky chickpea dish similar to hummus but less blended.",
  category: "Breakfast",
  cookTime: 20,
  servings: 3,
  difficulty: "Easy",
  image: "/images/musabaha.jpg",
  videoUrl: "https://www.youtube.com/watch?v=OU5scNFqCdQ",
  ingredients: [
    { name: "Cooked chickpeas", quantity: "2 cups" },
    { name: "Tahini", quantity: "2 tbsp" },
    { name: "Lemon juice", quantity: "3 tbsp" },
    { name: "Garlic", quantity: "1–2 cloves, crushed" },
    { name: "Salt", quantity: "To taste" },
    { name: "Olive oil", quantity: "3 tbsp" },
    { name: "Cumin (optional)", quantity: "1/2 tsp" },
    { name: "Parsley", quantity: "1–2 tbsp, chopped" }
  ],
  steps: [
    {
      text: "Warm chickpeas in a small pot with a bit of their liquid.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Lightly mash some of them with a fork, keeping a chunky texture.",
      minutes: 4,
      durationSeconds: 4 * 60
    },
    {
      text: "Stir in tahini, lemon juice, garlic, salt, and cumin if using.",
      minutes: 5,
      durationSeconds: 5 * 60
    },
    {
      text: "Transfer to a bowl, drizzle with olive oil, and sprinkle with parsley.",
      minutes: 3,
      durationSeconds: 3 * 60
    },
    {
      text: "Serve hot with fresh bread.",
      minutes: 3,
      durationSeconds: 3 * 60
    }
  ]
}


];

export default recipes;
export { recipes };
