import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/authInterface";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {authActions} from "../redux/slices/authSlice";

const LoginPage = () => {
    const {register, reset, handleSubmit} = useForm<IAuth>();
    const {errors} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const onLoginSubmit: SubmitHandler<IAuth> = async (user) => {
        const {meta:{}} = await dispatch(authActions.loginUser({user}))
    }
    return (
        <form>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            {errors && <span> login error</span>}
        </form>
    );
};

export default LoginPage;