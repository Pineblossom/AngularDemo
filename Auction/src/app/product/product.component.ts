import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/321x150';
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品', ['电子产品', '硬件设备']),
      new Product(1, '第二个商品', 2.99, 4.5, '这是第二个商品', ['电子产品', '硬件设备']),
      new Product(1, '第三个商品', 3.99, 4.5, '这是第三个商品', ['电子产品', '硬件设备']),
      new Product(1, '第四个商品', 4.99, 2.5, '这是第四个商品', ['电子产品', '硬件设备']),
      new Product(1, '第五个商品', 5.99, 1.5, '这是第五个商品', ['电子产品', '硬件设备'])
    ];
  }

}
export class Product {
  constructor(
    public id: number,  // 商品ID
    public title: string, // 商品名称
    public price: number, // 商品价格
    public rating: number,  // 商品星级
    public desc: string,  // 商品描述
    public categories: Array<string>  // 商品类别
  ) {

  }
}
