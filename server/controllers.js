const getter = require('../helpers/get.js')
const poster = require('../helpers/post.js')
const putter = require('../helpers/put.js')
const deleter = require('../helpers/deleter.js')

const controllers = {
    get:(req,res) => {
      getter(req.params,(err,result) => {
        if(err) res.status(404).send(err)
        else res.status(200).send(result[0])
      })
    },
    post: (req,res) => {
      poster(req.body,(err,result) => {
        if(err) res.status(404).send(err)
        else res.status(200).send(result)
        })
    },
    put: (req,res) => {
      putter(req.body,(err,result) => {
          if(err) res.status(404).send(err)
          else res.status(200).send(result)
      })
    },
    delete: (req,res) => {
        deleter(req,(err,result) => {
            if(err) res.status(404).send(err)
            else res.status(200).send(result)
        })
    }
}

module.exports = controllers