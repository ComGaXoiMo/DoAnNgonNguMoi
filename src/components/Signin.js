import React, { Component, useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../assets/app.css'
import axios from 'axios';
import Login from './Login';
const Signin = () => {
    const [user, setUser] = useState([]);
    const body = {
        email:"123@gmail.com",
        name:"1",
        password: "123"
};
    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.post(`http://localhost:5000/api/user/userSignUp`, body);
            setUser(result)
            alert(result.body)
        }
        //fetchItem();
    }, [])
    return (
        <><Header />

            <div class="wrapperlg" >
                <h2>Đăng Ký</h2>
                <form>
                    <div class="form-group">
                        <label>Họ và tên</label>
                        <input type="text" name="username" class="form-control " placeholder="Nhập tên người dùng" />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" name="email" class="form-control " placeholder="Nhập email của bạn" />
                    </div>
                    <div class="form-group">
                        <label>Mật Khẩu</label>
                        <input type="password" name="password" class="form-control " placeholder="Nhập mật khẩu" />

                    </div>
                    {/* <div class="form-group">
                        <label>Nhập Lại Mật Khẩu</label>
                        <input type="password" name="confirm_password" class="form-control" placeholder="Nhập mật khẩu vừa nhập" />

                    </div> */}
                    <div class="">
                        {/* <input type="submit" class="btndk" value="Đăng Ký" /> */}
                        <button onClick={useEffect.fetchItem} type="button" name="button" >Đăng ký</button>
                    </div>
                    <p>Bạn đã có tài khoản ? <Link to="/Login" class="link">Đăng nhập </Link></p>
                </form>
            </div>
            <Footer /></>
    );
};
export default Signin;