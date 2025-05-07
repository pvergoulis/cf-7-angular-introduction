export interface User {
    username : string,
    password: string,
    name: string,
    surName: string,
    email: string,
    address : {
        area: string,
        road: string
    }
}
