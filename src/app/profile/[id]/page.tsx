export default function ProfilePage({ params }: any) {
    return (
        <div className="flex flex-col items-center
        justify-center min-h-screen">
            <h1 className="text-3xl">profile page  
                <span className="text-yellow-500">{params.id}</span>
            </h1>

        </div>
    );
}