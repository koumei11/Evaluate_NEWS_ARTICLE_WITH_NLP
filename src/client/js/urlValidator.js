function validator(url) {
    if(url.match(/^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/)) {
        return true
    } else {
        return false
    }
}

module.exports = validator;