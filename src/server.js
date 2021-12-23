import app from "./app"
const port = 3002

app.listen(process.env.PORT || port, () => {
  console.log(`🚀 Server started on port ${port}`)
})