//IIFE

(function ()
{

    function Start() {
        console.log("App Started!");
        
        $("a.delete").on("click", function (event)
        {
            if (!confirm("Are you sure?"))
            {
                event.preventDefault();
            }
    })
    }
    
    window.addEventListener("load", Start);
})();