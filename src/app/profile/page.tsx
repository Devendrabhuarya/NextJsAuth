"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import React from "react";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState();

    const getUserDetails = async () => {
        try {
            const response = await axios.get('/api/users/me');
            console.log(response.data.data);
            setData(response.data.data._id);
        } catch (error: any) {
            toast.error(error.message);
        }
    }

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success('logout successfully');
            router.push('/login');
        } catch (error: any) {
            console.log('logout failed', error.message);
            toast.error(error.message);
        }
    }
    return (
        <div className="flex flex-col items-center
        justify-center min-h-screen">
            <h1>profile page</h1>
            <h1>{data === undefined ?
                ''
                :
                data && <Link href={`/profile/${data}`}>{data}</Link>}</h1>
            <hr />
            <hr />
            <button onClick={getUserDetails}
                className="p-2 bg-purple-400">
                getUserDetails
            </button>
            <hr />
            <hr />
            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}