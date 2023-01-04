import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = process.env.REACT_APP_API_KEY!; // this ! is some weird TypeScript thing that somehow reassures the code that this value is never going to be null (or so I understand)

const loader = new Loader({
    apiKey: API_KEY,
    version: "weekly",
    libraries: ["places"],
});

export function getPlaceDetails(placeId: string) {
    return loader
        .load()
        .then(() => {
            const map = new google.maps.Map(
                document.getElementById("map") as HTMLElement
            );
            return map;
        })
        .then((map) => {
            const service = new google.maps.places.PlacesService(map);
            return service;
        })
        .then((service) => {
            const request = {
                placeId,
                fields: [
                    "name",
                    "formatted_address",
                    "photo",
                    "url",
                    "website",
                    // opening_hours, photos (possibly photo is wrong)
                    // price_level, rating, reviews are useful but more expensive fields
                    // *** TO DO *** add a subtle link to "url" field, because Google requests this
                ],
            };
            return new Promise((resolve, reject) => {
                service.getDetails(request, (place, status) => {
                    if (place === null) reject();
                    else {
                        resolve({ ...place, placeId });
                    }
                });
            });
        });
}
