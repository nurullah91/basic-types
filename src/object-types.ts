

// Object types
const user: {
    readonly isMale: "male", // Read only property
    company : "Programmer world", // ----> Literal type
    firstName: string,
    middleName?: string, // ---> Optional type
    lastName: string
} = {
    isMale: "male",
    company: "Programmer world",
    firstName: "Md", 
    middleName: "Nurullah",
    lastName: "Bhuiyan"
}
