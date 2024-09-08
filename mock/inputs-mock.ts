const ClientInputs = [
  {
    label: "Nome",
    type: "text",
    id: "name",
    defaultValue: "Pedro Duarte",
    placeholder: "Digite seu nome",
  },
  {
    label: "Nome de Usuário",
    type: "text",
    id: "username",
    defaultValue: "",
    placeholder: "Digite seu nome de usuário",
  },
  {
    label: "Email",
    type: "email",
    id: "email",
    defaultValue: "",
    placeholder: "Digite seu email",
  },
  {
    label: "Endereço",
    type: "text",
    id: "address",
    defaultValue: "Pedro Duarte",
    placeholder: "Digite seu endereço",
  },
  {
    label: "Complemento de Endereço",
    type: "text",
    id: "addressComplement",
    defaultValue: "Pedro Duarte",
    placeholder: "Campo para complemento do endereço",
  },
  {
    label: "Cidade e Estado",
    type: "text",
    id: "city",
    defaultValue: "",
    placeholder: "Digite sua cidade e estado",
  },
  {
    label: "CPF",
    type: "text",
    id: "cpf",
    defaultValue: "",
    placeholder: "000.000.000-00",
  },
  {
    label: "Senha",
    type: "password",
    id: "name",
    defaultValue: "",
    placeholder: "Senha com no mínimo 8 caracteres",
  },
  {
    label: "Confirme sua Senha",
    type: "password",
    id: "email",
    defaultValue: "",
    placeholder: "Confirme sua senha",
  },
];

const PetInputs = [
  {
    label: "Nome",
    type: "text",
    id: "name",
    defaultValue: "Rex",
    placeholder: "Digite o nome do seu pet",
  },
  {
    label: "Raça",
    type: "text",
    id: "breed",
    defaultValue: "",
    placeholder: "Digite a raça do seu pet",
  },
  {
    label: "Idade",
    type: "number",
    id: "age",
    defaultValue: "",
    placeholder: "Digite a idade do seu pet",
  },
  {
    label: "Peso",
    type: "number",
    id: "weight",
    defaultValue: "",
    placeholder: "Digite o peso do seu pet",
  },
  {
    label: "Altura",
    type: "number",
    id: "height",
    defaultValue: "",
    placeholder: "Digite a altura do seu pet",
  },
  {
    label: "Gênero",
    type: "text",
    id: "gender",
    defaultValue: "",
    placeholder: "Digite o gênero do seu pet",
  },
  {
    label: "Observações",
    type: "text",
    id: "observations",
    defaultValue: "",
    placeholder: "Caso queira, diga mais sobre seu pet",
  },
];

const CreditCardInputs = [
  {
    label: "Número do Cartão",
    type: "text",
    id: "cardNumber",
    defaultValue: "",
    placeholder: "Digite o número do cartão",
  },
  {
    label: "Nome do Titular",
    type: "text",
    id: "cardHolder",
    defaultValue: "",
    placeholder: "Digite o nome do titular",
  },
  {
    label: "Data de Validade",
    type: "text",
    id: "expirationDate",
    defaultValue: "",
    placeholder: "MM/AA",
  },
  {
    label: "CVV",
    type: "text",
    id: "cvv",
    defaultValue: "",
    placeholder: "Digite o CVV",
  },
];

export { ClientInputs, PetInputs, CreditCardInputs };