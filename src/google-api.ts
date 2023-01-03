import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    // *** TO DO *** potentially try to hide API key in .ENV file
    apiKey: "AIzaSyC8YX-J9zTpwgUfrZSBlvuImrn2mj99X8c",
    version: "weekly",
    libraries: ["places"]
});

export function getPlaceDetails(placeId: string) {
    // const placeData: any[] = [];
    return new Promise((resolve, reject) => {
        return loader.load().then(() => {
            const map = new google.maps.Map(
                document.getElementById("map") as HTMLElement
            );
            const request = {
                placeId,
                fields: [
                    "name",
                    "formatted_address",
                    "photo",
                    "url",
                    "website"
                    // opening_hours, photos (possibly photo is wrong)
                    // price_level, rating, reviews are useful but more expensive fields
                    // *** TO DO *** add a subtle link to "url" field, because Google requests this
                ]
            };
            const service = new google.maps.places.PlacesService(map);

            return service.getDetails(request, (place, status) => {
                // placeData.push(place);
                // console.log(placeData, "placeData");
                // console.log(placeData.length);
                // console.log(placeData[0]);
                resolve(place);
            });

            // service.getDetails(
            //     {
            //         placeId,
            //         fields: ["photos"]
            //     },
            //     (place,status) => {
            //         resolve(place);
            //     }
            // );
        });
    });
}

//     service.getDetails(request, (place, status) => {
//         placeData.push(place);
//         console.log(placeData, "placeData");
//         console.log(placeData.length);
//         console.log(placeData[0]);
//         return placeData;
//     });
//     // check if there's a promise version of getDetails
//     // if not, refactor function so whole thing uses callbacks

//     // return placeData;
// });
//
//
//
//
//
// const getPlaceDetails = (placeId) => {
// return new Promise((resolve, reject) => {
//     let placesService = new window.google.maps.places.PlacesService(
//         placeId
//     );
//     placesService.getDetails(
//         {
//             placeId,
//             fields: ["photos"]
//         },
//         (place,status) => {
//             resolve(place);
//         }
//     );
// });
