﻿// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                              TypeScript definition for TreeGrid API usage
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ------------------------------------------------- Menus and dialogs ----------------------------------------

interface TDialog {
  Close?(): void
  OnClose?(): void

  AppendHeader?: boolean | number
  Area?: any
  Base?: string
  Body?: string
  CanFocus?: boolean | number
  Class?: string
  CloseAfter?: boolean | number
  CloseClick?: boolean | number
  CloseClickHeader?: boolean | number
  CloseClickOut?: boolean | number
  CloseIn?: boolean | number
  CloseMove?: boolean | number
  CloseOut?: boolean | number
  ClosePlace?: boolean | number
  CloseTimeout?: number
  FocusTag?: any
  Foot?: string
  Head?: string
  HeadClose?: boolean | number
  HeadDrag?: boolean | number
  Header?: string
  InDiv?: boolean | number
  MaxHeight?: number
  MaxWidth?: number
  MinEdge?: number
  MinHeight?: number
  MinWidth?: number
  Modal?: boolean | number
  NoScroll?: boolean | number
  Position?: TPosition
  ResizeUpdate?: boolean | number
  Rtl?: boolean | number
  ScrollUpdate?: boolean | number
  Shadow?: boolean | number
  ShadowHeader?: boolean | number
  ShadowWidth?: boolean | number
  Shift?: number
  Tag?: any
  Wrap?: number
}

interface TCalendar {
  Close?(): void
  OnButtonClick?(button: number): number
  OnCanEditDate?(date: Date): boolean | number
  OnChange?(date: any): boolean | number
  OnGetCalendarDate?(
    date: Date,
    text: string,
    classes: string[],
    range: boolean | number,
  ): string
  OnSave?(date: any): boolean | number

  Buttons?: number
  Buttons2?: number
  Class?: string
  Date?: any
  Range?: boolean | number
  ReadOnly?: boolean | number
  RowsNext?: number
  RowsPrev?: number
  Rtl?: boolean | number
  Texts?: any
  TimeFormat?: string
}

interface TMenu {
  Close?(): void
  FindItem?(Name: string): TMenuItem
  OnButton?(button: string): boolean | number
  OnExpand?(Item: TMenuItem): boolean | number
  OnItemChanged?(Item: TMenuItem, Value: string): string
  OnMove?(Item: TMenuItem): void
  OnMoveOut?(dir: number): boolean | number
  OnSave?(Item: TMenuItem, Data: string): boolean | number
  OnSubmenu?(Item: TMenuItem, Submenu: TMenu, Pos: TPosition): TMenu
  OnTab?(dir: boolean | number, event: Event): void
  SetText?(Item: TMenuItem, Text: string): void
  SetValue?(Item: TMenuItem, Value: any): void

  AutoColumns?: number
  Buttons?: string[]
  ClassEnum?: string
  ClassMenu?: string
  CollapseOther?: boolean | number
  Cursor?: string
  CursorValue?: string
  Default?: TMenuItem
  EnterSwitches?: boolean | number
  EnumTime?: number
  ExpandTime?: number
  Horz?: number
  IgnoreSpace?: boolean | number
  Indent?: number
  Input?: any
  ItemAlign?: string
  ItemHeight?: number
  Items?: TMenuItem[]
  NameSeparator?: string
  PageLength?: number
  Popup?: boolean | number
  SaveType?: number
  Separator?: string
  SeparatorReplace?: string
  ShowCursor?: boolean | number
  ShowHint?: boolean | number
  ShowTree?: boolean | number
  SubmenuTime?: number
  Texts?: any
  TipAlign?: string
  TipEnd?: number
  TipStart?: number
}

interface TMenuItem {
  OnChanged?(Value: string): string
  OnClick?(): boolean | number

  Align?: string
  Bool?: number
  Caption?: boolean | number
  CheckAll?: boolean | number
  Class?: string
  ClassName?: string
  ClassValue?: string
  ColumnSizes?: string
  Columns?: number
  Default?: TMenuItem
  Disabled?: boolean | number
  Edit?: boolean | number
  Enum?: boolean | number
  EnumColumns?: number
  Expanded?: number
  Group?: number
  GroupAll?: number
  HText?: string
  Height?: number
  Hidden?: number
  Icon?: string
  IconWidth?: number
  Items?: TMenuItem[]
  Left?: boolean | number
  LeftHtml?: string
  LeftWidth?: number
  Level?: boolean | number
  Menu?: boolean | number
  MenuAlign?: string
  MenuColumns?: number
  Name?: string
  NoAll?: boolean | number
  Range?: number
  RightHtml?: string
  RightWidth?: number
  ShowIcon?: number
  Text?: string
  TextWidth?: number
  Tip?: string
  TipXXX?: string
  Uncheck?: boolean | number
  VText?: string
  Value?: boolean | number | string
  ValueAll?: string
  Width?: number
}

interface TPosition {
  Align?: string
  AlignHeader?: string
  Height?: number
  Mouse?: boolean | number
  Move?: boolean | number
  MoveMouse?: number
  Realign?: boolean | number
  Resize?: boolean | number
  Tag?: any
  Width?: number
  X?: number
  Y?: number
}

interface TEdit {
  OnChange(Value: string, Old: string): void
  OnKeyDown(key: string, event: Event, handled: boolean | number): void
  OnStartEdit(): void
}

interface TChartLine {
  Color: string
  Color2: string
  Connect: boolean | number
  Interpolation: number
  PointType: number
  Sort: number
  Visible: boolean | number
  Width: number
  X: number[]
  Y: number[]
}

interface TLineChart {
  AxisX: number
  AxisY: number
  Bottom: number
  Caption: string
  ChartAddX: number
  ChartAddY: number
  ChartRoundX: number
  ChartRoundY: number
  Class: string
  Default: TChartLine
  Height: number
  LabelX: number
  LabelY: number
  LabelYFormat: string
  Left: number
  Lines: TChartLine[]
  MaxX: number
  MaxY: number
  MinX: number
  MinY: number
  Right: number
  Top: number
  Width: number
  id: string
}

interface TCols {
  [col: string]: TCol
}

// ------------------------------------------------- TreeGrid ----------------------------------------

interface TCol {
  Accept: string
  AcceptEnters: number
  AcceptNaN: number
  AcceptNaNText: string
  AcceptNaNValue: any
  Actions: string
  ActualDate: string
  Align: string
  AutoCalendar: boolean | number
  Background: string
  Block: number
  BooolGroup: number
  BoolIcon: string | number
  BoolIconWidth: number
  BorderBottom: string
  BorderLeft: string
  BorderRight: string
  BorderTop: string
  Button: string
  ButtonClass: string
  Buttons: string
  ButtonText: string
  ButtonTextChecked: string
  ButtonWidth: number
  CalendarButtons: number
  CancelUnchanged: boolean | number
  CanCopy: number
  CanCopyPaste: boolean | number
  CanDelete: boolean | number
  CanDrag: boolean | number
  CanEdit: boolean | number
  CanEmpty: number
  CanExport: number
  CanFilter: number
  CanFix: boolean | number
  CanFocus: number
  CanGroup: number
  CanHide: number
  CanMove: number
  CanPrint: number
  CanResize: boolean | number
  CanSearch: number
  CanSelect: number
  CanSort: boolean | number
  CaseSensitive: boolean | number
  CaseSensitiveValues: boolean | number
  Class: string
  ClassInner: string
  ClassInnerIcon: string
  Clear: string
  Color: string
  ColorCursor: number
  ConstWidth: boolean | number
  Copy: boolean | number
  Cursor: string
  DatesEmptyDate: boolean | number
  DatesEndLast: boolean
  DatesHeight: number
  DefaultDate: string
  Defaults: string
  DefaultsAlphabetMin: number
  DefaultsServer: boolean | number
  Delete: boolean | number
  Deleted: boolean | number
  Digits: string
  Disabled: boolean | number
  Edit: string
  EditEnum: string
  EditFormat: string
  EditFormatType: string
  EditMask: string
  EditServer: boolean | number
  EmptyIcon: string
  EmptyValue: any
  Enum: string
  EnumKeys: string
  EnumMenu: string
  ExpandCol: string
  ExpandCols: string
  ExpandIcon: number
  Expanded: boolean | number
  ExpandLevel: number
  ExpandRows: string
  ExportFormat: string
  ExportStyle: string
  FilterDef: string
  FilterDefs: string
  FocusCell: string
  FocusRow: string
  Format: string
  Formula: string
  FormulaCanEdit: boolean | number
  FormulaCanUse: boolean | number
  FormulaSuggest: string
  FormulaSuggestDelay: number
  FormulaSuggestMin: number
  FormulaSuggestSeparator: string
  FormulaSuggestType: string
  GanttAddBackground: number
  GanttAdjacentBars: boolean | number
  GanttAdjacentDependencies: number
  GanttAllDependencies: number
  GanttAncestors: string
  GanttAssignDependencies: number
  GanttAvailability: string
  GanttAvailabilityClass: string
  GanttAvailabilityDivide: any
  GanttAvailabilityExclude: number
  GanttAvailabilityFormat: string
  GanttAvailabilityGroups: string
  GanttAvailabilityGroupsSpread: number
  GanttAvailabilityHeight: number
  GanttAvailabilityHidden: number
  GanttAvailabilityHPos: number
  GanttAvailabilityJoin: boolean | number
  GanttAvailabilityMax: number
  GanttAvailabilityMin: number
  GanttAvailabilityShift: number
  GanttAvailabilityShow: number
  GanttAvailabilitySplit: number
  GanttAvailabilityStack: number
  GanttAvailabilityString: string
  GanttAvailabilitySum: any
  GanttAvailabilitySumBars: any
  GanttAvailabilityTextClass: string
  GanttAvailabilityTextShift: number
  GanttAvailabilityTextRepeat: number
  GanttAvailabilityTextWidth: any
  GanttAvailabilityTransparent: number
  GanttAvailabilityType: number
  GanttAvailabilityUnits: string
  GanttAvailabilityVPos: number
  GanttAvailabilityZero: boolean | number
  GanttBackground: string
  GanttBackgroundMaxUnits: number
  GanttBackgroundRepeat: string
  GanttBase: string
  GanttBaseAutoTip: string
  GanttBaseCanEdit: number
  GanttBasePreferred: boolean | number
  GanttBaseProof: boolean | number
  GanttBaseTip: string
  GanttBottom: number
  GanttBypassDependencies: number
  GanttCalendar: string
  GanttCenter: number
  GanttChangeExclude: number
  GanttChart: string
  GanttChartMaxEnd: number
  GanttChartMaxStart: number
  GanttChartMinEnd: number
  GanttChartMinStart: number
  GanttChartResource: string
  GanttChartResourceDef: string
  GanttChartResourceFormat: string
  GanttChartResourceType: string
  GanttChartRound: string
  GanttCheck: number
  GanttCheckDependencies: number
  GanttCheckExclude: number
  GanttCheckExcludeEdit: number
  GanttCheckTime: number
  GanttClass: string
  GanttColor: string
  GanttColorDisabledDependencies: number
  GanttColorIncorrectDependencies: number
  GanttComplete: string
  GanttConstraintsAll: boolean | number
  GanttConstraintsIcons: string
  GanttConstraintsTip: string
  GanttConstraintsTop: number
  GanttConstraintTipFormat: string
  GanttCorrectDependencies: number
  GanttCorrectDependenciesButtons: string
  GanttCorrectDependenciesCreate: number
  GanttCorrectDependenciesFixed: boolean | number
  GanttCorrectExclude: boolean | number
  GanttCorrectOutsideBounds: boolean | number
  GanttCount: number
  GanttDataModifiers: string
  GanttDataUnits: string
  GanttDeleteDependencies: boolean | number
  GanttDependencies: string
  GanttDependencyColor: number
  GanttDependencyIcons: number
  GanttDependencyLags: string
  GanttDependencyObjects: string
  GanttDependencyTip: string
  GanttDependencyTipDateFormat: string
  GanttDependencyTypes: string
  GanttDescendants: string
  GanttDifferMilestones: boolean | number
  GanttDirection: boolean | number
  GanttDisabled: number
  GanttDragDependenciesAlways: boolean | number
  GanttDragDependenciesBetween: number
  GanttDragDependenciesMore: number
  GanttDragDependenciesMove: number
  GanttDragLine: number
  GanttDragTip: number
  GanttDragTipDateFormat: string
  GanttDragTipDurationFormat: string
  GanttDragUnits: string
  GanttDuration: string
  GanttEdit: string
  GanttEditDisabled: boolean | number
  GanttEditSoleDuration: boolean | number
  GanttEditStartMove: boolean | number
  GanttEnd: string
  GanttEndLast: number
  GanttErrSlack: number
  GanttExclude: string
  GanttExcludeComplete: boolean | number
  GanttExportBackground: number
  GanttExportDependency: boolean | number
  GanttExportOrder: string
  GanttExportUnits: string
  GanttExportWidth: number
  GanttFinish: string
  GanttFinishAutoTip: string
  GanttFinishCanEdit: number
  GanttFinishPreferred: boolean | number
  GanttFinishProof: boolean | number
  GanttFinishTip: string
  GanttFitVisible: number
  GanttFixComplete: boolean | number
  GanttFlagClasses: string
  GanttFlagClassList: string
  GanttFlagIconList: string
  GanttFlagIconNames: string
  GanttFlagIcons: string
  GanttFlags: string
  GanttFlagsMove: number
  GanttFlagsTip: string
  GanttFlagsTop: number
  GanttFlagsType: number
  GanttFlagTexts: string
  GanttFlow: string
  GanttFlowComplete: string
  GanttFlowJoin: number
  GanttFlowRound: string
  GanttFlowText: string
  GanttFlowTip: string
  GanttFormat: string
  GanttFormat1: string
  GanttFormat2: string
  GanttFormat3: string
  GanttFormat4: string
  GanttFormat5: string
  GanttFormat6: string
  GanttFormat7: string
  GanttFormat8: string
  GanttFormat9: string
  GanttFormatObject: string
  GanttFormatWidth: any
  GanttHeader1: string
  GanttHeader2: string
  GanttHeader3: string
  GanttHeader4: string
  GanttHeader5: string
  GanttHeader6: string
  GanttHeader7: string
  GanttHeader8: string
  GanttHeader9: string
  GanttHeaderCount: number
  GanttHeaderHeight1: number
  GanttHeaderHeight2: number
  GanttHeaderHeight3: number
  GanttHeaderHeight4: number
  GanttHeaderHeight5: number
  GanttHeaderHeight6: number
  GanttHeaderHeight7: number
  GanttHeaderHeight8: number
  GanttHeaderHeight9: number
  GanttHeaderId1: string
  GanttHeaderId2: string
  GanttHeaderId3: string
  GanttHeaderId4: string
  GanttHeaderId5: string
  GanttHeaderId6: string
  GanttHeaderId7: string
  GanttHeaderId8: string
  GanttHeaderId9: string
  GanttHeaderMaxUnits: number
  GanttHeaderPaging1: boolean | number
  GanttHeaderPaging2: boolean | number
  GanttHeaderPaging3: boolean | number
  GanttHeaderPaging4: boolean | number
  GanttHeaderPaging5: boolean | number
  GanttHeaderPaging6: boolean | number
  GanttHeaderPaging7: boolean | number
  GanttHeaderPaging8: boolean | number
  GanttHeaderPaging9: boolean | number
  GanttHeaderRound1: boolean | number
  GanttHeaderRound2: boolean | number
  GanttHeaderRound3: boolean | number
  GanttHeaderRound4: boolean | number
  GanttHeaderRound5: boolean | number
  GanttHeaderRound6: boolean | number
  GanttHeaderRound7: boolean | number
  GanttHeaderRound8: boolean | number
  GanttHeaderRound9: boolean | number
  GanttHeaderStyle1: number
  GanttHeaderStyle2: number
  GanttHeaderStyle3: number
  GanttHeaderStyle4: number
  GanttHeaderStyle5: number
  GanttHeaderStyle6: number
  GanttHeaderStyle7: number
  GanttHeaderStyle8: number
  GanttHeaderStyle9: number
  GanttHeaderTrim: number
  GanttHeight: number
  GanttHideExclude: number
  GanttHover: number
  GanttHoverIcons: string
  GanttHtml: string
  GanttHtmlDateFormat: string
  GanttHtmlHover: number
  GanttHtmlLeft: string
  GanttHtmlLeftClass: string
  GanttHtmlLeftEdge: number
  GanttHtmlRight: string
  GanttHtmlRightClass: string
  GanttHtmlRightEdge: number
  GanttHtmlShift: number
  GanttIconBottom: number
  GanttIconLeft: string
  GanttIconLeftShift: number
  GanttIconLeftWidth: number
  GanttIconRight: string
  GanttIconRightShift: number
  GanttIconRightWidth: number
  GanttIcons: number
  GanttIconsHover: boolean | number
  GanttInclude: string
  GanttIncorrectDependencies: number
  GanttJoin: number
  GanttLagDescendants: boolean | number
  GanttLagRound: number
  GanttLastUnit: string
  GanttLeft: number
  GanttLines: string
  GanttLinesTip: string
  GanttLinesTipDateFormat: string
  GanttLineXTip: string
  GanttMainTip: string
  GanttManual: string
  GanttManualChange: number
  GanttManualSide: number
  GanttMark: string
  GanttMarkDisabledDependencies: number
  GanttMarkExt: string
  GanttMarkIncorrectDependencies: number
  GanttMarkPath: number
  GanttMarkRound: string
  GanttMarkTexts: string
  GanttMax: number
  GanttMaxCorrectingLoops: number
  GanttMaxDependencies: number
  GanttMaxEnd: string
  GanttMaxExclude: number
  GanttMaxStart: string
  GanttMenu: string
  GanttMilestoneClass: string
  GanttMilestones: number
  GanttMilestoneTip: string
  GanttMilestoneTopMin: number
  GanttMin: number
  GanttMinEnd: string
  GanttMinResize: number
  GanttMinSlack: number
  GanttMinStart: string
  GanttMinWidth: number
  GanttNewEnd: string
  GanttNewStart: string
  GanttNoMilestones: boolean | number
  GanttObject: string
  GanttOrder: string
  GanttPageInit: number
  GanttPageWidth: any
  GanttPaging: boolean | number
  GanttPagingFixed: number
  GanttPagingUpdateHeight: boolean | number
  GanttParts: string
  GanttPoints: string
  GanttPointsEdit: string
  GanttPointsIcons: string
  GanttPointsShift: number
  GanttPointsTip: string
  GanttPointsTop: number
  GanttPrintRound: string
  GanttResizeBeforeMove: number
  GanttResizeDelete: number
  GanttResources: string
  GanttResourcesAssign: number
  GanttResourcesExtra: number
  GanttResourcesFilter: string
  GanttResourcesMenu: string
  GanttRight: number
  GanttRound: string
  GanttRoundComplete: boolean | number
  GanttRoundUnits: boolean | number
  GanttRun: string
  GanttRunAdjust: string
  GanttRunAdjustCorrect: string
  GanttRunAdjustStart: string
  GanttRunBoxMinAlign: string
  GanttRunBoxMinType: number
  GanttRunBoxMinWidth: number
  GanttRunClass: string
  GanttRunClearSelected: boolean | number
  GanttRunComplete: number
  GanttRunContainers: string
  GanttRunContainersDelete: number
  GanttRunContainersLabel: string
  GanttRunContainersLabels: string
  GanttRunContainersResize: number
  GanttRunContainersSelect: string
  GanttRunContainerTop: number
  GanttRunCorrectBox: number
  GanttRunCorrectFixed: boolean | number
  GanttRunCustom: string
  GanttRunDisabled: number
  GanttRunDragObject: number
  GanttRunDuration: number
  GanttRunEmpty: boolean | number
  GanttRunEnd: string
  GanttRunError: string
  GanttRunErrors: boolean | number
  GanttRunErrorsShift: number
  GanttRunEscape: string
  GanttRunFormat: string
  GanttRunGroupHover: number
  GanttRunHeight: number
  GanttRunHtml: string
  GanttRunHtmlDateFormat: string
  GanttRunHtmlLeft: string
  GanttRunHtmlLeftClass: string
  GanttRunHtmlLeftEdge: number
  GanttRunHtmlRight: string
  GanttRunHtmlRightClass: string
  GanttRunHtmlRightEdge: number
  GanttRunHtmlShift: string
  GanttRunIdChars: string
  GanttRunIdPostfix: string
  GanttRunIdPrefix: string
  GanttRunIds: number
  GanttRunJoined: number
  GanttRunJoinedHover: number
  GanttRunJoinedNbsp: number
  GanttRunLastId: string
  GanttRunLevels: number
  GanttRunManual: string
  GanttRunManualChange: number
  GanttRunMaxCorrectingLoops: number
  GanttRunMilestones: number
  GanttRunMinResize: number
  GanttRunMinWidth: number
  GanttRunMove: string
  GanttRunNbspHover: number
  GanttRunNew: string
  GanttRunNewStart: string
  GanttRunNumberId: number
  GanttRunResize: string
  GanttRunResources: string
  GanttRunSave: number
  GanttRunSelect: number
  GanttRunShowHtml: number
  GanttRunStart: string
  GanttRunStates: boolean | number
  GanttRunSummaryIdPrefix: string
  GanttRunText: string
  GanttRunTip: string
  GanttRunTipDateFormat: string
  GanttRunTop: number
  GanttRunTypes: string
  GanttSeparateSlack: boolean
  GanttShift: string
  GanttShowBorder: boolean | number
  GanttShowBounds: number
  GanttShowConstraints: number
  GanttShowDependencies: boolean | number
  GanttShowHtml: number
  GanttSize: string
  GanttSizeFit: number
  GanttSizeLeft: number
  GanttSizeRight: number
  GanttSlack: string | number
  GanttSmoothZoom: boolean | number
  GanttStart: string
  GanttStrict: number
  GanttTask: string
  GanttText: string
  GanttTextOverlay: boolean | number
  GanttTextsSeparator: string
  GanttTip: string
  GanttTipDateFormat: string
  GanttTop: number
  GanttUnits: string
  GanttUseConstraints: number
  GanttWidth: number
  GanttZoom: string
  GanttZoomDate: string
  GanttZoomDateAlign: string
  GanttZoomFit: number
  GanttZoomFitRound: string
  GanttZoomFitWidth: number
  GanttZoomChange: boolean | number
  GanttZoomList: string
  GanttZoomUndo: number
  GMT: boolean | number
  GroupDef: string
  GroupDeleted: boolean | number
  GroupEmpty: number
  GroupChar: string
  GroupSingle: number
  GroupSole: boolean | number
  GroupWidth: number
  readonly HasIndex: number
  Hidden: boolean | number
  HideParentCol: boolean | number
  HintValue: any
  HoverCell: string
  HoverRow: string
  HtmlPostfix: string
  HtmlPrefix: string
  CharCodes: string
  Icon: string
  IconAlign: string
  IconHeight: number
  IconChecked: string
  Icons: string
  IconSize: number
  IconWidth: number
  Indent: string
  InsertImg: string
  IntFormat: string
  Link: string
  LinkBase: string
  LinkTarget: string
  List: string
  Level: number
  LocaleCompare: boolean | number
  readonly MainSec: number
  MaskColor: string
  MaxCalcWidth: number
  MaxEditHeight: number
  MaxChars: string
  MaxWidth: number
  Menu: string
  MenuCheck: boolean | number
  MenuName: string
  MinWidth: number
  Move: boolean | number
  Name: string
  Next: string
  NoBorder: number
  NoColor: boolean | number
  NoData: boolean | number
  NoFormat: number
  NoChanged: boolean | number
  NoIndex: number
  NoStyle: number
  NoUpload: number
  NumberSort: boolean | number
  Overflow: number
  Overlay: number
  PivotValue: string
  PopupIcon: number
  readonly Pos: number
  Prepared: boolean | number
  PrintWidth: number
  Radio: number
  RadioIcon: number | string
  RadioIconWidth: number
  RadioRight: boolean | number
  RadioUncheck: boolean | number
  RadioWrap: boolean | number
  Range: boolean | number
  RawSort: number
  Refresh: string
  Related: string
  ReloadData: string
  RelWidth: number
  RelWidthType: number
  Resizing: number
  ResultMask: string
  ResultMessage: string
  ResultMessageTime: number
  ResultText: string
  Rotate: number
  Rtl: number
  SearchNames: string
  SearchText: string
  readonly Sec: number
  Select: number
  Selected: boolean | number
  Separator: string
  ShowEnumHeader: boolean | number
  ShowHint: number
  Simple: number
  Size: number
  Spanned: boolean | number
  Suggest: string
  SuggestDelay: number
  SuggestMin: number
  SuggestSeparator: string
  SuggestServer: boolean | number
  SuggestType: string
  Switch: boolean | number
  Tags: number
  TagsEmpty: string
  TagSeparator: string
  TagsType: string
  TextColor: string
  TextFont: string
  TextImg: boolean | number
  TextShadow: number
  TextShadowColor: string
  TextSize: string
  TextStyle: number
  Tip: string
  TipClass: string
  TipPosition: string
  Type: string
  Underline: string
  UnderlineStyle: number
  Uncheck: boolean | number
  VertAlign: string
  VarHeight: number
  VarHeightType: number
  Visible: boolean | number
  WhiteChars: string
  Width: number
  WidthPad: number
  Wrap: boolean | number
  WrapEdit: boolean | number
  XlsFormat: string
}

