import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Vu Nguyen',
        email: 'vunguyen1995@gmail.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Khac Hieu',
        email: 'khachieu1999@gmail.com',
        password: bcrypt.hashSync('123456',10),
    }
]

export default users
