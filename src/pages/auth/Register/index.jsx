import React from 'react';
import style from "../Register/index.module.css"
import logo from "../../../assets/LotaMedics Logo.svg"
const Register
    = () => {
        return (
            <div className={style.parent}>
                <div id='left-section' className={style.left_section}>
                    <div  className={style.logo_div}>
                        <img id='logo' className={style.logo} src={logo}/>
                        <p>LotaMedics</p>
                    </div>
                    <div className={style.intro_text}>
                        <h2 >"Your Wellbeing, <br/>Your Way."</h2>
                        <p >Your Wellbeing & healthcare made easy and tailored to your taste.</p>
                    </div>
                </div>
                <div>dev</div>
            </div>
        )
    }

export default Register
