import { nanoid } from "nanoid"

export const menuArray = [
  {
      name: "Pizza",
      ingredients: ["pepperoni", "mushrom", "mozarella"],
      id: nanoid(),
      price: 14,
      emoji: "🍕",
      type:'food',
      
      
  },
  {
      name: "Hamburger",
      ingredients: ["beef", "cheese", "lettuce"],
      price: 12,
      emoji: "🍔",
      id: nanoid(),
      type:'food',
      
      
  },
      {
      name: "Beer",
      ingredients: ["grain", "hops", "yeast", "water"],
      price: 12,
      emoji: "🍺",
      id: nanoid(),
      type:'drink',
      
      
  }
]