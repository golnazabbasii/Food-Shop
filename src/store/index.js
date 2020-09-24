

const updateObject=(oldState,updatedState)=>{
  return{
      ...oldState,
      ...updatedState
  }
}

export default updateObject