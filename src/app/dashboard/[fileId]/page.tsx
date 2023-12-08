import { ChatWrapper, PdfRenderer } from "@/components";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";

interface pageProps {
  params: {
    fileId: string;
  };
}

const page = async ({ params }: pageProps) => {
  const { fileId } = params;

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) redirect("/sign-in");

  const file = await db.file.findFirst({
    where: { id: fileId, userId: user.id },
  });

  if (!file) notFound();

  return (
    <div className="h-[calc(100vh-3.5rem)] lg:flex xl:px-2">
      <div className="flex-1 p-6">
        <PdfRenderer />
      </div>
      <div className="flex-[0.75] shrink-0 border-t border-gray-200 p-6 lg:w-96 lg:border-l lg:border-t-0">
        <ChatWrapper />
      </div>
    </div>
  );
};

export default page;