interface TRow {
  AcceptDef: string
  Added: number
  AddParent: number
  AggChildren: boolean
  Align: string
  AlternateClass: string
  AlternateColor: string
  Background: string
  BorderBottom: string
  BorderLeft: string
  BorderRight: string
  BorderTop: string
  Buttons: string
  CalcOrder: any
  Calculated: boolean | number
  CanCopy: boolean | number
  CanCopyPaste: number
  CanDelete: boolean | number
  CanDrag: boolean | number
  CanEdit: number
  CanExpand: number
  CanExport: number
  CanFilter: number
  CanFix: boolean | number
  CanFocus: number
  CanGroup: boolean | number
  CanPrint: number
  CanResize: number
  CanSelect: boolean | number
  CanSort: boolean | number
  CDef: string
  CellDef: string
  Changed: number
  Class: string
  ClassInner: string
  ClassInnerIcon: boolean | number
  CollapseOther: boolean | number
  Color: string
  ColorCursor: number
  Copy: string
  Count: number
  readonly Def: any
  DefEmpty: string
  DefParent: string
  Deleted: number
  Detail: string
  DetailCol: string
  DetailLayout: string
  DetailTreeGrid: string
  DragTab: string
  readonly Expanded: number
  readonly Fixed: string
  FocusCell: string
  FocusRow: string
  FormulaCanEdit: boolean | number
  FormulaCanUse: boolean | number
  readonly GroupCol: string
  readonly GroupPos: number
  readonly HasIndex: number
  Height: number
  readonly Hidden: boolean | number
  HintValue: any
  HtmlPostfix: string
  HtmlPrefix: string
  HoverCell: string
  HoverRow: string
  IconAlign: number
  readonly id: string
  Indent: number
  InsertImg: string
  IgnoreIdNames: boolean | number
  readonly Kind: string
  Level: number
  LeftHtml: string
  MaxChildren: number
  MaxChildrenDiff: number
  MaxChildrenMin: number
  MaxEditHeight: number
  MaxHeight: number
  MaxHeightAll: boolean | number
  Menu: string
  MenuName: string
  MidHtml: string
  MidHtml2: string
  MinHeight: number
  Moved: number
  Name: string
  NewId: string
  Next: string
  NoBorder: number
  NoColor: number
  NoColorState: boolean | number
  NoData: boolean | number
  NoFormat: number
  NoIndex: number
  NoPageBreak: boolean | number
  NoStyle: number
  NoUpload: number
  Parent: string
  Prev: string
  PrintHeight: number
  Pos: number
  Selected: number
  ShowColNames: boolean | number
  ShowHint: number
  readonly Spanned: boolean | number
  SortSpan: boolean | number
  SortPos: number
  State: number
  Recalc: number
  RelHeight: number
  Resized: boolean | number
  RightHtml: string
  Rotate: number
  Rows: string
  TextColor: string
  TextFont: string
  TextSize: number
  TextShadow: number
  TextShadowColor: string
  TextStyle: number
  Tip: string
  TipClass: string
  TipPosition: string
  VertAlign: string
  VarHeight: number
  readonly Visible: boolean | number
  Wrap: boolean | number
  WrapEdit: boolean | number
  readonly firstChild: TRow
  readonly lastChild: TRow
  readonly nextSibling: TRow
  readonly parentNode: TRow
  readonly previousSibling: TRow
}

type TAction = (
  focused: boolean | number,
  test: boolean | number,
) => boolean | number

