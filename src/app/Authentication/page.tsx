import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserSession } from "@/lib/getUserSession";
import { redirect } from "next/navigation";
import LoginForm from "./components/Login-Form";
import SignUpForm from "./components/Sign-Up-Form";

const AuthenticationPage = async () => {
  const user = await getUserSession();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar Conta</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        <TabsContent value="register">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationPage;
