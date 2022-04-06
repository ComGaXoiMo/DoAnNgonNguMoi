import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../assets/app.css'
import Login from './Login';
export default function ResetPW() {
    return (
        <><Header />
            <div class="wrapper">
                <h2>Lấy lại mật khẩu</h2>

                <form >
                    <div class="form-group">

                        <label>Mật Khẩu sẽ được gửi về gmail đã đăng ký</label>
                        <input type="text" name="email" class="form-control " placeholder="Gmail đã đăng ký" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btng" value="Gửi" />
                    </div>
                    <Link to="/Login" class="link">Quay Lại</Link>
                </form>

            </div>
            <Footer /></>
    );
};