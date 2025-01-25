export enum UserCtxActionTypes {
  SET_USER = "SET_USER",
}

export interface UserCtxState {
  user: string
}

export type UserCtxAction = {
  type: UserCtxActionTypes
  payload: string
}
