import axios from 'axios';
import queryString from 'query-string';
import { PageInterface, PageGetQueryInterface } from 'interfaces/page';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPages = async (query?: PageGetQueryInterface): Promise<PaginatedInterface<PageInterface>> => {
  const response = await axios.get('/api/pages', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPage = async (page: PageInterface) => {
  const response = await axios.post('/api/pages', page);
  return response.data;
};

export const updatePageById = async (id: string, page: PageInterface) => {
  const response = await axios.put(`/api/pages/${id}`, page);
  return response.data;
};

export const getPageById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/pages/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePageById = async (id: string) => {
  const response = await axios.delete(`/api/pages/${id}`);
  return response.data;
};
