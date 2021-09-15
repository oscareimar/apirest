const env = require('../config/env')
const jwt = require('jsonwebtoken')
const randomstring = require('randomstring')

exports.setStringToJson_ = (str) => {
    let substr = str.substring(1,str.length - 1)
    substr = substr.split(',')
    let st = substr.map(e => {
        const ar = e.split(':')
        return `"${ar[0]}":"${ar[1]}"`
    })
    const newstr = `{${st.join()}}`
    return JSON.parse(newstr)
}

exports.setStringToJson = (str) => {
    let newStr = str.replace('(','{"').
    replace(')','"}').
    replace(/:/g,'":"').
    replace(/,/g,'","')
    return JSON.parse(newStr)
}

exports.genUrlWithToken = (token) => {
    const randomStr = randomstring.generate({
        length: 100,
        charset: 'alphabetic'
    })
    const url = `${env.URL_SERVER}/${randomStr}/resetPassword?token=${token}`
    return url
}