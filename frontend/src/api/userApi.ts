import axios from "axios";

export type userReturnType = {
  id: string;
  name: string;
  email: string;
  favorites: Array<string[]>;
};

export async function getUser(userId: string): Promise<userReturnType> {
  const user = await axios
    .get(
      `https://689c85fb58a27b18087e858d.mockapi.io/hadithEveryday/users/${userId}`
    )
    .then((res) => res.data);
  return user;
}
