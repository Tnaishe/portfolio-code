import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tina from "../components/Tina";

function Home() {
  return (
    <>
      <Navbar />
      <Tina
        cName="tina"
        tinaImg="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        title="Welcome"
        text="Tinashe Charumbira"
      />
      <Body />
      <Footer />
    </>
  );
}

export default Home;
