import React, { createContext, useState, useContext } from "react";

// Define interfaces for Food and CartItem
export interface Food {
  id: string;
  foodName: string;
  img: string;
  description: string;
  price: string;
}

export interface CartItem {
  food: Food;
  quantity: number;
}

// Define the context interface
interface FoodContextType {
  foodData: Food[];
  cart: CartItem[];
  addToCart: (food: Food) => void;
  removeFromCart: (foodId: string) => void;
  increaseQuantity: (foodId: string) => void;
  decreaseQuantity: (foodId: string) => void;
  likeFood: Food[];
  addLikeFood: (food: Food) => void;
  removeLikeFood: (foodId: string) => void;
}

// Create the context
const FoodContext = createContext<FoodContextType>({
  foodData: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  likeFood: [],
  addLikeFood: () => {},
  removeLikeFood: () => {},
});

// Create the context provider component
export const FoodProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [foodData, setFoodData] = useState<Food[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [likeFood, setLikeFood] = useState<Food[]>([]);

  // Method to add food to the cart
  const addToCart = (food: Food) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.food.id === food.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { food, quantity: 1 }]);
    }
  };

  // Method to remove food from the cart
  const removeFromCart = (foodId: string) => {
    setCart(cart.filter((item) => item.food.id !== foodId));
  };

  // Method to increase quantity of an item in the cart
  const increaseQuantity = (foodId: string) => {
    const updatedCart = cart.map((item) =>
      item.food.id === foodId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Method to decrease quantity of an item in the cart
  const decreaseQuantity = (foodId: string) => {
    const updatedCart = cart.map((item) =>
      item.food.id === foodId && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  // Method to add liked food
  const addLikeFood = (food: Food) => {
    const existingItem = likeFood.find((item) => item.id === food.id);
    if (!existingItem) {
      setLikeFood([...likeFood, food]);
    }
  };

  // Method to remove liked food
  const removeLikeFood = (foodId: string) => {
    setLikeFood(likeFood.filter((item) => item.id !== foodId));
  };

  return (
    <FoodContext.Provider
      value={{
        foodData,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        likeFood,
        addLikeFood,
        removeLikeFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

// Custom hook to use the food context
export const useFoodContext = () => useContext(FoodContext);
