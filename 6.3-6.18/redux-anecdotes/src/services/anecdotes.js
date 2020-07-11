import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (object) => {
  const response = await axios.post(baseUrl, object)
  return response.data
}


const vote = async (id) => {
  //const response = await axios.get(baseUrl)
  //await axios.delete(baseUrl)
  //response.data.map((it)=>it.id==id?{...it,'votes':it.votes+1}:it)
  //const response = await axios.post(baseUrl, object)
  //return response.data
  const response = await axios.get(baseUrl)

  let object=response.data.find((it)=>it.id==id)
  object={...object,"votes":(object.votes+1)}
  const answer=await axios.put(baseUrl+"/"+id,object)
  return answer
}

export default {
  getAll,
  createNew,vote
}