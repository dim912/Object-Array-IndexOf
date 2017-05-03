### About 

A utility which implements well known indexOf functionality for an object array.

### Functions
 
```
1) firstIndexOf (array, obj, optional : keys )
2) allIndexesOf (array, obj, optional : keys )
3) lastIndexOf (array, obj, optional : keys )
4) nthIndexOf (array, obj, n ,optional : keys )

*keys => please refer 'selective match' section below
```

### Features

##### Full match
All properties of the parameter object, is matched with objects in array to find matching obejects. This is the default behaviour.

##### Selective match
Only a set of properties of the parameter object, is matched with objects in array to find matching obejects. This property set could be given in optional 'keys' argument.

 
```sh
1) firstIndexOf (array, object )
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


//Example Selective match
objectarrayindexof.firstIndexOf(arr, { "a": "5", "b": "2" }, ["b"])
//Result=> 0 . 
//this is equalant to  => objectarrayindexof.firstIndexOf(arr, { "b": "2"})

```