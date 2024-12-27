let currentPage = 1;

function nextPage() {
  // Hide the current page
  const current = document.getElementById(`page${currentPage}`);
  if (current) current.classList.remove('active');

  // Show the next page
  currentPage++;
  const next = document.getElementById(`page${currentPage}`);
  if (next) {
    next.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Show the first page on load
  const firstPage = document.getElementById('page1');
  if (firstPage) firstPage.classList.add('active');
});
