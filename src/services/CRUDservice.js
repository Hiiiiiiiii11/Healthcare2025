
import bcrypt from 'bcrypt';
import db from "../models/index"



let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstname,
                lastName: data.lastname,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleid,
                phonenumber: data.phonenumber,
            })
            resolve('ok create a new user success')
            console.log(data)
        } catch (e) {
            reject(e)
        }
    })

}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt); // Dùng bcrypt.hash (async)
            resolve(hashPassword);
        } catch (e) {
            reject(e)
        }


    })
}
let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.User.findAll({
                raw: true,
            });
            resolve(user);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
}