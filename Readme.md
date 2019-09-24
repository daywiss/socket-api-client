# Socket-API-Client
Connects to a specific style of socket API.

## Install
`yarn add https://github.com/daywiss/socket-api-client`

## Usage
```js
import Client from 'socket-api-client'
import io from 'socket.io-client'
import events from 'events'

Client(io,{
  host:'ws://some.api.endpoint',
  channels:[
  //join arbitrary api channels
  'private','public','admin','auth'
  ],
},(...args)=>events.emit(...args)).then(async actions=>{

  let state = {}

  events.on('change',(channel,channelState,fullState)=>{
    //any time there are state changes this gets called
    state[channel] = channelState
  })

  events.on('socket',(event)=>{
    console.log('a socket issue happened: ',event)
  })

  //all channels have a call function, to call the api
  const response = await actions.auth.call('login','username','password')

})
```




```
