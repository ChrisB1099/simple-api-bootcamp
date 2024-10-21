// display image url
    
document.querySelector('button').addEventListener('click', fetchCatPics) 
function fetchCatPics() {

 fetch('https://api.thecatapi.com/v1/images/search')   //you requested information from the url 
.then(res => res.json())                                         //now you are getting that information back
.then(data => {                // [{id: '46b', url: 'https://cdn2.thecatapi.com/images/46b.jpg', width: 430, height: 720}]
    let src = data[0].url
    console.log(data)
    document.querySelector('img').src = src
  
}) 
.catch(err =>{                      
    console.log(`error ${err}`) 
 })
 

}



// const randomIndex =  Math.floor(Math.random() * images.length);
//         const randomImage = images[randomIndex];
//         console.log(randomImage)
