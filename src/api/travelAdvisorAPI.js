/* eslint-disable consistent-return */
// import axios from "axios";

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(
//       `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
//       {
//         params: {
//           bl_latitude: sw.lat,
//           bl_longitude: sw.lng,
//           tr_longitude: ne.lng,
//           tr_latitude: ne.lat,
//         },
//         headers: {
//           "x-rapidapi-key":
//             "8ecbc871a1msh8184d0fd8d76923p1186fdjsnd4a5dac944c1",
//           "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//         },
//       }
//     );
//     console.log(data);

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '8ecbc871a1msh8184d0fd8d76923p1186fdjsnd4a5dac944c1'
  }
};



export const getPlacesData = async()=>{
  try{
    const {data: {data}} = await axios.get(URL, options);
    return data;
  } catch(error){
    console.log(error)
  }
}

