import jwt from 'jsonwebtoken';

const AuthenticationMiddleware = (req, res, next) => {
  // Obtener el token de la solicitud (por ejemplo, de los encabezados o de las cookies)
  const token = req.headers.authorization;

  // Verificar si se proporcionó un token
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, 'secretKey');

    // Adjuntar la identidad del usuario a la solicitud para su posterior uso
    req.userId = decoded.userId;

    // Continuar con el siguiente middleware o controlador
    next();
  } catch (error) {
    // Manejo de errores de token inválido
    return res.status(401).json({ error: 'Token inválido' });
  }
};

export default AuthenticationMiddleware;