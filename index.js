const calcularFaltasTotais = (x) => {
  if (x < 0 || x > 20) {
    throw new Error("Valor inválido");
  } else {
    return x * 3;
  }
};

const calcularMedia = (x, y) => {
  if (x > 10 || y > 10 || x < 0 || y < 0) {
    throw new Error("Nota inválida");
  } else {
    return (x + y) / 2;
  }
};

const avaliarAluno = (media, faltas) => {
  if (media >= 7 && faltas <= 15) {
    return "Aprovado";
  } else if (media >= 3.0 && media < 7.0 && faltas <= 15) {
    return "Aguardando a final";
  } else if (media >= 7.0 && faltas > 15) {
    return "Reprovado por faltas";
  } else if (media < 3.0 && faltas <= 15) {
    return "Reprovado por média";
  } else {
    return "Reprovado por faltas";
  }
};

module.exports = {
  calcularFaltasTotais,
  calcularMedia,
  avaliarAluno,
};
