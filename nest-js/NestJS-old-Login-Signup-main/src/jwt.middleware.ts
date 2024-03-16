// // jwt.middleware.ts
// import { Injectable, NestMiddleware, UnauthorizedException, Logger } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class JwtMiddleware implements NestMiddleware {
//   private readonly logger = new Logger(JwtMiddleware.name);

//   constructor(private readonly jwtService: JwtService) {}

//   async use(req: Request, res: Response, next: NextFunction) {
//     const token = req.headers.authorization?.split(' ')[1];

//     if (token) {
//       try {
//         const decoded = this.jwtService.verify(token);
//         req['user'] = decoded; // Attach decoded user data to request object for further use
//         next();
//       } catch (error) {
//         this.logger.error(error.message); // Log the error
//         throw new UnauthorizedException('Invalid or expired token');
//       }
//     } else {
//       // Skip authentication for signup endpoint
//       if (req.url === '/auth/signup') {
//         return next();
//       }
      
//       throw new UnauthorizedException('Token not provided');
//     }
//   }
// }
