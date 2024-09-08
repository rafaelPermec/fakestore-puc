interface ProductsDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "service" | "product";
  quantity: number;
}

const ProductsMock: Omit<ProductsDTO, "quantity">[] = [
  {
    id: 1,
    name: "Product 1",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 100,
    image: "/images/itens/product-1.jpg",
    category: "product",
  },
  {
    id: 2,
    name: "Product 2",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 200,
    image: "/images/itens/product-2.jpg",
    category: "product",
  },
  {
    id: 3,
    name: "Service 1",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 300,
    image: "/images/itens/services-1.jpg",
    category: "service",
  },
  {
    id: 4,
    name: "Service 2",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 400,
    image: "/images/itens/services-2.jpg",
    category: "service",
  },
  {
    id: 5,
    name: "Product 3",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 500,
    image: "/images/itens/product-3.jpg",
    category: "product",
  },
  {
    id: 6,
    name: "Product 4",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 600,
    image: "/images/itens/product-4.jpg",
    category: "product",
  },
  {
    id: 7,
    name: "Service 3",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 700,
    image: "/images/itens/services-3.jpg",
    category: "service",
  },
  {
    id: 8,
    name: "Service 4",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 800,
    image: "/images/itens/services-4.jpeg",
    category: "service",
  },
  {
    id: 9,
    name: "Product 5",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 900,
    image: "/images/itens/product-5.jpg",
    category: "product",
  },
  {
    id: 10,
    name: "Product 6",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1000,
    image: "/images/itens/product-6.jpg",
    category: "product",
  },
  {
    id: 11,
    name: "Service 5",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1100,
    image: "/images/itens/services-5.jpeg",
    category: "service",
  },
  {
    id: 12,
    name: "Service 6",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1200,
    image: "/images/itens/services-6.jpeg",
    category: "service",
  },
  {
    id: 13,
    name: "Product 7",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1300,
    image: "/images/itens/product-7.jpg",
    category: "product",
  },
  {
    id: 14,
    name: "Product 8",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1400,
    image: "/images/itens/product-8.png",
    category: "product",
  },
  {
    id: 15,
    name: "Service 7",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1500,
    image: "/images/itens/services-7.png",
    category: "service",
  },
  {
    id: 16,
    name: "Service 8",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1600,
    image: "/images/itens/services-8.jpeg",
    category: "service",
  },
  {
    id: 17,
    name: "Product 9",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1700,
    image: "/images/itens/product-9.jpg",
    category: "product",
  },
  {
    id: 18,
    name: "Product 10",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1800,
    image: "/images/itens/product-10.jpg",
    category: "product",
  },
];

export default ProductsMock;
export type { ProductsDTO };
