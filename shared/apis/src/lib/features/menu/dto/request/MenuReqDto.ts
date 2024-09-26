// pims-common/src/main/java/com/skcc/pims/common/menu/dto/request/MenuReqDto.java

export type MenuReqDto = {
  projectId: string;
  menuId: string;
  parentMenuId: string;
  menuName: string;
  menuUrl: string;
  menuIcon: string;
  menuType: string;
  menuLevel: number;
  menuOrder: number;
  isEnabled: boolean;

  dynamicAttributes: Record<string, string>;
};
