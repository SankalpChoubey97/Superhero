const publicKey='9ab871748d83ae2eb5527ffd69e034de'//'f8e2d0c87cf3ab71cbcd03c5ba3cbd40';
const privateKey='9c7641f6d428ad860d601b0a0bd4843bf4d5f576';
const ts=1;
let superArray=[];//storing elements for main page
let temp=[];//storing elements for search page
let favourite=new Map();//storing id for favourites
const addSearchEvent=document.getElementById('input-box');//capturing search bar id 
const inputBox=document.getElementById('result-box');//capturing search bar result ul
const heroList = document.getElementById('list'); 
const mainpage= document.getElementById('mainpage');
const Fav=document.querySelectorAll(".favourite");
const Main=document.querySelectorAll(".main");

//adding local storage content to favourite map and superArray
if(localStorage.length>0){
	for(let i=0;i<localStorage.length;i++)
	{
		const key=localStorage.key(i);
		if(key==null)
		{	
		}
		else if(key=='hero')
		{
			let ob=localStorage.getItem("hero");
			superArray=JSON.parse(ob);
		}
		else
		{
			// console.log(localStorage.getItem(key));
			favourite.set(localStorage.getItem(key),true);
		}
	}
}
//for creating details page
function addHeroToDomDetails(hero){
	const li=document.createElement('li');
	const img="https"+hero.thumbnail.path.substring(4)+".jpg";
	const id=""+hero.id;

	li.innerHTML = `<div class="herodescription">
						<div id="image">
							<img src="${img}">
						</div>

						<div id="description">
							<h4>${hero.name}</h4>
							<p>${hero.description}
						</div>

						<div class="fav-info" id="${hero.id}">
							${favourite.has(id) ? 'remove from favourite' : 'add to favourite'}
						</div>
					</div>`;

	mainpage.append(li);

	const ul1=document.createElement('ul');
	ul1.innerHTML=`<div class="comics"><h2>COMICS</h2><div>`;
	if(hero.comics.items.length>0)
	{
		for(let i=0;i<hero.comics.items.length;i++)
		{
			const li=document.createElement('li');
			li.innerHTML=`<div class="comics-desc">${hero.comics.items[i].name}</div>`;
			ul1.append(li);
		}
	}
	else
	{
		const li=document.createElement('li');
		li.innerHTML=`<div class="comics-desc">No result<div>`;
		ul1.append(li);
	}

	mainpage.append(ul1);

	const ul2=document.createElement('ul');
	ul2.innerHTML=`<div class="events"><h2>EVENTS</h2><div>`;
	if(hero.events.items.length>0)
	{
		for(let i=0;i<hero.events.items.length;i++)
		{
			const li=document.createElement('li');
			li.innerHTML=`<div class="events-desc">${hero.events.items[i].name}</div>`;
			ul2.append(li);
		}
	}
	else
	{
		const li=document.createElement('li');
		li.innerHTML=`<div class="events-desc">No result<div>`;
		ul2.append(li);
	}

	mainpage.append(ul2);

	const ul3=document.createElement('ul');
	ul3.innerHTML=`<div class="series"><h2>SERIES</h2><div>`;
	if(hero.series.items.length>0)
	{
		for(let i=0;i<hero.series.items.length;i++)
		{
			const li=document.createElement('li');
			li.innerHTML=`<div class="series-desc">${hero.series.items[i].name}</div>`;
			ul3.append(li);
		}
	}
	else
	{
		const li=document.createElement('li');
		li.innerHTML=`<div class="series-desc">No result<div>`;
		ul3.append(li);
	}

	mainpage.append(ul3);

	const ul4=document.createElement('ul');
	ul4.innerHTML=`<div class="stories"><h2>STORIES</h2><div>`;
	if(hero.stories.items.length>0)
	{
		for(let i=0;i<hero.stories.items.length;i++)
		{
			const li=document.createElement('li');
			li.innerHTML=`<div class="stories-desc">${hero.stories.items[i].name}</div>`;
			ul4.append(li);
		}
	}
	else
	{
		const li=document.createElement('li');
		li.innerHTML=`<div class="stories-desc">No result<div>`;
		ul4.append(li);
	}

	mainpage.append(ul4);
}
//creating favourite page
function addHeroToDomFavourite(hero){
	const li=document.createElement('li');
	const img="https"+hero.thumbnail.path.substring(4)+".jpg";

	li.innerHTML=`
	<div class="herodescription">
		<div class="more_info" id="${hero.id}">
		more info
		</div>
		<div id="image">
			<img src="${img}">
		</div>

		<div id="description">
			<h4>${hero.name}</h4>
			<p>${hero.description.substring(0,50)}....
		</div>

		<div class="fav-fav" id="${hero.id}">remove from favourite</div>
	</div>`

	heroList.append(li);
}
//creating main page
function addHeroToDomMain(hero){
	const li=document.createElement('li');
	const img="https"+hero.thumbnail.path.substring(4)+".jpg";
	const id=""+hero.id;
	li.innerHTML=`
	<div class="herodescription">
		<div class="more_info" id="${hero.id}">
		more info
		</div>
		<div id="image">
			<img src="${img}">
		</div>

		<div id="description">
			<h4>${hero.name}</h4>
			<p>${hero.description.substring(0,50)}....
		</div>

		<div class="fav-main" id="${hero.id}">${favourite.has(id) ? 'remove from favourite' : 'add to favourite'}</div>
	</div>`

	heroList.append(li);
}
//creating page if search button is clicked
function addHeroToDomSearch(hero){
	const li=document.createElement('li');
	const img="https"+hero.thumbnail.path.substring(4)+".jpg";
	const id=""+hero.id;
		li.innerHTML=`
			<div class="herodescription">
				<div class="more_info" id="${hero.id}">
				more info
				</div>
				<div id="image">
					<img src="${img}">
				</div>

				<div id="description">
					<h4>${hero.name}</h4>
					<p>${hero.description.substring(0,50)}....
				</div>

				<div class="fav-search" id="${hero.id}">${favourite.has(id) ? 'remove from favourite' : 'add to favourite'}</div>
			</div>`
	
	
	heroList.append(li);
}
//comparing if text1 and text2 is same
function compare(text1,text2){
	for(let i=0;i<text1.length;i++){
		if(text1.charAt(i).toLowerCase()!=text2.charAt(i).toLowerCase())
			return false;
	}

	return true;
}
//checking if the current name is present in superArray
function checkifPresent(text){
	for(let i=0;i<superArray.length;i++)
	{
		if(compare(text,superArray[i].name))
			return true;
	}
	return false;
}
//if name is present in superArray, do nothing else add it in superArray
function renderListMain(text){
	if(!checkifPresent(text))
	{
		for(let i=0;i<temp.length;i++)
		{
			superArray.push(temp[i]);
		}
		return;
	}
}
//for rendering details page
function renderListDetails(id){
	heroList.innerHTML="";
	mainpage.innerHTML="";

	for(let i=0;i<superArray.length;i++)
	{
		if(id==superArray[i].id)
			addHeroToDomDetails(superArray[i],id);
	}
}
//rendering favourite page
function renderListFavourite(){
	heroList.innerHTML="";
	mainpage.innerHTML="";

	for(let i=0;i<superArray.length;i++)
	{
		const id=""+superArray[i].id
		if(favourite.has(id))
			addHeroToDomFavourite(superArray[i]);
	}

}
//rendering main page
function renderListMainPage(){
	heroList.innerHTML="";
	mainpage.innerHTML="";

	for(let i=0;i<superArray.length;i++)
	{
		addHeroToDomMain(superArray[i]);
	}

}
//rendering autocomplete search list
function renderListSearch(){
	inputBox.innerHTML='';

	let ul=document.createElement('ul');
	for(let i=0;i<temp.length;i++)
	{
		const li=document.createElement('li');
		li.innerHTML=`<div class="search-result" id="${temp[i].id}">${temp[i].name}</div>`;
		ul.append(li);
	}

	inputBox.append(ul);
}
//adding or removing from favourite map
function toggleFavourite(id){
	if(favourite.has(id))
	{
		favourite.delete(id);
	}
	else
	{
		favourite.set(id,true);
	}
	console.log(favourite);
}
//rendering if item is searched
function renderListSearchDetails(){
	heroList.innerHTML="";
	mainpage.innerHTML="";

	for(let i=0;i<temp.length;i++)
	{
		addHeroToDomSearch(temp[i]);
	}
}
//fetching API, adding to superArray, and adding to temp array
function fetchSuperhero(text){
	let url=`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${text}&ts=1&apikey=f8e2d0c87cf3ab71cbcd03c5ba3cbd40&hash=19db955bfedf2c43dadf8e8a708d6421`;
	fetch(url).then(function (response) {
		return response.json();
	}).then(function(data){
		temp=data.data.results;
		renderListMain(text);
		if(temp.length>0)
		{
			renderListSearch();
		}
		else
		{
			inputBox.innerHTML='';
		}
		saveData();
	})
}

