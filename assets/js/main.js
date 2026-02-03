//Function to toggle between light & dark theme
function changeTheme()
{
    //Get the current theme used in the website
    const currentTheme=document.documentElement.getAttribute("data-theme");

    //If current theme is dark, change it to light & vice-versa
    const newTheme=(currentTheme==="dark")? "light" : "dark";

    //Apply the new theme to the website
    document.documentElement.setAttribute("data-theme", newTheme);

    //Get references to theme toggle icon
    const themeIcon=document.getElementById("theme-icon");

    //Check the new theme and update the icon accordingly
    if(newTheme==="dark")
        themeIcon.src="assets/images/dark-theme-icon.jpg";
    else
        themeIcon.src="assets/images/light-theme-icon.jpg";

    //Store the new theme in local storage to remember user preference
    localStorage.setItem("theme", newTheme);
}

//Apply the stored theme
function applyStoredTheme()
{
    //Check if a theme is stored in local storage
    const storedTheme=localStorage.getItem("theme");

    //If a theme is stored, apply it to the website
    if(storedTheme)
    {
        document.documentElement.setAttribute("data-theme", storedTheme);

        //Update the theme icon based on the stored theme
        const themeIcon=document.getElementById("theme-icon");
        if(storedTheme==="dark")
            themeIcon.src="assets/imagess/dark-theme-icon.jpg";
        else
            themeIcon.src="assets/images/light-theme-icon.jpg";
    }
    else
        document.documentElement.setAttribute("data-theme", "light");
    //If no theme is stored, default to light theme
}

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
            console.log(`Successfully loaded ${elementId} from ${file}`);
            document.getElementById(elementId).innerHTML=html;
        })
        .catch(function(error)
        {
            console.error(`Error loading HTML file: ${error}`);
        });
}

//When the DOM is fully loaded, load header and footer
document.addEventListener("DOMContentLoaded", function()
{
    //Apply stored theme preference
    applyStoredTheme();

    //Load header and footer
    loadHTML('assets/pages/header.html', 'header-placeholder');
    loadHTML('assets/pages/footer.html', 'footer-placeholder');

    // Attach click event to theme icon
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.addEventListener("click", changeTheme);
});
