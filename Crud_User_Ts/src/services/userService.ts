import { User } from "../schemas/UserSchema"

const users: User[] = []

export const userService = {
    create(newUser:User) : User{
        users.push(newUser)
        return newUser      
    },

    findAll():User[]{
        return users
    },
    findById(id: string): User | undefined{
        return users.find((user) => user.id === id)
    },
    findByName(name: string): User | undefined{
        return users.find((user) => user.name === name)
    },
    findByAge(age: number): User | undefined{
        return users.find((user) => user.age === age)
    },
    findByEmail(email: string): User | undefined{
        return users.find((user) => user.email === email)
    },

    update(id: string ,data: Partial<User>): User | null {
        const userIndex = users.findIndex((user) => user.id === id)
        if (userIndex === -1) return null
        users[userIndex] = { ...users[userIndex],...data}
        return users[userIndex]
    },
    
    delete(id: string):boolean{
        const userIndex = users.findIndex((user)=> user.id === id)
        if (userIndex === -1) return false

        users.splice(userIndex, 1)
        return true
    }

}