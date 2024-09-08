"use client";
import { ProductsDTO } from "@/mock/products-mock";
import React, { createContext, useMemo, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({});

interface GlobalProviderDTO {
  cart: ProductsDTO[];
  addToCart: (product: any) => void;
  removeFromCart: (product: any) => void;
  clearCart: () => void;
  totalPrice: number;
}

const GlobalProvider = ({ children }: any) => {
  const [cart, setCart] = useState<ProductsDTO[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToCart = (product: ProductsDTO) => {
    const alreadyInCart = cart.some(
      (item: ProductsDTO) => item.id === product.id
    );

    if (alreadyInCart) {
      const newCart = cart.map((item: ProductsDTO) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...product }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  };

  const priceCalculator = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    setTotalPrice(priceCalculator);
  }, [cart]);

  const memoizedContext = (obj: any) => useMemo(() => obj, [obj]);
  const context: GlobalProviderDTO = memoizedContext({
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
  });

  const { Provider } = GlobalContext;

  return <Provider value={context}>{children}</Provider>;
};

const useGlobalContext = () => useContext(GlobalContext) as GlobalProviderDTO;

export { GlobalProvider, useGlobalContext };
export type { GlobalProviderDTO };
