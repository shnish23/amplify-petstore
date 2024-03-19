import { useState } from 'react';
import './App.css';
import {
  Pets,
  NavBarHeader2,
  AddPet,
  PetDetails,
 } from './ui-components';
 import { withAuthenticator } from '@aws-amplify/ui-react';
 
 function App({user,signOut}) {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();
  const [
    name,
    setName,
  ] = useState("");
  const [
    age,
    setAge,
  ] = useState("");
  const [
    breed,
    setBreed,
  ] = useState("");
  const [
    about,
    setAbout,
  ] = useState("");
  const [
    color,
    setColor,
  ] = useState("");
  const [
    image,
    setImage,
  ] = useState("");
  const formOverrides = {
    TextField29766922:{
      placeholder:name
    },
    TextField29766923:{
      placeholder:age
    },
    TextField29766924:{
      placeholder:breed
    },
    TextField3890442:{
      placeholder:about
    },
    TextField3890449:{
      placeholder:color
    },
    TextField3890456:{
      placeholder:image
    },
    image :{
      src: updatePet == null 
      ? "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9nfHx8fHx8MTY1MjczMzA0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
      : updatePet.image
    },
    Button29766926:{
      isDisabled: updatePet ? true : false
    },
    Button3890484:{
      isDisabled: !updatePet ? true : false
    },
    MyIcon:{
      onClick: ()=>{
        setShowForm(false);
      }
    }
   };
   const navbarOverrides = {
    Button: {
      onClick: signOut
    },
    "Add Pet":{
      style:{
        cursor: "pointer"
      },
      onClick: ()=>{
        setShowForm(!showForm);
      },
    }
   };
   return (
     <div className="App">
      <NavBarHeader2 width={"100%"} overrides={navbarOverrides} />
      <header className="App-header">
        {showDetails && <PetDetails 
          pet={pet}
          style={{
            textAlign: "left",
            margin: "1rem",
          }}
          overrides={{
            Close: {
              onClick: ()=>{
                setShowDetails(false);
              },
              style: {
                cursor: "pointer",
              }
            }
          }}
          />}
        {
          showForm && (
          <AddPet
            pet={updatePet}
            overrides={
              formOverrides
            }
            style={{
              textAlign: "left",
              margin: "1rem",
            }} />
          )
        }
        <Pets
          overrideItems={({item,index})=>({
            overrides:{
              Button29766907: {
                onClick: ()=>{
                  setShowDetails(!showDetails);
                  setPet(item);
                }
              },
              Button3886532: {
                onClick: ()=>{
                  if (!showForm) {
                    setShowForm(true);
                    setUpdatePet(item);
                    setName(item.name);
                    setAge(item.age);
                    setBreed(item.breed);
                    setAbout(item.about);
                    setColor(item.color);
                    setImage(item.image);
                  }
                }
              }
            }
          })}
        />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
