import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    // *** TO DO *** potentially try to hide API key in .ENV file
    apiKey: "AIzaSyC8YX-J9zTpwgUfrZSBlvuImrn2mj99X8c",
    version: "weekly",
    libraries: ["places"]
});

export const getPlaceDetails = (placeId: string): void => {
    loader.load().then(() => {
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

        service.getDetails(request, (place, status) => {
            console.log(place);
        });
    });
};
