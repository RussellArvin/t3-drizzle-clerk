import clerk from "@clerk/clerk-sdk-node";

export const getEmailFromClerk = async (
    id: string,
): Promise<string> => {
    const user = await clerk.users.getUser(id)

    if(!user.emailAddresses[0]) throw new Error();

    return user.emailAddresses[0].emailAddress
}