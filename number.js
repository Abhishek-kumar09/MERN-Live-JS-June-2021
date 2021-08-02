function a() {
  
  return function b () {
    console.log("f(b)")
  }

}

let c = a();

c();
