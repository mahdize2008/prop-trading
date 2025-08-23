"use client"

import api_endpoints from "@/constants/api/endpoints";
import api from "./apiClient";

export const ticketsData = async ({page=1,limit=10}) => {
  try{
    
    const res = await api.get(api_endpoints.TICKETS.LIST, { params: { page, limit }});
   
    return {
      list : res?.data?.tickets ,
      pagination: {
        currentPage: res?.data?.pagination?.current_page || res?.data?.pagination?.page,
        totalPages: res?.data?.pagination?.total_pages || res?.data?.pagination?.totalPage,
      }
    };
  }catch(err){
    return {
      list : [] ,
      pagination: {
        currentPage: 1,
        totalPages: 1,
      }
    };
  }
};
export const ticketRepliesData = async (id) => {
  try{
    const res = await api.get(`${api_endpoints.TICKETS.REPLIES}${id}`);
    

    return {
      ticket : res?.data?.ticket,
      replies : res?.data?.replies
    };
  }catch(err){
    return {
      ticket : {},
      replies : []
    };
  }
};