interface TTGrid {
  AcceptChanges(row?: TRow): void
  AddAutoColPages(): void
  AddAutoPages(): void
  AddCol(
    col: string,
    sec: number,
    pos: number,
    width?: number,
    show?: boolean | number,
    type?: string,
    caption?: string,
  ): TCol
  AddColPage(names: any, def?: string, updatefixed?: boolean | number): void
  AddCols(
    cols: string[] | number,
    tocol: string | number,
    right?: boolean | number,
    empty?: boolean | number,
    focus?: boolean | number,
  ): TCol[]
  AddCustomFormat(format: string, name?: string): void
  AddDataFromServer(Data: string): void
  AddDependencies(Dependencies: any): void
  AddGanttRun(row: TRow, col: string, run: string): boolean | number
  AddGanttRunBox(
    box: any,
    adjust?: string,
    id?: string,
    group?: string,
    test?: boolean | number,
  ): boolean | number
  AddGanttRunContainer(
    row: TRow,
    col: string,
    index: number,
    container: string,
    level?: number,
    unique?: boolean | number,
  ): string
  AddPage(name?: string, xml?: string, count?: number): TRow
  AddRow(
    parent?: TRow,
    next?: TRow,
    show?: number,
    id?: string,
    Def?: string,
  ): TRow
  AddRows(
    count: number,
    parent?: TRow,
    next?: TRow,
    focus?: boolean | number,
    test?: boolean | number,
  ): TRow[]
  AjaxCall(Source: any, Data?: string, Func?: Function): string
  AnimateCell(row: TRow, col: string, animation?: string, func?: Function): void
  AnimateCol(col: any, animation?: string, func?: Function): void
  AnimateRow(
    row: any,
    animation?: string,
    childrenanimation?: string,
    func?: Function,
  ): void
  ApplyMedia(): boolean | number
  AutoSpanCell(row: TRow, col: string, type?: number): boolean | number
  ButtonClick(row: TRow, col: string): void
  CalcWidth(col: string, noupdate?: boolean | number, rows?: TRow[]): void
  Calculate(show?: boolean | number, calconly?: boolean | number): void
  CanChangeWinScroll(): boolean | number
  CanEdit(row: TRow, col: string): number
  CanEditBorder(row: TRow, col: string): boolean | number
  CanEditStyle(row: TRow, col: string): boolean | number
  CanFocus(row: TRow, col: string): number
  CanRedo(): boolean | number
  CanUndo(): boolean | number
  CanZoomIn(): boolean | number
  CanZoomOut(): boolean | number
  ChangeColsPositions(
    leftcols: string[],
    cols: string[],
    rightcols: string[],
  ): void
  ChangeColsVisibility(
    Show?: string[],
    Hide?: string[],
    prefer?: boolean | number,
  ): void
  ChangeDef(
    row: TRow,
    def: string,
    show?: boolean | number,
    undo?: boolean | number,
  ): void
  ChangeExclude(exclude: string, name?: string, type?: number): void
  ChangeFilter(
    cols: any,
    values: any,
    operators: any,
    nofilter?: string,
    noclear?: boolean | number,
    filter?: TRow,
  ): void
  ChangeGanttRunContainer(
    row: TRow,
    col: string,
    container: string,
    newcontainer: string,
    unique?: boolean | number,
  ): string
  ChangeImg(
    row: TRow,
    col: string,
    idx: number,
    val: number[],
    assign?: boolean | number,
    refresh?: boolean | number,
    undo?: boolean | number,
  ): any
  ChangeMainCol(col: string, noshow?: boolean | number): void
  ChangeName(
    OldName: any,
    NewName: any,
    undo?: boolean | number,
    recalc?: boolean | number,
  ): void
  ChangeSort(sortcols: string): void
  ChangeZoom(Name: string): boolean | number
  CheckForUpdates(Func?: Function): void
  CheckGantt(row: TRow, col: string, val?: any): boolean | number
  Clear(): void
  ClearBody(): void
  ClearRange(range: any[]): void
  ClearSelection(type?: number): void
  ClearUndo(recalc?: boolean | number): void
  CloseDialog(): void
  Collapse(row: TRow): void
  CollapseAll(root?: boolean | number, test?: boolean | number): number
  ColorCell(row: TRow, col: string): void
  ColorRow(row: TRow): void
  CopyImg(
    row: TRow,
    col: string,
    idx: number,
    refresh?: boolean | number,
    undo?: boolean | number,
  ): boolean | number
  CopyRange(destination: any[], source: any[], clear?: boolean | number): void
  CopyRow(
    row: TRow,
    parent?: TRow,
    next?: TRow,
    deep?: boolean | number,
    empty?: boolean | number,
  ): TRow
  CopyRows(
    rows: TRow[],
    parent?: TRow,
    next?: TRow,
    deep?: boolean | number,
    empty?: boolean | number,
  ): TRow[]
  CorrectDependencies(row: TRow, col: string, bar?: any): void
  CorrectExclude(
    row: TRow,
    col: string,
    show?: boolean | number,
    objects?: string,
  ): void
  CreateColPages(): void
  CreatePages(): void
  CreatePivot(func?: Function): boolean | number
  CustomUndo(object: any, undo: Function, redo: Function): void
  Debug(
    type: number,
    arg1: string,
    arg2?: string,
    arg3?: string,
    arg4?: string,
    arg5?: string,
    arg6?: string,
    arg7?: string,
    arg8?: string,
    arg9?: string,
  ): void
  DeleteCol(
    col: string,
    type: number,
    test?: boolean | number,
  ): boolean | number
  DeleteColT(col: string, type: number): boolean | number
  DeleteCols(cols: string[], del?: number): number
  DeleteConstraints(row: TRow, col: string): void
  DeleteDependencies(Dependencies: any): void
  DeleteImg(
    row: TRow,
    col: string,
    idx: number,
    refresh: boolean | number,
    undo: boolean | number,
  ): boolean | number
  DeleteRow(row: TRow, type: number, test?: boolean | number): boolean | number
  DeleteRowT(row: TRow, type: number, noshow?: boolean | number): void
  DeleteRows(rows: TRow[], del?: number): number
  DeleteSheet(name: string): void
  DelGanttRunBox(
    box: any,
    remove?: boolean | number,
    adjust?: string,
  ): boolean | number
  DelGanttRunContainer(
    row: TRow,
    col: string,
    container: string,
    del?: number,
    adjust?: string,
    nodisabled?: boolean | number,
  ): string
  Dialog(): void
  DiffGanttDate(
    start: number,
    end: number,
    units?: string,
    last?: string,
    col?: string,
    row?: TRow,
  ): number
  Disable(hard?: boolean | number): void
  DisableGanttMain(row: TRow, col: string, plan: number, disable: number): void
  DisableGanttRun(row: TRow, col: string, disable: number, index: number): void
  DisableGanttRunContainer(
    row: TRow,
    col: string,
    container: string,
    disable: number,
  ): string
  Dispose(): void
  DoFilter(row?: TRow, col?: string): void
  DoGrouping(Group: string): void
  DoSearch(action: string, noshow?: boolean | number): void
  DownloadPage(row: TRow, Func?: Function): void
  DragGanttRunByMouse(
    tag: object,
    event: Event,
    run: string,
    row: TRow,
    html?: string,
  ): boolean | number
  EditGanttCalendars(): void
  Enable(): void
  EndEdit(save?: boolean | number): number
  EndUndo(): void
  EndUpdate(row?: TRow, col?: string): void
  Escape(str: string): string
  Expand(row: TRow): void
  ExpandAll(
    parent: TRow,
    loaded?: number,
    levels?: number,
    max?: number,
    test?: boolean | number,
    render?: number,
  ): number
  ExpandCell(row: TRow, col: string): void
  ExpandParents(row: TRow): void
  ExtendGantt(count?: number, units?: string): void
  FillRange(destination: any[], source: any[], type?: number): void
  FilterDateRange(col: string, val: string, name?: string, show?: number): void
  FilterTextRange(col: string, val: string, name?: string, show?: number): void
  FindFormat(
    row: TRow,
    col: string,
    format: string,
    defaultValue?: string,
  ): string
  FindGanttRunBoxes(box: any, type?: number): any
  FindType(
    row: TRow,
    col: string,
    val: any,
    refresh?: boolean | number,
    calc?: boolean | number,
  ): string
  FinishAnimations(): void
  FixAbove(row: TRow, undo?: boolean | number): boolean | number
  FixBelow(row: TRow, undo?: boolean | number): boolean | number
  FixNext(col: string, undo?: boolean | number): boolean | number
  FixPrev(col: string, undo?: boolean | number): boolean | number
  Focus(
    row?: TRow,
    col?: string,
    pagepos?: number,
    Rect?: any[],
    type?: number,
  ): boolean | number
  FocusFocused(clear?: boolean | number, use?: boolean | number): void
  GanttUnitsDuration(units: string, col?: string): number
  GenerateId(row: TRow): string
  GetActiveSheet(): string
  GetAttribute(row: TRow, col: string, attribute: string): string
  GetBodyHeight(): number
  GetBodyScrollHeight(): number
  GetBodyScrollWidth(sec?: number): number
  GetBodyWidth(sec?: number): number
  GetBorder(row: TRow, col: string, edge?: number): any[]
  GetCaption(col: string): string
  GetCell(row: TRow, col: string): any
  GetCellName(row: TRow, col: string): string
  GetCfgRequest(format?: string): string
  GetChanges(row?: TRow): string
  GetChart(id: string): void
  GetColByIndex(index: any, type?: boolean | number): string
  GetColIndex(col: string, type?: boolean | number): any
  GetColLeft(col: string): number
  GetCols(attr1?: string, attr2?: string): string[]
  GetDefaultsIndex(row: TRow, col: string, val?: string, range?: number): number
  GetDefaultsValue(
    row: TRow,
    col: string,
    index: number,
    range?: number,
  ): number
  GetDependencies(
    row: TRow,
    col: string,
    ancestors?: boolean | number,
    row2?: TRow,
    type?: string,
    box?: string,
    box2?: string,
  ): any
  GetDependency(row: TRow, col: string, ancestors?: boolean | number): any
  GetDetailGrid(row: TRow, idx?: number): TGrid
  GetEvent(): any
  GetFPage(): TRow
  GetFilter(spec?: boolean | number): any[]
  GetFirst(parent?: TRow, type?: number): TRow
  GetFirstCol(sec?: number): string
  GetFirstVisible(parent?: TRow, type?: number): TRow
  GetFixedRows(): TRow[]
  GetFocusedCols(): string[]
  GetFocusedRows(type?: number, attr?: string): TRow[]
  GetFormat(row: TRow, col: string, edit?: boolean | number): string
  GetGanttBase(): number
  GetGanttDate(pos: number, col?: string): number
  GetGanttFinish(): number
  GetGanttHeaderXY(row: TRow, col: string, x: number, y: number): any
  GetGanttLine(index: number, col?: string): any[]
  GetGanttMain(row: TRow, col: string, plan?: number): any
  GetGanttPos(date: number, col?: string): number
  GetGanttPrice(row: TRow, col: string, bar?: number): number
  GetGanttResourceAvailability(res: string, col?: string): number[]
  GetGanttResourceCount(
    res: string,
    start: any,
    end: any,
    type: number,
    col?: string,
    def?: string,
  ): number
  GetGanttResourcesUsage(
    def: string,
    row: TRow,
    col: string,
    units: string,
    bar?: number,
    notmp?: boolean | number,
  ): number[]
  GetGanttRun(row: TRow, col: string): any
  GetGanttRunBox(row: TRow, col: string, index: number): any
  GetGanttRunBoxTag(box: any): any
  GetGanttRunContainerBoxes(row: TRow, col: string, container: string): number[]
  GetGanttRunContainers(row: TRow, col: string, display?: number): any
  GetGanttRunResourcesString(row: TRow, col?: string): string
  GetGanttRunSelectedBoxes(row: TRow, col: string): any
  GetGanttRunSelectedCount(): number
  GetGanttSlack(row: TRow, col: string, bar: any): number
  GetGanttXY(row: TRow, col: string, x: number, y: number): any
  GetIncorrectConstraints(col?: string, all?: number): any
  GetIncorrectDependencies(col?: string): any
  GetLast(parent?: TRow, type?: number): TRow
  GetLastCol(sec?: number): string
  GetLastDataCol(): string
  GetLastDataRow(): TRow
  GetLastVisible(parent?: TRow, type?: number): TRow
  GetLockedIndex(): number
  GetMasterRow(): TRow
  GetNext(row: TRow, type?: number): TRow
  GetNextCol(col: string): string
  GetNextShift(row: TRow, pagepos?: number, cnt?: number): any
  GetNextSibling(row: TRow, type?: number): TRow
  GetNextSiblingVisible(row: TRow, type?: number): TRow
  GetNextVisible(row: TRow, type?: number): TRow
  GetPage(num: number): TRow
  GetPageNum(page: TRow): number
  GetPagePos(row: TRow): number
  GetPos(row: TRow): number
  GetPrev(row: TRow, type?: number): TRow
  GetPrevCol(col: string): string
  GetPrevShift(row: TRow, pagepos?: number, cnt?: number): any
  GetPrevSibling(row: TRow, type?: number): TRow
  GetPrevSiblingVisible(row: TRow, type?: number): TRow
  GetPrevVisible(row: TRow, type?: number): TRow
  GetPrintable(func?: Function): string
  GetResourceErrors(res: string, type?: number): any[]
  GetResourceUsage(
    name: string,
    type?: number,
    consume?: number,
    row?: TRow,
    opt?: number,
    def?: string,
    col?: string,
  ): string
  GetRoutes(type: number, col?: string): object[]
  GetRowById(id: string, attr?: string, nofixed?: boolean | number): TRow
  GetRowByIndex(index: any, type?: boolean | number): TRow
  GetRowHeight(row: TRow): number
  GetRowIndex(row: TRow, type?: boolean | number, defaultValue?: any): any
  GetRowPage(row: TRow): TRow
  GetRowTop(row: TRow): number
  GetScrollLeft(sec?: number): number
  GetScrollTop(): number
  GetSections(): number[]
  GetSelCols(attr?: string): string[]
  GetSelRanges(rowtype?: number, coltype?: number): any[]
  GetSelRows(type?: number, attr?: string): TRow[]
  GetSheets(hidden?: boolean | number): string[]
  GetShownCols(sec?: number): TRow[]
  GetShownRows(): TRow[]
  GetSpanned(row: TRow, col: string): any[]
  GetString(row: TRow, col: string): string
  GetStringEdit(row: TRow, col: string): string
  GetTasksToSchedule(row?: TRow, col?: string, bar?: any, tasks?: any): any
  GetType(row: TRow, col: string): string
  GetUniqueGanttRunContainer(row: TRow, col: string, container: string): string
  GetUniqueSheet(name: string): string
  GetValue(row: TRow, col: string): any
  GetXmlData(type?: string, attrs?: string): string
  GetZoomList(col?: string): any
  GoToNextPage(): void
  GoToPage(page: TRow): void
  GoToPrevPage(): void
  HasChanges(): number
  HasChildren(row: TRow): boolean | number
  HasDependencies(): boolean | number
  HasFilter(): number
  HasGantt(): boolean | number
  HasSheet(name: string, hidden?: boolean | number): boolean | number
  HideCol(col: string): void
  HideHint(): void
  HideMessage(): void
  HideRow(row: TRow, del?: boolean | number, noshow?: boolean | number): void
  HideTip(): void
  ImportData(file: any, nomessage?: boolean | number): void
  InDefaults(
    row: TRow,
    col: string,
    val?: string,
    defaults?: string,
  ): boolean | number
  IncGanttDate(
    start: number,
    dur: number,
    units?: string,
    beg?: boolean | number,
    col?: string,
    row?: TRow,
  ): number
  IsCellExpanded(row: TRow, col: string): boolean | number
  IsFocused(row: TRow, col: string): boolean | number
  IsGanttRunContainerSelected(
    row: TRow,
    col: string,
    container: string,
  ): boolean | number
  IsSelected(row: TRow, col?: string): boolean | number
  LoadCfg(cookie?: string): void
  LoadPage(page: TRow): void
  LoadSheet(name: string, save?: boolean | number): boolean | number
  LoadSheetHidden(name: string): TGrid
  MergeUndo(type1?: string, type2?: string): void
  MoveCol(
    col: string,
    tocol: string | number,
    right?: boolean | number,
    noshow?: boolean | number,
  ): void
  MoveRow(row: TRow, parent?: TRow, next?: TRow, show?: boolean | number): void
  MoveRows(row: TRow, rowto: TRow, type: number): void
  MoveRowsToGrid(
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    type: number,
    copy?: number,
  ): TRow
  MoveSheet(name: string, next: string, copy?: boolean | number): void
  PagePosToRow(page: TRow, pos: number): TRow
  PivotEscape(value: string): string
  PivotUnescape(value: string): string
  Prompt(
    text: string,
    defaultValue: string,
    func: Function,
    width?: number,
  ): void
  ReColor(): void
  ReadData(source: any, Func?: Function): void
  Recalculate(row: TRow, col: string, show?: boolean | number): void
  RecalculateRows(rows: TRow[], show?: boolean | number): void
  RefreshBorder(row: TRow, col: string, edge?: number, span?: number): void
  RefreshCell(row: TRow, col: string): void
  RefreshCellAnimate(row: TRow, col: string, animation: string): void
  RefreshChart(id: string): void
  RefreshDetail(grid: TGrid, clear?: boolean | number): void
  RefreshGantt(show?: number, col?: string): void
  RefreshGanttDependencies(show?: number, col?: string): void
  RefreshGanttSlack(show?: boolean | number, min?: number, err?: number): void
  RefreshNested(row: TRow): void
  RefreshPage(page: TRow, always?: boolean | number): void
  RefreshRow(row: TRow): void
  Reload(Source?: any, id?: string, confirm?: boolean | number): TGrid
  ReloadBody(Func?: Function): void
  ReloadPage(page: TRow): void
  RemoveCol(col: string): void
  RemoveColPage(section: number, count?: number): void
  RemoveDeletedDependencies(): void
  RemovePage(page: TRow): boolean | number
  RemoveParents(def?: string, norender?: boolean | number): boolean | number
  RemoveRow(row: TRow): void
  RenameSheet(name: string, newname: string): string
  Render(): void
  RenderBody(): void
  RenderGanttPage(col: string, left: number, width: number): void
  Rerender(scroll?: boolean | number, sync?: boolean | number): void
  ResetChecked(row: TRow, col: string): void
  ResizeRow(row: TRow, height: number): void
  ResizeSection(section: number, widthchange: number, undo?: boolean): void
  RestoreCfg(type?: number): void
  RestoreParents(norender?: boolean | number): boolean | number
  RoundGanttDate(
    date: number,
    round: number,
    base?: number,
    col?: string,
    units?: string,
    row?: TRow,
  ): number
  Save(event?: Event): void
  SaveCfg(returnArg?: boolean | number): void
  SaveExport(data: string, source?: any): void
  ScrollIntoView(row: TRow, col?: string, pagepos?: number): void
  ScrollToCell(
    row: TRow | null,
    col: string | null,
    top: number | null,
    left?: number | null,
  ): void
  ScrollToDate(date: Date, align?: string): void
  ScrollToGanttRunBox(box: any, type?: number): any
  SearchRows(action: string, noshow?: boolean | number): void
  SelectAllRows(select?: number): void
  SelectCell(
    row: TRow,
    col: string,
    select?: boolean | number,
    test?: boolean | number,
  ): boolean | number
  SelectCol(
    col: string,
    select?: boolean | number,
    test?: boolean | number,
  ): void
  SelectGanttRunBox(box: any, select?: boolean | number): boolean | number
  SelectGanttRunContainer(
    row: TRow,
    col: string,
    container: string,
    select?: boolean | number,
  ): boolean | number
  SelectGanttRunRange(
    rows: TRow[],
    d1: number,
    d2: number,
    select?: boolean | number,
  ): boolean | number
  SelectGanttRunRect(
    r1: TRow,
    x1: number,
    y1: number,
    r2: TRow,
    x2: number,
    y2: number,
    select?: boolean | number,
  ): boolean | number
  SelectRange(
    row1: TRow,
    col1: string,
    row2: TRow,
    col2: string,
    select?: number,
    type?: number,
    test?: boolean | number,
  ): number
  SelectRow(
    row: TRow,
    select?: boolean | number,
    test?: boolean | number,
  ): boolean | number
  SendExport(data: string, url: string, name?: string): void
  SetAttribute(
    row: TRow | null,
    col: string | null,
    attribute: string,
    value: any,
    refresh?: boolean | number,
    undo?: boolean | number,
  ): string
  SetBool(
    row: TRow,
    col: string,
    value?: any,
    test?: boolean | number,
  ): boolean | number
  SetBorder(
    row: TRow,
    col: string,
    border: any,
    edge?: number,
    refresh?: number,
    span?: number,
  ): void
  SetBorders(range: any[], borderout?: any, borderin?: any, edge?: number): void
  SetCase(row: TRow, col: string, val: string, refresh?: boolean): void
  SetCellStyle(
    row: TRow,
    col: string,
    attrs: any,
    refresh?: boolean | number,
  ): boolean | number
  SetChecked(row: TRow, col: string, value: number): void
  SetColTree(value: number): void
  SetDependency(
    row: TRow,
    col: string,
    dependency: any,
    ancestors?: boolean | number,
    check?: number,
    refresh?: boolean | number,
  ): boolean | number
  SetFilter(
    name: string | null,
    filter: string,
    col?: string,
    show?: number,
  ): void
  SetFocused(index?: boolean | number): void
  SetGanttBase(date: any, action?: number, col?: string): void
  SetGanttFinish(date: any, col?: string): void
  SetGanttLine(
    index: number,
    date1?: string,
    date2?: string,
    classArg?: string,
    edit?: boolean | number,
    update?: boolean | number,
    col?: string,
  ): boolean | number
  SetGanttMain(row: TRow, col: string, plan: number, main: any): void
  SetGanttRun(row: TRow, col: string, run: any): void
  SetGanttRunBox(
    box: any,
    adjust?: string,
    test?: boolean | number,
    minwidth?: number,
  ): boolean | number
  SetGanttShowDependencies(
    value: boolean | number,
    show?: boolean | number,
    col?: string,
  ): void
  SetGanttTask(value: string, col?: string): void
  SetHideExclude(hide: boolean | number): void
  SetHideTree(value: boolean | number, noshow?: boolean | number): void
  SetLanguage(code: string): boolean | number
  SetLocked(lock: string): void
  SetMaxHeight(value: number): void
  SetNoTreeLines(Value: number): void
  SetReversedTree(value: boolean | number, noshow?: boolean | number): void
  SetScale(scale: number): void
  SetScrollLeft(pos: number, sec?: number): void
  SetScrollTop(pos: number): void
  SetSession(Session: string): void
  SetSize(size: string): void
  SetString(
    row: TRow,
    col: string,
    val: string,
    refresh?: boolean | number,
  ): void
  SetStringEdit(
    row: TRow,
    col: string,
    value: string,
    timeout?: boolean | number,
  ): void
  SetStyle(
    Style?: string,
    CSS?: string,
    GanttCSS?: string,
    GanttStyle?: string,
    render?: boolean | number,
  ): void
  SetTimeout(
    code: any,
    time: number,
    ident?: string,
    flags?: number,
    data?: any,
  ): boolean | number
  SetValue(row: TRow, col: string, val: any, refresh?: boolean | number): void
  SetWidth(col: string, dx: number): void
  SetWordWrap(wrap: boolean | number): void
  ShowCalendar(
    row: TRow,
    col: string,
    Calendar: any,
    Pos?: any,
    Func?: Function,
    Date?: any,
    always?: boolean | number,
  ): TCalendar
  ShowCfg(source?: any, func?: Function, options?: any): TMenu
  ShowCol(col: string): void
  ShowColPages(): void
  ShowColTreeLevel(row: TRow): boolean | number
  ShowColumns(
    attribute?: string,
    caption?: string,
    func?: Function,
    options?: any,
    optionscaption?: string,
  ): void
  ShowDefaults(row: TRow, col: string): boolean | number
  ShowDetail(
    row: TRow,
    detail_grid_id: string,
    test?: boolean | number,
  ): boolean | number
  ShowDialog(
    row: TRow,
    col: string,
    dialog: any,
    pos?: any,
    always?: boolean | number,
  ): TMenu
  ShowGanttCalendars(row: TRow, col: string, sort?: boolean | number): void
  ShowHint(
    row: TRow,
    col: string,
    staticArg?: boolean | number,
    test?: boolean | number,
  ): boolean | number
  ShowMenu(
    row: TRow,
    col: string,
    Menu: any,
    Pos?: any,
    Func?: Function,
    Init?: string,
    always?: boolean | number,
  ): TMenu
  ShowMessage(message: string, importance?: number, type?: number): void
  ShowMessageTime(
    message: string,
    time?: number,
    func?: Function,
    buttons?: string[],
    importance?: number,
  ): void
  ShowPages(): void
  ShowPopup(Menu: any, Func?: Function): TMenu
  ShowPopupGrid(
    row: TRow,
    col: string,
    data: string,
    width?: number,
    height?: number,
    Dialog?: any,
    Pos?: any,
  ): TGrid
  ShowProgress(
    caption: string,
    text: string,
    cancel: string,
    pos: number,
    cnt: number,
  ): void
  ShowRow(row: TRow, noshow?: boolean | number): void
  ShowSheet(name: string, hide: boolean | number): boolean | number
  ShowTip(tip: string): void
  ShowTreeLevel(level: number): void
  SortClick(col: string, desc?: boolean | number): void
  SortRow(row: TRow, col?: string, show?: boolean | number): void
  SortRows(): void
  SpanRange(row1: TRow, col1: string, row2: TRow, col2: string): void
  SplitSpanned(row: TRow, col: string): void
  StartEdit(
    row?: TRow,
    col?: string,
    empty?: boolean | number,
    test?: boolean | number,
  ): boolean | number
  StartUndo(): void
  StartUpdate(): void
  SwitchPivotGrid(pivot: boolean | number): void
  TestCellWidth(row: TRow, col: string): number
  TestDependencies(
    Dependencies: any,
    noalert?: boolean | number,
  ): boolean | number
  Translate(row: TRow, col: string, text: string, type?: string): string
  Update(): boolean | number
  UpdateGanttPage(col?: string): number[]
  UpdateHeights(always?: number): boolean | number
  UpdateLangFormat(): void
  UpdateLimitScroll(noupdate?: boolean | number): void
  UpdatePager(): void
  UpdatePos(): void
  UpdateRowHeight(row: TRow, callUpdate?: boolean | number): boolean | number
  UploadChanges(row?: TRow, Func?: Function): void
  ZoomTo(start: Date, end: Date, width?: number): boolean | number

  readonly ACol: string
  readonly AllColsSelected: boolean | number
  readonly AllSelected: boolean | number
  readonly ARow: TRow
  AutoId: number
  readonly Body: TRow
  readonly Calendars: any
  CellRanges: any
  readonly ColNames: string[][]
  readonly Cols: TCols
  Component: any
  readonly Def: TRow[]
  readonly ECol: string
  readonly EditMode: boolean | number
  readonly ERow: TRow
  readonly FCol: string
  readonly Filter: TRow
  readonly FilterCount: number
  readonly Foot: TRow
  readonly FPagePos: number
  readonly FRect: any[]
  readonly FRow: TRow
  readonly GanttUpdate: boolean | number
  readonly Head: TRow
  readonly Header: TRow
  readonly id: string
  readonly Index: number
  readonly IO: any
  readonly Lang: any
  readonly LoadedCount: number
  Loading: boolean | number
  readonly Media: any
  readonly MenuCfg: any
  readonly MenuExport: any
  readonly MenuPrint: any
  readonly MainTag: any
  readonly NestedGrid: boolean | number
  readonly Pager: any
  readonly Pagers: any
  readonly RemovedColPages: any
  readonly RemovedPages: TRow
  Rendering: boolean | number
  readonly Resources: any
  readonly RowCount: number
  readonly Rows: TRow[]
  readonly SearchCount: number
  Source: any
  readonly Solid: TRow
  readonly Toolbar: TRow
  readonly Touched: number

