export default function isWiner(velhaLista) {
  var resultCurrent
  //Verifica se ouvi vitória em linha
  velhaLista.forEach(l => {
    if (l[0] === l[1] && l[1] ===l[2]) {
      resultCurrent = true
    }
  })
  //Verifica se ouvi vitória nas colunas
  for (let c = 0; c < velhaLista.length; c++) {
    if (velhaLista[0][c] === velhaLista[1][c] && velhaLista[1][c] === velhaLista[2][c]) {
      resultCurrent = true
    } 
  }
  //Verifica se ganhou nas diagonais
  if (velhaLista[0][0] === velhaLista[1][1] && velhaLista[1][1] === velhaLista[2][2]) {
    resultCurrent = true
  }
  if (velhaLista[2][0] === velhaLista[1][1] && velhaLista[1][1] === velhaLista[0][2]) {
    resultCurrent = true
  }

  return resultCurrent
}