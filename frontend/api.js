
import axios from '@/lib/axios'
import useSWR from 'swr'

const url = 'http://localhost:8000/api/v1/';
const userID = localStorage.getItem("userID")

//****************************************************************************************************************************** */
// GET FUNCTIONS 
//****************************************************************************************************************************** */

export function getTrips(){

    const {data:trips} = useSWR('api/v1/?', () => 
        axios
            .get('api/v1/trips')
            .then(res => res.data)
            .catch(error => {
                if (error.response && error.response.status === 400) {                   
                    console.log('Bad Request: ', error.message);                   
                }                   
            })
    ) 
    console.log(trips)
    return trips;

}

export function getDrivers(){

    const {data:drivers} = useSWR('api/v1/?', () => 
        axios
            .get('api/v1/drivers')
            .then(res => res.data)
            .catch(error => {
                if (error.response && error.response.status === 400) {                   
                    console.log('Bad Request: ', error.message);                   
                }                   
            })
    ) 
    console.log(trips)
    return drivers;

}


// export function getLeagues(){

//     const {data:leagues} = useSWR('api/v1/?', () => 
//         axios
//             .get('api/v1/leagues')
//             .then(res => res.data)
//             .catch(error => {
//                 if (error.response && error.response.status === 400) {                   
//                     console.log('Bad Request: ', error.message);                   
//                 }                   
//             })
//     ) 
//     console.log(leagues)
//     return leagues;

// }

// export function getProfile(){

//     const {data:profile} = useSWR('/api/v1/?/'+ userID, () => 
//         axios
//             .get('/api/v1/profile/'+ userID)
//             .then(res => res.data)
//             .catch(error => {
//                 if (error.response && error.response.status === 400) {                   
//                     console.log('Bad Request: ', error.message);                   
//                 }                   
//             })
//     ) 
//     return profile;

// }

//****************************************************************************************************************************** */
// POST FUNCTIONS 
//****************************************************************************************************************************** */

export async function setTrip(data){
    try {
        const payload = {
            // userId: userID, // Set this according to your needs
            data: data,
        };
        const response = await axios.post('http://localhost:8000/api/v1/trips', data);
          // Handle the response if needed

        if (response.status === 200) {
        //   setSuccess('Trip Created successfully!');
        console.log('Trip Created successfully!')
        }  
        return response;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }

}

// export async function setPicks(data,week){

//     try {
//         const payload = {
//             userId: userID, // Set this according to your needs
//             data: data,
//             week: week,
//         };
//         const response = await axios.post('http://localhost:8000/api/v1/?', payload);
//           // Handle the response if needed
//         return response;
//     } catch (error) {
//         console.error('Error sending data:', error);
//         throw error;
//     }

// }



//****************************************************************************************************************************** */
// DELETE FUNCTIONS 
//****************************************************************************************************************************** */
// export async function exitLeague({teamID}){
//     const lID = teamID
//     try {
//         const response = await axios.delete('http://localhost:8000/api/v1/?'+lID);
//           // Handle the response if needed
//         // console.log('Response:', response.data);
//         return response;
//     } catch (error) {
//         console.error('Error sending data:', error);
//         throw error;
//     }

// }