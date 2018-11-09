var recipes = new Object ()

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign (object, {key:value})
}

function updateObjectWithKeyAndValue(object, key, value) {
  var update = Object.assign ({}, object, {key:value})
  return update
}
