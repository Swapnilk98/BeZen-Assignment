const getdata = async (url) => {
  //  let inp=input
  console.log(url);

  try {
    let res = await fetch(url);
    let data = await res.json();
    let dataarr = data.meals;
    // console.log(dataarr)
    return dataarr;
    // console.log(dataarr)
    // showdata(dataarr)
  } catch (err) {
    console.log("error", err);
  }
};

export default getdata;
