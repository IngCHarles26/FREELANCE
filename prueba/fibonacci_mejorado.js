function fibonacci(n,mem={}){
  if(n<=1) return mem[n]=n;
  if(mem[n]) return mem[n];
  return mem[n] = fibonacci(n-1,mem) + fibonacci(n-2,mem)
}


fibonacci(7)