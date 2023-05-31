import { apiSlice } from "../apiSlice/apiSlice";



export const assignmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAssignments: builder.query({
            query: () => `/routine`
        }),
        getRoutineWithId: builder.query({
            query: (id) => `/routine?id=${id}`
        }),
        getRoutineBySearching: builder.query({
            query: ({ institute = "", department = '', section = '', semester = "", len = 0, skip = 0 }) => {
                return `/routine?institute=${institute}&department=${department}&section=${section}&semester=${semester}&len=${len}&skip=${skip}`
            }
        }),
        getRoutingByUserId: builder.query({
            query: (id) => `/routine?userId=${id}`
        }),
        addAssignment: builder.mutation({
            query: (info) => {
                return {
                    url: '/assignments',
                    method: "POST",
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
        deleteRoutine: builder.mutation({
            query: ({ id }) => {
                return {
                    url: `/routine/${id}`,
                    method: "DELETE",
                }
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // const result = await queryFulfilled;

                // update data 
                const pathResult1 = dispatch(
                    apiSlice.util.updateQueryData(
                        "getRoutingByUserId",
                        arg.uid,
                        (draft) => {
                            const index = draft?.findIndex(single => single._id === arg.id)


                            if (index !== -1) draft.splice(index, 1)
                        }
                    )
                );
                const pathResult2 = dispatch(
                    apiSlice.util.updateQueryData(
                        "getAssignmentWithVideoId",
                        arg.video_id,
                        (draft) => {
                            const index = draft?.findIndex(single => single.video_id === arg.video_id)


                            if (index !== -1) draft.splice(index, 1)
                        }
                    )
                );
                // optimistic cache update end
                try {
                    const result = await queryFulfilled;
                } catch (err) {
                    pathResult1.undo()
                    pathResult2.undo()
                }

            }
        })
    })
})
export const { useGetRoutineWithIdQuery, useAddAssignmentMutation, useGetAssignmentsQuery, useEditAssignmentMutation, useDeleteAssignmentMutation, useGetRoutineBySearchingQuery, useGetRoutingByUserIdQuery, useDeleteRoutineMutation } = assignmentApi;