'use client';
import React from 'react';
import {useRouter} from "next/navigation";

const Presentation = () => {
    const router = useRouter()

    return (
        <div>
            Hello bienvenue dans la partie presentation !

            <div className='text-center mt-5'>
                <button onClick={() => router.push('/')} className='mr-5'>Accueil</button>
                <button onClick={() => router.push('/contact')}>Contact</button>
            </div>

            <p>beaucoup de presentation !!!!</p>
            <p>beaucoup de presentation !!!!</p>
            <p>beaucoup de presentation !!!!</p>
            <p>beaucoup de presentation !!!!</p>
            <p>beaucoup de presentation !!!!</p>
            <p></p>
        </div>
    );
};

export default Presentation;