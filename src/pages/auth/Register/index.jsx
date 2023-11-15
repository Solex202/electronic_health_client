import React from 'react';
import style from "../Register/index.module.css"
import logo from "../../../assets/LotaMedics Logo.png"
const Register
    = () => {
        return (
            <div className={style.parent}>
                <div id='left-section' className={style.left_section}>
                    <div className={style.left_section_inner}>
                        <div  className={style.logo_div}>
                            <img id='logo' className={style.logo} src={logo}/>
                            <h3>LotaMedics</h3>
                        </div>
                        <div className={style.intro_text}>
                            <p className={style.intro_text_p1}>"Your Wellbeing,<br/>Your Way."</p>
                            <p className={style.intro_text_p2}>Your Wellbeing & healthcare<br/> made easy and tailored to <br/> your taste.</p>
                        </div>
                    </div>
                </div>
                <div id='right-section' className={style.right_section}>
                    <div className={style.right_section_inner}>
                        <p>Register </p>
                        <form className={style.form}>
                            <div className={style.fullname}>
                                <div className={style.firstname}>
                                    <label for="name">First Name</label>
                                    <input type="name" id="name" name="firstName" required/>
                                </div>
                                <div className={style.lastname}>
                                    <label for="name">Last Name</label>
                                    <input type="name" id="name" name="lastName" required/>
                                </div>
                                
                            </div>
                            <div className={style.email}>
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required/>
                            </div>
                            <div className={style.password}>
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" required/>
                            </div>
                            <div className={style.phonenumber}>
                                <label for="phone">Phone No:</label>
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}"  required/>
                                    
                            </div>
                            <button>Sign up</button>
                            <div className={style.bottom_text}>
                                <span>Already have an account?</span>
                                <a href=''>signin</a>
                            </div>
                                
                        </form>
                    </div> 
                </div>
                
            </div>
        )
    }

export default Register
