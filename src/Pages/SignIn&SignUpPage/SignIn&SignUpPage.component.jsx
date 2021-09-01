import { useEffect, useState } from 'react';
import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/SignUp.component';
import './SignIn&SignUpPage.styles.scss';

const SignInAndSignUpPage = () => {
  const [signupValue, setSignupValue] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  const [mobileDisplay, setMobileDisplay] = useState(window.innerWidth<1200);

  const showSignUp = () => {
    setSignupValue(!signupValue)
  }
  
  const handleResize = () => {
    setWidth(window.innerwidth);
    setMobileDisplay(window.innerWidth<1200);
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  console.log(width);

  return (
    <div className='sign-in-and-sign-up'>
      
        {!mobileDisplay? <SignIn /> : !signupValue?
        (<div className='sign-in-with-sign-up-button'> 
          <SignIn />
          <span className='sign-up-button' onClick={showSignUp}>Sign Up</span>
        </div>)
        : ''}

      {!mobileDisplay? <SignUp />: signupValue?
        (<div className='sign-in-with-sign-up-button'> 
          <SignUp />
          <span className='sign-in-button' onClick={showSignUp}>Log In</span>
        </div>)
        : ''}

    </div>
  )
};

export default SignInAndSignUpPage;