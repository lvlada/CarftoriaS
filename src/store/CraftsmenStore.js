import { create } from 'zustand';
import axios from 'axios';

const HTML = '/api/craftmans/';

export const useCraftsmenStore = create((set) => ({
  craftsmen: [],
  filteredCraftsmen: [],
  isLoading: false,

  fetchAllCraftsmen: async () => {
    set({ isLoading: true });
    try {
      const res = await axios.get(HTML);
      set({
        craftsmen: res.data || [],
        filteredCraftsmen: res.data || [],
        isLoading: false
      });
    } catch (e) {
      set({ isLoading: false, error: e.message || 'Greška prilikom učitavanja' });
    }
  },

  filterCraftsmen: ({ searchItem, selectedCategory, selectedSubCategory, selectedLocation }) =>
    set((state) => {
      let filtered = state.craftsmen;

      // Filtriraj po imenu (fullName)
      if (searchItem) {
        const search = searchItem.toLowerCase();
        filtered = filtered.filter(
          (c) =>
            c.fullName?.toLowerCase().includes(search) ||
            c.cityName?.toLowerCase().includes(search) ||
            (Array.isArray(c.services) &&
              c.services.some((s) => s.serviceName?.toLowerCase().includes(search)))
        );
      }

      // Filtriraj po lokaciji (cityName)
      if (selectedLocation) {
        filtered = filtered.filter(
          (c) => c.cityName?.toLowerCase() === selectedLocation.toLowerCase()
        );
      }

      // Filtriraj po kategoriji (serviceName)
      if (selectedCategory) {
        filtered = filtered.filter(
          (c) =>
            Array.isArray(c.services) &&
            c.services.some((s) => s.serviceName?.toLowerCase() === selectedCategory.toLowerCase())
        );
      }

      // Filtriraj po podkategoriji (ako postoji subCategoryName)
      if (selectedSubCategory) {
        filtered = filtered.filter(
          (c) =>
            Array.isArray(c.services) &&
            c.services.some(
              (s) =>
                typeof s.serviceName === 'string' &&
                s.serviceName.toLowerCase() === selectedSubCategory.slice(0, -1).toLowerCase()
            )
        );
      }

      return { filteredCraftsmen: filtered };
    })
}));
