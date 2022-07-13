export interface IUser {
    name: string,
    email: string,
    password: string,
    rePassword: string,
    role: string,
    subcribe: boolean,
    acceptTerm: boolean
}

export type UserContextType = {
    user: IUser,
    saveUser: (user: IUser) => void
}