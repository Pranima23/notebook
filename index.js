
//Selectors
//sideBar
const sideBarButton = document.querySelector("#menu");
let show = true;

//search button
const searchButton = document.querySelector('#search-btn');

//sort button
const sortButton = document.querySelector('#sort-btn');

//toggle between notes and notebook

const notesBtn = document.querySelector('#notes-btn');
const notebooksBtn = document.querySelector('#notebooks-btn');


//Event Listeners
//sideBar
sideBarButton.addEventListener("click", showsideBar);

//search button
searchButton.addEventListener("click", showSearchForm);

//sort button
searchButton.addEventListener("click", showSortOptions);

//toggle between notes and notebook
notesBtn.addEventListener("click", showNotes);
notebooksBtn.addEventListener("click", showNotebooks);



//Functions
//sideBar
function showsideBar(){
    show = !show;
    if (show===true){
        document.getElementById('sidebar').style.display="block";
        document.getElementById('main-content').style.width="75%";
    }else{
        document.getElementById('sidebar').style.display="none";
        document.getElementById('main-content').style.width="95%";
    }

}

//search button
function showSearchForm(){
    document.getElementById('search').style.display="block";
    document.getElementById('search-btn').style.display="none";
}

//sort button
function showSortOptions(){
    
}

//toggle between notes and notebook
function showNotes(){
    document.getElementById('note-toggle').style.display="block";
    document.getElementById('notebook-toggle').style.display="none";
    document.getElementById('notes-btn').style.borderBottom="3px solid rgb(59, 86, 98)";
    document.getElementById('notebooks-btn').style.border="none";


}
function showNotebooks(){
    document.getElementById('notebook-toggle').style.display="block";
    document.getElementById('note-toggle').style.display="none";
    document.getElementById('notebooks-btn').style.borderBottom="3px solid rgb(59, 86, 98)";
    document.getElementById('notes-btn').style.border="none";
}