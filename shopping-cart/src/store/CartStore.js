import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            setCart: (newCart) => set({ cart: Array.isArray(newCart) ? newCart : [] }), // 배열이 아니면 빈 배열로 설정
        }),
        {
            name: 'cart-storage', // 로컬 스토리지에 저장될 키 이름
        }
    )
);
