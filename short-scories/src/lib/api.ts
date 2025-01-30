import { Posts } from "@/types/strapi"
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'https://strapi-dwsg4ggk0k04kww44s04s80o.mttwhlly.cc';


export class APIError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "APIError";
  }
}

export async function fetchStrapi(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const response = await fetch(`${API_URL}/api/${endpoint}`, mergedOptions);

  if (!response.ok) {
    throw new APIError(response.status, `API error: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
