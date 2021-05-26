exports.listAll = (req, res) => {
    res.send("ok") 
}

exports.listOne = (req, res) => { 
    const resp = req.params.id
    res.send(resp) 
}

exports.createOne = (req, res) => { 
    const resp = req.body
    res.send(resp) 
}

exports.updateOne = (req, res) => { 
    const resp = req.params.id
    res.send(resp) 
}
exports.deleteOne = (req, res) => { 
    const resp = req.params.id
    res.send(resp) 
}