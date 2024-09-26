import appApi from '../../../../appApi';
import {
  CommonApiRequest,
  CommonApiResponse,
  CommonApiSingleResponse,
} from '../../../../../types';
import { ProjectReqDto } from '../dto/request/ProjectReqDto';
import { SubGroupReqDto } from '../dto/request/SubGroupReqDto';
import {
  SubProjectDelReqDto,
  SubProjectReqDto,
} from '../dto/request/SubProjectReqDto';
import { SubProjectWitReqDto } from '../dto/request/SubProjectWitReqDto';
import { ProjectResDto } from '../dto/response/ProjectResDto';
import { SubGroupResDto, SubPjtMngRId } from '../dto/response/SubGroupResDto';
import {
  GroupSubProjectInfoList,
  SubProjectInfo,
  SubProjectResDto,
} from '../dto/response/SubProjectResDto';

const appTaggedApi = appApi.enhanceEndpoints({
  addTagTypes: ['pj-project', 'subProject', 'subGroup', 'subProjectUser'],
});

const PjProjectApi = appTaggedApi.injectEndpoints({
  endpoints: (builder) => ({
    //프로젝트 상세조회
    getProjectPj: builder.query<ProjectResDto, { pjtUid: number }>({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/detail`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'pj-project' }],
      transformResponse: (response: CommonApiSingleResponse<ProjectResDto>) =>
        response.data,
    }),
    //프로젝트 수정
    updateProjectPj: builder.mutation<
      ProjectResDto,
      ProjectReqDto & { pjtUid: number }
    >({
      query: ({ pjtUid, ...rest }) => ({
        url: `/api/pms/${pjtUid}/projects/update`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: () => [{ type: 'pj-project' }],
    }),
    //서브 프로젝트 등록
    createSubProjectPj: builder.mutation<SubProjectResDto, SubProjectReqDto>({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/subProject`,
        method: 'POST',
        body: query,
      }),
      invalidatesTags: () => [{ type: 'subProject' }],
    }),
    //서브 프로젝트 수정
    updateSubProjectPj: builder.mutation<
      SubProjectResDto,
      SubProjectReqDto & { subPjtUid: number }
    >({
      query: ({ subPjtUid, ...rest }) => ({
        url: `/api/pms/${rest.pjtUid}/projects/${subPjtUid}/subProject`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: () => [{ type: 'subProject' }],
    }),
    //서브 그룹 등록
    createSubGroupPj: builder.mutation<SubGroupResDto, SubProjectReqDto>({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/subGroup`,
        method: 'POST',
        body: query,
      }),
      invalidatesTags: () => [{ type: 'subGroup' }],
    }),
    //서브프로젝트 가중치 업데이트
    updateSubProjectWitPj: builder.mutation<
      SubProjectResDto,
      CommonApiRequest<SubProjectWitReqDto>
    >({
      query: (qeury) => ({
        url: `/api/pms/${qeury.pjtUid}/projects/subProject/witUpdate`,
        method: 'PUT',
        body: qeury.data,
      }),
      invalidatesTags: () => [{ type: 'subProject' }],
    }),
    //서브프로젝트 리스트 조회
    getSubprojectsPj: builder.query<SubProjectInfo[], { pjtUid: number }>({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/subProjects`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'subProject' }],
      transformResponse: (response: CommonApiResponse<SubProjectInfo>) =>
        response.data,
    }),
    //서브프로젝트 삭제
    delSubProjectPj: builder.mutation<SubProjectResDto, SubProjectDelReqDto>({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/subProjects`,
        method: 'DELETE',
        body: query,
      }),
      invalidatesTags: () => [{ type: 'subProject' }],
    }),
    //서브그룹 상세 조회
    getSubGroupPj: builder.query<
      GroupSubProjectInfoList,
      { pjtUid: number; subGrpUid: string }
    >({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/subGroup/${query.subGrpUid}`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'subGroup' }],
    }),
    //서브프로젝트 상세 조회
    getSubProjectPj: builder.query<
      SubProjectInfo,
      { pjtUid: number; subPjtUid: number }
    >({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/subproject/${query.subPjtUid}`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'subProject' }],
      transformResponse: (response: CommonApiSingleResponse<SubProjectInfo>) =>
        response.data,
    }),
    //서브그룹 삭제
    delSubGroupPj: builder.mutation<
      SubGroupResDto,
      { pjtUid: number; subGrpUid: string }
    >({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/${query.subGrpUid}/subGroup`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'subGroup' }],
    }),
    //서브그룹 수정
    updateSubGroupPj: builder.mutation<
      SubGroupResDto,
      SubGroupReqDto & { subGrpUid: string }
    >({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/${query.subGrpUid}/subGroup`,
        method: 'PUT',
      }),
      invalidatesTags: () => [{ type: 'subGroup' }],
    }),
    //서브그룹 순서변경
    moveSubGroupPj: builder.mutation<
      SubGroupResDto,
      { pjtUid: number; subGrpUid: string; subGrpSrtNo: string }
    >({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/subGroup/move`,
        method: 'PUT',
      }),
      invalidatesTags: () => [{ type: 'subGroup' }],
    }),
    //서브프로젝트 그룹변경
    moveSubProjectPj: builder.mutation<
      SubProjectResDto,
      { pjtUid: number; subpjtUid: number; subGrpUid: string }
    >({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/subProject/move`,
        method: 'PUT',
      }),
      invalidatesTags: () => [{ type: 'subProject' }],
    }),

    //서브프로젝트 사용자 조회
    getSubProjectUsers: builder.query<
      SubPjtMngRId[],
      { pjtUid: number; subPjtUid: number }
    >({
      query: (query) => ({
        url: `/api/pms/${query.pjtUid}/projects/subProject/${query.subPjtUid}/users`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'subProjectUser' }],
      transformResponse: (response: CommonApiResponse<SubPjtMngRId>) =>
        response.data,
    }),
  }),
  overrideExisting: true,
});

export default PjProjectApi;
export const {
  useGetProjectPjQuery,
  useUpdateProjectPjMutation,
  useGetSubProjectPjQuery,
  useGetSubprojectsPjQuery,
  useLazyGetSubProjectPjQuery,
  useCreateSubProjectPjMutation,
  useUpdateSubProjectPjMutation,
  useUpdateSubProjectWitPjMutation,
  useDelSubProjectPjMutation,
  useGetSubProjectUsersQuery,
} = PjProjectApi;
