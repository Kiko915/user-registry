import {Button, Divider, Typography} from "antd";
import { GithubOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import Head from "next/head";
import {signIn} from "next-auth/react";
const { Title, Text } = Typography;

export default function SignIn() {
    return (
        <>
        <Head>
            <title>Sign In | User Registry</title>
        </Head>
        <main className={styles.login} >
            <Title>Sign In</Title>
            <Text>Continue with github</Text>
            <Divider />
            <Button type='primary' icon={<GithubOutlined />} onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/' })} >Github</Button>
        </main>
        </>
    )
}