import {Typography, Space, Button} from "antd";
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import {signOut, useSession} from "next-auth/react";
const { Title } = Typography;

export default function Header() {
    const { data: session } = useSession();

    return (
        <div className={styles.hd}>
            <Title level={3} className={styles.h3} >User Registry</Title>
            <ul className="main-nav">
                <Space size='middle' >
                <li><Link href='/' ><a>Home</a></Link></li>
                {!session ?
                    <li><Link href='/signin' ><a>Sign In</a></Link></li>
                    :
                    <Button type='text' onClick={() => signOut({ redirect: false, callbackUrl: '/signin' })} >Logout</Button>
                }
                <li><Link href='/profile' ><a>My Profile</a></Link></li>
                </Space>
            </ul>
        </div>
    )
}