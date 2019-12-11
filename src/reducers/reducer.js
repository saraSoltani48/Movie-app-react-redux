import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIE,
  EDIT_MOVIE,SEARCH_STAR
} from "../actions/ActionType";
const initialState = {
  UserInput: "",
  rate:0,
  MovieList: [
    {
      name: "Joker",
      image: " https://pbs.twimg.com/media/EEkf3uiW4AASpYV.png:large",
      year: "2019",
      rating: 4,
      key: 1,
      trailer:"https://www.youtube.com/embed/Cvaaw42WK4I"
    },
    {
      name: "Van Helsing",
      image:
        "http://fr.web.img6.acsta.net/medias/nmedia/18/35/19/42/18377156.jpg",
      rating: 2,
      year: "2019",
      key: 2,
      trailer:"https://www.youtube.com/embed/3fdRKme00uI"
    },

    {
      name: " Maléfique ",
      image:
        "https://musicart.xboxlive.com/7/37295100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      rating: 1,
      year: "2014",
      key: 3,
      trailer:"https://www.youtube.com/embed/8yBDfD88W3U"
    },

    {
      name: " twilight",
      image:
        " https://www.actualitte.com/images/actualites/images/twilight.jpg",
      rating: 5,
      year: "2008",
      key: 5,
      trailer:"https://www.youtube.com/embed/yi4xJGebtuk"
    }
  ]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, MovieList: state.MovieList.concat(action.payload) };

    case DELETE_MOVIE:
      return {
        ...state,
        MovieList: state.MovieList.filter(el => el.key !== action.payload)
      };

    case SEARCH_MOVIE:
      return { ...state, UserInput: action.payload };

    case EDIT_MOVIE:
      return {
        ...state,
        MovieList: state.MovieList.map(el =>
          el.key === action.payload.key
            ? {
                ...el,
                name: action.payload.name,
                image: action.payload.image,
                year: action.payload.year
              }
            : el
        )
      };

      case SEARCH_STAR:
          return {   ...state,rate:action.payload};
       
 default:
      return state;
  }
}
export default reducer;
