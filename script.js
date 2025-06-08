document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('livros-modal');
    const modalTitle = document.querySelector('#livros-modal-content h2 span');
    const listaLivros = document.getElementById('lista-livros');
    const closeModal = document.querySelector('.close-modal a');
    
    // Fetch the JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Process each row in the table
            document.querySelectorAll('.aula').forEach(row => {
                const aulaId = row.getAttribute('data-aula-id');
                const livroCell = row.querySelector('.ver-livros');
                
                // Check if there's data for this aula
                if (data[aulaId] && data[aulaId].length > 0) {
                    // Add "Ver livros" link only if there are books
                    livroCell.innerHTML = '<a href="#">Ver livros</a>';
                    livroCell.style.cursor = 'pointer';
                    
                    // Add click event
                    livroCell.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        // Set modal title
                        modalTitle.textContent = row.cells[0].textContent;
                        
                        // Clear previous content
                        listaLivros.innerHTML = '';
                        
                        // Add each book to the modal
                        data[aulaId].forEach(livro => {
                            const livroDiv = document.createElement('div');
                            livroDiv.className = 'livro';
                            
                            livroDiv.innerHTML = `
                                <h3>${livro.title}</h3>
                                <p><strong>Autor:</strong> ${livro.author}</p>
                                <p><strong>Mencionado em:</strong> ${livro.time}</p>
                                <p class="quote"><strong>Citação:</strong> <span>${livro.quote}</span></p>
                            `;
                            
                            listaLivros.appendChild(livroDiv);
                        });
                        
                        // Show the modal
                        modal.classList.remove('display-none');
                        document.body.classList.add('scroll-none');
                    });
                } else {
                    // Leave empty if no books
                    livroCell.innerHTML = '';
                }
            });
            
            // Close modal when clicking the close link
            closeModal.addEventListener('click', function(e) {
                e.preventDefault();
                modal.classList.add('display-none');
                document.body.classList.remove('scroll-none');
            });
            
            // Close modal when clicking outside the content
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.add('display-none');
                    document.body.classList.remove('scroll-none');
                }
            });
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
            // Hide all "Ver livros" links if JSON fails to load
            document.querySelectorAll('.ver-livros').forEach(cell => {
                cell.innerHTML = '';
            });
        });
});