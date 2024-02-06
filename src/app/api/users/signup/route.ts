import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'


connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();

        const { email, password, username } = reqBody;

        // check user is exist 
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: 'User Already Exist' }, { status: 400 });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log(email, password, username);

        const newUser = new User({
            email,
            username,
            password: hashedPassword
        });
        const saveUser = await newUser.save();
        console.log(saveUser);
        return NextResponse.json({
            message: "User saved Successfully",
            success: true,
            saveUser
        });
    } catch (error: any) {
        console.log(error);

        return NextResponse.json({ error: error._message }, { status: 500 });
    }
}




