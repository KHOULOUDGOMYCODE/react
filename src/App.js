import './App.css';




function App() {
  return (
    <form>
      <div class='header'><h3>My Form.com</h3></div>
      <div class="form-group">
      <label for="exampleInputName">Name</label>
      <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp"></input>
      </div>
      <div class="form-group">
      <label for="exampleInputFamilyName">Family Name</label>
      <input type="Familyname" class="form-control" id="exampleInputFamilyName" aria-describedby="FamilynameHelp"></input>
      </div>
      <div class="form-group">
      <label for="exampleInputCountry">Country</label>
      <input type="Country" class="form-control" id="exampleInputCountry" aria-describedby="CountryHelp"></input>
      </div>
      <div class="form-group">
      <label for="exampleInputState">State</label>
      <input type="State" class="form-control" id="exampleInputState" aria-describedby="StateHelp"></input>
      </div>
      <div class="form-group">
      <label for="exampleInputCity">City</label>
      <input type="City" class="form-control" id="exampleInputCity" aria-describedby="CityHelp"></input>
      </div>
      <div class="form-group">
      <label for="exampleInpuPhoneNumber">Phone Number</label>
      <input type="PhoneNumber" class="form-control" id="exampleInputPhoneNumber" aria-describedby="PhoneNumberHelp"></input>
      </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"></input>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  
  );
}

export default App;
