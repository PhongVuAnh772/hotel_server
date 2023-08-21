const db = require("../models/index");
const jwt = require("jsonwebtoken");
const express = require("express");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");

const signUp = (req, res, next) => {
  bcryptjs.hash(req.body.password, 16, (err, passwordHash) => {
    if (err) {
      return res.status(200).json({
        message: "Không mã hóa được mật khẩu",
        success: false,
      });
    } else if (passwordHash) {
      db.account
        .max("id")
        .then((maxIdAccount) => {
          const newAccountId = maxIdAccount ? maxIdAccount + 1 : 1;
          db.user
            .max("id")
            .then((maxIdUser) => {
              const newUserId = maxIdUser ? maxIdUser + 1 : 1;
              db.account
                .create({
                  id: newAccountId,
                  gmail: req.body.gmail,
                  password: passwordHash,
                  email_verified: false,
                  roles: ["guest"],
                })
                .then((accountTable) => {
                  db.user
                    .create({
                      id: newUserId,
                      Full_Name: req.body.Full_Name,
                      Date_of_Birth: req.body.Date_of_Birth,
                      Country: req.body.country,
                      Email: req.body.email,
                      CMND: req.body.CMND,
                      Sex: req.body.Sex,
                    })
                    .then((userTable) => {
                      db.user_account
                        .create({
                          Account_id: accountTable.id,
                          User_id: userTable.id,
                        })
                        .then((userAccountTable) => {
                          return res.status(200).json({
                            success: true,
                            message: "Đăng ký thành công",
                            userAccountTable: userAccountTable,
                            userTable: userTable,
                            accountTable: accountTable,
                          });
                        });
                    })
                    .catch((err) => {
                      return res.status(200).json({
                        success: false,
                        err: err.message,
                        message: "Có lỗi khi tạo bảng user_account",
                      });
                    });
                })
                .catch((err) => {
                  return res.status(200).json({
                    success: false,
                    err: err.message,
                    message: "Có lỗi khi tạo bảng user",
                  });
                });
            })
            .catch((err) => {
              return res.status(200).json({
                success: false,
                err: err.message,
                message: "Có lỗi khi tạo bảng account",
              });
            })
            .catch((err) => {
              return res.status(200).json({
                success: false,
                err: err.message,
                message: "Có lỗi khi lấy id bảng user",
              });
            });
        })
        .catch((err) => {
          return res.status(200).json({
            success: false,
            err: err.message,
            message: "Có lỗi khi lấy id bảng account",
          });
        });
    }
  });
};

const signIn = (req, res) => {
  db.account
    .findOne({
      gmail: req.body.gmail,
    })
    .then((account) => {
      bcryptjs.compare(
        req.body.password,
        account.password,
        (err, compareRes) => {
          if (err) {
            return res.status(200).json({
              success: false,
              err: err.message,
              message: "Mật khẩu sai",
            });
          } else if (compareRes) {
            const token = jwt.sign(
              { Account_id: req.body.Account_id },
              "secret",
              { expiresIn: "1h" }
            );
            db.user_account
              .findOne({
                Account_id: account.id,
              })
              .then((tableUserAccount) => {
                db.user
                  .findOne({
                    id: tableUserAccount.User_id,
                  })
                  .then((tableUser) => {
                    return res.status(200).json({
                        success: true,
                        message: "Đăng nhập thành công",
                        tableUserAccount: tableUserAccount,
                        tableUser: tableUser,
                        tableAccount: account,
                        token: token
                    })

                  })
                  
                .catch((err) => {
                    return res.status(200).json({
                      success: false,
                      err: err.message,
                      message: "Có lỗi khi lấy dữ liệu bảng user_account",
                    });
                  });
              })
              .catch((err) => {
                return res.status(200).json({
                  success: false,
                  err: err.message,
                  message: "Có lỗi khi lấy dữ liệu bảng user_account",
                });
              });
          }
        }
      );
    })
    .catch((err) => {
      return res.status(200).json({
        err: err.message,
        success: false,
        message: "Tài khoản không tồn tại",
      });
    });
};

const isAuth = (req, res) => {

}
module.export = {
  signUp,
  signIn,
  isAuth
};
