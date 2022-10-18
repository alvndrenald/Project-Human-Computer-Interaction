function validate(){
    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let agree = document.getElementById('checkbox')
    let country = document.getElementById('country')
    let date = document.getElementById('dateob')
    // let dateob = document.getElementById('dateob')
    // let region = document.getElementById('region')
    let errorMsg = []
  
    valUsername(username, errorMsg)
    valEmail(email, errorMsg)
    valPassword(password, errorMsg)
    valAgree(agree, errorMsg)
    valregion(country, errorMsg)
    valdate(date, errorMsg)
    // valregion1(country, errorMsg)
    // valregion2(country, errorMsg)
    // valregion3(country, errorMsg)
    // valregion4(country, errorMsg)
    // valdateob(dateob, errorMsg)
    // valregion(region, errorMsg)
  
    if(errorMsg.length === 0){
      alert('Registration Success!')
    }
    else{
      alert(errorMsg.join('\n'))
    }
  }
  
  function valUsername(username, errorMsg){
    let str = username.value, cnt = 0, space = 0
    if(str === '') errorMsg.push('Username required')
    else{
      if(str.length < 5) errorMsg.push('Username minimal 5 characters')
      for(let i = 0; i < str.length; i++){
        if(str.charAt(i) >= '0' && str.charAt(i) <= '9') cnt++;
        if(str.charAt(i) == ' ') space++;
      }
      if(cnt === 0) errorMsg.push('Username should contain numbers')
      if(space === 0) errorMsg.push('Username should contain space')
    }
  }
  
  function valPassword(password, errorMsg){
    let str = password.value, cnt = 0;
    if(str === '') errorMsg.push('Password required')
    else{
      if(str.length < 7) errorMsg.push('Password minimal 8 characters')
      for(let i = 0; i<str.length; i++){
        if(str.charAt(i) >= '0' && str.charAt(i) <= '9') cnt++;
      }
      if(str.charAt(0) >= 'a' && str.charAt(0) <= 'z') errorMsg.push('First Password alphabet must be capital')
      if(cnt === 0) errorMsg.push('Password must contain numbers')
    }
  }
  
  function valEmail(email, errorMsg){
    let str = email.value
    if(str === '') errorMsg.push('Email required')
    else{
      if (str.startsWith('.') || str.startsWith('@')) 
        errorMsg.push('Email cannot start with . or @')
      if (str.indexOf('.') === (str.indexOf('@') + 1))
        errorMsg.push('Email cannot contain . after @')
      if (!(str.endsWith('@gmail.com')))
        errorMsg.push('Email must ends with @gmail.com')
    }
  }
  
  //check region
  function valregion(country, errorMsg){
    if(!country.value) errorMsg.push('Select your region')
  }

  function valdate(date, errorMsg){
    if(!date.value) errorMsg.push('Select your Date of birth')
  }
  
  // function valregion1(selectedCountry, errorMsg){
  //   if(selectedCountry.value = "Asia"){
  //     errorMsg.push('a')
  //   }
  // }
  // function valregion2(selectedCountry, errorMsg){
  //   if(selectedCountry.value = "Europe"){
  //     errorMsg.push('b')
  //   }
  // }
  // function valregion3(selectedCountry, errorMsg){
  //   if(selectedCountry.value = "America"){
  //     errorMsg.push('v')
  //   }
  // }
  // function valregion4(selectedCountry, errorMsg){
  //   if(selectedCountry.value = "Australia"){
  //     errorMsg.push('f')
  //   }
  // }
    // var countries = ["Asia", "Europe", "America", "Australia"];
    // for(let i=0; i< countries.length; i++){
    //   if(country.value == countries[i]){
    //     selectedCountry = countries[i];
    //     break;
    //   }
    // }
  
  

  
//  function valdateob(dateob, errorMsg){
//     Array[9]
//     if(str === '') errorMsg.push('Date of birth required')
//       for(let j=0 ; j>Array ;j++){
//         if (j[0]>4 && j[1] > 9 && j[3]>2 && j[4] > 9 && j[5]>2 && j[6] >9 && j[7]>9 && j[8] >9)
//         errorMsg.push('date error')
//       }
//   }

//   function valregion(_region, errorMsg){
//     if(str.value != Asia || str.value != America || str.value != Europe)
//     alert('wrong')
//     // errorMsg.push('Region must be between(Asia/America/Europe)')
//   }

  function valAgree(agree, errorMsg){
    if(!agree.checked) errorMsg.push('You must agree with terms and conditions')
  } 