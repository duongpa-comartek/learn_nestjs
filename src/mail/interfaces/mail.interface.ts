export interface Mail {
    id: number,
    email: string,
    password: string,
    friends: Mail[]
}