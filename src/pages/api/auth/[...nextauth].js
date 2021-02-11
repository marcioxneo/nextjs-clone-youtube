import NextAuth from 'next-auth';
import Providers from 'next-auth/Providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],

  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  // A database is optional, but required to persist accounts in database
  // database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
