import React, { Component, useState, useEffect  } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import '../assets/app.css'
const Login = () => {
    const [user, setUser] = useState({
        email: "", password: "",
    }
    
    );
    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({...user,[name]: value })
    };
    const body = {
        email: user.email,
        password: user.password,
    };  
    console.log(body)
    const fetchItem = async () => {
        const a = await axios.post(`http://localhost:5000/api/user/userSignIn`, body);      
        if(a.err==0){
            alert()
        }
    }
    return (

        <><Header />
            <div class="wrapperlg">
                <h2>Đăng Nhập</h2>
                <form>
                    <div class="form-group">
                        <label>Tài Khoản</label>
                        <input type="text" onChange={onChangeInput} value={setUser.email} name="email" class="form-control " placeholder="Nhập email bạn đã đăng ký" />
                    </div>
                    <div class="form-group">
                        <label>Mật Khẩu</label>
                        <input type="password" onChange={onChangeInput} value={setUser.password} name="password" class="form-control " placeholder="Nhập mật khẩu" />
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
