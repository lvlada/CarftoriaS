import axios from 'axios';

const HTML = 'http://63.178.38.11:8080/CraftoriaS/api/craftmans/';

export const getCraftman = async (id) => {
  const data = await axios.get(`${HTML}${id}`);
  return data?.data;
};

export const getAllCraftsmen = async () => {
  const data = await axios.get(`${HTML}`);
  return data?.data;
};

export const getCraftsmenByService = async (serviceName) => {
  try {
    const data = await axios.get(HTML);

    if (!data?.data) {
      return [];
    }

    // Start with filtering by serviceName if provided
    let filteredCraftsmen = data.data;

    filteredCraftsmen = filteredCraftsmen.filter(
      (craftsman) =>
        Array.isArray(craftsman.services) &&
        craftsman.services.some(
          (service) => service.serviceName?.toLowerCase() === serviceName.toLowerCase()
        )
    );
    return filteredCraftsmen;
  } catch (error) {
    console.error('Error fetching craftsmen by service:', error);
    return [];
  }
};
