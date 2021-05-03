import isWinerMinmax from './isWiner'

export function modEasy(moveCurrent) {
  const numRadom = Math.floor((Math.random() * moveCurrent.length) + 0)
  return moveCurrent[numRadom] - 1
}

function minmax(velhaLista, indexMove, depth, moveBot, playerMark, iaMark) {
  var bestScore = 0, score = 0, valueCurrent

  if (isWinerMinmax(velhaLista) === true) {
    if (moveBot === true) return -1
    if (moveBot === false) return +1
  } else {
    if(indexMove < depth) {
      if(moveBot === true) {
        bestScore = -999

        for(let l = 0; l < 3; l++) {
          for(let c = 0; c < 3; c++) {
            valueCurrent = velhaLista[l][c]
            if (Number.isInteger(velhaLista[l][c])) {
              velhaLista[l][c] = iaMark
              score = minmax(velhaLista, indexMove + 1, depth, false, playerMark, iaMark)
              velhaLista[l][c] = valueCurrent
              if(score > bestScore) {
                bestScore = score
              }
            }
          }
        }

        return bestScore
      } else {
        bestScore = 999

        for (var l = 0; l < 3; l++) {
          for (var c = 0; c < 3; c++) {
            valueCurrent = velhaLista[l][c]
            if (Number.isInteger(velhaLista[l][c])) {
              velhaLista[l][c] = playerMark
              score = minmax(velhaLista, indexMove + 1, depth, true, playerMark, iaMark)
              velhaLista[l][c] = valueCurrent
              if (score < bestScore) {
                bestScore = score
              }
            }
          }
        }

        return bestScore
      }
    } else {
      return 0
    }
  }
}

export function bestMove(velhaLista, indexMove, depth, playerMark, iaMark) {
  var x = -1, y = -1, valueCurrent
  var score = 0, bestScore = -999
  console.log(indexMove ,velhaLista)

  for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
      valueCurrent = velhaLista[l][c]
      if (Number.isInteger(velhaLista[l][c])) {
        velhaLista[l][c] = iaMark
        score = minmax(velhaLista, indexMove+1, depth, false, playerMark, iaMark)
        velhaLista[l][c] = valueCurrent
        if(score > bestScore) {
          bestScore = score
          x = l
          y = c
        }
      }
    }
  }

  return x*3+y
}
