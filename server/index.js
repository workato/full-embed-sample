import nanoid from 'nanoid';
import {sign} from 'jsonwebtoken';

export default app => {
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
