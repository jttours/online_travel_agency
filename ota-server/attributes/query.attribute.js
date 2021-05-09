function fieldsQuery(req, res, next) {
    if (req.query.fields) {
        req.customQueryField = req.query.fields.split(',').map(e => e.trim());
    }
    next();
}


module.exports = {
    fieldsQuery
}