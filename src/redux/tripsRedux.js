/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, "i");
    output = output.filter((trip) => pattern.test(trip.name));
  }

  console.log(trips);
  console.log(output);
  // TODO - filter by duration
  console.log(filters);
  console.log(filters.duration);
  if (filters.duration) {
    output = output.filter(
      (trip) =>
        trip.days >= filters.duration.from && trip.days <= filters.duration.to
    );
  }

  // TODO - filter by tags
  if (filters.tags.length > 0) {
    for (let tag of filters.tags) {
      output = output.filter((trip) => trip.tags.includes(tag));
    }
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  console.log(trips.id);
  console.log(tripId);
  const filtered = trips.filter((trip) => trip.id === tripId);

  // TODO - filter trips by tripId

  console.log("filtering trips by tripId:", tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  console.log(countryCode);
  console.log(trips[0].country.code);

  const filtered = trips.filter((trip) => trip.country.code === countryCode);

  // TODO - filter trips by countryCode

  console.log("filtering trips by countryCode:", countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */