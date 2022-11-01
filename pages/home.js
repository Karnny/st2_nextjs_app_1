import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import buttonStyles from '../styles/button.module.css';
import NavBar from './components/NavBar';
import Layout from './components/Layout';

export default function MyHomePage() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Layout>

                <h1>
                    Hi test!
                </h1>

                <button className={buttonStyles.success} onClick={() => router.push('/about')}>
                    Go to about
                </button>
                <button onClick={() => router.push({
                    pathname: '/login/logout',
                    query: {
                        "name": "Jane Doe"
                    }
                })}>
                    Log in
                </button>
            </Layout>
        </div>
    );
}