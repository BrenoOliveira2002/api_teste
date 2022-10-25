import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O titulo é obrigatório")
      .isLength({ min: 5 })
      .withMessage("O titulo precisa ter no minimo 5 caracteres"),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um número")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota precisa ser entre 0 a 10");
        }
        return true;
      }),
      body("description").isString()
      .withMessage("A descrição é obrigatória"),
      body("director").isString()
      .withMessage("O nome do diretor é obrigatorio"),
      body("poster").isURL().withMessage("A imagem precisa ser em url")
  ];
};
