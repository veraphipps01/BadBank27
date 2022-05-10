function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="Press on a DONUT to create a new account or login to an existing one."
      body={(<a type="submit" className="nav-link" href="#/CreateAccount/"> <img src="donut.png" className="img-fluid" alt="Responsive image"/> </a>)}
    
    />
    
  );  
}

