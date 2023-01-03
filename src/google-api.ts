import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: "AIzaSyC8YX-J9zTpwgUfrZSBlvuImrn2mj99X8c",
    version: "weekly",
    libraries: ["places"]
});

export const getPlaceDetails = (): void => {
    loader.load().then(() => {
        const map = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
                center: { lat: -33.866, lng: 151.196 },
                zoom: 15
            }
        );
        const request = {
            placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
            fields: ["name", "place_id", "formatted_address"]
        };
        const service = new google.maps.places.PlacesService(map);

        service.getDetails(request, (place, status) => {
            console.log(place);
            console.log(status);
        });
    });
};
