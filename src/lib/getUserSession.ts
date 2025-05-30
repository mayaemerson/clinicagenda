import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getUserSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) return null;

  const imageFallback = session.user.image
    ? session.user.image
    : "/icons/user-fallback.svg";

  return {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    image: imageFallback,
  };
}
