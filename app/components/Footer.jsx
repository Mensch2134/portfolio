'use client';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white py-6 mt-10 text-center">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Max Miehe. All rights reserved.</p>
            </div>
        </footer>
    );
}