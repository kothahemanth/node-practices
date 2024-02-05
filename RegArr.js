const myNameIs = {
    name : 'KVH',
    
    regularFunction: function() {
        console.log(this.name)
    },

    arrowFunction: () => {
        console.log(this.name)
    },
}

myNameIs.regularFunction()
myNameIs.arrowFunction()