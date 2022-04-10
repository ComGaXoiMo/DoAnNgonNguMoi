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
    const fetchItem = async e => {
        e.preventDefault();
        const a = await axios.post(`http://localhost:5000/api/user/userSignIn`, body);      
        if(a.data.err==0){
            alert("Đăng nhập thành công")
           window.location.href="/";
          localStorage.setItem("idLg", a.data.data._id);
          localStorage.setItem("nameLg", a.data.data.name);
          localStorage.setItem("isLg",true)
        }
        else{
            alert("Đăng nhập thất bại")
            console.log(user.email)
        }
    }
    return (
        <><Header  userID={localStorage.getItem('idLg')} isLogin={localStorage.getItem("isLg")} />
            <div class="wrapperlg">
                <h2>Đăng Nhập</h2>
                <form onSubmit={fetchItem} >
                    <div class="form-group">
                        <label>Tài Khoản</label>
                        <input type="text" onChange={onChangeInput} value={setUser.email} name="email" class="form-control " placeholder="Nhập email bạn đã đăng ký" />
                    </div>
                    <div class="form-group">
                        <label>Mật Khẩu</label>
                        <input type="password" onChange={onChangeInput} value={setUser.password} name="password" class="form-control " placeholder="Nhập mật khẩu" />
                    </div>
                   
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
