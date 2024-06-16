export function formatarData(dataStr: string) {
  const data = new Date(dataStr);
  
  const meses = [
    "jan", "fev", "mar", "abr", "mai", "jun",
    "jul", "ago", "set", "out", "nov", "dez"
  ];

  const dia = data.getDate();
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();

  return `Joined ${dia}  ${mes}  ${ano}`;
}
