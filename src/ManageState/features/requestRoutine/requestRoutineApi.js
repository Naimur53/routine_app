import { apiSlice } from "../apiSlice/apiSlice";



export const assignmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRequestRoutine: builder.query({
            query: () => `/requestRoutine`
        }),
        getRequestRoutineWithUserId: builder.query({
            query: (userId) => `/requestRoutine?uid=${userId}`
        }),
        getRoutineBySearching: builder.query({
            query: ({ institute = "", department = '', section = '', semester = "", len = 0, skip = 0 }) => {
                return `/routine?institute=${institute}&department=${department}&section=${section}&semester=${semester}&len=${len}&skip=${skip}`
            }
        }),
        addRequestForRoutine: builder.mutation({
            query: (info) => {
                return {
                    url: '/requestRoutine',
                    method: "POST",
                    body: info
                }
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                const { data } = result || {};

                // update data 
                dispatch(apiSlice.util.updateQueryData(
                    "getRequestRoutineWithUserId",
                    arg.creator,
                    (draft) => {
                        draft.push(data);
                    }
                )
                );

            }
        }),
        editAssignment: builder.mutation({
            query: (info) => {

                return {
                    url: `/assignments/${info.id}`,
                    method: "PATCH",
                    body: info
                }
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                const { data } = result || {};

                // update data 
                dispatch(apiSlice.util.updateQueryData(
                    "getAssignments",
                    undefined,
                    (draft) => {

                        const index = draft.findIndex(single => single.id === data.id)
                        draft[index] = {
                            ...draft[index],
                            ...data
                        }
                    }
                ));

                dispatch(apiSlice.util.updateQueryData(
                    'getAssignmentWithVideoId',
                    data.video_id,
                    (draft) => {

                        draft[0] = data
                    }
                ))

            }
        }),
        deleteRequestOfRoutineWithId: builder.mutation({
            query: ({ id, userId }) => {

                return {
                    url: `/requestRoutine?id=${id}`,
                    method: "DELETE",
                }
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // const result = await queryFulfilled;


                const pathResult1 = dispatch(
                    apiSlice.util.updateQueryData(
                        "getRequestRoutineWithUserId",
                        arg.userId,
                        (draft) => {
                            const index = draft?.findIndex(single => single._id === arg.id)


                            if (index !== -1) draft.splice(index, 1)
                        }
                    )
                );
                // optimistic cache update end
                try {
                    const result = await queryFulfilled;
                } catch (err) {

                    pathResult1.undo()
                }

            }
        })
    })
})
export const { useGetRequestRoutineQuery, useGetRequestRoutineWithUserIdQuery, useDeleteRequestOfRoutineWithIdMutation, useAddRequestForRoutineMutation } = assignmentApi;