import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CREATE_USER_FROM_PROVIDERS } from "@/graphql/mutation/user";
import { client } from "@/providers/apollo-provider/client";

declare module "next-auth" {
    interface JWT {
        sub?: string;
        name?: string;
        email?: string;
        image?: string;
        iat?: number;
        exp?: number;
        [key: string]: any;
    }

    interface Session {
        user: {
            name?: string;
            email?: string;
            image?: string;
            id?: string;
        };
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        encode: async ({ token, secret }) => {
            return jwt.sign(token!, secret, {
                algorithm: "HS256",
            });
        },
        decode: async ({ token, secret }) => {
            if (!token) return null;
            try {
                return jwt.verify(token, secret, {
                    algorithms: ["HS256"],
                }) as JwtPayload;
            } catch (error) {
                return null;
            }
        },
    },
    callbacks: {
        async signIn({ user }) {
            if (user) {
                try {
                    await client.mutate({
                        mutation: CREATE_USER_FROM_PROVIDERS,
                        variables: {
                            createUserFromProvidersDto: {
                                name: user.name,
                                email: user.email,
                                image: user.image,
                            },
                        },
                    });
                    return true
                } catch (error) {
                    return false
                }
            } else {
                return false;
            }
        },
    }
};