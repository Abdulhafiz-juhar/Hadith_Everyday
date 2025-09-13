import axios from "axios";
import { Params } from "react-router";

export type userReturnType = {
  id: string;
  name: string;
  email: string;
  favorites: Array<string[]>;
};

export type createUserType = {
  email: string;
  password: string;
};

export async function authUser(
  email: string,
  password: string
): Promise<string> {
  const response = await axios.get(
    "https://689c85fb58a27b18087e858d.mockapi.io/hadithEveryday/users"
  );
  const users = response.data;
  const user = users.find(
    (u: any) => u.email === email && u.password === password
  );
  if (!user) throw new Error("Invalid credentials");
  return user.id;
  // later this would return jwt token and user id to be used on getUser
}

export async function getUser(userId: string): Promise<userReturnType> {
  const user = await axios
    .get(
      `https://689c85fb58a27b18087e858d.mockapi.io/hadithEveryday/users/${userId}`
    )
    .then((res) => res.data);
  return user;
}

export async function getAuthenticUser(
  email: string,
  password: string
): Promise<userReturnType> {
  const id = await authUser(email, password);
  const user = await getUser(id);

  return user;
}

export async function createUser(
  credential: createUserType
): Promise<userReturnType> {
  const newUser = await axios
    .post<userReturnType>(
      "https://689c85fb58a27b18087e858d.mockapi.io/hadithEveryday/users",
      credential
    )
    .then((res) => res.data);
  return newUser;
}

export async function editUser(
  userId: string,
  newData: object
): Promise<userReturnType> {
  const updatedUser = await axios
    .put(
      `https://689c85fb58a27b18087e858d.mockapi.io/hadithEveryday/users/${userId}`,
      newData
    )
    .then((res) => res.data);
  return updatedUser;
}
