import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const ParamId = createParamDecorator(
  (value: string, ctx: ExecutionContext): number => {
    const req = ctx.switchToHttp().getRequest<Request>();
    return Number(req.params[value ?? 'id']);
  },
);
