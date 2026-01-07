import React, { type ReactNode } from 'react'

interface HeaderProps {
    image: {
        src: string;
        alt: string;
    }
    children: ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
    return (
        <div className='flex flex-col items-center gap-10'>
            <img src={image.src} alt={image.alt}
                className='h-48 w-48 rounded-full' />
            {children}
        </div>
    )
}

export default Header