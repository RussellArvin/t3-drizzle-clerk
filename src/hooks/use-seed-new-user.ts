import { useEffect } from "react";
import { RouterOutputs, api } from "../utils/api";

interface useSeedNewUserArgs {
    data?: RouterOutputs["user"]["get"];
    isLoading: boolean;
}

export const useSeedNewUser = (args: useSeedNewUserArgs) => {
    const { data: userData, isLoading: userDataIsLoading } = args;
    const { mutate: userRegisterMutation } = api.user.register.useMutation();

    return useEffect(() => {
        if (!userData && !userDataIsLoading) {
          userRegisterMutation();
        }
      }, [userData, userDataIsLoading]);
}