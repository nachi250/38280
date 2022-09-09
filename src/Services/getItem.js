const productsList = [
    {
        id: 1, title:'Iphone 13',
        category: 'Cellphones',
        price: 452.999,
        stock: '6',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_788137-MLA49589748936_042022-F.webp',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {   
        id: 2,
        title:'Mac Book',
        category: 'Computers',
        price: 261.999,
        stock: '7',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_648428-MLA46516517286_062021-F.webp',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    }, 
    {  
        id: 3,
        title:'Apple Watch',
        category: 'Watches',
        price: 140.999,
        stock: '8',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_858093-MLA48096508611_112021-F.webp',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    }
]

export const getItems = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList)            
        }, 3000)
    })
}


