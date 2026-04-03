//Class component
//function component
import './App.css'
import NavBar from './components/NavBar.jsx'
import UsersList from './components/UsersList.jsx'
import Footer from './components/Footer.jsx'
import Counter from './components/Counter.jsx'
import APIDemo from './components/APIDemo.jsx'
import FormDemo from './components/FormDemo.jsx'
import UserForm1 from './components/UserForm1.jsx'
function App(){
  //State
  const users = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Vivaan Patel",
    email: "vivaan.patel@example.com",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Aditya Singh",
    email: "aditya.singh@example.com",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    name: "Sai Kumar",
    email: "sai.kumar@example.com",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    name: "Rohan Reddy",
    email: "rohan.reddy@example.com",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    name: "Ananya Gupta",
    email: "ananya.gupta@example.com",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    name: "Isha Verma",
    email: "isha.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Priya Nair",
    email: "priya.nair@example.com",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    name: "Sneha Das",
    email: "sneha.das@example.com",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    name: "Kavya Iyer",
    email: "kavya.iyer@example.com",
    image: "https://randomuser.me/api/portraits/women/15.jpg"
  }
  ];
  //Return a react element
  return(
  {/*
  <div>
    <NavBar />
    <Counter />  
    <div className='max-w-7xl mx-auto px-6 py-10 min-h-screen'>
      <UsersList />
    </div>
    <APIDemo />
    <Footer />
   </div> */},
   <div>
    {/* <NavBar /> */}
    {/*<APIDemo />*/},
    {/* <FormDemo /> */}
    <UserForm1 />
   </div>
  )

}
export default App;
