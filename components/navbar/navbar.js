async function loadNavbar() {
    try {
        const response = await fetch('/components/navbar/navbar.html');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const navbarHTML = await response.text();
        document.getElementById('navbar').innerHTML = navbarHTML;
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}
loadNavbar();