### About 

A utility which implements well known indexOf functionality for an object array.

### Functions
 
```sh
1) firstIndexOf
2) allIndexesOf
3) lastIndexOf
4) nthIndexOf
```

### Installation

```sh
npm install objectarrayindexof
```
### How to use

```javascript
var objectarrayindexof = require('objectarrayindexof')
//object array
var arr = [ 
    {
        "a":"1",
        "b":"2"
    },
    {
        "a":"5",
        "b":"2"
    },
    {
        "a":"1",
        "b":"2"
    },
    {
        "b":"7"
    },
    {
        "a":"3",
        "b":"7"
    }
   ]
 
//Example - firstIndexOf method
objectarrayindexof.firstIndexOf(arr, { "a": "5", "b": "2" })
//Return => 1
objectarrayindexof.firstIndexOf(arr, { "a": "1" })
//Return => 0
objectarrayindexof.firstIndexOf(arr, { "b": "8" }) 
//Return => -1

//Example - allIndexesOf method
objectarrayindexof.allIndexesOf(arr, { "a": "5", "b": "2" }) 
//Return => [1]
objectarrayindexof.allIndexesOf(arr, { "a": "1" })
//Return => [0,2]
objectarrayindexof.allIndexesOf(arr, { "b": "8" }) 
//Return => []

//Example - lastIndexOf method
objectarrayindexof.lastIndexOf(arr, { "a": "5", "b": "2" })
//Return => 1
objectarrayindexof.lastIndexOf(arr, { "a": "1" })
//Return => 2
objectarrayindexof.lastIndexOf(arr, { "b": "8" }) 
//Return => -1

//Example - nthIndexOf method
objectarrayindexof.lastIndexOf(arr, { "a": "5", "b": "2" },2)
//Return => -1
objectarrayindexof.lastIndexOf(arr, { "b": "2" })
//Return => 2
objectarrayindexof.lastIndexOf(arr, { "b": "8" }) 
//Return => -1


```