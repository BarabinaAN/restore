const compose = (...funcs) => (comp) => {
   return funcs.reduceRight(
      (wrapp, f) => f(wrapp), 
      comp 
   )
}

export default compose