import Link from "next/link";

export default function NavBar() {

    return (
        <nav>
            <Link href="/home"> Home</Link> |
            <Link href="/about"> About</Link>
        </nav>

    )
}