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
        <div>
            <img src={image.src} alt={image.alt}
                className='h-96 w-auto rounded' />
            {children}
        </div>
    )
}

export default Header