// pims-common/src/main/java/com/skcc/pims/common/project/dto/request/ProjectReqDto.java

export type ProjectReqDto = {
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
