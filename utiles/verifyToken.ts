import {jwtDecode} from "jwt-decode";
import { TUser } from "../src/redux/api/auth API Management/authSlice";


export const verifyToken = (token: string): TUser | null => {
  try {
    // Decode token
    const decoded = jwtDecode<TUser>(token);

    // Optionally validate the decoded token to ensure it contains all required fields
    if (decoded.email && decoded.role) {
      return decoded;
    }

    // Return null if the token does not meet the expected structure
    return null;
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
};
