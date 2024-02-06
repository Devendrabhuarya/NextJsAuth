"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/login', user);
            console.log('login success', response.data);
            toast.success(response.data.message);
            router.push('/profile');
            console.log(user)
        } catch (error: any) {
            console.log('Login failed', error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="flex flex-col justify-center text-center h-screen">
            <div className="m-auto flex flex-col gap-3">
                <h1>{loading ? "processing" : 'login'}</h1>
                <label htmlFor="email">Email</label>
                <input
                    className=" focus:outline-none text-black"
                    type="text"
                    id="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="email"
                />
                <label htmlFor="password">password</label>
                <input
                    className=" focus:outline-none text-black"
                    type="text"
                    id="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
                />
                <button type="button" className="border-gray-200 border-2"
                    onClick={onLogin}>Login</button>
                <Link href='/signup'>view signup page</Link>
            </div>
        </div>
    );
}