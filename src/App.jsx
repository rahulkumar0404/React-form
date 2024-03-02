import Header from './components/Header';
import StateLogin from './components/StateLogin'
// import Login from './components/Login';
// import Signup from './components/Signup';
// import { useState } from 'react';
// import Input from './components/Input';
// export default function App() {
//   const [firstText, setFirstText] = useState('');
//   const [secondText, setSecondText] = useState('');
//   function handleFirstChange(value) {
//     setFirstText(value);
//   }
//   function handleSecondChange(value) {
//     setSecondText(value);
//   }
  
//   const InputContainer = styled
//   return (
//     <>
//       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '50px'}}>
//         <Input
//           labelText="First text"
//           onChange={(value) => handleFirstChange(value, firstText)}
//         />
//         <Input
//           labelText="Second text"
//           onChange={(value) => handleSecondChange(value, secondText)}
//         />
//       </div>

//       <div style={{ background: 'aqua', width: '100%', height: '40px' }}>
//         <p style={{ color: 'red', fontSize: '14px', fontFamily: 'fangsong' }}>
//           {firstText + ' ' + secondText}
//         </p>
//       </div>

//     </>
//   );
// }

function App(){
  return (
    <>
  <Header />
  <main>
    <StateLogin />
  </main>
    </>
  )
}

export default App