import { Dish } from '../types/dish';

export const INITIAL_DISHES: Dish[] = [
  {
    id: "dish-1",
    name: "Aloo parantha",
    description: "A classic Indian flatbread made with whole wheat flour and stuffed with a spiced potato mixture. Perfect for breakfast, lunch, or dinner.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=k1tCscN65fM",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    cuisine: "Indian",
    mealType: ["Breakfast", "Lunch", "Dinner"],
    category: "Vegetarian",
    servings: 4,
    calories: 350,
    ingredients: [
      "Potatoes",
      "Wheat flour",
      "Amchur powder",
      "Garam masala",
      "Coriander powder",
      "Cumin powder",
      "Turmeric powder",
      "Salt",
      "Oil",
      "Water"
    ],
    instructions: [
      "Boil potatoes until tender, peel, and mash them.",
      "In a bowl, mix mashed potatoes with finely chopped onion, ginger-garlic paste, green chilies, and all spices (coriander powder, cumin powder, turmeric, amchur, garam masala, salt).",
      "Divide dough into equal portions. Roll each portion into a circle.",
      "Place a portion of potato filling in the center and fold the edges to seal.",
      "Roll gently into a flat, even parantha.",
      "Heat a griddle (tawa) over medium heat. Cook the parantha on both sides until golden brown spots appear, applying oil as needed.",
      "Serve hot with yogurt, pickle, or butter."
    ],
    flavorProfile: ["spicy", "savory"],
    variations: [
      "Add chopped spinach for a healthier version.",
      "Use paneer or cauliflower instead of potatoes for a different twist."
    ],
    createdAt: "2026-08-13T10:00:00.000Z",
    updatedAt: "2026-08-13T10:00:00.000Z"
  },
  {
    id: "dish-2",
    name: "Butter Chicken (Murgh Makhani)",
    description: "Tender chicken pieces simmered in a velvety, rich tomato, butter, and cream sauce infused with aromatic Indian spices.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=a03U45jFxOI",
    prepTime: "30 minutes",
    cookTime: "35 minutes",
    cuisine: "Indian",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 520,
    ingredients: [
      "Chicken thigh chunks",
      "Yogurt",
      "Ginger garlic paste",
      "Butter",
      "Heavy cream",
      "Tomato puree",
      "Kasuri methi",
      "Garam masala",
      "Kashmiri red chili powder",
      "Salt"
    ],
    instructions: [
      "Marinate chicken in yogurt, ginger-garlic paste, chili powder, and salt for at least 1 hour.",
      "Sear marinated chicken in a hot pan or tandoor until lightly charred.",
      "Prepare sauce by simmering tomato puree, butter, cashew paste, and spices until oil separates.",
      "Add seared chicken pieces and simmer for 15 minutes.",
      "Finish with heavy cream and crushed kasuri methi before serving with Naan."
    ],
    flavorProfile: ["rich", "creamy", "savory"],
    variations: [
      "Substitute chicken with grilled Paneer for a vegetarian Paneer Makhani.",
      "Use Greek yogurt instead of cream for a lighter version."
    ],
    createdAt: "2026-08-13T10:05:00.000Z"
  },
  {
    id: "dish-3",
    name: "Paneer Tikka Masala",
    description: "Marinated cottage cheese cubes grilled to perfection and tossed in a rich, spiced onion-tomato gravy.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=J84qO8k2K_s",
    prepTime: "25 minutes",
    cookTime: "25 minutes",
    cuisine: "Indian",
    mealType: ["Lunch", "Dinner"],
    category: "Vegetarian",
    servings: 4,
    calories: 410,
    ingredients: [
      "Paneer cubes",
      "Bell peppers",
      "Onions",
      "Yogurt",
      "Tomato gravy",
      "Ginger garlic paste",
      "Kasuri methi",
      "Butter",
      "Spices mix"
    ],
    instructions: [
      "Marinate paneer, onion, and bell pepper chunks in seasoned yogurt.",
      "Skewer and grill on medium heat until slightly charred.",
      "Sauté onions, ginger, garlic, and tomatoes until thick.",
      "Add grilled paneer and simmer in gravy for 8 minutes.",
      "Garnish with cilantro and cream."
    ],
    flavorProfile: ["spicy", "smoky", "savory"],
    variations: [
      "Add mushrooms or tofu for alternate proteins."
    ]
  },
  {
    id: "dish-4",
    name: "Classic Margherita Pizza",
    description: "Traditional Neapolitan pizza topped with fresh tomato sauce, creamy mozzarella, basil leaves, and olive oil.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=1-SJGQ2HLp8",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    cuisine: "Italian",
    mealType: ["Lunch", "Dinner"],
    category: "Vegetarian",
    servings: 3,
    calories: 480,
    ingredients: [
      "Pizza dough",
      "San Marzano tomatoes",
      "Fresh Mozzarella",
      "Fresh Basil leaves",
      "Extra virgin olive oil",
      "Sea salt"
    ],
    instructions: [
      "Stretch pizza dough into a 12-inch disc.",
      "Spread crushed San Marzano tomato sauce evenly.",
      "Place fresh mozzarella slices across the surface.",
      "Bake in a preheated high heat oven (450°F / 230°C) until crust is golden.",
      "Top with fresh basil and a drizzle of olive oil."
    ],
    flavorProfile: ["savory", "tangy", "herbaceous"],
    variations: [
      "Add cherry tomatoes or garlic oil for extra depth."
    ]
  },
  {
    id: "dish-5",
    name: "Creamy Spaghetti Carbonara",
    description: "Authentic Roman pasta cooked with guanciale, egg yolks, freshly grated Pecorino Romano cheese, and black pepper.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=3AAdKl1UYZs",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    cuisine: "Italian",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 2,
    calories: 590,
    ingredients: [
      "Spaghetti",
      "Guanciale or Pancetta",
      "Egg yolks",
      "Pecorino Romano cheese",
      "Coarsely ground black pepper",
      "Salt"
    ],
    instructions: [
      "Boil spaghetti in salted water until al dente.",
      "Crisp guanciale in a wide skillet without oil.",
      "Whisk egg yolks and Pecorino Romano in a bowl with black pepper.",
      "Toss hot drained pasta into guanciale pan off heat, then quickly stir in egg-cheese mixture with starchy pasta water to form emulsion.",
      "Serve immediately with extra black pepper."
    ],
    flavorProfile: ["savory", "rich", "salty"],
    variations: [
      "Use pancetta or smoked bacon if guanciale is unavailable."
    ]
  },
  {
    id: "dish-6",
    name: "Mexican Street Tacos (Carne Asada)",
    description: "Grilled marinated flank steak served on warm corn tortillas with diced onions, fresh cilantro, and tangy salsa verde.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=wXhXbImsy68",
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    cuisine: "Mexican",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 420,
    ingredients: [
      "Flank steak",
      "Lime juice",
      "Garlic",
      "Cilantro",
      "Corn tortillas",
      "White onion",
      "Salsa verde",
      "Cumin",
      "Salt and Pepper"
    ],
    instructions: [
      "Marinate steak in lime juice, garlic, cilantro, and cumin for 2 hours.",
      "Grill steak over high heat until medium-rare, then slice finely against grain.",
      "Warm corn tortillas on a skillet.",
      "Assemble tacos with grilled meat, diced white onions, chopped cilantro, and lime wedges.",
      "Drizzle with fresh salsa verde."
    ],
    flavorProfile: ["tangy", "savory", "smoky"],
    variations: [
      "Substitute beef with grilled chicken or seasoned black beans for vegetarian tacos."
    ]
  },
  {
    id: "dish-7",
    name: "Guacamole & Fresh Tortilla Chips",
    description: "Creamy smashed avocados mixed with lime, cilantro, jalapeños, tomatoes, and red onions served with crispy chips.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=1A8oP4FQnEw",
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    cuisine: "Mexican",
    mealType: ["Snack", "Appetizer"],
    category: "Vegan",
    servings: 4,
    calories: 280,
    ingredients: [
      "Ripe Avocados",
      "Lime juice",
      "Red onion",
      "Jalapeño pepper",
      "Roma tomatoes",
      "Fresh cilantro",
      "Sea salt",
      "Tortilla chips"
    ],
    instructions: [
      "Halve avocados, remove pit, and scoop flesh into bowl.",
      "Mash coarsely with fork leaving slight texture.",
      "Fold in finely diced onions, jalapeños, tomatoes, and cilantro.",
      "Stir in fresh lime juice and season generously with sea salt.",
      "Serve with warm tortilla chips."
    ],
    flavorProfile: ["rich", "tangy", "fresh"],
    variations: [
      "Add grilled pineapple or mango for a sweet twist."
    ]
  },
  {
    id: "dish-8",
    name: "Japanese Tonkotsu Ramen",
    description: "Rich 12-hour pork bone broth served with springy ramen noodles, tender chashu pork belly, soft-boiled ajitsuke egg, and scallions.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=1K31QkP1kEw",
    prepTime: "45 minutes",
    cookTime: "180 minutes",
    cuisine: "Japanese",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 2,
    calories: 680,
    ingredients: [
      "Ramen noodles",
      "Pork bone broth base",
      "Chashu pork belly slices",
      "Ramen egg (marinated soft boiled)",
      "Green onions",
      "Wood ear mushrooms",
      "Nori seaweed sheet",
      "Black garlic oil"
    ],
    instructions: [
      "Simmer rich pork bone broth until milky white.",
      "Boil fresh ramen noodles for 1 minute until chewy.",
      "Pour hot seasoned broth into bowl and add cooked noodles.",
      "Arrange seared chashu slice, halved soft egg, wood ear mushrooms, and scallions on top.",
      "Finish with a drop of Mayu (black garlic oil) and nori sheet."
    ],
    flavorProfile: ["rich", "savory", "umami"],
    variations: [
      "Substitute pork broth with creamy sesame soy miso broth for vegetarian ramen."
    ]
  },
  {
    id: "dish-9",
    name: "Fresh Salmon Nigiri & Sushi Roll",
    description: "Premium sushi-grade salmon delicately placed over seasoned vinegared rice served alongside cucumber avocado roll.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=JvyO8t2n2rQ",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    cuisine: "Japanese",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 2,
    calories: 390,
    ingredients: [
      "Sushi grade Salmon",
      "Sushi rice",
      "Rice vinegar",
      "Nori sheets",
      "Cucumber",
      "Avocado",
      "Wasabi",
      "Pickled ginger",
      "Soy sauce"
    ],
    instructions: [
      "Cook short-grain sushi rice and season with rice vinegar, sugar, and salt.",
      "Slice fresh salmon at a 45-degree angle.",
      "Shape rice into small oval beds and place salmon on top.",
      "Roll cucumber and avocado inside nori sheets for side rolls.",
      "Serve cold with wasabi, pickled ginger, and soy sauce."
    ],
    flavorProfile: ["fresh", "umami", "savory"],
    variations: [
      "Use avocado and mango slices for vegetarian sushi rolls."
    ]
  },
  {
    id: "dish-10",
    name: "Thai Green Curry (Gaeng Keow Wan)",
    description: "A fragrant coconut milk curry infused with green chili paste, Thai basil, bamboo shoots, and tender chicken.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=8V-w6P3Qp1A",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    cuisine: "Thai",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 460,
    ingredients: [
      "Green curry paste",
      "Coconut milk",
      "Chicken breast",
      "Thai eggplant",
      "Bamboo shoots",
      "Fish sauce",
      "Palm sugar",
      "Kaffir lime leaves",
      "Thai basil"
    ],
    instructions: [
      "Fry green curry paste in coconut thick cream until aromatic oil releases.",
      "Add sliced chicken and toss to sear.",
      "Pour remaining coconut milk, add bamboo shoots and Thai eggplants.",
      "Season with fish sauce and palm sugar.",
      "Simmer for 12 minutes, then top with kaffir lime leaves and fresh Thai basil.",
      "Serve hot with Jasmine rice."
    ],
    flavorProfile: ["spicy", "aromatic", "sweet", "creamy"],
    variations: [
      "Use tofu and soy sauce instead of chicken and fish sauce for a vegan curry."
    ]
  },
  {
    id: "dish-11",
    name: "Pad Thai (Stir-Fried Rice Noodles)",
    description: "Classic Thai street food with rice noodles stir-fried with tofu, shrimp, bean sprouts, peanuts, and tamarind sauce.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=h0-0n0j6h9A",
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    cuisine: "Thai",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 2,
    calories: 510,
    ingredients: [
      "Flat rice noodles",
      "Shrimp",
      "Firm tofu",
      "Tamarind paste",
      "Palm sugar",
      "Fish sauce",
      "Egg",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges"
    ],
    instructions: [
      "Soak rice noodles in warm water until pliable.",
      "Whisk tamarind paste, palm sugar, and fish sauce into sauce.",
      "Stir fry shrimp and tofu in wok over high heat.",
      "Push aside, scramble egg, then toss noodles and tamarind sauce.",
      "Add bean sprouts and chives, top with crushed roasted peanuts and fresh lime."
    ],
    flavorProfile: ["tangy", "sweet", "savory", "nutty"],
    variations: [
      "Make it vegetarian with extra tofu and vegetarian stir-fry sauce."
    ]
  },
  {
    id: "dish-12",
    name: "Classic Greek Gyros Plate",
    description: "Seasoned grilled lamb and beef gyro meat served with pita bread, tzatziki sauce, Greek salad, and roasted potatoes.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=P2k75o0uQeE",
    prepTime: "25 minutes",
    cookTime: "30 minutes",
    cuisine: "Greek",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 580,
    ingredients: [
      "Ground lamb & beef mixture",
      "Warm Pita breads",
      "Tzatziki sauce (cucumber yogurt)",
      "Red onion",
      "Cucumbers",
      "Feta cheese",
      "Kalamata olives",
      "Oregano",
      "Garlic"
    ],
    instructions: [
      "Combine minced meats with garlic, oregano, cumin, salt, and bake tightly packed.",
      "Slice baked meat thinly and sear in skillet for crispy edges.",
      "Warm pita flatbreads on skillet.",
      "Assemble with tzatziki, gyro meat, sliced red onions, tomatoes, and crumbled feta cheese."
    ],
    flavorProfile: ["savory", "tangy", "herbaceous"],
    variations: [
      "Substitute lamb with marinated grilled chicken breast or falafel."
    ]
  },
  {
    id: "dish-13",
    name: "Crispy Falafel Pita Wrap",
    description: "Crispy fried chickpea falafel patties tucked into a pita with tahini sauce, pickled turnips, cucumbers, and tomatoes.",
    image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "25 minutes",
    cookTime: "15 minutes",
    cuisine: "Middle Eastern",
    mealType: ["Lunch", "Dinner"],
    category: "Vegan",
    servings: 4,
    calories: 430,
    ingredients: [
      "Soaked dried chickpeas",
      "Fresh Parsley & Cilantro",
      "Garlic",
      "Cumin & Coriander seeds",
      "Tahini sauce",
      "Pita bread",
      "Pickled turnips",
      "Diced tomatoes"
    ],
    instructions: [
      "Blend soaked chickpeas with herbs, garlic, and spices into coarse mixture.",
      "Form small patties and deep fry in hot oil until deep golden crispy.",
      "Open pita pocket, spread tahini, and stuff with 3-4 falafels.",
      "Add pickled turnip slices, cucumbers, and tomatoes."
    ],
    flavorProfile: ["savory", "nutty", "herbaceous"],
    variations: [
      "Air-fry falafels with olive oil spray for a lower calorie option."
    ]
  },
  {
    id: "dish-14",
    name: "Spanish Chicken & Seafood Paella",
    description: "Saffron-infused rice cooked in a traditional wide pan with chicken, chorizo, mussels, shrimp, and sweet bell peppers.",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=yW6bYk9V-wM",
    prepTime: "30 minutes",
    cookTime: "40 minutes",
    cuisine: "Spanish",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 6,
    calories: 620,
    ingredients: [
      "Bomba rice",
      "Chicken thighs",
      "Chorizo sausage",
      "Shrimp",
      "Mussels",
      "Saffron threads",
      "Chicken broth",
      "Red bell peppers",
      "Peas",
      "Garlic and Paprika"
    ],
    instructions: [
      "Brown chicken thighs and chorizo slices in paella pan with olive oil.",
      "Sauté onions, garlic, paprika, and bell peppers.",
      "Add Bomba rice and stir to coat in oils.",
      "Pour hot saffron-infused broth and simmer without stirring to create socarrat crust.",
      "Nestle shrimp and mussels on top during final 10 minutes of cooking until mussels open."
    ],
    flavorProfile: ["savory", "smoky", "aromatic"],
    variations: [
      "Make a Vegetarian Vegetable Paella with artichokes, asparagus, mushrooms, and lima beans."
    ]
  },
  {
    id: "dish-15",
    name: "Classic French Onion Soup",
    description: "Slowly caramelized onions simmered in rich beef broth, topped with toasted baguette slices and melted Gruyère cheese.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=r0w2cT3lWpM",
    prepTime: "20 minutes",
    cookTime: "60 minutes",
    cuisine: "French",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 380,
    ingredients: [
      "Yellow onions",
      "Butter",
      "Beef stock",
      "Dry white wine",
      "Thyme sprigs",
      "French baguette",
      "Gruyère cheese",
      "Garlic"
    ],
    instructions: [
      "Slice onions thin and cook low and slow in butter for 45 minutes until deep golden brown caramelized.",
      "Deglaze pan with white wine.",
      "Add beef stock and fresh thyme; simmer for 20 minutes.",
      "Ladle soup into oven-safe ramekins, top with toasted baguette slice and generous Gruyère.",
      "Broil under high heat until cheese bubbles and turns golden brown."
    ],
    flavorProfile: ["rich", "savory", "sweet", "cheesy"],
    variations: [
      "Use rich vegetable stock for a vegetarian version."
    ]
  },
  {
    id: "dish-16",
    name: "American Double Cheeseburger",
    description: "Two smashed beef patties with melted American cheese, crisp lettuce, tomato, pickles, and special sauce on a toasted brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0W1W1kM2yWw",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    cuisine: "American",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 2,
    calories: 720,
    ingredients: [
      "Ground beef (80/20 blend)",
      "American cheese slices",
      "Brioche buns",
      "Butter",
      "Pickle slices",
      "Lettuce",
      "Tomato",
      "Secret burger sauce (mayo, ketchup, relish)"
    ],
    instructions: [
      "Form beef into 2oz balls.",
      "Sear and smash forcefully on a hot cast iron griddle to form crispy lace edges.",
      "Flip patties, add American cheese slices, and let melt.",
      "Toast brioche buns in butter.",
      "Assemble with sauce, pickles, smash patties, tomato, and lettuce."
    ],
    flavorProfile: ["savory", "juicy", "rich"],
    variations: [
      "Use Beyond or Impossible plant patties for a vegetarian burger."
    ]
  },
  {
    id: "dish-17",
    name: "Classic BBQ Pork Baby Back Ribs",
    description: "Fall-off-the-bone pork baby back ribs dry-rubbed with spices, slow smoked, and glazed with tangy hickory BBQ sauce.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=W0WpW1yZ40M",
    prepTime: "20 minutes",
    cookTime: "180 minutes",
    cuisine: "American",
    mealType: ["Dinner"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 780,
    ingredients: [
      "Pork baby back ribs",
      "Brown sugar dry rub",
      "Paprika & Garlic powder",
      "Apple cider vinegar spray",
      "Hickory BBQ sauce",
      "Butter"
    ],
    instructions: [
      "Remove membrane from back of ribs and season liberally with brown sugar dry rub.",
      "Slow cook at 250°F (120°C) for 3 hours, spritzing with apple cider vinegar.",
      "Wrap in foil with butter and honey for 1 hour.",
      "Unwrap, baste with BBQ sauce, and sear for 15 minutes until sticky and caramelized."
    ],
    flavorProfile: ["smoky", "sweet", "savory"],
    variations: [
      "Use beef short ribs for a beef BBQ alternative."
    ]
  },
  {
    id: "dish-18",
    name: "Authentic Chana Masala",
    description: "Hearty chickpea curry cooked with onions, tomatoes, ginger, garlic, and freshly ground chana spices.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=h0-0n0j6h9A",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    cuisine: "Indian",
    mealType: ["Lunch", "Dinner"],
    category: "Vegan",
    servings: 4,
    calories: 310,
    ingredients: [
      "Chickpeas (soaked or canned)",
      "Onions",
      "Tomatoes",
      "Ginger garlic paste",
      "Chana masala powder",
      "Cumin seeds",
      "Amchur (mango powder)",
      "Cilantro",
      "Oil"
    ],
    instructions: [
      "Sauté cumin seeds, onions, ginger, and garlic until caramelized.",
      "Add tomato puree and chana masala spices; cook until oil separates.",
      "Add boiled chickpeas and simmer with water for 20 minutes.",
      "Mash a few chickpeas to thicken gravy.",
      "Garnish with cilantro and lemon juice; serve with Bhatura or Rice."
    ],
    flavorProfile: ["spicy", "tangy", "savory"],
    variations: [
      "Add spinach leaves for Palak Chana."
    ]
  },
  {
    id: "dish-19",
    name: "Palak Paneer",
    description: "Cubes of fresh paneer cooked in a smooth, vibrant green spinach puree spiced with garlic and cumin.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=S0144kP_W40",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    cuisine: "Indian",
    mealType: ["Lunch", "Dinner"],
    category: "Vegetarian",
    servings: 4,
    calories: 360,
    ingredients: [
      "Fresh Spinach (Palak)",
      "Paneer cubes",
      "Onion",
      "Garlic cloves",
      "Ginger",
      "Garam masala",
      "Heavy cream or Cashew paste",
      "Butter or Ghee"
    ],
    instructions: [
      "Blanch spinach leaves in hot water for 2 minutes, then shock in ice water to maintain bright green color.",
      "Purée blanched spinach with green chilies.",
      "Sauté garlic, ginger, and onions in butter until soft.",
      "Add spinach purée, spices, and paneer cubes.",
      "Simmer for 8 minutes and finish with cream."
    ],
    flavorProfile: ["savory", "earthy", "creamy"],
    variations: [
      "Use tofu instead of paneer for a vegan Palak Tofu."
    ]
  },
  {
    id: "dish-20",
    name: "Hyderabadi Chicken Dum Biryani",
    description: "Fragrant basmati rice layered with marinated spiced chicken, fried onions, saffron, and mint, slow cooked in dum style.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=VnJ-2L0-0w0",
    prepTime: "40 minutes",
    cookTime: "50 minutes",
    cuisine: "Indian",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 6,
    calories: 640,
    ingredients: [
      "Long grain Basmati Rice",
      "Bone-in Chicken pieces",
      "Fried onions (Birista)",
      "Saffron milk",
      "Yogurt",
      "Biryani masala",
      "Mint & Cilantro leaves",
      "Ghee",
      "Whole spices (cardamom, cloves, star anise)"
    ],
    instructions: [
      "Marinate chicken in spiced yogurt, ginger-garlic paste, and fried onions for 2 hours.",
      "Parboil basmati rice with whole spices until 70% cooked.",
      "Layer marinated chicken at bottom of heavy pot, top with parboiled rice, mint, ghee, and saffron milk.",
      "Seal pot with dough or foil lid and cook on low dum heat for 35 minutes.",
      "Gentle fluff rice and serve hot with Mirchi ka Salan and Raita."
    ],
    flavorProfile: ["aromatic", "spicy", "rich"],
    variations: [
      "Make Paneer or Veg Dum Biryani with mixed vegetables and cottage cheese."
    ]
  },
  {
    id: "dish-21",
    name: "Dal Makhani",
    description: "Whole black lentils and kidney beans slow-cooked overnight with butter, cream, and subtle smoky spices.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=a03U45jFxOI",
    prepTime: "15 minutes",
    cookTime: "120 minutes",
    cuisine: "Indian",
    mealType: ["Lunch", "Dinner"],
    category: "Vegetarian",
    servings: 5,
    calories: 420,
    ingredients: [
      "Whole Black Urad Dal",
      "Rajma (Kidney beans)",
      "Butter",
      "Heavy cream",
      "Tomato puree",
      "Ginger garlic paste",
      "Kashmiri chili powder",
      "Garam masala",
      "Kasuri methi"
    ],
    instructions: [
      "Soak urad dal and rajma overnight, then pressure cook until velvety soft.",
      "Prepare tomato-butter paste seasoned with ginger, garlic, and chili powder.",
      "Combine cooked lentils and tomato sauce; simmer on low heat for 1 to 2 hours stirring regularly.",
      "Stir in liberal amount of butter, cream, and kasuri methi.",
      "Infuse smoke (dhungar method) using hot charcoal for signature restaurant flavor."
    ],
    flavorProfile: ["creamy", "rich", "smoky", "savory"],
    variations: [
      "Use coconut cream and vegan butter for plant-based Dal Makhani."
    ]
  },
  {
    id: "dish-22",
    name: "Crispy Masala Dosa",
    description: "Thin crispy fermented rice and lentil crepe stuffed with spiced potato mash, served with coconut chutney and sambar.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=CCab5oh06Oc",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    cuisine: "Indian",
    mealType: ["Breakfast", "Dinner"],
    category: "Vegan",
    servings: 4,
    calories: 340,
    ingredients: [
      "Fermented rice & urad dal batter",
      "Boiled mashed potatoes",
      "Mustard seeds",
      "Curry leaves",
      "Turmeric",
      "Onions",
      "Oil/Ghee",
      "Coconut chutney",
      "Lentil Sambar"
    ],
    instructions: [
      "Prepare potato stuffing by sautéing mustard seeds, curry leaves, onions, turmeric, and mashed potatoes.",
      "Heat flat iron tawa, pour ladle of batter and spread outward into thin circle.",
      "Drizzle oil around edges until golden brown and crispy.",
      "Place potato masala in center, fold dosa, and serve immediately with chutneys."
    ],
    flavorProfile: ["savory", "tangy", "crispy"],
    variations: [
      "Top with cheese for Cheese Masala Dosa or Mysore spicy red paste."
    ]
  },
  {
    id: "dish-23",
    name: "Puri Bhaji",
    description: "Fluffy deep-fried whole wheat puff bread served with a flavorful yellow potato curry garnished with cilantro.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=14k90kL3K8E",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    cuisine: "Indian",
    mealType: ["Breakfast", "Lunch"],
    category: "Vegan",
    servings: 4,
    calories: 450,
    ingredients: [
      "Whole wheat flour dough",
      "Boiled potatoes",
      "Green chilies",
      "Ginger",
      "Mustard seeds",
      "Turmeric powder",
      "Cilantro",
      "Oil for frying"
    ],
    instructions: [
      "Roll wheat dough into small discs.",
      "Deep fry in hot oil until puffed into golden balloons.",
      "Sauté mustard seeds, ginger, chilies, turmeric, and potato chunks in water to form mild gravy.",
      "Serve piping hot puris alongside potato bhaji."
    ],
    flavorProfile: ["savory", "comforting"],
    variations: [
      "Serve with sweet Aamras (mango pulp) in summer."
    ]
  },
  {
    id: "dish-24",
    name: "Classic Pav Bhaji",
    description: "Spiced mashed vegetable curry cooked on a large tawa, served with butter-toasted pav buns, onions, and lemon.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "20 minutes",
    cookTime: "25 minutes",
    cuisine: "Indian",
    mealType: ["Lunch", "Snack", "Dinner"],
    category: "Vegetarian",
    servings: 4,
    calories: 490,
    ingredients: [
      "Mixed vegetables (potatoes, cauliflower, peas, carrots)",
      "Pav bhaji masala",
      "Butter",
      "Tomatoes & Onions",
      "Capsicum",
      "Garlic chili paste",
      "Pav buns",
      "Lemon wedges"
    ],
    instructions: [
      "Boil and mash vegetables until smooth.",
      "Sauté onions, capsicum, tomatoes, and garlic paste in generous butter.",
      "Add pav bhaji masala, red chili powder, and mashed veggies; cook on high heat mash continuously.",
      "Toast pav buns with butter and coriander.",
      "Serve hot topped with extra butter knob, chopped raw onions, and lemon squeeze."
    ],
    flavorProfile: ["spicy", "butter-rich", "tangy"],
    variations: [
      "Add grated cheese on top for Cheese Pav Bhaji."
    ]
  },
  {
    id: "dish-25",
    name: "Samosa Chaat",
    description: "Crushed crispy samosas topped with warm chickpea curry, sweet tamarind chutney, spicy green chutney, yogurt, and sev.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=91k05W84M00",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    cuisine: "Indian",
    mealType: ["Snack"],
    category: "Vegetarian",
    servings: 2,
    calories: 420,
    ingredients: [
      "Potato Samosas",
      "Warm Ragda or Chole curry",
      "Sweet tamarind date chutney",
      "Spicy mint coriander chutney",
      "Whisked sweet yogurt",
      "Sev (crispy chickpea noodles)",
      "Pomegranate seeds",
      "Chaat masala"
    ],
    instructions: [
      "Place warm potato samosas in bowl and crush gently.",
      "Ladle warm chole curry over samosas.",
      "Drizzle sweet yogurt, mint chutney, and tamarind chutney.",
      "Sprinkle chaat masala, crisp sev, chopped onions, and pomegranate seeds.",
      "Eat immediately with spoon."
    ],
    flavorProfile: ["tangy", "spicy", "sweet", "crunchy"],
    variations: [
      "Omit yogurt for a vegan street food snack."
    ]
  },
  {
    id: "dish-26",
    name: "Creamy Fettuccine Alfredo",
    description: "Fettuccine pasta tossed in a velvety smooth sauce of heavy cream, butter, and freshly grated Parmesan cheese.",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=8302-8K2180",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    cuisine: "Italian",
    mealType: ["Lunch", "Dinner"],
    category: "Vegetarian",
    servings: 3,
    calories: 560,
    ingredients: [
      "Fettuccine pasta",
      "Unsalted butter",
      "Heavy cream",
      "Parmigiano-Reggiano cheese",
      "Garlic",
      "Black pepper",
      "Fresh parsley"
    ],
    instructions: [
      "Boil fettuccine al dente in salted water.",
      "Melt butter with minced garlic in large pan over medium heat.",
      "Pour heavy cream and bring to gentle simmer.",
      "Toss in pasta and remove from heat; gradually stir in Parmigiano cheese until rich and silky sauce coats pasta.",
      "Season with cracked black pepper."
    ],
    flavorProfile: ["creamy", "cheesy", "rich"],
    variations: [
      "Top with grilled chicken breast or garlic sautéed shrimp."
    ]
  },
  {
    id: "dish-27",
    name: "Classic Penne Arrabbiata",
    description: "Penne pasta coated in a fiery Italian tomato sauce infused with garlic, red chili flakes, and extra virgin olive oil.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281318?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    cuisine: "Italian",
    mealType: ["Lunch", "Dinner"],
    category: "Vegan",
    servings: 4,
    calories: 390,
    ingredients: [
      "Penne pasta",
      "San Marzano tomatoes",
      "Garlic cloves",
      "Red pepper flakes (peperoncino)",
      "Extra virgin olive oil",
      "Fresh Parsley",
      "Salt"
    ],
    instructions: [
      "Cook penne pasta in salted boiling water.",
      "Sauté sliced garlic and generous red pepper flakes in olive oil until golden.",
      "Add crushed tomatoes and simmer sauce for 10 minutes.",
      "Toss cooked penne directly into spicy sauce with a splash of pasta water.",
      "Garnish with chopped fresh parsley."
    ],
    flavorProfile: ["spicy", "tangy", "savory"],
    variations: [
      "Add black olives or capers for extra salinity."
    ]
  },
  {
    id: "dish-28",
    name: "Tiramisu",
    description: "Classic Italian dessert made of ladyfinger biscuits dipped in espresso coffee, layered with whipped mascarpone cream and cocoa powder.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "30 minutes",
    cookTime: "0 minutes",
    cuisine: "Italian",
    mealType: ["Dessert"],
    category: "Dessert",
    servings: 6,
    calories: 450,
    ingredients: [
      "Savoiardi Ladyfingers",
      "Mascarpone cheese",
      "Egg yolks",
      "Heavy cream",
      "Espresso coffee",
      "Dark Cocoa powder",
      "Sugar",
      "Marsala wine or Rum (optional)"
    ],
    instructions: [
      "Whisk egg yolks and sugar over double boiler until pale and creamy.",
      "Fold in mascarpone cheese and whipped cream until smooth.",
      "Dip ladyfingers quickly in strong espresso coffee.",
      "Layer dipped biscuits in dish, cover with mascarpone cream, and repeat layers.",
      "Chill for at least 4 hours, then dust generously with cocoa powder before slicing."
    ],
    flavorProfile: ["sweet", "coffee-rich", "creamy"],
    variations: [
      "Make a Matcha green tea Tiramisu variation."
    ]
  },
  {
    id: "dish-29",
    name: "Enchiladas Verdes",
    description: "Soft corn tortillas stuffed with shredded chicken, rolled and smothered in green tomatillo sauce and melted Monterey Jack cheese.",
    image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "25 minutes",
    cookTime: "25 minutes",
    cuisine: "Mexican",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 520,
    ingredients: [
      "Corn tortillas",
      "Shredded cooked chicken",
      "Tomatillo green salsa",
      "Monterey Jack cheese",
      "Sour cream (Crema)",
      "Cilantro",
      "Cumin",
      "Garlic"
    ],
    instructions: [
      "Lightly fry corn tortillas in oil so they fold without tearing.",
      "Fill tortillas with shredded seasoned chicken and roll tightly.",
      "Place rolls seam-down in baking dish, cover generously with salsa verde and cheese.",
      "Bake at 375°F (190°C) for 20 minutes until cheese melts and bubbles.",
      "Drizzle with sour cream and chopped cilantro."
    ],
    flavorProfile: ["tangy", "savory", "cheesy"],
    variations: [
      "Fill with roasted black beans and cheese for vegetarian enchiladas."
    ]
  },
  {
    id: "dish-30",
    name: "Crispy Chicken Quesadilla",
    description: "Flour tortilla stuffed with spiced chicken, melted cheddar and jack cheeses, sautéed peppers, grilled until golden and crispy.",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    cuisine: "Mexican",
    mealType: ["Lunch", "Snack"],
    category: "Non-Vegetarian",
    servings: 2,
    calories: 490,
    ingredients: [
      "Large flour tortillas",
      "Grilled chicken strips",
      "Shredded Cheddar & Monterey Jack",
      "Sautéed bell peppers & onions",
      "Salsa",
      "Sour cream",
      "Butter"
    ],
    instructions: [
      "Butter one side of flour tortilla and place on hot skillet.",
      "Layer cheese, grilled chicken, sautéed peppers, and more cheese on half.",
      "Fold tortilla over and cook until golden brown on both sides.",
      "Slice into triangles and serve with salsa and sour cream."
    ],
    flavorProfile: ["cheesy", "savory", "crispy"],
    variations: [
      "Swap chicken for sautéed mushrooms and spinach."
    ]
  },
  {
    id: "dish-31",
    name: "Japanese Chicken Katsu Curry",
    description: "Crispy panko-breaded chicken cutlet sliced over white rice, served with a rich, savory Japanese curry sauce.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "25 minutes",
    cookTime: "20 minutes",
    cuisine: "Japanese",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 3,
    calories: 650,
    ingredients: [
      "Chicken cutlets",
      "Panko breadcrumbs",
      "Japanese Curry roux blocks",
      "Carrots & Potatoes",
      "Onions",
      "Short grain Rice",
      "Flour & Egg for dreading",
      "Oil for frying"
    ],
    instructions: [
      "Simmer onions, carrots, and potatoes with Japanese curry roux until thick.",
      "Dredge chicken cutlets in flour, beaten egg, and coat thoroughly with crisp panko breadcrumbs.",
      "Deep fry chicken until golden brown (165°F / 74°C internal).",
      "Slice chicken katsu into strips, lay over white rice, and pour hot curry sauce over half."
    ],
    flavorProfile: ["savory", "sweet", "crispy", "rich"],
    variations: [
      "Use panko-crusted fried tofu for Tofu Katsu Curry."
    ]
  },
  {
    id: "dish-32",
    name: "Teriyaki Salmon Bowl",
    description: "Pan-seared salmon fillet glazed with sweet & savory teriyaki sauce, served over jasmine rice with steamed broccoli and sesame seeds.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "15 minutes",
    cookTime: "12 minutes",
    cuisine: "Japanese",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 2,
    calories: 520,
    ingredients: [
      "Salmon fillets",
      "Soy sauce",
      "Mirin",
      "Sake",
      "Brown sugar",
      "Jasmine rice",
      "Steamed Broccoli",
      "Sesame seeds"
    ],
    instructions: [
      "Whisk soy sauce, mirin, sake, and brown sugar into teriyaki glaze.",
      "Sear salmon fillets skin-side down in hot pan until crispy.",
      "Flip salmon, pour teriyaki sauce, and simmer until glazed.",
      "Serve glazed salmon over warm jasmine rice alongside steamed broccoli and sesame seeds."
    ],
    flavorProfile: ["sweet", "savory", "umami"],
    variations: [
      "Substitute salmon with seared tofu or chicken thigh."
    ]
  },
  {
    id: "dish-33",
    name: "Tom Yum Goong (Spicy Thai Shrimp Soup)",
    description: "Hot and sour Thai soup cooked with lemongrass, galangal, kaffir lime leaves, chili, juicy jumbo shrimp, and mushrooms.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "15 minutes",
    cookTime: "15 minutes",
    cuisine: "Thai",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 260,
    ingredients: [
      "Jumbo Shrimp",
      "Lemongrass stalks",
      "Galangal root slices",
      "Kaffir lime leaves",
      "Thai chili paste (Nam Prik Pao)",
      "Straw mushrooms",
      "Fish sauce",
      "Lime juice",
      "Cilantro"
    ],
    instructions: [
      "Boil shrimp stock with crushed lemongrass, galangal, and kaffir lime leaves for fragrant broth.",
      "Stir in chili paste, fish sauce, and mushrooms.",
      "Add shrimp and cook just until pink (2-3 minutes).",
      "Remove from heat, stir in fresh lime juice, and top with cilantro."
    ],
    flavorProfile: ["hot", "sour", "citrusy", "savory"],
    variations: [
      "Add coconut milk for Tom Yum Nam Khon (creamy style)."
    ]
  },
  {
    id: "dish-34",
    name: "Thai Mango Sticky Rice (Khao Niew Mamuang)",
    description: "Sweetened coconut sticky rice served with ripe sliced yellow mangoes and topped with warm salted coconut cream sauce.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    cuisine: "Thai",
    mealType: ["Dessert"],
    category: "Vegan",
    servings: 4,
    calories: 380,
    ingredients: [
      "Thai Glutinous Sticky Rice",
      "Ripe Honey Mangoes",
      "Coconut milk",
      "Palm sugar",
      "Salt",
      "Toasted sesame seeds or mung beans"
    ],
    instructions: [
      "Steam soaked glutinous sticky rice for 25 minutes.",
      "Warm coconut milk with sugar and pinch of salt until sugar dissolves.",
      "Pour sweet coconut mixture over hot steamed sticky rice; cover for 20 minutes to absorb.",
      "Slice fresh mangoes.",
      "Serve warm rice next to mango slices, drizzled with extra coconut cream."
    ],
    flavorProfile: ["sweet", "creamy", "tropical"],
    variations: [
      "Pandan infused sticky rice for bright green color and herbal notes."
    ]
  },
  {
    id: "dish-35",
    name: "Crispy Lebanese Falafel Bowl",
    description: "Falafel served over quinoa, cucumber tomato salad, hummus, pickled cabbage, and drizzled with garlic lemon tahini dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    cuisine: "Middle Eastern",
    mealType: ["Lunch", "Dinner"],
    category: "Vegan",
    servings: 2,
    calories: 460,
    ingredients: [
      "Crispy Falafels",
      "Cooked Quinoa",
      "Smooth Hummus",
      "Pickled red cabbage",
      "Cucumbers & Tomatoes",
      "Tahini",
      "Lemon juice",
      "Olive oil"
    ],
    instructions: [
      "Arrange base of fluffy quinoa in bowl.",
      "Scoop dollop of creamy hummus and pickled red cabbage.",
      "Add fresh diced cucumber tomato salad.",
      "Top with 4 crispy hot falafels.",
      "Drizzle garlic lemon tahini dressing."
    ],
    flavorProfile: ["savory", "tangy", "fresh", "nutty"],
    variations: [
      "Add dolmas (grape leaves stuffed with rice)."
    ]
  },
  {
    id: "dish-36",
    name: "Mediterranean Grain Bowl",
    description: "Farro grain base topped with roasted chickpeas, cucumber, cherry tomatoes, kalamata olives, feta cheese, and lemon herb vinaigrette.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    cuisine: "Mediterranean",
    mealType: ["Lunch"],
    category: "Vegetarian",
    servings: 2,
    calories: 410,
    ingredients: [
      "Farro grain",
      "Roasted spiced chickpeas",
      "Cucumbers",
      "Cherry tomatoes",
      "Kalamata olives",
      "Feta cheese",
      "Lemon juice",
      "Extra virgin olive oil",
      "Oregano"
    ],
    instructions: [
      "Cook farro in vegetable broth until tender.",
      "Roast chickpeas with olive oil, cumin, and paprika.",
      "Assemble farro bowls with roasted chickpeas, tomatoes, cucumbers, and olives.",
      "Crumble fresh Greek feta on top and dress with lemon oregano vinaigrette."
    ],
    flavorProfile: ["tangy", "savory", "fresh"],
    variations: [
      "Omit feta cheese for a vegan grain bowl."
    ]
  },
  {
    id: "dish-37",
    name: "Spanish Gambas al Ajillo (Garlic Shrimp)",
    description: "Sizzling shrimp cooked in extra virgin olive oil infused with sliced garlic, dried red chili, sherry wine, and parsley.",
    image: "https://images.unsplash.com/photo-1559742811-822863646df1?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "10 minutes",
    cookTime: "8 minutes",
    cuisine: "Spanish",
    mealType: ["Appetizer", "Dinner"],
    category: "Non-Vegetarian",
    servings: 3,
    calories: 340,
    ingredients: [
      "Large raw shrimp peeled",
      "Garlic thinly sliced",
      "Red chili pepper",
      "Extra virgin olive oil",
      "Dry Sherry wine",
      "Fresh parsley",
      "Crusty bread"
    ],
    instructions: [
      "Heat generous olive oil in clay cazuela or skillet over medium heat.",
      "Sauté sliced garlic and chili pepper until golden.",
      "Add shrimp and cook for 2 minutes per side until pink.",
      "Splash dry sherry wine and sprinkle chopped parsley.",
      "Serve sizzling hot with crusty bread for dipping in oil."
    ],
    flavorProfile: ["garlicky", "spicy", "rich"],
    variations: [
      "Add smoked paprika for additional depth."
    ]
  },
  {
    id: "dish-38",
    name: "Classic French Ratatouille",
    description: "Provencal stewed vegetable dish featuring layered sliced eggplant, zucchini, yellow squash, and tomatoes over roasted pepper sauce.",
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    cuisine: "French",
    mealType: ["Lunch", "Dinner"],
    category: "Vegan",
    servings: 4,
    calories: 240,
    ingredients: [
      "Eggplant",
      "Zucchini",
      "Yellow squash",
      "Roma tomatoes",
      "Red bell pepper sauce base (Piperade)",
      "Garlic & Thyme",
      "Olive oil",
      "Herbes de Provence"
    ],
    instructions: [
      "Spread roasted red pepper tomato sauce at bottom of baking dish.",
      "Slice eggplant, zucchini, yellow squash, and tomatoes into ultra thin rounds.",
      "Arrange vegetable slices in alternating spiral pattern.",
      "Drizzle with garlic herb olive oil, cover with parchment paper, and bake at 375°F (190°C) for 40 minutes.",
      "Garnish with fresh basil sprigs."
    ],
    flavorProfile: ["herbaceous", "tangy", "savory"],
    variations: [
      "Serve alongside goat cheese crostini."
    ]
  },
  {
    id: "dish-39",
    name: "Classic Chocolate Lava Cake",
    description: "Warm individual chocolate cakes with a rich molten chocolate center that flows when cut open, served with vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "15 minutes",
    cookTime: "12 minutes",
    cuisine: "French",
    mealType: ["Dessert"],
    category: "Dessert",
    servings: 2,
    calories: 510,
    ingredients: [
      "Bittersweet Dark Chocolate (70%)",
      "Unsalted butter",
      "Eggs & Egg yolks",
      "Sugar",
      "All-purpose flour",
      "Vanilla extract",
      "Vanilla Bean Ice Cream"
    ],
    instructions: [
      "Melt dark chocolate and butter together until smooth.",
      "Whisk eggs, egg yolks, sugar, and vanilla until pale.",
      "Fold melted chocolate and flour gently into egg batter.",
      "Pour into buttered dusted ramekins and bake at 425°F (220°C) for exactly 12 minutes.",
      "Invert onto plate, top with vanilla ice cream, and serve immediately."
    ],
    flavorProfile: ["sweet", "chocolate-rich", "warm"],
    variations: [
      "Add a pinch of cayenne or espresso powder to chocolate batter."
    ]
  },
  {
    id: "dish-40",
    name: "New York Style Cheesecake",
    description: "Dense, rich, and ultra creamy baked cheesecake with a buttery graham cracker crust, topped with fresh strawberry sauce.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "30 minutes",
    cookTime: "60 minutes",
    cuisine: "American",
    mealType: ["Dessert"],
    category: "Dessert",
    servings: 8,
    calories: 540,
    ingredients: [
      "Cream cheese",
      "Graham cracker crumbs",
      "Butter melted",
      "Sugar",
      "Sour cream",
      "Eggs",
      "Vanilla extract",
      "Strawberry compote"
    ],
    instructions: [
      "Press buttered graham cracker crumbs into bottom of springform pan.",
      "Beat cream cheese, sugar, sour cream, and vanilla until velvety.",
      "Add eggs one at a time on low speed.",
      "Bake in water bath at 325°F (160°C) for 60 minutes.",
      "Cool completely in fridge overnight; top with strawberry compote before serving."
    ],
    flavorProfile: ["rich", "creamy", "tangy", "sweet"],
    variations: [
      "Top with salted caramel and toasted pecans."
    ]
  },
  {
    id: "dish-41",
    name: "Buffalo Chicken Wings",
    description: "Crispy fried chicken wings tossed in a spicy, buttery cayenne pepper sauce served with celery sticks and blue cheese dip.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    cuisine: "American",
    mealType: ["Appetizer", "Snack"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 590,
    ingredients: [
      "Chicken wings & drumettes",
      "Frank's RedHot sauce",
      "Unsalted butter melted",
      "Garlic powder",
      "Baking powder",
      "Celery sticks",
      "Blue cheese dressing"
    ],
    instructions: [
      "Toss dry wings with baking powder and salt.",
      "Bake at 425°F (220°C) for 45 minutes turning halfway until ultra crispy.",
      "Whisk hot sauce, melted butter, and garlic powder into sauce.",
      "Toss hot wings in buffalo sauce until coated.",
      "Serve with celery sticks and blue cheese dip."
    ],
    flavorProfile: ["spicy", "tangy", "savory", "crispy"],
    variations: [
      "Honey BBQ or Garlic Parmesan wing sauce variations."
    ]
  },
  {
    id: "dish-42",
    name: "Classic Caesar Salad",
    description: "Crisp romaine lettuce hearts tossed with garlic croutons, shaved Parmesan, and house-made creamy Caesar anchovy dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    cuisine: "American",
    mealType: ["Lunch"],
    category: "Vegetarian",
    servings: 2,
    calories: 320,
    ingredients: [
      "Romaine lettuce hearts",
      "Garlic butter croutons",
      "Shaved Parmigiano-Reggiano",
      "Egg yolk",
      "Dijon mustard",
      "Lemon juice",
      "Anchovy paste",
      "Olive oil"
    ],
    instructions: [
      "Emulsify egg yolk, Dijon, garlic, lemon juice, and anchovy paste with olive oil.",
      "Chop crisp romaine lettuce.",
      "Toss lettuce gently with creamy dressing.",
      "Top with crunchy garlic croutons and shaved parmesan."
    ],
    flavorProfile: ["savory", "tangy", "crispy"],
    variations: [
      "Add grilled lemon pepper chicken breast."
    ]
  },
  {
    id: "dish-43",
    name: "Loaded Nachos Supreme",
    description: "Crispy tortilla chips layered with melted cheddar jack cheese, seasoned ground beef, black beans, jalapenos, guacamole, and sour cream.",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "15 minutes",
    cookTime: "12 minutes",
    cuisine: "Mexican",
    mealType: ["Snack", "Appetizer"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 670,
    ingredients: [
      "Tortilla chips",
      "Seasoned taco ground beef",
      "Black beans",
      "Shredded Cheddar & Jack cheese",
      "Pickled Jalapeño slices",
      "Pico de Gallo salsa",
      "Guacamole",
      "Sour cream"
    ],
    instructions: [
      "Spread tortilla chips on baking sheet.",
      "Layer cooked taco beef, black beans, and shredded cheeses.",
      "Bake at 400°F (200°C) until cheese melts completely.",
      "Top with pico de gallo, jalapenos, dollops of guacamole, and sour cream."
    ],
    flavorProfile: ["savory", "cheesy", "spicy"],
    variations: [
      "Use refried beans and extra queso for vegetarian nachos."
    ]
  },
  {
    id: "dish-44",
    name: "Classic Indian Mango Lassi",
    description: "Refreshing yogurt-based drink blended with ripe Alphonso mangoes, cardamom powder, and sweet saffron syrup.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "5 minutes",
    cookTime: "0 minutes",
    cuisine: "Indian",
    mealType: ["Beverage", "Snack"],
    category: "Beverage",
    servings: 2,
    calories: 220,
    ingredients: [
      "Ripe Alphonso Mango pulp",
      "Plain Yogurt (Dahi)",
      "Milk or Ice cubes",
      "Sugar or Honey",
      "Cardamom powder",
      "Sliced pistachios"
    ],
    instructions: [
      "Add mango pulp, yogurt, milk, sugar, and cardamom powder to blender.",
      "Blend on high until silky smooth and frothy.",
      "Pour into chilled glasses over ice.",
      "Garnish with cardamom dust and sliced pistachios."
    ],
    flavorProfile: ["sweet", "fruity", "creamy"],
    variations: [
      "Use coconut yogurt and almond milk for a vegan lassi."
    ]
  },
  {
    id: "dish-45",
    name: "Masala Chai",
    description: "Traditional Indian spiced milk tea brewed with black tea leaves, crushed ginger, cardamom, cinnamon, and cloves.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "5 minutes",
    cookTime: "10 minutes",
    cuisine: "Indian",
    mealType: ["Beverage"],
    category: "Beverage",
    servings: 2,
    calories: 140,
    ingredients: [
      "Assam black tea leaves",
      "Water & Whole Milk",
      "Fresh crushed Ginger",
      "Green Cardamom pods",
      "Cinnamon stick",
      "Sugar"
    ],
    instructions: [
      "Boil water with crushed ginger, cardamom pods, and cinnamon stick for 4 minutes.",
      "Add black tea leaves and simmer for 2 minutes.",
      "Pour milk and sugar, bring to boil twice until tea darkens.",
      "Strain through mesh sieve into cups and serve piping hot."
    ],
    flavorProfile: ["spiced", "sweet", "aromatic"],
    variations: [
      "Oat milk masala chai alternative."
    ]
  },
  {
    id: "dish-46",
    name: "Gulab Jamun",
    description: "Soft milk-solid dough balls fried to golden brown and soaked in a warm rose and cardamom scented sugar syrup.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "20 minutes",
    cookTime: "25 minutes",
    cuisine: "Indian",
    mealType: ["Dessert"],
    category: "Dessert",
    servings: 6,
    calories: 380,
    ingredients: [
      "Khoya (evaporated milk solids) or Milk powder",
      "All-purpose flour",
      "Pinch of baking powder",
      "Ghee for deep frying",
      "Sugar syrup",
      "Rose water",
      "Cardamom pods",
      "Saffron"
    ],
    instructions: [
      "Knead khoya, flour, and baking powder into smooth, crack-free balls.",
      "Fry low and slow in ghee until dark golden brown.",
      "Prepare sugar syrup scented with cardamom, saffron, and rose water.",
      "Soak warm fried jamuns in sugar syrup for at least 2 hours.",
      "Serve warm."
    ],
    flavorProfile: ["sweet", "aromatic", "melt-in-mouth"],
    variations: [
      "Serve paired with vanilla ice cream (Gulab Jamun with Ice Cream)."
    ]
  },
  {
    id: "dish-47",
    name: "Rasmalai",
    description: "Soft spongy cottage cheese patties soaked in chilled, saffron and cardamom infused sweetened milk garnished with nuts.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "30 minutes",
    cookTime: "30 minutes",
    cuisine: "Indian",
    mealType: ["Dessert"],
    category: "Dessert",
    servings: 6,
    calories: 320,
    ingredients: [
      "Fresh Chenna (paneer curd)",
      "Sugar syrup for boiling",
      "Full fat Milk",
      "Saffron strands",
      "Cardamom powder",
      "Sliced pistachios & almonds"
    ],
    instructions: [
      "Knead chenna until completely smooth, form flat discs.",
      "Poach discs in boiling light sugar syrup until double in size.",
      "Simmer milk with sugar, saffron, and cardamom until reduced by half (Rabri).",
      "Squeeze excess syrup from chenna discs and transfer into warm saffron milk.",
      "Chill in refrigerator and serve cold sprinkled with pistachios."
    ],
    flavorProfile: ["sweet", "creamy", "aromatic"],
    variations: [
      "Kesar Mango Rasmalai twist."
    ]
  },
  {
    id: "dish-48",
    name: "Vietnamese Pho Ga (Chicken Noodle Soup)",
    description: "Comforting aromatic broth spiced with star anise and cinnamon, served over flat rice noodles, poached chicken, and fresh herbs.",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "20 minutes",
    cookTime: "60 minutes",
    cuisine: "Vietnamese",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 4,
    calories: 410,
    ingredients: [
      "Whole chicken bone stock",
      "Charred Ginger & Onions",
      "Star anise, Cinnamon, Coriander seeds",
      "Flat Pho rice noodles",
      "Shredded chicken breast",
      "Bean sprouts",
      "Thai basil & Cilantro",
      "Hoisin & Sriracha sauce"
    ],
    instructions: [
      "Simmer chicken stock with charred ginger, onion, star anise, and spices for 1 hour.",
      "Boil flat rice noodles.",
      "Arrange noodles and shredded chicken in bowl.",
      "Ladle piping hot broth over chicken.",
      "Serve with side plate of fresh bean sprouts, Thai basil, jalapeño slices, lime wedges, and Sriracha."
    ],
    flavorProfile: ["aromatic", "savory", "comforting"],
    variations: [
      "Use mushroom vegetable stock and tofu for Veg Pho."
    ]
  },
  {
    id: "dish-49",
    name: "Korean Bibimbap",
    description: "Warm rice bowl topped with seasoned vegetables, kimchi, marinated beef, fried egg, and spicy Gochujang chili sauce.",
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    cuisine: "Korean",
    mealType: ["Lunch", "Dinner"],
    category: "Non-Vegetarian",
    servings: 2,
    calories: 570,
    ingredients: [
      "White rice",
      "Bulgogi beef slices",
      "Sautéed spinach, carrots, bean sprouts, zucchini",
      "Kimchi",
      "Sunny-side up Fried Egg",
      "Gochujang (Korean chili paste)",
      "Sesame oil & seeds"
    ],
    instructions: [
      "Prepare individual vegetable toppings separately with garlic and sesame oil.",
      "Sear marinated beef in hot pan.",
      "Assemble bowl with hot rice in center, arrange colored vegetables and beef in sections around edge.",
      "Place fried egg on top and serve with Gochujang sauce.",
      "Mix thoroughly before eating."
    ],
    flavorProfile: ["spicy", "savory", "nutty", "rich"],
    variations: [
      "Dolsot Bibimbap cooked in sizzling hot stone pot for crispy rice bottom."
    ]
  },
  {
    id: "dish-50",
    name: "Korean Crispy Fried Chicken (Yangnyeom)",
    description: "Extra crispy double-fried chicken wings coated in a sweet, sticky, and spicy Gochujang honey garlic glaze.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    cuisine: "Korean",
    mealType: ["Dinner", "Snack"],
    category: "Non-Vegetarian",
    servings: 3,
    calories: 690,
    ingredients: [
      "Chicken wings",
      "Potato starch / Cornstarch",
      "Gochujang paste",
      "Honey & Brown sugar",
      "Garlic & Ginger",
      "Soy sauce",
      "Sesame seeds",
      "Oil for double frying"
    ],
    instructions: [
      "Coat wings lightly in potato starch batter.",
      "Fry once at 330°F (165°C) for 10 minutes; rest for 5 minutes.",
      "Fry second time at 375°F (190°C) until golden glass-shatter crisp.",
      "Simmer Gochujang, honey, garlic, and soy sauce until sticky glaze forms.",
      "Toss double-fried wings immediately in glaze and sprinkle white sesame seeds."
    ],
    flavorProfile: ["sweet", "spicy", "crispy", "savory"],
    variations: [
      "Soy garlic butter glaze variation."
    ]
  },
  {
    id: "dish-51",
    name: "Vegetable Hakka Noodles",
    description: "Indo-Chinese style wok-tossed noodles cooked with julienned cabbage, bell peppers, carrots, spring onions, and soy chili sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    cuisine: "Asian",
    mealType: ["Lunch", "Dinner"],
    category: "Vegan",
    servings: 3,
    calories: 410,
    ingredients: [
      "Hakka Noodles",
      "Julienned Cabbage, Carrots, Capsicum",
      "Spring Onions",
      "Soy sauce",
      "Green chili sauce",
      "Vinegar",
      "Garlic & Ginger",
      "Black pepper"
    ],
    instructions: [
      "Boil noodles al dente, drain, and toss with a drop of oil.",
      "Heat wok on smoking high heat with oil.",
      "Sauté ginger, garlic, and sliced vegetables for 2 minutes to keep crunchy.",
      "Add noodles, soy sauce, chili sauce, vinegar, and black pepper.",
      "Toss vigorously on high heat and garnish with spring greens."
    ],
    flavorProfile: ["savory", "smoky", "tangy"],
    variations: [
      "Add scrambled egg or chicken strips for Chicken Hakka Noodles."
    ]
  },
  {
    id: "dish-52",
    name: "Veg Manchurian Gravy",
    description: "Crispy fried vegetable balls tossed in a tangy, spicy Indo-Chinese dark soy and ginger garlic gravy.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop",
    yt_url: "https://www.youtube.com/watch?v=0k5G605W84M",
    prepTime: "25 minutes",
    cookTime: "20 minutes",
    cuisine: "Asian",
    mealType: ["Lunch", "Dinner"],
    category: "Vegan",
    servings: 4,
    calories: 380,
    ingredients: [
      "Grated Cabbage & Carrots",
      "Cornflour & Maida flour",
      "Dark Soy sauce",
      "Chili sauce & Ketchup",
      "Finely chopped Garlic & Ginger",
      "Spring onions",
      "Vegetable stock"
    ],
    instructions: [
      "Squeeze excess water from grated veggies, mix with flour, salt, pepper, and bind into small balls.",
      "Deep fry vegetable balls until golden crispy.",
      "In a wok, sauté garlic, ginger, and green chilies.",
      "Pour soy sauce, chili sauce, ketchup, and stock slurry to thicken gravy.",
      "Add fried Manchurian balls, toss for 2 minutes, and serve with Fried Rice."
    ],
    flavorProfile: ["savory", "tangy", "spicy"],
    variations: [
      "Dry Veg Manchurian version for appetizers."
    ]
  }
];
