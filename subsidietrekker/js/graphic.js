//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key = "1QWBao3tYFMKudSZtjjtkEU8wIc34Jc4tiWFzq9FChFg";

//"data" refers to the column name with no spaces and no capitals
	//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [ 
    { "data": "overheid", "title": "Overheid" },
    { "data": "regeling", "title": "Regeling" },
    { "data": "ontvanger", "title": "Ontvanger" },
  	{ "data": "beleid", "title": "Beleid" },
  	{ "data": "realisatie", "title": "Realisatie" },
  	{ "data": "jaar", "title": "Jaar" }];
    
    
$(document).ready(function() {

    function initializeTabletopObject(){
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) { 
            writeTable(data); //call up datatables function
            }, 
        simpleSheet: true,
        debug: false
    });
}

    initializeTabletopObject();

    function writeTable(data){
        //select main div and put a table there
		//use bootstrap css to customize table style: http://getbootstrap.com/css/#tables 
        $('#graphic').html('<table id="mySelection" class="display responsive no-wrap"></table>');
        
        

        //initilize the DataTable object and put settings in
        $("#mySelection").DataTable({
        	"responsive": 'true',
            "data": data,
            "columns": columns, 
            "order":[[ 0, 'desc' ]], //order on 1st column
            "pagingType": 'full_numbers' //page numbers
			//uncomment these options to simplify your table
			//"paging": false,
			//"searching": false,
			//"info": false
            });
        }
});
//end of writeTable
