import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = process.env.REACT_APP_API_KEY!;

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

export function initAutocomplete() {
    return loader.load().then(() => {
        const input = document.getElementById(
            "autocomplete"
        ) as HTMLInputElement;
        const options = {
            types: [
                "restaurant",
                "cafe",
                "bakery",
                "meal_delivery",
                "meal_takeaway",
            ],
            componentRestrictions: { country: ["UK"] },
            fields: ["place_id"],
        };

        const autocomplete = new google.maps.places.Autocomplete(
            input,
            options
        );

        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            window.sessionStorage.googlePlaceId = JSON.stringify(
                place.place_id
            );
        });
    });
}
