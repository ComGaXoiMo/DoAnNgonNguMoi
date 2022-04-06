import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../assets/app.css'

function Login() {

    return (

        <><Header />
            <div class="wrapper">
                <h2>Đăng Nhập</h2>
                <form>
                    <div class="form-group">
                        <label>Tài Khoản</label>
                        <input type="text" name="username" class="form-control " placeholder="Nhập email bạn đã đăng ký" />
                    </div>
                    <div class="form-group">
                        <label>Mật Khẩu</label>
                        <input type="password" name="password" class="form-control " placeholder="Nhập mật khẩu" />
                    </div>
                    <Link to="/ResetPW" class="link">Quên Mật Khẩu </Link>
                    <div class="form-group">
                        <input type="submit" class="btndn" value="Đăng nhập" />
                    </div>
                    <p>Bạn chưa có tài khoảng ? <Link to="/Signin" class="link">Đăng Ký </Link></p>
                </form>
            </div>
            <Footer /></>
    );
}
export default Login;
