interface ServicesDTO {
  id: number;
  name: string;
}

const ServicesMock = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

export default ServicesMock;
export type { ServicesDTO };