  ActionAcceptEdit: TAction
  ActionAddCol: TAction
  ActionAddColEnd: TAction
  ActionAddColNext: TAction
  ActionAddCols: TAction
  ActionAddColsNext: TAction
  ActionAddGanttRunContainer: TAction
  ActionAddChild: TAction
  ActionAddChildEnd: TAction
  ActionAddRow: TAction
  ActionAddRowBelow: TAction
  ActionAddRowEnd: TAction
  ActionAddRows: TAction
  ActionAddRowsBelow: TAction
  ActionAddSelected: TAction
  ActionAddSelectedBelow: TAction
  ActionAddSheet: TAction
  ActionAlignCenter: TAction
  ActionAlignLeft: TAction
  ActionAlignRight: TAction
  ActionAssignImage: TAction
  ActionAutoColSpan: TAction
  ActionAutoRowSpan: TAction
  ActionAutoSpan: TAction
  ActionAutoSpanRow: TAction
  ActionAutoSpanCol: TAction
  ActionBlur: TAction
  ActionBlurFocused: TAction
  ActionBoldOff: TAction
  ActionBoldOn: TAction
  ActionButton: TAction
  ActionButtonClick: TAction
  ActionButtonDown: TAction
  ActionButtonUp: TAction
  ActionCalcOff: TAction
  ActionCalcOn: TAction
  ActionCancelEdit: TAction
  ActionCancelLink: TAction
  ActionCancelLinkEdit: TAction
  ActionChangeBool: TAction
  ActionChangeFocus: TAction
  ActionChangeFocusCol: TAction
  ActionChangeFocusRow: TAction
  ActionChangeRadio: TAction
  ActionChangeRadioLeft: TAction
  ActionChangeRadioLeftCycle: TAction
  ActionChangeRadioRight: TAction
  ActionChangeRadioRightCycle: TAction
  ActionChangeWinScroll: TAction
  ActionCheckBool: TAction
  ActionCheckIcon: TAction
  ActionChooseBorder: TAction
  ActionChooseBorderColor: TAction
  ActionChooseBorderEdge: TAction
  ActionChooseBorderStyle: TAction
  ActionChooseCellInsert: TAction
  ActionChooseCellReplace: TAction
  ActionChooseCellReplaceAll: TAction
  ActionChooseCellsInsert: TAction
  ActionChooseCellsReplace: TAction
  ActionChooseCellsReplaceAll: TAction
  ActionChooseColInsert: TAction
  ActionChooseColor: TAction
  ActionChooseColReplace: TAction
  ActionChooseColReplaceAll: TAction
  ActionChooseColsInsert: TAction
  ActionChooseColsReplace: TAction
  ActionChooseColsReplaceAll: TAction
  ActionChooseFormat: TAction
  ActionChooseGanttFlagIcon: TAction
  ActionChooseGanttRunContainer: TAction
  ActionChooseGanttRunGroupAllType: TAction
  ActionChooseGanttRunGroupType: TAction
  ActionChooseGanttRunRowType: TAction
  ActionChooseGanttRunSelectedType: TAction
  ActionChooseGanttRunType: TAction
  ActionChooseIndent: TAction
  ActionChoosePattern: TAction
  ActionChoosePatternColor: TAction
  ActionChooseRowInsert: TAction
  ActionChooseRowReplace: TAction
  ActionChooseRowReplaceAll: TAction
  ActionChooseRowsInsert: TAction
  ActionChooseRowsReplace: TAction
  ActionChooseRowsReplaceAll: TAction
  ActionChooseTextColor: TAction
  ActionChooseTextFont: TAction
  ActionChooseTextShadow: TAction
  ActionChooseTextShadowColor: TAction
  ActionChooseTextSize: TAction
  ActionClearAll: TAction
  ActionClearAllStyles: TAction
  ActionClearAllValues: TAction
  ActionClearBool: TAction
  ActionClearBorder: TAction
  ActionClearBorderBottom: TAction
  ActionClearBorderLeft: TAction
  ActionClearBorderRight: TAction
  ActionClearBorderTop: TAction
  ActionClearCell: TAction
  ActionClearDetail: TAction
  ActionClearEditable: TAction
  ActionClearFilter: TAction
  ActionClearFilters: TAction
  ActionClearLink: TAction
  ActionClearSelection: TAction
  ActionClearStyle: TAction
  ActionClearUndo: TAction
  ActionClearValue: TAction
  ActionClearValueStyle: TAction
  ActionCloseDialog: TAction
  ActionColCopy: TAction
  ActionColCopySelected: TAction
  ActionCollapse: TAction
  ActionCollapseAll: TAction
  ActionCollapseAllCells: TAction
  ActionCollapseAllRoot: TAction
  ActionCollapseCol: TAction
  ActionCollapseRow: TAction
  ActionCollapseRowCells: TAction
  ActionColMove: TAction
  ActionColMoveSelected: TAction
  ActionColResize: TAction
  ActionCopy: TAction
  ActionCopyCol: TAction
  ActionCopyColNext: TAction
  ActionCopyCols: TAction
  ActionCopyColsNext: TAction
  ActionCopyEmpty: TAction
  ActionCopyEmptyBelow: TAction
  ActionCopyFocus: TAction
  ActionCopyFocusStyles: TAction
  ActionCopyFocusValues: TAction
  ActionCopyImage: TAction
  ActionCopyMenu: TAction
  ActionCopyRow: TAction
  ActionCopyRowBelow: TAction
  ActionCopyRows: TAction
  ActionCopyRowsBelow: TAction
  ActionCopyRowsEmpty: TAction
  ActionCopyRowsEmptyBelow: TAction
  ActionCopyRowsTree: TAction
  ActionCopyRowsTreeBelow: TAction
  ActionCopysCol: TAction
  ActionCopysColNext: TAction
  ActionCopySelected: TAction
  ActionCopySelectedCols: TAction
  ActionCopySelectedColsNext: TAction
  ActionCopySelectedEmpty: TAction
  ActionCopySelectedEmptyEnd: TAction
  ActionCopySelectedEmptyChild: TAction
  ActionCopySelectedEmptyChildEnd: TAction
  ActionCopySelectedEnd: TAction
  ActionCopySelectedChild: TAction
  ActionCopySelectedChildEnd: TAction
  ActionCopySelectedTree: TAction
  ActionCopySelectedTreeEnd: TAction
  ActionCopySelectedTreeChild: TAction
  ActionCopySelectedTreeChildEnd: TAction
  ActionCopyTree: TAction
  ActionCopyTreeBelow: TAction
  ActionCopyXYImage: TAction
  ActionCorrectAllDependencies: TAction
  ActionCorrectDependencies: TAction
  ActionCreateGanttBar: TAction
  ActionCreateGanttFlow: TAction
  ActionCreateGanttMain: TAction
  ActionCreateGanttRun: TAction
  ActionCropImage: TAction
  ActionCursorDefault: TAction
  ActionCursorDrag: TAction
  ActionCursorMove: TAction
  ActionCursorPointer: TAction
  ActionCursorResize: TAction
  ActionCursorResizeGrid: TAction
  ActionCursorText: TAction
  ActionDebugUndo: TAction
  ActionDecreaseTextSize: TAction
  ActionDefaultFormula: TAction
  ActionDefaultSort: TAction
  ActionDefineName: TAction
  ActionDefineGlobalName: TAction
  ActionDeleteCol: TAction
  ActionDeleteCols: TAction
  ActionDeleteGanttAll: TAction
  ActionDeleteGanttBase: TAction
  ActionDeleteGanttConstraint: TAction
  ActionDeleteGanttConstraints: TAction
  ActionDeleteGanttDependencies: TAction
  ActionDeleteGanttDependency: TAction
  ActionDeleteGanttFinish: TAction
  ActionDeleteGanttFlag: TAction
  ActionDeleteGanttFlow: TAction
  ActionDeleteGanttMain: TAction
  ActionDeleteGanttPoint: TAction
  ActionDeleteGanttRun: TAction
  ActionDeleteGanttRunAll: TAction
  ActionDeleteGanttRunContainer: TAction
  ActionDeleteGanttRunContainerOnly: TAction
  ActionDeleteGanttRunGroup: TAction
  ActionDeleteGanttRunGroupAll: TAction
  ActionDeleteGanttRunSelected: TAction
  ActionDeleteImage: TAction
  ActionDeleteName: TAction
  ActionDeleteRow: TAction
  ActionDeleteRows: TAction
  ActionDeleteSelected: TAction
  ActionDeleteSelectedCols: TAction
  ActionDeleteTag: TAction
  ActionDeselectAll: TAction
  ActionDeselectAllCells: TAction
  ActionDeselectAllCols: TAction
  ActionDeselectCell: TAction
  ActionDeselectCellRange: TAction
  ActionDeselectCells: TAction
  ActionDeselectCol: TAction
  ActionDeselectColCells: TAction
  ActionDeselectColRange: TAction
  ActionDeselectCols: TAction
  ActionDeselectFocusedCols: TAction
  ActionDeselectFocusedRows: TAction
  ActionDeselectGanttRunAll: TAction
  ActionDeselectOddCols: TAction
  ActionDeselectOddRows: TAction
  ActionDeselectRow: TAction
  ActionDeselectRowCells: TAction
  ActionDeselectRowRange: TAction
  ActionDeselectRows: TAction
  ActionDisableGanttMain: TAction
  ActionDisableGanttRun: TAction
  ActionDragCell: TAction
  ActionDragCopy: TAction
  ActionDragCopyChildren: TAction
  ActionDragFocused: TAction
  ActionDragFocusedCopy: TAction
  ActionDragFocusedCopyChildren: TAction
  ActionDragGantt: TAction
  ActionDragGanttDependency: TAction
  ActionDragGanttMove: TAction
  ActionDragGanttNew: TAction
  ActionDragGanttResize: TAction
  ActionDragImage: TAction
  ActionDragImageClear: TAction
  ActionDragImageCopy: TAction
  ActionDragImageCopyXY: TAction
  ActionDragImageCrop: TAction
  ActionDragImageMove: TAction
  ActionDragImageMoveXY: TAction
  ActionDragImageNone: TAction
  ActionDragImageResize: TAction
  ActionDragImageResizeFree: TAction
  ActionDragImageResizeXY: TAction
  ActionDragImageRotate: TAction
  ActionDragRow: TAction
  ActionDragSelected: TAction
  ActionDragSelectedCopy: TAction
  ActionDragSelectedCopyChildren: TAction
  ActionDropColMove: TAction
  ActionDuplicateImage: TAction
  ActionEditGanttDependencyLag: TAction
  ActionEditGanttFlag: TAction
  ActionEditGanttFlowPercent: TAction
  ActionEditGanttFlowText: TAction
  ActionEditGanttPercent: TAction
  ActionEditGanttResource: TAction
  ActionEditGanttRun: TAction
  ActionEditGanttRunPercent: TAction
  ActionEditGanttRunText: TAction
  ActionEditGanttRunTip: TAction
  ActionEditGanttText: TAction
  ActionEditName: TAction
  ActionEnterImageName: TAction
  ActionEnterImageOpacity: TAction
  ActionExclude: TAction
  ActionExpand: TAction
  ActionExpandAll: TAction
  ActionExpandAllCells: TAction
  ActionExpandCell: TAction
  ActionExpandCol: TAction
  ActionExpandRow: TAction
  ActionExpandRowCells: TAction
  ActionExport: TAction
  ActionExportPDF: TAction
  ActionFillCells: TAction
  ActionFillCol: TAction
  ActionFillRow: TAction
  ActionFilterBy: TAction
  ActionFilterByMenu: TAction
  ActionFilterByMenuRow: TAction
  ActionFilterOff: TAction
  ActionFilterOn: TAction
  ActionFixAbove: TAction
  ActionFixBelow: TAction
  ActionFixNext: TAction
  ActionFixPrev: TAction
  ActionFloatImage: TAction
  ActionFocus: TAction
  ActionFocusAndEdit: TAction
  ActionFocusCellRange: TAction
  ActionFocusCells: TAction
  ActionFocusCol: TAction
  ActionFocusColRange: TAction
  ActionFocusCols: TAction
  ActionFocusDown: TAction
  ActionFocusEdit: TAction
  ActionFocusFillCells: TAction
  ActionFocusFillCol: TAction
  ActionFocusFillRow: TAction
  ActionFocusFillRowCol: TAction
  ActionFocusLeft: TAction
  ActionFocusRight: TAction
  ActionFocusRow: TAction
  ActionFocusRowCol: TAction
  ActionFocusRowRange: TAction
  ActionFocusRows: TAction
  ActionFocusUp: TAction
  ActionFocusWholeCol: TAction
  ActionFocusWholeGrid: TAction
  ActionFocusWholeRow: TAction
  ActionGanttMenu: TAction
  ActionGoDown: TAction
  ActionGoDownAdd: TAction
  ActionGoDownEdit: TAction
  ActionGoDownEditAdd: TAction
  ActionGoFirst: TAction
  ActionGoLast: TAction
  ActionGoLeft: TAction
  ActionGoLeftEdit: TAction
  ActionGoRight: TAction
  ActionGoRightEdit: TAction
  ActionGoUp: TAction
  ActionGoUpEdit: TAction
  ActionGridResize: TAction
  ActionGridResizeDefault: TAction
  ActionGroupBy: TAction
  ActionGroupByLast: TAction
  ActionGroupOff: TAction
  ActionGroupOn: TAction
  ActionHideCols: TAction
  ActionHideFormula: TAction
  ActionHideRows: TAction
  ActionHideSheet: TAction
  ActionIconClick: TAction
  ActionImport: TAction
  ActionIncreaseTextSize: TAction
  ActionIndent: TAction
  ActionIndentCols: TAction
  ActionIndentColsForce: TAction
  ActionInvertAll: TAction
  ActionInvertCellRangeFirst: TAction
  ActionInvertCellsFirst: TAction
  ActionInvertColRangeFirst: TAction
  ActionInvertColsFirst: TAction
  ActionInvertFocusedColsFirst: TAction
  ActionInvertFocusedRowsFirst: TAction
  ActionInvertOddCols: TAction
  ActionInvertOddRows: TAction
  ActionInvertRowRangeFirst: TAction
  ActionInvertRowsFirst: TAction
  ActionItalicOff: TAction
  ActionItalicOn: TAction
  ActionJoinAdjacentGanttRun: TAction
  ActionJoinSelectedGanttRun: TAction
  ActionLock: TAction
  ActionLock0: TAction
  ActionLock1: TAction
  ActionLock2: TAction
  ActionLock3: TAction
  ActionLockGanttMain: TAction
  ActionLockGanttRun: TAction
  ActionLowerCase: TAction
  ActionMoveFocus: TAction
  ActionMoveFocusStyles: TAction
  ActionMoveFocusValues: TAction
  ActionMoveGanttBase: TAction
  ActionMoveGanttConstraint: TAction
  ActionMoveGanttFinish: TAction
  ActionMoveGanttFlag: TAction
  ActionMoveGanttFlow: TAction
  ActionMoveGanttLine: TAction
  ActionMoveGanttMain: TAction
  ActionMoveGanttMainAll: TAction
  ActionMoveGanttMainFirst: TAction
  ActionMoveGanttPoint: TAction
  ActionMoveGanttRun: TAction
  ActionMoveImage: TAction
  ActionMoveXYImage: TAction
  ActionNewGanttConstraint: TAction
  ActionNewGanttEndMilestone: TAction
  ActionNewGanttFlag: TAction
  ActionNewGanttFlowEndMilestone: TAction
  ActionNewGanttFlowMilestone: TAction
  ActionNewGanttMilestone: TAction
  ActionNewGanttPoint: TAction
  ActionNewGanttRunMilestone: TAction
  ActionNewGanttRunStop: TAction
  ActionNewGanttStartMilestone: TAction
  ActionNoAlign: TAction
  ActionNoColor: TAction
  ActionNoIndent: TAction
  ActionNoPattern: TAction
  ActionNoPatternColor: TAction
  ActionNoRotate: TAction
  ActionNoscript: TAction
  ActionNoSort: TAction
  ActionNoTextColor: TAction
  ActionNoTextFont: TAction
  ActionNoTextLine: TAction
  ActionNoTextShadow: TAction
  ActionNoTextShadowColor: TAction
  ActionNoTextSize: TAction
  ActionNoVertAlign: TAction
  ActionNoWrap: TAction
  ActionOnUngroup: TAction
  ActionOpenImage: TAction
  ActionOutdent: TAction
  ActionOutdentCols: TAction
  ActionOutdentColsForce: TAction
  ActionOverlineOff: TAction
  ActionOverlineOn: TAction
  ActionPageDown: TAction
  ActionPageDownFull: TAction
  ActionPageUp: TAction
  ActionPageUpFull: TAction
  ActionPaste: TAction
  ActionPinchZoomGantt: TAction
  ActionPrint: TAction
  ActionRedo: TAction
  ActionRedoAll: TAction
  ActionRefreshDetail: TAction
  ActionReload: TAction
  ActionReloadCfg: TAction
  ActionReloadSettings: TAction
  ActionRemoveCol: TAction
  ActionRemoveCols: TAction
  ActionRemoveGanttRun: TAction
  ActionRemoveGanttRunAll: TAction
  ActionRemoveGanttRunGroup: TAction
  ActionRemoveGanttRunGroupAll: TAction
  ActionRemoveRow: TAction
  ActionRemoveRows: TAction
  ActionRemoveSelected: TAction
  ActionRemoveSelectedCols: TAction
  ActionRenderPages: TAction
  ActionRepaint: TAction
  ActionResizeFreeImage: TAction
  ActionResizeGanttFlow: TAction
  ActionResizeGanttMain: TAction
  ActionResizeGanttRun: TAction
  ActionResizeImage: TAction
  ActionResizeXYImage: TAction
  ActionRestoreImage: TAction
  ActionRestoreImagePosition: TAction
  ActionRestoreImageRotation: TAction
  ActionRestoreImageSize: TAction
  ActionRotateImage: TAction
  ActionRotateLeft: TAction
  ActionRotateLeft30: TAction
  ActionRotateLeft45: TAction
  ActionRotateLeft60: TAction
  ActionRotateLeft90: TAction
  ActionRotateLeftVert: TAction
  ActionRotateRight: TAction
  ActionRotateRight30: TAction
  ActionRotateRight45: TAction
  ActionRotateRight60: TAction
  ActionRotateRight90: TAction
  ActionRotateRightVert: TAction
  ActionSave: TAction
  ActionScroll: TAction
  ActionScrollAuto: TAction
  ActionScrollHorz: TAction
  ActionScrollPager: TAction
  ActionScrollTouch: TAction
  ActionScrollVert: TAction
  ActionSearchOff: TAction
  ActionSearchOn: TAction
  ActionSectionResize: TAction
  ActionSelectAll: TAction
  ActionSelectAllCells: TAction
  ActionSelectAllCols: TAction
  ActionSelectCell: TAction
  ActionSelectCellRange: TAction
  ActionSelectCells: TAction
  ActionSelectCol: TAction
  ActionSelectColCells: TAction
  ActionSelectColRange: TAction
  ActionSelectCols: TAction
  ActionSelectFocusedCols: TAction
  ActionSelectFocusedRows: TAction
  ActionSelectGanttRun: TAction
  ActionSelectGanttRunContainer: TAction
  ActionSelectGanttRunRange: TAction
  ActionSelectGanttRunRect: TAction
  ActionSelectOddCols: TAction
  ActionSelectOddRows: TAction
  ActionSelectRow: TAction
  ActionSelectRowCells: TAction
  ActionSelectRowRange: TAction
  ActionSelectRows: TAction
  ActionSetBorder: TAction
  ActionSetBorderBottom: TAction
  ActionSetBorderIn: TAction
  ActionSetBorderInBottom: TAction
  ActionSetBorderInLeft: TAction
  ActionSetBorderInRight: TAction
  ActionSetBorderInTop: TAction
  ActionSetBorderLeft: TAction
  ActionSetBorderRight: TAction
  ActionSetBorderOut: TAction
  ActionSetBorderOutBottom: TAction
  ActionSetBorderOutLeft: TAction
  ActionSetBorderOutRight: TAction
  ActionSetBorderOutTop: TAction
  ActionSetBorderTop: TAction
  ActionSetCellAbsolute: TAction
  ActionSetCellRelative: TAction
  ActionSetColor: TAction
  ActionSetEditable: TAction
  ActionSetFormat: TAction
  ActionSetGanttFlowPercent: TAction
  ActionSetGanttPercent: TAction
  ActionSetGanttRunPercent: TAction
  ActionSetChecked: TAction
  ActionSetIndent: TAction
  ActionSetLink: TAction
  ActionSetPattern: TAction
  ActionSetPatternColor: TAction
  ActionSetPreview: TAction
  ActionSetReadOnly: TAction
  ActionSetTextColor: TAction
  ActionSetTextFont: TAction
  ActionSetTextLine: TAction
  ActionSetTextShadow: TAction
  ActionSetTextShadowColor: TAction
  ActionSetTextSize: TAction
  ActionShowCalendar: TAction
  ActionShowCellLink: TAction
  ActionShowCfg: TAction
  ActionShowColLeft: TAction
  ActionShowColRight: TAction
  ActionShowCols: TAction
  ActionShowColumns: TAction
  ActionShowColTreeLevel: TAction
  ActionShowDates: TAction
  ActionShowDefaults: TAction
  ActionShowDefaultsMenu: TAction
  ActionShowDetail: TAction
  ActionShowFile: TAction
  ActionShowFilterMenu: TAction
  ActionShowFilterMenuRow: TAction
  ActionShowFormula: TAction
  ActionShowHelp: TAction
  ActionShowHint: TAction
  ActionShowHintStatic: TAction
  ActionShowLink: TAction
  ActionShowMenu: TAction
  ActionShowNoMenu: TAction
  ActionShowPopupMenu: TAction
  ActionShowPopupMenuNoActions: TAction
  ActionShowRowAbove: TAction
  ActionShowRowBelow: TAction
  ActionShowRows: TAction
  ActionShowSheet: TAction
  ActionShowTreeLevel: TAction
  ActionSmallCapsOff: TAction
  ActionSmallCapsOn: TAction
  ActionSortAsc: TAction
  ActionSortAscAdd: TAction
  ActionSortAscAppend: TAction
  ActionSortAscOne: TAction
  ActionSortDesc: TAction
  ActionSortDescAdd: TAction
  ActionSortDescAppend: TAction
  ActionSortDescOne: TAction
  ActionSortOff: TAction
  ActionSortOn: TAction
  ActionSpan: TAction
  ActionSplitAdjacentGanttRun: TAction
  ActionSplit: TAction
  ActionSplitGanttFlow: TAction
  ActionSplitGanttMain: TAction
  ActionSplitGanttRun: TAction
  ActionSplitJoinedGanttRun: TAction
  ActionStartEdit: TAction
  ActionStartEditCell: TAction
  ActionStartEditCellAccept: TAction
  ActionStartEditCellEmpty: TAction
  ActionStartEditCellEmptyAccept: TAction
  ActionStartEditEmpty: TAction
  ActionStartEditEmptyDeleteTag: TAction
  ActionStrikeOff: TAction
  ActionStrikeOn: TAction
  ActionSubscript: TAction
  ActionSuperscript: TAction
  ActionSwitchCellAbsolute: TAction
  ActionSwitchRowColAbsolute: TAction
  ActionTabCopy: TAction
  ActionTabDelete: TAction
  ActionTabDown: TAction
  ActionTabDownEdit: TAction
  ActionTabLeft: TAction
  ActionTabLeftEdit: TAction
  ActionTabMove: TAction
  ActionTabRight: TAction
  ActionTabRightAdd: TAction
  ActionTabRightEdit: TAction
  ActionTabRightEditAdd: TAction
  ActionTabUp: TAction
  ActionTabUpEdit: TAction
  ActionTextImage: TAction
  ActionUndeleteCol: TAction
  ActionUndeleteCols: TAction
  ActionUndeleteRow: TAction
  ActionUndeleteRows: TAction
  ActionUndeleteSelected: TAction
  ActionUndeleteSelectedCols: TAction
  ActionUnderlineOff: TAction
  ActionUnderlineOn: TAction
  ActionUndo: TAction
  ActionUndoAll: TAction
  ActionUndoZoom: TAction
  ActionUngroupBy: TAction
  ActionUncheckBool: TAction
  ActionUncheckIcon: TAction
  ActionUpperCase: TAction
  ActionValidate: TAction
  ActionVertAlignBottom: TAction
  ActionVertAlignMiddle: TAction
  ActionVertAlignTop: TAction
  ActionWrapOff: TAction
  ActionWrapOn: TAction
  ActionZoomAll: TAction
  ActionZoomBar: TAction
  ActionZoomFit: TAction
  ActionZoomFitAll: TAction
  ActionZoomGantt: TAction
  ActionZoomHeader: TAction
  ActionZoomIn: TAction
  ActionZoomOut: TAction

