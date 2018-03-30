$(document).ready(function(){
    // for(var i = 1; i<=151; i++) {
    //     console.log(i);
    //     $('#pokePics').append('<img src="http://pokeapi.co/media/sprites/pokemon/'+i+'.png" alt="pokemon number '+i+'">');
    // }
    // for(var i = 1; i<=151; i++) {
    //     var pokePicCode ='';
    //     pokePicCode += '<img src="http://pokeapi.co/media/sprites/pokemon/';
    //     pokePicCode += i;
    //     pokePicCode += '.png" data-pokedexNum="'
    //     pokePicCode += i;
    //     pokePicCode += '" alt="pokemon number ';
    //     pokePicCode += i;
    //     pokePicCode += '">';
    //     $('#pokePics').append(pokePicCode);
    // }
    $('#searchBtn').click(function() {
        var movieName = $('#movieName').val();
        console.log(movieName);
        $.get('http://www.omdbapi.com/?apikey=845b8a53&t="'+movieName+'"', function(res) {
        console.log(res);
        $('#movieResults').html('<h1>'+res.Title+'</h1><h2><span style="font-weight: bold">Released:</span> '+res.Released+'</h2><h2><span style="font-weight: bold">Runtime:</span> '+res.Runtime+'</h2><h2><span style="font-weight: bold">Rated:</span> '+res.Rated+'</h2><h2><span style="font-weight: bold">Actors:</span> '+res.Actors+'</h2><h2 id="boxOffice"><span style="font-weight: bold">Box Office:</span> '+res.BoxOffice+'</h2><h2><span style="font-weight: bold">Director:</span> '+res.Director+'</h2><h2><span style="font-weight: bold">Awards:</span> '+res.Awards+'</h2><h2 id="plotShow">See Plot &#9660;</h2><h2 id="plotHide">Hide Plot &#9650;</h2><p id="plotInfo">'+res.Plot+'</p><a href="'+res.Website+'" target="_blank"><button id="movieSite">Visit Movie Website</button>');
        $('#moviePoster').html('<img src="'+res.Poster+'" alt="'+res.Title+'">')
        }, 'json')
        return false;
    })
    $(document).on('click','#plotShow',function(){
        $(this).hide();
        $('#plotHide').show();
        $('#plotInfo').slideDown('slow');
    })
    $(document).on('click','#plotHide',function(){
        $(this).hide();
        $('#plotShow').show();
        $('#plotInfo').slideUp('slow');
    })
    $(document).on('mouseover','button, #plotShow, #plotHide',function(){
        console.log('hover');
        $(this).css('cursor', 'pointer');
    })
    $('#movieName').keypress(function(e){
        if(e.keyCode == 13) {
            $('#searchBtn').click();
            console.log("enter pressed");
        }
    })
    $('#randomBtn').click(function(){
        var randomNum1 = Math.floor((Math.random() * 21));
        var randomNum2 = Math.floor((Math.random() * 5));
        var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
        var vowels = ['a','e','i','o','u'];
        var letters = consonants[randomNum1]+vowels[randomNum2];
        console.log(letters);
        $.get('http://www.omdbapi.com/?apikey=845b8a53&s="'+letters+'"', function(res1) {
        console.log(res1);
        console.log(res1.Search[0].Title);
            ($.get('http://www.omdbapi.com/?apikey=845b8a53&t="'+res1.Search[Math.floor((Math.random() * 10))].Title+'"', function(res) {
            console.log(res);
            $('#movieResults').html('<h1>'+res.Title+'</h1><h2><span style="font-weight: bold">Released:</span> '+res.Released+'</h2><h2><span style="font-weight: bold">Runtime:</span> '+res.Runtime+'</h2><h2><span style="font-weight: bold">Rated:</span> '+res.Rated+'</h2><h2><span style="font-weight: bold">Actors:</span> '+res.Actors+'</h2><h2 id="boxOffice"><span style="font-weight: bold">Box Office:</span> '+res.BoxOffice+'</h2><h2><span style="font-weight: bold">Director:</span> '+res.Director+'</h2><h2><span style="font-weight: bold">Awards:</span> '+res.Awards+'</h2><h2 id="plotShow">See Plot &#9660;</h2><h2 id="plotHide">Hide Plot &#9650;</h2><p id="plotInfo">'+res.Plot+'</p><a href="'+res.Website+'" target="_blank"><button id="movieSite">Visit Movie Website</button>');
            $('#moviePoster').html('<img src="'+res.Poster+'" alt="'+res.Title+'">')
            }, 'json'))
        }, 'json')
        return false;
    })
})