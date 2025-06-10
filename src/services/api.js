import axios from 'axios';

const HTML = '/api/craftmans/';

export const getCraftman = async (id) => {
  const data = await axios.get(`${HTML}${id}`);
  return data?.data;
};

export const getAllCraftsmen = async () => {
  const data = await axios.get(`${HTML}`);
  return data?.data;
};
