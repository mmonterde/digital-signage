const Display = require('../models/Display')
const CommonHelper = require('./common_helper')
const console = require('console')

function addWidget(req, res) {
    let widget = req.crudify.result
    return Display.findById(widget.display)
        .then(display => {
            if (display)
                console.log(display)
            display.widgets.push(widget._id)
            display.save().then({}).catch(err => {
                console.log(err)
            })
        })
}

function deleteWidget(req, res) {
    let widget = req.crudify.result
    return Display.findById(widget.display).then(display => {
        if (!display) return res.status(404).json({ error: 'Display not found' })
        display.widgets = display.widgets.filter(function (value) {
            return !widget._id.equals(value)
        })
        return display
            .save()
            .then(() => CommonHelper.broadcastUpdate(res.io))
            .then(() => {
                return res.json({ success: true })
            })
    })
}

module.exports = {
    deleteWidget,
    addWidget
}
