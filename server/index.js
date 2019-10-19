import nanoid from 'nanoid';
import {sign} from 'jsonwebtoken';
import auth from 'http-auth';

const basicAuth = auth.basic({realm: "Private Area"}, (username, password, callback) => {
  if (process.env.USER_NAME && process.env.USER_PASSW) {
    callback(username === process.env.USER_NAME && password === process.env.USER_PASSW);
  } else {
    return true;
  }
});

export default app => {
  app.use(auth.connect(basicAuth));

  app.get('/workato-jwt', (req, res) => {
    const token = sign(
      {
        sub: `${process.env.WK_API_KEY}:${process.env.WK_USER_ID}`,
        jti: nanoid()
      },
      process.env.WK_JWT_PRIVATE_KEY,
      {
        algorithm: 'RS256',
        expiresIn: 30
      }
    );
    
    res.json(token);
  });
}
