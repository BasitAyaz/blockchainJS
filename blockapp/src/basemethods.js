let setDate = (dt) => {
  return `${dt.getDate()}-${
    dt.getMonth() + 1
  }-${dt.getFullYear()} T ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
};




export {setDate}