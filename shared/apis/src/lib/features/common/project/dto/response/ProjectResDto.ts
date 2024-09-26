// pims-common/src/main/java/com/skcc/pims/common/project/dto/response/ProjectResDto.java
export type ProjectResDto = {
  /** Integer */
  pjtUid: number;
  pjtNo: string;
  pjtNm: string;
  pjtMngRId: string;
  rpnDepCd: string;
  pgsStatCd: string;
  staYmd: string;
  endYmd: string;
  subGrpEnabled: boolean;
  tplEnabled: boolean;
  deleted: boolean;
};
