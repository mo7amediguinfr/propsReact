import PropTypes from "prop-types";
function ProfileComponent(props){
        return(
        <div>
            {props.children}
            <p style={{width: '50%',marginLeft: '145px',fontFamily: 'algerian',textAlign: 'center',paddingBottom: '20px',paddingTop: '7px',}}>{props.FullName}</p>
            <p style={{fontFamily: 'algerian',textAlign: 'center',paddingBottom: '20px'}}>{props.bio}</p>
            <p style={{fontFamily: 'algerian',textAlign: 'center',paddingBottom: '20px'}}>{props.profession}</p>
            <button onClick={props.handle} style={{fontFamily: 'inherit',textAlign: 'center',cursor:'pointer',display:'block',margin:'auto',backgroundColor:'#807ce4',borderRadius:'20px'}}>See Informations</button>
        </div>
        )
}

 //the default props for ProfileComponent

ProfileComponent.defaultProps = {
    FullName: 'Mohamed Iguinfr',
    bio: 'Hi there, I am a Junior Developer',
    profession: 'Web Develper',
    handleName:()=>alert('Mohamed Iguinfr')
  };

//Props Type

ProfileComponent.propTypes={
    FullName:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired,
    handleName:PropTypes.func.isRequired,
}
export default ProfileComponent;