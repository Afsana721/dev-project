// import css file from components folder
import './jon.css'
import img from '../assets/Jon.jpg'

//create a function component 

function Jon() {
  
//create img1 variable to store image link.
const img1 = img;
    return (

    <div className='container'>
    <h1 className="title"><b>About Jon Arbuckle</b></h1>
    <div className='myImage'>
      <img src={img1} alt="jon"  className="image"/>
    </div>
    

    <p className='h-75'>Hi there everyone! My name is <u>Jon Arbuckle</u>. I am 30 years old and I am a cartoonist that lives in Muncie,
    Indiana.I am the proud owner of a cat named Garfield and a dog name Odie. Garfield is fat, lazy and loves to
    eat, while Odie is a dog without a brain. Although my pets drive me crazy, I can't imagine life without them. </p>
    <p>I spend about half my time going to the grocery store to buy enough food to feed Garfield. I have to make sure to 
    buy all of Garfield's favorite foods, or else he'll get grumpy. This includes milk, cheese, bread, harm, 
    chicken wings, potato chips, pasta with marinara sauce, frozen pizzas, and <b>lots and lots</b> of lasanga. 
    When I come home, Garfield usually attacks me and tries to eat everything in the grocery bag before I even 
    have time to put it in the refrigerator. One time he ate everything that I bought in 30 seconds, and I hav 
    to go back to the store to buy more food.<i> I wasn't too happy about that</i>.</p>
   <hr/>

    <h1 className='list'>Garfield's favorite foods</h1>
    {/* dt tag used for description list */}
        <dt>Pepperoni Pizza</dt>
        <dt>Spaghetti with meatballs</dt>
        <dt>Jumbo Shrimp</dt>
        <dt>Lobster with filet mignon</dt>
    	

      <h1 className='list'>Things that Garfield Hates</h1>
        <dt>Mondays</dt>
        <dt>Spiders</dt>
        <dt>Raisins</dt>
        <dt>Jon singing in the shower</dt>
    
  </div>
  )
}

{/*allowed access for outside file.*/}
export default Jon;