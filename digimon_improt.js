import { create } from "./digimon_export.js";

const digimon = ["가", "나", "다", "라"];
const body = document.body;


create.createValue(digimon,'ul','li');






    // const digimon = ["가", "나", "다", "라"];
    
    // digimon.forEach((value, index, array)=>{
    //   console.log(value);
    //   const body = document.body;
    //   let setUl = document.createElement('ul');
    //   body.appendChild(setUl);
    //   let setLi = document.createElement('li');
    //   setUl.appendChild(setLi);
    //   setLi.textContent = value + '님'
    // });

    