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
        username: ''
    });
    const [loading, setLoading] = useState(false)
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            console.log('sign up success', response.data);
            router.push('/login');
            toast.success(response.data.message);
            console.log(user)
        } catch (error: any) {
            console.log('sign failed', error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="flex flex-col justify-center text-center h-screen">
            <div className="m-auto flex flex-col gap-3">
                <h1>{loading ? "processing" : 'signup'}</h1>
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
                <label htmlFor="username">username</label>
                <input
                    className=" focus:outline-none text-black"
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="username"
                />
                <button type="button" className="border-gray-200 border-2"
                    onClick={onSignup}>signup</button>
                <Link href='/login'>view login page</Link>
            </div>
        </div>
    );
}