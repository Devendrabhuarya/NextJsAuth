import { NextRequest, NextResponse } from 'next/server';


export async function GET() {
    try {
        const response = NextResponse.json({
            message: 'Logout successfull',
            success: true
        });
        
        response.cookies.set('token', '', {
            httpOnly: true,
            expires: new Date(0)
        });
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error._message }, { status: 500 });
    }
}