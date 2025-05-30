import { getUserSession } from "@/lib/getUserSession";
import { redirect } from "next/navigation";
import SignOutButton from "../Authentication/components/SignOutButton";
import { db } from "@/db";
import { usersToClinicsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

const DashboardPage = async () => {
  const user = await getUserSession();
  if (!user) {
    redirect("/Authentication");
  }

  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, user.id),
  });

  if (clinics.length === 0) {
    redirect("/clinic-form");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-8 flex flex-col items-center text-center">
        {user.image && (
          <img
            src={user.image}
            alt="Foto do usuário"
            className="mb-4 h-16 w-16 rounded-full"
          />
        )}
        {user.name && (
          <h2 className="text-2xl font-semibold">Olá, {user.name}!</h2>
        )}
        {user.email && (
          <p className="text-muted-foreground mb-2 text-sm">{user.email}</p>
        )}
        <h1 className="mb-4 text-4xl font-bold">Dashboard</h1>
        <p className="text-lg">Bem-vindo ao seu painel!</p>
      </div>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
