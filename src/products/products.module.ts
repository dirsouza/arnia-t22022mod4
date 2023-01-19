import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CheckIdMiddleware } from '../shared/check-id.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckIdMiddleware).forRoutes('products/:id/(.*)');

    // .forRoutes(
    //   { method: RequestMethod.ALL, path: 'products/:id/(.*)' },
    //   // {
    //   //   method: RequestMethod.GET,
    //   //   path: 'products/:id',
    //   // },
    //   // {
    //   //   method: RequestMethod.PATCH,
    //   //   path: 'products/:id',
    //   // },
    //   // {
    //   //   method: RequestMethod.DELETE,
    //   //   path: 'products/:id',
    //   // },
    // );

    // .exclude(
    //   { method: RequestMethod.POST, path: 'products' },
    //   { method: RequestMethod.GET, path: 'products' },
    //   {
    //     method: RequestMethod.GET,
    //     path: 'products/:idProduct/category/:idCategory',
    //   },
    //   { method: RequestMethod.GET, path: 'products/find-by' },
    // );
  }
}
