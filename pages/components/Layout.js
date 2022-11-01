import Link from "next/link";
import NavBar from "./NavBar";

export default function Layout({ children }) {

    return (
        <>
            <NavBar></NavBar>
            {children}
        </>

    )
}