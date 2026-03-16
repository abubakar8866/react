import People from "./people";
import Home from "./home"
import Car from "./car";


function people(name,rollno,city,course,university){
    this.name = name,
    this.rollno = rollno,
    this.city = city,
    this.course = course,
    this.university = university
  };

function App() {
  let name = "Abubakar";
  let c = {name:'BMW',color:'black'};
  let p1 = new people("Abubakar",12,"Ahmedabad","MCA","GLS");
  return (
    <>
      <Home n={name}/>
      <Car car={c}></Car>
      <People p={p1}></People>
    </>
  )
}

export default App