//handling clicks
function handleClickListner(e){
	const target=e.target;
	console.log(target);

	if(target.className=='main')
	{
		Fav.forEach(element => {
    		element.style.backgroundColor = "#333" ;
		});
		Main.forEach(element => {
   			 element.style.backgroundColor = "#ff7474";
		});
		inputBox.innerHTML='';
		renderListMainPage();
		return;
	}
	if(target.className=='favourite')
	{
		Fav.forEach(element => {
    		element.style.backgroundColor = "#ff7474" ;
		});
		Main.forEach(element => {
   			 element.style.backgroundColor = "#333";
		});
		inputBox.innerHTML='';
		renderListFavourite();
		return;
	}
	if(target.className=='fav-search')
	{
		const id=target.id;
		toggleFavourite(id);
		renderListSearchDetails();
		saveData();
		return;
	}
	if(target.className=='fav-info')
	{
		const id=target.id;
		toggleFavourite(id);
		renderListDetails(id);
		saveData();
		return;
	}
	if(target.className=='fav-main')
	{
		const id=target.id;
		toggleFavourite(id);
		renderListMainPage();
		saveData();
		return;
	}
	if(target.className=='fav-fav')
	{
		const id=target.id;
		toggleFavourite(id);
		renderListFavourite();
		saveData();
		return;
	}
	if(target.className=='more_info')
	{
		Fav.forEach(element => {
    		element.style.backgroundColor = "#333" ;
		});
		Main.forEach(element => {
   			 element.style.backgroundColor = "#333";
		});
		const id=target.id;
		renderListDetails(id);
		return;
	}
	if(target.className=='search-result')
	{
		Fav.forEach(element => {
    		element.style.backgroundColor = "#333" ;
		});
		Main.forEach(element => {
   			 element.style.backgroundColor = "#333";
		});
		heroList.innerHTML="";
		mainpage.innerHTML="";
		const id=target.id;
		renderListDetails(id);
		addSearchEvent.value=target.innerHTML;
		inputBox.innerHTML='';
		return;
	}
	if(target.className=='search')
	{
		Fav.forEach(element => {
    		element.style.backgroundColor = "#333" ;
		});
		Main.forEach(element => {
   			 element.style.backgroundColor = "#333";
		});
		renderListSearchDetails(target);
		inputBox.innerHTML='';
		return;
	}
	if(target.id=='input-box'){
		Fav.forEach(element => {
    		element.style.backgroundColor = "#333" ;
		});
		Main.forEach(element => {
   			 element.style.backgroundColor = "#333";
		});
		if(addSearchEvent.value.length>2)
		{
			temp=[];
			fetchSuperhero(addSearchEvent.value);
			saveData();
		}
		return;
	}
}
//handling keypress
function handleInputKeyPress(e)
{
	const text=e.target.value;
	console.log(e.target);
	if(text.length==0)
	{
		inputBox.innerHTML='';
	}
	if(e.key=='Enter')
	{
		Fav.forEach(element => {
    		element.style.backgroundColor = "#333" ;
		});
		Main.forEach(element => {
   			 element.style.backgroundColor = "#333";
		});
		renderListSearchDetails(text);
		inputBox.innerHTML='';
		return;
	}
	if(text.length>2)
	{
		temp=[];
		fetchSuperhero(text);
		return;
	}
}

document.addEventListener('click',handleClickListner);
addSearchEvent.addEventListener('keyup',handleInputKeyPress);

//saving superArray and favourite map to local storage, whenever any changes are made to it, also removing id from local storage in case of removing from favourite
function saveData(){
	let ob1=JSON.stringify(superArray);
	// console.log(ob1);
	localStorage.setItem("hero",ob1);
	let i=1;
	for(let [key,value] of favourite){
		const str=""+key;
		localStorage.setItem(str,key);
		i++;
	}
	for(let j=0;j<localStorage.length;j++)
	{
		const key=localStorage.key(j);
		if(key=='hero')
			continue;
		else
		{
			if(favourite.has(key))
				continue;
			else
				localStorage.removeItem(key);
		}
	}
}
// https://gateway.marvel.com/v1/public/characters?nameStartsWith=iron&ts=1&apikey=f8e2d0c87cf3ab71cbcd03c5ba3cbd40&hash=19db955bfedf2c43dadf8e8a708d6421