  AbsoluteCursors: number
  AcceptEnters: number
  AcceptNaNTime: number
  AddColCellDef: boolean | number
  AddFocusCol: string
  AddFocusColEmpty: string
  Adding: boolean | number
  AllCols: boolean | number
  AllPages: boolean | number
  Alternate: number
  AlternateCount: number
  AlternateStart: number
  AlternateType: number
  AnimateCells: number
  AnimateCellsMax: number
  AnimateCols: number
  AnimateColsMax: number
  AnimateDialogs: number
  AnimateRows: number
  AnimateRowsColorMax: number
  AnimateRowsMax: number
  AnimateUndo: boolean | number
  AppendId: boolean | number
  AssignImg: string
  AutoCalendar: boolean | number
  AutoColPages: boolean | number
  AutoCols: number
  AutoFillType: number
  AutoHtml: boolean | number
  AutoIdPrefix: string
  AutoPages: boolean | number
  AutoRows: number
  AutoSort: boolean | number
  AutoSpan: number
  AutoTreeWidth: boolean | number
  AutoUpdate: boolean | number
  AutoVersion: boolean | number
  AutoWidths: string
  BaseUrl: string
  BoolChars: number
  BorderColors: string
  BorderCursors: number
  BorderIn: string
  BorderOut: string
  BorderType: number
  CacheTimeout: number
  CalcOrder: string
  Calculated: boolean | number
  CalculatedChanges: number | string
  CalculatedChangesFirst: string
  CalculateColumns: boolean | number
  CalculateHidden: boolean | number
  CalculateSelected: boolean | number
  CalendarsTitle: string
  CaseSensitiveId: boolean | number
  CenterMessage: number
  CfgId: string
  ClearFilterOff: boolean | number
  ClearSelected: number
  ColAdding: number
  ColCopying: number
  ColDeleting: boolean | number
  ColIndex: string
  ColIndexChars: string
  ColIndexStart: number
  ColIndexType: number
  Collapsed: string
  ColMoving: boolean | number
  ColorCursor: number
  ColorFilter: number
  ColorPanel: boolean | number
  ColorState: number
  ColPageLength: number
  ColPageMin: number
  ColPaging: number
  ColPagingFixed: boolean | number
  ColResizing: boolean | number
  ColTree: number
  ColTreeLap: boolean | number
  ColTreeLast: number
  ColsLap: boolean | number
  ColsPosLap: boolean | number
  ConstHeight: boolean | number
  ConstWidth: number
  Contrast: string
  Contrasts: string
  Cookie: string
  CopyCols: number
  CopyDeleted: boolean | number
  CopyEdit: number
  CopyFocused: number
  CopyFormulas: number
  Copying: boolean | number
  CopyPasteDeleted: number
  CopyPasteHidden: number
  CopyPasteInternal: number
  CopyPasteRows: number
  CopyPasteTree: number
  CopySelected: boolean | number
  CopyTime: number
  CSS: string
  CSVDateFormat: number | string
  CSVLevel: string
  CSVNumberFormat: number | string
  CSVQuote: string
  CSVRowSeparator: string
  CSVValueSeparator: string
  CustomHScroll: number
  CustomScroll: number
  DateFormat: string
  DateStrings: number | string
  DefaultBorder: boolean | number
  DefaultBorderColor: string
  DefaultCfg: number
  DefaultColor: string
  DefaultColors: string
  DefaultDate: string
  DefaultsAlphabetWhite: string
  DefaultSize: string
  DefaultSort: string
  DeleteMessage: number
  Deleting: boolean | number
  Detail: boolean | number
  DetailExpand: number
  DetailOn: number
  DetailRowsVisible: number
  DialogCSS: string
  DialogsArea: any
  DragCol: string
  DragCopy: boolean | number
  DragCopyId: boolean | number
  DragCursor: string
  DragEdit: boolean | number
  DragImg: string
  Dragging: boolean | number
  DragObject: number
  DropFiles: boolean | number
  DropFixed: boolean | number
  Dropping: number
  DuplicateId: number
  DynamicBorder: number
  DynamicEditing: number
  DynamicFormat: number
  DynamicSpan: number
  DynamicStyle: number
  EditAttrs: string
  EditAttrsEmpty: string
  EditAttrsStyle: string
  EditAttrsValue: string
  EditCursor: number
  EditCursorMouse: number
  EditCursorTouch: number
  EditCursorKey: number
  EditCursorTab: number
  EditDateFormat: string
  EditDateTimeFormat: string
  EditErrors: number
  EditErrorsMessageMax: number
  EditErrorsMessageTime: number
  EditHtml: number
  EditImg: string
  Editing: number
  EditNumberFormat: string
  EditSelect: number
  EditTimeFormat: string
  EnterMode: number
  EscapeImages: boolean | number
  ExactSize: boolean | number
  ExcelDates: boolean | number
  ExcelLang: string
  ExcludeClear: number
  ExpandAllLevels: number
  ExpandAllLoaded: boolean | number
  ExpandAllRender: number
  Expanded: string
  ExpandOnDrag: boolean | number
  ExportAlternate: number
  ExportBase64: boolean | number
  ExportBool: string
  ExportCols: number
  ExportCompression: number
  ExportEmptyDecimals: number
  ExportFontFace: string
  ExportFontSize: number
  ExportFormat: string
  ExportGrids: string
  ExportHeights: number
  ExportImages: string
  ExportLinks: string
  ExportLoad: number
  ExportName: string
  ExportOptions: string
  ExportPDFCols: number
  ExportPostfix: string
  ExportPrefix: string
  ExportRound: number
  ExportRowHeight: number
  ExportRows: number
  ExportSheet: string
  ExportTextShadow: string
  ExportTip: string
  ExportType: string
  ExportVarHeight: number
  ExportWidthRatio: number
  ExternalAlign: boolean | number
  ExternalFocus: string
  ExternalMaxRows: number
  ExternalMaxCols: number
  ExternalEdit: string
  FastColumns: boolean | number
  FastGantt: number
  FastMerge: boolean | number
  FastPages: number
  FastPanel: boolean | number
  Filtered: boolean | number
  FilterEmpty: boolean | number
  FilterHidden: boolean | number
  FilterHideParents: number
  FilterIgnoreEmpty: number
  FilterReplaceOne: string
  FilterReplaceMore: string
  Filtering: boolean | number
  FocusCellBorderCursor: number
  Focused: string
  FocusedCol: string
  FocusedLarge: number
  FocusedLeft: number
  FocusedPos: number
  FocusedRect: string
  FocusedTop: number
  FocusedType: number
  FocusRect: number
  FocusWholeRow: number
  Format: string
  Formats: TMenu
  FormulaAddParenthesis: boolean | number
  FormulaEditColors: string
  FormulaEditSheets: boolean | number
  FormulaCircular: number
  FormulaColorRanges: boolean | number
  FormulaEditing: number
  FormulaChanges: number
  FormulaLocal: boolean | number
  FormulaMaxIterations: number
  FormulaNames: number
  FormulaPlusNumbers: boolean | number
  FormulaRangeColors: string
  FormulaRelative: number
  FormulaResults: number
  FormulaShow: boolean | number
  FormulaTimeout: number
  FormulaTip: boolean | number
  FormulaType: number
  FullId: boolean | number
  GanttCSS: string
  GanttResourcesAdd: boolean | number
  GanttResourcesAvailability: string
  GanttResourcesGantt: string
  GanttResourcesChart: string
  GanttResourcesMaster: string
  GanttResourcesMaxCount: string
  GanttResourcesName: string
  GanttResourcesPrice: string
  GanttStyle: string
  GanttStyles: string
  GlobalCursor: boolean | number
  Group: string
  Grouped: boolean | number
  GroupChangeMoved: boolean | number
  GroupIdPrefix: string
  GroupIdValue: number
  GroupHideCols: boolean | number
  Grouping: boolean | number
  GroupMain: string
  GroupMoveFree: number
  GroupRestoreSort: boolean | number
  GroupSortMain: number
  GroupTree: number
  GroupTreeCol: string
  HelpFile: string
  HiddenRows: string
  HideEmptyTree: boolean | number
  HideHScroll: boolean | number
  HideMenuUnused: number
  HideParents: boolean | number
  HideRootTree: boolean | number
  HideTree: boolean | number
  HideZero: boolean | number
  Hover: number
  ChangesAdded: number
  ChangesUpdate: number
  ChildIdPrefix: string
  ChildPageDiff: number
  ChildPageLength: number
  ChildPaging: number
  ChildPartLength: number
  ChildPartMin: number
  ChildParts: boolean | number
  IdChars: string
  IdNames: string
  IdPostfix: string
  IdPrefix: string
  IESvg: string
  IgnoreFocused: boolean | number
  ImportAction: number
  ImportAdd: number
  ImportAttrs: string
  ImportColor: boolean | number
  ImportExt: string
  ImportFoot: number
  ImportHead: number
  ImportHeader: number
  ImportImg: string
  ImportLayout: string
  ImportLeftCols: number
  ImportLimitCells: number
  ImportLimitCols: number
  ImportLimitRows: number
  ImportRightCols: number
  ImportRows: number
  ImportPassword: number
  ImportTreeGrid: string
  ImportWidths: boolean | number
  Indent: string
  Indents: string
  IndentType: number
  IndexEnum: boolean | number
  InEditMode: number
  InitDef: boolean | number
  InsertImg: string
  InsertImgMaxHeight: number
  InsertImgMaxWidth: number
  JSZip: boolean | number
  KeepReload: string
  Language: string
  LanguagesColumns: number
  LastId: string
  LeftCanResize: number
  LeftScrollLeft: number
  LeftWidth: number
  LimitScroll: number
  LineHeightRatio: number
  LinkBase: string
  Locked: any
  LockedAlways: any
  LockedNever: any
  LockedValues: any
  LongClick: number
  MacContextMenu: boolean | number
  MainCol: string
  MainTagHeight: number
  MainTagWidth: number
  MasterDef: string
  MasterDefHide: string
  MaxColLevel: number
  MaxColPages: number
  MaxGroupLength: number
  MaxHeight: number
  MaxHeightParent: string
  MaxHeightPercent: boolean | number
  MaxHeightReserved: number
  MaxHScroll: number
  MaxChildParts: number
  MaxChildrenEmpty: boolean | number
  MaxMenuAllCells: number
  MaxMenuAllCellsValue: number
  MaxPages: number
  MaxSort: number
  MaxTagHeight: number
  MaxTagWidth: number
  MaxVScroll: number
  MaxWidth: boolean | number
  MediaChange: number
  MediaTag: string
  MediaAttrs: string
  Menu: string
  MenuColumnsCount: number
  MenuColumnsSort: boolean | number
  MessageWidth: number
  MidWidth: number
  MinBodyRows: number
  MinLeftWidth: number
  MinMidWidth: number
  MinRightWidth: number
  MinRowHeight: number
  MinSpaceRowHeight: number
  MinTagHeight: number
  MinTagWidth: number
  MomentumScroll: number
  MoveFocusType: number
  MoveMessage: boolean | number
  NameCol: string
  NestedFocusedActions: boolean | number
  NoDateNumber: number
  NoDragCursor: string
  NoDragIcon: boolean | number
  NoExportFunc: string
  NoFormatEscape: boolean | number
  NoHScroll: boolean | number
  NoPager: boolean | number
  NoPrintTreeLines: boolean | number
  NoScroll: boolean | number
  NoScrollAfterExpand: boolean | number
  NoTreeLines: boolean | number
  NoVScroll: boolean | number
  NoWrapBR: boolean | number
  NumberFormat: string
  NumberId: number
  OnePage: number
  OnPageAdded: void
  OnRemoveAutoPage: boolean | number
  Overlay: number
  OverlayImg: number
  PageLength: number
  PageLengthDiv: number
  PageTime: number
  PageWindowAdd: number
  Paging: number
  PasteCols: number
  PasteErrors: number
  PasteFocused: number
  PasteNaN: number
  PasteSelected: boolean | number
  PasteTree: number
  Pasting: boolean | number
  PDFFitPage: number
  PDFFormat: number
  PDFName: string
  PDFPageOrientaion: number
  PDFPageSize: number
  PDFText: number
  PersistentCfg: number
  PivotCols: string
  PivotControlMaster: boolean | number
  PivotData: string
  PivotExpanded: number | string
  PivotFilter: number
  PivotFunc: string
  PivotMaster: string
  PivotMaxCols: number
  PivotRows: string
  PivotShowParent: boolean | number
  PivotSumFormat: string
  PivotUpdate: number
  PositionFixed: boolean | number
  Prepared: boolean | number
  PreserveReload: number
  PrintAddCSS: string
  PrintAllCSS: boolean | number
  PrintCols: number
  PrintConstWidth: number
  PrintCount: number
  PrintCSS: string
  PrintDefaultDPI: number
  PrintDPI: number
  PrintExpanded: boolean | number
  PrintFiltered: boolean | number
  PrintFromPage: number
  PrintGanttBackground: number
  PrintGanttRowHeight: number
  PrintGanttSplit: boolean | number
  PrintGanttSplitMin: boolean | number
  PrintGrids: string
  PrintHead: string
  PrintCheckboxes: boolean | number
  PrintIcons: boolean | number
  PrintLoad: number
  PrintLocation: number
  PrintMarginDiv: number
  PrintMarginHeight: number
  PrintMarginWidth: number
  PrintMinDPI: number
  PrintOnlyData: boolean | number
  PrintPaddingHeight: number
  PrintPaddingHeightFirst: number
  PrintPaddingHeightLast: number
  PrintPaddingWidth: number
  PrintPageBreaks: boolean | number
  PrintPageHeight: number
  PrintPageOrientation: number
  PrintPagePostfix: number
  PrintPagePrefix: number
  PrintPageRoot: boolean | number
  PrintPageRootMin: number
  PrintPageSize: number
  PrintPageWidth: number
  PrintPostfix: string
  PrintPrefix: string
  PrintPrint: number
  PrintRows: number
  PrintSelected: boolean | number
  PrintSplitRowSpan: boolean | number
  PrintToPage: number
  PrintVarHeight: number
  PrintVisible: boolean | number
  PrintWindowProp: string
  PrintZoomFit: number
  Protected: boolean | number
  ReCalc: boolean | number
  ReloadChanged: number
  RemoveAutoColPages: number
  RemoveAutoPages: number
  RemoveCollapsed: number
  RemoveChanged: number
  RemoveUnusedFixed: number
  RemoveUnusedPages: number
  Reset: number
  ResetNextBorder: boolean | number
  Resizing: boolean | number
  ResizingMain: number
  ReSort: boolean | number
  RestoreImg: string
  ReversedSortIcons: boolean | number
  ReversedTree: boolean | number
  RightCanResize: number
  RightScrollLeft: number
  RightWidth: number
  RootCount: number
  RotateStepsLeft: string
  RotateStepsRight: string
  RoundNumbers: number
  RoundNumbersDigits: number
  RoundVScroll: number
  RowIndex: string
  RowIndexChars: string
  RowIndexStart: number
  RowIndexType: number
  RowIndexWidth: number
  Rtl: boolean | number
  SafariCursors: boolean | number
  SafeCSS: boolean | number
  SaveAttrs: string
  SaveAttrsTrim: boolean | number
  SaveExpanded: number
  SaveFilters: boolean | number
  SaveOrder: number
  SaveSelected: boolean | number
  SaveSession: string
  SaveValues: boolean | number
  SaveVisible: number
  Scale: number
  ScaleMenu: number
  Scales: string
  ScrollAction: number
  ScrollColOnDrag: number
  ScrollLeft: number
  ScrollOnDrag: number
  ScrollParent: string
  ScrollTop: number
  SearchAction: string
  SearchAlertFound: number
  SearchCaseSensitive: boolean | number
  SearchCells: boolean | number
  SearchClass: boolean | number
  SearchCols: string
  SearchDateFormat: string
  SearchDefs: string
  Searched: boolean | number
  SearchExpand: boolean | number
  SearchExpression: string
  SearchFocused: number
  SearchHidden: boolean | number
  SearchCharCodes: string
  Searching: boolean | number
  SearchMaxMark: number
  SearchMethod: number
  SearchNotFound: number
  SearchNumbers: number
  SearchWhiteChars: string
  SectionResizing: number
  SectionShrinkOrder: string
  SelectAllType: number
  SelectClass: boolean | number
  SelectClassRow: boolean | number
  SelectHidden: number
  Selecting: boolean | number
  SelectingCells: number
  SelectingCols: number
  SelectingFocus: number
  SelectingSingle: boolean | number
  SelectingText: boolean | number
  ShiftHint: boolean | number
  ShortHScroll: boolean | number
  ShortVScroll: boolean | number
  ShowButtons: number
  ShowDeleted: boolean | number
  ShowDrag: boolean | number
  ShowFocused: boolean | number
  ShowHScroll: boolean | number
  ShowMenuSingle: boolean | number
  ShowPrintPageBreaks: boolean | number
  ShowVScroll: boolean | number
  ShrinkStyle: number
  ShrinkStyleHeight: string
  ShrinkStyleScale: string
  ShrinkStyleType: number
  ShrinkStyleWidth: string
  Silent: boolean | number
  Size: string
  Sizes: string
  SizeScaled: boolean | number
  Sort: string
  Sorted: boolean | number
  SortIcons: number
  SortIconsNumbers: boolean | number
  Sorting: boolean | number
  SortRanges: number
  SpannedBorder: number
  SpannedTree: boolean | number
  StandardFilter: number
  StandardTip: boolean | number
  StaticCursor: boolean | number
  StoreOriginalValues: boolean | number
  Style: string
  StyleDependencyModifier: boolean | number
  Styles: string
  SuppressAnimations: boolean | number
  SuppressCfg: number
  SuppressMessage: number
  Sync: string
  SyncId: string
  SyncLanguage: string
  SyncStyle: boolean | number
  SynchroCount: number
  TabIndex: number
  TabStop: number
  TestIds: boolean | number
  TestIdSeparator: string
  TextColor: string
  TextColors: string
  TextFont: string
  TextFonts: string
  TextFormat: string
  TextShadow: number
  TextShadowColor: string
  TextShadowColors: string
  TextShadows: string
  TextSize: string
  TextSizes: string
  TipDialog: string
  TipEnd: number
  TipStart: number
  TouchClearFocused: number
  TouchDragFocused: number
  TouchDragFocusedDependency: number
  TouchScroll: number
  Undo: number
  UpCounter: string
  UpCounterType: number
  UpdateHeightsTimeout: number
  UseButton: number
  UseLanguages: string
  UsePrefix: boolean | number
  Validate: string
  ValidateMessage: string
  ValidateMessageTime: number
  ValidateText: string
  Version: number
  VisibleRows: string
  WheelFixed: number
  WideHScroll: boolean | number
  WordWrap: boolean | number
  ZIndex: number
}
type TGrid = TTGrid | null | undefined

