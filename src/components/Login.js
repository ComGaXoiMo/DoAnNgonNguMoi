import React, { Component } from 'react';
import '../assets/app.css'
function Login() {
    
        return (

            <div >
        <h2>Đăng Nhập</h2>
         <form>
            <div class="form-group">
                <label>Tài Khoản</label>
                <input type="text" name="username" class="form-control " placeholder="Nhập email bạn đã đăng ký"/>              
            </div>    
            <div class="form-group">
                <label>Mật Khẩu</label>
                <input type="password" name="password" class="form-control "placeholder="Nhập mật khẩu"/>              
            </div> 
            <a  href="resetpassword.php" >Quên mật khẩu</a>             
            <div class="btndn">
                <input type="submit" class="btn btn-primary" value="Đăng nhập"/>              
            </div>
            <p>Bạn chưa có tài khoảng ? <a href="signup.php">Đăng ký</a>.</p>
        </form>
    </div>

        )
    }
export default Login;
