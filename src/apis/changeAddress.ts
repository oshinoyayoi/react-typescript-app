import axios from "axios";
import { Address } from "../types/changeAddress";
const addressDataUrl = "http://localhost:3100/address";

// 全TODOリスト取得
export const getAllAddressData = async () => {
  const response = await axios.get(addressDataUrl);
  return response.data;
};

// 1件を追加する
export const addAddressData = async (address: Address) => {
  const response = await axios.post(addressDataUrl, address);
  return response.data;
};
