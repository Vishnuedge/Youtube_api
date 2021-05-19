//By clicking search button this function triggers:

var searchDisplay =async ()=>{
    //Value entered stored inside var:
    var searchValue = document.getElementById('search').value;
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&key=AIzaSyBcJCuEpBdABCMekejZP7IIZtumdaN6QBM&type=video&q=${searchValue}`
 

     try {
    
        var response = await fetch(url);
        var result = await response.json();
        var values =  result;
        var container = document.querySelector('.container')
        var row = document.createElement('div');
        row.setAttribute('class','row')
        //Iterating
        values.items.forEach(element => {
            //dynamically creating card
            var col = document.createElement('div');
            col.setAttribute('class','col-sm-12 col-md-6 col-lg-3 col-xl-3 p-3 d-flex align-items-stretch');
            var card = document.createElement('div');
            card.setAttribute('class','card');
            card.setAttribute('style','width: 19rem');
            var division = document.createElement('div');
            division.id = 'videos'
            var cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            var title = document.createElement('h5');
            title.setAttribute('class','card-title')
            title.innerText = element.snippet.title; 
             
            var channelTitle = document.createElement('h6');
            channelTitle.innerText = element.snippet.channelTitle;
            channelTitle.setAttribute('class','text-muted') 

            var publishTime = document.createElement('p');
            publishTime.innerText = element.snippet.publishTime;
            publishTime.setAttribute('class','text-muted')

             cardBody.append(title,channelTitle,publishTime);  
             
            card.append(division,cardBody);
            col.append(card);
            row.append(col);
            container.appendChild(row);
            division.innerHTML = ` <iframe  src="http://www.youtube.com/embed/${element.id.videoId}" frameborder="0" allowfullscreen> </iframe> `;
            
        });
        
        
    }catch (error) {
        console.log(error);
    }

}