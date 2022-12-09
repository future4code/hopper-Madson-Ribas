const imprimeCresc = (n: number) => {
    if (n >= 0) {
        imprimeCresc(n - 1);
        console.log(n);
    }
  };

  const imprimeDecr = (n: number) => {
    if (n >= 0) {
        console.log(n);
        imprimeDecr(n - 1);
    }
  };

  imprimeCresc(10);
  imprimeDecr(10);