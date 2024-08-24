function addLink() {
    // Get the values from the input fields
    const linkUrl = document.getElementById('link-url').value;
    const linkText = document.getElementById('link-text').value;

    // Create a new anchor element
    const newLink = document.createElement('a');
    newLink.href = linkUrl;
    newLink.className = 'link';
    newLink.textContent = linkText;

    // Add the new link to the links container
    const linksContainer = document.querySelector('.links');
    linksContainer.appendChild(newLink);

    // Clear the input fields
    document.getElementById('link-url').value = '';
    document.getElementById('link-text').value = '';
}
