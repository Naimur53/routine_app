import { io } from "socket.io-client";
import { apiSlice } from "../apiSlice/apiSlice";



export const messageApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessagesWithRoutineId: builder.query({
            query: (id) => `/message?routineId=${id}`,
            async onCacheEntryAdded(
                arg,
                { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
            ) {
                // create socket
                const socket = io("http://localhost:5001/", {
                    reconnectionDelay: 1000,
                    reconnection: true,
                    reconnectionAttemps: 10,
                    transports: ["websocket"],
                    agent: false,
                    upgrade: false,
                    rejectUnauthorized: false,
                });

                try {
                    await cacheDataLoaded;
                    socket?.emit('join', arg)
                    socket.on("receive_message", (data) => {
                        console.log('receive_message from apiii', data);
                        updateCachedData((draft) => {
                            draft.data.push(data)
                            draft.totalMessage = draft.totalMessage + 1
                        });
                    });
                } catch (err) { }

                await cacheEntryRemoved;
                socket.close();
            },
        }),

        getMessagesWithRoutineIdWithPagination: builder.query({
            query: ({ id, skip }) => `/message?routineId=${id}&skip=${skip}`,

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {

                    const result = await queryFulfilled;
                    const { data } = result || {};
                    console.log('new data comes', { data })
                    dispatch(apiSlice.util.updateQueryData(
                        "getMessagesWithRoutineId",
                        arg.id,
                        (draft) => {

                            draft.data.push(...data.data)
                            draft.totalMessage = data.totalMessage
                            draft.skip = data.skip
                        }
                    )
                    );

                } catch (err) {

                }
            }
        }),

        addMessage: builder.mutation({

            query: (info) => {
                console.log({ info });
                return {
                    url: '/message',
                    method: "POST",
                    body: info
                }
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                const { data } = result || {};
                console.log(data.creator);
                // update data 
                const socket = io("http://localhost:5001/", {
                    reconnectionDelay: 1000,
                    reconnection: true,
                    reconnectionAttemps: 10,
                    transports: ["websocket"],
                    agent: false,
                    upgrade: false,
                    rejectUnauthorized: false,
                });
                socket?.emit('message', arg)
                // dispatch(apiSlice.util.updateQueryData(
                //     "getAssignments",
                //     undefined,
                //     (draft) => {
                //         draft.push(arg);
                //     }
                // )
                // );
                // dispatch(apiSlice.util.updateQueryData(
                //     "getRoutingByUserId",
                //     data?.creator?._id,
                //     (draft) => {
                //         console.log(data);
                //         draft.push(data);
                //     }
                // )
                // );

            }
        }),


    })
})
export const { useGetMessagesWithRoutineIdQuery, useAddMessageMutation, useGetMessagesWithRoutineIdWithPaginationQuery } = messageApi;