import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IUser {
  user: {
    id: number;
    balance: number;
    avatar: string;
    username: string;
    vk_id: number;
    tg_id: string;
    active_wager: number;
    in_freeze: number;
    rank: string;
    unique_id: string;
  };
  config: {
    tg_channel: string;
    tg_bot: string;
    vk_url: string;
  };
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://paradise3.org/api/v2/" }),
  endpoints: (builder) => ({
    getUserParam: builder.query<IUser, null>({
      query: () => {
        return {
          url: "veba/user/init",
        };
      },
    }),
  }),
});

export const { useGetUserParamQuery } = userApi;
