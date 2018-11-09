var recipes = new Object ()

function updateObjectWithKeyAndValue(object, key, value) {
  var update = Object.assign ({}, object, {key:value})
  return update, object
}
