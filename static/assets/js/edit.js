
    $('document').ready(function(){

    $('table #editButton').on('click', function(event){

        event.preventDefault();
        
        /*** /document/findById/?id=1   ***/
        var href = $(this).attr('href');

        $.get(href,function(document, status){
            $('#id').val(document.id);
            $('#title').val(document.title);
            $('#size').val(document.size);
        });

    $('#editModal').modal();
    });

    /**** Delete the Records ****/

    $('table #deleteButton').on('click', function(event){
        event.preventDefault();

        var href = $(this).attr('href');
        $('#confirmDeleteButton').attr('href', href);

        $('#deleteModal').modal();
    });
    
});


 /**************************************************/



   $('news').ready(function(){

    $('table #newsEditButton').on('click', function(event){

        event.preventDefault();
        
        /*** /document/findById/?id=1   ***/
        var href = $(this).attr('href');

        $.get(href,function(news, status){
            $('#n_id').val(news.id);
            $('#n_title').val(news.title);
            $('#description').val(news.description);
        });

    $('#newsEditModal').modal();
    });

    /**** Delete the Records ****/

    $('table #deleteButton').on('click', function(event){
        event.preventDefault();

        var href = $(this).attr('href');
        $('#confirmDeleteButton').attr('href', href);

        $('#deleteModal').modal();
    });
    
});



  $('event').ready(function(){

    $('table #eventEditButton').on('click', function(event){

        event.preventDefault();
        
        /*** /document/findById/?id=1   ***/
        var href = $(this).attr('href');

        $.get(href,function(event, status){
            $('#e_id').val(event.id);
            $('#e_title').val(event.title);
            $('#e_description').val(event.description);
            $('#img').val(event.imagesUrl);
        });

    $('#eventEditModal').modal();
    });

    /**** Delete the Records ****/

    $('table #deleteButton').on('click', function(event){
        event.preventDefault();

        var href = $(this).attr('href');
        $('#confirmDeleteButton').attr('href', href);

        $('#deleteModal').modal();
    });
    
});



		/* DONATTION PART */
    $(document).ready(function(){
        $(".donate-btn").click(function(){
            $("#myModal").modal('show');
        });
    });



//  var button = document.querySelector('#button');
//  
//  button.addEventListener('click', showAlert);
//  function showAlert(){
//	  alert('function called!');
//  }