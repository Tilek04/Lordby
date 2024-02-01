import React from 'react';
import lordImg from './assets/illustration.png';

function Auth() {
  return (
<>

    <div className='auth__container'>
<div className="auth_left_side">
    <img src={lordImg} className='auth_img' alt="Lorby main image" />
    <h2 className='auth_text'>Lorby</h2>
    <p>Your personal tutor</p>
</div>
<div className="auth_right_side"></div>


    </div>
    </>
  )
}

export default Auth