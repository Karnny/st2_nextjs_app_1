import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function About() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <h1>
                Sorry this page is not found!
            </h1>

            <button onClick={() => router.back()}>
                Go back
            </button>
        </div>
    );
}