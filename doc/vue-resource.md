
var url = ''
var req = this.$resource(url) // request

var headers = resource.headers // headers

// GET someItem/1
resource.get({id: 1}).then((response) => {
this.$set('item', response.json())
})

// POST someItem/1
resource.save({id: 1}, {item: this.item}).then((response) => {
// success callback
}, (response) => {
// error callback
})

// DELETE someItem/1
resource.delete({id: 1}).then((response) => {
// success callback
}, (response) => {
// error callback
})


API Reference

Request

{
// Constructor
constructor(object: options)

// Properties
url (string)
body (any)
headers (Headers)
method (string)
params (object)
timeout (number)
credentials (boolean)
emulateHTTP (boolean)
emulateJSON (boolean)
before (function(Request))
progress (function(Event))

// Methods
getUrl() (string)
getBody() (any)
respondWith(any: body, object: options) (Response)
}
Response

{
// Constructor
constructor(any: body, object: {string: url, object: headers, number: status, string: statusText})

// Properties
url (string)
body (any)
headers (Headers)
ok (boolean)
status (number)
statusText (string)

// Methods
blob() (Promise)
text() (Promise)
json() (Promise)
}
Headers

{
// Constructor
constructor(object: headers)

// Properties
map (object)

// Methods
has(string: name) (boolean)
get(string: name) (string)
getAll() (string[])
set(string: name, string: value) (void)
append(string: name, string: value) (void)
delete(string: name) (void)
forEach(function: callback, any: thisArg) (void)
}

