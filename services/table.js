"use client";

import api from "./apiClient";

const tableData = async ({ endpoint, page = 1, limit = 10 }) => { 
  try {
    const res = await api.get(endpoint, { params: { page, limit } });
    
    return {
      data:res?.data,
      pagination: {
        currentPage: res?.data?.pagination?.current_page || res?.data?.pagination?.page,
        totalPages: res?.data?.pagination?.total_pages || res?.data?.pagination?.totalPage,
      }
    };
  } catch (err) {
    console.error(err);
    return {
      list: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
      }
    };
  }
};
export default tableData;
