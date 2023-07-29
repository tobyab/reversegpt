export function H1({ className, children }: any) {
    return <h1 className={`text-xl font-semibold ${className}`}>{children}</h1>
}

export function P({ className, children}: any) {
    return <p className={`text-md ${className}`}>{children}</p>
}