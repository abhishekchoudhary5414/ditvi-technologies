'use client'
import { ReactNode } from 'react'
import Link from 'next/link'
import styles from './Button.module.css'

interface ButtonProps {
    children: ReactNode
    href?: string
    variant?: 'primary' | 'secondary'
    className?: string
    onClick?: () => void
    target?: '_blank' | '_self' | '_parent' | '_top' // Add target prop
}

const Button = ({
    children,
    href,
    variant = 'primary',
    className = '',
    onClick,
    target
}: ButtonProps) => {
    const classes = `${styles.button} ${styles[variant]} ${className}`

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={onClick}
            >
                {children}
            </Link>
        )
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button