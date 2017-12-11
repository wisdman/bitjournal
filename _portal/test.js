

const pr = Promise.resolve(1000)

let a = pr.then( (i) => console.log('AAAA', i) )



setTimeout( () => {
  pr.then( (i) => console.log('BBB', i) )
}, 3000 )
