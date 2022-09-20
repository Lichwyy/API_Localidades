$(document).ready(function(e){
    

    $.ajax({
        type:"get",
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        data: {orderBy: "nome"},
        datatype:"json",
        
        success: function(response){
            $.each(response, function(indexInArray, valueOfElement){
                var option = "<option>"+valueOfElement.sigla+"</option>"
                $("#UF").append(option)
            });
        }
    });


    $("#UF").change(function(e){
        e.preventDefault()

        var uf = $("#UF").val()

        if(uf == "Estados"){
            $("#cidade").empty()

            var option = "<option> Cidades </option>"
            $("#cidade").append(option)
            return
        }
        

        
        $("#cidade").empty();
        


        $.ajax({
            type:"get",
            datatype:"json",
            data: {orderBy: "nome"},
            url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf+"/municipios",
            success: function(response){
                $.each(response, function(indexInArray, valueOfElement){
                var option = "<option>"+valueOfElement.nome+"</option>"
                $("#cidade").append(option)

                });
            }
            
        });


        
    })
})