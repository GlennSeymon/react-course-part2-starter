interface LoginAction {
    type: 'LOGIN';
    user: string;
}

interface LogoutAction {
    type: 'LOGOUT';
}

type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: string, action: AuthAction): string => {
    switch(action.type) {
        case 'LOGIN':
            return action.user;
        case 'LOGOUT':
            return '';
        default:
            return user;
    }
}
export default authReducer;