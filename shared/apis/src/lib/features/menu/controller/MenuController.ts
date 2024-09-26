import { InjectableApi } from '@pims-frontend/apis/lib/api';
import { MenuResDto } from '../dto/response/MenuResDto';
import { MenuReqDto } from '../dto/request/MenuReqDto';

export const menuApiInitializer = (api: InjectableApi) =>
  api.injectEndpoints({
    endpoints: (builder) => ({
      getAllGlobalMenus: builder.query<MenuResDto[], unknown>({
        query: () => '/api/common/menus/all',
        providesTags: [{ type: 'menu', id: 'LIST' }],
      }),
      getGlobalMenuById: builder.query<MenuResDto, MenuReqDto['menuId']>({
        query: (menuId) => `/api/common/menus/${menuId}`,
        providesTags: [{ type: 'menu', id: 'LIST' }],
      }),
      createGlobalMenus: builder.mutation<MenuResDto, MenuReqDto>({
        query: (body) => ({
          url: '/api/common/menus',
          method: 'POST',
          body,
        }),
        invalidatesTags: [{ type: 'menu', id: 'LIST' }],
      }),
      updateGlobalMenus: builder.mutation<MenuResDto, MenuReqDto>({
        query: (body) => ({
          url: `/api/common/menus/${body.menuId}`,
          method: 'PATCH',
          body,
        }),
        invalidatesTags: [{ type: 'menu', id: 'LIST' }],
      }),
      deleteGlobalMenu: builder.mutation<MenuResDto, MenuReqDto['menuId']>({
        query: (menuId) => ({
          url: `/api/common/menus/${menuId}`,
          method: 'DELETE',
        }),
        invalidatesTags: [{ type: 'menu', id: 'LIST' }],
      }),
    }),
  });
