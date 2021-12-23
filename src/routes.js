import { Router } from "express"
import { v4 } from "uuid"
import dataUsers from "./data.json"

const routes = new Router()

const checkUserId = (request, response, next) => {
  const { id } = request.params
  const index = users.findIndex( user => user.id === id )
  
  if (index < 0) {
    return response.status(404).json({ error: "User not found" })
  }

  request.userIndex = index

  next()
}

const users = []

dataUsers.filter(user => users.push({ id: v4(), name: user.nome, number: user.celular }))

routes.get("/numbers", (request, response) => {
  return response.json(users)
})

routes.post("/numbers", (request, response) => {
  const { name, number } = request.body

  const user = { id: v4(), name, number }

  users.push(user)

  return response.status(201).json(user)
})

routes.delete("/numbers/:id", checkUserId, (request, response) => {
  const index = request.userIndex
  
  users.splice(index, 1)

  return response.status(204).json()
})

export default routes