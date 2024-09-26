import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_ADMIN_URL,
  // TODO: 나중에 아래 주석 해제하여 사용
  // baseUrl: 'http://localhost:8090/',
  // prepareHeaders: (headers, { getState }) => {
  //     const token = (getState() as RootState).auth.token;
  //     // If we have a token set in state, let's assume that we should be passing it.
  //     if (token) {
  //         headers.set("authorization", `Bearer ${token}`);
  //     }
  //     return headers;
  // },
  // headers: {
  //     // Authorization: bearerAuth(token),
  //     Authorization: `Bearer 111111`,
  // },
});

const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

function bearerAuth(token: string | undefined) {
  return `Bearer ${token} `;
}

export default appApi;
