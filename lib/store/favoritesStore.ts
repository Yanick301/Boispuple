import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface FavoriteItem {
  id: number
  name: string
  price: number
  image?: string
}

interface FavoritesStore {
  items: FavoriteItem[]
  addFavorite: (item: FavoriteItem) => void
  removeFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
  toggleFavorite: (item: FavoriteItem) => void
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      items: [],
      addFavorite: (item) => {
        if (!get().isFavorite(item.id)) {
          set({ items: [...get().items, item] })
        }
      },
      removeFavorite: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) })
      },
      isFavorite: (id) => {
        return get().items.some((i) => i.id === id)
      },
      toggleFavorite: (item) => {
        if (get().isFavorite(item.id)) {
          get().removeFavorite(item.id)
        } else {
          get().addFavorite(item)
        }
      },
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

