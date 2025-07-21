const {
  calcularFaltasTotais,
  calcularMedia,
  avaliarAluno,
} = require("./index.js");

describe("Testes da função calcularFaltasTotais", () => {
  test("Deveria retornar 15 faltas totais para 5 faltas", () => {
    expect(calcularFaltasTotais(5)).toBe(15);
  });

  test("Deveria retornar 'valor inválido' para -1 falta", () => {
    expect(() => calcularFaltasTotais(-1)).toThrow("Valor inválido");
  });

  test("Deveria retornar 'valor inválido' para 21 faltas", () => {
    expect(() => calcularFaltasTotais(21)).toThrow("Valor inválido");
  });

  test("Deveria retornar '0 faltas totais' para 0 faltas", () => {
    expect(calcularFaltasTotais(0)).toBe(0);
  });

  test("Deveria retornar 'Valor inválido' para 60 faltas", () => {
    expect(calcularFaltasTotais(20)).toBe(60);
  });
});

describe("Testes para a função calcularMedia", () => {
  test("Deveria retornar 8.5 para notas 8.0 e 9.0", () => {
    expect(calcularMedia(8.0, 9.0)).toBe(8.5);
  });

  test("Deveria retornar 'Nota inválida'para notas maiores que 10", () => {
    expect(() => calcularMedia(2, 11.0)).toThrow("Nota inválida");
  });

  test("Deveria retornar a metade e um dos valores caso um deles seja '0'", () => {
    expect(calcularMedia(2.0, 0.0)).toBe(1.0);
  });

  test("Deveria retornar o valor em caso de valores iguais", () => {
    expect(calcularMedia(7.0, 7.0)).toBe(7.0);
  });

  test("Deveria retornar 'Nota inválida' em caso de nota menor que '0'", () => {
    expect(() => calcularMedia(-1.0, 10)).toThrow("Nota inválida");
  });
});

describe("Teste para a função de situação do Aluno", () => {
  test("Deve retornar 'Aprovado'", () => {
    expect(avaliarAluno(8.5, 15)).toBe("Aprovado");
  });

  test("Deve retornar 'Aguardando a final'", () => {
    expect(avaliarAluno(5.5, 6)).toBe("Aguardando a final");
  });

  test("Deve retornar 'Reprovado por faltas'", () => {
    expect(avaliarAluno(2.5, 18)).toBe("Reprovado por faltas");
  });

  test("Deve retornar 'Reprovado por média'", () => {
    expect(avaliarAluno(1.5, 3)).toBe("Reprovado por média");
  });

  test("Deve retornar 'Reprovado por faltas'", () => {
    expect(avaliarAluno(7.5, 21)).toBe("Reprovado por faltas");
  });
});
