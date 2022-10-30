const navbar = () => {
  return ` 
    <div id="logo"></div>
    <div id="btnlist">
        <h3 class="btn"><a href="index.html">Home</a></h3>
        <h3 class="btn" id="newaddbtn"><a> ADD New Recipie </a></h3>
        <h3 class="btn" id="sign"><a>Sign Up</a></h3>
        <h3 class="btn" id="Login"><a>Login</a></h3>
    </div>
    
`;
};

const searchBar = () => {
  return `<div><img src="https://www.themealdb.com/images/meal-icon.png" alt=""></div>
    <div id="s" ><h1>Welcome to BeZen food Hub</h1>
    <div class="header_search">
          <form action="" id="inputform" autocomplete='off'>
            <input type="search" name="" id="search"  placeholder="   Search" />
        
           
            <div id="result"></div>
          </form>
        </div>
        </div>
        <div><img src="https://www.themealdb.com/images/meal-icon.png" alt=""></div>`;
};

export { navbar, searchBar };
//export default ingrediantdata;
