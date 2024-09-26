// pims-common/src/main/java/com/skcc/pims/common/menu/dto/response/MenuResDto.java
export type MenuResDto = {
  menuId: string;
  parentMenuId: string;
  menuType: string;
  menuLevel: number;
  menuName: string;
  menuUrl: string;
  menuIcon: string;
  menuOrder: number;
  isEnabled: boolean;
  dynamicAttributes: Record<string, string>;

  children: MenuResDto[];
};
