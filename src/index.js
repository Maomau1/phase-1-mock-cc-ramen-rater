// write your code here
//import the ramen data
fetch("http://127.0.0.1:3000/ramens")
                    .then(r=>r.json())
                    .then(handleData)

//collect the ramen image container 
const ramenMenu= document.querySelector('#ramen-menu');
//create the handleData function 
function handleData(e){
    console.log(e)
    const ramenList =e;  
    //pass the ramen images to the image container
    containRamen(ramenList)   
}
function handleRamenClick(e){
    const ramen=this;
    console.log(ramen)
    //grab ramen-image container
    const ramenDisplay= document.querySelector('#ramen-image');
    const ramenName= document.querySelector('#ramen-name');
    const restaurant= document.querySelector('#restaurant');
    const rating= document.querySelector('#rating-display');
    const comment= document.querySelector('#comment-display');

    ramenDisplay.src=ramen.image;
    ramenDisplay.alt=ramen.name;
    ramenName.textContent=ramen.name;
    restaurant.textContent=ramen.restaurant;
    rating.textContent=ramen.rating;
    comment.textContent=ramen.comment
}
function containRamen(list){
    list.map(ramen=>{ 
    //create an image element
    const ramenImg= document.createElement('img');
    //append img element to ramen image container
    ramenMenu.append(ramenImg)
    ramenImg.src=ramen.image
     //add an eventlistener on the images
    ramenImg.addEventListener('click', handleRamenClick.bind(ramen))
    })    
}
//work on the form to add a ramen version
    //grab the different elements
    const form=document.querySelector('#new-ramen');
    form.addEventListener('submit',handleFormSubmit);

    const newRamens=[];
    function handleFormSubmit(e){
        e.preventDefault();
        const name=form.querySelector('#new-name');
        const restaurant= form.querySelector('#new-restaurant');
        const image= form.querySelector('#new-image');
        const rating= form.querySelector('#new-rating');
        const comment= form.querySelector('#new-comment');
        const ramenObj={
            name:name.value,
            restaurant:restaurant.value,
            image:image.value,
            rating:rating.value,
            comment:comment.value,
        }
        newRamens.push(ramenObj);
        containRamen(newRamens)
    }