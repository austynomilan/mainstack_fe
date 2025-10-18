import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const useApiCall = (
  url: string,
  type: "get" | "post" | "put" | "delete" | "patch",
  payload?: any,
  showError: boolean = true,
  staleTime?: number,
  dependencies: any[] = [],
  enabled: boolean = true,
  isBlob: boolean = false
) => {
  const config = isBlob ? { responseType: "blob" as const } : {};

  const apiCallFn = async (data?: any) => {
    switch (type) {
      case "get": {
        const res = await axiosInstance.get(url, config);
        return res.data;
      }
      case "post": {
        const res = await axiosInstance.post(url, data, config);
        return res.data;
      }
      case "put": {
        const res = await axiosInstance.put(url, data, config);
        return res.data;
      }
      case "patch": {
        const res = await axiosInstance.patch(url, data, config);
        return res.data;
      }
      case "delete": {
        const res = await axiosInstance.delete(url, config);
        return res.data;
      }
      default:
        throw new Error(`Unsupported request type: ${type}`);
    }
  };

  // For GET requests
  const queryResult = useQuery({
    queryKey: [url, payload, ...dependencies],
    queryFn: () => apiCallFn(),
    enabled: type === "get" && !!url && enabled,
    staleTime,
  });

  // For POST, PUT, PATCH, DELETE
  const mutationResult = useMutation({
    mutationFn: (data: any) => apiCallFn(data),
    onError: (error: any) => {
      if (showError) {
        console.error(
          error?.response?.data?.message || error?.message || "Something went wrong"
        );
      }
    },
  });

  return type === "get" ? { queryResult } : { mutationResult };
};
