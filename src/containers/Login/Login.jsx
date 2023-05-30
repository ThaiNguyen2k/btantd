import React from 'react'
import styled from 'styled-components'
// import { FORM_ERROR } from 'final-form'
import imgLogin from "assets/imgLogin.png"
import Logo from "assets/Logo.png"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const onSubmit = async values => {
//   await sleep(300)
//   if (values.username !== 'Nguyen') {
//     return { username: 'Unknown username' }
//   }
//   if (values.password !== 'Nguyen') {
//     return { [FORM_ERROR]: 'Login Failed' }
//   }
//   window.alert('LOGIN SUCCESS!')
// }


const Login = () => {
  return(
    <Body>
      <img className='imgLogin' src={imgLogin}></img>
      <form className='formLogin'>
        <Logo></Logo>
        <span className='login'>Log in</span>
      </form>
    </Body>
  )
}
export default Login;

const Body = styled.div`
  background: linear-gradient(90deg, #FFFFFF 0%, #BBAAFF 66.67%);
  width: 100%;
  height: 753px;
  position: relative;
  background-repeat: no-repeat;
  text-align: center;
  .imgLogin{
    position: absolute;
    width: auto;
    height: 753px;
    left: 50%;
  }
  .formLogin{
    width: 50%;
    height: 750px;
    border: 2px solid red;
  }
  .login{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 84px;
    color: #000000;
  }
`