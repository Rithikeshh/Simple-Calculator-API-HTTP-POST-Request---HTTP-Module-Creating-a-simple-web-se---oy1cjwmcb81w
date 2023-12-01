const genericMiddleware = (req, res, next)=>{
    const {num1, num2} = req.body;
    if(num1 < -1000000 || num2 < -1000000){
        return res.status(400).send("Underflow");
    }
    else if(num1 > 1000000 || num2 > 1000000){
        return res.status(400).send("Overflow");
    }
    else if(isNaN(num1) || isNaN(num2)){
        return res.status(400).send("Invalid data types");
    }
    next();
}
module.exports = genericMiddleware