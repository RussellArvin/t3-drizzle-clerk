import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { user } from "~/server/db/schema";
import { getEmailFromClerk } from "~/server/utils/getUserDataFromClerk";

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

        if(!userData[0]) throw new TRPCError({code:"NOT_FOUND"})

        return userData[0]
    }),
    register: protectedProcedure
    .mutation(async ({ctx})=>{
        try{
            const email = await getEmailFromClerk(ctx.auth.userId)
            const userData = await db
            .insert(user)
            .values({
                id:ctx.auth.userId,
                email
            })
            .returning();

            if(!userData[0]) throw Error();
        }
        catch (e){
            return new TRPCError({
                code:"INTERNAL_SERVER_ERROR",
                message:"Error when registering user"
            })
        }
    })
});
