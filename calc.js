const express = require('express');
const {getMean, getMedian, getMode} = require('./formulas')
const ExpressError = require('./expressError')

const app = express();
app.use(express.json());

app.get('/mean', function(req, res, next){
    try{
        if(!req.query['nums']) throw new ExpressError("Nums are required", 400)
        const params = req.query['nums'];
        const ints = params.split(',');
        for(let i of ints){
            if(isNaN(i)) throw new ExpressError(`${i} is not a number`, 400)
        }
        const num = getMean(ints);
        return res.json({response: {
            operation: "mean",
            value: num
        }})
    } catch(e) {
        next(e)
    }
})

app.get('/median', function(req, res, next){
    try{
        if(!req.query['nums']) throw new ExpressError("Nums are required", 400)
        const params = req.query['nums'];
        const ints = params.split(',');
        for(let i of ints){
            if(isNaN(i)) throw new ExpressError(`${i} is not a number`, 400)
        }
        const num = getMedian(ints);
        return res.json({response: {
        operation: "median",
        value: num
    }})
    } catch(e) {
        next(e)
    }
})

app.get('/mode', function(req, res, next){
    try{
        if(!req.query['nums']) throw new ExpressError("Nums are required", 400)
        const params = req.query['nums'];
        const ints = params.split(',');
        for(let i of ints){
            if(isNaN(i)) throw new ExpressError(`${i} is not a number`, 400)
        }
        const num = getMode(ints);
        return res.json({response: {
        operation: "mode",
        value: num
    }})  
    } catch(e) {
        next(e)
    }
    
})

app.get('/all', function(req, res, next) {
    try{
        if(!req.query['nums']) throw new ExpressError("Nums are required", 400)
        const params = req.query['nums'];
        const ints = params.split(',');
        for(let i of ints){
            if(isNaN(i)) throw new ExpressError(`${i} is not a number`, 400)
        }
        const mode = getMode(ints);
        const mean = getMean(ints);
        const median = getMedian(ints);
        return res.json({response: {
        operation: "all",
        mean: mean,
        median: median,
        mode: mode
    }})  
    } catch(e) {
        next(e)
    }
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
    error: err,
    message: err.message
  });
})

app.listen(3000, function () {
  console.log('App on port 3000');
})