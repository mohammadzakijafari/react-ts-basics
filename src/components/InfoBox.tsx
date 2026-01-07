import React, { type ReactNode } from 'react'

interface InfoBoxProps {
    mode: 'hint' | 'warning';
    children: ReactNode;
}

const InfoBox = ({ mode, children }: InfoBoxProps) => {

    if (mode === 'hint') {
        return (
            <aside className='flex flex-col items-center border-2 border-lime-300 rounded p-6'>
                {children}
            </aside>
        )
    }
    return (
        <aside className='flex flex-col items-center border border-2 border-orange-300 rounded p-6 font-semibold mb-5'>
            <h2 className='font-bold text-lg pb-2 text-orange' > Warning </h2 >
            {children}
        </aside >
    )
}

export default InfoBox