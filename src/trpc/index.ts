import { db } from "@/db";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { privateProcedute, router } from "./trpc";

export const appRouter = router({
  getUserFiles: privateProcedute.query(async ({ ctx }) => {
    const { userId } = ctx;
    return await db.file.findMany({ where: { userId } });
  }),
  deleteFile: privateProcedute
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await db.file.findFirst({ where: { id: input.id, userId } });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      await db.file.delete({ where: { id: input.id } });

      return file.id;
    }),
});

export type AppRouter = typeof appRouter;
