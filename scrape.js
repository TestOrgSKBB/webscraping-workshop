//visit orvis.com
//click on gifts href=orvis.com/gifts
//click on the stocking stuffers
//select for first 10?
//console log results - class TNAIL_PFName

var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://orvis.com/gifts')
  .wait(3000)
  .click("a[href='https://www.orvis.com/store/../stocking-stuffers']")
  .wait(1000)
  // .click("a[href='https://www.orvis.com/store/../stocking-stuffers']")
  .evaluate(function() {
    var giftNames = document.querySelectorAll('.TNAIL_PFName')
    var stockingStuffers = [].slice.call(giftNames)
    return stockingStuffers.map(function(item) {
      return item.innerText
    })
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
    .catch(function(error) {
      console.error('Search failed:', error)
    })

