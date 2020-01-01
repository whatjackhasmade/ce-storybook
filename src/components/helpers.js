export function formatMoney(value) {
  const valueFormatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value)

  return valueFormatted
}

export function generateID(type) {
  const timestamp = Date.now()
  const randomInt = Math.floor(Math.random() * 500000)
  if (!type) return timestamp + "-" + randomInt
  return type + `-${timestamp}-${randomInt}`
}

export function hexToRGB(hex) {
  if (!hex) return "0,0,0"

  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return `${result[1].toString()}, ${result[2].toString()}, ${result[3].toString()}`
}

export function isInternal(url) {
  if (!url) return false
  if (url.startsWith("mailto:")) return false
  if (url.startsWith("tel:")) return false
  if (url.startsWith("http")) return false
  return true
}

export function shadeColour(color, percent) {
  var R = parseInt(color.substring(1, 3), 16)
  var G = parseInt(color.substring(3, 5), 16)
  var B = parseInt(color.substring(5, 7), 16)

  R = parseInt((R * (100 + percent)) / 100)
  G = parseInt((G * (100 + percent)) / 100)
  B = parseInt((B * (100 + percent)) / 100)

  R = R < 255 ? R : 255
  G = G < 255 ? G : 255
  B = B < 255 ? B : 255

  var RR = R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16)
  var GG = G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16)
  var BB = B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16)

  return "#" + RR + GG + BB
}
