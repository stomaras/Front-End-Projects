import React, { useState } from 'react'
import { authClasses } from './authClasses'
import { useForm } from 'react-hook-form'
import { AuthForm, authFormSchema } from '../../models/Form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSearchParams } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {setDoc, doc} from "firebase/firestore";
import { auth, db } from '../../firebase'
import { useAppDispatch } from '../../hooks/storeHook'
import { login } from '../../features/authSlice'
import ResetPassword from '../../components/ResetPassword/ResetPassword'


const Auth = () => {
    const {container, form, button, input, text, textLight, link, hr, forgotPasswordButton} = authClasses;

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const {user} = await signInWithPopup(auth, provider);
            if(user && user.email) {
                dispatch(
                    login({
                        email: user.email,
                        id:user.uid,
                        photoUrl: user.photoURL || null,
                    })
                );
            }
        }catch(error:any) {
            console.log("Error Signing in :", error);
            
        }
    }

    const [authState, setAuthState] = useState<'login' | 'sign-up'>("login")
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [resetPassword, setResetPassword] = useState(false);

    const dispatch = useAppDispatch();

    const handleFormSubmit = async(data:AuthForm) => {
        setLoading(true);
        setErrorMessage(null);
        const {email, password} = data;
        if(authState === 'sign-up') {
            try {
               const {user} = await createUserWithEmailAndPassword(auth, email, password);
               console.log(user);
               
    
               await setDoc(doc(db, "users", user.uid), {email});
               setLoading(false);
               if(user && user.email) {
                dispatch(
                    login({email: user.email, id: user.uid, photoUrl: user.photoURL || null})
                )
               }
            }catch(error:any) {
                setLoading(false);
                console.log(error);
                const errorCode = error.code
                setErrorMessage(errorCode);
                
            }
        }else {
            const {user} = await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
            if(user && user.email) {
                dispatch(
                    login({
                        email:user.email,
                        id: user.uid,
                        photoUrl: user.photoURL || null,
                    })
                );
            }

        }
        
    }

    const handleAuthType = () => {
        setAuthState(prevAuthType => prevAuthType === 'login' ? 'sign-up' : 'login');
    }



    const {register, handleSubmit, formState: {errors}} = useForm<AuthForm>({
        resolver:yupResolver(authFormSchema),
    });





  return (
    <>
    <ResetPassword isOpen={resetPassword} onClose={() => setResetPassword(false)}/>
    <div className={container}>
        <div className='w-full max-w-sm rounded-lg bg-state-700/30 shadow'>
            {errorMessage && <p className='bg-red-500 px-3py-2 text-center rounded-md text-white'>
                {errorMessage}    
            </p>}
            <form className={form} onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='grid gap-y-3'>
                    <button onClick={signInWithGoogle} className={button} type='button'>Google</button>
                </div>
                <div className='my-3 flex items-center px-3'>
                    <hr className={hr}/>
                    <span className={text}>or</span>
                    <hr className={hr}/>
                </div>

                <div className='grid gap-y-3'>
                    <div>
                        <input type="email" placeholder='email@example.com' className={input} {...register('email')}/>
                        {errors.email ? <span className='text-red-700'>{errors.email.message}</span> : <></>}
                        <input type="password" placeholder='*********' className={input} {...register('password')} />
                        {errors.password ? <span className='text-red-700'>{errors.password.message}</span> : <></>}
                        <input type="password" placeholder='*********' className={input} {...register('confirmPassword')}/>
                        {errors.confirmPassword ? <span className='text-red-700'>{errors.confirmPassword.message}</span> : <></>}

                    </div>
                    <button disabled={loading} className={button}>Sign {authState === 'login' ? 'in': 'up'} with email</button>

                </div>
                <div className='text-sm font-light py-4'>
                    {authState === 'login' ? (
                          <span>
                            Do not have an account yet? {" "}
                             <span className={link} onClick={handleAuthType}>Sign Up</span>
                            </span>
                    ) : (
                        <span>
                            Already have an account?
                            <span onClick={handleAuthType} className='font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary'>
                                Sign In
                            </span>                            
                        </span>
                    )}

                </div>

                <div className='my-3 flex items-center px-3'>
                    <hr className={hr}/>
                    <button onClick={() => setResetPassword(true)} type='button' className={forgotPasswordButton}>
                        forgot password
                    </button>
                    <hr className={hr}/>
                </div>
            </form>
        </div>
    </div>
    </>

  )
}

export default Auth