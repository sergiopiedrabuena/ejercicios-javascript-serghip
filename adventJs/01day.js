const gifts = ["book", "game", "socks"]

function wrapping(gifts) {
    const wrappedGifts = gifts.map((gift)=>{
      let wrap = "*";
      gift = wrap + gift + wrap;
      let characterCounter = gift.length;
      gift = "\n" + gift + "\n";
      wrap = wrap.repeat(characterCounter);
      gift= wrap + gift + wrap;
      return gift ;
    })        
    return wrappedGifts;
  }

const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */