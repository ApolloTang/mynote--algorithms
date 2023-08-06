export default function permuteString(strToPermute: string) {
  const l = strToPermute.length

  const perm:string[] =  []                       // contains the actual permutation
  const used = Array.from( {length:l}, ()=>false) // boolean array to remember what characters we have already used.

  const results: string[] = []
  permute(0)
  return results

  function permute(i:number) {
    if (i === l) {
      results.push(perm.join(''))
      return
    }

    for ( let j = 0; j < l; j++) {
      if (!used[j]) {
        perm[i] = strToPermute[j]
        used[j] = true
        permute(i+1)
        used[j] = false
      }
    }
  }
}



