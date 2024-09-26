// pims-common/src/main/java/com/skcc/pims/common/code/dto/request/CodeGroupReqDto.java
export type CodeGroupReqDto = {
  codeGroupId: string;
  codeGroupName: string;
  codeGroupDescription: string;
  majorCategory: string;
  middleCategory: string;
  minorCategory: string;
  isEditable: boolean;
  isEnabled: boolean;
};
