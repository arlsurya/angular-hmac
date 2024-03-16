module.exports =  {
    loginUser: async(req,res)=>{
        try {
            //handle login user based on signature matches
            
            return res.status(200).json({
                message: "Login successful after match signature",
            })
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}