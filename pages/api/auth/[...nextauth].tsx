import NextAuth from "next-auth"

export default NextAuth({

    providers: [

        {
            id: "wso2is",
            name: "WSO2IS",
            clientId: process.env.WSO2IS_CLIENT_ID,
            clientSecret: process.env.WSO2IS_CLIENT_SECRET,
            type: "oauth",
            wellKnown: process.env.WSO2IS_HOST + "/t/" + process.env.WSO2IS_TENANT_NAME + "/oauth2/token/.well-known/openid-configuration",
            authorization: { params: { scope: process.env.WSO2IS_SCOPES } },
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                }
            },
        },
    ],
    secret: process.env.SECRET,
    callbacks: {
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            session.idToken = token.idToken
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account) {
                token.accessToken = account.access_token
                token.idToken = account.id_token
            }
            return token
        }
    },
    debug: true,
})