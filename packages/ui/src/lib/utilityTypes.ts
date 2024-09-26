export type NonNullableFunction<T> = T extends (...args: never[]) => never
  ? NonNullable<T>
  : never

export type FunctionStrip<T> = T extends (...args: never[]) => never
  ? never
  : NonNullable<T>

export type GetPropsObjectType<
  T extends ((...args: never[]) => never) | undefined,
> = Parameters<NonNullableFunction<T>>[0]
