import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Logout() {
    const router = useRouter();
    const { name } = router.query;
    return (
        <div className={styles.container}>
            <nav>
                <Link href="/home"> Home</Link> | 
                <Link href="/about"> About</Link>

            </nav>
            <h1>
                Hi {name}
            </h1>

            <button onClick={() => router.replace('/home')}>
                Logout
            </button>
        </div>
    );
}