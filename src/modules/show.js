const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', () => {
      // Remove the "active" class from all panel objects
      projects.forEach(po => {
        po.classList.remove('active');
      });
      // Add the "active" class to the clicked panel object
      project.classList.add('active');
      // Get the ID of the content div to show
      const contentId = project.getAttribute('id');
      // Hide all content items
      const contentItems = document.querySelectorAll('.content-item');
      contentItems.forEach(ci => {
        ci.style.display = 'none';
      });
      // Show the selected content item
      const selectedContent = document.getElementById(contentId);
      selectedContent.style.display = 'block';
    });
  });
