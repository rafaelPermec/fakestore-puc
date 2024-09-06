interface ProductsDTO {
  id: number;
  name: string;
}

const ProductsMock = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

export default ProductsMock;
export type { ProductsDTO };