import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      user: null,

      setToken: (token) => set({ token }),

      login: (userData, token) =>
        set({
          isAuthenticated: true,
          user: userData,
          token
        }),

      logout: () =>
        set({
          isAuthenticated: false,
          user: null,
          token: null
        })
    }),
    {
      name: 'token',
      partialize: (state) => ({
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user
      })
    }
  )
);

export { useAuthStore };
