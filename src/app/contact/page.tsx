'use client';
import React from 'react';
import {useRouter} from "next/navigation";

const Contact = () => {
    const router = useRouter()

    return (
        <div>
            Hello bienvenue dans la partie contact !

            <div className='text-center mt-5'>
                <button onClick={() => router.push('/')} className='mr-5'>Accueil</button>
                <button onClick={() => router.push('/presentation')}>Presentation</button>
            </div>

            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p>beaucoup de contenu !!!!</p>
            <p></p>
        </div>
    );
};

export default Contact;