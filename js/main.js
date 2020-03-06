function switchSingleColumnView() 
{
    document.getElementsByClassName("p-gallery")[0].style.height="675%";

    let p1 = document.getElementsByClassName("ps1");

    for(let i=0;i< p1.length; i++)
    {
        p1[i].style.width="100%";
  
    }
    let p2 = document.getElementsByClassName("ps2");
    
    for(let i=0;i< p2.length; i++)
    {
        p2[i].style.width="100%";
    }
    
    let p3 = document.getElementsByClassName("ps3");

    for(let i=0;i< p3.length; i++)
    {
        p3[i].style.width="100%";
    }

    let p4 = document.getElementsByClassName("ps4");

    for(let i=0;i< p4.length; i++)
    {
        p4[i].style.width="100%";
    }


}
function switchMultiColumnView() 
{
    document.getElementsByClassName("p-gallery")[0].style.height="1400px";

    let p1 = document.getElementsByClassName("ps1");

    for(let i=0;i< p1.length; i++)
    {
        p1[i].style.width="33%";
        p1[i].style.minWidth="33%";
    }
    let p2 = document.getElementsByClassName("ps2");
    
    for(let i=0;i< p2.length; i++)
    {
        p2[i].style.width="33%";
        p2[i].style.minWidth="33%";
    }
    
    let p3 = document.getElementsByClassName("ps3");

    for(let i=0;i< p3.length; i++)
    {
        p3[i].style.width="33%";
        p3[i].style.minWidth="33%";
    }

    let p4 = document.getElementsByClassName("ps4");

    for(let i=0;i< p4.length; i++)
    {
        p4[i].style.width="33%";
        p4[i].style.minWidth="33%";
    }


}

function generateRandomFlexboxContent()
{
    let num = 15;
    for(let i=0;i<num;i++)
    {
        let rand = randomNumber(1,4);
        
        let flexboxcontainer = document.querySelector(".p-gallery");
        flexboxcontainer.style.overflow="hidden";

        if(rand === 1)
        {
            let node = document.createElement("div");
            node.className="ps1";
            flexboxcontainer.appendChild(node);

        }
        else if(rand === 2)
        {
            let node = document.createElement("div");
            node.className="ps2";
            flexboxcontainer.appendChild(node);

        }
        else if(rand === 3)
        {
            let node = document.createElement("div");
            node.className="ps3";
            flexboxcontainer.appendChild(node);
            
        }
        else if(rand === 4)
        {
            let node = document.createElement("div");
            node.className="ps4";
            flexboxcontainer.appendChild(node);
            
        }

    }
    // let rand1 = randomNumber(1,4);

    
}

//https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}

window.onload = function()
{
    this.generateRandomFlexboxContent();
}