// ------------------------------------------------- Global ----------------------------------------

interface TGridsApi {
  OnAfterColResize(
    grid: TGrid,
    col: string,
    row: TRow,
    chg: number,
  ): null | undefined | void
  OnAfterColumnsChanged(grid: TGrid): boolean | number | null | undefined | void
  OnAfterSave(
    grid: TGrid,
    result: number,
    autoupdate: boolean | number,
  ): null | undefined | void
  OnAfterSectionResize(grid: TGrid, section: number): null | undefined | void
  OnAfterSetStyle(
    grid: TGrid,
    Style: string,
    CSS: string,
    GanttCSS: string,
    GanttStyle: string,
  ): null | undefined | void
  OnAfterValueChanged(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
  ): null | undefined | void
  OnAssignImage(
    grid: TGrid,
    row: TRow,
    col: string,
    oldrow: TRow,
    oldcol: string,
    image: any,
  ): boolean | number | null | undefined | void
  OnAutoFill(
    grid: TGrid,
    r1: TRow,
    c1: string,
    r2: TRow,
    c2: string,
    rdir: boolean | number,
    cdir: boolean | number,
    ro: TRow,
    co: string,
  ): boolean | number | null | undefined | void
  OnAutoFillFinish(
    grid: TGrid,
    r1: TRow,
    c1: string,
    r2: TRow,
    c2: string,
    rdir: boolean | number,
    cdir: boolean | number,
    ro: TRow,
    co: string,
  ): null | undefined | void
  OnAutoFillValue(
    grid: TGrid,
    row: TRow,
    col: string,
    orow: TRow,
    ocol: string,
    val: any,
    prevval: any,
    rowpos: number,
    colpos: number,
    orow2: TRow,
    ocol2: string,
    oldval: any,
    attrvalues: any[],
    attrnames: string[],
    errors: any,
  ): any | null | undefined | void
  OnAutoFillValues(
    grid: TGrid,
    Values: any[],
    Rows: TRow[],
    Cols: string[],
    orcnt: number,
    occnt: number,
    rcnt: number,
    ccnt: number,
    rdir: boolean | number,
    cdir: boolean | number,
  ): boolean | number | null | undefined | void
  OnBlur(
    grid: TGrid,
    orow: TRow,
    ocol: string,
    orect: any[],
  ): null | undefined | void
  OnButtonClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
  ): boolean | number | null | undefined | void
  OnButtonListClick(
    grid: TGrid,
    row: TRow,
    col: string,
    item: string,
    index: number,
  ): null | undefined | void
  OnCalculate(
    grid: TGrid,
    show: boolean | number,
    row: TRow,
    col: string,
    fixedonly: boolean | number,
  ): boolean | number | null | undefined | void
  OnCalculateCell(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
    show: boolean | number,
    Calc: any,
  ): any | null | undefined | void
  OnCalculateFinish(
    grid: TGrid,
    show: boolean | number,
    row: TRow,
    col: string,
  ): null | undefined | void
  OnCanColDelete(
    grid: TGrid,
    col: string,
    type: number,
    cols: string[],
  ): boolean | number | null | undefined | void
  OnCanDrop(
    grid: TGrid,
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    type: number,
    copy: boolean | number,
    rows: TRow[],
  ): number | null | undefined | void
  OnCanEdit(
    grid: TGrid,
    row: TRow,
    col: string,
    mode: number,
  ): number | null | undefined | void
  OnCanEditDate(
    grid: TGrid,
    row: TRow,
    col: string,
    date: Date,
  ): boolean | number | null | undefined | void
  OnCanReload(
    grid: TGrid,
    changed: number,
    cancel: boolean | number,
  ): boolean | number | null | undefined | void
  OnCanRowAdd(
    grid: TGrid,
    parent: TRow,
    next: TRow,
  ): boolean | number | null | undefined | void
  OnCanRowDelete(
    grid: TGrid,
    row: TRow,
    type: number,
    rows: TRow[],
  ): number | null | undefined | void
  OnCanSelectGanttRun(
    grid: TGrid,
    row: TRow,
    col: string,
    run: any,
    index: number,
    select: boolean | number,
    container: string,
  ): boolean | number | null | undefined | void
  OnCfgChanged(
    grid: TGrid,
    Menu: TMenu,
    update: number,
  ): null | undefined | void
  OnCfgLoaded(grid: TGrid, cfg: string): null | undefined | void
  OnCfgSaved(grid: TGrid, cfg: string): null | undefined | void
  OnChangeDef(
    grid: TGrid,
    row: TRow,
    def: string,
  ): string | null | undefined | void
  OnChangeId(
    grid: TGrid,
    row: TRow,
    col: string,
    oldvalue: any,
  ): null | undefined | void
  OnChangeImage(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
    old: string,
  ): string | null | undefined | void
  OnChangeWinScroll(
    grid: TGrid,
    clear: boolean | number,
  ): boolean | number | null | undefined | void
  OnCheckDependencies(
    grid: TGrid,
    Dependency: any,
  ): boolean | number | null | undefined | void
  OnCheckGantt(
    grid: TGrid,
    row: TRow,
    col: string,
    newval: string,
  ): any | null | undefined | void
  OnClearChooseCells(
    grid: TGrid,
    row: TRow,
    col: string,
    selection: number,
    input: any,
    replace: number,
  ): number[] | null | undefined | void
  OnClearRow(grid: TGrid, row: TRow, col: string): null | undefined | void
  OnClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event,
  ): boolean | number | null | undefined | void
  OnClickPagerPage(
    Grid: TGrid,
    Pager: any,
    Page: any,
    Page2: any,
    Active: boolean | number,
  ): boolean | number | null | undefined | void
  OnCloseMenu(
    grid: TGrid,
    Menu: TMenu,
    source: any,
    options: any,
    saved: boolean | number,
  ): null | undefined | void
  OnColDelete(grid: TGrid, col: string): null | undefined | void
  OnColIndex(
    grid: TGrid,
    values: string[],
  ): boolean | number | null | undefined | void
  OnColMove(grid: TGrid, col: string, copy: string): null | undefined | void
  OnColPageAdded(grid: TGrid, pos: number): null | undefined | void
  OnColResize(grid: TGrid, col: string): null | undefined | void
  OnColShow(
    grid: TGrid,
    col: string,
    hide: boolean | number,
  ): boolean | number | null | undefined | void
  OnColUndelete(grid: TGrid, col: string): null | undefined | void
  OnColsAdd(
    grid: TGrid,
    cols: string[],
    tocol: string,
    right: boolean | number,
    empty: boolean | number,
  ): boolean | number | null | undefined | void
  OnColumnsChanged(
    grid: TGrid,
    cols: boolean | number[],
    count: number,
  ): boolean | number | null | undefined | void
  OnColumnsFinish(
    grid: TGrid,
    Menu: TMenu,
  ): boolean | number | null | undefined | void
  OnContextMenu(
    grid: TGrid,
    row: TRow,
    col: string,
    result: string,
  ): boolean | number | null | undefined | void
  OnCopy(grid: TGrid, txt: string): string | null | undefined | void
  OnCopyStart(grid: TGrid): boolean | number | null | undefined | void
  OnCorrectDependencies(
    grid: TGrid,
    A: any,
    R: TRow[],
    error: boolean | number,
    row: TRow,
    col: string,
    slack: boolean | number,
  ): boolean | number | null | undefined | void
  OnCorrectDependenciesFinish(
    grid: TGrid,
    A: any,
    deperr: boolean | number,
    consterr: boolean | number,
  ): boolean | number | null | undefined | void
  OnCorrectDependenciesStart(
    grid: TGrid,
    A: any,
  ): boolean | number | null | undefined | void
  OnCreateCPage(grid: TGrid, row: TRow): null | undefined | void
  OnCreateCfg(grid: TGrid): boolean | number | null | undefined | void
  OnCreateGroup(
    grid: TGrid,
    group: TRow,
    col: string,
    val: string,
  ): null | undefined | void
  OnCreateMenu(
    grid: TGrid,
    Menu: TMenu,
    source: any,
    options: any,
  ): boolean | number | null | undefined | void
  OnCustomAjax(
    grid: TGrid,
    source: any,
    data: string,
    Func: Function,
  ): boolean | number | null | undefined | void
  OnCustomEndEdit(
    grid: TGrid,
    row: TRow,
    col: string,
    save: boolean | number,
    custom: any,
  ): string | null | undefined | void
  OnCustomStartEdit(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
    cell: HTMLElement,
    width: number,
  ): any | null | undefined | void
  OnDataError(
    grid: TGrid,
    source: any,
    result: number,
    message: string,
    data: string,
  ): null | undefined | void
  OnDataGet(
    grid: TGrid,
    source: any,
    data: string,
    IO: any,
  ): string | null | undefined | void
  OnDataParse(
    grid: TGrid,
    source: any,
    data: string,
  ): string | null | undefined | void
  OnDataReceive(grid: TGrid, source: any): null | undefined | void
  OnDataSend(
    grid: TGrid,
    source: any,
    data: string,
    Func: Function,
  ): any | null | undefined | void
  OnDatesClose(
    grid: TGrid,
    dates: TGrid,
    saved: boolean | number,
  ): null | undefined | void
  OnDblClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event,
  ): boolean | number | null | undefined | void
  OnDebug(
    grid: TGrid,
    level: number,
    arguments: any[],
  ): boolean | number | null | undefined | void
  OnDeleteAll(
    grid: TGrid,
    type: number,
  ): boolean | number | null | undefined | void
  OnDisable(grid: TGrid): null | undefined | void
  OnDisplaceRow(grid: TGrid, row: TRow, col: string): null | undefined | void
  OnDisplayRow(grid: TGrid, row: TRow): null | undefined | void
  OnDownloadPage(
    grid: TGrid,
    row: TRow,
    func: Function,
  ): boolean | number | null | undefined | void
  OnDragGantt(
    grid: TGrid,
    row: TRow,
    col: string,
    name: string,
    start: number,
    end: number,
    oldstart: number,
    oldend: number,
    dir: number,
    XY: any,
    keyprefix: string,
    clientX: number,
    clientY: number,
  ): number | null | undefined | void
  OnDragGanttDependency(
    grid: TGrid,
    row: TRow,
    col: string,
    XYSrc: any,
    torow: TRow,
    XYDest: any,
    end: boolean | number,
    keyprefix: string,
    clientX: number,
    clientY: number,
  ): any | null | undefined | void
  OnDragGanttRun(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    newValue: number,
    old: number,
    change: number,
    dir: number,
    start: boolean | number,
    XY: any,
    keyprefix: string,
    clientX: number,
    clientY: number,
  ): number | null | undefined | void
  OnDropCols(
    grid: TGrid,
    row: TRow,
    col: string,
    value: string,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    topos: number,
    drop: boolean | number,
  ): number | null | undefined | void
  OnDropFile(
    grid: TGrid,
    row: TRow,
    col: string,
    files: any,
  ): boolean | number | null | undefined | void
  OnDropFileError(
    grid: TGrid,
    row: TRow,
    col: string,
    files: any,
  ): boolean | number | null | undefined | void
  OnEditAttrs(
    grid: TGrid,
    row: TRow,
    col: string,
    value: any,
    oldvalue: any,
    attrvalues: any[],
    attrnames: string[],
    errors: any,
  ): any | null | undefined | void
  OnEditErrors(
    grid: TGrid,
    errors: any,
  ): boolean | number | null | undefined | void
  OnEmptyCol(
    grid: TGrid,
    col: string,
  ): boolean | number | null | undefined | void
  OnEmptyRow(grid: TGrid, row: TRow): boolean | number | null | undefined | void
  OnEnable(grid: TGrid): null | undefined | void
  OnEndDrag(
    grid: TGrid,
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    type: number,
    X: number,
    Y: number,
    copy: boolean | number,
    rows: TRow[],
  ): number | null | undefined | void
  OnEndDragCell(
    grid: TGrid,
    row: TRow,
    col: string,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    X: number,
    Y: number,
  ): null | undefined | void
  OnEndDragGantt(
    grid: TGrid,
    row: TRow,
    col: string,
    name: string,
    start: number,
    end: number,
    oldstart: number,
    oldend: number,
    dir: number,
    XY: any,
    keyprefix: string,
    clientX: number,
    clientY: number,
  ): boolean | number | null | undefined | void
  OnEndDragGanttDependency(
    grid: TGrid,
    New: any,
    Old: any,
  ): boolean | number | null | undefined | void
  OnEndDragGanttRange(
    grid: TGrid,
    d1: number,
    d2: number,
    action: string,
  ): string | null | undefined | void
  OnEndDragGanttRun(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    run: any,
    type: number,
    dir: number,
    XY: any,
    keyprefix: string,
    clientX: number,
    clientY: number,
  ): boolean | number | null | undefined | void
  OnEndEdit(
    grid: TGrid,
    row: TRow,
    col: string,
    save: boolean | number,
    val: any,
    raw: string,
  ): any | null | undefined | void
  OnEndedDrag(
    grid: TGrid,
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    type: number,
    X: number,
    Y: number,
    copy: boolean | number,
    rows: TRow[],
  ): null | undefined | void
  OnExpand(grid: TGrid, row: TRow): boolean | number | null | undefined | void
  OnExpandAllFinish(
    grid: TGrid,
    cancelled: boolean | number,
  ): null | undefined | void
  OnExport(grid: TGrid, data: string, type: boolean | number): any
  OnExportCell(
    grid: TGrid,
    row: TRow,
    col: string,
    exrow: any,
    excol: string,
  ): null | undefined | void
  OnExportCol(grid: TGrid, column: TCol, excolumn: any): null | undefined | void
  OnExportInit(
    grid: TGrid,
    Cols: string[],
    Rows: string[],
    source: any,
  ): boolean | number | null | undefined | void
  OnExportRow(grid: TGrid, row: TRow, exrow: any): null | undefined | void
  OnExportStart(
    grid: TGrid,
    pdf: boolean | number,
  ): boolean | number | null | undefined | void
  OnFilter(
    grid: TGrid,
    type: number,
  ): boolean | number | null | undefined | void
  OnFilterFinish(grid: TGrid, type: number): null | undefined | void
  OnFindType(
    grid: TGrid,
    row: TRow,
    col: string,
    type: string,
    val: any,
    calc: boolean | number,
  ): string | null | undefined | void
  OnFocus(
    grid: TGrid,
    row: TRow,
    col: string,
    orow: TRow,
    ocol: string,
    pagepos: number,
    rect: any[],
    orect: any[],
  ): null | undefined | void
  OnFormula(
    grid: TGrid,
    row: TRow,
    col: string,
    value: any,
    oldvalue: any,
    formula: string,
    errors: any,
  ): any | null | undefined | void
  OnGanttChange(
    grid: TGrid,
    row: TRow,
    col: string,
    item: string,
    val: any,
    val2: any,
  ): boolean | number | null | undefined | void
  OnGanttChanged(
    grid: TGrid,
    row: TRow,
    col: string,
    item: string,
    val: any,
    val2: any,
  ): null | undefined | void
  OnGanttDragTip(
    grid: TGrid,
    row: TRow,
    col: string,
    tip: string,
    XY: any,
    dir: number,
    start: number,
    end: number,
    duration: number,
    x: number,
    y: number,
  ): string | null | undefined | void
  OnGanttEdit(
    grid: TGrid,
    row: TRow,
    col: string,
    edit: string,
  ): string | null | undefined | void
  OnGanttFlagMove(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    date: number,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    toindex: number,
    todate: number,
  ): boolean | number | null | undefined | void
  OnGanttFlagMoved(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    date: number,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    toindex: number,
    todate: number,
  ): null | undefined | void
  OnGanttLineChange(
    grid: TGrid,
    index: number,
    date1: number,
    date2: number,
    classArg: string,
    edit: boolean | number,
    odate1: number,
    odate2: number,
    oclass: string,
    oedit: boolean | number,
  ): boolean | number | null | undefined | void
  OnGanttLineChanged(
    grid: TGrid,
    index: number,
    date1: number,
    date2: number,
    classArg: string,
    edit: boolean | number,
    odate1: number,
    odate2: number,
    oclass: string,
    oedit: boolean | number,
  ): null | undefined | void
  OnGanttMainChange(
    row: TRow,
    col: string,
    plan: number,
    newValue: any,
    old: any,
    action: string,
  ): any | null | undefined | void
  OnGanttMainChanged(
    row: TRow,
    col: string,
    plan: number,
    newValue: any,
    old: any,
    action: string,
  ): null | undefined | void
  OnGanttMenu(
    grid: TGrid,
    row: TRow,
    col: string,
    Menu: TMenu,
    GanttXY: any,
  ): boolean | number | null | undefined | void
  OnGanttMenuClick(
    grid: TGrid,
    row: TRow,
    col: string,
    name: string,
    Item: TMenuItem,
    GanttXY: any,
  ): boolean | number | null | undefined | void
  OnGanttPage(
    grid: TGrid,
    col: string,
    left: number,
    width: number,
    dragrow: TRow,
    dragrun: any,
  ): boolean | number | null | undefined | void
  OnGanttRunBoxChanged(
    grid: TGrid,
    box: any,
    old: any,
  ): boolean | number | null | undefined | void
  OnGanttRunBoxNew(
    grid: TGrid,
    box: any,
  ): boolean | number | null | undefined | void
  OnGanttRunContainerChange(
    grid: TGrid,
    row: TRow,
    col: string,
    run: any,
    index: number,
    newcontainer: string[],
    oldcontainer: string[],
    source: TRow,
  ): boolean | number | null | undefined | void
  OnGanttRunDrop(
    grid: TGrid,
    row: TRow,
    col: string,
    drop: boolean | number,
    src: any,
    index: number,
    keyprefix: string,
    x: number,
    y: number,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    cellx: number,
    accept: boolean | number,
    celly: number,
    containers: string[],
  ): number | null | undefined | void
  OnGanttRunSelect(
    grid: TGrid,
    row: TRow,
    col: string,
    run: any,
    index: number,
    select: boolean | number,
    source: any,
  ): boolean | number | null | undefined | void
  OnGanttSlack(
    grid: TGrid,
    row: TRow,
    col: string,
    bar: string,
    value: number,
    old: number,
    show: boolean | number,
  ): number | null | undefined | void
  OnGanttStart(grid: TGrid): boolean | number | null | undefined | void
  OnGanttTip(
    grid: TGrid,
    row: TRow,
    col: string,
    tip: string,
    XY: any,
    name: string,
  ): string | null | undefined | void
  OnGenerateId(
    grid: TGrid,
    row: TRow,
    newid: string,
  ): string | null | undefined | void
  OnGetAvailability(
    grid: TGrid,
    row: TRow,
    col: string,
    value: number,
    src: string,
    Values: any[],
    start: number,
    end: number,
    min: number,
    max: number,
    group: string,
  ): boolean | number | null | undefined | void
  OnGetAvailabilityClass(
    grid: TGrid,
    row: TRow,
    col: string,
    value: number,
    src: string,
    cls: string,
    group: string,
  ): string | null | undefined | void
  OnGetBorder(
    grid: TGrid,
    row: TRow,
    col: string,
    border: any[],
    edge: number,
  ): any[] | null | undefined | void
  OnGetButtonList(
    grid: TGrid,
    row: TRow,
    col: string,
    list: string,
  ): string | null | undefined | void
  OnGetCalendarDate(
    grid: TGrid,
    row: TRow,
    col: string,
    date: Date,
    text: string,
    classes: string[],
    range: boolean | number,
  ): string | null | undefined | void
  OnGetCellStyle(
    grid: TGrid,
    row: TRow,
    col: string,
    attr: string,
    value: any,
  ): any | null | undefined | void
  OnGetClass(
    grid: TGrid,
    row: TRow,
    col: string,
    cls: string,
  ): string | null | undefined | void
  OnGetColor(
    grid: TGrid,
    row: TRow,
    col: string,
    r: number,
    g: number,
    b: number,
  ): string | null | undefined | void
  OnGetCopyValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
  ): any | null | undefined | void
  OnGetDefaultColor(
    grid: TGrid,
    row: TRow,
    col: string,
    r: number,
    g: number,
    b: number,
  ): number | null | undefined | void
  OnGetDefaults(
    grid: TGrid,
    row: TRow,
    col: string,
    defaults: string,
  ): string | null | undefined | void
  OnGetDependency(
    grid: TGrid,
    row: TRow,
    col: string,
    dep: any[],
    start: number,
    end: number,
    dur: number,
  ): null | undefined | void
  OnGetEditEnum(
    grid: TGrid,
    row: TRow,
    col: string,
    editenum: string,
  ): string | null | undefined | void
  OnGetEnum(
    grid: TGrid,
    row: TRow,
    col: string,
    enumeration: string,
  ): string | null | undefined | void
  OnGetEnumKeys(
    grid: TGrid,
    row: TRow,
    col: string,
    enumkeys: string,
  ): string | null | undefined | void
  OnGetEnumMenu(
    grid: TGrid,
    row: TRow,
    col: string,
    enummenu: string,
  ): string | null | undefined | void
  OnGetExportValue(
    grid: TGrid,
    row: TRow,
    col: string,
    str: string,
    format: string,
  ): string | null | undefined | void
  OnGetFilterValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
  ): any | null | undefined | void
  OnGetFilterValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
  ): string | null | undefined | void
  OnGetFormat(
    grid: TGrid,
    row: TRow,
    col: string,
    format: string,
    edit: boolean | number,
  ): string | null | undefined | void
  OnGetGanttFlagIcon(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    icon: string,
  ): string | null | undefined | void
  OnGetGanttFlagIconHover(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    icon: string,
  ): string | null | undefined | void
  OnGetGanttFlagText(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    text: string,
    exp: boolean | number,
  ): string | null | undefined | void
  OnGetGanttFlowHtml(
    grid: TGrid,
    row: TRow,
    col: string,
    index: number,
    width: number,
    comp: number,
    crit: number,
  ): string | null | undefined | void
  OnGetGanttFormat(
    grid: TGrid,
    row: TRow,
    col: string,
    text: string,
  ): string | null | undefined | void
  OnGetGanttHeader(
    grid: TGrid,
    val: string,
    index: number,
    date: number,
    nextdate: number,
    units: string,
    width: number,
    partial: number,
    col: string,
  ): string | null | undefined | void
  OnGetGanttHtml(
    grid: TGrid,
    row: TRow,
    col: string,
    width: number,
    comp: number,
    crit: number,
    plan: number,
    index: number,
    txt: string,
    left: number,
    maxwidth: number,
    cls: string[],
    exp: boolean | number,
  ): string | null | undefined | void
  OnGetGanttMenu(
    grid: TGrid,
    row: TRow,
    col: string,
    menu: string,
    GanttXY: any,
  ): string | null | undefined | void
  OnGetGanttRunClass(
    grid: TGrid,
    row: TRow,
    col: string,
    run: any,
    index: number,
    cls: string,
  ): string | null | undefined | void
  OnGetGanttRunContainer(
    grid: TGrid,
    row: TRow,
    col: string,
    run: any,
    id: string,
    Rect: number[],
    classArg: string,
    first: number,
    last: number,
    type: number,
    text: string,
  ): any | null | undefined | void
  OnGetGanttRunRect(
    grid: TGrid,
    row: TRow,
    col: string,
    run: any,
    index: number,
    Rect: number[],
    type: number,
  ): null | undefined | void
  OnGetGanttRunSideRect(
    grid: TGrid,
    row: TRow,
    col: string,
    run: any,
    index: number,
    Pos: number[],
    Rect: number[],
    side: number,
    exp: boolean | number,
  ): null | undefined | void
  OnGetGanttRunSideText(
    grid: TGrid,
    row: TRow,
    col: string,
    run: any,
    index: number,
    text: string,
    width: number,
    side: number,
    rect: number[],
    exp: boolean | number,
  ): string | null | undefined | void
  OnGetGanttRunText(
    grid: TGrid,
    row: TRow,
    col: string,
    run: any,
    index: number,
    text: string,
    width: number,
    left: number,
    maxwidth: number,
    cls: string[],
    exp: boolean | number,
  ): string | null | undefined | void
  OnGetGanttSideHtml(
    grid: TGrid,
    row: TRow,
    col: string,
    width: number,
    comp: number,
    crit: number,
    plan: number,
    index: number,
    txt: string,
    side: number,
    exp: boolean | number,
  ): string | null | undefined | void
  OnGetGroupDef(
    grid: TGrid,
    col: string,
    def: string,
  ): string | null | undefined | void
  OnGetHtmlValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
  ): any | null | undefined | void
  OnGetHtmlValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
  ): string | null | undefined | void
  OnGetInputValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
  ): string | null | undefined | void
  OnGetMenu(
    grid: TGrid,
    row: TRow,
    col: string,
    menu: string,
  ): string | null | undefined | void
  OnGetPageName(
    Grid: TGrid,
    Pager: any,
    Page: any,
    Name: string,
  ): string | null | undefined | void
  OnGetPageNameValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
  ): string | null | undefined | void
  OnGetPageNumber(grid: TGrid, number: number): string | null | undefined | void
  OnGetPageTip(
    Grid: TGrid,
    Pager: any,
    Page: any,
    Tip: string,
  ): string | null | undefined | void
  OnGetPagesCount(Grid: TGrid, Pager: any): number | null | undefined | void
  OnGetPivotValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
  ): string | null | undefined | void
  OnGetResourceUsageRow(
    grid: TGrid,
    row: TRow,
    use: boolean | number,
    def: string,
  ): any | null | undefined | void
  OnGetRowText(
    grid: TGrid,
    row: TRow,
    cols: string[],
    txt: string,
    sel: boolean | number,
  ): string | null | undefined | void
  OnGetSortValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
    desc: boolean | number,
    group: boolean | number,
  ): string | null | undefined | void
  OnGetSuggest(
    grid: TGrid,
    row: TRow,
    col: string,
    suggest: string,
    formula: boolean | number,
  ): string | null | undefined | void
  OnGetType(
    grid: TGrid,
    row: TRow,
    col: string,
    type: string,
  ): string | null | undefined | void
  OnGetUniqueGanttRunContainer(
    grid: TGrid,
    row: TRow,
    col: string,
    container: string,
  ): string | null | undefined | void
  OnGoToPage(
    grid: TGrid,
    page: TRow,
    pagepos: number,
  ): boolean | number | null | undefined | void
  OnGroup(
    grid: TGrid,
    Group: string,
  ): boolean | number | null | undefined | void
  OnGroupFinish(grid: TGrid): null | undefined | void
  OnHint(
    grid: TGrid,
    row: TRow,
    col: string,
    hint: string,
    reason: number,
  ): string | null | undefined | void
  OnIconClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
  ): boolean | number | null | undefined | void
  OnImportCell(
    grid: TGrid,
    imrow: any,
    imcol: string,
    row: any,
    col: string,
  ): null | undefined | void
  OnImportCopyCell(
    grid: TGrid,
    srcrow: any,
    srccol: string,
    row: any,
    col: string,
  ): null | undefined | void
  OnImportData(
    grid: TGrid,
    file: any,
    type: number,
  ): boolean | number | null | undefined | void
  OnImportDataError(
    grid: TGrid,
    error: any,
    file: any,
    buffer: any,
  ): boolean | number | null | undefined | void
  OnImportText(
    grid: TGrid,
    file: any,
    data: any,
    type: number,
  ): null | undefined | void
  OnImportedData(
    grid: TGrid,
    file: any,
    buffer: any,
    type: number,
  ): boolean | number | null | undefined | void
  OnIncDate(
    date: number,
    units: string,
    count: number,
  ): number | null | undefined | void
  OnInit(grid: TGrid): boolean | number | null | undefined | void
  OnKeyDown(
    grid: TGrid,
    key: string,
    event: Event,
    name: string,
    prefix: string,
  ): boolean | number | null | undefined | void
  OnKeyPress(
    grid: TGrid,
    key: string,
    event: Event,
    name: string,
    prefix: string,
  ): boolean | number | null | undefined | void
  OnKeyUp(
    grid: TGrid,
    key: string,
    event: Event,
    name: string,
    prefix: string,
  ): boolean | number | null | undefined | void
  OnLanguageFinish(
    grid: TGrid,
    code: string,
    sync: boolean | number,
  ): null | undefined | void
  OnLanguageSet(
    grid: TGrid,
    code: string,
    sync: boolean | number,
  ): null | undefined | void
  OnLimitScroll(
    grid: TGrid,
    clear: boolean | number,
    nohscroll: boolean | number,
    novscroll: boolean | number,
  ): number | null | undefined | void
  OnLinkClick(
    grid: TGrid,
    row: TRow,
    col: string,
    url: string,
    target: string,
  ): boolean | number | null | undefined | void
  OnLoadCfg(
    grid: TGrid,
    cfg: string,
  ): boolean | number | null | undefined | void
  OnLoadCustomCfg(
    grid: TGrid,
    custom: string,
    cfg: string,
  ): null | undefined | void
  OnLoadError(grid: TGrid): null | undefined | void
  OnLoadSheet(
    grid: TGrid,
    name: string,
    hidden: boolean | number,
  ): boolean | number | null | undefined | void
  OnLoaded(grid: TGrid, next: Function): null | undefined | void
  OnLock(grid: TGrid, lock: number): number | null | undefined | void
  OnLongClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event,
  ): boolean | number | null | undefined | void
  OnMediaApplied(
    grid: TGrid,
    changed: boolean | number,
    start: boolean | number,
  ): boolean | number | null | undefined | void
  OnMediaApply(
    grid: TGrid,
    start: boolean | number,
  ): boolean | number | null | undefined | void
  OnMediaInit(grid: TGrid, Media: any): null | undefined | void
  OnMediaUse(
    grid: TGrid,
    M: any,
    use: boolean | number,
  ): boolean | number | null | undefined | void
  OnMenu(
    grid: TGrid,
    row: TRow,
    col: string,
    menu: TMenu,
    position: TPosition,
  ): boolean | number | null | undefined | void
  OnMergeChanged(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
    result: string[],
  ): null | undefined | void
  OnMouseDown(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event,
  ): boolean | number | null | undefined | void
  OnMouseMove(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event,
  ): boolean | number | null | undefined | void
  OnMouseOver(
    grid: TGrid,
    row: TRow,
    col: string,
    orow: TRow,
    ocol: string,
    event: Event,
  ): null | undefined | void
  OnMouseUp(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event,
  ): boolean | number | null | undefined | void
  OnMoveDragCell(
    grid: TGrid,
    row: TRow,
    col: string,
    togrid: TGrid,
    torow: TRow,
    tocol: string,
    X: number,
    Y: number,
  ): boolean | number | null | undefined | void
  OnMoveFocus(
    grid: TGrid,
    rect: any[],
    orect: any[],
    Values: any[],
    Rows: TRow[],
    Cols: string[],
    SourceRows: TRow[],
    SourceCols: string[],
  ): any | null | undefined | void
  OnMoveFocusFinish(
    grid: TGrid,
    rect: any[],
    orect: any[],
    Values: any[],
    Rows: TRow[],
    Cols: string[],
    SourceRows: TRow[],
    SourceCols: string[],
  ): null | undefined | void
  OnMoveFocusValue(
    grid: TGrid,
    row: TRow,
    col: string,
    orow: TRow,
    ocol: string,
    value: any,
    oldvalue: any,
    attrvalues: any[],
    errors: string[],
  ): any | null | undefined | void
  OnOpenImage(
    grid: TGrid,
    row: TRow,
    col: string,
    images: any,
    replace: boolean | number,
    drop: boolean | number,
  ): boolean | number | null | undefined | void
  OnOpenImageCell(grid: TGrid, row: TRow, col: string): any
  OnPageReady(grid: TGrid, row: TRow): null | undefined | void
  OnPaste(
    grid: TGrid,
    pastedtext: string[],
    cols: string[],
  ): boolean | number | null | undefined | void
  OnPasteFinish(grid: TGrid): null | undefined | void
  OnPasteRow(
    grid: TGrid,
    row: TRow,
    cols: string[],
    values: string[],
    added: boolean | number,
  ): boolean | number | null | undefined | void
  OnPasteRowFinish(
    grid: TGrid,
    row: TRow,
    cols: string[],
    values: string[],
    added: boolean | number,
  ): null | undefined | void
  OnPasteValue(
    grid: TGrid,
    row: TRow,
    col: string,
    value: any,
    oldvalue: any,
    attrvalues: any[],
    attrnames: string[],
    errors: any,
  ): any | null | undefined | void
  OnPivot(
    Pivot: TGrid,
    Master: TGrid,
    Rows: string[],
    Cols: string[],
    Data: string[],
  ): boolean | number | null | undefined | void
  OnPivotFinish(
    Pivot: TGrid,
    Master: TGrid,
    Rows: string[],
    Cols: string[],
    Data: string[],
  ): boolean | number | null | undefined | void
  OnPivotFunc(
    grid: TGrid,
    id: string,
    col: string,
    master: TGrid,
    rows: TRow[],
    values: any[],
    result: any,
  ): any | null | undefined | void
  OnPrint(
    grid: TGrid,
    window: Window,
    report: string,
  ): string | null | undefined | void
  OnPrintClose(grid: TGrid, window: Window): null | undefined | void
  OnPrintEmpty(grid: TGrid): null | undefined | void
  OnPrintFinish(
    grid: TGrid,
    window: Window,
  ): boolean | number | null | undefined | void
  OnPrintInit(
    grid: TGrid,
    Cols: string[],
    Rows: string[],
  ): null | undefined | void
  OnPrintStart(grid: TGrid): boolean | number | null | undefined | void
  OnPrompt(grid: TGrid, text: string, defaultValue: string): any
  OnPromptFinish(
    grid: TGrid,
    text: string,
    defaultValue: string,
    result: string,
  ): any
  OnReadData(
    grid: TGrid,
    source: any,
    Func: Function,
  ): boolean | number | null | undefined | void
  OnReady(grid: TGrid, start: boolean | number): null | undefined | void
  OnRedo(grid: TGrid, action: string): null | undefined | void
  OnReload(grid: TGrid): boolean | number | null | undefined | void
  OnRemoveAutoColPage(
    grid: TGrid,
    cols: string[],
  ): boolean | number | null | undefined | void
  OnRemoveChanged(grid: TGrid, row: TRow): number | null | undefined | void
  OnRemoveCollapsed(grid: TGrid, row: TRow): null | undefined | void
  OnRemoveGroup(
    grid: TGrid,
    group: TRow,
    ungroup: boolean | number,
  ): null | undefined | void
  OnRemovePage(grid: TGrid, page: TRow): null | undefined | void
  OnRemovePage(grid: TGrid, row: TRow): null | undefined | void
  OnRenderChildPartFinish(
    grid: TGrid,
    row: TRow,
    index: number,
  ): null | undefined | void
  OnRenderChildPartStart(
    grid: TGrid,
    row: TRow,
    index: number,
  ): null | undefined | void
  OnRenderColPageFinish(grid: TGrid, sec: number): null | undefined | void
  OnRenderColPageStart(grid: TGrid, sec: number): null | undefined | void
  OnRenderFinish(grid: TGrid): null | undefined | void
  OnRenderPageFinish(grid: TGrid, row: TRow): null | undefined | void
  OnRenderPageStart(grid: TGrid, page: TRow): null | undefined | void
  OnRenderRow(grid: TGrid, row: TRow, col: string): null | undefined | void
  OnRenderStart(grid: TGrid): boolean | number | null | undefined | void
  OnResizeMain(grid: TGrid): null | undefined | void
  OnRestoreCfg(grid: TGrid): boolean | number | null | undefined | void
  OnResultMask(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
    errors: any,
  ): number | null | undefined | void
  OnRightClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event,
  ): boolean | number | null | undefined | void
  OnRightLongClick(
    grid: TGrid,
    row: TRow,
    col: string,
    x: number,
    y: number,
    event: Event,
  ): boolean | number | null | undefined | void
  OnRoundDate(date: number, units: string): number | null | undefined | void
  OnRowAdd(grid: TGrid, row: TRow): null | undefined | void
  OnRowAdded(grid: TGrid, row: TRow): null | undefined | void
  OnRowCopy(
    grid: TGrid,
    row: TRow,
    source: TRow,
    empty: boolean | number,
  ): null | undefined | void
  OnRowCopyDef(
    grid: TGrid,
    row: TRow,
    source: TRow,
    move: boolean | number,
  ): boolean | number | null | undefined | void
  OnRowCopyId(
    grid: TGrid,
    row: TRow,
    source: TRow,
    move: boolean | number,
  ): null | undefined | void
  OnRowCopyId(
    grid: TGrid,
    row: TRow,
    source: TRow,
    move: boolean | number,
  ): boolean | number | null | undefined | void
  OnRowDelete(grid: TGrid, row: TRow, type: number): null | undefined | void
  OnRowFilter(
    grid: TGrid,
    row: TRow,
    show: number,
  ): number | null | undefined | void
  OnRowIndex(
    grid: TGrid,
    values: string[],
  ): boolean | number | null | undefined | void
  OnRowMove(
    grid: TGrid,
    row: TRow,
    oldparent: TRow,
    oldnext: TRow,
  ): null | undefined | void
  OnRowMoveToGrid(
    grid: TGrid,
    row: TRow,
    togrid: TGrid,
    torow: TRow,
    copy: boolean | number,
  ): number | null | undefined | void
  OnRowRemove(
    grid: TGrid,
    row: TRow,
    type: number,
  ): boolean | number | null | undefined | void
  OnRowResize(
    grid: TGrid,
    row: TRow,
    newheight: number,
    oldheight: number,
  ): number | null | undefined | void
  OnRowSearch(
    grid: TGrid,
    row: TRow,
    col: string,
    found: boolean | number,
    func: Function,
    userdata: any,
  ): number | null | undefined | void
  OnRowUndelete(grid: TGrid, row: TRow): null | undefined | void
  OnSave(
    grid: TGrid,
    row: TRow,
    autoupdate: boolean | number,
  ): boolean | number | null | undefined | void
  OnSaveCfg(
    grid: TGrid,
    returnArg: boolean | number,
  ): boolean | number | null | undefined | void
  OnSaveCustomCfg(
    grid: TGrid,
    returnArg: boolean | number,
  ): string | null | undefined | void
  OnSaveMenu(
    grid: TGrid,
    Menu: TMenu,
    source: any,
    options: any,
  ): boolean | number | null | undefined | void
  OnScroll(
    grid: TGrid,
    hpos: number,
    vpos: number,
    oldhpos: number,
    oldvpos: number,
  ): null | undefined | void
  OnScrollCol(grid: TGrid, col: string): null | undefined | void
  OnScrollRow(grid: TGrid, row: TRow): null | undefined | void
  OnSearch(
    grid: TGrid,
    Action: string,
    Show: boolean | number,
  ): boolean | number | null | undefined | void
  OnSearchFinish(
    grid: TGrid,
    Action: string,
    Show: boolean | number,
  ): null | undefined | void
  OnSectionResize(
    grid: TGrid,
    section: number,
    dw: number,
  ): null | undefined | void
  OnSelect(
    grid: TGrid,
    row: TRow,
    deselect: boolean | number,
    Cols: string[],
    test: boolean | number,
  ): boolean | number | null | undefined | void
  OnSelectAll(
    grid: TGrid,
    select: number,
    type: number,
    test: boolean | number,
  ): boolean | number | null | undefined | void
  OnSelectGanttRunRect(
    grid: TGrid,
    r1: TRow,
    x1: number,
    y1: number,
    r2: TRow,
    x2: number,
    y2: number,
  ): boolean | number | null | undefined | void
  OnSelected(
    grid: TGrid,
    row: TRow,
    deselect: boolean | number,
    Cols: string[],
  ): boolean | number | null | undefined | void
  OnSelectedAll(
    grid: TGrid,
    select: number,
    type: number | number,
  ): boolean | number | null | undefined | void
  OnSetChooseCells(
    grid: TGrid,
    range: any,
    selection: number,
    input: any,
    text: string,
  ): string | null | undefined | void
  OnSetLink(
    grid: TGrid,
    cells: any,
    test: boolean | number,
  ): boolean | number | null | undefined | void
  OnSetFile(
    grid: TGrid,
    row: TRow,
    col: string,
    files: any,
  ): boolean | number | null | undefined | void
  OnSetInputValue(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
  ): string | null | undefined | void
  OnSetLanguage(
    grid: TGrid,
    code: string,
    sync: boolean | number,
  ): boolean | number | null | undefined | void
  OnSetPageName(grid: TGrid, page: TRow): null | undefined | void
  OnSetRowId(
    grid: TGrid,
    row: TRow,
    newid: string,
  ): string | null | undefined | void
  OnSetStyle(
    grid: TGrid,
    Style: string,
    CSS: string,
    GanttCSS: string,
    GanttStyle: string,
  ): boolean | number | null | undefined | void
  OnShowButtonList(
    grid: TGrid,
    row: TRow,
    col: string,
    Menu: TMenu,
    Pos: TPosition,
  ): null | undefined | void
  OnShowCfg(grid: TGrid, Menu: TMenu): null | undefined | void
  OnShowColumns(
    grid: TGrid,
    Menu: TMenu,
  ): boolean | number | null | undefined | void
  OnShowDefaults(
    grid: TGrid,
    row: TRow,
    col: string,
    Menu: TMenu,
    Pos: TPosition,
  ): string | null | undefined | void
  OnShowDetail(
    master: TGrid,
    detail: TGrid,
    row: TRow,
    old: TRow,
  ): boolean | number | null | undefined | void
  OnShowDetailFinish(
    master: TGrid,
    detail: TGrid,
    row: TRow,
  ): null | undefined | void
  OnShowMenu(
    grid: TGrid,
    Menu: TMenu,
    source: any,
    options: any,
  ): boolean | number | null | undefined | void
  OnShowMessage(grid: TGrid, message: HTMLElement): null | undefined | void
  OnShowNested(
    master: TGrid,
    row: TRow,
    detail: any,
    cell: any,
    id: string,
  ): boolean | number | null | undefined | void
  OnShowRow(
    grid: TGrid,
    row: TRow,
    hide: boolean | number,
  ): boolean | number | null | undefined | void
  OnSizeError(
    grid: TGrid,
    width: number,
    height: number,
  ): boolean | number | null | undefined | void
  OnSort(
    grid: TGrid,
    col: string,
    sort: string,
  ): number | null | undefined | void
  OnSortFinish(grid: TGrid): null | undefined | void
  OnStartDrag(
    grid: TGrid,
    row: TRow,
    col: string,
    more: boolean | number,
    copy: boolean | number,
    rows: TRow[],
  ): boolean | number | null | undefined | void
  OnStartDragCell(
    grid: TGrid,
    row: TRow,
    col: string,
    html: string,
  ): string | null | undefined | void
  OnStartDragGantt(
    grid: TGrid,
    row: TRow,
    col: string,
    name: string,
    start: number,
    end: number,
    dir: number,
    XY: any,
    keyprefix: string,
    clientX: number,
    clientY: number,
  ): boolean | number | null | undefined | void
  OnStartDragGanttDependency(
    grid: TGrid,
    row: TRow,
    col: string,
    XY: any,
    color: number,
    start: boolean | number,
    keyprefix: string,
    clientX: number,
    clientY: number,
  ): any | null | undefined | void
  OnStartEdit(
    grid: TGrid,
    row: TRow,
    col: string,
  ): boolean | number | null | undefined | void
  OnStartedEdit(
    grid: TGrid,
    row: TRow,
    col: string,
    input: any,
  ): null | undefined | void
  OnSuggest(
    grid: TGrid,
    row: TRow,
    col: string,
    val: string,
    suggest: TMenu,
    formula: boolean | number,
  ): string | null | undefined | void
  OnTabDelete(
    grid: TGrid,
    row: TRow,
    col: string,
  ): boolean | number | null | undefined | void
  OnTabDrop(
    grid: TGrid,
    row: TRow,
    col: string,
    tocol: string,
    copy: boolean | number,
  ): any | null | undefined | void
  OnTestConstraints(
    grid: TGrid,
    row: TRow,
    col: string,
    type: string,
    change: number,
    d1: number,
    d2: number,
  ): number | null | undefined | void
  OnTip(
    grid: TGrid,
    row: TRow,
    col: string,
    tip: string,
    clientX: number,
    clientY: number,
    X: number,
    Y: number,
  ): string | null | undefined | void
  OnTranslate(
    grid: TGrid,
    row: TRow,
    col: string,
    text: string,
    type: string,
  ): string | null | undefined | void
  OnTranslated(
    grid: TGrid,
    row: TRow,
    col: string,
    text: string,
    type: string,
  ): string | null | undefined | void
  OnUndo(grid: TGrid, action: string): null | undefined | void
  OnUpCounter(grid: TGrid): boolean | number | null | undefined | void
  OnUpdate(grid: TGrid): null | undefined | void
  OnUpdateRow(grid: TGrid, row: TRow, update: TRow): null | undefined | void
  OnUpdated(grid: TGrid): null | undefined | void
  OnUpload(
    grid: TGrid,
    xml: string,
    row: TRow,
    autoupdate: boolean | number,
  ): string | null | undefined | void
  OnValidate(
    grid: TGrid,
    row: TRow,
    col: string,
    err: boolean | number,
    errors: any,
  ): boolean | number | null | undefined | void
  OnValidateError(
    grid: TGrid,
    rows: TRow[],
    cols: string[],
  ): number | null | undefined | void
  OnValueChanged(
    grid: TGrid,
    row: TRow,
    col: string,
    val: any,
    oldval: any,
    errors: any,
  ): any | null | undefined | void
  OnZoom(
    grid: TGrid,
    zoom: string,
    FirstDate: number,
    LastDate: number,
  ): null | undefined | void

  Active: TGrid
  AddTryCatch: boolean | number
  Alert: boolean | number
  ControlsTag: object | string
  CookieExpires: number
  CookieParam: string
  Focused: TGrid
  HeadTag: object | string
  NoTryActiveX: number
  QuerySelector: Function
  Tablet: boolean | number
}

