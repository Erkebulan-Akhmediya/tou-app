import { Redirect } from "expo-router";
import axios from "axios";

axios.defaults.baseURL = process.env.EXPO_PUBLIC_BACKEND_URL

export default function Index() {
  return (
      <Redirect href="/login" />
  );
}
