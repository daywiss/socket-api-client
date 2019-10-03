const set = require('lodash/set')
const unset = require('lodash/set')

module.exports = (state) => (channel) => {
  return ([path=[],data])=>{
    if(path.length){
      if(data === undefined || data === null){
        unset(state,[channel,...path])
      }else{
        set(state,[channel,...path],data)
      }
    }else{
      state[channel] = data
    }
  }
}

