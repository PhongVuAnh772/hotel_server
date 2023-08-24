const db = require("../models/index");


const addRoleHost = (req, res) => {
    db.account.findOne({
        gmail: req.body.email
    })
    .then(dataAccount => {
        db.account.update({
            roles:[...account.roles, 'host'],
        })
        .then(updatedAccount => {
            return res.status(200).json({
                success: true,
                message: 'Thêm quyền cho user thành công',
                updatedAccount: updatedAccount,
                dataAccount: dataAccount
            })
        })
        .catch(err => {
        return res.status(200).json({
            success: false,
            message: 'Tạo thêm quyền cho user thất bại',
            err: err.message,
        })
    })
    })
    .catch(err => {
        return res.status(200).json({
            success: false,
            message: 'Thông tin gmail không tồn tại',
            err: err.message,
        })
    })
}

module.exports = {
    addRoleHost
}