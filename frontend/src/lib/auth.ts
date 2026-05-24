import { cookies } from "next/headers";

export function getSession() {
  const cookieStore = cookies();
  const session = cookieStore.get("auth_session");
  if (!session) return null;

  try {
    return JSON.parse(decodeURIComponent(session.value));
  } catch {
    return null;
  }
}

export function logout() {
  if (typeof window !== "undefined") {
    document.cookie = "auth_session=; path=/; max-age=0";
  }
}

