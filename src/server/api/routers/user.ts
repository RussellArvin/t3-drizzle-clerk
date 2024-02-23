import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { user } from "~/server/db/schema";

export const userRouter = createTRPCRouter({
    get: protectedProcedure
    .query(async({ctx})=>{
        const userData = await db
        .select({
            id:user.id,
            email:user.email
        })
        .from(user)
        .where(eq(user.id,ctx.auth.userId))

        if(!userData[0]) return new TRPCError({code:"NOT_FOUND"})

        return userData[0]
    })

});
