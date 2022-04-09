import React, { Component, useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../assets/app.css'
import axios from 'axios';
import Login from './Login';
const Signin = () => {
    // const [user, setUser] = useState([]);
    const [user, setUser] = useState({
        email: "", namee: "", password: "", imgUser: "", age: ""
    }
    );
    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({...user,[name]: value })
    };
    const body = {
        email: user.email,
        name: user.namee,
        password: user.password,
        imgUser: user.imgUser,
        age: user.age
    };   
    console.log(user)
    const fetchItem = async e => {
        e.preventDefault();
        try{
            const a = await axios.post('http://localhost:5000/api/user/userSignUp', body);   
            console.log(a); 
            if(a.data.err==0)  {
                alert(a.data.data);
                window.location.href="/login";
            }else{
                alert("loi")
            }

        }catch(e)
        {
            alert(e);
        }
      
    }
    // useEffect(() => {


    // }, [])

    return (
        <><Header />

            <div class="wrapperlg" >
                <h2>Đăng Ký</h2>
                <form onSubmit={fetchItem}>
                    <div class="form-group">
                        <label>Họ và tên</label>
                        <input type="text"  onChange={onChangeInput} value={setUser.namee} name="namee" class="form-control "   placeholder="Nhập tên người dùng" />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text"  value={user.email} name="email" class="form-control " onChange={onChangeInput} placeholder="Nhập email của bạn" />
                    </div>
                    <div class="form-group">
                        <label>Mật Khẩu</label>
                        <input type="password" value={user.password} name="password" class="form-control " onChange={onChangeInput} placeholder="Nhập mật khẩu" />

                    </div>
                    
                    <div class="form-group">
                        {/* <input type="submit" class="btndk" value="Đăng Ký" /> */}
                        <button type="submit">Đăng ký</button>
                        
                    </div>
                    <p>Bạn đã có tài khoản ? <Link to="/Login" class="link">Đăng nhập </Link></p>
                </form>
            </div>
            <Footer /></>
    );
};
export default Signin;