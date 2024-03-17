import React, { createContext, useState, useContext, ReactNode } from "react";
import { ImageProps, ToastAndroid } from "react-native";
import { foodList, sauceList, snackList, softDrinkList } from "./Data";

// Define interfaces for Food and CartItem
export interface Food {
  id: string;
  Name: string;
  img: ImageProps | Readonly<ImageProps>;
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
  calculateTotalCost: () => string;
  searchFood: (searchInput: string) => Food[];
  showToastWithGravity: (message: string) => void;
  isLogin: boolean;
  setLogin: (data: boolean) => void;
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
  calculateTotalCost: () => "0.00",
  searchFood: () => [],
  showToastWithGravity: () => {},
  isLogin: false,
  setLogin: () => {},
});

// Create the context provider component
export const FoodProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [foodData, setFoodData] = useState<Food[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [likeFood, setLikeFood] = useState<Food[]>([]);
  const [isLogin, setIsLogin] = useState<boolean>();

  const setLogin = (value: boolean) => {
    setIsLogin(value);
  };
  // Method to add food to the cart
  const addToCart: FoodContextType["addToCart"] = (food) => {
    showToastWithGravity("Your Items will added in cart!");
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
  const removeFromCart: FoodContextType["removeFromCart"] = (foodId) => {
    setCart(cart.filter((item) => item.food.id !== foodId));
  };

  // Method to increase quantity of an item in the cart
  const increaseQuantity: FoodContextType["increaseQuantity"] = (foodId) => {
    const updatedCart = cart.map((item) =>
      item.food.id === foodId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Method to decrease quantity of an item in the cart
  const decreaseQuantity: FoodContextType["decreaseQuantity"] = (foodId) => {
    const updatedCart = cart.map((item) =>
      item.food.id === foodId && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  // Method to add liked food
  const addLikeFood: FoodContextType["addLikeFood"] = (food) => {
    const existingItem = likeFood.find((item) => item.id === food.id);
    if (!existingItem) {
      setLikeFood([...likeFood, food]);
      showToastWithGravity("You item is add to favorite list");
    }
  };

  // Method to remove liked food
  const removeLikeFood: FoodContextType["removeLikeFood"] = (foodId) => {
    setLikeFood(likeFood.filter((item) => item.id !== foodId));
  };

  const calculateTotalCost: FoodContextType["calculateTotalCost"] = () => {
    return cart
      .reduce((total, item) => {
        const itemPrice = parseFloat(item.food.price);
        return total + itemPrice * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const searchFood: FoodContextType["searchFood"] = (searchInput) => {
    const filteredFood = [
      ...foodList,
      ...softDrinkList,
      ...snackList,
      ...sauceList,
    ].filter((food) =>
      food.Name.toLowerCase().includes(searchInput?.toLowerCase() || "")
    );
    return filteredFood;
  };

  const showToastWithGravity: FoodContextType["showToastWithGravity"] = (
    message
  ) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
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
        calculateTotalCost,
        searchFood,
        showToastWithGravity,
        isLogin,
        setLogin,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

// Custom hook to use the food context
export const useFoodContext = () => useContext(FoodContext);
