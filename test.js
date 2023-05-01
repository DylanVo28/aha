function React(){
  const hooks=[]
  let index=0
  function render(component){
    index=0
    return component()
  }
  function useState(initialValue){
    const indexHooks=index
    hooks[indexHooks]=hooks[indexHooks] || initialValue
    function setState(newVal){
      hooks[indexHooks]=newVal
    }

    index+=1

    return [hooks[indexHooks],setState]
  }
  return {
    render,
    useState,

  }
}

const {render,useState}=React()
function Component(){
  const [value,setState]=useState(0)
  const [value2,setState2]=useState(0)

  console.log(value,value2)
  setState(value+1)
  setState2(value2+1)
}
render(Component)
render(Component)
render(Component)
