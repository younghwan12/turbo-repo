import {
  type CommonApiResponse,
  type CommonApiSingleResponse,
} from '@pims-frontend/apis/types/index';
import appApi from '../../../../appApi';
import { type ProjectReqDto } from '../dto/request/ProjectReqDto';
import { type ProjectResDto } from '../dto/response/ProjectResDto';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { type UserDetailResDto } from '../../user/dto/response/UserDetailResDto';

const appTaggedApi = appApi.enhanceEndpoints({
  addTagTypes: ['project', 'projectDetail'],
});

export type ProjectPathVariable = {
  pjtUid: number;
};

const projectApi = appTaggedApi.injectEndpoints({
  endpoints: (builder) => ({
    /** 프로젝트 등록 */
    createProject: builder.mutation<ProjectResDto, ProjectReqDto>({
      query: (body) => ({
        url: `/api/common/projects/project`,
        method: 'POST',
        body: body,
      }),
      transformResponse: (response: CommonApiSingleResponse<ProjectResDto>) =>
        response.data,
      invalidatesTags: (result) => [{ type: 'project' }],
    }),
    getProjectList: builder.query<ProjectResDto[], { keyword: string }>({
      // query: ({ keyword }) => ({
      //   url: `/api/common/projects/list?keyword=${keyword}`,
      //   method: 'GET',
      // }),
      queryFn: async (arg, api, extra, baseQuery) => {
        try {
          const result = await baseQuery({
            url: `/api/common/projects/list?keyword=${arg.keyword}`,
            method: 'GET',
          });

          const responseData = result.data as CommonApiResponse<ProjectResDto>;
          const data = responseData.data;
          // (중요) NOTE: https://dev.azure.com/npims/npims/_workitems/edit/40 9/19에 작업요청할것

          // const promisesWithManagername = data.map(async (project) => {
          //   const r = (await baseQuery({
          //     url: `/api/common/users/${project.pjtMngRId}`,
          //     method: 'GET',
          //   })) as CommonApiSingleResponse<UserDetailResDto>;
          //   return {
          //     ...project,
          //     pjtMngRName: r.data.userName,
          //   };
          // });

          // const toRedux = await Promise.all(promisesWithManagername);

          // api.dispatch({
          //   type: 'project/setProjectList',
          //   payload: toRedux,
          // });

          if (result.error) {
            return { error: result.error };
          }
          return {
            data: data,
          };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ pjtUid }) => ({
                type: 'project' as const,
                id: pjtUid,
              })),
              { type: 'project', id: 'PARTIAL-LIST' },
            ]
          : [
              {
                type: 'project',
                id: 'PARTIAL-LIST',
              },
            ],
    }),
    getProject: builder.query<ProjectResDto, ProjectPathVariable>({
      query: ({ pjtUid }) => ({
        url: `/api/common/projects/${pjtUid}`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              {
                type: 'project' as const,
                id: result.pjtUid,
              },
            ]
          : [{ type: 'project' as const }],
      transformResponse: (response: CommonApiSingleResponse<ProjectResDto>) =>
        response.data,
    }),
    updateProject: builder.mutation<
      ProjectResDto,
      ProjectReqDto & ProjectPathVariable
    >({
      query: ({ pjtUid, ...body }) => ({
        url: `/api/common/projects/${pjtUid}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (result) =>
        result
          ? [{ type: 'project', id: result.pjtUid }]
          : [{ type: 'project' }],
      transformResponse: (response: CommonApiSingleResponse<ProjectResDto>) =>
        response.data,
    }),
    updateProjectStat: builder.mutation<
      ProjectResDto,
      Pick<ProjectReqDto, 'pgsStatCd'> & ProjectPathVariable
    >({
      query: ({ pjtUid, pgsStatCd }) => ({
        url: `/api/common/projects/${pjtUid}/stat?pgsStatCd=${pgsStatCd}`,
        method: 'PUT',
      }),
      invalidatesTags: (result) =>
        result
          ? [{ type: 'project', id: result.pjtUid }]
          : [{ type: 'project' }],
      transformResponse: (response: CommonApiSingleResponse<ProjectResDto>) =>
        response.data,
    }),
  }),
});

export default projectApi;
export const {
  useGetProjectListQuery,
  useCreateProjectMutation,
  useGetProjectQuery,
  useUpdateProjectMutation,
  useLazyGetProjectListQuery,
  useUpdateProjectStatMutation,
  useLazyGetProjectQuery,
} = projectApi;
