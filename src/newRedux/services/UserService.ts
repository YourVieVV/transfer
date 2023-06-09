import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ILogin} from "../../Types";

export const userAuthApi = createApi({
    reducerPath:'userAuthApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:7000/api/auth'}),
    endpoints: (build) => ({
        fetchLoginData: build.mutation<ILogin, ILogin>({
            query: (params) => ({
                url:'/login',
                method: 'POST',
                body:{
                    login:'myName',
                    password:'passNot123',
                },
            })
        }),
        registerUser:build.mutation<ILogin, ILogin>({
            query: (params) => ({
                url: '/registration',
                method: 'POST',
                body: params,
                params,
            })
        }),
    })
})