interface TGridsId {
  [id: string]: TGrid
}

interface TGridsIndex {
  [index: number]: TGrid
  readonly length: number
}

type TGrids = TGridsApi & TGridsIndex & TGridsId

interface Window {
  AddEvent(name: string, id?: string, func?: Function, ident?: string): number
  TGAddEvent(name: string, id?: string, func?: Function, ident?: string): number
  AddGanttUnits(units: string, width: number, exactwidth?: number): void
  TGAddGanttUnits(units: string, width: number, exactwidth?: number): void
  AjaxCall(Url: string, Data?: string, Func?: Function): string
  TGAjaxCall(Url: string, Data?: string, Func?: Function): string

  TGAnimate(
    element: Element,
    animationcode: string,
    func?: Function,
    noclr?: boolean | number,
  ): void
  CancelEvent(event: Event, type?: number): void
  TGCancelEvent(event: Event, type?: number): void
  CreateXML(str: string): any
  TGCreateXML(str: string): any
  DateToString(date: Date, format?: string): string
  TGDateToString(date: Date, format?: string): string
  DelEvent(name?: string, id?: string, ident?: any): boolean | number
  TGDelEvent(name?: string, id?: string, ident?: any): boolean | number
  DisposeGrids(): void
  TGDisposeGrids(): void
  DragByMouse(
    tag: any,
    event: Event,
    move?: number,
    html?: string,
    func?: Function,
    param?: any,
  ): void
  TGDragByMouse(
    tag: any,
    event: Event,
    move?: number,
    html?: string,
    func?: Function,
    param?: any,
  ): void
  ElemToParent(elem: any, parent: any): number[]
  TGElemToParent(elem: any, parent: any): number[]
  EventXYToElement(event: Event, elem: any): number[]
  TGEventXYToElement(event: Event, elem: any): number[]
  Get(row: TRow, attr: string): any
  TGGet(row: TRow, attr: string): any

