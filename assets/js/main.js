//Load header and footer dynamically
function loadHTML(file, elementId)
{
    fetch(file)
        .then(function(response)
        {
            return response.text();
        })
        .then(function(html)
        {
            console.log("Successfully loaded ${elementId} from ${file}");
            document.getElementById(elementId).innerHTML=html;
        })
        .catch(function(error)
        {
            console.error("Error loading HTML file:", error);
        });
}

//When the DOM is fully loaded, load header and footer
document.addEventListener("DOMContentLoaded", function()
{
    loadHTML('../assets/pages/header.html', 'header-placeholder');
    loadHTML('../assets/pages/footer.html', 'footer-placeholder');
});