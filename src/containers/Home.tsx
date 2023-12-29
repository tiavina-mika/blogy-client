import Articles from "./article/Articles"

const Home = () => {
  return (
    <div css={{ minHeight: "100vh" }} className="flexColumn">
      <h1>Home</h1>
      <Articles />
    </div>
  )
}

export default Home