  TGGetEvent(name: string, id?: string, ident?: string): Function
  GetGrids(): TGrid[]
  TGGetGrids(): TGrid[]
  GetStyle(elem: any): any
  TGGetStyle(elem: any): any
  GetWindowScroll(): number[]
  TGGetWindowScroll(): number[]
  GetWindowSize(): number[]
  TGGetWindowSize(): number[]
  Is(row: TRow, attr: string): boolean | number
  TGIs(row: TRow, attr: string): boolean | number
  LoadCache(id: string, session?: boolean | number): string
  TGLoadCache(id: string, session?: boolean | number): string
  NumberToString(num: number, format: string): string
  TGNumberToString(num: number, format: string): string
  PrintTreeGrid(Source: any, tag?: any, param?: any): TGrid
  TGPrintTreeGrid(Source: any, tag?: any, param?: any): TGrid
  SaveCache(id: string, val: string, session?: boolean | number): void
  TGSaveCache(id: string, val: string, session?: boolean | number): void
  SetEvent(
    name: string,
    id?: string,
    func?: Function,
    ident?: string,
  ): boolean | number
  TGSetEvent(
    name: string,
    id?: string,
    func?: Function,
    ident?: string,
  ): boolean | number
  ShowCalendar(Calendar: any, Pos?: any, Func?: Function, Date?: any): TCalendar
  TGShowCalendar(
    Calendar: any,
    Pos?: any,
    Func?: Function,
    Date?: any,
  ): TCalendar
  ShowDialog(Dialog: any, Pos?: any): TDialog
  TGShowDialog(Dialog: any, Pos?: any): TDialog
  ShowLineChart(Chart: any, tag?: string): TLineChart
  TGShowLineChart(Chart: any, tag?: string): TLineChart
  ShowMenu(Menu: any, Pos?: any, Func?: Function, Init?: string): TMenu
  TGShowMenu(Menu: any, Pos?: any, Func?: Function, Init?: string): TMenu
  ShowPopup(Menu: any, Func?: Function, Init?: string): TMenu
  TGShowPopup(Menu: any, Func?: Function, Init?: string): TMenu
  StartTreeGrid(): void
  TGStartTreeGrid(): void
  StringToDate(str: string, format?: string): Date
  TGStringToDate(str: string, format?: string): Date
  StringToNumber(str: string, format?: string): number
  TGStringToNumber(str: string, format?: string): number
  TreeGrid(Source: any, tag?: any, param?: any): TGrid
  TGTreeGrid(Source: any, tag?: any, param?: any): TGrid
  TreeGridLoaded(Input: any): void

  Grids: TGrids
  TGGrids: TGrids
}

declare function AddEvent(
  name: string,
  id?: string,
  func?: Function,
  ident?: string,
): number
declare function TGAddEvent(
  name: string,
  id?: string,
  func?: Function,
  ident?: string,
): number
declare function AddGanttUnits(
  units: string,
  width: number,
  exactwidth?: number,
): void
declare function TGAddGanttUnits(
  units: string,
  width: number,
  exactwidth?: number,
): void
declare function AjaxCall(Url: string, Data?: string, Func?: Function): string
declare function TGAjaxCall(Url: string, Data?: string, Func?: Function): string

declare function TGAnimate(
  element: Element,
  animationcode: string,
  func?: Function,
  noclr?: boolean | number,
): void
declare function CancelEvent(event: Event, type?: number): void
declare function TGCancelEvent(event: Event, type?: number): void
declare function CreateXML(str: string): any
declare function TGCreateXML(str: string): any
declare function DateToString(date: Date, format?: string): string
declare function TGDateToString(date: Date, format?: string): string
declare function DelEvent(
  name?: string,
  id?: string,
  ident?: any,
): boolean | number
declare function TGDelEvent(
  name?: string,
  id?: string,
  ident?: any,
): boolean | number
declare function DisposeGrids(): void
declare function TGDisposeGrids(): void
declare function DragByMouse(
  tag: any,
  event: Event,
  move?: number,
  html?: string,
  func?: Function,
  param?: any,
): void
declare function TGDragByMouse(
  tag: any,
  event: Event,
  move?: number,
  html?: string,
  func?: Function,
  param?: any,
): void
declare function ElemToParent(elem: any, parent: any): number[]
declare function TGElemToParent(elem: any, parent: any): number[]
declare function EventXYToElement(event: Event, elem: any): number[]
declare function TGEventXYToElement(event: Event, elem: any): number[]
declare function Get(row: TRow, attr: string): any
declare function TGGet(row: TRow, attr: string): any

declare function TGGetEvent(name: string, id?: string, ident?: string): Function
declare function GetGrids(): TGrid[]
declare function TGGetGrids(): TGrid[]
declare function GetStyle(elem: any): any
declare function TGGetStyle(elem: any): any
declare function GetWindowScroll(): number[]
declare function TGGetWindowScroll(): number[]
declare function GetWindowSize(): number[]
declare function TGGetWindowSize(): number[]
declare function Is(row: TRow, attr: string): boolean | number
declare function TGIs(row: TRow, attr: string): boolean | number
declare function LoadCache(id: string, session?: boolean | number): string
declare function TGLoadCache(id: string, session?: boolean | number): string
declare function NumberToString(num: number, format: string): string
declare function TGNumberToString(num: number, format: string): string
declare function PrintTreeGrid(Source: any, tag?: any, param?: any): TGrid
declare function TGPrintTreeGrid(Source: any, tag?: any, param?: any): TGrid
declare function SaveCache(
  id: string,
  val: string,
  session?: boolean | number,
): void
declare function TGSaveCache(
  id: string,
  val: string,
  session?: boolean | number,
): void
declare function SetEvent(
  name: string,
  id?: string,
  func?: Function,
  ident?: string,
): boolean | number
declare function TGSetEvent(
  name: string,
  id?: string,
  func?: Function,
  ident?: string,
): boolean | number
declare function ShowCalendar(
  Calendar: any,
  Pos?: any,
  Func?: Function,
  Date?: any,
): TCalendar
declare function TGShowCalendar(
  Calendar: any,
  Pos?: any,
  Func?: Function,
  Date?: any,
): TCalendar
declare function ShowDialog(Dialog: any, Pos?: any): TDialog
declare function TGShowDialog(Dialog: any, Pos?: any): TDialog
declare function ShowLineChart(Chart: any, tag?: string): TLineChart
declare function TGShowLineChart(Chart: any, tag?: string): TLineChart
declare function ShowMenu(
  Menu: any,
  Pos?: any,
  Func?: Function,
  Init?: string,
): TMenu
declare function TGShowMenu(
  Menu: any,
  Pos?: any,
  Func?: Function,
  Init?: string,
): TMenu
declare function ShowPopup(Menu: any, Func?: Function, Init?: string): TMenu
declare function TGShowPopup(Menu: any, Func?: Function, Init?: string): TMenu
declare function StartTreeGrid(): void
declare function TGStartTreeGrid(): void
declare function StringToDate(str: string, format?: string): Date
declare function TGStringToDate(str: string, format?: string): Date
declare function StringToNumber(str: string, format?: string): number
declare function TGStringToNumber(str: string, format?: string): number
declare function TreeGrid(Source: any, tag?: any, param?: any): TGrid
declare function TGTreeGrid(Source: any, tag?: any, id?: any): TGrid
declare function TreeGridLoaded(Input: any): void

declare var Grids: TGrids
declare var TGGrids: TGrids
