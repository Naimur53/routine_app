import isID from "../../../utilities/checkId";
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

                const isItId = isID(institute)
                console.log({ isItId });
                if (isItId) {
                    return `/routine?customMadeId=${institute}`
                }
                return `/routine?institute=${institute}&department=${department}&section=${section}&semester=${semester}&len=${len}&skip=${skip}`
            }
        }),
        getRoutingByUserId: builder.query({
            query: (id) => `/routine?userId=${id}`
        }),
        addRoutine: builder.mutation({

            query: (info) => {
                console.log({ info });
                return {
                    url: '/routine',
                    method: "POST",
                    body: info
                }
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                const { data } = result || {};
                console.log(data.creator);
                // update data 
                dispatch(apiSlice.util.updateQueryData(
                    "getAssignments",
                    undefined,
                    (draft) => {
                        draft.push(arg);
                    }
                )
                );
                dispatch(apiSlice.util.updateQueryData(
                    "getRoutingByUserId",
                    data?.creator?._id,
                    (draft) => {
                        console.log(data);
                        draft.push(data);
                    }
                )
                );

            }
        }),
        editRoutine: builder.mutation({
            query: (info) => {

                return {
                    url: `routine?id=${info._id}`,
                    method: "PUT",
                    body: info
                }
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch, }) {
                const result = await queryFulfilled;
                const { data } = result || {};

                // update data 
                console.log("hi", arg,)
                dispatch(apiSlice.util.updateQueryData(
                    "getRoutingByUserId",
                    arg.userId,
                    (draft) => {

                        const index = draft.findIndex(single => single._id === arg._id)
                        draft[index] = {
                            ...draft[index],
                            ...arg.mainData
                        }
                        console.log("h2", index)
                    }
                ));

                dispatch(apiSlice.util.updateQueryData(
                    "getRoutineWithId",
                    arg._id,
                    (draft) => {

                        draft.institute = arg.mainData.institute
                        draft.department = arg.mainData.department
                        draft.section = arg.mainData.section
                        draft.semester = arg.mainData.semester
                        draft.classes = arg.mainData.classes
                        draft._id = arg.mainData._id
                        draft['shift'] = arg.mainData['shift']
                        console.log("hdfdf2", arg.mainData, JSON.stringify(draft))
                    }
                ));




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
export const { useGetRoutineWithIdQuery, useAddAssignmentMutation, useGetAssignmentsQuery, useEditAssignmentMutation, useDeleteAssignmentMutation, useGetRoutineBySearchingQuery, useGetRoutingByUserIdQuery, useDeleteRoutineMutation, useEditRoutineMutation, useAddRoutineMutation } = assignmentApi;