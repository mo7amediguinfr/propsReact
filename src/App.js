import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import myImg from './mohamedimg.jpg';
function App() {
  function handleName(){
    alert('Mohamed Iguinfr');
  }
  return (
    <div style={{backgroundColor:'#807ce4',width:'50%',margin:'auto',marginTop:'40px',borderRadius:'50px'}}>
      

      <ProfileComponent FullName='Mohamed Iguinfr' bio='Hi there, I am a Junior Developer' profession='Web Devolper' handle={handleName}>    {/*functionHandleName={handleName}*/}
      <img src={myImg} alt="img"  style={{ width: '135px',borderRadius: '30%',border:' 5px solid #eee',boxShadow:' 0 3px 2px rgba(0, 0, 0, 0.3)',marginLeft: '235px',marginTop: '20px'}}/>
      </ProfileComponent>
    </div>
    
  );
}

export default App;
