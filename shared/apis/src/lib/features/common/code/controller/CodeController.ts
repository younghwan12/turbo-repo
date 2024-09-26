import appApi from '@pims-frontend/apis/lib/appApi';
import { type CodeGroupResDto } from '../dto/response/CodeGroupResDto';
import {
  CommonApiSingleResponse,
  type CommonApiResponse,
} from '@pims-frontend/apis/types/index';
import { type CodeGroupReqDto } from '../dto/request/CodeGroupReqDto';
import { type CodeResDto } from '../dto/response/CodeResDto';

const appTaggedApi = appApi.enhanceEndpoints({
  addTagTypes: ['code', 'code-group'],
});

const codeApi = appTaggedApi.injectEndpoints({
  endpoints: (builder) => ({
    /** 코드 그룹 조회 */
    getAllCodeGroups: builder.query<CodeGroupResDto[], unknown>({
      query: () => ({
        url: `/api/common/codes/groups/all`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? result.map(({ codeGroupId }) => ({
              type: 'code-group' as const,
              id: codeGroupId,
            }))
          : [],
      transformResponse: (response: CommonApiResponse<CodeGroupResDto>) =>
        response.data,
    }),
    /** 코드 상세 조회 */
    getAllCodeDetails: builder.query<
      CodeResDto[],
      Pick<CodeGroupReqDto, 'codeGroupId'>
    >({
      query: ({ codeGroupId }) => ({
        url: `/api/common/codes/groups/${codeGroupId}/codes`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? result.map(({ codeId }) => ({
              type: 'code' as const,
              id: codeId,
            }))
          : [],
      transformResponse: (response: CommonApiResponse<CodeResDto>) =>
        response.data,
    }),
    /** 코드 그룹 생성 */
    createCodeGroup: builder.mutation<CodeGroupResDto, CodeGroupReqDto>({
      query: (query) => ({
        url: `/api/common/codes/groups`,
        method: 'POST',
        body: query,
      }),
      invalidatesTags: (result) => [
        { type: 'code-group', id: result?.codeGroupId },
      ],
      transformResponse: (response: CommonApiSingleResponse<CodeGroupResDto>) =>
        response.data,
    }),
    /** 코드 그룹 단건 수정 */
    updateCodeGroup: builder.mutation<CodeGroupResDto, CodeGroupReqDto>({
      query: (body) => ({
        url: `/api/common/codes/groups/${body.codeGroupId}`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: (result) => [
        { type: 'code-group', id: result?.codeGroupId },
      ],
      transformResponse: (response: CommonApiSingleResponse<CodeGroupResDto>) =>
        response.data,
    }),
    /** 코드 그룹 삭제 */
    deleteCodeGroup: builder.mutation<
      CodeGroupResDto,
      Pick<CodeGroupReqDto, 'codeGroupId'>
    >({
      query: ({ codeGroupId }) => ({
        url: `/api/common/codes/groups/${codeGroupId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['code-group'],
      transformResponse: (response: CommonApiSingleResponse<CodeGroupResDto>) =>
        response.data,
    }),
    /** 코드 생성 */
    createCode: builder.mutation<CodeResDto, CodeResDto>({
      query: (body) => ({
        url: `/api/common/codes/groups/${body.codeGroupId}/codes`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['code'],
      transformResponse: (response: CommonApiSingleResponse<CodeResDto>) =>
        response.data,
    }),
    /** 코드 단건 수정 */
    updateCode: builder.mutation<CodeResDto, CodeResDto>({
      query: (body) => ({
        url: `/api/common/codes/groups/${body.codeGroupId}/codes/${body.codeId}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['code'],
      transformResponse: (response: CommonApiSingleResponse<CodeResDto>) =>
        response.data,
    }),
    /** 코드 삭제 */
    deleteCode: builder.mutation<CodeResDto, CodeResDto>({
      query: (body) => ({
        url: `/api/common/codes/groups/${body.codeGroupId}/codes/${body.codeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['code'],
      transformResponse: (response: CommonApiSingleResponse<CodeResDto>) =>
        response.data,
    }),
  }),
});

export default codeApi;
export const {
  useCreateCodeGroupMutation,
  useCreateCodeMutation,
  useDeleteCodeGroupMutation,
  useDeleteCodeMutation,
  useGetAllCodeDetailsQuery,
  useGetAllCodeGroupsQuery,
  useUpdateCodeGroupMutation,
  useUpdateCodeMutation,
  useLazyGetAllCodeDetailsQuery,
  useLazyGetAllCodeGroupsQuery,
} = codeApi;
