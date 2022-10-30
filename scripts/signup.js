function signup() {



    return `
    <form id="form">
     
      <div>
        <h2>Sign Up</h2>
      </div>
      <div>
        <input required id="email" type="email" placeholder="Enter your email" >
      </div>


     <div>
      <input required id="username" type="text" placeholder="Enter your Username">
     </div>

      <div>
        <input required id="password" type="password" placeholder="Enter your password" >
      </div>
      
      <div>
        <input class="submitclass"  type="submit" value="Sign Up">
      </div>
  </form>

  
    `
}

export default signup;