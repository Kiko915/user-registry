import styles from '../styles/Home.module.css';
import Image from 'next/image'
import {Typography} from "antd";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";
const { Title, Text } = Typography;

export default function Profile() {
    const router = useRouter()
    const { data: session } = useSession({ required: true, onUnauthenticated() { router.push('/') } });

    if(!session) return null;

    return (
        <main>
            <div className={styles.homeBanner} >
                <Image src={session.user.image} width={200} height={200} alt={`Profile photo of ${session.user.name}`} />
                <div>
                    <Title>{session.user.name}</Title>
                    <Text>{session.user.email}</Text>
                </div>
            </div>
        </main>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if(!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            session,
        }
    }
}