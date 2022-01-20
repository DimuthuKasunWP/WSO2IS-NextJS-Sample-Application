import { useSession, signIn, getSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import jwt from "jwt-decode"
import { tw } from 'twind'
import dynamic from 'next/dynamic'
import Button from '@/../components/button';

export default function Page({ session, tenant, host }) {
    const [content, setContent] = useState(null)
    const [id_token, setIDToken] = useState()
    const JsonViewer = dynamic(
        () => import("../components/JsonViewer"),
        { ssr: false }
    )

    useEffect(() => {
        if (!session) {
            signIn("wso2is", { callbackUrl: "/home" })
        } else {
            const { accessToken, idToken } = session
            setIDToken(idToken)

            const res = fetch(host + "/t/" + tenant + "/scim2/Me", {
                method: 'get',
                headers: new Headers({
                    "authorization": "Bearer " + accessToken
                })
            }).then(r => r.json().then(data => ({ status: r.status, body: data })))
                .then(res => {
                    setContent(res)
                }).catch(err => {
                    signOut({ callbackUrl: "/" })
                })
        }

    }, [])
    if (session) {
        if (content) {
            return (
                <main style={{ width: "800px", marginLeft: "auto", marginRight: "auto" }}>
                    <p className={tw(`mt-2 text-5xl lg:text-3xl font-bold tracking-tight text-gray-900`)} style={{ marginTop: '70px', marginBottom: "50px", textAlign: 'center' }}>
                        Decoded Id Token
                    </p>
                    <JsonViewer
                        src={jwt(id_token)}
                        name={null}
                        enableClipboard={false}
                        displayObjectSize={false}
                        displayDataTypes={false}
                        iconStyle="square"
                        theme="monokai"
                    />

                    <p className={tw(`mt-2 text-5xl lg:text-3xl font-bold tracking-tight text-gray-900`)} style={{ marginTop: '70px', marginBottom: "50px", textAlign: 'center' }}>
                        SCIM 2.0 /Me Endpoint Response
                    </p>
                    <JsonViewer
                        src={content}
                        name={null}
                        enableClipboard={false}
                        displayObjectSize={false}
                        displayDataTypes={false}
                        iconStyle="square"
                        theme="monokai"
                    />
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            onClick={(e) => {
                                e.preventDefault()
                                signOut({ callbackUrl: "/" })
                            }}
                            style={{ marginTop: "30px", marginBottom: "40px" }}
                            primary>Logout</Button>
                    </div>

                </main>
            )
        } else {
            return (
                <h1 className={tw(`mt-2 text-5xl lg:text-3xl font-bold tracking-tight text-gray-900`)} style={{ marginTop: '100px', textAlign: 'center' }}>
                    Loading...
                </h1>
            )
        }

    } else {
        return (
            <h1 className={tw(`mt-2 text-5xl lg:text-3xl font-bold tracking-tight text-gray-900`)} style={{ marginTop: '100px', textAlign: 'center' }}>
                Access Denied! Redirecting to Login...
            </h1>
        )
    }
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context),
            tenant: process.env.WSO2IS_TENANT_NAME,
            host: process.env.WSO2IS_HOST
        }
    }
}