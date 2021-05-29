let findTheOldest = function(people) {
  const date = new Date();
  let peopleSorted = people.sort(function(a, b){
    if (b.yearOfDeath == undefined){
      b['yearOfDeath'] = date.getFullYear()
    }
    return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
  })
  return peopleSorted[0]
}
module.exports = findTheOldest;
