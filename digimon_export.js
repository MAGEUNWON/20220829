




// const digimon = ["가", "나", "다", "라"];

const body = document.body;
// create.createValue(digimon,'ul','li');

function a(arr){
  const mapValue = arr.map(element => {
    return element + "님";
  });
  console.log(mapValue);
  
};
// * 님 붙이는거 map 으로 한 방법 

const create = {
  createValue: (Arr, parent, child) => {
    let ParentValue = document.createElement(parent);
    const mapValue = Arr.map(element => `${element}님`);
    mapValue.forEach((value)=>{
      let childValue = document.createElement(child);
      childValue.textContent = `${value}`
      ParentValue.appendChild(childValue); 
    })
    body.appendChild(ParentValue);
  //   Arr.forEach((value)=>{
  //     let childValue = document.createElement(child);
  //     childValue.textContent = mapValue;
  //     // childValue.textContent = `${value}님`
  //     ParentValue.appendChild(childValue);
  //   })
  //   body.appendChild(ParentValue);
  //   // ParentValue.appendChild(child);

  // }
  }
};

// export {create};  
export  {create};


// digimon.forEach((value, index, array) => {
//   console.log(value);

//   let setUl = document.createElement('ul');
//   body.appendChild(setUl);
//   let setLi = document.createElement('li');
//   setUl.appendChild(setLi);
//   setLi.textContent = value + '님'
// });

