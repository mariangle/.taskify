import MainNavbar from '@/app/(root)/components/main-navbar'

interface PageProps {
    children: React.ReactNode
}

export default function Layout({
    children
} : PageProps){
    return (
        <div>
            <MainNavbar />
            {children}
        </div>
    )
}