# Superhero
Creating simple superhero search list, add your favorite superhero and view it in favorite section

Description of Javascript code

Description of Variables:
	1)superArray: store objects to be displayed on main page
  2)inputBox: capturing search bar result ul
  3)addSearchEvent: capturing search bar id
  4)heroList: capturing list id for rendering various list
  5)mainpage: capturing mainpage id for rendering details page
  6)Fav: capturing favourite id for rendering favourite list
  7)Main: capturing id for rendering main page
  8)favourite: a map to store id, for determining what prints on favourite page, also for toggling between add to favourite and remove from favourite
  9)temp: temporarily storing objects to be rendered on searching

Description of functions:
   1)renderListDetails: to render details page
   2)renderListFavourite: to render favourite page
   3)renderListMainPage: to render main page
   4)renderListSearch: to render autocomplete search list
   5)toggleFavourite: to add to favourite map or to remove from it
   6)renderListSearchDetails: rendering of one of the autocompleted search result is clicked
   7)fetchSuperhero: fetching API, and rendering search output and well as adding to superArray
   8)handleClickListner: handling various clicks
   9)handleInputKeyPress: handling key presses in search bar
   10)saveData: saving data to local storage(superArray and favourite map)
   
