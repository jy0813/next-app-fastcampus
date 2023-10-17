import { Lectures } from "@/types/lecture";

export default async function fetchUser() {
  try {
    const res = await fetch("/lectures");
    const lectures: Lectures[] = await res.json();
    return lectures;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    return [];
  }
}
