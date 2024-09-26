import appApi from '@pims-frontend/apis/lib/appApi'
import { type TaskReqDto } from '../request/TaskReqDto'
import { type TaskSearchReqDto } from '../request/TaskSearchReqDt'
import { type TaskResDto } from '../response/TaskResDto'
import { type TaskTreeResDto } from '../response/TaskTreeResDto'
import {
  CommonApiResponse,
  type CommonApiSingleResponse,
  type ProjectPathVariable,
} from '@pims-frontend/apis/types/index'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import mockTreeData from './mock-tree-data.json'
import mockFlatData from './mock-flat-data.json'

const appTaggedApi = appApi.enhanceEndpoints({
  addTagTypes: ['tasks'],
})

const taskApi = appTaggedApi.injectEndpoints({
  endpoints: builder => ({
    /** 작업일정 일괄 생성및수정
     *
     * 여러 작업을 추가 또는 수정
     */
    createTaskBulk: builder.mutation<
      TaskResDto[],
      { body: TaskReqDto[] } & { path: ProjectPathVariable }
    >({
      query: ({ body, path }) => ({
        url: `/api/pms/${path.pjtUid}/tasks`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: result =>
        result
          ? [
              ...result.map(({ tskUid }) => ({
                type: 'tasks' as const,
                id: tskUid,
              })),
            ]
          : [
              {
                type: 'tasks',
                id: 'PARTIAL-LIST',
              },
            ],
      transformResponse: (response: CommonApiResponse<TaskResDto>) =>
        response.data,
    }),
    /**
     * 작업 일정 생성
     *
     * 신규 작업 추가
     */
    createTask: builder.mutation<TaskResDto, TaskReqDto & ProjectPathVariable>({
      query: ({ pjtUid, ...body }) => ({
        url: `/api/pms/${pjtUid}/tasks`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: result =>
        result
          ? [{ type: 'tasks', id: result.tskUid }]
          : [{ type: 'tasks', id: 'PARTIAL-LIST' }],
      transformResponse: (response: CommonApiSingleResponse<TaskResDto>) =>
        response.data,
    }),
    /** 작업 일정 수정 */
    updateTask: builder.mutation<TaskResDto, TaskReqDto & { pjtUid: number }>({
      query: ({ pjtUid, ...body }) => ({
        url: `/api/pms/${pjtUid}/tasks/${body.tskUid}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (result, error, req) => [
        { type: 'tasks', id: req.tskUid },
      ],
    }),
    /** 작업 일정 목록 tree 조회 */
    getTasksTree: builder.query<TaskTreeResDto[], ProjectPathVariable>({
      // query: (path) => ({
      //   url: `/api/pms/${path.pjtUid}/tasks/tree`,
      //   method: 'POST',
      // }),
      queryFn: async ({ pjtUid }, api, extra, baseQuery) => {
        try {
          // const result = await baseQuery({
          //   url: `/api/pms/${pjtUid}/tasks/tree`,
          //   method: 'POST',
          // });

          // const responseData = result.data as CommonApiResponse<TaskTreeResDto>;
          // const data = responseData.data;
          // @ts-ignore
          const data = mockTreeData as TaskTreeResDto[]

          // if (result.error) {
          //   return { error: result.error };
          // }

          return {
            data,
          }
        } catch (error) {
          return { error: error as FetchBaseQueryError }
        }
      },
      // transformResponse: (response: CommonApiResponse<TaskTreeResDto>) =>
      //   response.data,
    }),
    getTasksFlat: builder.query<TaskResDto[], ProjectPathVariable>({
      // query: (path) => ({
      //   url: `/api/pms/${path.pjtUid}/tasks/search`,
      //   method: 'POST',
      // }),
      queryFn: async ({ pjtUid }, api, extra, baseQuery) => {
        try {
          // const result = await baseQuery({
          //   url: `/api/pms/${pjtUid}/tasks/tree`,
          //   method: 'POST',
          // });

          // const responseData = result.data as CommonApiResponse<TaskResDto>;
          // const data = responseData.data;
          // @ts-ignore
          const data = mockFlatData as TaskResDto[]
          api.dispatch({ type: 'schedule/setScheduleTaskData', payload: data })
          return {
            data,
          }
        } catch (error) {
          return { error: error as FetchBaseQueryError }
        }
      },
      providesTags: result =>
        result
          ? [
              ...result.map(({ tskUid }) => ({
                type: 'tasks' as const,
                id: tskUid,
              })),
              { type: 'tasks', id: 'PARTIAL-LIST' },
            ]
          : [{ type: 'tasks', id: 'PARTIAL-LIST' }],
    }),
  }),
})

export default taskApi
export const {
  useUpdateTaskMutation,
  useCreateTaskBulkMutation,
  useCreateTaskMutation,
  useGetTasksFlatQuery,
  useGetTasksTreeQuery,
  useLazyGetTasksFlatQuery,
  useLazyGetTasksTreeQuery,
} = taskApi
