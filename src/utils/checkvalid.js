export const checkvalid = (email, password) => {
 
 const checkemail = /\S+@\S+\.\S+/.test(email)
 const checkpassword = /(?=.*[!#$%&?^*@~() "])(?=.{8,})/.test(password)
 
 if(!checkemail) return 'Email Not valid'
 if(!checkpassword) return 'Password Not Valid'

}

