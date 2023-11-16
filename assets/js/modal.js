    
    // Get the modal
    let modal = document.getElementById("myModal");
    let span = document.querySelector(".close"); // Define the span variable

    // Function to open the modal with a given title and content
    function openModal(title, content) {
        let modalTitle = document.getElementById("modalTitle");
        let modalContent = document.getElementById("modalContent");
        modalTitle.innerHTML = title;

        // Clear the previous content
        modalContent.innerHTML = "";

        // Check if content is an array to handle different structures
        if (Array.isArray(content)) {
            // Iterate over the content array and create HTML elements
            content.forEach(list => {
                let listContainer = document.createElement("div");
                let listTitle = document.createElement("h3");
                listTitle.textContent = list.title;
                listContainer.appendChild(listTitle);

                let itemList = document.createElement("ul");
                list.items.forEach(item => {
                    let listItem = document.createElement("li");
                    listItem.textContent = item;
                    itemList.appendChild(listItem);
                });

                listContainer.appendChild(itemList);
                modalContent.appendChild(listContainer);
            });
        } else {
            // If content is not an array, assume it's a simple text
            let textNode = document.createTextNode(content);
            modalContent.appendChild(textNode);
        }

        modal.style.display = "block";

        // Add a class to the html element to apply the blur effect
        document.documentElement.classList.add("modal-open");
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";

        // Remove the class from the html element to remove the blur effect
        document.documentElement.classList.remove("modal-open");
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        closeModal();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }

 