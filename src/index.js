// write your code here
//import the ramen data
fetch("http://127.0.0.1:3000/ramens")
                    .then(r=>r.json())
                    .then(handleData)

//create the handleData function 
function handleData(e){
    console.log(e)
    const ramenList =e;
   
    //collect the ramen image container 
    const ramenMenu= document.querySelector('#ramen-menu');
    
    //pass the ramen images to the image container
    ramenList.map(ramen=>{ 
        //create an image element
        const ramenImg= document.createElement('img');
        //append img element to ramen image container
        ramenMenu.append(ramenImg)
        ramenImg.src=ramen.image
         //add an eventlistener on the images
        ramenImg.addEventListener('click', handleRamenClick.bind(ramen))
    })    

    function handleRamenClick(e){
        const ramen=this;
        console.log(ramen)
        //grab ramen-image container
        const ramenDisplay= document.querySelector('#ramen-image');
        ramenDisplay.src=ramen.image;
        ramenDisplay.alt=ramen.name;


    }

}