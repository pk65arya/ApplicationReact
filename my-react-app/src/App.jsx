// import Header from "./Header.jsx"
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";
//import Card from "./Card.jsx";
//import Button from "./Button.jsx";
import Student from "./Student.jsx";
function App() {
  return(
    <>
    {/* <Header></Header>
    <Food></Food>
    <Food></Food>
    <Footer></Footer> */}
{/* <Card></Card> */}
    {/* <Button /> */}
<Student name="Pradeep" age={25} isStudent={true} />
<Student name="pankaj" age={30} isStudent={false} />
<Student name="preetesh" age={35} isStudent={false} />
<Student name="durgesh" age={50} isStudent={true} />
<Student name="Neha" />
    </>
  );
}

export default App
