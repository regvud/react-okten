import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/authInterface";
import {useAppSelector} from "../hooks/reduxHooks";

const LoginPage = () => {
    const {register, reset, handleSubmit} = useForm<IAuth>();
    const {errors} = useAppSelector(state => state.auth);

    // const onLoginSubmit: SubmitHandler<IAuth> = async (user) => {
    //     await
    // }
    return (
        <form>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            {errors && <span> login error</span>}
        </form>
    );
};

export default LoginPage;