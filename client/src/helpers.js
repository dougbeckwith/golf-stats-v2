const getAverageYards = (club) => {
  let totalYards = 0
  let totalShots = club.totalShots
  if (club.totalShots === 0) {
    return 0
  } else {
    club.shots.forEach((shot) => {
      totalYards += shot.yards
    })
    return Math.round(totalYards / totalShots)
  }
}

const getAvgYardsForDataBase = (club, shot) => {
  let totalYards = parseInt(shot)
  let totalShots = club.totalShots + 1
  if (club.shots.length === 0) {
    return shot
  } else {
    club.shots.forEach((shot) => {
      totalYards += shot.yards
    })
    return Math.round(totalYards / totalShots)
  }
}

export {getAverageYards, getAvgYardsForDataBase}
