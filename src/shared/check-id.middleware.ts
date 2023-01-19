import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class CheckIdMiddleware implements NestMiddleware {
  use(req: Request, _: any, next: NextFunction) {
    const id = Number(req.params?.id);

    if (isNaN(id) || id < 0) {
      throw new Error('ID inválido');
    }

    next();
  }
}
