import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  signedIn: boolean;
  setSignedIn: (signedIn: boolean) => void;
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      signedIn: false,
      setSignedIn: (signedIn) => set({ signedIn }),
      hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          hasHydrated: state,
        });
      },
    }),
    {
      name: 'auth-storage',
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true);
      },
    },
  ),
);

export default useAuthStore;
