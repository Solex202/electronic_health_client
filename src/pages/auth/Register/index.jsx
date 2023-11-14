import React from 'react';
import style from "../Register/index.module.css"
import logo from "../../../assets/LotaMedics Logo.svg"
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
                <div id='right-section'>
                    <div className={style.right_section_inner}>
                        <p>Register </p>
                        <form className={style.form}>
                            <div className="div">
                                <label for="name">FirstName:</label>
                                <input type="name" id="name" name="firstName" required/>
                                
                                <label for="name">LastName:</label>
                                <input type="name" id="name" name="firstName" required/>
                                
                            </div>
                                
                        </form>
                    </div> 
                </div>
            </div>
        )
    }

export default Register
