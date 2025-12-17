export class Product {
  productId?: number;
  productName: string;
  productPrice?: number;
  productCode: string = '';
  createdAt: Date = new Date();
  constructor();
  constructor(productId: number, productName: string, productPrice: number);

  constructor(productId?: number, productName?: string, productPrice?: number) {
    if (productId && productName && productPrice) {
      this.productId = productId;
      this.productName = productName;
      this.productPrice = productPrice;
      this.productCode = this.productId ? `PROD-${productId}` : '';
    } else {
      this.productName = '';
    }
  }
}
