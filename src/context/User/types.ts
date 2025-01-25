export enum UserCtxActionTypes {
  SET_USER = "SET_USER",
}

export type UserCtxState = {
  user: string
}

export type UserCtxAction = {
  type: UserCtxActionTypes
  payload: string
}
