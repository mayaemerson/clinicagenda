"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-clients";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      router.push("/Authentication");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <Button onClick={handleSignOut} variant="outline">
      Sair
    </Button>
  );
};

export default SignOutButton;
