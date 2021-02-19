import {nanoid} from 'nanoid';
import {sign} from 'jsonwebtoken';
import {basic as createBasicAuth} from 'http-auth';
import auth from 'http-auth-connect';

const basicAuth = createBasicAuth({realm: "Private Area"}, (username, password, callback) => {
  callback(username === process.env.USER_NAME && password === process.env.USER_PASSWORD);
});

export default app => {
  if (process.env.USER_NAME && process.env.USER_PASSWORD) {
    app.use(auth(basicAuth));
  }

  app.get('/workato-jwt', (req, res) => {
    const {WK_API_KEY, WK_CUSTOMER_ID, WK_USER_ID, WK_CUSTOM_VENDOR_ORIGIN} = process.env;
    const subParams = [WK_API_KEY, WK_CUSTOMER_ID];

    if (WK_USER_ID) {
      subParams.push(WK_USER_ID);
    }

    const token = sign(
      {
        sub: subParams.join(':'),
        jti: nanoid(),
        origin: WK_CUSTOM_VENDOR_ORIGIN || undefined
      },
      process.env.WK_JWT_PRIVATE_KEY,
      {algorithm: 'RS256'}
    );

    res.json(token);
  });
}
