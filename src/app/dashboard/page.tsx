import { Dashboard } from "@/components";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || !user.id || !user.email) {
    redirect("/sign-in");
  }

  // Sync User to db for first time user
  try {
    const dbUser = await db.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    redirect("/");
  }

  return <Dashboard />;
};

export default Page;
