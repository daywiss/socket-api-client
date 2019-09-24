const Socket = require('./socket')
const State = require('./state')
const assert = require('./assert')
module.exports = async (io,{channels=[],host},state={},emit=x=>x)=>{

  assert(io,'requires socket io client library')
  assert(channels.length,'requires at least one channel')

  const setState = State(state)
  const socket = await Socket(io,host,(...args)=>emit('socket',...args))

  return channels.reduce((result,channel)=>{
    result[channel] = socket(channel,events=>{
      events.forEach(setState(channel))
      emit('change',channel,state[channel],state)
    })
    return result
  },{})

}

