import {create} from 'zustand';

export type LoginState = {
    username: string;
    setUsername: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    token: string;
    setToken: (token: string) => void;
}

export default create<LoginState>()((set) => ({
    username: '',
    setUsername: (username) => set({username}),
    password: '',
    setPassword: (password) => set({password}),
    loading: false,
    setLoading: (loading) => set({loading}),
    token: '',
    setToken: (token) => set({token}),
}))