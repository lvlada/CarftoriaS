import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { getAllCraftsmen } from '@/services/api';

const useSearchStore = create(
  devtools((set, get) => ({
    searchParams: {
      searchTerm: '',
      category: '',
      subCategory: '',
      location: ''
    },

    craftsmen: [],
    filteredCraftsmen: [],

    // Initialize data
    initialize: async () => {
      try {
        set({ isLoading: true, error: null });
        const data = await getAllCraftsmen();

        let craftsmen = [];
        if (Array.isArray(data)) {
          craftsmen = data;
        } else if (data && Array.isArray(data.craftmens)) {
          craftsmen = data.craftmens;
        }

        set({
          craftsmen,
          filteredCraftsmen: craftsmen,
          isLoading: false,
          totalPages: Math.ceil(craftsmen.length / get().itemsPerPage)
        });
      } catch (error) {
        console.error('Error fetching craftsmen:', error);
        set({
          error: 'Failed to load craftsmen data. Please try again.',
          isLoading: false
        });
      }
    },

    // Update search parameters
    setSearchParams: (params) => {
      set((state) => ({
        searchParams: {
          ...state.searchParams,
          ...params
        }
      }));

      // Auto-filter when parameters change
      get().filterCraftsmen();
    },

    // Individual parameter setters for convenience
    setSearchTerm: (searchTerm) => {
      get().setSearchParams({ searchTerm });
    },

    filterCraftsmen: () => {
      const { craftsmen, searchParams } = get();
      const { searchTerm } = searchParams;

      if (!craftsmen || craftsmen.length === 0) {
        return;
      }

      let results = [...craftsmen];

      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        results = results.filter(
          (craftsman) =>
            (craftsman.fullName && craftsman.fullName.toLowerCase().includes(term)) ||
            (craftsman.name && craftsman.name.toLowerCase().includes(term)) ||
            (craftsman.service && craftsman.service.toLowerCase().includes(term)) ||
            // Check if services is an array
            (Array.isArray(craftsman.services) &&
              craftsman.services.some(
                (service) => service.serviceName && service.serviceName.toLowerCase().includes(term)
              )) ||
            // Check if services is an object
            (craftsman.services &&
              craftsman.services.serviceName &&
              craftsman.services.serviceName.toLowerCase().includes(term))
        );
      }

      return results;
    },

    // Apply search with current parameters
    applySearch: () => {
      get().filterCraftsmen();
    }
  }))
);

export { useSearchStore };
