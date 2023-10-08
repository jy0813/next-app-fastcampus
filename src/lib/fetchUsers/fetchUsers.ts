import { User } from "@/types/user";

export default async function fetchUser() {
  try {
    const res = await fetch("/users");
    const users: User[] = await res.json();
    return users;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    return [];
  }
}
